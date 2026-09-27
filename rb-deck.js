/* ============================================================
   rb-deck.js — construction de deck et mode lecture
   Zones : Légende · Champs de bataille · Deck de runes ·
           Deck principal (unités / équipements / sorts) · Réserve
   ============================================================ */
window.Deck = (function(){
  "use strict";

  var LS_KEY = "rb-deck-v1";

  /* ban Aurora — gb.3+x.星咲, relevé sur riftdecks.com */
  var PRESET = {
    name: "ban Aurora",
    legend: ["SFD-183/221"],
    battlefields: [["UNL-210/219",1], ["SFD-208/221",1], ["OGN-297/298",1]],
    runes: [["OGN-126/298",6], ["OGN-007/298",6]],
    main: [
      ["SFD-113/221",1],                                     // Lucian, Merciless
      ["UNL-112/219",3], ["OGN-136/298",3], ["OGN-132/298",3],
      ["UNL-097/219",3], ["OGN-039/298",3], ["OGN-012/298",3],
      ["OGN-026/298",1], ["SFD-021/221",3],                  // unités
      ["SFD-095/221",3], ["SFD-022/221",3], ["UNL-019/219",2],// équipements
      ["SFD-097/221",3], ["OGN-156/298",3], ["OGN-029/298",2],
      ["SFD-184/221",1]                                      // sorts
    ],
    side: [
      ["VEN-085/166",1], ["OGN-145/298",1], ["VEN-011/166",1],
      ["VEN-083/166",3], ["OGN-026/298",2], ["SFD-105/221",2]
    ]
  };

  var ZONES = {
    legend:       {label:"Légende",           target:1,  types:["Legend"]},
    battlefields: {label:"Champs de bataille", target:3,  types:["Battlefield"]},
    runes:        {label:"Deck de runes",      target:12, types:["Rune"]},
    main:         {label:"Deck principal",     target:40, types:["Unit","Gear","Spell"]},
    side:         {label:"Réserve",            target:10, types:["Unit","Gear","Spell"]}
  };

  var deck = null, root = null;
  var pick = { q:"", zone:"main" };
  var reading = false;

  /* ---------- état ---------- */

  function emptyDeck(){
    return { name:"Mon deck", legend:[], battlefields:[], runes:[], main:[], side:[] };
  }

  function fromPreset(){
    return {
      name: PRESET.name,
      legend: PRESET.legend.map(function(c){ return [c,1]; }),
      battlefields: PRESET.battlefields.slice(),
      runes: PRESET.runes.slice(),
      main: PRESET.main.slice(),
      side: PRESET.side.slice()
    };
  }

  function save(){
    try { localStorage.setItem(LS_KEY, JSON.stringify(deck)); } catch(e){}
  }
  function load(){
    try {
      var raw = localStorage.getItem(LS_KEY);
      if(raw) return JSON.parse(raw);
    } catch(e){}
    return null;
  }

  function count(zone){
    return deck[zone].reduce(function(n, e){ return n + e[1]; }, 0);
  }

  function zoneFor(card){
    if(card.t === "Legend") return "legend";
    if(card.t === "Battlefield") return "battlefields";
    if(card.t === "Rune") return "runes";
    return pick.zone === "side" ? "side" : "main";
  }

  function add(card, delta){
    var z = zoneFor(card);
    var list = deck[z];
    var idx = -1;
    for(var i=0;i<list.length;i++) if(list[i][0] === card.code) idx = i;
    if(idx === -1){
      if(delta > 0) list.push([card.code, 1]);
    } else {
      list[idx][1] += delta;
      if(list[idx][1] <= 0) list.splice(idx, 1);
    }
    if(z === "legend" && deck.legend.length > 1) deck.legend = [deck.legend[deck.legend.length - 1]];
    save();
    render();
  }

  /* ---------- rendu ---------- */

  function entryCards(zone){
    return deck[zone].map(function(e){
      var c = RB.byCode(e[0]);
      return c ? {card:c, qty:e[1]} : null;
    }).filter(Boolean);
  }

  function lineHTML(x){
    var c = x.card;
    return '<div class="dk-line" data-id="' + RB.esc(c.id) + '">' +
      '<span class="dk-qty">' + x.qty + '</span>' +
      '<img class="dk-thumb" loading="lazy" src="' + RB.esc(RB.img(c, 120)) + '" alt="">' +
      '<span class="dk-name">' + RB.esc(RB.displayName(c)) + '</span>' +
      '<span class="dk-cost">' + (c.e != null ? c.e : "—") + '</span>' +
      '<span class="dk-btns">' +
        '<button data-minus="' + RB.esc(c.code) + '" aria-label="Retirer">−</button>' +
        '<button data-plus="' + RB.esc(c.code) + '" aria-label="Ajouter">+</button>' +
      '</span>' +
    '</div>';
  }

  function groupHTML(title, list){
    if(!list.length) return "";
    var n = list.reduce(function(a,x){ return a + x.qty; }, 0);
    return '<div class="dk-group"><div class="dk-group-head">' + RB.esc(title) +
      ' <i>' + n + '</i></div>' + list.map(lineHTML).join("") + '</div>';
  }

  function zoneHTML(zone){
    var z = ZONES[zone], n = count(zone), list = entryCards(zone);
    var body;
    if(zone === "main"){
      var units = list.filter(function(x){ return x.card.t === "Unit"; });
      var gear  = list.filter(function(x){ return x.card.t === "Gear"; });
      var spell = list.filter(function(x){ return x.card.t === "Spell"; });
      body = groupHTML("Unités", units) + groupHTML("Équipements", gear) + groupHTML("Sorts", spell);
    } else {
      body = list.map(lineHTML).join("");
    }
    if(!body) body = '<div class="mini-empty">vide</div>';
    return '<section class="dk-zone dk-' + zone + '">' +
      '<div class="dk-zone-head">' +
        '<span class="dk-zone-name">' + z.label + '</span>' +
        '<span class="dk-zone-count' + (n === z.target ? " ok" : (n > z.target ? " over" : "")) + '">' +
          n + ' / ' + z.target + '</span>' +
      '</div>' + body + '</section>';
  }

  function readingHTML(){
    var all = ["legend","battlefields","main","runes","side"];
    return all.map(function(zone){
      var list = entryCards(zone);
      if(!list.length) return "";
      return '<div class="rd-zone"><h2>' + ZONES[zone].label + '</h2><div class="rd-grid">' +
        list.map(function(x){
          var c = x.card, t = RB.fr(c);
          return '<article class="rd-card" data-id="' + RB.esc(c.id) + '">' +
            '<img loading="lazy" src="' + RB.esc(RB.img(c, 420)) + '" alt="' + RB.esc(c.n) + '">' +
            '<div class="rd-side">' +
              '<div class="rd-top"><span class="rd-qty">' + x.qty + '×</span>' +
                '<span class="rd-name">' + RB.esc((t && t.n) || RB.displayName(c)) + '</span></div>' +
              '<div class="rd-meta">' + RB.esc(RB.typeFR(c.t)) + ' · ' +
                RB.esc((c.d || []).map(RB.domFR).join(" / ")) +
                (c.e != null ? ' · ' + RB.esc(c.e) + ' Énergie' : '') +
                (c.m != null ? ' · Puissance ' + RB.esc(c.m) : '') + '</div>' +
              (t ? '<p class="rd-fr">' + RB.esc(t.tx) + '</p>' +
                   (t.note ? '<p class="rd-note">' + RB.esc(t.note) + '</p>' : '')
                 : '<p class="rd-vo">' + RB.symbols(c.tx || "") + '</p>' +
                   '<p class="rd-note">Pas encore traduite.</p>') +
            '</div></article>';
        }).join("") + '</div></div>';
    }).join("");
  }

  function pickerResults(){
    var q = pick.q.toLowerCase();
    if(!q) return [];
    return RB.cards.filter(function(c){
      if(c.r === "Showcase") return false;
      return ((c.fn || c.n) + " " + (c.tx || "") + " " + c.code).toLowerCase().indexOf(q) !== -1;
    }).slice(0, 24);
  }

  function render(){
    if(reading){
      root.querySelector("#dkBody").innerHTML = '<div class="reading">' + readingHTML() + '</div>';
      root.querySelector("#dkRead").textContent = "← Revenir à l'édition";
      root.querySelector("#dkTools").hidden = true;
      return;
    }
    root.querySelector("#dkRead").textContent = "Mode lecture · second écran";
    root.querySelector("#dkTools").hidden = false;

    root.querySelector("#dkBody").innerHTML =
      '<div class="dk-cols">' +
        '<div class="dk-col">' + zoneHTML("legend") + zoneHTML("battlefields") + zoneHTML("runes") + zoneHTML("side") + '</div>' +
        '<div class="dk-col">' + zoneHTML("main") + '</div>' +
      '</div>';

    var res = root.querySelector("#dkResults");
    var list = pickerResults();
    res.innerHTML = list.length
      ? list.map(function(c){ return RB.cardHTML(c, {w:220}); }).join("")
      : '<div class="mini-empty">' + (pick.q ? "aucune carte" : "tape un nom pour chercher") + '</div>';

    root.querySelector("#dkName").value = deck.name;
  }

  function mount(el){
    root = el;
    deck = load() || fromPreset();
    reading = false;

    el.innerHTML =
      '<div class="view-head">' +
        '<div class="eyebrow">Deck · construction et lecture</div>' +
        '<h1>Mon deck</h1>' +
        '<p class="lede">Compose ton deck zone par zone, puis bascule en <b>mode lecture</b> pour l\'afficher sur ton second écran ' +
        'pendant une partie : grandes cartes et traduction française à côté.</p>' +
      '</div>' +

      '<div class="dk-bar">' +
        '<input type="text" id="dkName" aria-label="Nom du deck">' +
        '<button id="dkRead" class="primary">Mode lecture · second écran</button>' +
        '<button id="dkPreset">Charger « ban Aurora »</button>' +
        '<button id="dkClear">Vider</button>' +
        '<button id="dkCopy">Copier la liste</button>' +
      '</div>' +

      '<div class="panel" id="dkTools" style="margin:14px 0">' +
        '<div class="act-row" style="justify-content:space-between;gap:12px">' +
          '<h3>Ajouter des cartes</h3>' +
          '<label class="field" style="flex:1;max-width:340px">' +
            '<input type="text" id="dkQ" placeholder="nom, texte, numéro…"></label>' +
          '<label class="field"><span>Destination des sorts, unités et équipements</span>' +
            '<select id="dkZone"><option value="main">Deck principal</option>' +
            '<option value="side">Réserve</option></select></label>' +
        '</div>' +
        '<p class="hint" style="margin-top:8px">Les légendes, champs de bataille et runes vont automatiquement dans leur zone. ' +
        'Clique une carte du résultat pour l\'ajouter.</p>' +
        '<div class="picker-results" id="dkResults"></div>' +
      '</div>' +

      '<div id="dkBody"></div>';

    var q = el.querySelector("#dkQ"), t = null;
    q.addEventListener("input", function(){
      clearTimeout(t);
      t = setTimeout(function(){ pick.q = q.value.trim(); render(); }, 180);
    });
    el.querySelector("#dkZone").addEventListener("change", function(e){ pick.zone = e.target.value; });
    el.querySelector("#dkName").addEventListener("input", function(e){ deck.name = e.target.value; save(); });

    el.querySelector("#dkRead").addEventListener("click", function(){ reading = !reading; render(); });
    el.querySelector("#dkPreset").addEventListener("click", function(){ deck = fromPreset(); save(); render(); });
    el.querySelector("#dkClear").addEventListener("click", function(){ deck = emptyDeck(); save(); render(); });
    el.querySelector("#dkCopy").addEventListener("click", function(e){
      var txt = textList();
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(txt).then(function(){
          e.target.textContent = "Liste copiée ✓";
          setTimeout(function(){ e.target.textContent = "Copier la liste"; }, 1800);
        }, function(){ showList(txt); });
      } else showList(txt);
    });

    el.addEventListener("click", function(ev){
      var plus = ev.target.closest("[data-plus]"), minus = ev.target.closest("[data-minus]");
      if(plus || minus){
        ev.stopPropagation();
        var code = (plus || minus).dataset.plus || (plus || minus).dataset.minus;
        var c = RB.byCode(code);
        if(c){
          var saveZone = pick.zone;
          pick.zone = inSide(code) ? "side" : "main";
          add(c, plus ? 1 : -1);
          pick.zone = saveZone;
        }
        return;
      }
      var card = ev.target.closest("#dkResults .card");
      if(card && card.dataset.id){
        ev.stopPropagation();
        var cc = RB.byId[card.dataset.id];
        if(cc) add(cc, 1);
      }
    }, true);

    render();
  }

  function inSide(code){
    for(var i=0;i<deck.side.length;i++) if(deck.side[i][0] === code) return true;
    return false;
  }

  function textList(){
    var out = [deck.name, ""];
    ["legend","battlefields","runes","main","side"].forEach(function(z){
      var list = entryCards(z);
      if(!list.length) return;
      out.push("# " + ZONES[z].label + " (" + count(z) + ")");
      list.forEach(function(x){ out.push(x.qty + "x " + RB.displayName(x.card)); });
      out.push("");
    });
    return out.join("\n");
  }

  function showList(txt){
    var m = document.getElementById("modalBody");
    m.innerHTML = '<h2 style="font-family:var(--serif);margin-bottom:10px">Liste du deck</h2>' +
      '<textarea readonly style="width:100%;height:320px;background:var(--ground-2);color:var(--text);' +
      'border:1px solid var(--line);border-radius:4px;padding:10px;font-family:var(--sans);font-size:14px">' +
      RB.esc(txt) + '</textarea>';
    document.getElementById("modal").hidden = false;
  }

  return { mount: mount };
})();
