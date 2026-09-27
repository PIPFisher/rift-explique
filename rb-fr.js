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
    tx: "Déviation. (L'adversaire doit payer 1 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)"
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
    tx: "Maître d'armes. (Quand tu me joues, tu peux attacher un de tes Équipements sur moi pour 1 Puissance de moins, même s'il est déjà attaché ailleurs.)\nLa première fois que je conquiers à chaque tour, redresse-moi.",
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
  },

  /* ---------- formules de rappel officielles (correspondance exacte) ---------- */

  "SFD-002/221": {
    n: null,
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)\nMaître d'armes. (Quand tu me joues, tu peux m'attacher un de tes Équipements pour 1 Puissance de moins, même s'il est déjà attaché ailleurs.)"
  },
  "UNL-T02": {
    n: null,
    tx: "Déviation. (L'adversaire doit payer 1 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)"
  },
  "SFD-118/221": {
    n: null,
    tx: "Équiper 1 Énergie + 1 Puissance. (Attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-133/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-042/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-064/221": {
    n: null,
    tx: "Dégainage. (Cet équipement a Réaction ; quand tu le joues, attache-le à une unité que tu contrôles.)\nÉquiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "VEN-048/166": {
    n: null,
    tx: "Quand tu me joues, pioche 1 carte."
  },
  "SFD-092/221": {
    n: null,
    tx: "Maître d'armes. (Quand tu me joues, tu peux m'attacher un de tes Équipements pour 1 Puissance de moins, même s'il est déjà attaché ailleurs.)"
  },
  "SFD-134/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "OGN-210/298": {
    n: null,
    tx: "Assaut. (+1 Puissance tant que je suis attaquante.)"
  },
  "SFD-124/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-033/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-006/221": {
    n: null,
    tx: "J'arrive prête."
  },
  "SFD-073/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-153/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-051/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "VEN-027/166": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-102/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "VEN-118/166": {
    n: null,
    tx: "Tank. (Les dégâts de combat doivent m'être assignés en premier.)"
  },
  "UNL-096/219": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "OGN-248/298": {
    n: null,
    tx: "Inflige 2 dégâts à une unité.\nInflige 2 dégâts à une unité.\nInflige 2 dégâts à une unité.\nInflige 2 dégâts à une unité.\nInflige 2 dégâts à une unité.\nInflige 2 dégâts à une unité."
  },
  "UNL-002/219": {
    n: null,
    tx: "Embuscade. (Tu peux me jouer en Réaction sur un champ de bataille où tu as des unités.)\nAssaut 2. (+2 Puissance tant que je suis attaquante.)"
  },
  "OGN-086/298": {
    n: null,
    tx: "Vision. (Quand tu me joues, regarde la première carte de ton deck principal. Tu peux la recycler.)\nBouclier. (+1 Puissance tant que je suis défenseuse.)"
  },
  "VEN-SP1/006": {
    n: null,
    tx: "Accélération.\nQuand je conquiers, pioche 1 carte."
  },
  "SFD-156/221": {
    n: null,
    tx: "Assaut 2. (+2 Puissance tant que je suis attaquante.)"
  },
  "OGN-087/298": {
    n: null,
    tx: "Tank. (Les dégâts de combat doivent m'être assignés en premier.)\nQuand tu me joues, pioche 1 carte."
  },
  "SFD-127/221": {
    n: null,
    tx: "Maître d'armes. (Quand tu me joues, tu peux m'attacher un de tes Équipements pour 1 Puissance de moins, même s'il est déjà attaché ailleurs.)"
  },
  "OGS-009/024": {
    n: null,
    tx: "Gank. (Je peux me déplacer d'un champ de bataille à un autre.)\nJ'arrive prête."
  },
  "UNL-036/219": {
    n: null,
    tx: "Bouclier 2. (+2 Puissance tant que je suis défenseuse.)\nTank. (Les dégâts de combat doivent m'être assignés en premier.)"
  },
  "OGN-171/298": {
    n: null,
    tx: "Vision. (Quand tu me joues, regarde la première carte de ton deck principal. Tu peux la recycler.)"
  },
  "SFD-037/221": {
    n: null,
    tx: "Déviation. (L'adversaire doit payer 1 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)"
  },
  "OGN-135/298": {
    n: null,
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance (de n'importe quel domaine) afin de la révéler plus tard pour 0.)"
  },
  "OGN-215/298": {
    n: null,
    tx: "Assaut. (+1 Puissance tant que je suis attaquante.)"
  },
  "UNL-220/219": {
    n: null,
    tx: "Déviation."
  },
  "SFD-016/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "UNL-024/219": {
    n: null,
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)\nAssaut 2. (+2 Puissance tant que je suis attaquante.)\nDéviation. (L'adversaire doit payer 1 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)\nGank. (Je peux me déplacer d'un champ de bataille à un autre.)"
  },
  "SFD-172/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "OGN-174/298": {
    n: null,
    tx: "Vision. (Quand tu me joues, regarde la première carte de ton deck principal. Tu peux la recycler.)\nTu peux me jouer sur un champ de bataille libre."
  },
  "OGN-204/298": {
    n: null,
    tx: "Épuiser : Réaction — ajoute 1 Puissance. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)"
  },
  "OGN-081/298": {
    n: null,
    tx: "Épuiser : Réaction — ajoute 1 Puissance. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)"
  },
  "OGN-120/298": {
    n: null,
    tx: "Épuiser : Réaction — ajoute 1 Puissance. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)"
  },
  "OGN-040/298": {
    n: null,
    tx: "Épuiser : Réaction — ajoute 1 Puissance. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)"
  },
  "OGN-163/298": {
    n: null,
    tx: "Épuiser : Réaction — ajoute 1 Puissance. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)"
  },
  "OGN-245/298": {
    n: null,
    tx: "Épuiser : Réaction — ajoute 1 Puissance. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)"
  },
  "SFD-008/221": {
    n: null,
    tx: "Maître d'armes. (Quand tu me joues, tu peux m'attacher un de tes Équipements pour 1 Puissance de moins, même s'il est déjà attaché ailleurs.)"
  },
  "SFD-009/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-030/221": {
    n: null,
    tx: "Équiper 1 Énergie + 1 Puissance. (Attacher cet équipement à une unité que tu contrôles.)"
  },
  "OGN-176/298": {
    n: null,
    tx: "Tu peux me jouer sur un champ de bataille libre."
  },
  "UNL-039/219": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "VEN-123/166": {
    n: null,
    tx: "Embuscade. (Tu peux me jouer en Réaction sur un champ de bataille où tu as des unités.)"
  },
  "OGN-052/298": {
    n: null,
    tx: "Bouclier. (+1 Puissance tant que je suis défenseuse.)"
  },
  "SFD-056/221": {
    n: null,
    tx: "Dégainage. (Cet équipement a Réaction ; quand tu le joues, attache-le à une unité que tu contrôles.)\nÉquiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "OGN-054/298": {
    n: null,
    tx: "Bouclier. (+1 Puissance tant que je suis défenseuse.)\nTank. (Les dégâts de combat doivent m'être assignés en premier.)"
  },
  "UNL-099/219": {
    n: null,
    tx: "Bouclier 2. (+2 Puissance tant que je suis défenseuse.)\nTank. (Les dégâts de combat doivent m'être assignés en premier.)"
  },
  "SFD-115/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "OGS-016/024": {
    n: null,
    tx: "J'arrive prête."
  },
  "SFD-099/221": {
    n: null,
    tx: "Maître d'armes. (Quand tu me joues, tu peux m'attacher un de tes Équipements pour 1 Puissance de moins, même s'il est déjà attaché ailleurs.)"
  },
  "SFD-108/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "SFD-086/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)"
  },
  "OGS-005/024": {
    n: null,
    tx: "Bouclier. (+1 Puissance tant que je suis défenseuse.)"
  },

  /* ---------- socle du tournoi de Shenyang (cartes jouées dans 3 decks ou plus) ---------- */

  "VEN-131/166": {
    n: null,
    tx: "Tue une unité ennemie du domaine Chaos, ou détruis un équipement ennemi du domaine Chaos.",
    note: "Un des « Décrets » : chaque domaine a le sien, et chacun frappe un domaine précis."
  },
  "OGN-214/298": {
    n: "Rune d'ordre",
    tx: "Rune du domaine Ordre.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance d'Ordre."
  },
  "OGN-224/298": {
    n: "Récupération",
    tx: "Action.\nTu peux détruire un équipement. Pioche 1 carte.",
    note: "La destruction est facultative : tu peux la jouer uniquement pour piocher."
  },
  "UNL-131/219": {
    n: null,
    tx: "Réaction.\nContre un sort. Il retourne dans la main de son propriétaire au lieu d'aller à sa défausse.\nPrédiction.",
    note: "Le renvoi en main est un désavantage pour toi : l'adversaire pourra le rejouer."
  },
  "OGN-166/298": {
    n: "Rune de chaos",
    tx: "Rune du domaine Chaos.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Chaos."
  },
  "OGN-089/298": {
    n: "Rune d'esprit",
    tx: "Rune du domaine Esprit.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance d'Esprit."
  },
  "OGN-042/298": {
    n: "Rune de calme",
    tx: "Rune du domaine Calme.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Calme."
  },
  "OGN-105/298": {
    n: "Singularité",
    tx: "Inflige 6 dégâts à chacune de deux unités au maximum.",
    note: "Deux unités différentes : impossible de concentrer les 12 dégâts sur une seule."
  },
  "OGN-183/298": {
    n: "Partie truquée",
    tx: "Action.\nRegarde les 3 premières cartes de ton deck principal. Mets-en 1 dans ta main et recycle les deux autres."
  },
  "OGN-209/298": {
    n: "Supplice de la planche",
    tx: "Chaque joueur tue une de ses unités.",
    note: "Effet global : il ne « choisit » personne, donc il passe outre les protections comme Déviation ou « ne peut pas être choisie »."
  },
  "OGN-045/298": {
    n: "Contre-sort",
    tx: "Réaction.\nContre un sort dont le coût ne dépasse pas 4 Énergie et 1 Puissance.",
    note: "On regarde le coût imprimé sur la carte, pas ce que l'adversaire a réellement payé."
  },
  "OGN-058/298": {
    n: "Discipline",
    tx: "Réaction.\nDonne +2 Puissance à une unité ce tour-ci. Pioche 1 carte."
  },
  "OGN-169/298": {
    n: "Bourrasque",
    tx: "Réaction.\nRenvoie dans la main de son propriétaire une unité de 3 Puissance ou moins présente sur un champ de bataille.",
    note: "On compare la Puissance au moment de la résolution : une unité améliorée peut passer au-dessus de 3 et être sauvée."
  },
  "OGN-213/298": {
    n: "Lame dissimulée",
    tx: "Cachée.\nAction.\nTue une unité présente sur un champ de bataille. Son contrôleur pioche 2 cartes.",
    note: "Jouée depuis sa position cachée, elle ne coûte rien et prend l'adversaire en plein affrontement."
  },
  "VEN-135a/166": {
    n: null,
    tx: "Cachée.\nQuand tu me joues ou que j'attaque, tu peux payer 2 Énergie pour étourdir une unité.\nTant qu'une unité ennemie étourdie est présente ici, j'ai +2 Puissance.",
    note: "Étourdir = l'unité n'inflige pas de dégâts de combat ce tour-ci. Elle encaisse quand même."
  },
  "OGN-173/298": {
    n: "Courant d'air",
    tx: "Action.\nDéplace une unité alliée et redresse-la.",
    note: "Le déplacement épuise normalement l'unité : ici elle arrive prête, donc capable de repartir ou de défendre."
  },
  "SFD-145/221": {
    n: null,
    tx: "Cachée.\nAction.\nÉchange la Puissance de deux unités présentes sur le même champ de bataille, ce tour-ci.",
    note: "On échange les valeurs au moment de la résolution, bonus et améliorations compris."
  },
  "OGN-199/298": {
    n: "Maître des marées",
    tx: "Cachée.\nQuand tu me joues, tu peux choisir une unité alliée : je prends sa place et elle prend la mienne.",
    note: "L'échange n'est pas un déplacement : il n'épuise pas et ne déclenche pas les effets de mouvement."
  },
  "UNL-176/219": {
    n: null,
    tx: "Embuscade.\nQuand j'attaque, j'étourdis une unité ennemie présente ici.",
    note: "Embuscade permet de me jouer en Réaction, donc d'arriver en plein affrontement."
  },
  "SFD-080/221": {
    n: null,
    tx: "Action.\nRépétition 1 Énergie + 1 Puissance.\nInflige 1 dégât à trois unités au maximum situées au même endroit.",
    note: "Avec la répétition, on peut infliger 2 dégâts aux mêmes cibles, ou viser deux groupes différents."
  },
  "VEN-040/166": {
    n: null,
    tx: "Réaction.\nChoisis une unité alliée engagée contre une unité ennemie de Furie, ou visée par un sort ennemi de Furie. Donne-lui +4 Puissance ce tour-ci."
  },
  "VEN-061/166": {
    n: null,
    tx: "Réaction.\nIgnore Déviation en payant le coût de ce sort.\nDonne −5 Puissance à une unité ennemie du domaine Corps ce tour-ci.",
    note: "Le passage outre Déviation est ce qui rend ce décret redoutable contre les unités protégées."
  },
  "VEN-015/166": {
    n: null,
    tx: "Action.\nCe sort ne peut pas être contré.\nInflige 4 dégâts à une unité ennemie du domaine Calme."
  },
  "SFD-139/221": {
    n: null,
    tx: "Cachée.\nQuand tu le joues depuis sa position face cachée, attache-le à une unité que tu contrôles ici.\nÉquiper 1 Puissance.",
    note: "Révélé, il s'attache gratuitement : c'est un renfort surprise en plein affrontement."
  },
  "SFD-074/221": {
    n: null,
    tx: "Quand tu me joues, tu peux détruire un équipement dont le coût en Énergie ne dépasse pas 1. Si tu le fais, crée un jeton d'équipement Or, épuisé.",
    note: "Le jeton Or se détruit pour donner 1 Puissance : c'est une ressource, pas une arme."
  },
  "OGN-172/298": {
    n: "Réprimande",
    tx: "Action.\nRenvoie dans la main de son propriétaire une unité présente sur un champ de bataille."
  },
  "UNL-120/219": {
    n: null,
    tx: "Embuscade.\nJe peux être joué sur un champ de bataille où se trouvent des unités ennemies, même si tu n'y as aucune unité.",
    note: "C'est l'exception : normalement, Embuscade exige d'avoir déjà des unités sur place."
  },
  "OGN-287/298": {
    n: "Sceau de la tempête",
    tx: "Quand tu conquiers ici, recycle une de tes runes.",
    note: "Recycler donne de la Puissance : ce champ de bataille finance tes coûts en Puissance."
  },
  "OGN-095/298": {
    n: "Assommoir",
    tx: "Réaction.\nDonne −1 Puissance à une unité ce tour-ci, sans descendre sous 1. Pioche 1 carte."
  },
  "OGN-116/298": {
    n: "Sentinelle aux mille queues",
    tx: "Accélération.\nQuand tu me joues, donne −3 Puissance aux unités ennemies ce tour-ci, sans descendre sous 1.",
    note: "Effet global : il touche même les unités qui ne peuvent pas être choisies."
  },
  "UNL-150a/219": {
    n: null,
    tx: "Déviation.\nQuand un adversaire joue une unité alors que je suis sur un champ de bataille, étourdis-la. Il ne peut pas la déplacer ce tour-ci."
  },
  "OGN-077/298": {
    n: "Sablier de Zhonya",
    tx: "Cachée.\nLa prochaine fois qu'une unité alliée devrait mourir, détruis cet équipement à la place. Rappelle cette unité, épuisée.",
    note: "Le rappel n'est pas un déplacement. Le déclenchement est obligatoire : il part sur la première unité qui meurt, pas forcément celle que tu voulais sauver."
  },
  "SFD-001/221": {
    n: null,
    tx: "Réaction.\nDonne à une unité alliée présente sur un champ de bataille +2 Puissance ce tour-ci pour chaque unité ennemie présente au même endroit."
  },
  "VEN-044/166": {
    n: null,
    tx: "Quand tu joues ta première carte du tour, si je suis sur un champ de bataille, ta carte suivante de ce tour coûte 2 Énergie et 2 Puissance de moins."
  },
  "SFD-161/221": {
    n: null,
    tx: "Équiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)",
    note: "Équipement sans effet : il ne sert qu'à ajouter sa Puissance à l'unité équipée."
  },
  "UNL-042/219": {
    n: null,
    tx: "Cachée.\nAction.\nÉtourdis une unité. (Elle n'inflige pas de dégâts de combat ce tour-ci.)\nSi tu l'as jouée depuis ta main, pioche 1 carte.",
    note: "La pioche est perdue si tu la révèles depuis sa position cachée : c'est le prix de la gratuité."
  },
  "VEN-003/166": {
    n: null,
    tx: "Détruis un équipement.\nFlux 4 Énergie + 1 Puissance. (Tu peux la jouer depuis ta défausse pour son coût de Flux. Elle est ensuite bannie.)"
  },
  "UNL-153/219": {
    n: null,
    tx: "Glas → crée dans ta base un jeton d'unité Oiseau de 1 Puissance avec Déviation. (Effet obtenu quand je meurs.)"
  },
  "OGN-043/298": {
    n: "Charme",
    tx: "Déplace une unité ennemie.",
    note: "Déplacement forcé : il peut tirer un défenseur hors de son champ, ou en envoyer un dans un affrontement perdu."
  },
  "UNL-073/219": {
    n: null,
    tx: "Inflige 3 dégâts à une unité ennemie. Si elle meurt ce tour-ci, crée un jeton d'équipement Or, épuisé."
  },
  "SFD-140/221": {
    n: null,
    tx: "Quand tu me joues, tu peux jouer depuis ta défausse un sort dont le coût en Énergie ne dépasse pas 3, sans payer son Énergie. Recycle ce sort après l'avoir joué.",
    note: "Le coût en Puissance reste dû : seule l'Énergie est offerte."
  },
  "OGN-212/298": {
    n: "Forge du futur",
    tx: "Quand tu le joues, crée un jeton d'unité Recrue de 1 Puissance dans ta base.\nDétruis cet équipement : recycle jusqu'à 4 cartes depuis les défausses."
  },
  "VEN-101/166": {
    n: null,
    tx: "Tu peux payer 1 Énergie en coût additionnel pour me jouer.\nQuand tu me joues, si tu as payé ce coût, bannis une carte d'une défausse pour donner Assaut 2 à une unité ce tour-ci."
  },
  "OGN-221/298": {
    n: "Décret impérial",
    tx: "Action.\nCe tour-ci, dès qu'une unité subit des dégâts, elle meurt.",
    note: "S'applique à toutes les unités, les tiennes comprises. Un seul dégât suffit à tuer."
  },
  "SFD-057/221": {
    n: null,
    tx: "Déviation.\nQuand tu me choisis ou que tu me redresses, donne-moi +1 Puissance ce tour-ci."
  },
  "UNL-143a/219": {
    n: null,
    tx: "Embuscade.\nQuand j'attaque ou je défends, si une unité ennemie est seule ici, donne-moi +2 Puissance ce tour-ci et gagne 2 XP."
  },
  "SFD-045/221": {
    n: null,
    tx: "Réaction.\nContre un sort ou une capacité ennemie qui choisit une unité ou un équipement allié.",
    note: "Ne contre que ce qui te vise : sans ciblage, l'effet passe."
  },
  "VEN-012/166": {
    n: null,
    tx: "Redresse une unité et donne-lui Assaut 3 ce tour-ci.\nFlux 3 Énergie + 1 Puissance. (Tu peux la jouer depuis ta défausse pour son coût de Flux. Elle est ensuite bannie.)"
  },
  "UNL-053/219": {
    n: null,
    tx: "(Les unités à 0 Puissance peuvent conquérir et tenir un champ de bataille.)\nQuand tu me joues, pioche 1 carte.\nGlas → choisis un adversaire : il révèle sa main, tu peux voir ses cartes face cachée ce tour-ci, et tu gagnes 1 XP.",
    note: "Une unité à 0 Puissance meurt dès le premier dégât, mais elle suffit à tenir un champ de bataille."
  },
  "UNL-078/219": {
    n: null,
    tx: "Temporaire.\nQuand tu le joues, crée dans ta base un jeton d'unité Farfadet de 3 Puissance, prêt et Temporaire.\nGlas → répète l'effet de mise en jeu de cet équipement."
  },
  "OGN-289/298": {
    n: "Pic de Targon",
    tx: "Quand tu conquiers ici, redresse 2 runes à la fin de ce tour."
  },
  "VEN-066/166": {
    n: null,
    tx: "Cachée.\nBannis une unité, puis son propriétaire la rejoue au même endroit sans payer son coût.",
    note: "Sur une unité ennemie, ça annule ses améliorations et ses équipements. Sur la tienne, ça relance ses effets d'arrivée."
  },
  "VEN-037/166": {
    n: null,
    tx: "Quand tu me joues, si tu contrôles 7 runes ou plus, choisis un équipement ennemi : s'il est ascendu, retire-lui son ascendance ; sinon, détruis-le."
  },
  "OGN-123/298": {
    n: "Puissance incontrôlable",
    tx: "Épuise toutes tes unités, puis inflige 12 dégâts à TOUTES les unités présentes sur des champs de bataille.",
    note: "Y compris les tiennes. C'est une remise à zéro du plateau, pas une frappe ciblée."
  }
};
