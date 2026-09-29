/* ============================================================
   app.js — navigation, modale, démarrage
   ============================================================ */
(function(){
  "use strict";

  // permet à la CSS de distinguer « JavaScript actif » de « page nue »
  document.documentElement.classList.add("js");

  /* Un tour, La chaîne, Simulateur, Mon deck et Les cartes sont mis de côté :
     leurs fichiers restent dans le dépôt, ils reviendront retravaillés. */
  var VIEWS = {
    regles:   { mod:function(){ return window.Regles; },    title:"Les règles" },
    rules:    { mod:function(){ return window.Rules; },     title:"Bien démarrer" },
    extension:{ mod:function(){ return window.Extension; }, title:"L'extension Chrome" }
  };

  var main = document.getElementById("main");
  var tabs = document.getElementById("tabs");
  var modal = document.getElementById("modal");
  var modalBody = document.getElementById("modalBody");
  var current = null;

  function show(name){
    if(!VIEWS[name]) name = "regles";
    if(current && VIEWS[current] && VIEWS[current].mod().unmount) VIEWS[current].mod().unmount();
    current = name;

    tabs.querySelectorAll(".tab").forEach(function(b){
      b.classList.toggle("on", b.dataset.view === name);
      b.setAttribute("aria-selected", b.dataset.view === name ? "true" : "false");
    });

    main.innerHTML = "";
    VIEWS[name].mod().mount(main);
    document.title = VIEWS[name].title + " — Le Rift Expliqué";
    // on ne réécrit l'adresse que si elle ne désigne pas déjà cette vue :
    // un lien profond comme #regles/mots-cles/mc-equip doit survivre.
    var h = decodeURIComponent(location.hash.slice(1));
    if(h.split("/")[0] !== name){
      history.replaceState(null, "", "#" + name);
      window.scrollTo({top:0, behavior:"instant"});
    }
  }

  function openCard(id){
    var c = RB.byId[id];
    if(!c) return;
    hidePeek();
    modalBody.innerHTML = RB.detailHTML(c);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal(){
    modal.hidden = true;
    modalBody.innerHTML = "";
    document.body.style.overflow = "";
  }


  /* ---------- aperçu au survol : grande carte + traduction ---------- */
  var peek = document.createElement("div");
  peek.className = "peek";
  peek.hidden = true;
  document.body.appendChild(peek);

  var peekId = null, peekTimer = null;

  function peekHTML(c){
    return '<img class="peek-img' + (c.o === "landscape" ? " landscape" : "") + '" src="' +
        RB.esc(RB.img(c, 820)) + '" alt="' + RB.esc(c.n) + '">' +
      '<div class="peek-side">' +
        '<div class="peek-name">' + RB.esc(RB.displayName(c)) + '</div>' +
        '<div class="peek-meta">' + RB.esc(RB.typeFR(c.t)) + ' · ' +
          RB.esc((c.d || []).map(RB.domFR).join(" / ")) +
          (c.e != null ? ' · ' + RB.esc(c.e) + ' Énergie' : '') +
          (c.p != null ? ' + ' + RB.esc(c.p) + ' Puissance' : '') +
          (c.m != null ? ' · Puissance ' + RB.esc(c.m) : '') +
        '</div>' +
        '<div class="peek-vo">' + RB.symbols(c.tx || "") + '</div>' +
        RB.frBlockHTML(c) +
      '</div>';
  }

  function placePeek(x, y){
    var w = peek.offsetWidth || 660, h = peek.offsetHeight || 460;
    var left = x + 24, top = y - h / 2;
    if(left + w > window.innerWidth - 12) left = x - w - 24;
    if(left < 12) left = 12;
    if(top < 12) top = 12;
    if(top + h > window.innerHeight - 12) top = Math.max(12, window.innerHeight - h - 12);
    peek.style.left = left + "px";
    peek.style.top  = top + "px";
  }

  function showPeek(c, x, y){
    if(peekId === c.id && !peek.hidden){ placePeek(x, y); return; }
    peekId = c.id;
    peek.innerHTML = peekHTML(c);
    peek.hidden = false;
    placePeek(x, y);
  }
  function hidePeek(){
    peek.hidden = true;
    peekId = null;
    if(peekTimer){ clearTimeout(peekTimer); peekTimer = null; }
  }

  function cardUnder(target){
    var el = target.closest(".card, .mini, .dk-line, .rd-card");
    if(!el || !el.dataset.id) return null;
    return RB.byId[el.dataset.id] || null;
  }

  document.addEventListener("mousemove", function(e){
    if(!modal.hidden) return hidePeek();
    var c = cardUnder(e.target);
    if(!c){ if(!peek.hidden) hidePeek(); return; }
    if(peekTimer) clearTimeout(peekTimer);
    var x = e.clientX, y = e.clientY;
    if(!peek.hidden && peekId === c.id){ placePeek(x, y); return; }
    peekTimer = setTimeout(function(){ showPeek(c, x, y); }, 140);
  });
  document.addEventListener("scroll", hidePeek, true);
  window.addEventListener("blur", hidePeek);

  tabs.addEventListener("click", function(e){
    var b = e.target.closest(".tab");
    if(b) show(b.dataset.view);
  });

  // le titre mène à l'extension : c'est ce qu'on vient chercher en premier
  var brand = document.getElementById("brand");
  if(brand) brand.addEventListener("click", function(){ show("extension"); });

  document.addEventListener("click", function(e){
    if(e.target.closest("[data-close]")){ closeModal(); return; }

    var link = e.target.closest("[data-card]");
    if(link){ openCard(link.dataset.card); return; }

    var card = e.target.closest(".card, .dk-line, .rd-card");
    if(card && card.dataset.id && !e.target.closest("#presults") && !e.target.closest("#dkResults") && !e.target.closest("button")){
      openCard(card.dataset.id);
    }
  });

  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !modal.hidden) closeModal();
    if(e.key === "Enter"){
      var c = document.activeElement;
      if(c && c.classList && c.classList.contains("card") && c.dataset.id && !c.closest("#presults")) openCard(c.dataset.id);
    }
  });

  window.addEventListener("hashchange", function(){
    var h = decodeURIComponent(location.hash.slice(1));
    if(!h) return;
    var vue = h.split("/")[0];
    if(vue !== current){ show(vue); return; }
    // même vue, ancre différente : la vue des règles sait ouvrir la rubrique
    if(vue === "regles" && window.Regles && Regles.allerA && Regles.allerA(h)) return;
    var cible = document.getElementById(h);
    if(cible) cible.scrollIntoView({block:"start"});
  });

  RB.load().then(function(){
    show((decodeURIComponent(location.hash.slice(1))||"regles").split("/")[0]);
  }).catch(function(err){
    main.innerHTML = '<div class="panel"><h2>Chargement impossible</h2>' +
      '<p class="lede" style="margin-top:8px">Les données des cartes n\'ont pas pu être lues (' +
      RB.esc(err.message) + ').</p>' +
      '<p class="hint" style="margin-top:8px">Si tu as ouvert le fichier directement depuis ton disque, ' +
      'le navigateur bloque la lecture du fichier de données. Lance un petit serveur local ' +
      '(<code>python3 -m http.server</code> dans le dossier du projet) ou utilise la version en ligne.</p></div>';
  });
})();
