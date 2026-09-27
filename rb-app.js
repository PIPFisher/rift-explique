/* ============================================================
   app.js — navigation, modale, démarrage
   ============================================================ */
(function(){
  "use strict";

  var VIEWS = {
    rules:    { mod:function(){ return window.Rules; },    title:"Les règles" },
    turn:     { mod:function(){ return window.Turn; },     title:"Un tour de jeu" },
    chain:    { mod:function(){ return window.Chain; },    title:"La chaîne" },
    sim:      { mod:function(){ return window.Sim; },      title:"Simulateur" },
    explorer: { mod:function(){ return window.Explorer; }, title:"Les cartes" }
  };

  var main = document.getElementById("main");
  var tabs = document.getElementById("tabs");
  var modal = document.getElementById("modal");
  var modalBody = document.getElementById("modalBody");
  var current = null;

  function show(name){
    if(!VIEWS[name]) name = "rules";
    if(current && VIEWS[current] && VIEWS[current].mod().unmount) VIEWS[current].mod().unmount();
    current = name;

    tabs.querySelectorAll(".tab").forEach(function(b){
      b.classList.toggle("on", b.dataset.view === name);
      b.setAttribute("aria-selected", b.dataset.view === name ? "true" : "false");
    });

    main.innerHTML = "";
    VIEWS[name].mod().mount(main);
    document.title = VIEWS[name].title + " — Le Rift Expliqué";
    if(location.hash.slice(1) !== name) history.replaceState(null, "", "#" + name);
    window.scrollTo({top:0, behavior:"instant"});
  }

  function openCard(id){
    var c = RB.byId[id];
    if(!c) return;
    modalBody.innerHTML = RB.detailHTML(c);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal(){
    modal.hidden = true;
    modalBody.innerHTML = "";
    document.body.style.overflow = "";
  }

  tabs.addEventListener("click", function(e){
    var b = e.target.closest(".tab");
    if(b) show(b.dataset.view);
  });

  document.addEventListener("click", function(e){
    if(e.target.closest("[data-close]")){ closeModal(); return; }

    var link = e.target.closest("[data-card]");
    if(link){ openCard(link.dataset.card); return; }

    var card = e.target.closest(".card");
    if(card && card.dataset.id && !e.target.closest("#presults") && !e.target.closest("button")){
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
    var h = location.hash.slice(1);
    if(h && h !== current) show(h);
  });

  RB.load().then(function(){
    show(location.hash.slice(1) || "rules");
  }).catch(function(err){
    main.innerHTML = '<div class="panel"><h2>Chargement impossible</h2>' +
      '<p class="lede" style="margin-top:8px">Les données des cartes n\'ont pas pu être lues (' +
      RB.esc(err.message) + ').</p>' +
      '<p class="hint" style="margin-top:8px">Si tu as ouvert le fichier directement depuis ton disque, ' +
      'le navigateur bloque la lecture du fichier de données. Lance un petit serveur local ' +
      '(<code>python3 -m http.server</code> dans le dossier du projet) ou utilise la version en ligne.</p></div>';
  });
})();
