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
  },

  /* ---------- tournoi de Shenyang : cartes vues dans 3 decks ou plus ---------- */

  "OGN-122/298": {
    n: "Distorsion temporelle",
    tx: "Joue un tour supplémentaire après celui-ci. Bannis ce sort.",
    note: "Le tour supplémentaire est complet : réveil, score, canalisation, pioche."
  },
  "UNL-106/219": {
    n: null,
    tx: "Réaction.\nChoisis une unité alliée sur un champ de bataille. Contre un sort ou une capacité ennemie qui la choisit, elle et aucune autre unité alliée.",
    note: "Inefficace contre les effets qui visent plusieurs de tes unités à la fois."
  },
  "SFD-209/221": {
    n: null,
    tx: "Les joueurs ne peuvent pas marquer ici avant leur troisième tour."
  },
  "SFD-216/221": {
    n: null,
    tx: "Aucune unité ne peut être jouée ici.",
    note: "On ne peut y arriver qu'en s'y déplaçant depuis un autre endroit."
  },
  "OGN-022/298": {
    n: "Rayon thermique",
    tx: "Action.\nDétruis tous les équipements.",
    note: "Tous, y compris les tiens."
  },
  "SFD-217/221": {
    n: null,
    tx: "Quand tu conquiers ici, pioche 1 carte pour chaque autre champ de bataille que toi ou tes alliés contrôlez."
  },
  "UNL-212/219": {
    n: null,
    tx: "Au début de la phase Initiale de chaque joueur, inflige 1 dégât à chaque unité présente ici. (Avant le score.)",
    note: "Une unité à 1 Puissance ne survit donc jamais assez longtemps pour tenir le lieu."
  },
  "OGN-179/298": {
    n: "Dégâts collatéraux",
    tx: "Action.\nChaque joueur détruit un de ses équipements.",
    note: "Effet global : il ne choisit personne, donc il passe outre les protections."
  },
  "SFD-036/221": {
    n: null,
    tx: "Glas — si je suis morte seule, pioche 1 carte. (Je suis seule s'il n'y a aucune autre unité alliée ici.)"
  },
  "VEN-164/166": {
    n: null,
    tx: "Chaque sort qui choisit une ou plusieurs unités alliées présentes ici coûte 1 Puissance de moins."
  },
  "OGN-298/298": {
    n: "Profondeurs de Zaun",
    tx: "Quand tu conquiers ici, défausse 1 carte, puis pioche 1 carte."
  },
  "VEN-100/166": {
    n: null,
    tx: "Crée deux jetons d'unité Tentacule de 1 Puissance à Bilgewater.\nFlux 3 Énergie. (Tu peux la jouer depuis ta défausse pour son coût de Flux. Elle est ensuite bannie.)"
  },
  "OGN-103/298": {
    n: null,
    tx: "Quand tu joues un sort, donne-moi +1 Puissance ce tour-ci.",
    note: "Le bonus s'accumule : plusieurs sorts dans le tour, autant de +1."
  },
  "VEN-112a/166": {
    n: null,
    tx: "Quand je conquiers, crée un jeton d'unité Clone d'ombre de 0 Puissance dans ta base.\nAction → 1 Énergie + 1 Puissance : échange ma position avec celle d'un Clone d'ombre que tu contrôles.",
    note: "L'échange n'est pas un déplacement : il n'épuise pas et ne déclenche pas d'affrontement."
  },
  "UNL-118a/219": {
    n: "Dragon ancestral",
    tx: "N'importe quelle quantité de mes dégâts suffit à tuer une unité ennemie.\nQuand tu me joues, choisis jusqu'à une unité ennemie à chaque endroit et inflige-lui 1 dégât.",
    note: "1 dégât suffit à tuer : l'effet d'arrivée peut donc nettoyer une unité par endroit, quelle que soit sa Puissance."
  },
  "OGN-160/298": {
    n: "Aurore éclatante",
    tx: "À la fin de ton tour, révèle les cartes du dessus de ton deck principal jusqu'à révéler une unité. Joue-la sans payer son coût et recycle les autres.",
    note: "L'unité arrive épuisée, comme toute unité jouée."
  },
  "OGN-134/298": {
    n: "Mobilisation",
    tx: "Canalise 1 rune, épuisée. Si tu ne peux pas, pioche 1 carte."
  },
  "VEN-157/166": {
    n: null,
    tx: "N'importe quel joueur peut payer 2 Puissance en coût additionnel pour jouer un Dragon. S'il le fait, il le joue sur ce champ de bataille."
  },
  "UNL-103/219": {
    n: null,
    tx: "Réaction.\nAu choix :\n— choisis jusqu'à 3 cartes dans les défausses adverses : leurs propriétaires les recyclent ;\n— ou pioche 1 carte."
  },
  "SFD-043/221": {
    n: null,
    tx: "Cachée.\nAction.\nRenvoie à leur base autant d'unités alliées que tu veux depuis un champ de bataille.",
    note: "Sauvetage en masse : joué en plein affrontement, il vide le champ avant les dégâts."
  },
  "VEN-028/166": {
    n: null,
    tx: "Quand un combat auquel j'ai participé se termine, ascends-moi.\nAscendue → j'ai +2 Puissance."
  },
  "UNL-145/219": {
    n: null,
    tx: "Cachée.\nArrière-garde.\nUne fois par tour, quand une unité ennemie meurt alors que je suis sur un champ de bataille, crée un jeton d'équipement Or, épuisé."
  },
  "SFD-218/221": {
    n: null,
    tx: "Quand tu conquiers ici avec au moins une unité Puissante, tu peux payer 1 Énergie pour piocher 1 carte. (Une unité est Puissante tant qu'elle a 5 Puissance ou plus.)"
  },
  "VEN-095/166": {
    n: null,
    tx: "Quand je me déplace, tu peux Brûler 1 pour me donner +1 Puissance ce tour-ci. (Brûler 1 : mets la première carte de ton deck principal dans ta défausse.)"
  },
  "OGN-185/298": {
    n: "Marchand itinérant",
    tx: "Quand je me déplace, défausse 1 carte, puis pioche 1 carte."
  },
  "UNL-141/219": {
    n: null,
    tx: "Cachée.\nArrière-garde.\nQuand tu me joues depuis ma position face cachée pendant ton tour, tu peux amener sur mon champ de bataille une unité ennemie située ailleurs."
  },
  "VEN-166/166": {
    n: null,
    tx: "Quand un combat commence ici, l'attaquant et le défenseur ajoutent chacun 1 Énergie."
  },
  "UNL-215/219": {
    n: null,
    tx: "La première fois qu'un joueur joue ici une unité qui n'est pas un jeton, chaque tour, il peut renvoyer à sa base une autre unité qu'il contrôle ici."
  },
  "UNL-070/219": {
    n: null,
    tx: "Donne Temporaire à un équipement. (Il meurt au début de la phase Initiale de son contrôleur, avant le score.)",
    note: "Façon détournée de détruire un équipement : il part au tour suivant, pas tout de suite."
  },
  "VEN-158/166": {
    n: null,
    tx: "Les joueurs ignorent Déviation en payant les sorts et capacités qui choisissent quelque chose ici.",
    note: "Ce champ de bataille annule la protection des unités qui s'y trouvent."
  },
  "SFD-155/221": {
    n: null,
    tx: "Glas — crée un jeton d'équipement Or, épuisé."
  },
  "OGN-294/298": {
    n: "Camp de guerre trifarian",
    tx: "Les unités présentes ici ont +1 Puissance. (Les attaquants aussi.)"
  },
  "OGN-234/298": {
    n: null,
    tx: "Quand tu me joues, tue une unité ennemie.",
    note: "Pas de ciblage conditionnel : c'est un retrait sec à l'arrivée."
  },
  "OGN-138/298": {
    n: "Catalyseur de l'éternité",
    tx: "Canalise 2 runes, épuisées. Si tu n'as pas pu en canaliser 2 ainsi, pioche 1 carte."
  },
  "UNL-069/219": {
    n: null,
    tx: "Crée deux jetons d'unité Farfadet de 3 Puissance, prêts et Temporaires. (Chacun meurt au début de la phase Initiale de son contrôleur, avant le score.)",
    note: "Ils arrivent prêts : 6 Puissance immédiatement utilisable pour attaquer."
  },
  "UNL-207/219": {
    n: null,
    tx: "Quand tu tiens ce champ de bataille, tu peux renvoyer à sa base une unité présente sur un champ de bataille."
  },
  "SFD-159/221": {
    n: null,
    tx: "Tant qu'une autre unité alliée est ici, j'ai +1 Puissance."
  },
  "UNL-169/219": {
    n: null,
    tx: "Quand tu me joues, choisis un adversaire : il révèle sa main, tu choisis une carte révélée et tu la bannis. Quand il tient un champ de bataille, elle retourne dans sa main (même si j'ai quitté le plateau).",
    note: "Ce n'est pas une destruction : la carte revient dès qu'il marque un point en tenant."
  },
  "SFD-109/221": {
    n: null,
    tx: "Maître d'armes.\nTu peux payer 2 Puissance en coût additionnel pour me jouer.\nQuand tu me joues, si tu as payé ce coût, prends un équipement ennemi et place-le dans ta base. Tu le contrôles tant que je reste sur le plateau. Si c'est un Équipement, attache-le-moi.",
    note: "Le vol s'annule si je quitte le plateau : l'équipement retourne à son propriétaire."
  },
  "OGN-128/298": {
    n: "Confrontation",
    tx: "Action.\nChoisis une unité alliée et une unité ennemie. Elles s'infligent mutuellement des dégâts égaux à leur Puissance."
  },
  "SFD-048/221": {
    n: null,
    tx: "Quand je me déplace, pioche 1 carte."
  },
  "OGN-067/298": {
    n: null,
    tx: "Tank.\nQuand tu me joues sur un champ de bataille, tu peux y amener une unité ennemie.\nQuand je tiens un champ de bataille, je retourne dans la main de mon propriétaire.",
    note: "Je marque le point, puis je pars : on me rejoue au tour suivant."
  },
  "OGN-027/298": {
    n: null,
    tx: "Quand tu joues ta deuxième carte dans un tour, donne-moi +2 Puissance ce tour-ci et redresse-moi."
  },
  "VEN-038/166": {
    n: null,
    tx: "Je ne peux pas être choisie par les sorts et capacités ennemis, sauf si je suis en combat.\nQuand je me déplace vers un champ de bataille, donne-moi +2 Puissance ce tour-ci.",
    note: "Intouchable hors combat : pour la retirer, il faut d'abord l'engager."
  },
  "UNL-113/219": {
    n: null,
    tx: "Chasse 2.\nNiveau 6 → j'ai Déviation et Gank. (Tant que tu as 6 XP ou plus.)"
  },
  "OGN-046/298": {
    n: "En garde",
    tx: "Réaction.\nDonne +1 Puissance à une unité alliée ce tour-ci, puis encore +1 si c'est la seule unité que tu contrôles là-bas."
  },
  "VEN-084a/166": {
    n: null,
    tx: "Ascendante 3 Énergie + 1 Puissance.\nAscendue → j'ai +3 Puissance et je ne peux pas subir de dégâts, sauf en combat."
  },
  "SFD-070/221": {
    n: null,
    tx: "Cachée.\nAction.\nInflige 3 dégâts à une unité présente sur un champ de bataille. Crée un jeton d'équipement Or, épuisé."
  },
  "VEN-058/166": {
    n: null,
    tx: "(J'arrive épuisée.)\nQuand tu me joues, si tu contrôles 3 autres équipements ou plus, pioche 1 carte."
  },
  "SFD-136/221": {
    n: null,
    tx: "Réaction.\nRépétition 2 Énergie.\nContre un sort, sauf si son contrôleur paie 2 Énergie.",
    note: "Ce n'est pas un contre sec : l'adversaire peut toujours payer pour passer."
  },
  "OGS-011/024": {
    n: "Flash",
    tx: "Réaction.\nRenvoie jusqu'à 2 unités alliées à leur base.",
    note: "Sortie d'urgence : joué avant les dégâts, il sauve les unités engagées."
  },
  "SFD-003/221": {
    n: null,
    tx: "Action.\nRépétition 1 Énergie.\nDonne Assaut 2 à une unité."
  },
  "UNL-116/219": {
    n: null,
    tx: "Déviation.\nQuand tu me joues, si le score d'un adversaire est à 3 points ou moins de la victoire, redresse-moi et gagne 3 XP.",
    note: "Carte de secours : elle ne s'active que quand tu es en train de perdre."
  },
  "UNL-158/219": {
    n: null,
    tx: "Quand tu le joues, gagne 1 XP.\nÉquiper — dépense 1 XP pour l'attacher à une unité que tu contrôles."
  },
  "UNL-095/219": {
    n: null,
    tx: "Action.\nDonne +3 Puissance à une unité alliée ce tour-ci. Si elle gagne un combat ce tour-ci, gagne 2 XP."
  },
  "VEN-075/166": {
    n: null,
    tx: "Cet équipement arrive épuisé.\nAscendant — 1 Énergie et épuiser cet équipement.\nRéaction → épuiser : ajoute 1 Énergie. S'il est ascendu, ajoute 2 Énergie à la place."
  },
  "VEN-049/166": {
    n: null,
    tx: "Pioche 1 carte.\nFlux 2 Énergie. (Tu peux la jouer depuis ta défausse pour son coût de Flux. Elle est ensuite bannie.)"
  },
  "OGN-218/298": {
    n: "Capitaine de l'avant-garde",
    tx: "Légion — quand tu me joues, crée ici deux jetons d'unité Recrue de 1 Puissance."
  },
  "UNL-173/219": {
    n: null,
    tx: "Réaction.\nEn coût additionnel, tue une unité alliée Puissante. (Une unité est Puissante tant qu'elle a 5 Puissance ou plus.)\nPioche 2 cartes et canalise 1 rune, épuisée."
  },
  "UNL-209/219": {
    n: null,
    tx: "Au début de ta phase Initiale, tu peux tuer une unité que tu contrôles ici pour piocher 1 carte. (Avant le score.)"
  },
  "SFD-220/221": {
    n: null,
    tx: "Quand tu conquiers ici, tu peux payer 1 Énergie pour créer un jeton d'équipement Or, épuisé."
  },
  "VEN-102/166": {
    n: null,
    tx: "Quand un adversaire joue un équipement, tu peux me bannir pour le bannir."
  },
  "SFD-163/221": {
    n: null,
    tx: "Réaction.\nTue une unité alliée pour donner à une autre unité alliée un bonus de Puissance égal à la sienne, ce tour-ci. Pioche 1 carte."
  },
  "OGN-286/298": {
    n: "Arène de l'Ordalie",
    tx: "Quand tu tiens ce champ de bataille, déclenche les effets de conquête des unités présentes ici."
  },
  "SFD-177/221": {
    n: null,
    tx: "Accélération.\nQuand j'attaque, tu peux amener sur ce champ de bataille autant de tes unités-jetons que tu veux."
  },
  "OGN-104/298": {
    n: "Retraite",
    tx: "Réaction.\nRenvoie une unité alliée dans la main de son propriétaire. Il canalise 1 rune, épuisée.",
    note: "Sauve l'unité et compense le tempo : la rune canalisée reste utilisable au tour suivant."
  },
  "OGN-114/298": {
    n: "Avenir prometteur",
    tx: "Pioche 4 cartes."
  },
  "OGN-038/298": {
    n: "Kadregrin l'infernal",
    tx: "Quand tu me joues, pioche 1 carte pour chacune de tes unités Puissantes. (Une unité est Puissante tant qu'elle a 5 Puissance ou plus.)"
  },
  "OGN-129/298": {
    n: "Défi",
    tx: "Action.\nLes unités que tu joues ce tour-ci arrivent prêtes. Pioche 1 carte.",
    note: "Casse la règle de base : les unités posées après ce sort peuvent attaquer immédiatement."
  },
  "OGN-014/298": {
    n: "Foudroiement",
    tx: "Action.\nLe coût en Énergie de ce sort est réduit de la plus haute Puissance parmi tes unités.\nInflige 5 dégâts à une unité présente sur un champ de bataille.",
    note: "Avec une unité à 8 Puissance, il ne coûte plus que la Puissance indiquée."
  },
  "OGN-295/298": {
    n: "Antre de Vilemaw",
    tx: "Les unités ne peuvent pas quitter ce champ de bataille pour retourner à la base.",
    note: "Piège : on ne peut plus se replier, seulement mourir ou avancer ailleurs."
  },
  "UNL-147/219": {
    n: "Baron Nashor",
    tx: "En me jouant, ajoute le jeton de champ de bataille Fosse du Baron au plateau s'il n'y est pas déjà. Si tu le fais, j'arrive là-bas. (« Les unités peuvent s'y déplacer depuis n'importe où. »)\nJe ne peux pas être choisi par les sorts et capacités ennemis.\nTes autres unités ont +2 Puissance.",
    note: "La Fosse du Baron compte comme un champ de bataille supplémentaire pour la règle du dernier point."
  },
  "OGN-060/298": {
    n: "Masque de prescience",
    tx: "Quand une unité alliée attaque ou défend seule, donne-lui +1 Puissance ce tour-ci."
  },
  "OGN-083/298": {
    n: "Consultation du passé",
    tx: "Cachée.\nRéaction.\nPioche 2 cartes."
  },
  /* ---------- Shenyang : cartes jouées dans 2 decks ---------- */

  "UNL-003/219": {
    n: "Marai espiègle",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nQuand tu me joues sur un champ de bataille, inflige 2 dégâts à une unité ennemie présente ici.",
    note: "Posée face cachée, elle se révèle en Réaction : les 2 dégâts peuvent tomber en pleine chaîne, pendant l'affrontement."
  },
  "UNL-205/219": {
    n: "Hall abandonné",
    tx: "Quand un joueur joue un sort, il peut donner +1 Puissance à une unité qu'il contrôle ici, ce tour-ci.",
    note: "L'effet marche pour les deux joueurs, pas seulement pour celui qui tient le champ de bataille."
  },
  "OGN-056/298": {
    n: "Adaptatron",
    tx: "Quand je conquiers, tu peux tuer un Équipement. Si tu le fais, améliore-moi. (Si je n'ai pas d'amélioration, je reçois +1 Puissance.)",
    note: "L'Équipement détruit peut être le tien comme celui de l'adversaire."
  },
  "OGN-211/298": {
    n: "Fabricante dévouée",
    tx: "Quand tu me joues, crée ici un jeton d'unité Recrue de 1 Puissance."
  },
  "SFD-150/221": {
    n: "Derniers sacrements",
    tx: "Équiper — 1 Puissance et recycler 2 cartes de ta défausse. (Coût à payer : attacher cet équipement à une unité que tu contrôles.)",
    note: "Il faut donc au moins 2 cartes dans ta défausse pour pouvoir l'équiper."
  },
  "SFD-212/221": {
    n: "Champ de mines",
    tx: "Quand tu conquiers ici, mets les 2 premières cartes de ton deck principal dans ta défausse.",
    note: "Ce n'est pas un choix : conquérir ici te coûte 2 cartes de deck à chaque fois."
  },
  "VEN-043/166": {
    n: "Pattes d'acier",
    tx: "Déviation. (L'adversaire doit payer 1 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)\nAscendant 7 Énergie. (7 Énergie : m'ascendre. Utilisable seulement si je ne le suis pas déjà.)\nAscendue : j'ai +7 Puissance.",
    note: "1 Énergie pour 0 Puissance au départ ; une fois ascendue, elle devient une menace à 7, et l'ascension est définitive."
  },
  "VEN-099/166": {
    n: "Guerrier de la tornade",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nQuand tu me joues depuis ma position face cachée, tu peux ascendre une carte présente ici. Elle perd son ascension à la fin du tour.",
    note: "Ascension temporaire : de quoi débloquer un effet « Ascendu » le temps d'un affrontement, sans payer son coût."
  },
  "OGN-181/298": {
    n: "Sac à merveilles",
    tx: "Épuiser : renvoie un autre Équipement allié, une unité alliée ou une carte Cachée dans la main de son propriétaire.",
    note: "Sert surtout à récupérer une unité qui allait mourir, ou à rejouer un effet « quand tu me joues »."
  },
  "SFD-032/221": {
    n: null,
    tx: "Quand tu me joues, tu peux tuer un Équipement."
  },
  "VEN-114/166": {
    n: "Kharox",
    tx: "Ascendant 6 Énergie + 2 Puissance. (Coût à payer pour m'ascendre. Utilisable seulement si je ne le suis pas déjà.)\nQuand je deviens Ascendu, choisis un adversaire : il subit Brûlure 3. Puis tu peux choisir une unité dans sa défausse et la jouer sans payer son coût. (Brûlure 3 : il met les 3 premières cartes de son deck principal dans sa défausse.)",
    note: "La brûlure alimente ta propre pioche d'unités : plus son deck se vide, plus tu as de cibles à voler."
  },
  "VEN-081/166": {
    n: "Déferlement",
    tx: "Donne +6 Puissance à une unité ce tour-ci.\nFlux 4 Énergie. (Tu peux me jouer depuis ta défausse pour ce coût de Flux. Je suis ensuite bannie.)",
    note: "Deux usages dans la partie : une fois depuis la main, une fois depuis la défausse."
  },
  "SFD-207/221": {
    n: "Estrade de l'Empereur",
    tx: "Quand tu conquiers ici, tu peux payer 1 Énergie et renvoyer une unité que tu contrôles ici dans la main de son propriétaire. Si tu le fais, crée ici un jeton d'unité Soldat des sables de 2 Puissance.",
    note: "Sert à recycler un effet « quand tu me joues » tout en gardant un corps sur place."
  },
  "SFD-110/221": {
    n: "Fiora",
    tx: "Quand j'attaque ou que je défends en duel, ma Puissance est doublée pour ce combat.",
    note: "« En duel » veut dire seule contre une seule unité : dès qu'il y a une troisième unité au combat, l'effet ne s'applique pas."
  },
  "SFD-149/221": {
    n: "Ezreal",
    tx: "Quand tu me joues, défausse 1 carte, puis pioche 2 cartes.\nLes coûts additionnels facultatifs que tu paies coûtent 1 Énergie ou 1 Puissance de moins.",
    note: "La réduction vise les coûts marqués « tu peux payer… » : Accélération, Répétition, Ascendant, Cachée…"
  },
  "OGN-186/298": {
    n: "Coffre au trésor",
    tx: "Quand cet équipement quitte le plateau, pioche 1 carte et canalise 1 rune, épuisée.\n1 Puissance, épuiser : tuer cet équipement.",
    note: "Tu peux donc l'encaisser toi-même quand tu en as besoin, sans attendre que l'adversaire le détruise."
  },
  "SFD-066/221": {
    n: "Toucher glacial",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nRépétition 2 Énergie. (Tu peux payer le coût additionnel pour répéter l'effet du sort.)\nDonne -2 Puissance à une unité ce tour-ci.",
    note: "En répétant, tu peux mettre les deux -2 sur la même unité ou les répartir : les cibles se choisissent au lancement."
  },
  "UNL-080/219": {
    n: "Hwei",
    tx: "Quand je me déplace, pioche 1 carte puis défausse 1 carte. Ensuite, selon le type de la carte défaussée :\n— Sort : pioche 1 carte.\n— Équipement : redresse jusqu'à 2 runes.\n— Unité : je gagne +3 Puissance ce tour-ci.",
    note: "Avec Gank ou un effet de déplacement, il rejoue son effet à chaque mouvement."
  },
  "UNL-063/219": {
    n: "Éclipse",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nDonne -4 Puissance à une unité ce tour-ci.\nPrédiction. (Regarde la première carte de ton deck principal. Tu peux la recycler.)",
    note: "Une unité à 4 Puissance ou moins tombe à 0 : elle meurt tout de suite."
  },
  "SFD-029/221": {
    n: "Rek'Sai",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)\nAssaut. (+1 Puissance tant que je suis attaquante.)\nLes unités alliées jouées depuis un endroit autre que la main d'un joueur ont Accélération.",
    note: "Récompense les decks qui rejouent des unités depuis la défausse ou le deck : elles arrivent prêtes et peuvent attaquer aussitôt."
  },
  "VEN-124/166": {
    n: null,
    tx: "Ascendant — tuer une unité alliée. (Coût à payer pour m'ascendre. Utilisable seulement si je ne le suis pas déjà.)\nAscendu : j'ai +2 Puissance.",
    note: "Le coût n'est pas en ressources mais en unité : idéal avec un jeton ou une unité qui a un effet « quand je meurs »."
  },
  "UNL-006/219": {
    n: "Requineau",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)\nAssaut 4. (+4 Puissance tant que je suis attaquante.)",
    note: "1 Puissance en défense, 5 en attaque : à jouer offensivement, jamais pour tenir un champ de bataille."
  },
  "OGN-291/298": {
    n: "Le Sanctuaire aux chandelles",
    tx: "Quand tu conquiers ici, regarde les 2 premières cartes de ton deck principal. Tu peux en recycler une ou les deux. Remets celles que tu gardes sur le dessus, dans l'ordre que tu veux."
  },
  "OGN-232/298": {
    n: "Fiora",
    tx: "Tant que je suis Puissante, j'ai Déviation, Gank et Bouclier. (Je suis Puissante tant que j'ai 5 Puissance ou plus.)",
    note: "À 4 Puissance de base, il lui faut une amélioration ou un sort pour atteindre 5 et débloquer les trois mots-clés."
  },
  "OGN-207/298": {
    n: "Appel à la gloire",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nEn me jouant, tu peux dépenser une amélioration en coût additionnel. Si tu le fais, ignore mon coût.\nDonne +3 Puissance à une unité ce tour-ci.",
    note: "Gratuit si tu sacrifies une amélioration déjà posée : un tour de combat surprise sans toucher à tes runes."
  },
  "OGN-280/298": {
    n: "Bosquet du Dieu-Saule",
    tx: "Quand tu tiens ce champ de bataille, pioche 1 carte.",
    note: "« Tenir » veut dire le contrôler au début de ton tour sans avoir eu à le conquérir ce tour-ci."
  },
  "OGN-099/298": {
    n: "Ramasse-ordures",
    tx: "Recycler 3 cartes de ta défausse, 1 Énergie, épuiser : pioche 1 carte.",
    note: "Il faut payer les trois éléments du coût en même temps : la défausse doit contenir au moins 3 cartes."
  },
  "OGN-216/298": {
    n: "Éclaireur planant",
    tx: "Glas — canalise 1 rune, épuisée. (Effet obtenu quand je meurs.)",
    note: "La rune canalisée arrive épuisée : elle ne servira qu'au tour suivant."
  },
  "OGN-096/298": {
    n: "Sentinelle vigilante",
    tx: "Glas — pioche 1 carte. (Effet obtenu quand je meurs.)"
  },
  "VEN-137/166": {
    n: "Lunettes fumées",
    tx: "Équiper 1 Énergie + 1 Puissance. (Attacher cet équipement à une unité que tu contrôles.)\nEn l'attachant à une unité, choisis une autre unité alliée : l'unité équipée devient une copie de celle-ci tant que cet équipement lui reste attaché.",
    note: "La copie prend tout : Puissance, mots-clés et capacités. Détache l'équipement et l'unité redevient elle-même."
  },
  "UNL-028/219": {
    n: "Pyke",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nGank. (Je peux me déplacer d'un champ de bataille à un autre.)\nTu peux payer 1 Puissance en coût additionnel pour me jouer.\nQuand tu me joues, si tu as payé ce coût, redresse-moi et donne-moi +2 Puissance ce tour-ci.",
    note: "Révélé depuis sa position cachée en pleine chaîne, prêt et à 4 Puissance : l'embuscade type."
  },
  "VEN-080/166": {
    n: "Démolisseur noxien",
    tx: "Quand je conquiers, tu peux tuer un Équipement dont le coût en Énergie ne dépasse pas ma Puissance."
  },
  "SFD-007/221": {
    n: "Brouilleur à gemme",
    tx: "Quand tu me joues, donne Gank à une unité ce tour-ci. (Elle peut se déplacer d'un champ de bataille à un autre.)",
    note: "Permet un déplacement surprise vers un champ de bataille laissé sans défense."
  },
  "SFD-026/221": {
    n: "Rumble",
    tx: "Chacun de tes Mécas a Assaut. (+1 Puissance tant que nous sommes attaquants.)\nQuand je conquiers, tu peux recycler une autre unité alliée pour jouer un Méca depuis ta défausse. Réduis son coût en Énergie de la Puissance de l'unité recyclée.",
    note: "Recycler une grosse unité peut rendre le Méca gratuit."
  },
  "SFD-044/221": {
    n: "Quartier-maître de la Légion",
    tx: "En coût additionnel pour me jouer, renvoie un Équipement allié dans la main de son propriétaire.",
    note: "Ce coût est obligatoire : sans Équipement allié sur le plateau, elle est injouable. En échange, un effet « quand tu le joues » d'équipement peut être relancé."
  },
  "SFD-213/221": {
    n: "Forge d'Ornn",
    tx: "Tant que tu contrôles ce champ de bataille, le premier Équipement non-jeton que tu joues chaque tour coûte 1 Énergie de moins."
  },
  "SFD-065/221": {
    n: "Prévisionniste",
    tx: "Tes Mécas ont Vision. (Quand tu nous joues, regarde la première carte de ton deck principal. Tu peux la recycler.)"
  },
  "OGN-249/298": {
    n: "Tempête implacable",
    tx: "Quand tu joues une unité Puissante, tu peux m'épuiser pour canaliser 1 rune, épuisée. (Une unité est Puissante tant qu'elle a 5 Puissance ou plus.)",
    note: "Légende de Volibear : une rune de plus par tour si ton deck enchaîne les grosses unités."
  },
  "OGN-041/298": {
    n: "Volibear",
    tx: "Déviation 2. (L'adversaire doit payer 2 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)\nQuand j'attaque, inflige 5 dégâts répartis comme tu veux entre les unités ennemies présentes ici.",
    note: "Les 5 dégâts partent à l'ouverture de l'affrontement, avant les dégâts de combat : de quoi nettoyer les petites unités avant l'échange."
  },
  "UNL-093/219": {
    n: "Sage de l'Âme du Dragon",
    tx: "Réaction : épuiser — ajoute 1 Énergie. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)",
    note: "Une rune vivante : elle donne de l'Énergie même en pleine chaîne adverse."
  },
  "VEN-088/166": {
    n: "Jayce",
    tx: "Quand je deviens prêt, choisis un effet à me donner ce tour-ci :\n— Assaut 2 (+2 Puissance tant que je suis attaquant) ;\n— Déviation 2 (l'adversaire doit payer 2 Puissance de plus pour me choisir) ;\n— Gank (je peux me déplacer d'un champ de bataille à un autre).",
    note: "Le choix se refait à chaque fois qu'il se redresse, donc au minimum une fois par tour lors de ta phase de réveil."
  },
  "UNL-104/219": {
    n: "Gemmedragon paisible",
    tx: "Quand tu me joues, ou que tu joues un autre Dragon, redresse jusqu'à 2 runes.",
    note: "Rend une partie de son coût dès qu'il arrive, et finance les Dragons suivants."
  },
  "SFD-219/221": {
    n: "L'Arbre de papier",
    tx: "Quand tu tiens ce champ de bataille, chaque joueur canalise 1 rune, épuisée.",
    note: "Attention, l'adversaire en profite aussi : ce n'est un avantage que si tu utilises mieux tes runes que lui."
  },
  "VEN-127/166": {
    n: "Lacération",
    tx: "Choisis une unité. Si elle est Ascendue, retire-lui son ascension. Puis tue-la si elle a 3 Puissance ou moins.\nFlux 4 Énergie + 2 Puissance. (Tu peux me jouer depuis ta défausse pour ce coût de Flux. Je suis ensuite bannie.)",
    note: "Réponse aux unités qui ne sont grosses que grâce à leur ascension : on la retire d'abord, on tue ensuite."
  },
  "UNL-165/219": {
    n: "L'Appel des ombres",
    tx: "Choisis une unité alliée qui n'est pas Temporaire. Donne-lui Temporaire. Pioche 2 cartes. (Elle meurt au début de la phase Initiale de son contrôleur, avant le score.)",
    note: "Deux cartes contre une unité qui ne verra pas ton prochain tour : à jouer sur une unité qui allait mourir de toute façon."
  },
  "UNL-092/219": {
    n: "Diplomate démacien",
    tx: "Quand tu me joues, gagne 1 XP."
  },
  "UNL-060/219": {
    n: "Vilemaw",
    tx: "Embuscade. (Tu peux me jouer en Réaction sur un champ de bataille où tu as des unités.)\nLes unités ennemies présentes ici qui ont moins de Puissance que moi n'infligent pas de dégâts de combat.\nQuand je tiens un champ de bataille, pioche 1 carte.",
    note: "Arrivée en Réaction au milieu d'un affrontement, elle peut annuler d'un coup les dégâts de tout un groupe d'unités plus petites."
  },
  "OGN-048/298": {
    n: "Méditation",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nEn coût additionnel, tu peux épuiser une unité alliée. Si tu le fais, pioche 2 cartes. Sinon, pioche 1 carte.",
    note: "Épuiser une unité l'empêche d'attaquer ou de défendre ce tour-ci : la deuxième carte se paie en tempo."
  },
  "SFD-087/221": {
    n: "Prémonition",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nPioche 3 cartes."
  },
  "OGN-047/298": {
    n: "Trouve ton centre",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nSi le score d'un adversaire est à 3 points ou moins du score de victoire, je coûte 2 Énergie de moins.\nPioche 1 carte et canalise 1 rune, épuisée.",
    note: "Carte de rattrapage : elle devient très bon marché justement quand tu es en train de perdre."
  },
  "VEN-126/166": {
    n: "Barrière de Ki",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nChoisis une unité : les 7 prochains dégâts qui lui seraient infligés ce tour-ci sont évités. (L'adversaire peut lui assigner des dégâts de combat en plus pour la tuer quand même.)",
    note: "Ce n'est pas une invulnérabilité : au combat, l'adversaire peut choisir de lui envoyer plus de 7 dégâts."
  },
  "UNL-175/219": {
    n: "Retraite tactique",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nChoisis une unité alliée. La prochaine fois qu'elle devrait mourir ce tour-ci, soigne-la, épuise-la et rappelle-la à la base à la place. (Ce n'est pas un déplacement.)",
    note: "Elle survit mais quitte le champ de bataille : tu sauves l'unité, pas la position."
  },
  "UNL-117/219": {
    n: "Horreur arachnoïde",
    tx: "Chasse 2. (Quand je conquiers ou que je tiens un champ de bataille, gagne 2 XP.)\nJe peux être jouée sur un champ de bataille occupé si une unité ennemie y est seule.\nTes autres unités peuvent être jouées sur un champ de bataille occupé si une unité ennemie y est seule.",
    note: "Casse la règle normale : d'habitude on ne peut poser une unité que dans sa base ou sur un champ de bataille libre."
  },
  "OGN-288/298": {
    n: "Cime étoilée",
    tx: "Quand tu tiens ce champ de bataille, tu peux canaliser 1 rune, épuisée."
  },
  "SFD-130/221": {
    n: "Chasseur de trésors",
    tx: "Quand je me déplace, crée un jeton d'équipement Or, épuisé.",
    note: "Le jeton Or se recycle pour de la Puissance : combiné à Gank, il finance tes sorts tour après tour."
  },
  "VEN-169/166": {
    n: "Zed",
    tx: "Tu peux défausser 1 carte en coût additionnel pour me jouer.\nQuand tu me joues, si tu as payé ce coût, crée un jeton d'unité Clone d'ombre de 0 Puissance.",
    note: "Le clone à 0 Puissance ne frappe pas, mais il occupe une place : il sert à contester un champ de bataille ou à absorber des dégâts."
  },
  "SFD-023/221": {
    n: "Lumière perforante",
    tx: "Répétition 2 Énergie + 1 Puissance. (Tu peux payer le coût additionnel pour répéter l'effet du sort.)\nInflige 2 dégâts à une unité présente sur un champ de bataille, puis 2 dégâts à une autre unité au maximum.",
    note: "Répété, il touche jusqu'à quatre unités : une bonne réponse à un déploiement large de petites unités."
  },
  "SFD-147/221": {
    n: null,
    tx: "Renvoie toutes les unités et tous les Équipements dans les mains de leurs propriétaires.",
    note: "Remise à zéro totale du plateau, la tienne comprise. Les cartes ne sont pas détruites : elles reviennent en main et devront être rejouées."
  },
  "UNL-132/219": {
    n: "Bête pêcheuse",
    tx: "Quand tu me joues, renvoie toutes les unités qui ont 2 Puissance ou moins dans les mains de leurs propriétaires.",
    note: "Elle renvoie aussi tes propres petites unités : à jouer quand le plateau adverse est large et le tien vide."
  },
  "OGN-282/298": {
    n: "Monastère d'Hirana",
    tx: "Quand tu conquiers ici, tu peux dépenser une amélioration pour piocher 1 carte."
  },
  "SFD-014/221": {
    n: "Minotaure justicier",
    tx: "Les unités ne peuvent pas se déplacer vers une base.",
    note: "Effet global, pour les deux joueurs : plus personne ne peut se replier, y compris toi."
  },
  "OGN-084/298": {
    n: "Apprenti impatient",
    tx: "Tant que je suis sur un champ de bataille, les coûts en Énergie des sorts que tu joues sont réduits de 1, sans pouvoir descendre sous 1 Énergie.",
    note: "Il doit sortir de la base pour que la réduction s'applique — donc s'exposer au combat."
  },
  "OGN-110/298": {
    n: "Ekko",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prêt.)\nGlas — recycle-moi pour redresser tes runes. (Effet obtenu quand je meurs.)",
    note: "Mourir lui rend toutes tes runes : un échange de combat peut financer un second tour complet dans le même tour."
  },
  "UNL-061/219": {
    n: "Coup de théâtre",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nRépétition 2 Énergie. (Tu peux payer le coût additionnel pour répéter l'effet du sort.)\nPioche 1 carte."
  },
  "OGN-242/298": {
    n: "Hameçon appâté",
    tx: "1 Énergie + 1 Puissance, épuiser : tue une unité alliée. Regarde les 5 premières cartes de ton deck principal. Tu peux y bannir une unité dont la Puissance ne dépasse pas de plus de 1 celle de l'unité tuée, et la jouer sans payer son coût. Puis recycle les autres.",
    note: "Échelle de Puissance : une unité à 3 permet d'en chercher une à 4 au maximum. L'unité cherchée est bannie du deck puis jouée : elle ne repasse pas par la main."
  }
};
