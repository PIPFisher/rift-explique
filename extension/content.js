/* ============================================================
   Riftbound en français — script de contenu
   ------------------------------------------------------------
   Deux surfaces :
   · riftatlas.com          base de cartes → panneau au curseur
   · play.riftatlas.com     simulateur     → panneau ancré à droite
   Les traductions viennent du site (mise à jour automatique),
   avec la copie embarquée en secours.
   ============================================================ */
(function () {
  "use strict";

  var REMOTE = "https://pipfisher.github.io/rift-explique/fr.json";
  var VERSION = "1.13.0";

  // Reprise après un rechargement de l'extension. Chrome laisse l'ancien
  // script tourner dans les onglets déjà ouverts : le service worker nous
  // réinjecte par-dessus, et on doit alors neutraliser ses restes.
  // Le garde-fou de version évite de s'installer deux fois pour rien.
  if (window.__rbfrVersion === VERSION) return;
  window.__rbfrVersion = VERSION;
  try {
    document.querySelectorAll(".rbfr-panel, .rbfr-toast, .rbfr-inline")
      .forEach(function (n) { n.remove(); });
  } catch (e) {}

  var SITE = "https://pipfisher.github.io/rift-explique/";
  var TTL = 24 * 60 * 60 * 1000;
  var INGAME_DELAY = 0;    // en jeu : affichage immédiat
  var GRID_DELAY = 110;    // sur la base de cartes : petite attente anti-clignotement

  var INGAME = /(^|\.)play\.riftatlas\.com$/.test(location.hostname);
  var DELAY = 110;
  // "auto" : le panneau se place à côté de la carte survolée.
  // "left"/"right" : il reste ancré à ce bord de l'écran. Réglable via fr.json.
  var SIDE = "auto";
  // Touche d'activation : « ² », au-dessus de Tab sur un clavier français.
  // Isolée, atteignable de la main gauche, et revendiquée par aucun site.
  // Modifiable via config.toggleKey dans fr.json (code clavier, ex. "KeyT").
  var TOUCHE = "Backquote";
  var ACTIF = true;

  DELAY = INGAME ? INGAME_DELAY : GRID_DELAY;

  // Les réglages vivent dans fr.json : on peut les ajuster à distance,
  // sans réinstaller ni recharger l'extension.
  function applyConfig() {
    var c = DATA && DATA.config;
    if (!c) return;
    if (typeof c.ingameDelay === "number" && INGAME) DELAY = c.ingameDelay;
    if (typeof c.gridDelay === "number" && !INGAME) DELAY = c.gridDelay;
    if (typeof c.panelWidth === "number" && panel) panel.style.width = c.panelWidth + "px";
    // "auto" : le panneau suit la carte survolée. "left"/"right" : il reste
    // collé à ce bord de l'écran, comme avant.
    if (c.side === "auto" || c.side === "left" || c.side === "right") SIDE = c.side;
    if (typeof c.toggleKey === "string" && c.toggleKey) TOUCHE = c.toggleKey;
  }

  /* ---------------- interrupteur clavier ---------------- */

  // Le panneau se coupe et se rallume d'une touche, pour ne pas encombrer la
  // vue quand on n'en a pas besoin. L'état est retenu d'une partie à l'autre.
  function litEtat() {
    return new Promise(function (resolve) {
      try {
        chrome.storage.local.get(["actif"], function (r) { resolve(!(r && r.actif === false)); });
      } catch (e) { resolve(true); }
    });
  }

  function annonce(texte, eteint) {
    var t = document.querySelector(".rbfr-toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "rbfr-toast";
      document.documentElement.appendChild(t);
    }
    t.textContent = texte;
    t.classList.toggle("rbfr-toast-off", !!eteint);
    t.classList.remove("rbfr-toast-go");
    void t.offsetWidth;            // relance l'animation même en rafale
    t.classList.add("rbfr-toast-go");
  }

  function bascule() {
    ACTIF = !ACTIF;
    try { chrome.storage.local.set({ actif: ACTIF }); } catch (e) {}
    if (!ACTIF) {
      hide();
      // on retire aussi les pastilles et liserés : « désactivé » veut dire
      // que rien de l'extension ne reste à l'écran
      document.querySelectorAll(".rbfr-has").forEach(function (n) { n.classList.remove("rbfr-has"); });
      document.querySelectorAll(".rbfr-img-has").forEach(function (n) { n.classList.remove("rbfr-img-has"); });
      var inl = document.querySelector(".rbfr-inline");
      if (inl) inl.style.display = "none";
    } else {
      refreshMarks();
      var inl2 = document.querySelector(".rbfr-inline");
      if (inl2) inl2.style.display = "";
    }
    annonce(ACTIF ? "Traductions activées" : "Traductions désactivées", !ACTIF);
  }

  function saisieEnCours(el) {
    if (!el) return false;
    var t = (el.tagName || "").toUpperCase();
    return t === "INPUT" || t === "TEXTAREA" || t === "SELECT" || el.isContentEditable;
  }

  document.addEventListener("keydown", function (e) {
    if (e.code !== TOUCHE) return;
    // on ne vole pas la touche pendant qu'on écrit (le chat du simulateur),
    // ni quand elle sert de raccourci au navigateur
    if (saisieEnCours(e.target) || saisieEnCours(document.activeElement)) return;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    e.preventDefault();
    bascule();
  }, true);

  var DATA = null;
  var panel = null, panelCode = null, timer = null, recalc = null;

  /* ---------------- données ---------------- */

  function fromCache() {
    return new Promise(function (resolve) {
      try {
        chrome.storage.local.get(["fr", "at"], function (r) {
          resolve(r && r.fr && r.at && Date.now() - r.at < TTL ? r.fr : null);
        });
      } catch (e) { resolve(null); }
    });
  }

  function store(data) {
    try { chrome.storage.local.set({ fr: data, at: Date.now() }); } catch (e) {}
  }

  // Structure de fr.json attendue par cette version du script.
  // 2 : chaque entrée porte son domaine (d), pour choisir la bonne rune.
  var SCHEMA = 2;
  function utilisable(d) { return d && d.byCode && (d.schema || 0) >= SCHEMA; }

  async function load() {
    // La copie embarquée suit forcément la structure de ce script : elle sert
    // de base tant qu'une copie distante plus récente n'a pas été validée.
    var locale = null;
    try { locale = await fetch(chrome.runtime.getURL("fr.json")).then(function (r) { return r.json(); }); }
    catch (e) {}
    var cached = await fromCache();
    DATA = utilisable(cached) ? cached : (locale || { byCode: {}, byName: {} });
    fetch(REMOTE, { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (fresh) {
        // une copie distante d'une structure plus ancienne est ignorée
        if (utilisable(fresh)) { DATA = fresh; store(fresh); applyConfig(); refreshMarks(); }
      })
      .catch(function () {});
  }

  /* ---------------- identification d'une carte ---------------- */

  function codeFromHref(href) {
    var m = (href || "").match(/\/card\/([A-Za-z0-9-]+)/);
    return m ? m[1].toUpperCase() : null;
  }

  // le simulateur sert ses visuels sous /cards/original/OGN-004.webp
  function codeFromImg(img) {
    var s = img.currentSrc || img.src || (img.dataset && img.dataset.cardArtSource) || "";
    var m = s.match(/\/cards\/[^/]*\/([A-Z]{2,4}-[A-Za-z0-9]+)\.(webp|png|jpg|jpeg)/i);
    return m ? m[1].toUpperCase() : null;
  }

  function lookup(code, name) {
    if (!DATA) return null;
    if (code && DATA.byCode[code]) return DATA.byCode[code];
    if (code) {
      var base = code.replace(/[A-Za-z]$/, "").toUpperCase();   // OGN-004A → OGN-004
      if (DATA.byCode[base]) return DATA.byCode[base];
    }
    if (name && DATA.byName[name.toLowerCase()]) return DATA.byName[name.toLowerCase()];
    return null;
  }

  // Ne renvoie une carte QUE si le curseur est réellement sur elle.
  // Le simulateur pose ses visuels en pointer-events:none : ils n'apparaissent
  // donc pas sous le curseur. On retombe alors sur une recherche géométrique,
  // bornée à l'image dont le rectangle contient vraiment le point.
  function inside(rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom && rect.width > 20;
  }

  function cardFromImg(img) {
    var c = codeFromImg(img);
    // on garde l'élément : le panneau se cale sur la carte, pas sur le curseur
    return c ? { code: c, name: img.alt, el: img } : null;
  }

  function cardAt(target, x, y) {
    if (!target || !target.closest) return null;

    var a = target.closest('a[href*="/card/"]');
    if (a) {
      var img0 = a.querySelector("img");
      return { code: codeFromHref(a.getAttribute("href")), name: img0 ? img0.alt : null, el: img0 || a };
    }

    var direct = target.closest("img");
    if (direct) {
      var c0 = cardFromImg(direct);
      if (c0) return c0;
    }

    if (typeof x !== "number") return null;

    if (document.elementsFromPoint) {
      var stack = document.elementsFromPoint(x, y);
      for (var i = 0; i < stack.length && i < 10; i++) {
        if (stack[i].tagName === "IMG") {
          var c1 = cardFromImg(stack[i]);
          if (c1) return c1;
        }
      }
    }

    // recherche géométrique : on remonte de quelques niveaux et on garde
    // la plus petite image de carte dont le rectangle contient le curseur
    var node = target, best = null, bestArea = Infinity;
    for (var lvl = 0; lvl < 6 && node && node !== document.body; lvl++) {
      var imgs = node.querySelectorAll ? node.querySelectorAll('img[src*="/cards/"]') : [];
      for (var k = 0; k < imgs.length; k++) {
        var r = imgs[k].getBoundingClientRect();
        if (inside(r, x, y)) {
          var area = r.width * r.height;
          if (area < bestArea) { bestArea = area; best = imgs[k]; }
        }
      }
      if (best) break;
      node = node.parentElement;
    }
    return best ? cardFromImg(best) : null;
  }

  /* ---------------- panneau ---------------- */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ---------------- mise en forme du texte -------------------
     Trois niveaux de lecture :
       · le mot-clé, en pastille colorée selon sa famille ;
       · l'effet, en taille normale — c'est ce que fait la carte ;
       · le rappel de règles entre parenthèses, plus petit et en retrait. */

  // Familles de couleurs relevées sur les cartes officielles :
  //   t  vert sapin  #147864  Action, Réaction, Légion, Accélération, Dégainer, Équiper
  //   e  vert olive  #96B432  Agonie, Caché, Amplifié, Protection, Chasse, Niveau, Temporaire
  //   c  magenta     #C8326E  Assaut, Bouclier, Tank
  //   n  gris        #787878  Vision, Amplification
  var KW_FAM = [
    ["t", ["Accélération", "Répétition", "Embuscade", "Réaction", "Dégainer", "Action", "Légion", "Caché", "Flux"]],
    ["e", ["Amplifiées", "Amplifiés", "Amplifiée", "Amplifié", "Temporaire", "Protection", "Vengeance", "Agonie", "Chasse", "Niveau", "Vision", "Gank"]],
    ["c", ["Arrière-ligne", "Bouclier", "Assaut", "Tank"]],
    ["n", ["Expert en armes", "Amplification", "Prédiction", "Puissantes", "Puissante", "Équiper", "Brûler", "Unique"]]
  ];
  var KW_VAL = /^(Assaut|Bouclier|Protection|Chasse|Niveau|Brûler|Prédiction)$/;

  var KW = (function () {
    var all = [];
    KW_FAM.forEach(function (f) { f[1].forEach(function (w) { all.push([w, f[0]]); }); });
    all.sort(function (a, b) { return b[0].length - a[0].length; });
    var q = function (s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };
    var fam = {};
    all.forEach(function (x) { fam[x[0]] = x[1]; });
    return {
      re: new RegExp("(^|[^A-Za-zÀ-ÿ])(" + all.map(function (x) { return q(x[0]); }).join("|") + ")(?![A-Za-zÀ-ÿ])", "g"),
      fam: fam
    };
  })();

  function markKeywords(s) {
    return s.replace(KW.re, function (_, pre, word, off, whole) {
      var label = word;
      if (KW_VAL.test(word)) {
        var m = whole.slice(off + pre.length + word.length).match(/^ (\d+)/);
        if (m) label = word + " " + m[1];
      }
      return pre + '<b class="rbfr-k rbfr-k-' + KW.fam[word] + '">' + label + "</b>" +
        (label !== word ? "\u0000" : "");
    }).replace(/\u0000 \d+/g, "");
  }

  /* ---------- symboles de ressources ----------
     Les cartes officielles écrivent les coûts en pictogrammes, pas en mots.
     On fait de même : l'œil saute le coût et va droit à l'effet. */
  // Les pictogrammes officiels de Riot, servis depuis leurs serveurs : mêmes
  // formes et mêmes couleurs que sur les cartes imprimées, rien n'est recopié.
  var GLYPH = 'https://assetcdn.rgpub.io/public/live/riot-shared/' +
              'player-experiences/riot-glyphs/rb/latest/';
  var RUNE_FILE = {
    Fury: 'rune_fury.svg', Body: 'rune_body.svg', Mind: 'rune_mind.svg',
    Calm: 'rune_calm.svg', Chaos: 'rune_chaos.svg', Order: 'rune_order.svg'
  };
  var DOM_FR = {
    Fury: 'Furie', Body: 'Corps', Mind: 'Esprit', Calm: 'Calme',
    Chaos: 'Chaos', Order: 'Ordre', Colorless: 'Incolore'
  };
  function glyph(file, alt, cls) {
    return '<img class="rbfr-g ' + cls + '" src="' + GLYPH + file + '" ' +
      'alt="' + esc(alt) + '" title="' + esc(alt) + '" loading="lazy" decoding="async">';
  }
  function gEnergie(n) {
    var v = parseInt(n, 10);
    // Riot dessine le chiffre dans la pastille, de 0 à 12 ; au-delà on écrit le mot.
    if (isNaN(v) || v < 0 || v > 12) return '<b class="rbfr-r">' + n + '&nbsp;Énergie</b>';
    return glyph('energy_' + v + '.svg', v + ' Énergie', 'rbfr-g-e');
  }
  function gRune(n, partout, doms) {
    doms = doms || [];
    var file, quoi;
    if (partout) {
      file = 'rune_rainbow.svg'; quoi = "de n'importe quel domaine";
    } else if (doms.length === 1 && RUNE_FILE[doms[0]]) {
      file = RUNE_FILE[doms[0]];
      quoi = 'du domaine ' + (DOM_FR[doms[0]] || doms[0]);
    } else {
      // carte bi-domaine : le coût se paie dans l'un ou l'autre, on reste neutre
      file = 'card_type_rune.svg';
      quoi = doms.length
        ? 'du domaine de la carte (' + doms.map(function (d) { return DOM_FR[d] || d; }).join(' ou ') + ')'
        : 'du domaine de la carte';
    }
    // un pictogramme = une essence runique, comme sur les cartes
    if (n > 4) return glyph(file, n + ' essences runiques, ' + quoi, 'rbfr-g-p') +
      '<b class="rbfr-r">×' + n + '</b>';
    var out = '';
    for (var i = 0; i < n; i++) out += glyph(file, '1 essence runique, ' + quoi, 'rbfr-g-p');
    return out;
  }
  function gPuissance() { return glyph('might.svg', 'Puissance', 'rbfr-g-m'); }
  function gEpuiser() { return glyph('exhaust.svg', 'Épuiser', 'rbfr-g-x'); }

  // Un coût en essence runique peut être « de n'importe quel domaine », et la
  // précision est parfois détachée du chiffre (« 1 Essence runique de plus, de
  // n'importe quel domaine »), voire rejetée dans un rappel entre parenthèses.
  // On repère donc la portée sur la ligne entière, avant tout découpage.
  var RUNE_RE = /(\d+) Essences? runiques?/g;
  function scanRunes(line) {
    var hits = [], m;
    RUNE_RE.lastIndex = 0;
    while ((m = RUNE_RE.exec(line))) hits.push({ start: m.index, end: RUNE_RE.lastIndex });
    return hits.map(function (h, i) {
      var stop = i + 1 < hits.length ? hits[i + 1].start : line.length;
      var suite = line.slice(h.end, Math.min(stop, h.end + 48));
      return /^[^.;!?]*n'importe quel domaine/.test(suite);
    });
  }

  function markResources(s, doms, etat) {
    return s
      // le coût d'activation est un pictogramme sur les cartes, pas un mot
      .replace(/Épuiser\s*:/g, function () { return gEpuiser() + ' :'; })
      .replace(/(\d+) Énergie/g, function (_, n) { return gEnergie(n); })
      // « de plus / de moins » se garde, la mention du domaine est absorbée
      .replace(/(\d+) Essences? runiques?( de (?:plus|moins))?(,? \(?de n'importe quel domaine\)?,?)?/g,
        function (_, n, suite, partout) {
          var libre = !!partout;
          if (etat && etat.runes) { libre = etat.runes[etat.i] || libre; etat.i++; }
          return gRune(parseInt(n, 10), libre, doms) + (suite || '');
        })
      .replace(/([+\-−]?\d+) Puissance/g,
        function (_, n) { return '<b class="rbfr-r">' + n + '</b>' + gPuissance(); })
      .replace(/(\d+) XP/g, '<b class="rbfr-r">$1&nbsp;XP</b>');
  }

  // n'habille que le texte hors parenthèses ; le rappel passe en retrait
  function lineHTML(line, doms) {
    // les fragments sont traités de gauche à droite : le compteur suit les
    // coûts en essence runique dans le même ordre que le repérage ci-dessus
    var etat = { runes: scanRunes(line), i: 0 };
    var out = "", i = 0, n = line.length;
    while (i < n) {
      var open = line.indexOf("(", i);
      if (open === -1) { out += markResources(markKeywords(esc(line.slice(i))), doms, etat); break; }
      var close = line.indexOf(")", open);
      if (close === -1) { out += markResources(markKeywords(esc(line.slice(i))), doms, etat); break; }
      out += markResources(markKeywords(esc(line.slice(i, open))), doms, etat);
      var terminal = line.slice(close + 1).trim() === "";
      // le rappel garde ses mots, mais reçoit les mêmes pictogrammes
      out += '<span class="rbfr-rem' + (terminal ? " rbfr-rem-b" : "") + '">' +
        markResources(esc(line.slice(open + 1, close)), doms, etat) + "</span>";
      i = close + 1;
    }
    out = out.replace(/\.(\s*)(<span class="rbfr-rem)/g, "$1$2");
    out = out.replace(/(<\/(?:b|span)>)\.\s*$/, "$1");
    return out;
  }

  function frTextHTML(tx, doms) {
    if (!tx) return "";
    return tx.split("\n").map(function (line) {
      var t = line.trim();
      if (!t) return "";
      return '<span class="rbfr-line' + (/^[—-]\s/.test(t) ? " rbfr-bullet" : "") + '">' +
        lineHTML(t, doms) + "</span>";
    }).join("");
  }

  function panelHTML(t, code, name) {
    if (!t) {
      return '<div class="rbfr-head">Riftbound en français</div>' +
        '<div class="rbfr-name rbfr-vo">' + esc(name || code || "") + '</div>' +
        '<p class="rbfr-missing">Cette carte n\'est pas encore traduite.</p>' +
        '<a class="rbfr-link" href="' + SITE + '" target="_blank" rel="noopener">Le Rift Expliqué ↗</a>' +
      '<span class="rbfr-credit">traduction française par Fisher</span>';
    }
    return '<div class="rbfr-head">Traduction française' +
        (code ? '<span class="rbfr-code">' + esc(code) + '</span>' : '') + '</div>' +
      (t.n ? '<div class="rbfr-name">' + esc(t.n) + '</div>'
           : '<div class="rbfr-name rbfr-vo">' + esc(t.en || name || code) + '<span> · nom non traduit</span></div>') +
      '<div class="rbfr-text">' + frTextHTML(t.tx, t.d) + '</div>' +
      // le bonus donné à l'unité équipée est un champ de la carte, pas du
      // texte de règles : aucune traduction ne pouvait le reprendre
      ((t.mb != null || t.ef) ?
        '<div class="rbfr-equip">' +
        (t.mb != null ? '<div class="rbfr-equip-h"><b class="rbfr-r">' + esc(t.mb) + '</b>' +
          gPuissance() + ' <span>à l\'unité équipée</span></div>' : '') +
        (t.ef ? '<div class="rbfr-text">' + frTextHTML(t.ef, t.d) + '</div>' : '') +
        '</div>' : '') +
      (t.note ? '<p class="rbfr-note">' + esc(t.note) + '</p>' : '') +
      '<a class="rbfr-link" href="' + SITE + '" target="_blank" rel="noopener">Le Rift Expliqué ↗</a>' +
      '<span class="rbfr-credit">traduction française par Fisher</span>';
  }

  function ensurePanel() {
    if (panel) return panel;
    panel = document.createElement("div");
    // en jeu, le panneau est plus grand et plus lisible, où qu'il se place
    panel.className = "rbfr-panel" + (INGAME ? " rbfr-ingame" : "");
    panel.style.display = "none";
    document.documentElement.appendChild(panel);
    return panel;
  }

  function place(x, y, el) {
    var p = ensurePanel();

    // Mode ancré : le panneau reste collé à un bord de l'écran. Pratique sur
    // un petit écran, pénible sur un grand — l'œil traverse toute la largeur.
    if (INGAME && (SIDE === "left" || SIDE === "right")) {
      p.classList.add("rbfr-docked");
      p.classList.toggle("rbfr-left", SIDE === "left");
      return;
    }
    p.classList.remove("rbfr-docked", "rbfr-left");

    var w = p.offsetWidth || 380, h = p.offsetHeight || 220;
    var m = 18, b = 12;
    var VW = window.innerWidth, VH = window.innerHeight;

    // On s'ancre sur la carte et non sur le curseur : le panneau ne tremble
    // pas quand la souris bouge à l'intérieur de la carte. À défaut de carte
    // mesurable, on retombe sur le curseur.
    var r = el && el.getBoundingClientRect ? el.getBoundingClientRect() : null;
    if (r && (!r.width || !r.height)) r = null;
    if (!r) r = { left: x, right: x, top: y, bottom: y, width: 0, height: 0 };

    // Toujours la même position : collé au bord GAUCHE de la carte, aligné sur
    // son haut. Le côté gauche parce que Rift Atlas pose systématiquement son
    // propre agrandissement à droite de la carte, à une vingtaine de pixels :
    // en se partageant les côtés, les deux restent lisibles côte à côte au
    // lieu de se disputer la même place.
    // Seule exception : pas la place à gauche, on passe à droite.
    var left = r.left - w - m;
    if (left < b) left = r.right + m;
    left = Math.min(Math.max(left, b), Math.max(b, VW - w - b));

    // aligné sur le haut de la carte : le titre apparaît toujours à la même
    // hauteur qu'elle, seule la longueur du texte varie vers le bas
    var top = Math.min(Math.max(r.top, b), Math.max(b, VH - h - b));

    p.style.left = left + "px";
    p.style.top = top + "px";
  }

  function show(card, x, y) {
    var p = ensurePanel();
    if (panelCode !== card.code) {
      p.innerHTML = panelHTML(lookup(card.code, card.name), card.code, card.name);
      panelCode = card.code;
    }
    p.style.display = "block";
    place(x, y, card.el);
    // Les pictogrammes se chargent après coup et rallongent le panneau. Sa
    // hauteur ne compte que pour le recadrage en bas d'écran : on repasse une
    // fois, brièvement, au cas où il dépasserait.
    if (recalc) clearTimeout(recalc);
    recalc = setTimeout(function () {
      if (panel && panel.style.display !== "none" && panelCode === card.code) place(x, y, card.el);
    }, 150);
  }

  function hide() {
    if (timer) { clearTimeout(timer); timer = null; }
    if (recalc) { clearTimeout(recalc); recalc = null; }
    if (panel) panel.style.display = "none";
    panelCode = null;
  }

  /* ---------------- pastille FR ---------------- */

  function refreshMarks() {
    if (!DATA || !ACTIF) return;
    document.querySelectorAll('a[href*="/card/"]').forEach(function (a) {
      var has = !!lookup(codeFromHref(a.getAttribute("href")), (a.querySelector("img") || {}).alt);
      a.classList.toggle("rbfr-has", has);
    });
    if (INGAME) {
      document.querySelectorAll('img[src*="/cards/"]').forEach(function (img) {
        var has = !!lookup(codeFromImg(img), img.alt);
        img.classList.toggle("rbfr-img-has", has);
      });
    }
  }

  /* ---------------- fiche détaillée (base de cartes) ---------------- */

  function injectDetail() {
    if (!ACTIF || INGAME || !/^\/card\//.test(location.pathname)) return;
    var h1 = document.querySelector("h1");
    if (!h1) return;
    var code = codeFromHref(location.pathname);
    var old = document.querySelector(".rbfr-inline");
    if (old) old.remove();
    var box = document.createElement("section");
    box.className = "rbfr-inline";
    box.innerHTML = panelHTML(lookup(code, h1.innerText), code, h1.innerText);
    h1.parentElement.insertBefore(box, h1.nextSibling);
  }

  /* ---------------- événements ---------------- */

  document.addEventListener("mousemove", function (e) {
    if (!ACTIF) return;
    var card = cardAt(e.target, e.clientX, e.clientY);
    if (!card || !card.code) {
      if (panel && panel.style.display !== "none") hide();
      return;
    }
    var x = e.clientX, y = e.clientY;
    if (panel && panel.style.display !== "none" && panelCode === card.code) { place(x, y, card.el); return; }
    if (timer) clearTimeout(timer);
    if (!DELAY) { show(card, x, y); return; }
    timer = setTimeout(function () { show(card, x, y); }, DELAY);
  }, true);

  document.addEventListener("scroll", hide, true);
  document.addEventListener("mouseleave", hide);
  window.addEventListener("blur", hide);

  var lastPath = location.pathname;
  new MutationObserver(function () {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      hide();
      setTimeout(function () { injectDetail(); refreshMarks(); }, 400);
    }
  }).observe(document.documentElement, { subtree: true, childList: true });

  load().then(async function () {
    ACTIF = await litEtat();
    applyConfig();
    refreshMarks();
    injectDetail();
    setInterval(refreshMarks, 2000);
    // repère de version : permet de voir d'un coup d'œil, dans la console,
    // si Chrome tourne bien sur les fichiers du dossier et non sur une copie
    // gardée en mémoire depuis le dernier chargement.
    try {
      console.log("[Riftbound FR] " + VERSION +
        " · placement : " + (SIDE === "auto" ? "à gauche de la carte" : "ancré à " + SIDE) +
        " · " + Object.keys((DATA && DATA.byCode) || {}).length + " entrées · touche " + TOUCHE + (ACTIF ? "" : " (éteint)"));
    } catch (e) {}
  });
})();
