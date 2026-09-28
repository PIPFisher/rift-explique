/* ============================================================
   rb-turn.js — un tour de jeu complet, pas à pas
   Réveil · Initiale · Canalisation · Pioche · Principale · Fin
   ============================================================ */
window.Turn = (function(){
  "use strict";

  var PHASES = ["Réveil", "Initiale", "Canalisation", "Pioche", "Principale", "Fin"];
  var root = null, i = 0, playing = false, timer = null, steps = [];
  var C = {};

  function pick(code, filter){
    return RB.byCode(code) || RB.cards.filter(filter || function(){ return false; })[0] || RB.cards[0];
  }

  function build(){
    C.enforcer = pick("OGN-003/298", function(c){ return c.t === "Unit" && RB.mightOf(c) === 2; });
    C.rearguard= pick("OGN-010/298", function(c){ return c.t === "Unit" && RB.mightOf(c) === 2; });
    C.poro     = pick("OGN-013/298", function(c){ return c.t === "Unit" && RB.mightOf(c) === 2; });
    C.duo      = pick("OGN-016/298", function(c){ return c.t === "Unit" && RB.mightOf(c) === 3; });

    // état de départ : début de ton deuxième tour
    var base0  = { runes:{ready:0, spent:4, recycled:0}, pool:{e:0, p:0}, score:{you:2, them:1} };

    function S(o){                      // fabrique un état en partant du précédent
      var d = {
        phase:0, tag:"", text:"", note:"",
        runes:{ready:0, spent:0, recycled:0}, pool:{e:0, p:0}, score:{you:2, them:1},
        hand:[], base:[], bfA:[], bfB:[], deck:6, bfBmine:false
      };
      for(var k in o) d[k] = o[k];
      return d;
    }

    function u(card, exhausted, dmg, tag){
      return {card:card, exhausted:!!exhausted, dmg:dmg || 0, tag:tag || ""};
    }

    var poroHeld  = function(){ return [u(C.poro, false, 0, "tient")]; };
    var enemyDuo  = function(dmg, dead){ return [{card:C.duo, exhausted:false, dmg:dmg||0, dead:!!dead, enemy:true}]; };

    steps = [
      S({ phase:0, tag:"Réveil",
        text:"Ton tour commence par le <b>Réveil</b> : toutes tes runes, unités et équipements se <b>redressent</b>.",
        note:"C'est la phase A du moyen mnémotechnique A-B-C-D : Awaken, Beginning, Channel, Draw. Les quatre se font sans que personne ne puisse intervenir.",
        runes:{ready:4, spent:0, recycled:0},
        base:[u(C.enforcer, false)], bfA:poroHeld(), bfB:enemyDuo() }),

      S({ phase:1, tag:"Initiale",
        text:"Phase <b>Initiale</b> : tu tenais le champ de bataille depuis ton dernier tour, donc tu <b>marques 1 point</b>.",
        note:"C'est ici que les unités Temporaires meurent, juste avant le score. Tenir rapporte un point à chaque tour où le champ est encore à toi.",
        runes:{ready:4, spent:0, recycled:0}, score:{you:3, them:1},
        base:[u(C.enforcer, false)], bfA:poroHeld(), bfB:enemyDuo() }),

      S({ phase:2, tag:"Canalisation",
        text:"Tu <b>canalises 2 runes</b> depuis ton deck de runes vers ta base. Tu en as maintenant six.",
        note:"Les runes ne se jouent pas depuis la main : elles viennent d'un deck à part. C'est ta montée en puissance, deux par tour.",
        runes:{ready:6, spent:0, recycled:0}, score:{you:3, them:1}, deck:4,
        base:[u(C.enforcer, false)], bfA:poroHeld(), bfB:enemyDuo() }),

      S({ phase:3, tag:"Pioche",
        text:"Tu <b>pioches 1 carte</b>. Puis ta réserve se vide — elle est déjà vide ici, mais retiens-le : ce qui n'est pas dépensé est perdu.",
        note:"La réserve se vide deux fois par tour : à la fin de la Pioche et à la fin du tour.",
        runes:{ready:6, spent:0, recycled:0}, score:{you:3, them:1}, deck:4,
        hand:[C.rearguard],
        base:[u(C.enforcer, false)], bfA:poroHeld(), bfB:enemyDuo() }),

      S({ phase:4, tag:"Principale",
        text:"Phase <b>Principale</b>. Pour payer, tu <b>épuises 2 runes</b> : chaque rune épuisée donne <b>1 Énergie</b>.",
        note:"Une rune peut faire deux choses différentes : l'épuiser donne de l'Énergie, la recycler donne de l'Essence runique de son domaine. Jamais les deux à la fois.",
        runes:{ready:4, spent:2, recycled:0}, pool:{e:2, p:0}, score:{you:3, them:1}, deck:4,
        hand:[C.rearguard],
        base:[u(C.enforcer, false)], bfA:poroHeld(), bfB:enemyDuo() }),

      S({ phase:4, tag:"Choix",
        text:"Tu joues <b>" + RB.esc(C.rearguard.n) + "</b> pour 2 Énergie. Mais elle a <b>Accélération</b> : tu peux payer un supplément pour qu'elle arrive <b>prête</b> au lieu d'épuisée.",
        note:"Par défaut, une unité arrive toujours épuisée : elle ne peut donc pas bouger le tour où tu la joues. L'Équipement, lui, arrive prêt.",
        runes:{ready:4, spent:2, recycled:0}, pool:{e:2, p:0}, score:{you:3, them:1}, deck:4,
        hand:[C.rearguard],
        base:[u(C.enforcer, false)], bfA:poroHeld(), bfB:enemyDuo(),
        choices:[
          {label:"Je la joue simplement", to:6, cls:""},
          {label:"Je paie l'Accélération", to:7, cls:"def"}
        ] }),

      S({ phase:4, tag:"Sans accélération",
        text:"Elle arrive <b>épuisée</b>. Elle défendra si on l'attaque, mais elle ne bougera pas avant ton prochain Réveil.",
        note:"Ta réserve est vide : les 2 Énergie ont été dépensées.",
        runes:{ready:4, spent:2, recycled:0}, pool:{e:0, p:0}, score:{you:3, them:1}, deck:4,
        base:[u(C.enforcer, false), u(C.rearguard, true, 0, "arrive épuisée")],
        bfA:poroHeld(), bfB:enemyDuo(),
        next:8 }),

      S({ phase:4, tag:"Avec accélération",
        text:"Tu épuises une rune de plus et tu en <b>recycles</b> une : 1 Énergie et 1 essence runique en plus. Elle arrive <b>prête</b>.",
        note:"Recycler une rune la met dans ta défausse de runes et donne de l'Essence runique de son domaine. C'est ce qui paie les coûts en essence runique.",
        runes:{ready:2, spent:3, recycled:1}, pool:{e:0, p:0}, score:{you:3, them:1}, deck:4,
        base:[u(C.enforcer, false), u(C.rearguard, false, 0, "arrive prête")],
        bfA:poroHeld(), bfB:enemyDuo(),
        next:8 }),

      S({ phase:4, tag:"Déplacement",
        text:"Tu envoies <b>" + RB.esc(C.enforcer.n) + "</b> de ta base vers le champ adverse. Se déplacer <b>épuise</b> l'unité, et comme l'ennemi est là, un <b>affrontement</b> se déclenche.",
        note:"Celui qui bouge est l'attaquant. Son mot-clé Assaut 2 lui donne +2 Puissance tant qu'elle attaque : elle frappe donc à 4 et non à 2.",
        runes:{ready:4, spent:2, recycled:0}, score:{you:3, them:1}, deck:4,
        base:[u(C.rearguard, true)],
        bfA:poroHeld(),
        bfB:[u(C.enforcer, true, 0, "attaque · 4"), {card:C.duo, exhausted:false, dmg:0, enemy:true}] }),

      S({ phase:4, tag:"Affrontement",
        text:"L'affrontement s'ouvre : focus, priorité, chaîne. Personne ne joue de sort, les deux passent — les <b>dégâts tombent simultanément</b>.",
        note:"C'est tout l'onglet « La chaîne » qui se joue ici. Va le voir si tu veux le détail du timing.",
        runes:{ready:4, spent:2, recycled:0}, score:{you:3, them:1}, deck:4,
        base:[u(C.rearguard, true)],
        bfA:poroHeld(),
        bfB:[u(C.enforcer, true, 3, "4 dégâts infligés"), {card:C.duo, exhausted:false, dmg:4, dead:true, enemy:true}] }),

      S({ phase:4, tag:"Conquête",
        text:"Son unité à 3 Puissance encaisse 4 : elle meurt. La tienne encaisse 3 mais tient à 4. <b>Seuls les attaquants survivent → tu conquiers</b>, et tu marques un point.",
        note:"Les trois issues : seuls les attaquants survivent → conquête ; les deux camps survivent → les attaquants rentrent à la base ; tout le monde meurt → personne ne contrôle.",
        runes:{ready:4, spent:2, recycled:0}, score:{you:4, them:1}, deck:4,
        base:[u(C.rearguard, true)],
        bfA:poroHeld(),
        bfBmine:true,
        bfB:[u(C.enforcer, true, 3, "conquiert")] }),

      S({ phase:5, tag:"Fin du tour",
        text:"Phase de <b>Fin</b> : les dégâts marqués sont effacés, les effets « ce tour-ci » expirent, et ta réserve se vide.",
        note:"Ton unité repart intacte. Au prochain Réveil elle se redressera, et à ta phase Initiale tu marqueras un point pour chaque champ que tu tiens encore — deux, maintenant.",
        runes:{ready:4, spent:2, recycled:0}, score:{you:4, them:1}, deck:4,
        base:[u(C.rearguard, true)],
        bfA:poroHeld(),
        bfBmine:true,
        bfB:[u(C.enforcer, true, 0, "tient")] })
    ];
  }

  /* ---------- rendu ---------- */

  function unitHTML(x){
    var cls = "mini" + (x.dead ? " dead" : "") + (x.exhausted ? " tapped" : "");
    return '<div class="' + cls + '" data-id="' + RB.esc(x.card.id) + '">' +
      '<img loading="lazy" src="' + RB.esc(RB.img(x.card, 200)) + '" alt="' + RB.esc(x.card.n) + '">' +
      '<span class="m-might">' + RB.mightOf(x.card) + '</span>' +
      (x.dmg ? '<span class="m-dmg">−' + x.dmg + '</span>' : '') +
      (x.tag ? '<span class="m-tag">' + RB.esc(x.tag) + '</span>' : '') +
      '</div>';
  }

  function zone(title, list, owner){
    return '<div class="zone zone-' + owner + '">' +
      '<div class="zone-name">' + title + '</div>' +
      '<div class="zone-cards">' +
        (list.length ? list.map(unitHTML).join("") : '<div class="mini-empty">vide</div>') +
      '</div></div>';
  }

  function render(){
    var s = steps[i];

    // rail des phases
    root.querySelector("#rail").innerHTML = PHASES.map(function(p, idx){
      return '<span class="ph' + (idx === s.phase ? " on" : "") + (idx < s.phase ? " done" : "") + '">' +
        p + '</span>';
    }).join('<span class="ph-sep">›</span>');

    // runes et réserve
    var r = s.runes;
    var runeDots = "";
    for(var a=0;a<r.ready;a++)    runeDots += '<i class="rune ready" title="rune prête"></i>';
    for(var b=0;b<r.spent;b++)    runeDots += '<i class="rune spent" title="rune épuisée → Énergie"></i>';
    for(var c=0;c<r.recycled;c++) runeDots += '<i class="rune recycled" title="rune recyclée → Essence runique"></i>';
    root.querySelector("#runes").innerHTML = runeDots;
    root.querySelector("#poolE").textContent = s.pool.e;
    root.querySelector("#poolP").textContent = s.pool.p;
    root.querySelector("#deckN").textContent = s.deck;
    root.querySelector("#scoreYou").textContent = s.score.you;
    root.querySelector("#scoreThem").textContent = s.score.them;

    // zones
    root.querySelector("#zones").innerHTML =
      zone("Ta base", s.base, "you") +
      zone("Champ de bataille · à toi", s.bfA, "held") +
      zone(s.bfBmine ? "Champ de bataille · conquis" : "Champ de bataille · contesté",
           s.bfB, s.bfBmine ? "held" : "enemy");

    // main
    root.querySelector("#thand").innerHTML = s.hand.length
      ? s.hand.map(function(c){ return RB.cardHTML(c, {w:260}); }).join("")
      : '<div class="hand-empty">main vide</div>';

    // narration
    root.querySelector("#tNum").textContent = "Étape " + (i + 1) + " / " + steps.length;
    root.querySelector("#tTag").textContent = s.tag;
    root.querySelector("#tText").innerHTML = s.text;
    var note = root.querySelector("#tNote");
    if(s.note){ note.hidden = false; note.textContent = s.note; } else { note.hidden = true; }

    var ch = root.querySelector("#tChoices");
    ch.innerHTML = "";
    if(s.choices){
      ch.hidden = false;
      s.choices.forEach(function(x){
        var b = document.createElement("button");
        b.className = x.cls;
        b.textContent = x.label;
        b.addEventListener("click", function(){ stop(); i = x.to; render(); });
        ch.appendChild(b);
      });
    } else { ch.hidden = true; }

    root.querySelector("#tPrev").disabled = i === 0;
    root.querySelector("#tNext").disabled = i === steps.length - 1 || !!s.choices;

    if(playing && (s.choices || i === steps.length - 1)) stop();
  }

  function next(){
    var s = steps[i];
    if(s.choices) return;
    if(s.next != null){ i = s.next; render(); return; }
    if(i < steps.length - 1){ i++; render(); }
  }
  function prev(){ if(i > 0){ i--; render(); } }
  function stop(){ playing = false; if(timer){ clearInterval(timer); timer = null; }
    var b = root && root.querySelector("#tPlay"); if(b) b.textContent = "▶ Lecture"; }
  function play(){
    if(i === steps.length - 1) i = 0;
    playing = true;
    root.querySelector("#tPlay").textContent = "❚❚ Pause";
    render();
    timer = setInterval(function(){
      if(steps[i].choices || i === steps.length - 1){ stop(); return; }
      next();
    }, 4200);
  }

  function mount(el){
    root = el; i = 0; playing = false;
    build();

    el.innerHTML =
      '<div class="view-head">' +
        '<div class="eyebrow">Découverte · un tour complet</div>' +
        '<h1>Un tour de jeu</h1>' +
        '<p class="lede">Du réveil des runes jusqu\'à la fin du tour : ce qu\'on fait, dans quel ordre, et pourquoi. ' +
        'Deux chemins possibles au moment de jouer ton unité.</p>' +
      '</div>' +

      '<div class="stack-col">' +
        '<div class="rail" id="rail"></div>' +

        '<section class="board-head">' +
          '<div class="counter"><span>Ton score</span><b id="scoreYou">2</b><i>/ 8</i></div>' +
          '<div class="counter"><span>Adversaire</span><b id="scoreThem">1</b><i>/ 8</i></div>' +
          '<div class="counter"><span>Énergie</span><b id="poolE">0</b></div>' +
          '<div class="counter"><span>Essence runique</span><b id="poolP">0</b></div>' +
          '<div class="counter"><span>Deck de runes</span><b id="deckN">6</b></div>' +
        '</section>' +

        '<section class="runes-row">' +
          '<span class="runes-label">Tes runes</span>' +
          '<div class="runes" id="runes"></div>' +
          '<span class="runes-key"><i class="rune ready"></i> prête <i class="rune spent"></i> épuisée → Énergie ' +
            '<i class="rune recycled"></i> recyclée → Essence runique</span>' +
        '</section>' +

        '<section class="zones" id="zones"></section>' +

        '<section class="hand-zone">' +
          '<div class="hand-head"><span>Ta main</span></div>' +
          '<div class="hand" id="thand"></div>' +
        '</section>' +

        '<section class="narration" aria-live="polite">' +
          '<div class="step-head"><span class="step-num" id="tNum"></span>' +
            '<span class="step-tag" id="tTag"></span></div>' +
          '<p class="step-text" id="tText"></p>' +
          '<p class="step-note" id="tNote" hidden></p>' +
          '<div class="choices" id="tChoices" hidden></div>' +
        '</section>' +

        '<div class="controls">' +
          '<button id="tPrev">◀ Précédent</button>' +
          '<button id="tPlay" class="primary">▶ Lecture</button>' +
          '<button id="tNext">Suivant ▶</button>' +
          '<button id="tReset">↺ Recommencer</button>' +
        '</div>' +

        '<div class="rule-grid">' +
          '<div class="rule-card"><h3>A · B · C · D</h3><p>Réveil, Initiale, Canalisation, Pioche. Ces quatre phases s\'enchaînent <b>sans interruption possible</b>.</p></div>' +
          '<div class="rule-card"><h3>Une rune, deux usages</h3><p>L\'<b>épuiser</b> donne 1 Énergie. La <b>recycler</b> donne 1 Essence runique de son domaine. Au choix, pas les deux.</p></div>' +
          '<div class="rule-card"><h3>Rien ne se garde</h3><p>La réserve se vide à la fin de la Pioche <b>et</b> à la fin du tour. Les dégâts aussi sont effacés.</p></div>' +
        '</div>' +
      '</div>';

    el.querySelector("#tNext").addEventListener("click", function(){ stop(); next(); });
    el.querySelector("#tPrev").addEventListener("click", function(){ stop(); prev(); });
    el.querySelector("#tPlay").addEventListener("click", function(){ playing ? stop() : play(); });
    el.querySelector("#tReset").addEventListener("click", function(){ stop(); i = 0; render(); });

    render();
  }

  function unmount(){ stop(); }

  return { mount: mount, unmount: unmount };
})();
