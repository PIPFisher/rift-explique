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

  /* ================= LA CHAÎNE ================= */
  {
    id: "chaine",
    titre: "La chaîne, le focus et la priorité",
    couleur: "sarcelle",
    eyebrow: "Chapitre 1 · articles 311 à 340",
    lede: "Trois notions qu'on confond sans arrêt, et dont tout le reste découle. " +
      "La <b>chaîne</b> est l'endroit où les cartes attendent ; la <b>priorité</b> est le droit " +
      "de répondre ; le <b>focus</b> est le droit d'ouvrir. Un joueur peut avoir le focus sans " +
      "pouvoir agir, et c'est exactement là que naissent les litiges.",
    sections: [
      {
        id: "ch-quoi",
        titre: "Ce qu'est la chaîne",
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
        ref: "311 à 313",
        intro: "La priorité est le droit d'agir. Le focus est une permission supplémentaire, " +
          "propre aux affrontements.",
        regles: [
          { ref: "312", t: "Un seul joueur détient la priorité à la fois.",
            d: "C'est le droit exclusif d'entreprendre une action volontaire. Sans priorité, on ne fait rien de son propre chef." },
          { ref: "312.1.b.1", t: "Les choix imposés par une carte ne demandent pas la priorité.",
            d: "Si un effet t'ordonne de choisir, tu choisis, même sans priorité." },
          { ref: "313.2", t: "Qui gagne le focus gagne aussi la priorité.",
            d: "Les deux arrivent ensemble." },
          { ref: "313.3", t: "Passer la priorité ne fait pas perdre le focus.",
            d: "C'est la distinction la plus utile du jeu : tu peux laisser l'adversaire répondre tout en conservant le droit de rouvrir ensuite." },
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
        ref: "332 à 340",
        intro: "Une chaîne se vide toujours selon la même boucle. La connaître évite la moitié des disputes de table.",
        regles: [
          { ref: "337", t: "1 · Finaliser.",
            d: "Le contrôleur de l'élément en attente le plus ancien termine de le jouer. Finaliser ne passe pas la priorité." },
          { ref: "337.2", t: "Unités, équipements et capacités qui ajoutent des ressources se résolvent aussitôt.",
            d: "Ils sautent l'attente : on passe directement à l'étape 4. On ne peut donc pas répondre à une unité qui arrive." },
          { ref: "338", t: "2 · Exécuter.",
            d: "Le joueur qui a la priorité peut poser une carte correctement chronométrée, ou passer." },
          { ref: "338.1.a.1", t: "En état fermé, seules les Réactions se jouent.",
            d: "Une chaîne ouverte n'accepte plus les Actions." },
          { ref: "339.1", t: "3 · Passer.",
            d: "Quand tous les joueurs ont passé d'affilée sans rien ajouter, on résout." },
          { ref: "340.1", t: "4 · Résoudre.",
            d: "Le dernier élément finalisé se résout entièrement, puis on recommence la boucle s'il reste quelque chose." }
        ],
        erreurs: [
          { t: "« Il a répondu, je ne peux plus rien faire. »",
            d: "Si : la priorité revient après chaque ajout. Tant que les deux joueurs n'ont pas passé d'affilée, la chaîne reste ouverte." },
          { t: "Vouloir contrer une unité.",
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
    eyebrow: "Chapitre 2 · articles 341 à 348 et 459 à 466",
    lede: "Le chapitre le plus dense du jeu, et celui qui bloque le plus de parties. " +
      "Un affrontement est une <b>fenêtre</b> où les deux joueurs posent des sorts à tour de rôle ; " +
      "un combat est ce qui arrive ensuite, si les deux camps ont encore des unités sur place.",
    sections: [
      {
        id: "af-quoi",
        titre: "Affrontement et combat ne sont pas la même chose",
        ref: "341 à 344, 460",
        intro: "La confusion la plus fréquente. L'affrontement est une phase de discussion ; " +
          "le combat est la résolution des dégâts. On peut avoir l'un sans l'autre.",
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
          { ref: "461.2", t: "Un combat en attente qui cesse de l'être n'a jamais lieu.",
            d: "Si les unités partent ou meurent avant le démarrage, il ne se passe rien." },
          { ref: "462", t: "Un combat n'oppose jamais plus de deux joueurs.",
            d: "Exactement deux, pas trois." }
        ],
        cas: [
          { t: "Plusieurs combats en attente en même temps.",
            d: "C'est le joueur dont c'est le tour qui choisit lequel résoudre en premier — article 461.1." },
          { t: "À plus de deux joueurs, un combat ferme la zone.",
            d: "Un champ de bataille où un combat est en attente ou en cours devient une destination interdite pour les autres joueurs (462.1), et on ne peut pas y jouer d'unité (462.2). Une unité qui devait y arriver part dans la base de son contrôleur à la place." }
        ],
        erreurs: [
          { t: "Croire qu'arriver sur un champ vide déclenche un combat.",
            d: "Non. Sans unité adverse, il n'y a pas de combat : pas de dégâts, et les capacités « quand j'attaque » ne se déclenchent pas." }
        ]
      },
      {
        id: "af-focus",
        titre: "Qui parle, et dans quel ordre",
        ref: "345 à 348",
        intro: "Le déroulé d'un affrontement se résume à une règle de tour de parole. " +
          "Elle décide qui peut encore agir avant que les dégâts tombent.",
        regles: [
          { ref: "345", t: "Le joueur qui a contesté le champ de bataille gagne le focus.",
            d: "C'est lui qui ouvre la discussion." },
          { ref: "346", t: "Quand le dernier élément de la chaîne se résout, le focus passe à l'autre joueur.",
            d: "Il gagne le focus et la priorité ensemble." },
          { ref: "346.1", t: "Le focus ne passe pas si la chaîne venait d'un déclenchement.",
            d: "Ni d'une capacité qui ajoute des ressources. La chaîne de combat s'ouvre ainsi : le focus reste donc au même joueur." },
          { ref: "347", t: "Le joueur qui a le focus fait l'un des deux : jouer, ou passer.",
            d: "Jouer une carte ou une capacité correctement chronométrée ouvre une chaîne ; quand elle se referme, le focus passe." },
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
        ref: "465.2.c",
        intro: "C'est ici que se jouent les litiges les plus techniques. La répartition n'est pas libre : " +
          "elle est contrainte dans les deux sens.",
        regles: [
          { ref: "465.2.c", t: "L'attaquant répartit en premier.",
            d: "Chaque joueur répartit un total égal à la somme des Puissances de ses unités." },
          { ref: "465.2.c.3", t: "Une unité doit recevoir des dégâts létaux complets avant de passer à la suivante.",
            d: "Létal veut dire : un montant non nul égal ou supérieur à la Puissance de l'unité." },
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
    eyebrow: "Chapitre 3 · articles 467 à 472",
    lede: "On gagne en marquant, pas en tuant. Deux façons de marquer, une limite stricte par " +
      "champ de bataille et par tour, et une condition particulière pour le tout dernier point.",
    sections: [
      {
        id: "sc-deux",
        titre: "Les deux façons de marquer",
        ref: "467 à 470",
        regles: [
          { ref: "468", t: "Marquer, c'est gagner un point en prenant ou en gardant un champ de bataille.",
            d: "Toute instance de marquage est aussi une instance de gain de point." },
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
            d: "Un champ de bataille contrôlé par un coéquipier pendant l'étape de score de la phase initiale est disqualifié de la conquête pour toute l'équipe — article 469.1.a." }
        ]
      },
      {
        id: "sc-dernier",
        titre: "Le dernier point",
        ref: "471.1",
        intro: "La règle qui surprend tout le monde en fin de partie, et qui décide des victoires serrées.",
        regles: [
          { ref: "471.1.b", t: "À un point de la victoire, la conquête change de nature.",
            d: "Si tu es à un point du score de victoire ou au-delà, la conquête ne rapporte plus automatiquement." },
          { ref: "471.1.b.1", t: "Il faut avoir marqué sur tous les champs de bataille ce tour-ci.",
            d: "Si c'est le cas, tu gagnes le point final. Sinon, tu pioches une carte à la place." },
          { ref: "471.1.a.1", t: "Cette restriction ne vaut que pour la conquête.",
            d: "Un point gagné par un effet qui dit explicitement de gagner un point y échappe." }
        ],
        erreurs: [
          { t: "Croire qu'on gagne dès qu'on atteint le score.",
            d: "Pas par conquête. Si tu n'as pas marqué partout ce tour-ci, la conquête te donne une carte, pas la victoire." }
        ]
      }
    ]
  }

  ]
};
