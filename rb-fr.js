/* ============================================================
   rb-fr.js — traductions françaises, faites à la main
   ------------------------------------------------------------
   Clé = numéro de collection de la carte (champ "code").
   n  : nom officiel français quand il existe, sinon null (VO gardée)
   tx : texte de règles traduit, au vocabulaire du lexique
   note : précision facultative affichée en petit
   ============================================================ */
window.RB_FR = {

  "OGN-001/298": {
    n: "Terreur enflammée",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)"
  },
  "OGN-003/298": {
    n: "Brute techno-chimique",
    tx: "Assaut 2. (+2 Puissance tant que je suis attaquante.)\nQuand tu me joues, défausse 1 carte.",
    note: "Le défaussement fait partie du coût : il faut une carte en main pour la jouer."
  },
  "OGN-004/298": {
    n: "Fendoir",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nDonne Assaut 3 à une unité ce tour-ci. (+3 Puissance tant qu'elle attaque.)"
  },
  "OGN-009/298": {
    n: "Rayon Hextech",
    tx: "Action.\nInflige 3 dégâts à une unité présente sur un champ de bataille.",
    note: "Ne peut pas viser une unité restée à la base."
  },
  "OGN-010/298": {
    n: "Légionnaire d'arrière-garde",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)"
  },
  "OGN-012/298": {
    n: "Fantassin noxien",
    tx: "Légion — je coûte 2 Énergie de moins. (Effet obtenu si tu as déjà joué une autre carte ce tour-ci.)"
  },
  "OGN-013/298": {
    n: "Poro ronchon",
    tx: "Déviation. (L'adversaire doit payer 1 Énergie de plus pour me choisir avec un sort ou une capacité.)"
  },
  "OGN-016/298": {
    n: "Duo dangereux",
    tx: "Légion — quand tu me joues, donne +2 Puissance à une unité ce tour-ci. (Effet obtenu si tu as déjà joué une autre carte ce tour-ci.)"
  },
  "OGN-133/298": {
    n: null,
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ne se résolve.)\nInflige 1 dégât à toutes les unités présentes sur des champs de bataille.",
    note: "Touche aussi tes propres unités."
  },
  "SFD-082/221": {
    n: null,
    tx: "Quand j'attaque ou je défends, j'inflige des dégâts égaux à ma Puissance à une unité ennemie présente ici.\nJe n'inflige pas de dégâts de combat.\n1 Puissance : Action — me renvoyer à ta base.",
    note: "Le déclenchement part à l'ouverture de l'affrontement ; l'action de repli se joue ensuite, chaîne vide."
  },
  "UNL-128/219": {
    n: null,
    tx: "Réaction.\nRenvoie une unité alliée et une unité ennemie dans les mains de leurs propriétaires.",
    note: "Ne contre rien : ce qui est déjà sur la chaîne se résout quand même."
  },

  /* ---------- deck « ban Aurora » ---------- */

  "SFD-183/221": {
    n: "Lucian - Purificateur",
    tx: "Chacun de tes Équipements donne Assaut. (+1 Puissance tant que l'unité équipée est attaquante.)",
    note: "L'effet s'applique à tous tes équipements attachés et se cumule avec un Assaut déjà présent sur la carte."
  },
  "UNL-210/219": {
    n: null,
    tx: "Tant qu'une unité défend seule ici, elle a −2 Puissance. (Elle est seule s'il n'y a aucune autre unité alliée ici.)",
    note: "Champ de bataille : pousse l'adversaire à défendre à plusieurs, sinon son unité fond."
  },
  "SFD-208/221": {
    n: null,
    tx: "Tant que tu contrôles ce champ de bataille, tes légendes ont « Épuiser : attacher un Équipement que tu contrôles à une unité que tu contrôles »."
  },
  "OGN-297/298": {
    n: "Tertre venteux",
    tx: "Les unités présentes ici ont Gank. (Elles peuvent se déplacer d'un champ de bataille à un autre.)"
  },
  "OGN-126/298": {
    n: "Rune de corps",
    tx: "Rune du domaine Corps.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Corps."
  },
  "OGN-007/298": {
    n: "Rune de fureur",
    tx: "Rune du domaine Furie.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Furie."
  },
  "SFD-113/221": {
    n: null,
    tx: "Maître d'armes. (Quand tu me joues, tu peux attacher un de tes Équipements sur moi pour 1 Énergie de moins, même s'il est déjà attaché ailleurs.)\nLa première fois que je conquiers à chaque tour, redresse-moi.",
    note: "Se redresser après une conquête permet de repartir à l'assaut dans le même tour."
  },
  "UNL-112/219": {
    n: null,
    tx: "Quand je me déplace vers un champ de bataille, tu peux y déplacer une unité ennemie.",
    note: "Sert à isoler un défenseur, ou à tirer une unité hors d'un champ que l'adversaire tenait."
  },
  "OGN-136/298": {
    n: "Novice de la fosse",
    tx: "Quand tu me joues, améliore une autre unité alliée. (Si elle n'a pas déjà une amélioration, elle reçoit +1 Puissance.)",
    note: "Une unité ne peut porter qu'une seule amélioration à la fois."
  },
  "OGN-132/298": {
    n: "Second du capitaine",
    tx: "Quand tu me joues, redresse une autre unité.",
    note: "Permet de faire attaquer une unité déjà épuisée, ou de la rendre disponible pour défendre."
  },
  "UNL-097/219": {
    n: null,
    tx: "Quand tu me joues, pioche 1 carte si tes autres unités totalisent 5 Puissance ou plus."
  },
  "OGN-039/298": {
    n: "Kai'Sa - Survivante",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)\nQuand je conquiers, pioche 1 carte."
  },
  "OGN-026/298": {
    n: "Brynhir Chantefoudre",
    tx: "Quand tu me joues, les adversaires ne peuvent plus jouer de cartes ce tour-ci.",
    note: "Verrouille la chaîne : plus aucune réaction adverse jusqu'à la fin du tour. À poser avant d'attaquer."
  },
  "SFD-021/221": {
    n: null,
    tx: "Glas — crée deux jetons d'unité Méca de 3 Puissance dans ta base. (Effet obtenu quand je meurs.)",
    note: "Mourir n'est pas une perte sèche : tu récupères 6 Puissance répartie sur deux corps."
  },
  "SFD-095/221": {
    n: "Lame de Doran",
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)",
    note: "L'équipement ajoute sa Puissance à l'unité équipée, et revient à la base si elle meurt."
  },
  "SFD-022/221": {
    n: null,
    tx: "Dégainage. (Cet équipement a Réaction ; quand tu le joues, attache-le à une unité que tu contrôles.)\nÉquiper 1 Puissance.",
    note: "Le Dégainage évite le coût d'équipement, mais uniquement au moment où tu le joues."
  },
  "UNL-019/219": {
    n: null,
    tx: "Équiper 1 Énergie + 1 Puissance. (Attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-097/221": {
    n: null,
    tx: "Action.\nDonne +5 Puissance à une unité ce tour-ci.",
    note: "Se joue aussi en plein affrontement, tant que la chaîne est vide et que tu as le focus."
  },
  "OGN-156/298": {
    n: "Sabotage",
    tx: "Choisis un adversaire. Il révèle sa main. Choisis-y une carte qui n'est pas une unité : il la recycle."
  },
  "OGN-029/298": {
    n: "Étoile filante",
    tx: "Inflige 3 dégâts à une unité.\nInflige 3 dégâts à une unité.",
    note: "Deux effets distincts : tu peux viser deux unités différentes, ou concentrer 6 dégâts sur une seule."
  },
  "SFD-184/221": {
    n: null,
    tx: "Action.\nDéplace une unité alliée. Tu peux lui attacher un Équipement du même contrôleur. Ce tour-ci, cette unité a « Quand je conquiers, tu peux me renvoyer à ma base »."
  },
  "VEN-085/166": {
    n: null,
    tx: "Choisis un adversaire. Il révèle sa main et tu y choisis une carte du domaine Esprit : il la recycle."
  },
  "OGN-145/298": {
    n: "Détermination sans faille",
    tx: "Réaction.\nEmpêche tous les dégâts de sorts et de capacités ce tour-ci.",
    note: "Ne protège pas des dégâts de combat : seulement de ceux qui viennent d'un sort ou d'une capacité."
  },
  "VEN-011/166": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "VEN-083/166": {
    n: null,
    tx: "En jouant ce sort, tu peux payer 1 Puissance en coût additionnel.\nChoisis une unité alliée et une unité ennemie. Si tu as payé le coût additionnel, donne +2 Puissance à l'unité alliée ce tour-ci. Elles s'infligent mutuellement des dégâts égaux à leur Puissance.",
    note: "Hors combat, les blessures non létales restent jusqu'à la fin du tour."
  },
  "SFD-105/221": {
    n: null,
    tx: "Je ne peux pas être choisie par les sorts et capacités ennemis.",
    note: "Les effets globaux, qui ne « choisissent » personne, l'atteignent quand même."
  }
};
