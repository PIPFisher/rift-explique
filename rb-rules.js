/* ============================================================
   rules.js — guide des règles qui coincent + lexique
   ============================================================ */
window.Rules = (function(){
  "use strict";

  var SECTIONS = [
    {
      title:"L'affrontement",
      lede:"Un affrontement se déclenche dès qu'une unité arrive sur un champ de bataille occupé par l'adversaire.",
      steps:[
        {t:"Attaquant et défenseur", s:"Celui qui <b>bouge</b> ses unités est l'attaquant. Celui qui était déjà là est le défenseur. Ça ne dépend pas de qui joue son tour."},
        {t:"Champ de bataille vide", s:"Arriver sur un endroit sans défenseur donne un affrontement <b>sans combat</b> : pas de dégâts, et les déclenchements « quand j'attaque » ne partent pas."},
        {t:"Les dégâts sont simultanés", s:"Chaque unité inflige des dégâts égaux à sa puissance, en même temps. Il n'y a pas de premier frappeur : on ne peut pas taper sans être tapé, sauf effet qui retire l'unité du combat avant."},
        {t:"L'assignation", s:"Il faut assigner des dégâts <b>létaux</b> à une unité avant de passer à la suivante. <b>Tank</b> encaisse en premier, <b>Arrière-ligne</b> en dernier."},
        {t:"Les trois issues", s:"Seuls les attaquants survivent → ils <b>conquièrent</b>. Les deux camps survivent → les attaquants sont <b>renvoyés à la base</b>. Tout le monde meurt → le champ de bataille reste <b>non contrôlé</b>."},
        {t:"Le nettoyage", s:"Juste après les dégâts, <b>toutes</b> les unités du plateau sont soignées, pas seulement celles qui ont combattu. Rien ne se reporte au tour suivant."}
      ]
    },
    {
      title:"Focus, priorité, chaîne",
      lede:"La partie la plus déroutante du jeu. Trois notions qu'on confond tout le temps.",
      steps:[
        {t:"La chaîne", s:"Tout ce qu'on joue s'empile dessus au lieu de se résoudre tout de suite. Le <b>dernier posé se résout en premier</b>."},
        {t:"Le focus", s:"Le droit d'<b>ouvrir</b> une chaîne. En affrontement, l'attaquant l'a en premier. Il passe à l'autre joueur quand tu passes sur une chaîne vide, ou quand le dernier élément d'une chaîne s'est résolu."},
        {t:"La priorité", s:"Le droit de <b>répondre</b>. Elle circule à chaque fois qu'une carte est posée. Poser une carte ne t'enferme pas : l'adversaire peut toujours empiler par-dessus."},
        {t:"Action ou Réaction", s:"Une <b>Action</b> ne se joue que si la chaîne est <b>vide</b> et que tu as le focus. Une <b>Réaction</b> se joue à tout moment où tu as la priorité. Chaîne ouverte = réactions uniquement."},
        {t:"Garder la priorité", s:"Tu peux empiler plusieurs cartes d'affilée avant de passer. Utile pour protéger un sort ou enchaîner deux effets."},
        {t:"Quand c'est trop tard", s:"L'affrontement se termine quand les deux joueurs passent <b>d'affilée sur une chaîne vide</b>. Avoir joué plus tôt ne donne aucun crédit : si tu passes et qu'il passe, les dégâts tombent."}
      ]
    },
    {
      title:"Marquer des points",
      lede:"On gagne à 8 points en duel, 11 en 2 contre 2.",
      steps:[
        {t:"Conquérir", s:"Prendre un champ de bataille à l'adversaire rapporte un point immédiatement."},
        {t:"Tenir", s:"Garder un champ de bataille jusqu'à ta phase initiale suivante rapporte un point, avant le reste du tour."},
        {t:"Le dernier point", s:"Le point de la victoire par conquête n'est accordé que si tu as marqué sur <b>tous les autres</b> champs de bataille ce tour-ci. Les effets qui disent explicitement « marque un point » échappent à cette restriction."}
      ]
    },
    {
      title:"Les pièges de débutant",
      lede:"Les erreurs qu'on fait tous les premières parties.",
      steps:[
        {t:"Les unités arrivent épuisées", s:"Sauf mention contraire ou <b>Accélération</b>. Une unité jouée ce tour-ci ne peut donc pas bouger. Le matériel, lui, arrive prêt."},
        {t:"Énergie et Essence runique", s:"Épuiser une rune donne de l'<b>Énergie</b>, la recycler donne de l'<b>Essence runique</b> de son domaine. La même rune peut faire les deux, mais pas en même temps."},
        {t:"Essence runique et Puissance", s:"Deux notions que l'anglais distingue par <i>Power</i> et <i>Might</i>, et que la VF nomme ainsi. L'<b>essence runique</b> est une ressource : elle vient des runes recyclées et sert à payer les coûts colorés. La <b>Puissance</b> est la valeur de combat imprimée sur l'unité. Sur ce site, le symbole <b>P</b> désigne l'essence runique et <b>M</b> la Puissance."},
        {t:"La réserve se vide", s:"Ce qui n'est pas dépensé est perdu à la fin de la phase de pioche et à la fin du tour."},
        {t:"Une seule amélioration", s:"Une unité ne peut avoir qu'un seul bonus d'<b>Amélioration</b> à la fois. En revanche Assaut, Bouclier et Protection se cumulent."},
        {t:"Contester n'est pas perdre", s:"Tant que l'affrontement n'est pas résolu, tu gardes le contrôle du champ de bataille."},
        {t:"Les cibles sont verrouillées", s:"On choisit les cibles au moment où la carte est posée sur la chaîne, pas à la résolution. Impossible de changer d'avis après la réponse de l'adversaire."}
      ]
    }
  ];

  function exampleFor(kw){
    var tok = "[" + kw;
    for(var i=0;i<RB.cards.length;i++){
      var c = RB.cards[i];
      if((c.tx || "").indexOf(tok) !== -1 && c.r !== "Showcase") return c;
    }
    return null;
  }

  function mount(el){
    var glossary = Object.keys(RB.KEYWORDS).sort().map(function(k){
      var e = RB.KEYWORDS[k];
      var ex = exampleFor(k);
      return '<div class="gl">' +
        '<div class="gl-head"><span class="gl-en">' + RB.esc(k) + '</span>' +
          '<span class="gl-fr">' + RB.esc(e.fr) + '</span></div>' +
        '<p>' + RB.esc(e.txt) + '</p>' +
        (ex ? '<div class="ex">Exemple : <a data-card="' + RB.esc(ex.id) + '">' + RB.esc(ex.n) + '</a></div>' : '') +
        '</div>';
    }).join("");

    var sections = SECTIONS.map(function(sec){
      return '<section class="panel" style="margin-bottom:16px">' +
        '<h2 style="margin-bottom:4px">' + RB.esc(sec.title) + '</h2>' +
        '<p class="lede" style="margin-bottom:12px">' + RB.esc(sec.lede) + '</p>' +
        '<div class="steps-list">' +
          sec.steps.map(function(s, idx){
            return '<div class="step-item"><div class="no">' + (idx + 1) + '</div>' +
              '<div><p><b>' + RB.esc(s.t) + '</b></p><p class="sub">' + s.s + '</p></div></div>';
          }).join("") +
        '</div></section>';
    }).join("");

    el.innerHTML =
      '<div class="view-head">' +
        '<div class="eyebrow">Guide · pour bien démarrer</div>' +
        '<h1>Les règles qui coincent</h1>' +
        '<p class="lede">L\'essentiel pour jouer sans se tromper, en quatre chapitres. ' +
        'Le lexique en bas donne la traduction française de chaque mot-clé, avec une carte en exemple.</p>' +
      '</div>' +
      sections +
      '<section class="panel">' +
        '<h2 style="margin-bottom:4px">Lexique des mots-clés</h2>' +
        '<p class="lede" style="margin-bottom:12px">Les cartes ne sont pas encore traduites officiellement : voici l\'équivalent français et ce que fait chaque mot-clé.</p>' +
        '<div class="glossary">' + glossary + '</div>' +
      '</section>';
  }

  return { mount: mount };
})();
