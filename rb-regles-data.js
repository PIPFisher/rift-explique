/* ============================================================
   rb-regles-data.js — le contenu de la référence.
   Réécriture française des règles complètes de Riot Games
   (version du 16 juillet 2026). Chaque règle porte le numéro
   de l'article correspondant, pour pouvoir le vérifier.
   ============================================================ */
window.REGLES_DATA = {
  maj: "16 juillet 2026",
  source: "https://playriftbound.com/en-us/rules-hub/",

  chapitres: [

  /* ================= LE VOCABULAIRE =================
     Les chapitres suivants emploient une vingtaine de mots précis sans
     jamais s'arrêter pour les définir, ce qui bloque quiconque découvre le
     jeu. Ce chapitre les définit, et ne fait que ça. */
  {
    id: "vocabulaire",
    titre: "Le vocabulaire du jeu",
    couleur: "ardoise",
    eyebrow: "Avant tout le reste",
    indexTitre: "Les %n mots du jeu, par ordre alphabétique",
    lede: "Épuiser, recycler, rappeler, marquer, prédire… Les règles emploient ces mots " +
      "comme si tout le monde les connaissait. Les voici, une ligne chacun. " +
      "Si un mot te bloque dans les chapitres suivants, il est ici.",
    sections: [
      {
        id: "voc-lieux",
        titre: "Les endroits",
        q: "Base, champ de bataille, défausse, bannissement : c'est quoi tout ça ?",
        rep: "Les endroits où une carte peut se trouver. Un seul rapporte des points : le <b>champ de bataille</b>.",
        intro: "Il existe un septième endroit, la <b>chaîne</b>, où les cartes jouées attendent " +
          "de se résoudre : c'est le sujet du chapitre suivant.",
        mots: [
          { m: "La main", id: "voc-main",
            r: "<b>Les cartes que tu as en main</b>, que tu es seul à voir.",
            p: ["C'est de là que partent la plupart des cartes que tu joues."] },
          { m: "La base", id: "voc-base",
            r: "<b>Ton camp, en dehors des champs de bataille.</b> Tes unités y arrivent quand tu les joues, et y reviennent quand elles sont rappelées.",
            p: ["Chaque joueur a la sienne. On ne s'y bat pas : il n'y a pas de combat dans une base."] },
          { m: "Un champ de bataille", id: "voc-champ",
            r: "<b>Un des lieux qu'on se dispute.</b> C'est le seul endroit qui rapporte des points, donc le seul véritable enjeu de la partie.",
            p: ["Tu le <b>contrôles</b> quand, après un affrontement, tu es le seul à y avoir des unités.",
                "Un champ de bataille où plus personne n'a d'unité est <b>non contrôlé</b> : il n'appartient à personne."] },
          { m: "Le deck principal", id: "voc-deck",
            r: "<b>La pile dans laquelle tu pioches.</b>",
            p: ["« Recycler » et « prédire » agissent tous les deux sur le dessus de cette pile."] },
          { m: "Le deck de runes", id: "voc-deckrunes",
            r: "<b>Une seconde pile, de douze runes</b>, tenue à part du deck principal.",
            p: ["C'est de là que vient ce que tu dépenses : sans runes, rien ne se paie."] },
          { m: "La défausse", id: "voc-defausse",
            r: "<b>Où vont les cartes une fois utilisées, et les unités tuées.</b>",
            p: ["Rien n'y est perdu définitivement : le mot-clé <b>Flux</b> (<i>Flow</i>) permet de rejouer un sort depuis la défausse."] },
          { m: "Le bannissement", id: "voc-bannissement",
            r: "<b>Hors jeu, définitivement.</b> Une carte bannie ne revient pas.",
            p: ["C'est toute la différence avec la défausse, où une carte reste accessible."] }
        ]
      },
      {
        id: "voc-payer",
        titre: "Les ressources",
        q: "Énergie, Essence runique, Puissance : je confonds tout.",
        rep: "L'Énergie et l'Essence runique sont deux ressources : la première vient d'une rune <b>épuisée</b>, la seconde d'une rune <b>recyclée</b>. La <b>Puissance</b> n'a rien à voir avec elles, c'est la valeur de combat de l'unité.",
        mots: [
          { m: "Une rune", id: "voc-rune",
            r: "<b>Une carte d'un type à part, qui ne se bat pas</b> : elle ne sert qu'à produire ce avec quoi tu paies. Chaque rune appartient à un domaine.",
            p: ["Tu l'<b>épuises</b> pour obtenir de l'Énergie, ou tu la <b>recycles</b> pour obtenir une Essence runique de son domaine. La même rune peut faire l'un ou l'autre, jamais les deux en même temps.",
                "Les runes sont tenues à part, dans un deck de douze."] },
          { m: "La réserve", id: "voc-reserve",
            r: "<b>Ce que tu as sous la main pour payer en ce moment</b> : ton Énergie et tes Essences runiques disponibles.",
            p: ["Elle ne se garde pas d'un moment du tour à l'autre : ce que tu n'as pas dépensé disparaît."] },
          { m: "L'Énergie", id: "voc-energie",
            r: "<b>La ressource neutre.</b> Tu l'obtiens en <b>épuisant</b> une rune.",
            p: ["Elle paie les coûts écrits dans un <b>rond</b>, sans condition de couleur."] },
          { m: "L'Essence runique", id: "voc-essence",
            r: "<b>La ressource colorée.</b> Tu l'obtiens en <b>recyclant</b> une rune, et elle prend le domaine de cette rune.",
            p: ["Elle paie les coûts écrits dans un <b>losange</b>. Un losange violet accepte n'importe quel domaine.",
                "L'anglais l'appelle <i>Power</i> — d'où le choix de ne pas la nommer « Puissance » ici, pour ne pas la confondre avec la valeur de combat."] },
          { m: "Le domaine", id: "voc-domaine",
            r: "<b>La couleur d'une carte.</b> Il décide quelle Essence runique peut payer ses coûts colorés.",
            p: ["Une même carte peut appartenir à plusieurs domaines."] },
          { m: "Épuiser", id: "voc-epuiser",
            r: "<b>Tourner une carte de côté pour s'en servir.</b> Une rune épuisée donne de l'Énergie ; une unité épuisée a fini d'agir.",
            p: ["L'inverse, c'est être <b>prête</b>. Remettre une carte droite s'appelle la <b>redresser</b>."] },
          { m: "Recycler", id: "voc-recycler",
            r: "<b>Remettre une carte sous ton deck principal.</b> Recycler une rune donne en plus une Essence runique de son domaine.",
            p: ["Une même rune peut donc servir aux deux usages — mais pas en même temps : soit tu l'épuises, soit tu la recycles."] },
          { m: "La Puissance", id: "voc-puissance",
            r: "<b>La valeur de combat d'une unité.</b> Elle sert deux fois : elle dit combien de dégâts l'unité inflige, et combien elle en encaisse avant de mourir.",
            p: ["Elle est écrite dans un <b>écusson</b> sur la carte.",
                "L'anglais la note <i>Might</i>. Ne pas la confondre avec <i>Power</i>, qui est l'Essence runique."] }
        ]
      },
      {
        id: "voc-unite",
        titre: "L'état d'une unité",
        q: "Mon unité est « épuisée », « marquée », « rappelée » : elle est morte ?",
        rep: "Aucun des trois ne veut dire morte. Épuisée, elle a déjà agi ; marquée, elle traîne des dégâts sans être tombée. Rappelée, c'est le moins grave : elle est rentrée à la base intacte, et elle repartira.",
        mots: [
          { m: "Prête ou épuisée", id: "voc-prete",
            r: "<b>Une unité prête peut agir ; une unité épuisée, non.</b>",
            p: ["Les unités arrivent <b>épuisées</b> : celle que tu viens de jouer ne peut pas bouger ce tour-ci.",
                "Sauf avec le mot-clé <b>Accélération</b> (<i>Accelerate</i>), qui la fait arriver prête. Un équipement, en revanche, arrive toujours prêt."] },
          { m: "Un permanent", id: "voc-permanent",
            r: "<b>Toute carte qui reste sur le plateau</b> : une unité, un équipement, une rune, une carte cachée.",
            p: ["Par opposition à un sort, qui part à la défausse dès qu'il s'est résolu."] },
          { m: "Les dégâts marqués", id: "voc-marques",
            r: "<b>Les dégâts encaissés restent inscrits sur l'unité</b> jusqu'au prochain soin. Elle meurt quand ils atteignent sa Puissance.",
            p: ["C'est ce qui explique qu'une unité déjà blessée demande moins de dégâts pour être tuée."] },
          { m: "Soigner", id: "voc-soigner",
            r: "<b>Effacer les dégâts marqués.</b>",
            p: ["Après chaque combat, <b>toutes</b> les unités du plateau sont soignées — pas seulement celles qui se sont battues. Rien ne se reporte au tour suivant."] },
          { m: "Rappeler", id: "voc-rappeler",
            r: "<b>Renvoyer une unité à sa base.</b> Elle n'est ni tuée ni défaussée : elle quitte simplement le champ de bataille.",
            p: ["C'est ce qui arrive aux attaquants quand des défenseurs tiennent encore après un combat.",
                "Si un rappel remplace une mort, l'unité n'allant pas à la défausse, son <b>Agonie</b> (<i>Deathknell</i>) ne se déclenche pas."] },
          { m: "Un Buff", vo: "Buff", id: "voc-amelioration",
            r: "<b>Un bonus de +1 Puissance posé sur une unité.</b>",
            p: ["Une unité ne peut en porter qu'un seul à la fois. <b>Assault</b>, <b>Shield</b> et <b>Deflect</b> se cumulent, en revanche."] }
        ]
      },
      {
        id: "voc-tour",
        titre: "Les moments du tour",
        q: "« Phase initiale », « étape de score », « vérification de légalité » : c'est quand ?",
        rep: "Ce sont des moments du tour que le document officiel nomme sans jamais s'arrêter dessus. La phase initiale ouvre ton tour, et l'étape de score en fait partie. La vérification de légalité n'a rien à voir avec le tour : elle a lieu juste après que tu as joué une carte.",
        mots: [
          { m: "La phase initiale", id: "voc-initiale",
            r: "<b>Le début de ton tour.</b> C'est là qu'on regarde les champs de bataille que tu tiens, et là que meurent les unités <b>Temporaire</b> (<i>Temporary</i>).",
            p: ["Une unité qui meurt à ce moment-là meurt <i>avant</i> qu'on compte les points : elle ne tient rien."] },
          { m: "L'étape de score", id: "voc-score",
            r: "<b>Le moment de la phase initiale où les champs de bataille que tu tiens rapportent leur point.</b>" },
          { m: "Marquer", id: "voc-marquer",
            r: "<b>Gagner un point sur un champ de bataille</b>, soit en le prenant (<b>conquérir</b>), soit en le gardant jusqu'à ta phase initiale (<b>tenir</b>).",
            p: ["Un même champ de bataille ne rapporte qu'une fois par tour et par joueur."] },
          { m: "L'XP", id: "voc-xp",
            r: "<b>De l'expérience, qui s'accumule au fil de la partie.</b> Elle appartient au joueur, pas à une carte en particulier.",
            p: ["Le mot-clé <b>Chasse</b> (<i>Hunt</i> sur la carte) t'en fait gagner quand tu conquiers ou que tu tiens un champ de bataille.",
                "Le mot-clé <b>Niveau</b> (<i>Level</i>) s'en sert comme d'un seuil : une partie du texte de la carte ne s'applique que si tu as atteint le nombre d'XP indiqué. Si ton XP redescend en dessous, cette partie cesse de s'appliquer."] },
          { m: "La vérification de légalité", id: "voc-legalite",
            r: "<b>Le contrôle qui suit immédiatement le fait de jouer une carte.</b>",
            p: ["S'il révèle qu'une condition obligatoire n'a pas pu être remplie, tout est annulé et la carte retourne d'où elle vient.",
                "C'est aussi le moment où une carte posée sur la chaîne cesse d'être « en attente » pour être <b>finalisée</b>."] },
          { m: "Predict", vo: "Predict", id: "voc-predire",
            r: "<b>Regarder la première carte de ton deck principal</b>, puis choisir de la laisser ou de la recycler.",
            p: ["C'est ce que fait le mot-clé <b>Vision</b> quand ton permanent arrive."] }
        ]
      }
    ]
  },

  /* ================= LA CHAÎNE ================= */
  {
    id: "chaine",
    titre: "La chaîne, le focus et la priorité",
    couleur: "sarcelle",
    eyebrow: "Quand deux cartes se répondent",
    lede: "Ces trois mots sont employés l'un pour l'autre en permanence, et tout le reste en dépend. " +
      "La <b>chaîne</b> est l'endroit où les cartes attendent leur résolution. La <b>priorité</b> " +
      "est le droit d'agir, le <b>focus</b> celui d'ouvrir une chaîne pendant un affrontement. " +
      "On peut très bien détenir le focus sans pouvoir rien faire, et c'est ce qui fait croire " +
      "à beaucoup de joueurs qu'ils ont le droit de répondre alors qu'ils ne l'ont pas.",
    sections: [
      {
        id: "ch-quoi",
        titre: "Ce qu'est la chaîne",
        q: "Il a joué après moi : qui se résout en premier ?",
        rep: "Lui. Le dernier élément posé est le premier résolu, donc répondre à un sort revient à passer devant.",
        ref: "327 à 331",
        intro: "Rien ne se résout au moment où on le joue. Tout passe d'abord par la chaîne, " +
          "où l'adversaire peut réagir.",
        regles: [
          { ref: "328", t: "La chaîne est une zone temporaire.",
            d: "Elle n'existe que le temps qu'une carte y soit posée : dès qu'elle se vide, elle disparaît." },
          { ref: "330.1", t: "Il n'existe jamais qu'une seule chaîne à la fois.",
            d: "Si une carte est jouée alors qu'une chaîne existe déjà, elle se pose sur celle-ci au lieu d'en créer une nouvelle." },
          { ref: "329", t: "Une carte posée est d'abord « en attente », puis « finalisée ».",
            d: "Elle reste en attente jusqu'à l'étape de vérification de légalité. C'est seulement une fois finalisée qu'elle occupe vraiment sa place sur la chaîne." },
          { ref: "340.1", t: "Le dernier élément finalisé se résout en premier.",
            d: "La chaîne se vide à l'envers de l'ordre dans lequel on l'a remplie." }
        ],
        erreurs: [
          { t: "« J'ai joué avant lui, donc ça passe en premier. »",
            d: "Non : c'est l'inverse. Le sort posé en dernier se résout le premier. Répondre à un sort, c'est le devancer." }
        ]
      },
      {
        id: "ch-prio",
        titre: "Priorité et focus",
        q: "J'ai le focus, je fais ce que je veux ?",
        rep: "Le focus donne le droit de <b>rouvrir</b> la chaîne, pas celui d'agir — ça, c'est la priorité, et il te faut les deux en même temps. En revanche, passer la priorité ne te fait pas perdre le focus.",
        ref: "311 à 313",
        regles: [
          { ref: "312", t: "Un seul joueur détient la priorité à la fois.",
            d: "C'est le droit exclusif d'entreprendre une action volontaire. Sans priorité, on ne fait rien de son propre chef." },
          { ref: "312.1.b.1", t: "Les choix imposés par une carte ne demandent pas la priorité.",
            d: "Si un effet t'ordonne de choisir, tu choisis, même sans priorité." },
          { ref: "313.2", t: "Qui gagne le focus gagne aussi la priorité.",
            d: "Les deux arrivent ensemble." },
          { ref: "313.3", t: "Passer la priorité ne fait pas perdre le focus.",
            d: "Tu peux laisser l'adversaire répondre tout en gardant le droit de rouvrir derrière lui. Beaucoup de joueurs passent leur tour sans le savoir." },
          { ref: "313.4", t: "Le focus seul ne suffit pas pour agir.",
            d: "Il faut détenir la priorité en même temps." },
          { ref: "313.5", t: "Hors affrontement, personne n'a le focus.",
            d: "La notion n'existe qu'en état d'affrontement." }
        ],
        cas: [
          { t: "Le focus restreint ce qu'on peut jouer.",
            d: "Le joueur qui a le focus pendant un affrontement ne peut poser que des cartes ayant <b>Action</b> ou <b>Réaction</b> — article 313.1.a." }
        ]
      },
      {
        id: "ch-etapes",
        titre: "Les quatre étapes de résolution",
        q: "À partir de quand ma carte est-elle vraiment jouée ?",
        rep: "Une fois <b>finalisée</b>. Avant, elle est en attente et tout peut encore être annulé — et on ne peut pas répondre à une unité qui arrive, elle saute l'attente.",
        ref: "332 à 340",
        regles: [
          { ref: "337", t: "1 · Finaliser.",
            d: "Le contrôleur de l'élément en attente le plus ancien termine de le jouer. Finaliser ne passe pas la priorité." },
          { ref: "337.2", t: "Unités, équipements et capacités qui ajoutent des ressources se résolvent aussitôt.",
            d: "Ils sautent l'attente : on passe directement à l'étape 4. On ne peut donc pas répondre à une unité qui arrive." },
          { ref: "338", t: "2 · Exécuter.",
            d: "Le joueur qui a la priorité peut poser une carte, si le moment s'y prête, ou passer." },
          { ref: "338.1.a.1", t: "Dès qu'une carte est posée sur la chaîne, seules les Réactions peuvent encore être jouées.",
            d: "Les Actions demandent une chaîne vide : une fois quelque chose posé dessus, elles ne passent plus." },
          { ref: "339.1", t: "3 · Passer.",
            d: "Quand tous les joueurs ont passé d'affilée sans rien ajouter, on résout." },
          { ref: "340.1", t: "4 · Résoudre.",
            d: "Le dernier élément finalisé se résout entièrement, puis on recommence la boucle s'il reste quelque chose." }
        ],
        erreurs: [
          { t: "« Il a répondu, je ne peux plus rien faire. »",
            d: "Si : la priorité revient après chaque ajout. Tant que les deux joueurs n'ont pas passé d'affilée, la chaîne reste ouverte." },
          { t: "Vouloir réagir à une unité.",
            d: "Impossible par la voie normale : une unité se résout dès sa finalisation, sans fenêtre de réponse (337.2)." }
        ]
      }
    ]
  },

  /* ================= L'AFFRONTEMENT ================= */
  {
    id: "affrontement",
    titre: "L'affrontement",
    couleur: "rouge",
    eyebrow: "Se battre pour un champ de bataille",
    lede: "C'est le morceau le plus lourd, et celui qui arrête les parties. " +
      "Un affrontement est une <b>fenêtre</b> où les deux joueurs posent des sorts à tour de rôle ; " +
      "un combat est ce qui arrive ensuite, si les deux camps ont encore des unités sur place.",
    sections: [
      {
        id: "af-quoi",
        titre: "Affrontement et combat ne sont pas la même chose",
        q: "On se bat dès qu'on arrive sur un champ de bataille ?",
        rep: "Pas encore, et souvent pas du tout. Ce qui s'ouvre, c'est l'affrontement, le moment où chacun joue ses sorts. Le combat ne vient qu'ensuite, et seulement si <b>deux joueurs</b> ont des unités sur place.",
        ref: "341 à 344, 460",
        regles: [
          { ref: "342", t: "Un affrontement est une fenêtre où les joueurs jouent des sorts en alternance.",
            d: "Chaque sort ainsi joué crée une chaîne normale." },
          { ref: "344", t: "Un affrontement s'ouvre quand le contrôle d'un champ de bataille est contesté.",
            d: "Il faut que ce soit pendant un nettoyage et que le tour soit en état neutre ouvert." },
          { ref: "344.1", t: "Si deux joueurs ont des unités sur place, l'affrontement devient un affrontement de combat.",
            d: "C'est la première étape du combat, et le combat s'enclenche là." },
          { ref: "344.2", t: "Contester sans unité adverse ouvre un affrontement simple.",
            d: "S'il n'y a pas d'unités de deux joueurs différents, l'affrontement s'ouvre au prochain nettoyage, sans combat." },
          { ref: "461", t: "Un combat est « en attente » tant que ses étapes n'ont pas démarré.",
            d: "Deux joueurs ont des unités au même endroit, mais rien n'est encore résolu." },
          { ref: "461.2", t: "Un combat mis en attente n'est pas un combat garanti.",
            d: "Si les unités partent ou meurent avant que les étapes ne démarrent, le combat n'a tout simplement jamais lieu." },
          { ref: "462", t: "Un combat n'oppose jamais plus de deux joueurs.",
            d: "Même sur une table à trois ou quatre joueurs, un combat n'oppose jamais que deux camps." }
        ],
        cas: [
          { t: "Plusieurs combats en attente en même temps.",
            d: "C'est le joueur dont c'est le tour qui choisit lequel résoudre en premier — article 461.1." },
          { t: "À plus de deux joueurs, un combat ferme la zone.",
            d: "Un champ de bataille où un combat est en attente ou en cours devient une destination interdite pour les autres joueurs (462.1), et on ne peut pas y jouer d'unité (462.2). Une unité qui devait y arriver part dans la base de son contrôleur à la place." }
        ],
        erreurs: [
          { t: "Arriver sur un champ vide et attendre un combat.",
            d: "Non. Sans unité adverse, il n'y a pas de combat : pas de dégâts, et les capacités « quand j'attaque » ne se déclenchent pas." }
        ]
      },
      {
        id: "af-focus",
        titre: "Qui parle, et dans quel ordre",
        q: "C'est à qui de jouer pendant un affrontement ?",
        rep: "À celui qui a contesté le champ de bataille, puis on alterne chaque fois qu'une chaîne se vide. L'affrontement se termine quand les deux passent <b>d'affilée</b>.",
        ref: "345 à 348",
        regles: [
          { ref: "345", t: "Le joueur qui a contesté le champ de bataille gagne le focus.",
            d: "C'est lui qui ouvre la discussion." },
          { ref: "346", t: "Quand le dernier élément de la chaîne se résout, le focus passe à l'autre joueur.",
            d: "Il gagne le focus et la priorité ensemble." },
          { ref: "346.1", t: "Le focus ne passe pas si la chaîne venait d'un déclenchement.",
            d: "Ni d'une capacité qui ajoute des ressources. La chaîne de combat s'ouvre ainsi : le focus reste donc au même joueur." },
          { ref: "347", t: "Le joueur qui a le focus fait l'un des deux : jouer, ou passer.",
            d: "Jouer une carte ou une capacité que le moment autorise ouvre une chaîne ; quand elle se referme, le focus passe." },
          { ref: "347.2.a", t: "Quand tous les joueurs ont passé une fois d'affilée, l'affrontement se termine.",
            d: "C'est le seul moyen de le clore." },
          { ref: "348.1", t: "Si c'était un affrontement de combat, on enchaîne sur les étapes du combat.",
            d: "Les dégâts arrivent maintenant." },
          { ref: "348.2.a", t: "Si c'était un affrontement simple, le survivant prend le contrôle.",
            d: "S'il ne reste que les unités d'un seul joueur et qu'il ne contrôlait pas encore le champ de bataille, il en prend le contrôle." }
        ],
        erreurs: [
          { t: "« J'ai déjà joué, donc j'ai le droit de rejouer avant les dégâts. »",
            d: "Avoir joué plus tôt ne donne aucun crédit. L'affrontement se termine dès que les deux joueurs passent d'affilée sur une chaîne vide : si tu passes et qu'il passe, les dégâts tombent." }
        ]
      },
      {
        id: "af-etapes",
        titre: "Les trois étapes du combat",
        q: "Qui est l'attaquant, et que se passe-t-il exactement ?",
        rep: "L'attaquant est celui qui a bougé ses unités, et ça ne dépend pas de qui joue son tour. Chaque camp met ensuite en commun la Puissance de ses unités et la répartit sur celles d'en face. Tout tombe d'un coup, puis on soigne les survivants.",
        ref: "463 à 466",
        intro: "Une fois l'affrontement clos, le combat se déroule toujours dans cet ordre.",
        regles: [
          { ref: "464", t: "Étape 1 · l'affrontement de combat.",
            d: "Les effets de début de combat se déclenchent, puis on établit qui est attaquant et qui est défenseur." },
          { ref: "464.2.c.1", t: "L'attaquant est celui dont les unités ont contesté le champ de bataille.",
            d: "Ce n'est pas une question de tour : celui qui bouge est l'attaquant, même si ce n'est pas son tour." },
          { ref: "465", t: "Étape 2 · les dégâts de combat.",
            d: "Chaque camp additionne la Puissance de ses unités et répartit ce total sur les unités adverses." },
          { ref: "465.2.c.1", t: "Assigner des dégâts n'est pas les infliger.",
            d: "On répartit d'abord, puis tout est infligé simultanément. Les deux notions ne sont pas interchangeables." },
          { ref: "466.1", t: "Étape 3 · la résolution.",
            d: "On effectue un nettoyage de combat, on détermine le résultat, puis le contrôle du champ de bataille." },
          { ref: "466.1.a.1", t: "Toutes les unités sont soignées.",
            d: "Pas seulement celles qui ont combattu, et pas seulement sur ce champ de bataille : rien ne se reporte au tour suivant." },
          { ref: "466.1.a.2", t: "Les attaquants sont rappelés si des défenseurs tiennent encore.",
            d: "Ils repartent à leur base." }
        ],
        cas: [
          { t: "Le résultat « aucun ».",
            d: "Il n'y a pas de vainqueur si les attaquants ont été rappelés, si les deux joueurs ont encore des unités, ou si plus personne n'en a — article 466.3.d. Si les deux camps tiennent encore, un nouvel affrontement et un nouveau combat sont remis en attente au même endroit." },
          { t: "Plus personne sur place.",
            d: "Si aucune unité ne reste, le champ de bataille devient non contrôlé (466.5.b)." },
          { t: "Les cartes cachées sautent.",
            d: "Toute carte cachée sur ce champ de bataille dont le contrôleur n'est pas celui du champ est retirée (466.5.c)." }
        ]
      },
      {
        id: "af-assignation",
        titre: "Répartir les dégâts : la règle du létal",
        q: "Je peux étaler mes dégâts comme je veux ?",
        rep: "La répartition obéit à deux contraintes en sens inverse. Tu dois tuer une unité <b>complètement</b> avant de toucher la suivante, et tu ne peux jamais lui assigner plus que le minimum qui suffit. L'attaquant répartit en premier.",
        ref: "465.2.c",
        regles: [
          { ref: "465.2.c", t: "L'attaquant répartit en premier.",
            d: "Chaque joueur répartit un total égal à la somme des Puissances de ses unités." },
          { ref: "465.2.c.3", t: "Une unité doit recevoir des dégâts létaux complets avant de passer à la suivante.",
            d: "Létal veut dire : une quantité de dégâts, forcément supérieure à zéro, suffisante pour la tuer — c'est-à-dire égal ou supérieur à ce qu'il lui reste de Puissance, dégâts déjà marqués déduits. Une unité déjà blessée demande donc moins." },
          { ref: "465.2.c.4", t: "On ne peut pas surcharger une unité.",
            d: "Pas plus que le minimum nécessaire pour la tuer, sauf s'il ne reste plus aucune autre unité à qui assigner." }
        ],
        cas: [
          { t: "Exemple officiel du minimum.",
            d: "5 dégâts à répartir sur quatre unités de 3 Puissance : interdit de mettre 2 sur l'une et 1 sur chacune des trois autres. Il faut en mettre au moins 3 sur une, puis les 2 restants sur une autre." },
          { t: "Exemple officiel du plafond.",
            d: "5 dégâts, quatre unités de 3 Puissance ayant déjà 1 dégât marqué : interdit d'assigner plus de 2 à l'une d'elles, puisque 2 suffisent à les tuer." },
          { t: "Quand les dégâts sont augmentés en route.",
            d: "Si un effet remplace le montant assigné par un montant supérieur, le joueur doit choisir la valeur minimale qui reste létale — article 465.2.c.4.a." }
        ],
        erreurs: [
          { t: "Étaler les dégâts pour « blesser » tout le monde.",
            d: "Le jeu l'interdit. Tu tues d'abord, tu répartis le reste ensuite." }
        ]
      }
    ]
  },

  /* ================= MARQUER DES POINTS ================= */
  {
    id: "score",
    titre: "Marquer des points",
    couleur: "or",
    eyebrow: "Gagner la partie",
    lede: "Tuer les unités adverses ne fait gagner personne : les points viennent des champs " +
      "de bataille, et d'eux seuls. Il y a deux façons d'en marquer, une limite par champ " +
      "et par tour, et une condition particulière pour le tout dernier point.",
    sections: [
      {
        id: "sc-deux",
        titre: "Les deux façons de marquer",
        q: "Comment je gagne un point, au juste ?",
        rep: "En prenant un champ de bataille (<b>conquérir</b>) ou en le gardant jusqu'à ta phase initiale (<b>tenir</b>). Un même endroit ne rapporte qu'une fois par tour et par joueur.",
        ref: "467 à 470",
        regles: [
          { ref: "468", t: "Marquer, c'est gagner un point en prenant ou en gardant un champ de bataille.",
            d: "Chaque fois que tu marques, tu gagnes un point : les cartes qui parlent de l'un parlent aussi de l'autre." },
          { ref: "469.1", t: "Conquérir : prendre le contrôle d'un champ de bataille non encore marqué ce tour-ci.",
            d: "Le point tombe dès que le contrôle est établi." },
          { ref: "469.2", t: "Tenir : conserver le contrôle pendant sa phase initiale.",
            d: "Le champ de bataille ne doit pas déjà avoir été marqué ce tour-ci." },
          { ref: "470", t: "Un champ de bataille ne rapporte qu'une fois par tour et par joueur.",
            d: "Quelle que soit la méthode." },
          { ref: "471.2", t: "Marquer déclenche les capacités de score de ce champ de bataille.",
            d: "Les capacités de conquête se déclenchent sur une conquête, celles de tenue sur une tenue — et jamais plus d'une fois par tour pour un joueur." }
        ],
        cas: [
          { t: "En équipe, le champ d'un coéquipier ne se conquiert pas.",
            d: "Un champ de bataille que ton coéquipier contrôle au moment de l'étape de score ne peut plus être conquis par personne de ton équipe ce tour-ci — article 469.1.a." }
        ]
      },
      {
        id: "sc-dernier",
        titre: "Le dernier point",
        q: "Je suis à un point de gagner : je conquiers et c'est fini ?",
        rep: "Arrivé à un point de la victoire, la conquête change de nature : elle ne donne le point final que si tu as marqué sur <b>tous</b> les champs de bataille ce tour-ci. Autrement elle te donne une carte, et la partie continue.",
        ref: "471.1",
        regles: [
          { ref: "471.1.b", t: "À un point de la victoire, la conquête change de nature.",
            d: "Dès qu'un point de plus suffirait à te faire gagner, la conquête cesse de rapporter automatiquement." },
          { ref: "471.1.b.1", t: "Il faut avoir marqué sur tous les champs de bataille ce tour-ci.",
            d: "Si c'est le cas, tu gagnes le point final. Sinon, tu pioches une carte à la place." },
          { ref: "471.1.a.1", t: "Cette restriction ne vaut que pour la conquête.",
            d: "Un point gagné par un effet qui dit explicitement de gagner un point y échappe." }
        ],
        erreurs: [
          { t: "Annoncer la victoire dès qu'on atteint le score.",
            d: "Pas par conquête. Si tu n'as pas marqué partout ce tour-ci, la conquête te donne une carte, pas la victoire." }
        ]
      }
    ]
  },

  /* ================= LES MOTS-CLÉS ================= */
  {
    id: "mots-cles",
    titre: "Les mots-clés",
    couleur: "vert",
    eyebrow: "Les mots surlignés sur les cartes",
    lede: "Les vingt-huit mots surlignés qu'on trouve sur les cartes. Chacun est un raccourci " +
      "pour une phrase de règles complète : ce chapitre donne cette phrase, puis ce qui " +
      "coince en pratique.<br>Comme les cartes sont imprimées en anglais, chaque mot porte ici " +
      "<b>son nom anglais à côté du nom français</b> — et la recherche, en haut à gauche, " +
      "accepte les deux : tape <i>Level</i> ou Niveau, tu tombes au même endroit.",
    sections: [

      {
        id: "mc-general",
        titre: "Ce qui vaut pour tous",
        q: "J'ai deux fois le même mot-clé : ça cumule ?",
        rep: "Ça dépend du mot, et aucune logique ne permet de le deviner. Trois comportements existent ; la liste complète est juste en dessous.",
        ref: "801 à 803",
        regles: [
          { ref: "801.2", t: "Le surlignage coloré n'a aucun effet.",
            d: "Il sert à repérer le mot, rien de plus. La couleur ne change pas le fonctionnement." },
          { ref: "803", t: "L'ordre de lecture est l'ordre d'exécution.",
            d: "Les effets des mots-clés s'appliquent dans l'ordre où ils apparaissent, de haut en bas du texte de règles." },
          { ref: "801.3.a.3", t: "Un mot-clé donné sans durée précisée dure tant que la carte reste où elle est.",
            d: "Si l'effet qui l'accorde ne précise pas de durée, la carte perd le mot-clé dès qu'elle change d'endroit — en partant à la défausse, par exemple." },
          { ref: "802", t: "Une carte peut porter autant de mots-clés qu'elle veut.",
            d: "Il n'y a pas de limite, et un même mot-clé peut être accordé plusieurs fois — ce qui se comporte différemment selon le mot." }
        ],
        cas: [
          { t: "Deux fois le même mot-clé ?",
            d: "Le comportement change selon le mot. <b>Le second n'ajoute rien</b> — Gank (<i>Ganking</i>), Tank, Arrière-ligne (<i>Backline</i>), " +
              "Embuscade (<i>Ambush</i>), Caché (<i>Hidden</i>), Temporaire (<i>Temporary</i>), Dégainer (<i>Quick-Draw</i>). " +
              "<b>Les chiffres s'additionnent</b> — Assaut (<i>Assault</i>), Bouclier (<i>Shield</i>), Protection (<i>Deflect</i>), Chasse (<i>Hunt</i>) : " +
              "deux fois Assaut 2 font +4 Puissance. " +
              "<b>Chacun agit de son côté</b> — Agonie (<i>Deathknell</i>), Vision, Répétition (<i>Repeat</i>), Équiper (<i>Equip</i>), " +
              "Amplification (<i>Empower</i>), Expert en armes (<i>Weaponmaster</i>) : écrit deux fois, il se déclenche ou s'active deux fois." }
        ]
      },

      {
        id: "mc-quand",
        titre: "Quand tu as le droit de jouer",
        q: "Est-ce que j'ai le droit de jouer ça maintenant ?",
        rep: "Cinq mots répondent à cette question et à aucune autre : Action, Réaction, Embuscade, Caché et Flux. Ils ne touchent jamais à l'effet de la carte, seulement au <b>moment</b> où tu peux la poser, ou à l'endroit d'où elle part.",
        ref: "806, 811, 813, 822, 829",
        mots: [
          { m: "Action", vo: "Action", ref: "806",
            r: "<b>Se joue aussi dans un affrontement, sur le tour de n'importe qui</b>, à condition que la chaîne soit vide.",
            p: ["C'est une permission qui <b>s'ajoute</b> : la carte garde tous ses moments de jeu habituels.",
                "Ne change rien à ce que fait la carte.",
                "Une capacité peut accorder Action sous condition. Tant que la condition n'est pas remplie, la carte n'a pas le mot-clé — mais tu peux quand même la jouer si le fait de la jouer remplit la condition. Si à l'étape de vérification de légalité elle n'est toujours pas remplie, tout est annulé et la carte retourne d'où elle vient."] },
          { m: "Réaction", vo: "Reaction", ref: "813",
            r: "<b>Tout ce que donne Action, plus le droit de jouer chaîne non vide</b> — y compris en réponse à une carte adverse.",
            p: ["Réaction contient Action : une carte avec Réaction peut tout ce qu'une carte avec Action peut.",
                "Une unité avec Réaction reste soumise aux restrictions d'emplacement : ta base ou un champ de bataille que tu contrôles.",
                "Même règle d'annulation que pour Action si une condition n'est pas remplie à la vérification de légalité."] },
          { m: "Embuscade", vo: "Ambush", ref: "822",
            r: "<b>Je peux être jouée sur un champ de bataille où tu as déjà des unités</b>, et j'ai Réaction tant que c'est le cas.",
            p: ["La permission ajoute un emplacement de plus : elle n'en retire aucun.",
                "Si toutes tes unités quittent cet endroit avant la finalisation, la permission tombe et la carte ne peut plus y être jouée — sauf si un autre effet l'autorise.",
                "« Embusquer » employé comme verbe sur une carte veut dire : jouer avec la permission d'Embuscade."] },
          { m: "Caché", vo: "Hidden", ref: "811",
            r: "<b>Pose-moi face cachée sur un champ de bataille que tu contrôles</b> en payant une Essence runique. À partir du tour suivant, je gagne Réaction et je me joue en ignorant mon coût de base.",
            p: ["Cacher n'est pas jouer : ça n'ouvre pas de chaîne. La révéler, si.",
                "Un seul emplacement caché par champ de bataille.",
                "Les cibles doivent être choisies <b>sur ce champ de bataille</b>. Un sort sans cible valable là-bas ne peut pas être révélé.",
                "Un permanent caché se joue obligatoirement à cet endroit — y compris un équipement, qui échappe ainsi à sa restriction habituelle de n'être jouable qu'à la base.",
                "Tu peux toujours renoncer et la jouer normalement, pour son vrai coût, sans aucune de ces restrictions."] },
          { m: "Flux", vo: "Flow", ref: "829",
            r: "<b>Tu peux me jouer depuis ta défausse pour mon coût de Flux.</b> Je suis ensuite bannie.",
            p: ["Le coût de Flux <b>remplace</b> le coût de base ; ce n'est pas un supplément.",
                "Ne change pas le moment où le sort peut être joué : seulement la zone d'où il part.",
                "Si le sort a plusieurs coûts de Flux différents, tu choisis lequel appliquer au moment de le jouer.",
                "Le bannissement n'est pas une étape de plus : une fois résolu, le sort part en bannissement au lieu de partir à la défausse."] }
        ],
        erreurs: [
          { t: "« Il a Action, donc je peux répondre à son sort. »",
            d: "Non. Action demande une chaîne vide. Répondre à quelque chose, c'est Réaction." },
          { t: "Croire qu'une carte cachée est jouable dès le tour où on la cache.",
            d: "Elle ne devient jouable qu'à partir du tour suivant." }
        ]
      },

      {
        id: "mc-combat",
        titre: "Au combat",
        q: "Quels mots-clés comptent pendant un combat ?",
        rep: "Pas les mêmes, et pas de la même façon. Assaut et Bouclier ajoutent de la Puissance, l'un en attaque, l'autre en défense. Tank et Arrière-ligne ne touchent pas aux chiffres, seulement à l'ordre dans lequel les dégâts sont assignés. Gank est à part : il sert avant le combat, pas pendant.",
        ref: "807, 810, 814, 815, 826",
        mots: [
          { m: "Assaut", vo: "Assault", ref: "807",
            r: "<b>+X Puissance tant que je suis attaquante.</b> Si le X n'est pas écrit, il vaut 1.",
            p: ["Vaut tant que l'unité est considérée comme attaquante, c'est-à-dire pendant tout le combat.",
                "Plusieurs sources d'Assaut : <b>les valeurs s'additionnent</b>."] },
          { m: "Bouclier", vo: "Shield", ref: "814",
            r: "<b>+X Puissance tant que je suis défenseuse.</b> Si le X n'est pas écrit, il vaut 1.",
            p: ["Exactement le pendant d'Assaut, côté défense.",
                "Plusieurs sources : <b>les valeurs s'additionnent</b>."] },
          { m: "Tank", vo: "Tank", ref: "815",
            r: "<b>Les dégâts de combat doivent m'être assignés en premier</b>, avant toute unité alliée qui n'a pas Tank.",
            p: ["L'adversaire doit toujours assigner des dégâts létaux à une unité avant de passer à la suivante.",
                "Si tu as plusieurs unités avec Tank, l'attaquant choisit dans quel ordre il les tue — mais il doit les avoir toutes tuées avant de pouvoir toucher tes autres unités.",
                "Le même mot-clé écrit deux fois sur la même unité n'ajoute rien."] },
          { m: "Arrière-ligne", vo: "Backline", ref: "826",
            r: "<b>Les dégâts de combat doivent m'être assignés en dernier</b>, après toute unité alliée qui n'a pas Arrière-ligne.",
            p: ["Le miroir exact de Tank.",
                "Tant qu'une unité sans Arrière-ligne peut encore recevoir des dégâts létaux, l'unité d'arrière-ligne est une cible invalide.",
                "Le même mot-clé écrit deux fois n'ajoute rien."] },
          { m: "Gank", vo: "Ganking", ref: "810",
            r: "<b>Je peux me déplacer d'un champ de bataille à un autre</b> avec un déplacement standard.",
            p: ["Normalement une unité part de ta base. Gank ajoute une destination : elle peut aussi aller d'un champ de bataille à un autre.",
                "C'est une permission, pas un déplacement en plus : l'unité n'en obtient pas le droit de bouger une fois de plus dans le tour.",
                "Le même mot-clé écrit deux fois n'ajoute rien."] },
          { m: "Désarmement", vo: "Disarm", id: "mc-desarmement",
            r: "<b>Quand j'attaque, donne -1 Puissance à une unité ennemie présente ici, ce tour-ci.</b>",
            p: ["Le déclenchement part quand l'unité <b>attaque</b>, jamais quand elle défend.",
                "<b>Désarmement N</b> retire N Puissance au lieu d'une. Plusieurs Désarmement sur la même unité se cumulent.",
                "Le malus vaut pour le tour entier, pas seulement pour le combat en cours.",
                "Apparu avec l'extension Radiance."] }
        ],
        cas: [
          { t: "Tank et Arrière-ligne sur la même unité",
            d: "L'unité devrait alors être servie en premier <b>et</b> en dernier, ce qui est impossible dès qu'une autre unité alliée est présente : les deux contraintes se neutralisent. Seule elle sur le champ de bataille, aucune des deux ne contraint quoi que ce soit. Entre les deux, les règles ne tranchent pas explicitement — en tournoi, demande à l'arbitre plutôt que de discuter." }
        ],
        erreurs: [
          { t: "Croire que Tank force l'adversaire à attaquer cette unité.",
            d: "Tank ne change pas qui se bat : il change seulement l'ordre dans lequel les dégâts sont répartis." },
          { t: "Compter Assaut en défense (ou Bouclier en attaque).",
            d: "Chacun ne vaut que pour son rôle. Une unité qui attaque n'a pas son Bouclier." }
        ]
      },

      {
        id: "mc-couts",
        titre: "Les coûts",
        q: "Ce coût en plus, je le paie à quel moment ?",
        rep: "Accélération et Répétition se paient <b>en jouant la carte</b> — une fois l'unité posée, c'est trop tard. Protection fonctionne dans l'autre sens : c'est l'adversaire qui paie, chaque fois qu'il te choisit.",
        ref: "805, 809, 820",
        mots: [
          { m: "Accélération", vo: "Accelerate", ref: "805",
            r: "<b>Tu peux payer 1 Énergie + 1 Essence runique en coût additionnel pour que j'arrive prête.</b>",
            p: ["L'Essence runique doit correspondre à <b>un des domaines de l'unité</b>. Une unité sans domaine accepte n'importe quel domaine.",
                "Se paie <b>uniquement en jouant la carte</b>, jamais une fois l'unité sur le plateau.",
                "Une fois le coût payé, l'unité arrive prête même si elle perd Accélération entre-temps.",
                "Elle n'arrive pas épuisée puis redressée : elle arrive prête. Les capacités qui se déclenchent quand une unité <b>est redressée</b> ne se déclenchent donc pas.",
                "Le même mot-clé écrit deux fois n'ajoute rien."] },
          { m: "Répétition", vo: "Repeat", ref: "820",
            r: "<b>Tu peux payer ce coût additionnel pour exécuter l'effet une seconde fois</b> à la résolution.",
            p: ["Chaque coût de Répétition ne peut être payé qu'une fois, mais une carte peut en porter plusieurs, payables séparément.",
                "Les choix de la seconde exécution se font au moment habituel, et <b>peuvent être différents</b> de ceux de la première.",
                "Tout ce qui ne peut pas être refait à la résolution est simplement ignoré.",
                "Quel que soit le nombre de répétitions, la carte n'est <b>jouée</b> qu'une seule fois."] },
          { m: "Protection", vo: "Deflect", ref: "809",
            r: "<b>Les sorts et capacités adverses qui me choisissent coûtent X Essences runiques de plus</b>, à chaque fois qu'ils me choisissent.",
            p: ["Si le X n'est pas écrit, il vaut 1.",
                "Cette Essence runique supplémentaire peut être de <b>n'importe quel domaine</b>.",
                "Le surcoût s'applique une fois par choix : un sort qui me choisit deux fois paie deux fois.",
                "Plusieurs sources : <b>les valeurs s'additionnent</b>."] }
        ],
        erreurs: [
          { t: "Payer l'Accélération d'une unité déjà en jeu.",
            d: "Impossible. C'est un coût additionnel qui fait partie des étapes de mise en jeu, pas une capacité activable." },
          { t: "Se croire gêné par sa propre Protection.",
            d: "Non : seulement ceux d'un adversaire." }
        ]
      },

      {
        id: "mc-declench",
        titre: "Les déclenchements",
        q: "Quand est-ce que ça se déclenche, exactement ?",
        rep: "Agonie à la mort, Vision à l'arrivée, Temporaire au début de ta phase initiale (avant le score), Chasse quand tu conquiers ou que tu tiens.",
        ref: "808, 816, 817, 823",
        intro: "Chacun de ces mots pose une capacité déclenchée sur la chaîne au moment où " +
          "son événement arrive. Toute la difficulté est de savoir quel est cet événement, " +
          "exactement — une unité qui meurt ne meurt pas toujours de la façon qu'on croit.",
        mots: [
          { m: "Agonie", vo: "Deathknell", ref: "808",
            r: "<b>Quand je meurs, [effet].</b>",
            p: ["Le déclencheur est le fait d'être tué <b>et envoyé à la défausse</b>.",
                "Si la mort est remplacée par autre chose — un rappel, par exemple — la carte n'allant pas à la défausse, le déclenchement est <b>retiré de la chaîne</b>.",
                "Le déclenchement est posé sur la chaîne <b>avant</b> que la carte ne parte à la défausse : son emplacement et ses caractéristiques sont notés à ce moment-là.",
                "Plusieurs Agonie sur la même carte se déclenchent séparément ; c'est son contrôleur qui choisit dans quel ordre les poser."] },
          { m: "Vision", vo: "Vision", ref: "817",
            r: "<b>Quand tu me joues, prédis</b> — regarde la première carte de ton deck principal, tu peux la recycler.",
            p: ["Le déclencheur est l'arrivée du permanent sur le plateau.",
                "Plusieurs Vision se déclenchent séparément, et tu décides de recycler ou non pour chacune.",
                "Si tu ne recycles pas et que rien ne s'intercale, chaque Vision verra la même carte."] },
          { m: "Temporaire", vo: "Temporary", ref: "816",
            r: "<b>Je meurs au début de la phase Initiale de mon contrôleur, avant le score.</b>",
            p: ["Le déclencheur est le début de la phase Initiale du contrôleur du permanent.",
                "« Avant le score » compte : l'unité n'est plus là pour tenir un champ de bataille à ce moment-là.",
                "Le mot-clé écrit deux fois n'ajoute rien, et la capacité ne se déclenche <b>qu'une fois</b>."] },
          { m: "Chasse", vo: "Hunt", ref: "823",
            r: "<b>Quand je conquiers ou que je tiens un champ de bataille, gagne X XP.</b> Si le X n'est pas écrit, il vaut 1.",
            p: ["C'est à la fois un effet de conquête et un effet de tenue : les deux situations déclenchent.",
                "Plusieurs sources : <b>les valeurs s'additionnent</b>."] }
        ],
        erreurs: [
          { t: "Faire partir l'Agonie après avoir défaussé la carte.",
            d: "L'ordre compte : le déclenchement est enregistré avant le départ, avec les informations de l'endroit où l'unité se trouvait." },
          { t: "Compter une unité Temporaire pour le score du tour.",
            d: "Elle meurt avant l'étape de score. Elle ne tient rien ce tour-là." }
        ]
      },

      {
        id: "mc-equip",
        titre: "Les équipements",
        q: "Comment j'attache un équipement, et quand ?",
        rep: "Équiper est une capacité que tu actives quand tu veux, en payant son coût. Dégainer sert à poser l'équipement et à l'attacher dans la foulée, même au milieu d'un affrontement. Expert en armes s'occupe de l'attachement au moment où l'unité arrive, pour une Essence runique de moins.",
        ref: "818, 819, 821",
        mots: [
          { m: "Équiper", vo: "Equip", ref: "818",
            r: "<b>[Coût] : attache cet équipement à une unité que tu contrôles.</b>",
            p: ["L'unité choisie est une <b>cible</b>.",
                "Le coût peut mêler ressources et autres contraintes, et le texte de la carte peut le modifier ou changer le moment d'activation.",
                "Une unité est « équipée » tant qu'au moins un des objets attachés est un Équipement.",
                "Plusieurs capacités Équiper sur la même carte s'activent séparément, chacune pour son coût.",
                "On peut vérifier si un Équipement a Équiper <b>même si son texte de règles est inactif</b>."] },
          { m: "Dégainer", vo: "Quick-Draw", ref: "819",
            r: "<b>J'ai Réaction, et quand tu me joues, attache-moi à une unité que tu contrôles.</b>",
            p: ["C'est à la fois une permission (Réaction) et un déclenchement (l'attachement).",
                "Permet donc de poser l'équipement <b>et</b> de l'attacher au milieu d'un affrontement.",
                "Le même mot-clé écrit deux fois n'ajoute rien."] },
          { m: "Expert en armes", vo: "Weaponmaster", ref: "821",
            r: "<b>Quand tu me joues, tu peux choisir un de tes Équipements et payer son coût d'Équiper réduit d'une Essence runique pour me l'attacher</b>, quel que soit le moment habituel.",
            p: ["Fonctionne même si l'équipement est <b>déjà attaché ailleurs</b> : il change d'unité.",
                "Le texte de règles de l'équipement redevient actif si nécessaire.",
                "Si son coût ne contient pas d'Essence runique, il se paie quand même, sans réduction.",
                "Si l'équipement n'a pas de coût d'Équiper, ou si le coût ne peut pas être payé, ou si le détachement ou l'attachement est impossible, l'équipement <b>ne bouge pas</b>.",
                "La capacité Équiper n'est pas activée pour autant, et l'unité avec Expert en armes n'est pas ciblée par elle.",
                "Écrit deux fois, il se déclenche deux fois, et chaque déclenchement peut viser un équipement différent.",
                "N'a plus aucune fonction une fois l'unité en jeu."] },
          { m: "Déploiement", vo: "Deploy", id: "mc-deploiement",
            r: "<b>Ne se joue que sur un champ de bataille. Quand un adversaire tient ce champ de bataille, cet équipement meurt.</b>",
            p: ["Une restriction et un déclenchement à la fois : l'équipement ne peut pas être posé dans une base, et il ne survit pas à la perte du lieu.",
                "Il meurt quand l'adversaire <b>tient</b> le champ de bataille, c'est-à-dire pendant sa phase Initiale — pas à l'instant où il en prend le contrôle.",
                "Plusieurs cartes de Radiance savent déplacer un équipement ayant Déploiement d'un champ de bataille à un autre, ou le reprendre en main avant qu'il ne tombe.",
                "Apparu avec l'extension Radiance."] }
        ],
        erreurs: [
          { t: "Jouer un équipement avec Dégainer sans l'attacher.",
            d: "L'attachement n'est pas optionnel : c'est un déclenchement qui fait partie du mot-clé." },
          { t: "Croire qu'Expert en armes active la capacité Équiper.",
            d: "Il en paie le coût, mais ne l'active pas. Ce qui se déclenche « quand tu équipes » ne se déclenche pas ici." }
        ]
      },

      {
        id: "mc-condition",
        titre: "Les effets sous condition",
        q: "Pourquoi ce texte ne s'applique pas ?",
        rep: "Parce qu'une condition est écrite devant, et qu'elle n'est pas remplie. Trois mots-clés font ça : <b>Légion</b> (<i>Legion</i>) demande qu'une autre carte ait été jouée dans le tour, <b>Niveau</b> (<i>Level</i>) un certain nombre d'XP, <b>Amplifié</b> (<i>Empowered</i>) le statut amplifié.",
        ref: "812, 824, 827, 828",
        mots: [
          { m: "Légion", vo: "Legion", ref: "812",
            r: "<b>Si tu as déjà joué une autre carte ce tour-ci, je gagne [texte].</b>",
            p: ["Il faut une carte <b>différente</b>, finalisée par toi, dans le même tour.",
                "Une seule carte jouée suffit à satisfaire <b>toutes</b> les Légion que tu contrôles."] },
          { m: "Niveau", vo: "Level", ref: "824",
            r: "<b>Tant que tu as N XP ou plus, je gagne [texte].</b>",
            p: ["L'effet s'éteint dès que le contrôleur repasse sous N XP.",
                "Si le contrôle de la carte change, c'est l'XP du <b>nouveau</b> contrôleur qui décide."] },
          { m: "Amplification", vo: "Empower", ref: "827",
            r: "<b>[Coût] : m'amplifier.</b> Utilisable seulement si je ne le suis pas déjà.",
            p: ["C'est une capacité activée. La source n'est pas une cible d'elle-même.",
                "Le coût peut mêler ressources et autres contraintes ; le texte de la carte peut le modifier, ou changer le moment d'activation.",
                "Plusieurs Amplification sur la même carte s'activent séparément, chacune pour son coût.",
                "Le fait de devenir amplifiée est un événement : une carte qui dit « quand une unité devient amplifiée… » se déclenche à ce moment-là."] },
          { m: "Amplifié", vo: "Empowered", ref: "828",
            r: "<b>Tant que j'ai le statut amplifié, je gagne [texte].</b>",
            p: ["Être amplifié ne fait rien par soi-même : c'est un marqueur posé sur la carte, rien de plus. Il sert d'interrupteur pour le texte écrit après <b>Amplifié</b>, qui ne compte que tant que le marqueur est là.",
                "C'est le pendant d'Amplification : l'un pose le marqueur, l'autre s'en sert.",
                "Si le texte dépendant est une capacité déclenchée du type « quand je deviens amplifié », elle se déclenche bien au moment où la source est amplifiée."] },
          { m: "Exhiber", vo: "Show Off", id: "mc-exhiber",
            r: "<b>En jouant cette carte, tu peux révéler de ta main une carte correspondant à la description, ou en désigner une alliée déjà sur le plateau.</b>",
            p: ["C'est facultatif. Sans exhiber, la carte se joue quand même : seul l'effet conditionnel est perdu.",
                "La carte exhibée ne bouge pas : elle est montrée, pas jouée, pas défaussée.",
                "Le reste du texte précise ce qu'on gagne si on a exhibé — souvent un effet doublé, ou calculé sur la carte montrée.",
                "Apparu avec l'extension Radiance."] }
        ],
        erreurs: [
          { t: "Compter la carte elle-même pour sa propre Légion.",
            d: "Il faut une <b>autre</b> carte jouée dans le tour." },
          { t: "Amplifier deux fois de suite pour empiler l'effet.",
            d: "Impossible tant que la carte est déjà amplifiée : la capacité n'est utilisable que si elle ne l'est pas." }
        ]
      },

      {
        id: "mc-deck",
        titre: "À la construction du deck",
        q: "Je peux en mettre plusieurs dans mon deck ?",
        rep: "Trois exemplaires, sauf si la carte porte <b>Unique</b> (<i>Unique</i>) : dans ce cas, un seul. C'est le seul mot-clé qui ne serve qu'au moment de construire son deck.",
        ref: "825",
        mots: [
          { m: "Unique", vo: "Unique", ref: "825",
            r: "<b>Ton deck ne peut contenir qu'un seul exemplaire de cette carte.</b>",
            p: ["Ce n'est pas un raccourci de texte de règles : c'est une contrainte de construction.",
                "Une carte Signature <b>et</b> Unique : ton deck peut contenir trois cartes Signature au total, mais un seul exemplaire de chaque carte Unique nommée.",
                "Aucun effet pendant la partie."] }
        ]
      }

    ]
  }

  ]
};
