/* ============================================================
   sim.js — simulateur d'affrontement
   Le simulateur applique les règles de timing (focus, priorité,
   chaîne, fin de l'affrontement, dégâts simultanés).
   Les effets des sorts ne sont pas simulés : c'est un outil pour
   comprendre QUAND on peut jouer, pas ce que chaque carte fait.
   ============================================================ */
window.Sim = (function(){
  "use strict";

  var A = "att", D = "def";
  var root = null;
  var setup = { att:{units:[], hand:[]}, def:{units:[], hand:[]} };
  var g = null;           // partie en cours
  var picker = { side:A, kind:"units", q:"" };

  var NAME = {att:"Attaquant", def:"Défenseur"};
  var LE   = {att:"l'attaquant", def:"le défenseur"};
  var AU   = {att:"à l'attaquant", def:"au défenseur"};
  var other = function(s){ return s === A ? D : A; };

  /* ---------------- moteur ---------------- */

  function start(){
    g = {
      chain: [],                        // {card, side}
      focus: A, prio: A, passes: 0,
      units: {
        att: setup.att.units.map(mkUnit),
        def: setup.def.units.map(mkUnit)
      },
      hands: { att: setup.att.hand.slice(), def: setup.def.hand.slice() },
      phase: "showdown",
      log: []
    };
    say("sys", "L'affrontement s'ouvre. <b>L'attaquant</b> a le focus et la priorité.");
    render();
  }

  function mkUnit(c){ return { card:c, might:RB.mightOf(c), dmg:0, dead:false }; }

  function say(cls, html){ g.log.push({cls:cls, html:html}); }

  function canPlay(card, side){
    if(g.phase !== "showdown") return "L'affrontement est terminé.";
    if(g.prio !== side) return "Tu n'as pas la priorité : c'est " + AU[other(side)] + " de parler.";
    if(RB.isReaction(card)) return null;                    // réaction : toujours jouable avec la priorité
    if(g.chain.length) return "La chaîne est ouverte : seules les <b>Réactions</b> sont jouables. Cette carte est une Action.";
    if(g.focus !== side) return "Chaîne vide mais tu n'as pas le focus : tu ne peux pas ouvrir de chaîne. Attends qu'il passe.";
    return null;
  }

  function playCard(side, idx){
    var card = g.hands[side][idx];
    var why = canPlay(card, side);
    if(why){ say("bad", "✕ " + card.n + " — " + why); render(); return; }
    g.hands[side].splice(idx, 1);
    g.chain.push({card:card, side:side});
    g.passes = 0;
    say(side, "<b>" + NAME[side] + "</b> joue <b>" + RB.esc(card.n) + "</b>" +
      (RB.isReaction(card) ? " (Réaction)" : " (Action)") +
      ". Elle se pose sur la chaîne et ne se résout pas encore. Il garde la priorité.");
    render();
  }

  function pass(side){
    if(g.phase !== "showdown") return;
    if(g.prio !== side){ say("bad", "✕ Ce n'est pas à toi de parler."); render(); return; }

    if(g.chain.length){
      g.passes++;
      say(side, NAME[side] + " passe la priorité. La chaîne est pleine, donc il <b>garde le focus</b>.");
      if(g.passes >= 2){
        resolveTop();
      } else {
        g.prio = other(side);
      }
    } else {
      g.passes++;
      say(side, NAME[side] + " passe sur une <b>chaîne vide</b> : il donne le focus et la priorité.");
      if(g.passes >= 2){
        say("sys", "Deux passages d'affilée sur chaîne vide → <b>fin de l'affrontement</b>.");
        damage();
      } else {
        g.focus = other(side);
        g.prio = other(side);
      }
    }
    render();
  }

  function resolveTop(){
    var top = g.chain.pop();
    g.passes = 0;
    say("sys", "<b>" + RB.esc(top.card.n) + "</b> se résout (dernier posé, premier résolu). " +
      "<span style=\"color:var(--text-faint)\">Effet non simulé.</span>");
    if(g.chain.length){
      g.prio = g.chain[g.chain.length - 1].side;
      say("sys", "La priorité rouvre avant l'élément suivant.");
    } else {
      g.focus = other(g.focus);
      g.prio = g.focus;
      say("sys", "Chaîne vide : le focus passe <b>" + AU[g.focus] + "</b>.");
    }
  }

  function totalMight(side){
    return g.units[side].reduce(function(n,u){ return u.dead ? n : n + u.might; }, 0);
  }

  function assign(side, amount){
    // dégâts létaux d'abord, dans l'ordre de la liste
    var list = g.units[side].filter(function(u){ return !u.dead; });
    list.forEach(function(u){
      if(amount <= 0) return;
      var need = u.might - u.dmg;
      if(amount >= need){ u.dmg = u.might; amount -= need; }
      else { u.dmg += amount; amount = 0; }
    });
    list.forEach(function(u){ if(u.dmg >= u.might) u.dead = true; });
  }

  function damage(){
    var mAtt = totalMight(A), mDef = totalMight(D);
    say("sys", "<b>Dégâts de combat</b>, simultanés : " + mAtt + " côté attaquant, " + mDef + " côté défenseur.");
    assign(D, mAtt);
    assign(A, mDef);

    var aliveAtt = g.units[A].filter(function(u){ return !u.dead; }).length;
    var aliveDef = g.units[D].filter(function(u){ return !u.dead; }).length;

    if(aliveAtt && !aliveDef)      g.outcome = {t:"Conquête", p:"Seuls les attaquants survivent : ils prennent le champ de bataille, et l'attaquant marque un point."};
    else if(aliveAtt && aliveDef)  g.outcome = {t:"Attaquants renvoyés", p:"Les deux camps ont des survivants : les attaquants retournent à la base. Le défenseur garde le champ de bataille."};
    else if(!aliveAtt && aliveDef) g.outcome = {t:"Défense tenue", p:"Tous les attaquants sont morts : le défenseur garde le champ de bataille."};
    else                           g.outcome = {t:"Non contrôlé", p:"Tout le monde est mort : le champ de bataille n'appartient à personne."};

    say("sys", "Nettoyage : tous les dégâts des unités survivantes sont effacés.");
    g.phase = "over";
  }

  /* ---------------- rendu ---------------- */

  function unitHTML(u){
    return '<div class="mini' + (u.dead ? " dead" : "") + '">' +
      '<img loading="lazy" src="' + RB.esc(RB.img(u.card, 220)) + '" alt="' + RB.esc(u.card.n) + '">' +
      '<span class="m-might">' + u.might + '</span>' +
      (u.dmg && !u.dead ? '<span class="m-dmg">−' + u.dmg + '</span>' : '') +
      '</div>';
  }

  function handHTML(side){
    if(!g.hands[side].length) return '<div class="hand-empty">main vide</div>';
    return g.hands[side].map(function(c, idx){
      var why = canPlay(c, side);
      return '<div style="position:relative">' +
        RB.cardHTML(c, {w:260}) +
        '<button class="' + (side === A ? "att" : "def") + '" data-play="' + side + ':' + idx + '" ' +
          'style="width:100%;margin-top:5px;font-size:12px;padding:5px 6px" ' +
          (why ? 'title="' + RB.esc(why.replace(/<[^>]+>/g,"")) + '"' : "") + '>' +
          (why ? "injouable" : "Jouer") + '</button>' +
        '</div>';
    }).join("");
  }

  function renderGame(){
    var el = root.querySelector("#simGame");
    var chainHTML = g.chain.length
      ? g.chain.map(function(it, idx){
          var top = idx === g.chain.length - 1;
          return '<div class="slot' + (top ? " is-top" : "") + '">' +
            '<div class="slot-tag">' + (top ? "dessus · résout en premier" : "dessous · attend") + '</div>' +
            RB.cardHTML(it.card, {w:260}) +
            '<div class="owner-bar" style="--own:var(--' + (it.side === A ? "att" : "def") + ')"></div>' +
            '<div class="slot-tag">' + NAME[it.side] + '</div>' +
          '</div>';
        }).join("")
      : '<div class="empty-note">aucun élément en attente</div>';

    var banner = g.phase === "over"
      ? '<div class="turn-banner"><span style="color:var(--gold)">Affrontement terminé</span></div>'
      : '<div class="turn-banner"><span>À qui de parler :</span>' +
        '<span class="who ' + g.prio + '">' + NAME[g.prio] + '</span>' +
        '<span style="color:var(--text-faint);font-size:13px;letter-spacing:0;text-transform:none">' +
        'focus : ' + LE[g.focus] + ' · ' +
        (g.chain.length ? "chaîne ouverte, réactions uniquement" : "chaîne vide, actions possibles") +
        '</span></div>';

    el.innerHTML =
      '<div class="stack-col">' +
        '<section class="field">' +
          '<div class="seat seat-att">' +
            '<div class="seat-name">Attaquant</div>' +
            '<div class="mini-row">' + g.units[A].map(unitHTML).join("") + '</div>' +
            '<div class="badges">' +
              '<span class="badge ' + (g.focus === A ? "on" : "") + '">Focus</span>' +
              '<span class="badge ' + (g.prio === A ? "on" : "") + '">Priorité</span>' +
              '<span class="badge">Puissance totale ' + totalMight(A) + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="versus">VS</div>' +
          '<div class="seat seat-def right">' +
            '<div class="seat-name">Défenseur</div>' +
            '<div class="mini-row">' + g.units[D].map(unitHTML).join("") + '</div>' +
            '<div class="badges">' +
              '<span class="badge ' + (g.focus === D ? "on" : "") + '">Focus</span>' +
              '<span class="badge ' + (g.prio === D ? "on" : "") + '">Priorité</span>' +
              '<span class="badge">Puissance totale ' + totalMight(D) + '</span>' +
            '</div>' +
          '</div>' +
        '</section>' +

        '<section class="chain-col">' +
          '<div class="chain-head"><span class="chain-title">Chaîne</span>' +
            '<span class="chain-state">' + (g.chain.length ? g.chain.length + " élément(s)" : "vide") + '</span></div>' +
          '<div class="stack">' + chainHTML + '</div>' +
          '<div class="passes"><span class="passes-label">Passages d\'affilée</span>' +
            '<div class="pips">' +
              '<span class="pip' + (g.passes >= 1 ? " on" : "") + '"></span>' +
              '<span class="pip' + (g.passes >= 2 ? " fire" : "") + '"></span>' +
            '</div></div>' +
        '</section>' +

        '<section class="panel">' +
          banner +
          (g.phase === "over" ? "" :
            '<div class="act-row" style="margin-top:10px">' +
              '<button class="primary" data-pass="' + g.prio + '">' + NAME[g.prio] + ' passe</button>' +
              '<span class="hint">' + (g.chain.length
                ? "Passer ici ne lâche que la priorité. Si l'autre passe aussi, l'élément du dessus se résout."
                : "Passer ici rend le focus. Si l'autre passe aussi, l'affrontement se termine.") + '</span>' +
            '</div>') +
        '</section>' +

        (g.outcome ? '<section class="outcome"><h3>' + RB.esc(g.outcome.t) + '</h3><p>' + RB.esc(g.outcome.p) + '</p></section>' : "") +

        '<section class="hand-zone">' +
          '<div class="hand-head" style="color:var(--att)"><span>Main de l\'attaquant</span></div>' +
          '<div class="hand">' + handHTML(A) + '</div>' +
        '</section>' +

        '<section class="hand-zone">' +
          '<div class="hand-head"><span>Main du défenseur</span></div>' +
          '<div class="hand">' + handHTML(D) + '</div>' +
        '</section>' +

        '<section class="panel">' +
          '<h3 style="margin-bottom:8px">Déroulé</h3>' +
          '<div class="log">' + g.log.slice().reverse().map(function(l){
            return '<div class="log-line ' + l.cls + '">' + l.html + '</div>';
          }).join("") + '</div>' +
          '<div class="act-row" style="margin-top:12px">' +
            '<button data-restart>↺ Rejouer cet affrontement</button>' +
            '<button data-back>← Changer les cartes</button>' +
          '</div>' +
        '</section>' +
      '</div>';
  }

  /* ---------------- préparation ---------------- */

  function pickerList(){
    var isUnit = picker.kind === "units";
    var q = picker.q.toLowerCase();
    return RB.cards.filter(function(c){
      if(c.r === "Showcase") return false;
      if(isUnit ? c.t !== "Unit" : c.t !== "Spell") return false;
      if(isUnit && !RB.mightOf(c)) return false;
      if(q && (c.n + " " + (c.tx||"")).toLowerCase().indexOf(q) === -1) return false;
      return true;
    }).slice(0, 48);
  }

  function renderSetup(){
    var el = root.querySelector("#simSetup");
    var sideName = NAME[picker.side];

    function chosen(side, kind){
      var list = setup[side][kind];
      if(!list.length) return '<div class="mini-empty">aucune carte choisie</div>';
      return list.map(function(c, idx){
        return '<div class="mini">' +
          '<img loading="lazy" src="' + RB.esc(RB.img(c, 200)) + '" alt="' + RB.esc(c.n) + '">' +
          (kind === "units" ? '<span class="m-might">' + RB.mightOf(c) + '</span>' : '') +
          '<button data-del="' + side + ':' + kind + ':' + idx + '" aria-label="Retirer">✕</button>' +
          '</div>';
      }).join("");
    }

    el.innerHTML =
      '<div class="panel" style="margin-bottom:14px">' +
        '<div class="act-row" style="justify-content:space-between">' +
          '<h2>Prépare l\'affrontement</h2>' +
          '<button class="primary" data-demo>Exemple prêt à jouer</button>' +
        '</div>' +
        '<p class="hint" style="margin-top:8px">Choisis les unités présentes sur le champ de bataille et les sorts en main de chaque joueur. ' +
        'Le simulateur applique les règles de <b>timing</b> : il refuse les coups illégaux et explique pourquoi. Les effets des sorts ne sont pas calculés.</p>' +
      '</div>' +

      '<div class="sim-setup">' +
        ['att','def'].map(function(side){
          return '<div class="panel">' +
            '<h3 style="color:var(--' + side + ')">' + NAME[side] + '</h3>' +
            '<div style="margin-top:10px"><span class="chip">Unités au champ de bataille</span>' +
              '<div class="picked">' + chosen(side,"units") + '</div></div>' +
            '<div style="margin-top:10px"><span class="chip">Sorts en main</span>' +
              '<div class="picked">' + chosen(side,"hand") + '</div></div>' +
            '<div class="act-row" style="margin-top:12px">' +
              '<button data-pick="' + side + ':units">+ Unité</button>' +
              '<button data-pick="' + side + ':hand">+ Sort</button>' +
            '</div></div>';
        }).join("") +
      '</div>' +

      '<div class="panel" style="margin-top:14px">' +
        '<div class="act-row" style="justify-content:space-between">' +
          '<h3>' + (picker.kind === "units" ? "Ajouter une unité" : "Ajouter un sort") + ' · ' + sideName + '</h3>' +
          '<input type="text" id="pq" placeholder="chercher une carte…" value="' + RB.esc(picker.q) + '" style="flex:1;max-width:320px">' +
        '</div>' +
        '<div class="picker-results" id="presults">' +
          pickerList().map(function(c){ return RB.cardHTML(c, {w:220}); }).join("") +
        '</div>' +
      '</div>' +

      '<div class="controls" style="margin-top:16px">' +
        '<button class="primary" data-start ' +
          (setup.att.units.length && setup.def.units.length ? "" : "disabled") + '>Lancer l\'affrontement</button>' +
      '</div>' +
      (setup.att.units.length && setup.def.units.length ? "" :
        '<p class="hint" style="text-align:center;margin-top:8px">Il faut au moins une unité de chaque côté.</p>');

    var pq = el.querySelector("#pq");
    var t = null;
    pq.addEventListener("input", function(){
      clearTimeout(t);
      t = setTimeout(function(){
        picker.q = pq.value.trim();
        el.querySelector("#presults").innerHTML =
          pickerList().map(function(c){ return RB.cardHTML(c, {w:220}); }).join("");
      }, 180);
    });
  }

  function demo(){
    function f(code, filter){ return RB.byCode(code) || RB.cards.filter(filter)[0]; }
    setup.att.units = [f("OGN-001/298", function(c){ return c.t==="Unit" && RB.mightOf(c)===5; })];
    setup.def.units = [f("OGN-012/298", function(c){ return c.t==="Unit" && RB.mightOf(c)===4; })];
    setup.att.hand  = [f("OGN-009/298", function(c){ return c.t==="Spell" && !RB.isReaction(c); })];
    setup.def.hand  = [f("OGN-004/298", function(c){ return c.t==="Spell" && !RB.isReaction(c); }),
                       f("OGN-133/298", function(c){ return c.t==="Spell" && RB.isReaction(c); })];
    renderSetup();
  }

  function render(){
    root.querySelector("#simSetup").hidden = !!g;
    root.querySelector("#simGame").hidden = !g;
    if(g) renderGame(); else renderSetup();
  }

  function mount(el){
    root = el;
    g = null;

    el.innerHTML =
      '<div class="view-head">' +
        '<div class="eyebrow">Bac à sable</div>' +
        '<h1>Simulateur d\'affrontement</h1>' +
        '<p class="lede">Monte une situation avec de vraies cartes, puis déroule la chaîne coup par coup. ' +
        'Le simulateur refuse les coups illégaux et t\'explique la règle à chaque fois.</p>' +
      '</div>' +
      '<div id="simSetup"></div>' +
      '<div id="simGame" hidden></div>';

    el.addEventListener("click", function(e){
      var t = e.target.closest("[data-pick],[data-del],[data-demo],[data-start],[data-play],[data-pass],[data-restart],[data-back]");
      if(!t) return;

      if(t.dataset.pick){
        var p = t.dataset.pick.split(":");
        picker.side = p[0]; picker.kind = p[1]; picker.q = "";
        renderSetup();
        root.querySelector("#pq").focus();
      }
      else if(t.dataset.del){
        var d = t.dataset.del.split(":");
        setup[d[0]][d[1]].splice(parseInt(d[2],10), 1);
        renderSetup();
      }
      else if(t.hasAttribute("data-demo")) demo();
      else if(t.hasAttribute("data-start")) start();
      else if(t.dataset.play){
        var q = t.dataset.play.split(":");
        playCard(q[0], parseInt(q[1],10));
      }
      else if(t.dataset.pass) pass(t.dataset.pass);
      else if(t.hasAttribute("data-restart")) start();
      else if(t.hasAttribute("data-back")){ g = null; render(); }
    });

    // clic sur une carte du sélecteur → ajout
    el.addEventListener("click", function(e){
      var card = e.target.closest("#presults .card");
      if(!card) return;
      var c = RB.byId[card.dataset.id];
      if(!c) return;
      var list = setup[picker.side][picker.kind];
      if(list.length < 4) list.push(c);
      renderSetup();
    }, true);

    render();
  }

  return { mount: mount };
})();
