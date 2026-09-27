/* ============================================================
   chain.js — animation pas à pas du focus, de la priorité
   et de la résolution de la chaîne
   ============================================================ */
window.Chain = (function(){
  "use strict";

  var A = "att", D = "def";
  var root = null, i = 0, playing = false, timer = null, steps = [];
  var C = {};   // cartes réelles utilisées par la démo

  function pick(code, fallbackFilter){
    var c = RB.byCode(code);
    if(c) return c;
    var list = RB.cards.filter(fallbackFilter || function(){ return false; });
    return list[0] || RB.cards[0];
  }

  function build(){
    C.cleave  = pick("OGN-004/298", function(c){ return c.t === "Spell" && !RB.isReaction(c); });
    C.flurry  = pick("OGN-133/298", function(c){ return c.t === "Spell" && RB.isReaction(c); });
    C.ray     = pick("OGN-009/298", function(c){ return c.t === "Spell" && !RB.isReaction(c); });
    C.unitAtt = pick("OGN-001/298", function(c){ return c.t === "Unit" && RB.mightOf(c) === 5; });
    C.unitDef = pick("OGN-012/298", function(c){ return c.t === "Unit" && RB.mightOf(c) === 4; });

    var mAtt = RB.mightOf(C.unitAtt) || 5;
    var mDef = RB.mightOf(C.unitDef) || 4;

    steps = [
      { tag:"Ouverture",
        text:"L'affrontement s'ouvre. C'est <b>l'attaquant</b> qui a le focus et la priorité, même si c'est ton champ de bataille.",
        note:"Chaîne vide : celui qui a le focus peut jouer une action comme une réaction.",
        chain:[], hand:["cleave","flurry","ray"], focus:A, prio:A, passes:0 },

      { tag:"Il passe",
        text:"Il ne joue rien et <b>passe</b>. Comme la chaîne est vide, il te donne le focus <b>et</b> la priorité.",
        note:"Premier passage consécutif. Si tu passes maintenant, l'affrontement se termine tout de suite.",
        chain:[], hand:["cleave","flurry","ray"], focus:D, prio:D, passes:1 },

      { tag:"Tu joues",
        text:"Tu joues <b>" + RB.esc(C.cleave.n) + "</b>, un sort d'<b>Action</b>. Il se pose sur la chaîne — il ne se résout pas encore.",
        note:"Jouer une carte remet le compteur de passages à zéro. L'affrontement repart pour un tour.",
        chain:["cleave"], hand:["flurry","ray"], focus:D, prio:D, passes:0 },

      { tag:"Tu empiles",
        text:"Tu <b>gardes la priorité</b> et tu empiles <b>" + RB.esc(C.flurry.n) + "</b> par-dessus. Tu peux en ajouter autant que tu veux tant que tu ne passes pas.",
        note:"La chaîne est ouverte : plus personne ne peut jouer d'action. Réactions uniquement — d'où le mot-clé sur la carte.",
        chain:["cleave","flurry"], hand:["ray"], focus:D, prio:D, passes:0 },

      { tag:"Tu passes la prio",
        text:"Tu passes la priorité. La chaîne est pleine, donc tu ne lâches que ça : <b>tu gardes le focus</b>.",
        note:"À lui de décider : empiler une réaction par-dessus, ou passer.",
        chain:["cleave","flurry"], hand:["ray"], focus:D, prio:A, passes:1 },

      { tag:"Il passe aussi",
        text:"Il passe. Deux passages d'affilée → on résout, mais <b>un seul élément</b> : celui du dessus.",
        note:"Le dernier posé part en premier. La chaîne se vide à l'envers.",
        chain:["cleave","flurry"], hand:["ray"], focus:D, prio:A, passes:2, resolveTop:true },

      { tag:"Résolution",
        text:"<b>" + RB.esc(C.flurry.n) + "</b> se résout. La priorité <b>rouvre</b> avant l'élément suivant : vous pouvez encore empiler.",
        note:"Le compteur repart à zéro à chaque résolution. On ne résout jamais toute la chaîne d'un bloc.",
        chain:["cleave"], hand:["ray"], focus:D, prio:D, passes:0 },

      { tag:"Résolution",
        text:"Personne n'ajoute rien : vous passez tous les deux. <b>" + RB.esc(C.cleave.n) + " se résout</b> à son tour.",
        note:"",
        chain:["cleave"], hand:["ray"], focus:D, prio:A, passes:2, resolveTop:true },

      { tag:"Chaîne vide",
        text:"La chaîne est vide. Une fois le <b>dernier</b> élément résolu, le focus passe à l'autre joueur : l'attaquant.",
        note:"Le focus ne bouge pas à chaque résolution, seulement à la fin de la chaîne.",
        chain:[], hand:["ray"], focus:A, prio:A, passes:0 },

      { tag:"Il repasse",
        text:"Il ne joue rien et passe à nouveau. Le focus te revient.",
        note:"Premier passage consécutif. Le suivant est décisif.",
        chain:[], hand:["ray"], focus:D, prio:D, passes:1 },

      { tag:"Décision",
        text:"Ta dernière fenêtre : chaîne vide, focus à toi, <b>" + RB.esc(C.ray.n) + "</b> encore en main. <b>Avoir joué tout à l'heure ne te donne aucun crédit.</b>",
        note:"Avant de passer, demande-toi : est-ce que je serais content que le combat se résolve maintenant ?",
        chain:[], hand:["ray"], focus:D, prio:D, passes:1,
        choices:[
          {label:"Je joue " + C.ray.n, to:11, cls:"def"},
          {label:"Je passe", to:12, cls:"primary"}
        ] },

      { tag:"Ça repart",
        text:"Tu le joues → le compteur retombe à zéro et l'affrontement <b>continue</b>. Ça peut tourner ainsi très longtemps.",
        note:"Tant que quelqu'un joue quelque chose, le combat ne se déclenche jamais.",
        chain:["ray"], hand:[], focus:D, prio:D, passes:0,
        choices:[{label:"↩ Revenir au choix", to:10, cls:""}] },

      { tag:"Fin",
        text:"Tu passes. <b>Deuxième passage consécutif sur chaîne vide</b> → l'affrontement se termine. Plus rien n'est jouable.",
        note:"C'est ça, le moment « trop tard ». " + C.ray.n + " reste en main.",
        chain:[], hand:["ray"], focus:D, prio:A, passes:2, danger:true },

      { tag:"Dégâts",
        text:"Les <b>dégâts de combat</b> tombent, simultanément : chaque unité inflige sa puissance à l'autre (" +
             mAtt + " contre " + mDef + ").",
        note:"Puis le nettoyage efface tous les dégâts du plateau. Les unités blessées mais vivantes repartent intactes.",
        chain:[], hand:["ray"], focus:null, prio:null, passes:0, hit:true }
    ];
  }

  function miniHTML(c, might, hit){
    return '<div class="mini' + (hit ? " hit" : "") + '" data-id="' + RB.esc(c.id) + '">' +
      '<img loading="lazy" src="' + RB.esc(RB.img(c, 220)) + '" alt="' + RB.esc(c.n) + '">' +
      '<span class="m-might">' + might + '</span>' +
      (hit ? '<span class="m-dmg">−' + hit + '</span>' : '') +
      '</div>';
  }

  function render(){
    var s = steps[i];
    var mAtt = RB.mightOf(C.unitAtt) || 5, mDef = RB.mightOf(C.unitDef) || 4;

    // plateau
    root.querySelector("#fieldAtt").innerHTML = miniHTML(C.unitAtt, mAtt, s.hit ? mDef : 0);
    root.querySelector("#fieldDef").innerHTML = miniHTML(C.unitDef, mDef, s.hit ? mAtt : 0);

    root.querySelector("#focusAtt").classList.toggle("on", s.focus === A);
    root.querySelector("#focusDef").classList.toggle("on", s.focus === D);
    root.querySelector("#prioAtt").classList.toggle("on", s.prio === A);
    root.querySelector("#prioDef").classList.toggle("on", s.prio === D);

    // chaîne
    var stack = root.querySelector("#stack");
    if(!s.chain.length){
      stack.innerHTML = '<div class="empty-note">aucun élément en attente</div>';
      root.querySelector("#chainState").textContent = "vide";
    } else {
      root.querySelector("#chainState").textContent =
        s.chain.length + (s.chain.length > 1 ? " éléments" : " élément");
      stack.innerHTML = s.chain.map(function(key, idx){
        var top = idx === s.chain.length - 1;
        var c = C[key];
        var tag = top ? (s.chain.length > 1 ? "dessus · résout en premier" : "seul élément") : "dessous · attend";
        return '<div class="slot' + (top ? " is-top" : "") + (top && s.resolveTop ? " resolving" : "") + '">' +
                 '<div class="slot-tag">' + tag + '</div>' +
                 RB.cardHTML(c, {w:260}) +
                 '<div class="owner-bar" style="--own:var(--def)"></div>' +
               '</div>';
      }).join("");
    }

    // main
    var hand = root.querySelector("#hand");
    hand.innerHTML = s.hand.length
      ? s.hand.map(function(k){ return RB.cardHTML(C[k], {w:260}); }).join("")
      : '<div class="hand-empty">main vide</div>';

    // compteur
    root.querySelector("#pip1").className = "pip" + (s.passes >= 1 ? (s.danger ? " fire" : " on") : "");
    root.querySelector("#pip2").className = "pip" + (s.passes >= 2 ? (s.danger ? " fire" : " on") : "");

    // narration
    root.querySelector("#stepNum").textContent = "Étape " + (i + 1) + " / " + steps.length;
    root.querySelector("#stepTag").textContent = s.tag;
    root.querySelector("#stepText").innerHTML = s.text;
    var note = root.querySelector("#stepNote");
    if(s.note){ note.hidden = false; note.textContent = s.note; } else { note.hidden = true; }

    var choices = root.querySelector("#choices");
    choices.innerHTML = "";
    if(s.choices){
      choices.hidden = false;
      s.choices.forEach(function(ch){
        var b = document.createElement("button");
        b.className = ch.cls;
        b.textContent = ch.label;
        b.addEventListener("click", function(){ stop(); i = ch.to; render(); });
        choices.appendChild(b);
      });
    } else { choices.hidden = true; }

    root.querySelector("#btnPrev").disabled = i === 0;
    root.querySelector("#btnNext").disabled = i === steps.length - 1 || !!s.choices;

    if(playing && (s.choices || i === steps.length - 1)) stop();
  }

  function next(){ if(i < steps.length - 1 && !steps[i].choices){ i++; render(); } }
  function prev(){ if(i > 0){ i--; render(); } }
  function stop(){ playing = false; if(timer){ clearInterval(timer); timer = null; }
    var b = root && root.querySelector("#btnPlay"); if(b) b.textContent = "▶ Lecture"; }
  function play(){
    if(i === steps.length - 1) i = 0;
    playing = true;
    root.querySelector("#btnPlay").textContent = "❚❚ Pause";
    render();
    timer = setInterval(function(){
      if(steps[i].choices || i === steps.length - 1){ stop(); return; }
      next();
    }, 3600);
  }

  function mount(el){
    root = el; i = 0; playing = false;
    build();

    el.innerHTML =
      '<div class="view-head">' +
        '<div class="eyebrow">Affrontement · pas à pas</div>' +
        '<h1>La chaîne, étape par étape</h1>' +
        '<p class="lede">Qui a le focus, qui a la priorité, et à quel moment exact le combat se déclenche. ' +
        'Tu es le <strong style="color:var(--def)">défenseur</strong> : l\'adversaire vient d\'arriver sur ton champ de bataille.</p>' +
      '</div>' +

      '<div class="stack-col">' +
        '<section class="field">' +
          '<div class="seat seat-att">' +
            '<div class="seat-name">Attaquant</div>' +
            '<div class="mini-row" id="fieldAtt"></div>' +
            '<div class="badges"><span class="badge" id="focusAtt">Focus</span>' +
              '<span class="badge" id="prioAtt">Priorité</span></div>' +
          '</div>' +
          '<div class="versus">VS</div>' +
          '<div class="seat seat-def right">' +
            '<div class="seat-name">Défenseur · toi</div>' +
            '<div class="mini-row" id="fieldDef"></div>' +
            '<div class="badges"><span class="badge" id="focusDef">Focus</span>' +
              '<span class="badge" id="prioDef">Priorité</span></div>' +
          '</div>' +
        '</section>' +

        '<section class="chain-col">' +
          '<div class="chain-head"><span class="chain-title">Chaîne</span>' +
            '<span class="chain-state" id="chainState">vide</span></div>' +
          '<div class="stack" id="stack"></div>' +
          '<div class="passes"><span class="passes-label">Passages d\'affilée</span>' +
            '<div class="pips"><span class="pip" id="pip1"></span><span class="pip" id="pip2"></span></div></div>' +
        '</section>' +

        '<section class="hand-zone">' +
          '<div class="hand-head"><span>Ta main</span></div>' +
          '<div class="hand" id="hand"></div>' +
        '</section>' +

        '<section class="narration" aria-live="polite">' +
          '<div class="step-head"><span class="step-num" id="stepNum"></span>' +
            '<span class="step-tag" id="stepTag"></span></div>' +
          '<p class="step-text" id="stepText"></p>' +
          '<p class="step-note" id="stepNote" hidden></p>' +
          '<div class="choices" id="choices" hidden></div>' +
        '</section>' +

        '<div class="controls">' +
          '<button id="btnPrev">◀ Précédent</button>' +
          '<button id="btnPlay" class="primary">▶ Lecture</button>' +
          '<button id="btnNext">Suivant ▶</button>' +
          '<button id="btnReset">↺ Recommencer</button>' +
        '</div>' +

        '<div class="rule-grid">' +
          '<div class="rule-card"><h3>Focus</h3><p>Le droit d\'<b>ouvrir</b> une chaîne. Passer avec la chaîne <b>vide</b> le donne à l\'adversaire. Il revient à l\'autre joueur une fois le <b>dernier</b> élément résolu.</p></div>' +
          '<div class="rule-card"><h3>Priorité</h3><p>Le droit de <b>répondre</b>. Passer avec une chaîne ouverte ne lâche que ça : tu gardes le focus. Chaîne ouverte = <b>réactions uniquement</b>.</p></div>' +
          '<div class="rule-card"><h3>Deux passages</h3><p>Chaîne <b>pleine</b> : on résout un seul élément, celui du dessus. Chaîne <b>vide</b> : l\'affrontement se termine et les dégâts tombent.</p></div>' +
        '</div>' +
      '</div>';

    el.querySelector("#btnNext").addEventListener("click", function(){ stop(); next(); });
    el.querySelector("#btnPrev").addEventListener("click", function(){ stop(); prev(); });
    el.querySelector("#btnPlay").addEventListener("click", function(){ playing ? stop() : play(); });
    el.querySelector("#btnReset").addEventListener("click", function(){ stop(); i = 0; render(); });

    render();
  }

  function unmount(){ stop(); }

  return { mount: mount, unmount: unmount };
})();
