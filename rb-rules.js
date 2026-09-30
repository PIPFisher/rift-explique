/* ============================================================
   rules.js — guide des règles qui coincent + lexique
   ============================================================ */
window.Rules = (function(){
  "use strict";

  var SECTIONS = [
    {
      title:"L'affrontement",
      lede:"Un affrontement s'ouvre dès qu'un champ de bataille est contesté — que l'adversaire y ait des unités ou non. Le combat, lui, n'arrive que si les deux camps en ont sur place.",
      steps:[
        {t:"Attaquant et défenseur", s:"Celui qui <b>bouge</b> ses unités est l'attaquant. Celui qui était déjà là est le défenseur. Ça ne dépend pas de qui joue son tour."},
        {t:"Champ de bataille vide", s:"Arriver sur un endroit sans unité adverse donne un affrontement <b>sans combat</b> : pas de dégâts, et les déclenchements « quand j'attaque » ne partent pas. S'il ne reste que tes unités, tu prends le contrôle du champ de bataille."},
        {t:"Les dégâts sont mis en commun", s:"Chaque camp <b>additionne la Puissance de toutes ses unités présentes</b> et répartit ce total sur les unités adverses. Les deux camps le font en même temps : il n'y a pas de premier frappeur, on ne peut pas taper sans être tapé, sauf effet qui retire l'unité du combat avant."},
        {t:"L'assignation", s:"Il faut assigner des dégâts <b>létaux</b> à une unité avant de passer à la suivante. <b>Tank</b> encaisse en premier, <b>Arrière-ligne</b> en dernier."},
        {t:"Les trois issues", s:"Seuls les attaquants survivent → ils <b>conquièrent</b>. Les deux camps survivent → les attaquants sont <b>renvoyés à la base</b>. Tout le monde meurt → le champ de bataille reste <b>non contrôlé</b>."},
        {t:"Le soin d'après combat", s:"Juste après les dégâts, <b>toutes</b> les unités du plateau sont soignées, pas seulement celles qui ont combattu. Rien ne se reporte au tour suivant."}
      ]
    },
    {
      title:"Focus, priorité, chaîne",
      lede:"La partie la plus déroutante du jeu. Trois notions qu'on confond tout le temps.",
      steps:[
        {t:"La chaîne", s:"Tout ce qu'on joue s'empile dessus au lieu de se résoudre tout de suite. Le <b>dernier posé se résout en premier</b>."},
        {t:"Le focus", s:"Le droit d'<b>ouvrir</b> une chaîne, pendant un affrontement. Celui qui a contesté le champ de bataille l'a en premier ; il passe à l'autre joueur quand le dernier élément d'une chaîne s'est résolu. Hors affrontement, le focus n'existe pas."},
        {t:"La priorité", s:"Le droit d'<b>agir</b> : personne ne fait rien de son propre chef sans elle. Poser une carte ne t'enferme pas — l'adversaire pourra empiler par-dessus dès qu'il aura la parole. Avoir le focus sans avoir la priorité ne permet rien."},
        {t:"Action ou Réaction", s:"Une <b>Action</b> se joue aussi pendant un affrontement, sur le tour de n'importe qui, à condition que la chaîne soit <b>vide</b>. Une <b>Réaction</b> fait tout cela <i>et</i> se joue chaîne non vide, donc en réponse à une carte adverse. Chaîne ouverte = réactions uniquement."},
        {t:"Garder la priorité", s:"Poser une carte ne te fait pas perdre la main : tu peux en poser une deuxième avant de passer. L'adversaire ne répond qu'une fois que tu as passé. Utile pour protéger un sort ou enchaîner deux effets."},
        {t:"Quand c'est trop tard", s:"L'affrontement se termine quand les deux joueurs passent <b>d'affilée sur une chaîne vide</b>. Avoir joué plus tôt ne donne aucun crédit : si tu passes et qu'il passe, les dégâts tombent."}
      ]
    },
    {
      title:"Marquer des points",
      lede:"On gagne à 8 points en duel, 11 en 2 contre 2.",
      steps:[
        {t:"Conquérir", s:"Prendre le contrôle d'un champ de bataille rapporte un point immédiatement — qu'il ait été à l'adversaire ou qu'il n'ait appartenu à personne."},
        {t:"Tenir", s:"Garder un champ de bataille jusqu'à ta phase initiale suivante rapporte un point, avant le reste du tour."},
        {t:"Le dernier point", s:"Dès qu'un point de plus te ferait gagner, la conquête cesse de rapporter automatiquement : elle ne donne le point final que si tu as marqué sur <b>tous</b> les champs de bataille ce tour-ci. Sinon, tu pioches une carte à la place. Les effets qui disent explicitement « gagne un point » échappent à cette restriction."}
      ]
    },
    {
      title:"Les pièges de débutant",
      lede:"Les erreurs qu'on fait tous les premières parties.",
      steps:[
        {t:"Les unités arrivent épuisées", s:"Sauf mention contraire ou <b>Accélération</b>. Une unité jouée ce tour-ci ne peut donc pas bouger. Les équipements, eux, arrivent prêts."},
        {t:"Énergie et Essence runique", s:"Épuiser une rune donne de l'<b>Énergie</b>, la recycler donne de l'<b>Essence runique</b> de son domaine. La même rune peut faire les deux, mais pas en même temps."},
        {t:"Essence runique et Puissance", s:"Deux notions que l'anglais distingue par <i>Power</i> et <i>Might</i>, et que ce site rend ainsi pour éviter la collision entre « Power » et « Puissance ». L'<b>essence runique</b> est une ressource : elle vient des runes recyclées et sert à payer les coûts colorés. La <b>Puissance</b> est la valeur de combat imprimée sur l'unité. Dans les traductions, les coûts sont écrits en pictogrammes comme sur les cartes : un <b>rond</b> pour l'Énergie, un <b>losange</b> pour l'essence runique (violet quand le domaine est libre), un <b>écusson</b> pour la Puissance. Survole-les pour la lecture en toutes lettres."},
        {t:"La réserve se vide", s:"Ce qui n'est pas dépensé est perdu à la fin de la phase de pioche et à la fin du tour."},
        {t:"Une seule amélioration", s:"Une unité ne peut avoir qu'un seul bonus d'<b>Amélioration</b> à la fois. En revanche Assaut, Bouclier et Protection se cumulent."},
        {t:"Se faire contester n'est pas perdre", s:"Si tu contrôlais le champ de bataille avant l'attaque, tu le contrôles encore pendant tout l'affrontement. Le contrôle ne change qu'à la fin du combat."},
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
