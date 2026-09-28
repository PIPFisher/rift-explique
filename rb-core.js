/* ============================================================
   data.js — chargement des cartes, symboles, lexique
   ============================================================ */
window.RB = (function(){
  "use strict";

  var cards = [], byId = {}, byName = {}, meta = {};

  /* ---------- traductions d'interface ---------- */
  var TYPE_FR = {
    "Unit":"Unité", "Spell":"Sort", "Rune":"Rune", "Gear":"Équipement",
    "Battlefield":"Champ de bataille", "Legend":"Légende"
  };
  var DOM_FR = {
    "Fury":"Furie", "Body":"Corps", "Mind":"Esprit", "Calm":"Calme",
    "Chaos":"Chaos", "Order":"Ordre", "Colorless":"Incolore"
  };
  var RAR_FR = {
    "Common":"Commune", "Uncommon":"Peu commune", "Rare":"Rare",
    "Epic":"Épique", "Showcase":"Vitrine"
  };
  var SET_FR = {
    "Origins":"Origines", "Proving Grounds":"Terrain d'entraînement",
    "Spiritforged":"Armes Spirituelles", "Unleashed":"Unleashed", "Vendetta":"Vendetta"
  };

  /* ---------- lexique des mots-clés ----------
     Texte de rappel officiel (VO) traduit en français. */
  var KEYWORDS = {
    "Action":      {fr:"Action",        txt:"Se joue pendant ton tour ou dans un affrontement, uniquement quand la chaîne est vide."},
    "Reaction":    {fr:"Réaction",      txt:"Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve."},
    "Hidden":      {fr:"Cachée",        txt:"Se cacher maintenant pour 1 Pouvoir (de n'importe quel domaine), afin de la révéler plus tard pour 0. Elle gagne Réaction."},
    "Tank":        {fr:"Tank",          txt:"Les dégâts de combat doivent lui être assignés en premier."},
    "Backline":    {fr:"Arrière-garde", txt:"Les dégâts de combat doivent lui être assignés en dernier."},
    "Deflect":     {fr:"Déviation",     txt:"L'adversaire doit payer 1 Pouvoir de plus, de n'importe quel domaine, pour la choisir avec un sort ou une capacité."},
    "Ganking":     {fr:"Gank",          txt:"Peut se déplacer d'un champ de bataille à un autre."},
    "Assault":     {fr:"Assaut",        txt:"+1 Puissance (ou plus) tant qu'elle est attaquante."},
    "Shield":      {fr:"Bouclier",      txt:"+2 Puissance (ou plus) tant qu'elle est défenseuse."},
    "Accelerate":  {fr:"Accélération",  txt:"Tu peux payer un coût additionnel pour qu'elle arrive prête au lieu d'épuisée."},
    "Empower":     {fr:"Ascendant",     txt:"Paie le coût indiqué pour l'ascendre. Utilisable seulement si elle ne l'est pas déjà. L'état est permanent."},
    "Empowered":   {fr:"Ascendu",       txt:"Effet actif uniquement tant que l'unité est ascendue."},
    "Equip":       {fr:"Équiper",       txt:"Coût à payer pour attacher un Équipement à une unité que tu contrôles."},
    "Weaponmaster":{fr:"Maître d'armes",txt:"Quand tu la joues, tu peux lui attacher un de tes Équipements pour 1 Pouvoir de moins, même s'il est déjà attaché ailleurs."},
    "Deathknell":  {fr:"Glas",          txt:"Effet qui se déclenche quand l\'unité meurt ; certaines cartes exigent en plus qu\'elle soit ascendue."},
    "Temporary":   {fr:"Temporaire",    txt:"Meurt au début de la phase initiale de son contrôleur, avant le score."},
    "Legion":      {fr:"Légion",        txt:"Effet obtenu si tu as déjà joué une autre carte ce tour-ci."},
    "Vision":      {fr:"Vision",        txt:"Regarde la première carte de ton deck principal. Tu peux la recycler."},
    "Predict":     {fr:"Prédiction",    txt:"Regarde la première carte de ton deck principal. Tu peux la recycler."},
    "Hunt":        {fr:"Chasse",        txt:"Quand elle conquiert ou tient un champ de bataille, gagne 2 XP."},
    "Repeat":      {fr:"Répétition",    txt:"Tu peux payer le coût additionnel pour répéter l'effet du sort. Les choix se font au lancement."},
    "Ambush":      {fr:"Embuscade",     txt:"Peut être jouée en Réaction sur un champ de bataille où tu as des unités."},
    "Stun":        {fr:"Étourdissement",txt:"L'unité n'inflige pas de dégâts de combat ce tour-ci."},
    "Flow":        {fr:"Flux",          txt:"Tu peux la jouer depuis ta défausse pour son coût de Flux. Elle est ensuite bannie."},
    "Buff":        {fr:"Amélioration",  txt:"Donne un bonus de +1 Puissance si l'unité n'en a pas déjà un. Une seule à la fois."},
    "Mighty":      {fr:"Puissante",     txt:"Une unité est Puissante tant qu'elle a 5 Puissance ou plus."},
    "Quick-Draw":  {fr:"Dégainage",     txt:"L'Équipement a Réaction ; quand tu le joues, attache-le à une unité que tu contrôles."},
    "Level":       {fr:"Niveau",        txt:"Effet obtenu tant que tu as assez d'XP (le nombre indiqué)."},
    "Add":         {fr:"Ajouter",       txt:"Ajoute la ressource indiquée à ta réserve. Ces capacités ne peuvent pas être contrées par une réaction."},
    "Vengeance":   {fr:"Vengeance",     txt:"Effet lié à la mort d'une de tes unités."},
    "Burn":        {fr:"Brûlure",       txt:"Met le nombre indiqué de cartes du dessus de ton deck principal dans ta défausse."},
    "Unique":      {fr:"Unique",        txt:"Exception à la règle des 3 exemplaires : ton deck ne peut en contenir qu'un seul."},
    "Recycle":     {fr:"Recycler",      txt:"Remet la carte sous ton deck principal. Recycler une rune donne du Pouvoir de son domaine."}
  };

  /* ---------- rendu des symboles ---------- */
  function esc(s){
    return String(s == null ? "" : s)
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  // [1] énergie chiffrée · [A] énergie · [C] puissance · [S] might · [T] épuiser · [>] flèche
  function symbols(text){
    if(!text) return "";
    var out = esc(text);
    out = out.replace(/\[(\d+)\]/g, function(_, n){
      return '<span class="sym sym-e" title="' + n + ' Énergie">' + n + '</span>';
    });
    out = out.replace(/\[A\]/g, '<span class="sym sym-p" title="1 Pouvoir, de n&#39;importe quel domaine"><b>P</b></span>');
    out = out.replace(/\[C\]/g, '<span class="sym sym-p" title="1 Pouvoir, du domaine de la carte"><b>P</b></span>');
    out = out.replace(/\[S\]/g, '<span class="sym sym-m" title="Puissance (valeur de combat) de l\'unité">M</span>');
    out = out.replace(/\[T\]|\[E\]/g, '<span class="sym sym-t" title="Épuiser">↻</span>');
    out = out.replace(/\[&gt;\]/g, ' → ');
    out = out.replace(/\[([A-Za-zÀ-ÿ'\-]+)( \d+)?\]/g, function(whole, word, num){
      var k = KEYWORDS[word];
      if(!k) return whole;
      var cls = (word === "Reaction") ? "kw reaction" : "kw";
      var label = word + (num || "");
      return '<span class="' + cls + '" title="' + esc(k.fr + " — " + k.txt) + '">' + esc(label) + '</span>';
    });
    return out;
  }

  /* ---------- images ---------- */
  function img(card, width){
    if(!card.img) return "";
    var sep = card.img.indexOf("?") === -1 ? "?" : "&";
    return card.img + sep + "w=" + (width || 320) + "&q=80&auto=format";
  }

  /* ---------- helpers ---------- */
  function domColor(card){
    var d = (card.d && card.d[0]) || "Colorless";
    return "var(--" + d + ")";
  }
  function typeFR(t){ return TYPE_FR[t] || t; }
  function domFR(d){ return DOM_FR[d] || d; }
  function setFR(s){ return SET_FR[s] || s; }
  function rarFR(r){ return RAR_FR[r] || r; }

  function costLine(c){
    var bits = [];
    if(c.e != null) bits.push(c.e + " Énergie");
    if(c.p != null) bits.push(c.p + " Pouvoir");
    return bits.join(" + ") || "—";
  }

  function isReaction(c){ return /\[Reaction\]/.test(c.tx || ""); }
  function mightOf(c){ var m = parseInt(c.m, 10); return isNaN(m) ? 0 : m; }

  /* ---------- vignette ---------- */
  function cardHTML(c, opts){
    opts = opts || {};
    var land = c.o === "landscape";
    return '<article class="card' + (land ? " landscape" : "") + '" data-id="' + esc(c.id) + '" ' +
             'style="--dom:' + domColor(c) + '" tabindex="0" role="button" aria-label="' + esc(c.n) + '">' +
             '<img loading="lazy" src="' + esc(img(c, opts.w || 320)) + '" alt="' + esc(c.n) + '" ' +
               'onerror="this.style.visibility=\'hidden\'">' +
             (opts.caption === false ? "" :
               '<div class="card-cap"><b>' + esc(displayName(c)) + '</b><i>' + esc(c.e == null ? typeFR(c.t) : c.e) + '</i></div>') +
           '</article>';
  }

  /* ---------- fiche détaillée ---------- */
  function detailHTML(c){
    var chips = [];
    chips.push('<span class="chip dom" style="--dom:' + domColor(c) + '">' +
      esc((c.d || []).map(domFR).join(" / ") || "Incolore") + '</span>');
    chips.push('<span class="chip">' + esc(typeFR(c.t)) + '</span>');
    chips.push('<span class="chip">' + esc(rarFR(c.r)) + '</span>');
    chips.push('<span class="chip">' + esc(setFR(metaSetName(c.set))) + '</span>');
    (c.tg || []).forEach(function(t){ chips.push('<span class="chip">' + esc(t) + '</span>'); });

    var stats = "";
    if(c.e != null) stats += '<div class="stat"><span>Énergie</span><b>' + esc(c.e) + '</b></div>';
    if(c.p != null) stats += '<div class="stat"><span>Pouvoir</span><b>' + esc(c.p) + '</b></div>';
    if(c.m != null) stats += '<div class="stat"><span>Puissance</span><b>' + esc(c.m) + '</b></div>';
    stats += '<div class="stat"><span>Numéro</span><b>' + esc(c.code) + '</b></div>';

    return '<div class="detail">' +
      '<img src="' + esc(img(c, 640)) + '" alt="' + esc(c.n) + '">' +
      '<div class="detail-meta">' +
        '<h2>' + esc(displayName(c)) + '</h2>' +
        (hasFrenchName(c) ? '<div class="vo-name">' + esc(nameVO(c)) + '</div>' : '') +
        '<div class="chips">' + chips.join("") + '</div>' +
        '<div class="stat-row">' + stats + '</div>' +
        frBlockHTML(c) +
        '<details class="vo-box"><summary>Texte original anglais</summary>' +
          '<div class="rules-text">' + symbols(c.tx || "Pas de texte de règles.") + '</div>' +
        '</details>' +
        '<p class="hint">Illustration : ' + esc(c.a || "—") + '. Survole un mot-clé anglais pour sa traduction.</p>' +
      '</div></div>';
  }

  function fr(card){
    var t = window.RB_FR && window.RB_FR[card.code];
    return t || null;
  }

  /* ---------- mise en forme du texte français ----------
     Trois niveaux de lecture :
       · le mot-clé, en pastille colorée selon sa famille ;
       · l'effet, en taille normale — c'est ce que fait la carte ;
       · le rappel de règles entre parenthèses, plus petit et en retrait.  */

  // famille -> mots-clés. L'ordre compte : les formes longues d'abord.
  var KW_FAM = [
    ["t-reac", ["Réaction"]],
    ["t-act",  ["Action"]],
    ["combat", ["Arrière-garde", "Déviation", "Assaut", "Bouclier", "Tank", "Gank",
                "Puissante", "Puissantes", "Embuscade"]],
    ["cout",   ["Maître d'armes", "Accélération", "Ascendant", "Ascendues", "Ascendus",
                "Ascendue", "Ascendu", "Équiper", "Dégainage", "Répétition", "Flux", "Unique"]],
    ["decl",   ["Prédiction", "Temporaire", "Vengeance", "Brûlure", "Légion", "Chasse",
                "Cachées", "Cachée", "Vision", "Niveau", "Glas"]]
  ];
  // mots-clés dont le nombre qui suit fait partie de la valeur
  var KW_VAL = /^(Assaut|Bouclier|Déviation|Chasse|Niveau|Brûlure|Prédiction)$/;

  var KW_RE = (function(){
    var all = [];
    KW_FAM.forEach(function(f){ f[1].forEach(function(w){ all.push([w, f[0]]); }); });
    all.sort(function(a, b){ return b[0].length - a[0].length; });
    var esc2 = function(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); };
    return {
      list: all,
      re: new RegExp("(^|[^A-Za-zÀ-ÿ])(" + all.map(function(x){ return esc2(x[0]); }).join("|") + ")(?![A-Za-zÀ-ÿ])", "g"),
      fam: all.reduce(function(m, x){ m[x[0]] = x[1]; return m; }, {})
    };
  })();

  function markKeywords(s){
    return s.replace(KW_RE.re, function(_, pre, word, off, whole){
      var fam = KW_RE.fam[word];
      var label = word;
      if(KW_VAL.test(word)){
        var after = whole.slice(off + pre.length + word.length).match(/^ (\d+)/);
        if(after) label = word + " " + after[1];
      }
      return pre + '<b class="k k-' + fam + '">' + label + '</b>' +
             (label !== word ? "\u0000" : "");   // marque le nombre déjà consommé
    }).replace(/\u0000 \d+/g, "");
  }

  function markResources(s){
    return s
      .replace(/(\d+) Énergie/g, '<b class="r r-e">$1&nbsp;Énergie</b>')
      .replace(/(\d+) Pouvoir/g, '<b class="r r-p">$1&nbsp;Pouvoir</b>')
      .replace(/([+\-−]\d+) Puissance/g, '<b class="r r-m">$1&nbsp;Puissance</b>')
      .replace(/(\d+) XP/g, '<b class="r r-x">$1&nbsp;XP</b>');
  }

  // Découpe une ligne en segments hors/dans parenthèses, n'habille que le hors-parenthèses.
  function frLineHTML(line){
    var out = "", i = 0, n = line.length;
    while(i < n){
      var open = line.indexOf("(", i);
      if(open === -1){ out += markResources(markKeywords(esc(line.slice(i)))); break; }
      var close = line.indexOf(")", open);
      if(close === -1){ out += markResources(markKeywords(esc(line.slice(i)))); break; }
      out += markResources(markKeywords(esc(line.slice(i, open))));
      var inner = line.slice(open + 1, close);
      var terminal = line.slice(close + 1).trim() === "";
      out += '<span class="fr-rem' + (terminal ? " fr-rem-b" : "") + '">' + esc(inner) + '</span>';
      i = close + 1;
    }
    // le point qui précède un rappel devient inutile, le retrait le remplace
    out = out.replace(/\.(\s*)(<span class="fr-rem)/g, "$1$2");
    out = out.replace(/(<\/b>)\.\s*$/, "$1");
    return out;
  }

  function frTextHTML(tx){
    if(!tx) return "";
    return tx.split("\n").map(function(line){
      var t = line.trim();
      if(!t) return "";
      var cls = "fr-line";
      if(/^[—-]\s/.test(t)) cls += " fr-bullet";
      return '<span class="' + cls + '">' + frLineHTML(t) + '</span>';
    }).join("");
  }

  function frBlockHTML(card){
    var t = fr(card);
    if(!t){
      return '<div class="fr-block fr-missing">' +
        '<div class="fr-head">Traduction française</div>' +
        '<p>Pas encore traduite. Le lexique de l\'onglet <b>Les règles</b> donne le sens de chaque mot-clé.</p>' +
      '</div>';
    }
    return '<div class="fr-block">' +
      '<div class="fr-head">Traduction française</div>' +
      (t.n ? '' : '<div class="fr-name fr-vo">nom non traduit</div>') +
      '<div class="fr-text">' + frTextHTML(t.tx) + '</div>' +
      (t.note ? '<p class="fr-note">' + esc(t.note) + '</p>' : '') +
    '</div>';
  }

  // Nom anglais, avec le champion en préfixe pour les légendes.
  function nameVO(c){
    var base = c.fn || c.n;
    if(c.t === "Legend" && c.tg && c.tg.length && base.indexOf(c.tg[0]) === -1){
      return c.tg[0] + ", " + base;
    }
    return base;
  }

  // Nom affiché : le français dès qu'il existe, sinon la VO.
  function displayName(c){
    var t = fr(c);
    if(t && t.n){
      if(c.t === "Legend" && c.tg && c.tg.length && t.n.indexOf(c.tg[0]) === -1){
        return c.tg[0] + ", " + t.n;
      }
      return t.n;
    }
    return nameVO(c);
  }

  // Vrai quand le nom affiché diffère de la VO : on peut alors montrer les deux.
  function hasFrenchName(c){ return displayName(c) !== nameVO(c); }

  function metaSetName(setId){
    var map = {OGN:"Origins", OGS:"Proving Grounds", SFD:"Spiritforged", UNL:"Unleashed", VEN:"Vendetta"};
    return map[setId] || setId;
  }

  /* ---------- recherche ---------- */
  function find(name){
    var k = String(name).toLowerCase();
    return byName[k] || cards.filter(function(c){ return c.n.toLowerCase().indexOf(k) === 0; })[0] || null;
  }
  function byCode(code){
    for(var i=0;i<cards.length;i++) if(cards[i].code === code) return cards[i];
    return null;
  }

  function load(){
    // data/cards.js définit window.RB_DATA : l'application marche donc aussi
    // en ouvrant index.html directement, sans serveur. Le fetch reste en secours.
    var source = window.RB_DATA
      ? Promise.resolve(window.RB_DATA)
      : fetch("cards.json").then(function(r){
          if(!r.ok) throw new Error("HTTP " + r.status);
          return r.json();
        });
    return source.then(function(d){
      cards = d.cards;
      meta = d;
      cards.forEach(function(c){
        byId[c.id] = c;
        var k = c.n.toLowerCase();
        if(!byName[k]) byName[k] = c;
      });
      RB.cards = cards;
      RB.meta = meta;
      return cards;
    });
  }

  return {
    load: load, cards: cards, meta: meta, byId: byId,
    find: find, byCode: byCode,
    cardHTML: cardHTML, detailHTML: detailHTML,
    symbols: symbols, img: img, esc: esc,
    domColor: domColor, typeFR: typeFR, domFR: domFR, setFR: setFR, rarFR: rarFR,
    costLine: costLine, isReaction: isReaction, mightOf: mightOf,
    fr: fr, frBlockHTML: frBlockHTML, frTextHTML: frTextHTML, displayName: displayName, nameVO: nameVO, hasFrenchName: hasFrenchName,
    KEYWORDS: KEYWORDS, metaSetName: metaSetName
  };
})();
