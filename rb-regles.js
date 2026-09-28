/* ============================================================
   rb-regles.js — le moteur de la référence de règles.
   Le contenu vit dans rb-regles-data.js ; ici, uniquement
   l'affichage : sommaire collant, recherche, ancres.
   ============================================================ */
window.Regles = (function(){
  "use strict";

  var D = window.REGLES_DATA;
  var racine = null, champ = null;

  function esc(s){ return RB.esc(s); }

  /* ---------- sommaire ---------- */
  function sommaireHTML(){
    return '<aside class="rg-nav" id="rgNav">' +
      '<div class="rg-search">' +
        '<input id="rgQ" type="search" placeholder="Chercher une règle…" ' +
          'autocomplete="off" spellcheck="false" aria-label="Chercher une règle">' +
        '<span class="rg-count" id="rgCount"></span>' +
      '</div>' +
      '<nav class="rg-toc">' +
        D.chapitres.map(function(c){
          return '<div class="rg-toc-ch" data-c="' + c.id + '">' +
            '<a href="#regles/' + c.id + '" class="rg-toc-h c-' + c.couleur + '">' +
              '<span class="rg-dot"></span>' + esc(c.titre) + '</a>' +
            '<ul>' + c.sections.map(function(s){
              return '<li><a href="#regles/' + c.id + '/' + s.id + '" data-s="' + s.id + '">' +
                esc(s.titre) + '</a></li>';
            }).join("") + '</ul></div>';
        }).join("") +
      '</nav></aside>';
  }

  /* ---------- une règle ---------- */
  function regleHTML(r){
    return '<div class="rg-r" data-t="' + esc((r.t + " " + (r.d || "")).toLowerCase()) + '">' +
      '<a class="rg-ref" href="' + D.source + '" target="_blank" rel="noopener" ' +
        'title="Article ' + esc(r.ref) + ' des règles officielles">' + esc(r.ref) + '</a>' +
      '<div class="rg-r-txt"><b>' + r.t + '</b>' + (r.d ? ' <span>' + r.d + '</span>' : '') + '</div>' +
    '</div>';
  }

  function encartsHTML(s){
    var h = "";
    if(s.cas && s.cas.length){
      h += '<div class="rg-box rg-cas"><h4>Cas particuliers</h4>' +
        s.cas.map(function(c){
          return '<div class="rg-box-i" data-t="' + esc((c.t + " " + c.d).toLowerCase()) + '">' +
            '<b>' + c.t + '</b> ' + c.d + '</div>';
        }).join("") + '</div>';
    }
    if(s.erreurs && s.erreurs.length){
      h += '<div class="rg-box rg-err"><h4>Erreurs fréquentes</h4>' +
        s.erreurs.map(function(c){
          return '<div class="rg-box-i" data-t="' + esc((c.t + " " + c.d).toLowerCase()) + '">' +
            '<b>' + c.t + '</b> ' + c.d + '</div>';
        }).join("") + '</div>';
    }
    return h;
  }

  function sectionHTML(c, s){
    return '<section class="rg-s" id="regles/' + c.id + '/' + s.id + '" data-s="' + s.id + '">' +
      '<div class="rg-s-head">' +
        '<h3>' + esc(s.titre) + '</h3>' +
        (s.ref ? '<span class="rg-s-ref">articles ' + esc(s.ref) + '</span>' : '') +
      '</div>' +
      (s.intro ? '<p class="rg-intro">' + s.intro + '</p>' : '') +
      '<div class="rg-rs">' + (s.regles || []).map(regleHTML).join("") + '</div>' +
      encartsHTML(s) +
    '</section>';
  }

  function chapitreHTML(c){
    return '<div class="rg-ch c-' + c.couleur + '" id="regles/' + c.id + '" data-c="' + c.id + '">' +
      '<div class="rg-ch-head">' +
        '<div class="eyebrow">' + esc(c.eyebrow) + '</div>' +
        '<h2>' + esc(c.titre) + '</h2>' +
        '<p class="lede">' + c.lede + '</p>' +
      '</div>' +
      c.sections.map(function(s){ return sectionHTML(c, s); }).join("") +
    '</div>';
  }

  /* ---------- recherche ---------- */
  function filtrer(q){
    q = (q || "").trim().toLowerCase();
    var compte = 0;
    var tout = racine.querySelectorAll("[data-t]");
    tout.forEach(function(n){
      var ok = !q || n.dataset.t.indexOf(q) !== -1 ||
               (n.closest(".rg-s") && n.closest(".rg-s").querySelector("h3")
                 .textContent.toLowerCase().indexOf(q) !== -1);
      n.classList.toggle("rg-off", !ok);
      if(ok) compte++;
    });
    // une section ou un chapitre entièrement filtré disparaît aussi
    racine.querySelectorAll(".rg-s").forEach(function(s){
      s.classList.toggle("rg-off", q && !s.querySelector("[data-t]:not(.rg-off)"));
    });
    racine.querySelectorAll(".rg-ch").forEach(function(c){
      c.classList.toggle("rg-off", q && !c.querySelector(".rg-s:not(.rg-off)"));
    });
    var cpt = document.getElementById("rgCount");
    if(cpt) cpt.textContent = q ? compte + (compte > 1 ? " résultats" : " résultat") : "";
  }

  /* ---------- rubrique active dans le sommaire ---------- */
  var obs = null;
  function suivre(){
    if(obs) obs.disconnect();
    var liens = {};
    racine.parentNode.querySelectorAll(".rg-toc a[data-s]").forEach(function(a){
      liens[a.dataset.s] = a;
    });
    obs = new IntersectionObserver(function(entrees){
      entrees.forEach(function(e){
        var a = liens[e.target.dataset.s];
        if(a) a.classList.toggle("on", e.isIntersecting);
      });
    }, { rootMargin: "-80px 0px -70% 0px" });
    racine.querySelectorAll(".rg-s").forEach(function(s){ obs.observe(s); });
  }

  function mount(el){
    el.innerHTML =
      '<div class="view-head">' +
        '<div class="eyebrow">Référence · règles officielles du ' + esc(D.maj) + '</div>' +
        '<h1>Les règles, en français</h1>' +
        '<p class="lede">De quoi trancher une question en pleine partie. Chaque règle porte son ' +
        '<b>numéro d\'article officiel</b> : en cas de désaccord, cliquer dessus ouvre le document ' +
        'de Riot, et la discussion s\'arrête là.</p>' +
      '</div>' +
      '<div class="rg-wrap">' + sommaireHTML() +
        '<div class="rg-main" id="rgMain">' +
          D.chapitres.map(chapitreHTML).join("") +
          '<p class="rg-src">Source : <a href="' + D.source + '" target="_blank" rel="noopener">' +
          'règles complètes de Riot Games, version du ' + esc(D.maj) + ' ↗</a>. ' +
          'Les explications ci-dessus sont une réécriture française, pas une traduction officielle.</p>' +
        '</div>' +
      '</div>';

    racine = document.getElementById("rgMain");
    champ = document.getElementById("rgQ");

    champ.addEventListener("input", function(){ filtrer(champ.value); });
    champ.addEventListener("keydown", function(e){
      if(e.key === "Escape"){ champ.value = ""; filtrer(""); }
    });

    suivre();

    // une ancre dans l'URL amène directement à la bonne rubrique
    var h = decodeURIComponent(location.hash.slice(1));
    if(h.indexOf("regles/") === 0){
      var cible = document.getElementById(h);
      if(cible) setTimeout(function(){ cible.scrollIntoView({block:"start"}); }, 60);
    }
  }

  function unmount(){ if(obs) obs.disconnect(); obs = null; }

  return { mount: mount, unmount: unmount };
})();
