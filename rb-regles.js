/* ============================================================
   rb-regles.js — le moteur de la référence de règles.
   Le contenu vit dans rb-regles-data.js ; ici, uniquement
   l'affichage.

   Principe : la page s'ouvre sur des questions, pas sur des
   chapitres. Chaque rubrique montre sa question et sa réponse
   en une ligne ; le détail, les cas particuliers et les
   numéros d'article se déplient à la demande.
   ============================================================ */
window.Regles = (function(){
  "use strict";

  var D = window.REGLES_DATA;
  var racine = null, champ = null;

  function esc(s){ return RB.esc(s); }
  function plat(s){ return (s || "").replace(/<[^>]*>/g, " "); }

  var CHEVRON =
    '<svg class="rg-chev" viewBox="0 0 16 16" aria-hidden="true">' +
      '<path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------- sommaire ---------- */
  function sommaireHTML(){
    return '<aside class="rg-nav" id="rgNav">' +
      '<div class="rg-search">' +
        '<input id="rgQ" type="search" placeholder="Chercher…" ' +
          'autocomplete="off" spellcheck="false" aria-label="Chercher une règle">' +
        '<span class="rg-count" id="rgCount"></span>' +
      '</div>' +
      '<nav class="rg-toc">' +
        D.chapitres.map(function(c){
          return '<div class="rg-toc-ch c-' + c.couleur + '" data-c="' + c.id + '">' +
            '<a href="#regles/' + c.id + '" class="rg-toc-h">' +
              '<span class="rg-dot"></span>' + esc(c.titre) + '</a>' +
            '<ul>' + c.sections.map(function(s){
              return '<li><a href="#regles/' + c.id + '/' + s.id + '" data-s="' + s.id + '">' +
                esc(s.titre) + '</a></li>';
            }).join("") + '</ul></div>';
        }).join("") +
      '</nav>' +
      '<button type="button" class="rg-toutes" id="rgToutes">Tout déplier</button>' +
    '</aside>';
  }

  /* ---------- une règle ---------- */
  function regleHTML(r){
    return '<div class="rg-r" data-t="' + esc(plat(r.t + " " + (r.d || "")).toLowerCase()) + '">' +
      '<div class="rg-r-txt"><b>' + r.t + '</b>' + (r.d ? ' <span>' + r.d + '</span>' : '') + '</div>' +
      '<a class="rg-ref" href="' + D.source + '" target="_blank" rel="noopener" ' +
        'title="Article ' + esc(r.ref) + ' des règles officielles">' + esc(r.ref) + '</a>' +
    '</div>';
  }

  /* ---------- un mot-clé ---------- */
  function motHTML(m){
    var cherchable = plat(m.m + " " + (m.vo || "") + " " + (m.r || "") +
                          " " + (m.p || []).join(" ")).toLowerCase();
    return '<div class="rg-m" id="mot-' + esc(m.ref) + '" data-t="' + esc(cherchable) + '">' +
      '<div class="rg-m-head">' +
        '<h4>' + esc(m.m) + '</h4>' +
        (m.vo ? '<span class="rg-m-vo">' + esc(m.vo) + '</span>' : '') +
        '<a class="rg-ref" href="' + D.source + '" target="_blank" rel="noopener" ' +
          'title="Article ' + esc(m.ref) + ' des règles officielles">' + esc(m.ref) + '</a>' +
      '</div>' +
      (m.r ? '<p class="rg-m-r">' + m.r + '</p>' : '') +
      ((m.p && m.p.length)
        ? '<ul class="rg-m-p">' + m.p.map(function(x){ return '<li>' + x + '</li>'; }).join("") + '</ul>'
        : '') +
    '</div>';
  }

  function encartsHTML(s){
    function bloc(liste, classe, titre){
      if(!liste || !liste.length) return "";
      return '<div class="rg-box ' + classe + '"><h4>' + titre + '</h4>' +
        liste.map(function(c){
          return '<div class="rg-box-i" data-t="' + esc(plat(c.t + " " + c.d).toLowerCase()) + '">' +
            '<b>' + c.t + '</b> ' + c.d + '</div>';
        }).join("") + '</div>';
    }
    return bloc(s.cas, "rg-cas", "Cas particuliers") +
           bloc(s.erreurs, "rg-err", "Erreurs fréquentes");
  }

  /* ---------- une rubrique : une question qui se déplie ---------- */
  function sectionHTML(c, s){
    var corps =
      (s.intro ? '<p class="rg-intro">' + s.intro + '</p>' : '') +
      ((s.mots && s.mots.length)
        ? '<div class="rg-ms">' + s.mots.map(motHTML).join("") + '</div>' : '') +
      ((s.regles && s.regles.length)
        ? '<div class="rg-rs">' + s.regles.map(regleHTML).join("") + '</div>' : '') +
      encartsHTML(s) +
      (s.ref ? '<p class="rg-s-ref">Règles officielles, articles ' + esc(s.ref) + '</p>' : '');

    return '<details class="rg-s" id="regles/' + c.id + '/' + s.id + '" ' +
             'data-s="' + s.id + '" ' +
             'data-q="' + esc(plat((s.q || "") + " " + s.titre + " " + (s.rep || "") +
                                   " " + (s.intro || "")).toLowerCase()) + '">' +
      '<summary class="rg-q">' +
        '<div class="rg-q-txt">' +
          '<h3>' + esc(s.q || s.titre) + '</h3>' +
          (s.rep ? '<p class="rg-rep">' + s.rep + '</p>' : '') +
        '</div>' +
        '<span class="rg-more"><span>Le détail</span>' + CHEVRON + '</span>' +
      '</summary>' +
      '<div class="rg-body">' + corps + '</div>' +
    '</details>';
  }

  /* ---------- l'index des mots-clés, pour aller droit au but ---------- */
  function indexMotsHTML(c){
    var tous = [];
    c.sections.forEach(function(s){
      (s.mots || []).forEach(function(m){ tous.push({ m: m, s: s.id }); });
    });
    if(!tous.length) return "";
    tous.sort(function(a, b){ return a.m.m.localeCompare(b.m.m, "fr"); });
    return '<div class="rg-index">' +
      '<p class="rg-index-t">Les ' + tous.length + ' mots-clés, par ordre alphabétique — ' +
      'clique pour ouvrir&nbsp;:</p>' +
      '<div class="rg-chips">' + tous.map(function(x){
        return '<button type="button" class="rg-chip" data-sec="' + esc(x.s) + '" ' +
          'data-mot="mot-' + esc(x.m.ref) + '">' + esc(x.m.m) + '</button>';
      }).join("") + '</div></div>';
  }

  function chapitreHTML(c){
    return '<section class="rg-ch c-' + c.couleur + '" id="regles/' + c.id + '" data-c="' + c.id + '">' +
      '<div class="rg-ch-head">' +
        '<div class="rg-ch-when">' + esc(c.eyebrow) + '</div>' +
        '<h2>' + esc(c.titre) + '</h2>' +
        '<p class="lede">' + c.lede + '</p>' +
      '</div>' +
      indexMotsHTML(c) +
      c.sections.map(function(s){ return sectionHTML(c, s); }).join("") +
    '</section>';
  }

  /* ---------- recherche ---------- */
  function filtrer(q){
    q = (q || "").trim().toLowerCase();
    var cpt = document.getElementById("rgCount");

    if(!q){
      racine.querySelectorAll(".rg-off").forEach(function(n){ n.classList.remove("rg-off"); });
      racine.querySelectorAll("details.rg-s").forEach(function(d){ d.open = false; });
      if(cpt) cpt.textContent = "";
      majBouton();
      return;
    }

    var compte = 0;

    racine.querySelectorAll("[data-t]").forEach(function(n){
      n.classList.toggle("rg-off", n.dataset.t.indexOf(q) === -1);
    });

    racine.querySelectorAll("details.rg-s").forEach(function(d){
      var soiMeme = d.dataset.q.indexOf(q) !== -1;
      var items   = d.querySelectorAll("[data-t]");
      var gardes  = d.querySelectorAll("[data-t]:not(.rg-off)").length;

      if(soiMeme){
        // la question elle-même répond : on remontre tout son contenu
        items.forEach(function(n){ n.classList.remove("rg-off"); });
      }
      var visible = soiMeme || gardes > 0;
      d.classList.toggle("rg-off", !visible);
      d.open = visible;
      if(visible) compte += Math.max(gardes, 1);
    });

    racine.querySelectorAll(".rg-ch").forEach(function(c){
      c.classList.toggle("rg-off", !c.querySelector("details.rg-s:not(.rg-off)"));
    });

    if(cpt) cpt.textContent = compte + (compte > 1 ? " résultats" : " résultat");
    majBouton();
  }

  /* ---------- tout déplier / tout replier ---------- */
  function ouvertes(){
    return racine.querySelectorAll("details.rg-s[open]:not(.rg-off)").length;
  }
  function majBouton(){
    var b = document.getElementById("rgToutes");
    if(!b) return;
    var total = racine.querySelectorAll("details.rg-s:not(.rg-off)").length;
    b.textContent = (ouvertes() >= total && total > 0) ? "Tout replier" : "Tout déplier";
  }

  /* ---------- rubrique active dans le sommaire ---------- */
  var obs = null;
  function suivre(){
    if(obs) obs.disconnect();
    var liens = {};
    document.querySelectorAll(".rg-toc a[data-s]").forEach(function(a){
      liens[a.dataset.s] = a;
    });
    obs = new IntersectionObserver(function(entrees){
      entrees.forEach(function(e){
        var a = liens[e.target.dataset.s];
        if(a) a.classList.toggle("on", e.isIntersecting);
      });
    }, { rootMargin: "-84px 0px -68% 0px" });
    racine.querySelectorAll("details.rg-s").forEach(function(s){ obs.observe(s); });
  }

  /* ---------- ouvrir une rubrique et s'y rendre ---------- */
  function allerA(id, sousCible){
    var cible = document.getElementById(id);
    if(!cible) return false;
    if(cible.tagName === "DETAILS") cible.open = true;
    setTimeout(function(){
      var n = sousCible ? document.getElementById(sousCible) : null;
      (n || cible).scrollIntoView({ block: "start", behavior: "smooth" });
      majBouton();
    }, 40);
    return true;
  }

  function mount(el){
    el.innerHTML =
      '<div class="view-head rg-hero">' +
        '<div class="eyebrow">Règles officielles du ' + esc(D.maj) + '</div>' +
        '<h1>Les règles, en clair</h1>' +
        '<p class="lede">Chaque rubrique est une question qu\'on se pose vraiment en partie. ' +
        'La réponse tient en une ligne&nbsp;; le détail et le <b>numéro d\'article officiel</b> ' +
        'se déplient si tu veux vérifier — ou clore un débat.</p>' +
      '</div>' +
      '<div class="rg-wrap">' + sommaireHTML() +
        '<div class="rg-main" id="rgMain">' +
          D.chapitres.map(chapitreHTML).join("") +
          '<p class="rg-src">Source&nbsp;: <a href="' + D.source + '" target="_blank" rel="noopener">' +
          'règles complètes de Riot Games, version du ' + esc(D.maj) + ' ↗</a>. ' +
          'Les explications ci-dessus sont une réécriture française, pas une traduction officielle.</p>' +
        '</div>' +
      '</div>';

    racine = document.getElementById("rgMain");
    champ  = document.getElementById("rgQ");

    champ.addEventListener("input", function(){ filtrer(champ.value); });
    champ.addEventListener("keydown", function(e){
      if(e.key === "Escape"){ champ.value = ""; filtrer(""); }
    });

    document.getElementById("rgToutes").addEventListener("click", function(){
      var liste = racine.querySelectorAll("details.rg-s:not(.rg-off)");
      var onOuvre = ouvertes() < liste.length;
      liste.forEach(function(d){ d.open = onOuvre; });
      majBouton();
    });

    racine.addEventListener("toggle", function(){ majBouton(); }, true);

    // les pastilles de mots-clés ouvrent la bonne rubrique
    racine.addEventListener("click", function(e){
      var chip = e.target.closest(".rg-chip");
      if(!chip) return;
      var sec = racine.querySelector('details.rg-s[data-s="' + chip.dataset.sec + '"]');
      if(sec){ sec.open = true; allerA(sec.id, chip.dataset.mot); }
    });

    suivre();
    majBouton();

    // une ancre dans l'adresse ouvre directement la bonne rubrique
    var h = decodeURIComponent(location.hash.slice(1));
    if(h.indexOf("regles/") === 0) setTimeout(function(){ allerA(h); }, 60);
  }

  function unmount(){ if(obs) obs.disconnect(); obs = null; }

  return { mount: mount, unmount: unmount, allerA: allerA };
})();
