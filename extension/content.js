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
  var SITE = "https://pipfisher.github.io/rift-explique/";
  var TTL = 24 * 60 * 60 * 1000;
  var INGAME_DELAY = 0;    // en jeu : affichage immédiat, le panneau est fixe
  var GRID_DELAY = 110;    // sur la base de cartes : petite attente anti-clignotement

  var INGAME = /(^|\.)play\.riftatlas\.com$/.test(location.hostname);
  var DELAY = 110;

  DELAY = INGAME ? INGAME_DELAY : GRID_DELAY;

  // Les réglages vivent dans fr.json : on peut les ajuster à distance,
  // sans réinstaller ni recharger l'extension.
  function applyConfig() {
    var c = DATA && DATA.config;
    if (!c) return;
    if (typeof c.ingameDelay === "number" && INGAME) DELAY = c.ingameDelay;
    if (typeof c.gridDelay === "number" && !INGAME) DELAY = c.gridDelay;
    if (typeof c.panelWidth === "number" && panel) panel.style.width = c.panelWidth + "px";
    if (c.side === "right" && panel) panel.classList.remove("rbfr-left");
    if (c.side === "left" && panel) panel.classList.add("rbfr-left");
  }

  var DATA = null;
  var panel = null, panelCode = null, timer = null;

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

  async function load() {
    var cached = await fromCache();
    if (cached) DATA = cached;
    else {
      try { DATA = await fetch(chrome.runtime.getURL("fr.json")).then(function (r) { return r.json(); }); }
      catch (e) { DATA = { byCode: {}, byName: {} }; }
    }
    fetch(REMOTE, { cache: "no-cache" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (fresh) { if (fresh && fresh.byCode) { DATA = fresh; store(fresh); applyConfig(); refreshMarks(); } })
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
    return c ? { code: c, name: img.alt } : null;
  }

  function cardAt(target, x, y) {
    if (!target || !target.closest) return null;

    var a = target.closest('a[href*="/card/"]');
    if (a) {
      var img0 = a.querySelector("img");
      return { code: codeFromHref(a.getAttribute("href")), name: img0 ? img0.alt : null };
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

  function markResources(s) {
    return s
      .replace(/(\d+) Énergie/g, '<b class="rbfr-r rbfr-r-e">$1&nbsp;Énergie</b>')
      .replace(/(\d+) (Essences? runiques?)/g, '<b class="rbfr-r rbfr-r-p">$1&nbsp;$2</b>')
      .replace(/([+\-−]\d+) Puissance/g, '<b class="rbfr-r rbfr-r-m">$1&nbsp;Puissance</b>')
      .replace(/(\d+) XP/g, '<b class="rbfr-r rbfr-r-x">$1&nbsp;XP</b>');
  }

  // n'habille que le texte hors parenthèses ; le rappel passe en retrait
  function lineHTML(line) {
    var out = "", i = 0, n = line.length;
    while (i < n) {
      var open = line.indexOf("(", i);
      if (open === -1) { out += markResources(markKeywords(esc(line.slice(i)))); break; }
      var close = line.indexOf(")", open);
      if (close === -1) { out += markResources(markKeywords(esc(line.slice(i)))); break; }
      out += markResources(markKeywords(esc(line.slice(i, open))));
      var terminal = line.slice(close + 1).trim() === "";
      out += '<span class="rbfr-rem' + (terminal ? " rbfr-rem-b" : "") + '">' +
        esc(line.slice(open + 1, close)) + "</span>";
      i = close + 1;
    }
    out = out.replace(/\.(\s*)(<span class="rbfr-rem)/g, "$1$2");
    out = out.replace(/(<\/b>)\.\s*$/, "$1");
    return out;
  }

  function frTextHTML(tx) {
    if (!tx) return "";
    return tx.split("\n").map(function (line) {
      var t = line.trim();
      if (!t) return "";
      return '<span class="rbfr-line' + (/^[—-]\s/.test(t) ? " rbfr-bullet" : "") + '">' +
        lineHTML(t) + "</span>";
    }).join("");
  }

  function panelHTML(t, code, name) {
    if (!t) {
      return '<div class="rbfr-head">Riftbound en français</div>' +
        '<div class="rbfr-name rbfr-vo">' + esc(name || code || "") + '</div>' +
        '<p class="rbfr-missing">Cette carte n\'est pas encore traduite.</p>' +
        '<a class="rbfr-link" href="' + SITE + '" target="_blank" rel="noopener">Le Rift Expliqué ↗</a>';
    }
    return '<div class="rbfr-head">Traduction française' +
        (code ? '<span class="rbfr-code">' + esc(code) + '</span>' : '') + '</div>' +
      (t.n ? '<div class="rbfr-name">' + esc(t.n) + '</div>'
           : '<div class="rbfr-name rbfr-vo">' + esc(t.en || name || code) + '<span> · nom non traduit</span></div>') +
      '<div class="rbfr-text">' + frTextHTML(t.tx) + '</div>' +
      (t.note ? '<p class="rbfr-note">' + esc(t.note) + '</p>' : '') +
      '<a class="rbfr-link" href="' + SITE + '" target="_blank" rel="noopener">Le Rift Expliqué ↗</a>';
  }

  function ensurePanel() {
    if (panel) return panel;
    panel = document.createElement("div");
    panel.className = "rbfr-panel" + (INGAME ? " rbfr-docked rbfr-left" : "");
    panel.style.display = "none";
    document.documentElement.appendChild(panel);
    return panel;
  }

  function place(x, y) {
    if (INGAME) {
      // Le simulateur affiche son propre zoom de la carte à droite, et le
      // journal de partie occupe déjà ce côté : on reste donc à gauche.
      ensurePanel().classList.add("rbfr-left");
      return;
    }
    var p = ensurePanel();
    var w = p.offsetWidth || 380, h = p.offsetHeight || 220;
    var left = x + 22, top = y - h / 2;
    if (left + w > window.innerWidth - 12) left = x - w - 22;
    if (left < 12) left = 12;
    if (top < 12) top = 12;
    if (top + h > window.innerHeight - 12) top = Math.max(12, window.innerHeight - h - 12);
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
    place(x, y);
  }

  function hide() {
    if (timer) { clearTimeout(timer); timer = null; }
    if (panel) panel.style.display = "none";
    panelCode = null;
  }

  /* ---------------- pastille FR ---------------- */

  function refreshMarks() {
    if (!DATA) return;
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
    if (INGAME || !/^\/card\//.test(location.pathname)) return;
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
    var card = cardAt(e.target, e.clientX, e.clientY);
    if (!card || !card.code) {
      if (panel && panel.style.display !== "none") hide();
      return;
    }
    var x = e.clientX, y = e.clientY;
    if (panel && panel.style.display !== "none" && panelCode === card.code) { place(x, y); return; }
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

  load().then(function () {
    applyConfig();
    refreshMarks();
    injectDetail();
    setInterval(refreshMarks, 2000);
  });
})();
