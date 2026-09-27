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
    n: "Jour du Progrès",
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
  },

  /* ---------- Shenyang : lot 4 (1/4) ---------- */

  "VEN-139/166": {
    n: "L'Assassin rebelle",
    tx: "Ascendant 3 Énergie + 1 Puissance, de n'importe quel domaine. (Coût à payer pour m'ascendre. Utilisable seulement si je ne le suis pas déjà.)\nAction — épuiser : si c'est ton tour, renvoie à sa base une unité alliée engagée dans un affrontement ; si je suis Ascendue, redresse-la en plus.",
    note: "Légende d'Akali : le repli retire l'unité du combat avant les dégâts. Ascendue, elle peut ressortir et frapper ailleurs dans le même tour."
  },
  "VEN-021a/166": {
    n: "Akali",
    tx: "Ascendant 2 Énergie + 1 Puissance.\nQuand je me déplace, tu peux infliger 1 dégât à une unité présente sur le champ de bataille que je quitte ou sur celui où j'arrive. Si je suis Ascendue, inflige 2 dégâts à la place.\nAscendue : j'ai +1 Puissance.",
    note: "Le dégât part à chaque déplacement : avec Gank ou un effet de repli, elle mitraille tour après tour."
  },
  "VEN-140/166": {
    n: "Lancer de shuriken",
    tx: "Inflige 2 dégâts à une unité ennemie au maximum, présente sur un champ de bataille, puis déplace une unité alliée.\nFlux 3 Énergie + 1 Puissance de n'importe quel domaine. (Tu peux me jouer depuis ta défausse pour ce coût de Flux. Je suis ensuite bannie.)",
    note: "Le déplacement est obligatoire une fois le sort lancé, même si tu n'as infligé aucun dégât."
  },
  "OGN-296/298": {
    n: "Portail du Néant",
    tx: "Les sorts et capacités qui affectent les unités présentes ici infligent 1 dégât bonus. (Chaque instance de dégâts du sort est augmentée de 1.)",
    note: "« Chaque instance » : un sort qui inflige 2 fois 1 dégât en inflige ici 2 fois 2."
  },
  "SFD-195/221": {
    n: "La Danseuse des lames",
    tx: "Quand tu choisis une unité alliée, tu peux m'épuiser et payer 1 Puissance, de n'importe quel domaine, pour la redresser.\nQuand tu conquiers, tu peux payer 1 Énergie pour me redresser.",
    note: "Légende d'Irelia : « choisir » couvre la cible d'un de tes sorts. Comme elle se redresse en conquérant, elle peut servir deux fois dans un tour."
  },
  "SFD-196/221": {
    n: "Danse du défi",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nDonne +2 Puissance à une unité et -2 Puissance à une autre, ce tour-ci.",
    note: "Un écart de 4 Puissance pour 1 Énergie : souvent de quoi renverser un duel en pleine chaîne."
  },
  "VEN-113a/166": {
    n: "Kennen",
    tx: "Quand tu me joues, subis Brûlure 2. (Mets les 2 premières cartes de ton deck principal dans ta défausse.)\nQuand je conquiers, donne à un sort de ta défausse le mot-clé Flux pour un coût égal au sien, ce tour-ci.",
    note: "La brûlure remplit ta propre défausse, puis la conquête te permet d'y rejouer un sort : les deux moitiés se répondent."
  },
  "OGN-194/298": {
    n: "Nocturne",
    tx: "Gank. (Je peux me déplacer d'un champ de bataille à un autre.)\nQuand tu regardes des cartes du dessus de ton deck sans les piocher et que tu m'y vois, tu peux me jouer pour 1 Puissance, de n'importe quel domaine.",
    note: "Se combine avec Vision et Prédiction : une unité à 4 Énergie posée pour une seule Puissance."
  },
  "OGN-195/298": {
    n: "Rhasa le Pourfendeur",
    tx: "Je coûte 1 Énergie de moins pour chaque carte dans ta défausse.",
    note: "Affiché à 10 Énergie, mais avec 7 cartes à la défausse il ne coûte plus que 3."
  },
  "VEN-156/166": {
    n: "Ruée fulgurante",
    tx: "Regarde les 3 premières cartes de ton deck principal. Tu peux en choisir une et la piocher. Mets les autres dans ta défausse.\nFlux 2 Énergie + 1 Puissance de n'importe quel domaine. (Tu peux me jouer depuis ta défausse pour ce coût de Flux. Je suis ensuite bannie.)",
    note: "Les deux cartes non choisies vont à la défausse, pas sous le deck : c'est volontaire, pour alimenter les effets de Flux."
  },
  "SFD-135/221": {
    n: "Rappel en usine",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nRenvoie un Équipement dans la main de son propriétaire."
  },
  "OGN-201/298": {
    n: "Inversion des chronologies",
    tx: "Chaque joueur défausse sa main, puis pioche 4 cartes.",
    note: "Jouée main vide, c'est une pioche de 4 pour toi et une remise à zéro pour l'adversaire."
  },
  "UNL-232/219": {
    n: "La Mélancolique",
    tx: "Quand toi ou un allié tenez un champ de bataille, tu peux m'épuiser pour piocher 1 carte.",
    note: "Légende de Vex : une carte par tour tant que tu tiens une position, sans rien dépenser."
  },
  "OGN-279/298": {
    n: "Position fortifiée",
    tx: "Quand tu défends ici, choisis une unité : elle gagne Bouclier 2 pour ce combat. (+2 Puissance tant qu'elle est défenseuse.)"
  },
  "UNL-192/219": {
    n: "Frappe Alpha",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nChoisis une unité alliée : elle inflige des dégâts égaux à sa Puissance, répartis comme tu veux entre les unités ennemies présentes sur des champs de bataille. Puis, pour chaque unité tuée ainsi, gagne 1 XP.",
    note: "Les dégâts se répartissent librement : une unité à 6 Puissance peut tuer trois unités à 2 et rapporter 3 XP."
  },
  "SFD-199/221": {
    n: "L'Explorateur prodige",
    tx: "Épuiser : Réaction — pioche 1 carte. Utilisable seulement si tu as déjà choisi des unités ou des Équipements ennemis deux fois ce tour-ci avec des sorts ou des capacités d'unité.",
    note: "Légende d'Ezreal : il faut deux ciblages adverses dans le même tour, donc un deck de sorts qui interagissent avec le plateau d'en face."
  },
  "UNL-121/219": {
    n: "Esprit envoûtant",
    tx: "Quand tu me joues, choisis un joueur : il défausse 1 carte."
  },
  "SFD-081/221": {
    n: "As des cartes",
    tx: "Quand tu me joues, toi et chaque adversaire pouvez créer un jeton d'équipement Or, épuisé. Pour chaque adversaire qui le fait, tu crées un jeton d'équipement Or supplémentaire, épuisé.",
    note: "Piège pour l'adversaire : accepter l'Or lui en donne un, mais t'en donne un de plus à toi."
  },
  "UNL-138/219": {
    n: "La Liste",
    tx: "En jouant cet équipement, nomme un tag. (Miss Fortune, Demacia ou Poro sont des tags, par exemple.)\nÉpuiser : donne -2 Puissance à une unité portant le tag nommé, ce tour-ci.",
    note: "Le tag est fixé une fois pour toutes au moment où tu poses la carte : regarde bien le deck d'en face avant de choisir."
  },
  "VEN-106/166": {
    n: "Vent et fantômes",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nChoisis une unité présente sur un champ de bataille. Si elle a 3 Puissance ou moins, bannis-la. Sinon, renvoie-la dans la main de son propriétaire.",
    note: "Contre les petites unités, c'est un exil définitif ; contre les grosses, un simple retour en main."
  },
  "UNL-234*/219": {
    n: "Le Courroux de la Lune",
    tx: "Réaction : épuiser — ajoute 1 Énergie. Cette Énergie ne peut être dépensée que pendant un affrontement. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)",
    note: "Légende de Diana : une Énergie gratuite par tour, mais réservée aux sorts joués en plein combat."
  },
  "UNL-079a/219": {
    n: "Diana",
    tx: "Quand un affrontement commence ici, tu peux payer 1 Énergie. Si tu le fais, fais une Prédiction, puis révèle la première carte de ton deck principal : si c'est un sort, pioche-la.",
    note: "La Prédiction sert justement à placer un sort sur le dessus avant de révéler : les deux moitiés fonctionnent ensemble."
  },
  "UNL-198/219": {
    n: "Chute de lune",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nChoisis un champ de bataille où tu as des unités. Tu peux y attirer une unité ennemie au maximum. Puis donne -2 Puissance aux unités ennemies présentes là, ce tour-ci.",
    note: "Attirer une unité isolée dans ton groupe puis l'affaiblir : c'est un outil d'exécution autant qu'un sort de combat."
  },
  "SFD-221/221": {
    n: "Temple voilé",
    tx: "Quand tu conquiers ici, tu peux redresser un Équipement allié. Si c'est un Équipement attaché, tu peux le détacher."
  },
  "VEN-128/166": {
    n: "Émissaire noxien",
    tx: "Ascendant 1 Énergie + 1 Puissance.\nAscendu — Glas : crée deux jetons d'unité Recrue de 1 Puissance dans ta base. (Effet obtenu quand je meurs en étant Ascendu.)",
    note: "L'ascension doit être payée avant sa mort, sinon le Glas ne se déclenche pas."
  },
  "SFD-175/221": {
    n: null,
    tx: "Quand tu me joues, donne +2 Puissance à tes autres unités ce tour-ci.\nQuand je suis révélé depuis ton deck, ajoute 2 Énergie.",
    note: "La deuxième ligne s'active sur les effets qui révèlent le dessus du deck : l'Énergie sert alors à jouer ce qui suit."
  },
  "SFD-188/221": {
    n: "Ruée du Néant",
    tx: "Révèle les 2 premières cartes de ton deck principal. Tu peux en jouer une en réduisant son coût de 2 Énergie. Pioche celles que tu n'as pas jouées ainsi.",
    note: "Aucune carte n'est perdue : ce que tu ne joues pas arrive en main."
  },
  "SFD-205/221": {
    n: "La Grande Duelliste",
    tx: "Quand une de tes unités devient Puissante, tu peux m'épuiser pour canaliser 1 rune, épuisée. (Une unité est Puissante tant qu'elle a 5 Puissance ou plus.)",
    note: "Légende de Fiora : « devient » Puissante, donc un simple bonus temporaire de +1 Puissance suffit à déclencher l'effet."
  },
  "SFD-098/221": {
    n: "Singe de mer",
    tx: "Tu peux payer 1 Énergie en coût additionnel pour me jouer.\nQuand tu me joues, si tu as payé ce coût, améliore-moi. (Je reçois +1 Puissance si je n'ai pas déjà une amélioration.)"
  },
  "SFD-206/221": {
    n: "Riposte",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nChoisis une unité alliée et un sort. Contre ce sort, et donne à cette unité un bonus de Puissance égal au coût en Énergie du sort contré, ce tour-ci.",
    note: "Un vrai contre : le sort ne se résout pas. Plus le sort contré est cher, plus ton unité grossit."
  },
  "UNL-218/219": {
    n: "Vallée des idoles",
    tx: "Quand un joueur joue une unité ici, il peut payer 1 Énergie pour l'améliorer. (Elle reçoit +1 Puissance si elle n'en a pas déjà une.)",
    note: "Vaut pour les deux joueurs."
  },
  "UNL-179a/219": {
    n: "Héraut de la Faille",
    tx: "Quand je me déplace sur un champ de bataille, regarde les 3 premières cartes de ton deck principal. Tu peux y révéler une unité et la piocher. Recycle les autres.\nGlas : joue une unité de ta main dans ta base, sans payer son coût en Énergie.",
    note: "Le coût en Puissance de l'unité jouée par le Glas reste dû."
  },
  "VEN-149/166": {
    n: "Le Défenseur de demain",
    tx: "Ascendant 2 Énergie + 2 Puissance, de n'importe quel domaine.\n1 Énergie, épuiser : redresse un Équipement.\nAscendu : 1 Énergie, épuiser — redresse 2 Équipements.",
    note: "Légende de Jayce, pensée pour les decks à Équipements qui s'épuisent pour produire un effet."
  },
  "VEN-068/166": {
    n: "Jayce",
    tx: "Quand tu me joues, ou la première fois que tu joues un Équipement non-jeton à chaque tour, tu peux redresser une carte épuisée autre que moi.",
    note: "Redresser une rune revient à rendre l'Énergie dépensée : posé tôt, il finance tous tes tours suivants."
  },
  "UNL-088/219": {
    n: "Palais du caniveau",
    tx: "Au début de ta phase Initiale, si tu as exactement 4 cartes en main et exactement 4 unités sur des champs de bataille, tu gagnes la partie.\nDéfausse 1 carte, épuiser : crée un jeton d'unité Oiseau de 1 Puissance avec Déviation. (L'adversaire doit payer 1 Puissance de plus, de n'importe quel domaine, pour le choisir avec un sort ou une capacité.)",
    note: "Victoire alternative : exactement 4 et 4, vérifié au début de ta phase Initiale. Les jetons Oiseau servent justement à atteindre le compte."
  },
  "OGN-115/298": {
    n: "Avenir prometteur",
    tx: "Chaque joueur regarde les 5 premières cartes de son deck principal, en choisit une, puis recycle les autres. En commençant par le joueur suivant, chacun joue la carte choisie sans payer son coût en Énergie. (Les coûts en Puissance restent dus.)",
    note: "L'adversaire en profite aussi, et il joue avant toi : à réserver aux decks qui cachent une très grosse carte."
  },
  "VEN-056/166": {
    n: "Clairvoyance",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nPrédiction 5. (Regarde les 5 premières cartes de ton deck principal, recycle celles que tu veux et remets les autres sur le dessus dans l'ordre de ton choix.)\nPioche 2 cartes."
  },
  "SFD-077/221": {
    n: "Barrage de roquettes",
    tx: "Répétition 4 Énergie + 1 Puissance. (Tu peux payer le coût additionnel pour répéter l'effet du sort, en faisant des choix différents.)\nAu choix :\n— inflige 4 dégâts à une unité restée dans une base ;\n— tue un Équipement.",
    note: "Rare : il atteint les unités restées à la base, hors de portée de la plupart des sorts."
  },
  "UNL-235/219": {
    n: "La Dissimulatrice",
    tx: "Quand tu conquiers ou que tu tiens un champ de bataille, tu peux défausser 1 carte et m'épuiser pour y créer un jeton d'unité Reflet, prêt. Il devient une copie d'une autre unité présente là. Donne-lui Temporaire.",
    note: "Légende de LeBlanc : le Reflet arrive prêt, il peut donc défendre aussitôt, mais il meurt au début de ta prochaine phase Initiale."
  },
  "UNL-172a/219": {
    n: "LeBlanc",
    tx: "Assaut. (+1 Puissance tant que je suis attaquante.)\nGlas : pioche 1 carte. Si c'est ta phase Initiale, pioche 2 cartes à la place.",
    note: "Se combine avec Temporaire : une unité qui meurt en phase Initiale déclenche la version à 2 cartes."
  },
  "UNL-152/219": {
    n: "Dignitaire de la Rose noire",
    tx: "Assaut. (+1 Puissance tant que je suis attaquante.)\nGlas : canalise 1 rune, épuisée. (Effet obtenu quand je meurs.)"
  },
  "OGN-236/298": {
    n: "Karthus",
    tx: "Tes effets de Glas se déclenchent une fois de plus.",
    note: "Doublé aussi pour lui-même : s'il meurt, ses propres Glas comptent deux fois."
  },
  "SFD-165/221": {
    n: "Mixologue de Glasc",
    tx: "Glas — tu peux jouer depuis ta défausse une unité dont le coût ne dépasse pas 3 Énergie et 1 Puissance, sans payer son coût. (Effet obtenu quand je meurs.)"
  },
  "UNL-067/219": {
    n: null,
    tx: "Glas : inflige 4 dégâts à une unité ennemie. (Effet obtenu quand je meurs.)",
    note: "Échange favorable : même mort au combat, il emporte souvent une deuxième unité."
  },
  "UNL-200/219": {
    n: "Image miroir",
    tx: "Choisis une unité. Crée dans ta base un jeton d'unité Reflet, prêt : il devient une copie de cette unité. Donne-lui Temporaire. (Il meurt au début de la phase Initiale de son contrôleur, avant le score.)",
    note: "Tu peux copier une unité adverse. Le jeton arrive prêt, donc utilisable immédiatement."
  },
  "UNL-227/219": {
    n: "Le Traqueur",
    tx: "Quand tu joues une unité, donne +1 Puissance à une unité ce tour-ci.",
    note: "Légende de Rengar : le bonus peut aller sur n'importe quelle unité alliée, pas forcément celle que tu viens de jouer."
  },
  "UNL-021/219": {
    n: "Sinistre apothicaire",
    tx: "Embuscade. (Tu peux me jouer en Réaction sur un champ de bataille où tu as des unités.)\nQuand tu me joues, tu peux renvoyer une unité alliée présente sur un champ de bataille dans la main de son propriétaire.",
    note: "Arrivée en Réaction, elle peut sauver une unité qui allait mourir tout en la remplaçant sur place."
  },
  "UNL-114/219": {
    n: "Nidalee",
    tx: "Embuscade. (Tu peux me jouer en Réaction sur un champ de bataille où tu as des unités.)\nQuand je remporte un combat, pioche 1 carte. (Je le remporte si je suis encore là après le combat.)"
  },
  "UNL-184/219": {
    n: "Frisson de la chasse",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nBannis une unité alliée, puis son propriétaire la joue sur le champ de bataille de son choix, sans payer son coût.",
    note: "Sert à relancer un effet « quand tu me joues », ou à téléporter une grosse unité sur un autre front en pleine chaîne."
  },
  "SFD-185/221": {
    n: "Le Glorieux Bourreau",
    tx: "Quand tu remportes un combat, pioche 1 carte. (Tu le remportes s'il ne reste que tes unités après le combat.)",
    note: "Légende de Draven : il faut que le champ de bataille soit nettoyé, pas seulement qu'une unité survive."
  },
  "OGN-028/298": {
    n: "Draven",
    tx: "Ma Puissance est augmentée de ton nombre de points.",
    note: "À 3 Puissance de base, il en vaut 6 quand tu mènes 3 à 0 : il grandit à mesure que tu gagnes."
  },
  "SFD-186/221": {
    n: "Hache tournoyante",
    tx: "Dégainage. (Cet équipement a Réaction ; quand tu le joues, attache-le à une unité que tu contrôles.)\nÉquiper 1 Puissance. (1 Puissance : attacher cet équipement à une unité que tu contrôles.)\nTemporaire. (S'il n'est attaché à personne, il meurt au début de la phase Initiale de son contrôleur, avant le score.)",
    note: "+3 Puissance pour 2 Énergie, jouable en pleine chaîne : il ne survit que tant qu'il reste attaché."
  },
  "UNL-229/219": {
    n: "L'Exécutrice de Piltover",
    tx: "Quand tu conquiers, si tu as assigné 3 dégâts en excès ou plus, tu peux m'épuiser pour redresser une unité.",
    note: "Légende de Vi : les dégâts en excès sont ceux envoyés au-delà de ce qu'il fallait pour tuer. Elle récompense les attaques largement surdimensionnées."
  },
  "UNL-188/219": {
    n: "Gantelets hextech",
    tx: "Équiper 3 Énergie + 1 Puissance de n'importe quel domaine. Le coût en Énergie de cette capacité est réduit de la Puissance de l'unité choisie. (Coût à payer : attacher cet équipement à une unité que tu contrôles.)",
    note: "Sur une unité à 3 Puissance ou plus, l'équipement ne coûte plus qu'une Puissance."
  },
  "OGN-018/298": {
    n: "Saboteur noxien",
    tx: "Les cartes Cachées de tes adversaires ne peuvent pas être révélées ici.",
    note: "Bloque net les embuscades adverses sur ce champ de bataille tant qu'il y reste."
  },
  "SFD-197/221": {
    n: "L'Empereur des sables",
    tx: "Tes Soldats des sables ont Maître d'armes.\n1 Énergie, épuiser : crée un jeton d'unité Soldat des sables de 2 Puissance dans ta base. Utilisable seulement si tu as joué un Équipement ce tour-ci.",
    note: "Légende d'Azir : chaque Équipement joué débloque un jeton, et Maître d'armes permet de rééquiper ce jeton à prix réduit."
  },

  /* ---------- Shenyang : lot 4 (2/4) ---------- */

  "SFD-154/221": {
    n: "Gardes !",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nCrée un jeton d'unité Soldat des sables de 2 Puissance. Tu peux payer 1 Puissance pour le redresser.",
    note: "Révélée en pleine chaîne, elle fait apparaître un défenseur prêt au milieu d'un affrontement."
  },
  "SFD-198/221": {
    n: "Debout !",
    tx: "Crée un jeton d'unité Soldat des sables de 2 Puissance pour chaque Équipement que tu contrôles. Puis redresse-en deux.",
    note: "Le compte se fait au moment de la résolution : plus tu as d'Équipements sur le plateau, plus la vague est large."
  },
  "SFD-210/221": {
    n: "Hall des légendes",
    tx: "Quand tu conquiers ici, tu peux payer 1 Énergie pour redresser ta légende.",
    note: "Permet d'utiliser deux fois dans le tour une capacité de légende qui demande de l'épuiser."
  },
  "OGN-247/298": {
    n: "La Fille du Néant",
    tx: "Épuiser : Réaction — ajoute 1 Puissance. Utilisable uniquement pour jouer des sorts. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)",
    note: "Légende de Kai'Sa : une Puissance gratuite par tour, mais uniquement pour des sorts, jamais pour des unités."
  },
  "SFD-069/221": {
    n: "Poro pillard",
    tx: "Quand je conquiers, crée un jeton d'équipement Or, épuisé."
  },
  "SFD-019/221": {
    n: "Chaîne de montage",
    tx: "1 Énergie + 1 Puissance, recycler une unité de ta défausse, épuiser : crée un jeton d'unité Méca de 3 Puissance dans ta base.",
    note: "Transforme les unités mortes en nouveaux corps, tour après tour."
  },
  "OGN-033/298": {
    n: "Racket",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nChoisis une unité ennemie. Inflige-lui 6 dégâts, à moins que son contrôleur ne te fasse piocher 2 cartes.",
    note: "C'est l'adversaire qui choisit : soit il perd son unité, soit il te donne 2 cartes. Tu gagnes dans les deux cas."
  },
  "OGN-265/298": {
    n: "Le Héraut des arcanes",
    tx: "1 Énergie, épuiser : crée un jeton d'unité Recrue de 1 Puissance.",
    note: "Légende de Viktor : un corps par tour, de quoi contester un champ de bataille sans dépenser de carte."
  },
  "OGN-246/298": {
    n: "Viktor",
    tx: "Quand une autre unité que tu contrôles, qui n'est pas une Recrue, meurt, crée un jeton d'unité Recrue de 1 Puissance dans ta base.",
    note: "Les Recrues créées ne se déclenchent pas entre elles : c'est une unité perdue, une Recrue gagnée, pas une chaîne infinie."
  },
  "SFD-176/221": {
    n: "Xin Zhao",
    tx: "Tank. (Les dégâts de combat doivent m'être assignés en premier.)\nJ'arrive prêt si tu as au moins deux autres unités dans ta base.",
    note: "Arriver prêt lui permet d'attaquer le tour même : il faut donc garder deux unités en réserve à la base."
  },
  "VEN-116/166": {
    n: "Forme de dragon",
    tx: "Choisis une unité : sa Puissance de base devient 5 ce tour-ci.\nFlux 3 Énergie. (Tu peux me jouer depuis ta défausse pour ce coût de Flux. Je suis ensuite bannie.)",
    note: "C'est la Puissance de base qui change : les bonus et améliorations s'ajoutent par-dessus. Peut aussi servir à rapetisser une grosse unité ennemie."
  },
  "OGN-229/298": {
    n: "Vengeance",
    tx: "Tue une unité.",
    note: "Sans condition de Puissance : la réponse la plus propre aux très grosses unités."
  },
  "SFD-203/221": {
    n: "La Maîtresse de guerre",
    tx: "Quand tu recycles une rune, tu peux m'épuiser pour créer un jeton d'équipement Or, épuisé.\nQuand une ou plusieurs unités ennemies meurent, redresse-moi.",
    note: "Légende de Sivir : chaque mort adverse la redresse, donc plusieurs jetons Or dans un même tour si le combat est meurtrier."
  },
  "SFD-143/221": {
    n: "Sivir",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)\nSi tu as dépensé au moins 2 Puissance ce tour-ci, j'ai +2 Puissance et Gank. (Je peux me déplacer d'un champ de bataille à un autre.)",
    note: "La condition se mesure sur tout le tour : payer son Accélération suffit déjà à la remplir en partie."
  },
  "UNL-136/219": {
    n: "Fleur de voyance",
    tx: "Cet équipement arrive épuisé.\nTuer cet équipement, 1 Énergie, épuiser : Prédiction 2, puis pioche 1 carte. Gagne 1 XP. (Prédiction 2 : regarde les 2 premières cartes de ton deck principal, recycle celles que tu veux et remets les autres sur le dessus dans l'ordre de ton choix.)"
  },
  "UNL-125/219": {
    n: "Bienfait lunaire",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nDéfausse 1 carte, puis pioche 2 cartes."
  },
  "UNL-142/219": {
    n: "Résurrection imprudente",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nEn coût additionnel pour me jouer, tue une unité alliée.\nJoue depuis ta défausse une unité dont le coût ne dépasse ni l'Énergie ni la Puissance de l'unité tuée, sans payer son coût.",
    note: "Jouée en Réaction sur une unité qui allait mourir de toute façon, elle la remplace aussitôt par une autre de valeur équivalente."
  },
  "VEN-115/166": {
    n: "Dragon océanique",
    tx: "Tu peux me jouer sur un champ de bataille libre.\nQuand tu me joues, tu peux renvoyer une unité qui n'est pas un Dragon dans la main de son propriétaire."
  },
  "UNL-202/219": {
    n: "Assaut du Néant",
    tx: "Déplace une unité alliée, puis déplace une unité ennemie. (Si elles arrivent toutes les deux sur un champ de bataille que tu ne contrôles pas, c'est toi l'attaquant.)",
    note: "Sert à créer un affrontement là où tu le veux, en y amenant de force une unité ennemie isolée."
  },
  "SFD-189/221": {
    n: "Le Feu sous la montagne",
    tx: "Épuiser : Réaction — ajoute 1 Puissance, de n'importe quel domaine. Utilisable uniquement pour jouer des Équipements ou activer leurs capacités. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)",
    note: "Légende d'Ornn : la ressource est fléchée sur les Équipements, elle ne sert à rien d'autre."
  },
  "SFD-085/221": {
    n: "Ornn",
    tx: "Déviation 2. (L'adversaire doit payer 2 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)\nMaître d'armes. (Quand tu me joues, tu peux m'attacher un de tes Équipements pour 1 Puissance de moins, même s'il est déjà attaché ailleurs.)\nJ'ai +1 Puissance pour chaque Équipement allié.",
    note: "Le compte porte sur tous tes Équipements, attachés ou non : les jetons Or comptent aussi."
  },
  "OGN-044/298": {
    n: "Gardien mécanique",
    tx: "En me jouant, tu peux payer 1 Puissance en coût additionnel. Si tu le fais, pioche 1 carte."
  },
  "OGN-091/298": {
    n: "Équipe des stands",
    tx: "Quand tu joues un Équipement, redresse-moi.",
    note: "Se redresse autant de fois qu'il y a d'Équipements joués : elle peut défendre plusieurs affrontements dans un même tour."
  },
  "SFD-058/221": {
    n: "Ornn",
    tx: "Quand tu me joues, ou quand je tiens un champ de bataille, regarde les 4 premières cartes de ton deck principal. Tu peux y révéler un Équipement et le piocher. Puis recycle les autres."
  },
  "SFD-046/221": {
    n: "Poro-friandises",
    tx: "Quand tu joues cet équipement, pioche 1 carte.\n1 Énergie + 1 Puissance, épuiser, tuer cet équipement : pioche 1 carte."
  },
  "UNL-233/219": {
    n: "Le Père vert",
    tx: "Quand tu conquiers ou que tu tiens un champ de bataille, tu peux m'épuiser pour remplacer ce champ de bataille par un jeton de champ de bataille Fourré.",
    note: "Légende d'Ivern : échanger un champ de bataille gênant contre un Fourré neutre peut couper net une stratégie adverse."
  },
  "UNL-177/219": {
    n: "Ivern",
    tx: "En me jouant, choisis Oiseau, Chat, Chien ou Poro : je gagne ce tag.\nQuand je conquiers ou que je tiens un champ de bataille, marque 1 point si tes unités réunissent à elles toutes les tags Oiseau, Chat, Chien et Poro.",
    note: "Il complète lui-même le tag qui te manque : c'est la pièce qui referme la combinaison."
  },
  "UNL-156/219": {
    n: "Poro loyal",
    tx: "Glas : si je ne suis pas mort seul, pioche 1 carte. (Effet obtenu quand je meurs. Je n'étais pas seul s'il y avait d'autres unités alliées ici.)"
  },
  "UNL-033/219": {
    n: "Chasseur espiègle",
    tx: "Quand tu me joues, crée ici un jeton d'unité Oiseau de 1 Puissance avec Déviation. (L'adversaire doit payer 1 Puissance de plus, de n'importe quel domaine, pour le choisir avec un sort ou une capacité.)"
  },
  "UNL-196/219": {
    n: "Daisy !",
    tx: "J'arrive prête.\nJe coûte 1 Énergie de moins pour chacun des tags suivants présents parmi tes unités : Oiseau, Chat, Chien et Poro.\nQuand j'attaque alors que tes unités réunissent les 4 tags, étourdis une unité ennemie présente ici. (Elle n'inflige pas de dégâts de combat ce tour-ci.)",
    note: "Avec les quatre tags en jeu, elle tombe à 5 Énergie, arrive prête et neutralise un défenseur : c'est la carte de finition du deck Ivern."
  },
  "UNL-044/219": {
    n: "Envol de plumes",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nAu choix :\n— contre un sort ;\n— crée quatre jetons d'unité Oiseau de 1 Puissance avec Déviation. (L'adversaire doit payer 1 Puissance de plus pour les choisir avec un sort ou une capacité.)",
    note: "Le choix se fait à la résolution : l'adversaire ne sait pas, en te voyant la jouer, si c'est un contre ou une vague de défenseurs."
  },
  "VEN-143/166": {
    n: "Le Maître des ombres",
    tx: "Quand tu bannis une carte que tu possèdes, ascends-moi. (Je deviens Ascendu si je ne le suis pas déjà.)\nAction : retire-moi mon ascension et épuise-moi — défausse 1 carte, puis pioche 1 carte.",
    note: "Légende de Zed : les sorts à Flux, qui se bannissent après usage, l'ascendent tout seuls."
  },
  "OGN-036/298": {
    n: "Vi",
    tx: "Gank. (Je peux me déplacer d'un champ de bataille à un autre.)\nRecycler 1 carte de ta défausse : je gagne +1 Puissance ce tour-ci.",
    note: "Sans limite d'utilisation : avec une défausse bien remplie, elle peut monter très haut en pleine chaîne."
  },
  "VEN-144/166": {
    n: "Marque de la mort",
    tx: "Brûlure 3. (Mets les 3 premières cartes de ton deck principal dans ta défausse.)\nCrée un jeton d'unité Clone d'ombre de 0 Puissance. (Il a « Quand j'attaque, tu peux bannir une unité de ta défausse. Si tu le fais, je gagne Assaut 4 ce tour-ci. »)\nFlux 1 Énergie + 2 Puissance de n'importe quel domaine. (Tu peux me jouer depuis ta défausse pour ce coût de Flux. Je suis ensuite bannie.)",
    note: "La brûlure alimente le clone : elle met à la défausse les unités qu'il bannira pour frapper à 4."
  },
  "OGN-198/298": {
    n: "Le Grand Fléau",
    tx: "Joue une unité depuis ta défausse sans payer son coût en Énergie. (Son coût en Puissance reste dû.)"
  },
  "VEN-192/166": {
    n: "Le Conservateur des sables",
    tx: "Quand tu joues une unité, un Équipement ou une capacité activée dont le coût en Énergie est de 7 ou plus, tu peux m'épuiser pour redresser jusqu'à 2 runes.",
    note: "Légende de Nasus : elle rembourse une partie des très gros coûts, donc elle ne sert que dans un deck bâti autour d'eux."
  },
  "VEN-046/166": {
    n: "Nasus",
    tx: "Déviation 2. (L'adversaire doit payer 2 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)\nAscendant 8 Énergie. (8 Énergie : m'ascendre. Utilisable seulement si je ne le suis pas déjà.)\nAscendu : quand je conquiers, tu marques 1 point.",
    note: "8 Énergie pour le poser, 8 de plus pour l'ascendre : c'est une carte de fin de partie, mais elle marque un point par conquête."
  },
  "VEN-047/166": {
    n: "Mage apprenti",
    tx: "Ascendant 2 Énergie.\nQuand je deviens Ascendu, fais une Prédiction 2. (Regarde les 2 premières cartes de ton deck principal, recycle celles que tu veux et remets les autres sur le dessus dans l'ordre de ton choix.)\nAscendu : j'ai +1 Puissance."
  },
  "VEN-032/166": {
    n: "Mère au pelage de givre",
    tx: "Ascendant 12 Énergie. Ce coût est réduit de 1 Énergie pour chaque rune que tu contrôles. (Coût à payer pour m'ascendre. Utilisable seulement si je ne le suis pas déjà.)\nAscendue : j'ai +3 Puissance.",
    note: "Avec 9 runes, l'ascension ne coûte plus que 3 Énergie : elle devient très bon marché en fin de partie."
  },
  "OGN-108/298": {
    n: "Mutation convergente",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nChoisis une unité alliée : ce tour-ci, sa Puissance monte à celle d'une autre unité alliée.",
    note: "Seulement vers le haut : si l'autre unité est plus faible, rien ne change."
  },
  "UNL-237*/219": {
    n: "La Gardienne du marteau",
    tx: "Quand tu tiens un champ de bataille, gagne 1 XP.\nDépenser 3 XP, épuiser : pioche 1 carte.",
    note: "Légende de Poppy : l'XP sert à la fois de compteur de Niveau et de monnaie. Le dépenser fait redescendre ton Niveau."
  },
  "UNL-162/219": {
    n: "Protectrice envoûtante",
    tx: "Chasse. (Quand je conquiers ou que je tiens un champ de bataille, gagne 1 XP.)\nDépenser 2 XP : améliore-moi. (Je reçois +1 Puissance si je n'en ai pas déjà une.)"
  },
  "UNL-108/219": {
    n: "Poisson-triton rusé",
    tx: "Si tu as gagné de l'XP ce tour-ci, j'ai +1 Puissance et Gank. (Je peux me déplacer d'un champ de bataille à un autre.)"
  },
  "UNL-204/219": {
    n: "Verdict de la Gardienne",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nChoisis une unité ennemie présente sur un champ de bataille : son propriétaire la place sur le dessus ou sous son deck principal.",
    note: "C'est lui qui choisit où la remettre. L'unité n'est pas détruite, mais elle quitte le plateau sans passer par la défausse — donc hors de portée des effets de résurrection."
  },
  "UNL-155/219": {
    n: "Charge héroïque",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nDonne +1 Puissance à une unité alliée ce tour-ci et étourdis une unité ennemie située au même endroit qu'elle. (Une unité étourdie n'inflige pas de dégâts de combat ce tour-ci.)"
  },
  "UNL-213/219": {
    n: "Jardins du devenir",
    tx: "Les unités présentes ici ont « Épuiser : gagne 1 XP ».",
    note: "S'épuiser empêche de se battre : l'XP se paie en renonçant au combat ce tour-ci."
  },
  "UNL-230*/219": {
    n: "La Fleur timide",
    tx: "4 Énergie, épuiser : crée un jeton d'unité Lutin de 3 Puissance, prêt, avec Temporaire. Ce coût est réduit de 1 Énergie pour chaque unité alliée ayant Temporaire.",
    note: "Légende de Lillia : chaque Lutin déjà en jeu rend le suivant moins cher, mais ils meurent tous au début de ta phase Initiale."
  },
  "UNL-082/219": {
    n: "Lillia",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)\nQuand je quitte un endroit, crée là un jeton d'unité Lutin de 3 Puissance avec Temporaire. (Il meurt au début de la phase Initiale de son contrôleur, avant le score.)",
    note: "Elle laisse un corps de 3 Puissance derrière elle à chaque déplacement : elle tient deux positions à la fois."
  },
  "SFD-052/221": {
    n: "Cœur de glace noire",
    tx: "Épuiser : donne +3 Puissance à une unité ce tour-ci."
  },
  "UNL-190/219": {
    n: "Berceuse envoûtante",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nContre un sort. Son contrôleur ne peut plus jouer de sorts ce tour-ci.",
    note: "Le vrai effet est le second : après ce contre, l'adversaire ne peut plus rien relancer du tour."
  },
  "UNL-083/219": {
    n: "Poudre aux yeux",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nAction. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nChoisis une unité que tu contrôles et une autre unité que tu contrôles située ailleurs. Si au moins l'une des deux a Temporaire, échange leurs positions. Pioche 1 carte.",
    note: "Sert à sauver une unité importante en la remplaçant par un jeton condamné."
  },
  "UNL-231/219": {
    n: "Le Maître Wuju",
    tx: "Niveau 6 : tes unités ont +1 Puissance.\nNiveau 11 : tes unités arrivent prêtes.",
    note: "Légende de Master Yi : les paliers sont atteints tant que tu as assez d'XP. Dépenser ton XP te fait redescendre."
  },
  "UNL-094/219": {
    n: "Chasseur aux mains de gemme",
    tx: "Chasse. (Quand je conquiers ou que je tiens un champ de bataille, gagne 1 XP.)\nNiveau 6 : j'ai +1 Puissance. (Effet actif tant que tu as 6 XP ou plus.)"
  },
  "UNL-040/219": {
    n: "Apprenti Wuju",
    tx: "Chasse. (Quand je conquiers ou que je tiens un champ de bataille, gagne 1 XP.)\nNiveau 6 : quand tu me joues, pioche 1 carte. (Effet actif tant que tu as 6 XP ou plus.)"
  },
  "UNL-047/219": {
    n: "Piétine-mousse",
    tx: "Chasse 2. (Quand je conquiers ou que je tiens un champ de bataille, gagne 2 XP.)\nNiveau 3 : j'ai +1 Puissance et Déviation. (Effet actif tant que tu as 3 XP ou plus. L'adversaire doit payer 1 Puissance de plus pour choisir une unité avec Déviation.)"
  },
  "UNL-034/219": {
    n: "Héraut du printemps",
    tx: "Chasse. (Quand je conquiers ou que je tiens un champ de bataille, gagne 1 XP.)\nQuand tu me joues, gagne 2 XP.",
    note: "3 XP dès le premier tour où il conquiert : c'est le démarreur des decks à Niveau."
  },

  /* ---------- Shenyang : lot 4 (3/4) ---------- */

  "UNL-100/219": {
    n: "Gromp vorace",
    tx: "Chasse 3. (Quand je conquiers ou que je tiens un champ de bataille, gagne 3 XP.)"
  },
  "UNL-059/219": {
    n: "Master Yi",
    tx: "Niveau 3 : je coûte 2 Énergie + 1 Puissance de moins. (Effet actif tant que tu as 3 XP ou plus.)\nNiveau 6 : je coûte 4 Énergie + 2 Puissance de moins à la place.\nNiveau 11 : je coûte 6 Énergie + 3 Puissance de moins à la place.\nNiveau 16 : je ne peux pas être choisi par les sorts et capacités ennemis.",
    note: "Affiché à 12 Énergie + 3 Puissance : au Niveau 11 il n'en coûte plus que 6, et au Niveau 16 il devient intouchable."
  },
  "OGN-057/298": {
    n: "Parade",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nAction. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nDonne Bouclier 3 et Tank à une unité ce tour-ci. (+3 Puissance tant qu'elle est défenseuse ; les dégâts de combat doivent lui être assignés en premier.)",
    note: "Tank force l'adversaire à taper dedans en premier : elle protège tes autres unités autant qu'elle gonfle celle-ci."
  },
  "UNL-038/219": {
    n: "Frappe céleste",
    tx: "Déplace une unité ennemie.\nNiveau 6 : étourdis une unité ennemie. (Effet actif tant que tu as 6 XP ou plus. Une unité étourdie n'inflige pas de dégâts de combat ce tour-ci.)"
  },
  "UNL-091/219": {
    n: "Concentration",
    tx: "Pioche 2 cartes.\nNiveau 6 : je coûte 2 Énergie de moins. (Effet actif tant que tu as 6 XP ou plus.)\nNiveau 11 : je coûte 4 Énergie de moins à la place."
  },
  "SFD-181/221": {
    n: "La Menace mécanisée",
    tx: "Tes Mécas ont Bouclier. (+1 Puissance tant qu'ils sont défenseurs.)",
    note: "Légende de Rumble : effet permanent, rien à épuiser."
  },
  "SFD-062/221": {
    n: "Robot à bulles",
    tx: "Quand tu me joues, redresse un autre Méca allié."
  },
  "SFD-076/221": {
    n: "Poussée de production",
    tx: "Je coûte 2 Énergie de moins si tu contrôles un Méca.\nCrée un jeton d'unité Méca de 3 Puissance dans ta base.\nPioche 1 carte."
  },
  "OGN-097/298": {
    n: "Fée pomme explosive",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nQuand tu me joues, donne -2 Puissance à une unité ce tour-ci, sans descendre sous 1 Puissance.",
    note: "Le plancher à 1 Puissance l'empêche de tuer seule : elle affaiblit, elle n'exécute pas."
  },
  "UNL-087/219": {
    n: "Sentinelle bleue",
    tx: "Bouclier 2. (+2 Puissance tant que je suis défenseuse.)\nTes effets déclenchés par le fait de tenir ce champ de bataille se déclenchent une fois de plus.\nQuand je tiens un champ de bataille, ajoute 1 Puissance, de n'importe quel domaine, au début de ta prochaine phase Principale. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)"
  },
  "VEN-195/166": {
    n: "Le Reflet de l'âme",
    tx: "Quand tu ascends autre chose, ascends-moi.\nRetire-moi mon ascension et épuise-moi : donne -2 Puissance à une unité présente sur un champ de bataille, ce tour-ci.",
    note: "Légende de Mel : elle se recharge à chaque ascension que tu paies ailleurs, puis dépense cette charge pour affaiblir."
  },
  "VEN-188/166": {
    n: "Mel",
    tx: "Ascendant — défausse un sort. (Coût à payer pour m'ascendre. Utilisable seulement si je ne le suis pas déjà.)\nQuand je deviens Ascendue, bannis une unité ennemie présente sur un champ de bataille ayant 3 Puissance ou moins.",
    note: "Bannir, et non tuer : l'unité ne va pas à la défausse et échappe donc aux effets de résurrection."
  },
  "VEN-055/166": {
    n: "Chercheurs appliqués",
    tx: "Ascendant 3 Énergie.\nAscendus : tes sorts coûtent 1 Énergie + 1 Puissance de moins, sans descendre sous 1 Énergie."
  },
  "VEN-152/166": {
    n: "Réfutation",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nChoisis un sort dont le coût en Énergie ne dépasse pas 4. Tu peux payer 1 Puissance, de n'importe quel domaine : si tu le fais, tu en prends le contrôle et tu peux en refaire les choix. Sinon, contre-le.",
    note: "Voler le sort adverse et le retourner contre lui pour 1 Puissance de plus : souvent bien mieux que de simplement le contrer."
  },
  "OGN-093/298": {
    n: "Écran de fumée",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nDonne -4 Puissance à une unité ce tour-ci, sans descendre sous 1 Puissance."
  },
  "VEN-059/166": {
    n: "Décharge électrique",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nJe coûte 2 Énergie de moins si tu contrôles quelque chose d'Ascendu.\nInflige 4 dégâts à une unité présente sur un champ de bataille."
  },
  "SFD-215/221": {
    n: "Conservatoire de Corbefleur",
    tx: "Quand tu défends ici, révèle la première carte de ton deck principal. Si c'est un sort, mets-la dans ta main. Sinon, recycle-la."
  },
  "VEN-196*/166": {
    n: "La Matriarche de guerre",
    tx: "Quand tu ascends autre chose, ascends-moi.\nRetire-moi mon ascension, 1 Puissance de n'importe quel domaine, épuise-moi : redresse une unité.",
    note: "Légende d'Ambessa : redresser une unité déjà engagée permet de la faire défendre après l'avoir fait attaquer."
  },
  "VEN-074/166": {
    n: "Maraudeur de la Légion",
    tx: "Ascendant — 1 Énergie, ou 1 Puissance. (Paie l'un ou l'autre pour m'ascendre. Utilisable seulement si je ne le suis pas déjà.)\nAscendu : j'ai +1 Puissance.",
    note: "Coût au choix : pratique quand il te reste l'une ou l'autre ressource en fin de tour."
  },
  "VEN-185/166": {
    n: "Kayle",
    tx: "Ascendant 3 Énergie.\nJe peux être Ascendue jusqu'à trois fois.\nJ'ai +2 Puissance pour chaque ascension.\nQuand je suis Ascendue trois fois, j'ai Déviation 3 et Gank.",
    note: "Exception à la règle : elle est la seule à pouvoir cumuler plusieurs ascensions. Pleinement ascendue, elle passe à 9 Puissance et devient très difficile à cibler."
  },
  "VEN-077/166": {
    n: "Outils de l'Empire",
    tx: "Ascendant 2 Énergie. (Coût à payer pour ascendre cet équipement. Utilisable seulement s'il ne l'est pas déjà.)\nÉpuiser : donne +2 Puissance à une unité ce tour-ci. Si cet équipement est Ascendu, donne +4 Puissance à la place."
  },
  "VEN-072/166": {
    n: "Rugissement guttural",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nDonne +2 Puissance à une unité ce tour-ci. Si elle est Ascendue, donne +4 Puissance à la place."
  },
  "VEN-154/166": {
    n: "Exécution publique",
    tx: "Choisis une unité alliée. Tue une unité ennemie ayant moins de Puissance qu'elle.\nFlux 5 Énergie + 2 Puissance de n'importe quel domaine. (Tu peux me jouer depuis ta défausse pour ce coût de Flux. Je suis ensuite bannie.)",
    note: "Un simple bonus temporaire sur ton unité suffit à élargir la liste des cibles légales."
  },
  "VEN-163/166": {
    n: "Autel exhumé",
    tx: "Les coûts d'Ascendant de tes unités présentes ici sont réduits de 1 Énergie ou de 1 Puissance."
  },
  "UNL-228*/219": {
    n: "L'Éventreur de Bloodharbor",
    tx: "1 Énergie, épuiser : renvoie une unité alliée présente sur un champ de bataille dans la main de son propriétaire. Crée un jeton d'équipement Or, épuisé.",
    note: "Légende de Pyke : rappeler une unité pour rejouer son effet « quand tu me joues », et l'Or aide à en payer le coût."
  },
  "SFD-138/221": {
    n: "Chantevent",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nQuand tu me joues, tu peux renvoyer une autre unité présente sur un champ de bataille, ayant 3 Puissance ou moins, dans la main de son propriétaire."
  },
  "OGN-024/298": {
    n: "Traqueur du Néant",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nInflige 4 dégâts à une unité présente sur un champ de bataille. Pioche 1 carte."
  },
  "UNL-214/219": {
    n: "Baie de l'Éventreur",
    tx: "Quand une unité présente ici est renvoyée dans la main d'un joueur, ce joueur peut payer 1 Énergie pour canaliser 1 rune, épuisée.",
    note: "Vaut pour les deux joueurs, y compris quand c'est toi qui renvoies une unité adverse."
  },
  "OGN-261/298": {
    n: "L'Aube radieuse",
    tx: "Quand tu étourdis une ou plusieurs unités ennemies, améliore une unité alliée. (Si elle n'a pas d'amélioration, elle reçoit +1 Puissance.)",
    note: "Légende de Leona : une seule amélioration par déclenchement, même si tu étourdis plusieurs unités d'un coup."
  },
  "OGN-238/298": {
    n: "Leona",
    tx: "Bouclier. (+1 Puissance tant que je suis défenseuse.)\nQuand j'attaque, étourdis une unité ennemie présente ici. (Elle n'inflige pas de dégâts de combat ce tour-ci.)",
    note: "L'étourdissement part à l'ouverture de l'affrontement : le défenseur visé ne rendra pas ses dégâts."
  },
  "VEN-024/166": {
    n: "Poro affectueux",
    tx: "Quand un combat auquel j'ai participé se termine, si je n'ai subi aucun dégât ce tour-ci, pioche 1 carte.",
    note: "Il faut survivre sans une égratignure : à jouer derrière une unité Tank."
  },
  "UNL-052/219": {
    n: "Nami",
    tx: "Tu peux payer 1 Puissance en coût additionnel pour me jouer.\nQuand tu me joues, si tu as payé ce coût, étourdis une unité ennemie. (Elle n'inflige pas de dégâts de combat ce tour-ci.)\nQuand je tiens un champ de bataille, la prochaine unité que tu joues ce tour-ci arrive prête et améliorée."
  },
  "SFD-040/221": {
    n: null,
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nRépétition 2 Énergie. (Tu peux payer le coût additionnel pour répéter l'effet du sort.)\nÉtourdis une unité attaquante. (Elle n'inflige pas de dégâts de combat ce tour-ci.)",
    note: "Ne vise que les attaquants : c'est une carte de défenseur."
  },
  "VEN-136/166": {
    n: "Ambessa",
    tx: "Ascendant 1 Énergie + 2 Puissance.\nAscendue : j'ai Assaut 2. (+2 Puissance tant que je suis attaquante.)\nAscendue : quand j'attaque, tue une unité ennemie présente ici ayant moins de Puissance que moi.",
    note: "L'exécution part à l'ouverture de l'affrontement, et son Assaut 2 compte déjà : elle attaque donc à 7 Puissance effective."
  },
  "OGN-082/298": {
    n: "Protecteur de flamme blanche",
    tx: "Quand tu me joues, donne +8 Puissance à une unité ce tour-ci.",
    note: "Le bonus peut aller sur lui-même : 16 Puissance pour un seul affrontement."
  },
  "VEN-190/166": {
    n: "Le Boucher des sables",
    tx: "Réaction : 2 Puissance de n'importe quel domaine, épuiser — ajoute 2 Énergie. Cette Énergie ne peut servir qu'à jouer des unités ou à activer leurs capacités.",
    note: "Légende de Renekton : elle convertit de la Puissance en Énergie, mais seulement au service des unités."
  },
  "VEN-019/166": {
    n: "Renekton",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prêt.)\nQuand j'attaque, si tu contrôles 4 runes ou moins, inflige 2 dégâts à toutes les unités ennemies présentes ici.",
    note: "Récompense les débuts de partie : passé 5 runes, l'effet s'éteint."
  },
  "UNL-010/219": {
    n: "Brise-coffre",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nDonne Assaut 2 et Gank à une unité ce tour-ci. (+2 Puissance tant qu'elle attaque ; elle peut se déplacer d'un champ de bataille à un autre.)"
  },
  "VEN-008/166": {
    n: "Frappe impitoyable",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nEn coût additionnel pour me jouer, tu peux défausser 1 carte.\nInflige 3 dégâts à une unité présente sur un champ de bataille. Si tu as payé ce coût, inflige 5 dégâts à la place."
  },
  "OGN-255/298": {
    n: "La Renarde à neuf queues",
    tx: "Quand une unité ennemie attaque un champ de bataille que tu contrôles, donne-lui -1 Puissance ce tour-ci, sans descendre sous 1 Puissance.",
    note: "Légende d'Ahri : l'effet touche chaque attaquant, donc une attaque groupée se fait rogner unité par unité."
  },
  "OGN-119/298": {
    n: "Ahri",
    tx: "Quand j'attaque ou que je défends, donne -2 Puissance à une unité ennemie présente ici, ce tour-ci, sans descendre sous 1 Puissance."
  },
  "OGN-075/298": {
    n: "Fée appétissante",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)\nGlas — canalise 2 runes, épuisées, et pioche 1 carte. (Effet obtenu quand je meurs.)"
  },
  "SFD-031/221": {
    n: "L'Appel du désert",
    tx: "Répétition 2 Énergie. (Tu peux payer le coût additionnel pour répéter l'effet du sort.)\nCrée un jeton d'unité Soldat des sables de 2 Puissance."
  },
  "SFD-034/221": {
    n: "Force sauvage",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nRépétition 2 Énergie. (Tu peux payer le coût additionnel pour répéter l'effet du sort.)\nDonne +2 Puissance à une unité ce tour-ci."
  },
  "OGN-256/298": {
    n: "Feu de renard",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nAction. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nTue autant d'unités que tu veux sur un même champ de bataille, à condition que le total de leurs Puissances ne dépasse pas 4.",
    note: "Le total compte, pas le nombre : quatre unités à 1 Puissance passent, une seule unité à 5 ne passe pas."
  },
  "SFD-211/221": {
    n: "Flèche marai",
    tx: "Tant que tu contrôles ce champ de bataille, tes coûts de Répétition coûtent 1 Énergie de moins."
  },
  "SFD-090/221": {
    n: "Le Propulseur Zéro",
    tx: "Équiper 1 Énergie + 1 Puissance. (Attacher cet équipement à une unité que tu contrôles.)\n3 Énergie + 1 Puissance, bannir cet équipement : joue toutes les unités bannies avec lui, sans payer leur coût. (Utilisable seulement s'il n'est attaché à personne.)",
    note: "Il accumule les unités au fil de la partie, puis les rend toutes d'un coup : c'est une carte de fin de partie."
  },
  "OGN-066/298": {
    n: "Ahri",
    tx: "Quand je tiens un champ de bataille, tu marques 1 point.",
    note: "Un point supplémentaire par tour tant qu'elle survit : la faire mourir devient la priorité de l'adversaire."
  },
  "SFD-193/221": {
    n: "Le Grand maître d'armes",
    tx: "1 Énergie, épuiser : attache un Équipement détaché que tu contrôles à une unité que tu contrôles.\nÉpuiser : déplace un Équipement déjà attaché que tu contrôles sur une unité que tu contrôles.",
    note: "Légende de Jax : la seconde capacité est gratuite et permet de rapatrier un Équipement sur l'unité qui va se battre."
  },
  "SFD-054/221": {
    n: "Jax",
    tx: "Déviation. (L'adversaire doit payer 1 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)\nChacun des Équipements de ta main a Dégainage. (Il gagne Réaction ; quand tu le joues, attache-le à une unité que tu contrôles.)",
    note: "Il transforme tes Équipements en tours de combat : posables en pleine chaîne, et attachés gratuitement."
  },
  "VEN-045/166": {
    n: "Heaume de répression",
    tx: "Ascendant 4 Énergie + 1 Puissance. (Coût à payer pour ascendre cet équipement. Utilisable seulement s'il ne l'est pas déjà.)\nLes sorts de tes adversaires coûtent 1 Énergie de plus. S'il est Ascendu, ils coûtent 1 Énergie + 1 Puissance de plus à la place."
  },
  "VEN-031/166": {
    n: "Voile du crépuscule",
    tx: "Donne +1 Puissance à une unité alliée ce tour-ci. Elle ne peut pas être choisie par les sorts et capacités ennemis ce tour-ci.\nFlux 2 Énergie. (Tu peux me jouer depuis ta défausse pour ce coût de Flux. Je suis ensuite bannie.)",
    note: "Protection totale contre le ciblage, mais pas contre les dégâts de combat ni contre les effets qui ne choisissent pas."
  },
  "SFD-194/221": {
    n: "Contre-attaque",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nChoisis une unité : la prochaine fois qu'elle devrait subir des dégâts ce tour-ci, ces dégâts sont évités. Pioche 1 carte.",
    note: "Un seul paquet de dégâts est évité, quel qu'en soit le montant : idéal contre un gros sort de dégâts."
  },
  "VEN-193*/166": {
    n: "L'Œil du crépuscule",
    tx: "Action : épuiser — donne Tank à une unité alliée ce tour-ci. (Les dégâts de combat doivent lui être assignés en premier.)",
    note: "Légende de Shen : sert à protéger une unité fragile en forçant l'adversaire à frapper une autre cible d'abord."
  },
  "VEN-138a/166": {
    n: "Shen",
    tx: "Bouclier. (+1 Puissance tant que je suis défenseur.)\nQuand je tiens un champ de bataille, si tu contrôles ici exactement une autre unité, tu marques 1 point.",
    note: "Exactement une : ni seul, ni à trois. Il faut tenir la position à deux, précisément."
  },
  "UNL-041/219": {
    n: "Allay, admirateur zélé",
    tx: "Déviation. (L'adversaire doit payer 1 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)\nTant que je suis sur un champ de bataille, tes autres unités présentes ici ont Déviation.",
    note: "Il rend tout un groupe coûteux à cibler : l'adversaire doit souvent le tuer d'abord, au combat."
  },

  /* ---------- Shenyang : lot 4 (4/4) ---------- */

  "VEN-159/166": {
    n: "Temple Kinkou",
    tx: "Les unités présentes ici qui ont Tank ont +1 Puissance."
  },
  "UNL-054/219": {
    n: "Tentacules malicieux",
    tx: "Déplace au même endroit autant d'unités ennemies que tu veux, à condition qu'elles aient le même contrôleur et que le total de leurs Puissances ne dépasse pas 8.",
    note: "Sert à vider un champ de bataille pour le conquérir sans combat, ou au contraire à entasser les défenseurs loin de l'action."
  },
  "UNL-226/219": {
    n: "Le Virtuose",
    tx: "Quand tu joues un sort, si tu as dépensé 4 Énergie ou plus, tu peux le bannir. Ensuite, s'il y a quatre sorts bannis avec moi, mets-les chacun dans sa défausse, canalise 4 runes et pioche 1 carte.",
    note: "Légende de Jhin : quatre gros sorts dans la partie déclenchent la récompense. Les sorts reviennent à la défausse, donc restent accessibles aux effets de Flux."
  },
  "UNL-089a/219": {
    n: "Jhin",
    tx: "Vision. (Quand tu me joues, regarde la première carte de ton deck principal. Tu peux la recycler.)\nSi tu as dépensé 4 Énergie ou plus pour jouer un sort ce tour-ci, tu peux me jouer pour 1 Puissance.",
    note: "Une unité de 4 Puissance posée pour une seule Puissance, à condition d'avoir lancé un gros sort avant."
  },
  "VEN-069/166": {
    n: "Mel",
    tx: "Quand tu me joues, pioche 1 carte.\nAscendant 3 Énergie.\nAscendue : tes sorts et capacités ne peuvent pas être contrés. Si un sort ou une capacité que tu contrôles donne un malus de Puissance à une unité qu'il choisit, il donne 1 Puissance de malus en plus.",
    note: "L'immunité au contre change complètement les affrontements : l'adversaire ne peut plus répondre à tes sorts, seulement aux unités."
  },
  "SFD-083/221": {
    n: "Anomalie hextech",
    tx: "Épuiser : Réaction — paie autant de Puissance que tu veux, de n'importe quel domaine, pour ajouter autant d'Énergie. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)",
    note: "Convertit la Puissance en Énergie à volonté : utile quand tes runes sont du mauvais domaine."
  },
  "OGN-025/298": {
    n: "Furie aveugle",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nChaque adversaire révèle la première carte de son deck principal. Choisis-en une, bannis-la, puis joue-la sans payer son coût. Puis recycle les autres.",
    note: "Tu joues une carte adverse : c'est un pari, mais en duel l'unique carte révélée est forcément ta cible."
  },
  "UNL-182/219": {
    n: "Lever de rideau",
    tx: "Répétition — 1 Énergie, ou 1 Puissance, ou 1 Énergie + 1 Puissance. (Tu peux payer chacun de ces coûts additionnels pour répéter l'effet du sort.)\nChoisis un effet que tu n'as pas déjà choisi :\n— pioche 1 carte ;\n— inflige 2 dégâts à une unité présente sur un champ de bataille ;\n— inflige 3 dégâts à une unité restée dans une base ;\n— donne -4 Puissance à une unité présente sur un champ de bataille, ce tour-ci.",
    note: "Les trois coûts de Répétition se cumulent : en payant tout, le sort produit les quatre effets d'un coup."
  },
  "SFD-201/221": {
    n: "La Chimbaronne",
    tx: "Quand toi ou un allié tenez un champ de bataille, tu peux m'épuiser pour créer un jeton d'équipement Or, épuisé.\nTant que ton score est à 3 points ou moins du score de victoire, ton Or ajoute 1 Énergie de plus.",
    note: "Légende de Renata Glasc : l'Or devient deux fois plus rentable au moment où tu approches de la victoire."
  },
  "SFD-171/221": {
    n: "Renata Glasc",
    tx: "Tes jetons arrivent prêts.",
    note: "Change tout pour les decks à jetons : ils peuvent attaquer ou défendre dès le tour où ils apparaissent."
  },
  "OGN-226/298": {
    n: "Matrone spectrale",
    tx: "Quand tu me joues, tu peux jouer depuis ta défausse une unité dont le coût ne dépasse pas 3 Énergie et 1 Puissance, sans payer son coût."
  },
  "SFD-166/221": {
    n: "Rassemblement des troupes",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nQuand une unité alliée est jouée ce tour-ci, améliore-la. (Si elle n'a pas d'amélioration, elle reçoit +1 Puissance.)\nPioche 1 carte.",
    note: "L'effet dure tout le tour : joué tôt dans ta phase principale, il améliore toutes les unités qui suivent."
  },
  "SFD-202/221": {
    n: "OPA hostile",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nPrends le contrôle d'une unité ennemie présente sur un champ de bataille. Redresse-la. (Déclenche un combat s'il y a d'autres ennemis là ; sinon, tu conquiers.)\nÀ la fin du tour, tu perds le contrôle de cette unité et elle est rappelée. (Renvoyée à la base. Ce n'est pas un déplacement.)",
    note: "L'unité volée se bat pour toi puis rentre à la base adverse : elle ne défendra donc pas au tour suivant."
  },
  "OGN-233/298": {
    n: "Grand stratagème",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nDonne +5 Puissance à tes unités ce tour-ci.",
    note: "Toutes tes unités, partout sur le plateau : c'est un sort de finition, pas un tour de combat."
  },
  "OGN-259/298": {
    n: "L'Impardonné",
    tx: "2 Énergie, épuiser : déplace une unité alliée vers ta base ou depuis ta base.",
    note: "Légende de Yasuo : sortir une unité de la base est un déplacement, donc cela peut déclencher ses effets « quand je me déplace »."
  },
  "OGN-205/298": {
    n: "Yasuo",
    tx: "Gank. (Je peux me déplacer d'un champ de bataille à un autre.)\nLa troisième fois que je me déplace dans un tour, tu marques 1 point.",
    note: "Trois déplacements dans le même tour : il faut donc des effets qui le font bouger gratuitement, comme sa propre légende."
  },
  "UNL-045/219": {
    n: "Panneau oublié",
    tx: "Action : épuiser une unité que tu contrôles, épuiser cet équipement — déplace une autre unité que tu contrôles à l'endroit où se trouve l'unité que tu as épuisée pour payer cette capacité."
  },
  "OGN-260/298": {
    n: "Dernier souffle",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nRedresse une unité alliée : elle inflige des dégâts égaux à sa Puissance à une unité ennemie présente sur un champ de bataille.",
    note: "Redresser puis frapper : l'unité peut avoir déjà attaqué ce tour-ci et rester disponible pour défendre ensuite."
  },
  "OGN-140/298": {
    n: "Héraut des écailles",
    tx: "Les coûts en Énergie de tes Dragons sont réduits de 2, sans descendre sous 1 Énergie."
  },
  "SFD-106/221": {
    n: "Démonstration de force",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nPioche 1 carte pour chacune de tes unités Puissantes. (Une unité est Puissante tant qu'elle a 5 Puissance ou plus.)"
  },
  "OGN-250/298": {
    n: "Porteur d'orage",
    tx: "Choisis une unité alliée restée dans ta base : elle inflige des dégâts égaux à sa Puissance à toutes les unités ennemies présentes sur un champ de bataille, puis elle s'y déplace.",
    note: "L'unité frappe depuis la base avant d'arriver : le champ de bataille est souvent déjà nettoyé quand elle s'y pose."
  },
  "OGS-014/024": {
    n: "Lux",
    tx: "Épuiser : Réaction — ajoute 2 Énergie. Utilisable uniquement pour jouer des sorts. (Les capacités qui ajoutent des ressources ne peuvent pas être contrées.)",
    note: "2 Énergie par tour réservées aux sorts : elle fait tourner les decks de contrôle."
  },
  "UNL-085/219": {
    n: "Carte des Bas-fonds",
    tx: "Réaction. (Se joue à tout moment, même avant qu'un sort ou une capacité ne se résolve.)\nTemporaire. (Cet équipement meurt au début de la phase Initiale de son contrôleur, avant le score.)\nQuand un adversaire marque, pioche 1 carte.",
    note: "Posée en Réaction juste avant le score adverse, elle transforme leur point en carte pour toi, puis disparaît."
  },
  "VEN-053/166": {
    n: null,
    tx: "Si un joueur devait marquer 1 point en conquérant ou en tenant un champ de bataille pendant son premier ou son deuxième tour, il pioche 1 carte à la place.",
    note: "Carte de ralentissement : elle annule les points des tout premiers tours, pour les deux joueurs."
  },
  "OGN-251/298": {
    n: "L'Électron libre",
    tx: "Au début de ta phase Initiale, pioche 1 carte si tu as une carte ou moins en main.",
    note: "Légende de Jinx : elle récompense les decks qui vident leur main à chaque tour."
  },
  "OGN-030/298": {
    n: "Jinx",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)\nAssaut 2. (+2 Puissance tant que je suis attaquante.)\nQuand tu me joues, défausse 2 cartes.",
    note: "Les 2 cartes défaussées sont le prix à payer, mais elles alimentent les cartes qui veulent justement être défaussées."
  },
  "OGN-006/298": {
    n: "Pièges enflammés",
    tx: "Quand tu me défausses, tu peux payer 1 Puissance pour me jouer.",
    note: "Se marie avec Jinx : défaussée par elle, cette unité revient sur le plateau pour 1 Puissance."
  },
  "VEN-094/166": {
    n: "Mère aux masques",
    tx: "Quand tu me défausses, tu peux payer 1 Énergie pour donner +2 Puissance à une unité alliée ce tour-ci."
  },
  "VEN-010/166": {
    n: "Malédiction dévorante",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nInflige 2 dégâts à une unité présente sur un champ de bataille. Ce sort inflige 1 dégât bonus pour chaque carte portant ce nom dans ta défausse.",
    note: "Trois exemplaires déjà défaussés et le quatrième inflige 5 dégâts : c'est une carte à jouer en plusieurs copies."
  },
  "OGS-013/024": {
    n: "Garen",
    tx: "Tes autres unités présentes ici ont +1 Puissance."
  },
  "OGN-222/298": {
    n: "Tambour noxien",
    tx: "Quand je me déplace sur un champ de bataille, crée ici un jeton d'unité Recrue de 1 Puissance. (Il apparaît lui aussi sur le champ de bataille.)"
  },
  "OGN-159/298": {
    n: "Warwick",
    tx: "J'arrive prêt.\nQuand j'attaque, tue toutes les unités ennemies blessées présentes ici.",
    note: "« Blessées » veut dire qui ont déjà subi des dégâts ce tour-ci : il faut donc un sort de dégâts avant lui dans la chaîne."
  },
  "SFD-168/221": {
    n: "Armurerie de l'avant-garde",
    tx: "Épuiser : crée trois jetons d'unité Recrue de 1 Puissance. (Tu peux les placer à des endroits différents.)"
  },
  "OGN-275/298": {
    n: "Autel de l'Unité",
    tx: "Quand tu tiens ce champ de bataille, crée un jeton d'unité Recrue de 1 Puissance dans ta base."
  },
  "OGN-293/298": {
    n: "La Grande Place",
    tx: "Quand tu tiens ce champ de bataille, si tu y as 7 unités ou plus, tu gagnes la partie.",
    note: "Victoire alternative : il faut survivre un tour complet avec sept unités massées au même endroit."
  },
  "OGN-243/298": {
    n: "Darius",
    tx: "Légion — quand tu me joues, redresse-moi. (Effet obtenu si tu as déjà joué une autre carte ce tour-ci.)\nTes autres unités présentes ici ont +1 Puissance.",
    note: "Posé prêt, il attaque le tour même et fait grossir tout le groupe qui l'accompagne."
  },
  "OGN-267/298": {
    n: "La Chasseuse de primes",
    tx: "Épuiser : donne Gank à une unité ce tour-ci. (Elle peut se déplacer d'un champ de bataille à un autre.)",
    note: "Légende de Miss Fortune : gratuite, tous les tours. Elle permet de redéployer une unité là où le combat se joue."
  },
  "OGN-162/298": {
    n: "Miss Fortune",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prête.)\nGank. (Je peux me déplacer d'un champ de bataille à un autre.)\nLa première fois que je me déplace à chaque tour, tu peux redresser une autre carte épuisée.",
    note: "Redresser une rune revient à rendre l'Énergie dépensée : son déplacement se paie tout seul."
  },
  "UNL-134/219": {
    n: "Angoisse existentielle",
    tx: "Action. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nRépétition 2 Énergie. (Tu peux payer le coût additionnel pour répéter l'effet du sort.)\nÉtourdis une unité ennemie attaquante. Si elle est déjà étourdie, renvoie-la dans la main de son propriétaire à la place. (Une unité étourdie n'inflige pas de dégâts de combat ce tour-ci.)",
    note: "En payant la Répétition, le premier effet étourdit et le second renvoie l'unité en main : le sort se combine avec lui-même."
  },
  "OGN-277/298": {
    n: "Bar de l'arrière-cour",
    tx: "Quand une unité quitte ce champ de bataille, donne-lui +1 Puissance ce tour-ci.",
    note: "Vaut pour les deux joueurs, et se marie avec Gank : on part d'ici pour frapper ailleurs, plus fort."
  },
  "UNL-130/219": {
    n: "Perchoir ambulant",
    tx: "Déviation. (L'adversaire doit payer 1 Puissance de plus, de n'importe quel domaine, pour me choisir avec un sort ou une capacité.)\nQuand tu me joues, choisis un adversaire : il crée un jeton d'unité Oiseau de 1 Puissance avec Déviation.",
    note: "Tu donnes bien un défenseur à l'adversaire : c'est le prix d'une unité de 6 Puissance difficile à cibler."
  },
  "OGN-257/298": {
    n: "Le Moine aveugle",
    tx: "1 Énergie, épuiser : améliore une unité alliée. (Si elle n'a pas d'amélioration, elle reçoit +1 Puissance.)",
    note: "Légende de Lee Sin : une amélioration par tour, qui sert de carburant aux cartes qui dépensent les améliorations."
  },
  "OGN-151/298": {
    n: "Lee Sin",
    tx: "Accélération. (Tu peux payer 1 Énergie + 1 Puissance en coût additionnel pour que j'arrive prêt.)\nTes autres unités améliorées présentes sur mon champ de bataille ont +2 Puissance.",
    note: "Chaque amélioration vaut alors +3 Puissance au lieu de +1 : c'est le pivot des decks à améliorations."
  },
  "OGN-055/298": {
    n: "Manieuse d'eau",
    tx: "Tant que j'attaque ou que je défends seule, j'ai +2 Puissance."
  },
  "VEN-026/166": {
    n: "Musiciens de campagne",
    tx: "Quand tu me joues, donne +3 Puissance à une unité ce tour-ci."
  },
  "OGN-147/298": {
    n: "Chamane griffe-sauvage",
    tx: "Quand tu me joues, tu peux dépenser une amélioration pour m'améliorer et me redresser. (Si je n'ai pas d'amélioration, je reçois +1 Puissance.)",
    note: "Une amélioration dépensée ailleurs revient sur elle, et elle arrive prête : elle peut attaquer le tour même."
  },
  "OGN-065/298": {
    n: "Ancien chenu",
    tx: "Tant que je suis améliorée, j'ai +1 Puissance supplémentaire.",
    note: "L'amélioration lui rapporte donc +2 Puissance au total, au lieu de +1."
  },
  "VEN-025/166": {
    n: "Hiérophante estimé",
    tx: "Tant que tu contrôles 7 runes ou plus, tous les dégâts que les sorts et capacités ennemis devraient m'infliger sont évités.",
    note: "Il reste vulnérable aux dégâts de combat et aux effets qui tuent sans infliger de dégâts."
  },
  "VEN-033/166": {
    n: "Protecteur pakaa",
    tx: "Quand je me déplace, révèle la première carte de ton deck principal. Si c'est une unité, pioche-la. Sinon, mets-la dans ta défausse et je gagne +2 Puissance ce tour-ci.",
    note: "Les deux issues sont bonnes : soit une carte en main, soit 6 Puissance pour l'affrontement."
  },
  "OGN-125/298": {
    n: "Brute de Bilgewater",
    tx: "Tant que je suis améliorée, j'ai Gank. (Je peux me déplacer d'un champ de bataille à un autre.)"
  },
  "OGN-157/298": {
    n: "Udyr",
    tx: "Dépenser mon amélioration : choisis un effet que tu n'as pas déjà choisi ce tour-ci —\n— inflige 2 dégâts à une unité présente sur un champ de bataille ;\n— étourdis une unité présente sur un champ de bataille ;\n— redresse-moi ;\n— donne-moi Gank ce tour-ci.",
    note: "Il faut lui redonner une amélioration entre chaque usage : avec Le Moine aveugle ou Mistfall, il peut enchaîner plusieurs effets dans le tour."
  },
  "OGN-137/298": {
    n: "Ursin griffe-d'orage",
    tx: "Tank. (Les dégâts de combat doivent m'être assignés en premier.)\nQuand tu me joues, canalise 1 rune, épuisée."
  },
  "OGN-142/298": {
    n: "Dragon des montagnes",
    tx: "Aucun texte de règles.",
    note: "10 Puissance nue pour 9 Énergie : la plus grosse masse brute du jeu, sans mot-clé pour la protéger."
  },
  "OGN-152/298": {
    n: "Tombée des brumes",
    tx: "Quand tu améliores une unité alliée, tu peux payer 1 Puissance et épuiser cet équipement pour la redresser.",
    note: "Redresser une unité qui vient d'attaquer lui permet de défendre ensuite : l'équipement double son activité."
  },
  "OGN-053/298": {
    n: "Unis face à l'ennemi",
    tx: "Cachée. (Cache-la maintenant pour 1 Puissance, de n'importe quel domaine, afin de la révéler plus tard pour 0.)\nAction. (Se joue pendant ton tour ou dans un affrontement, chaîne vide.)\nAméliore une unité alliée. Ce tour-ci, les améliorations donnent +1 Puissance de plus à tes unités. (Améliorer une unité : lui donner +1 Puissance si elle n'en a pas déjà une.)",
    note: "Le bonus vaut pour toutes tes unités déjà améliorées : sur un plateau large, c'est un gain de plusieurs Puissances d'un coup."
  },

  /* ---------- runes, jetons et vanilles ---------- */

  "OGN-126a/298": {
    n: "Rune de Corps",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Corps."
  },
  "VEN-R04": {
    n: "Rune de Corps",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Corps."
  },
  "OGN-042a/298": {
    n: "Rune de Calme",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Calme."
  },
  "VEN-R02": {
    n: "Rune de Calme",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Calme."
  },
  "OGN-166a/298": {
    n: "Rune de Chaos",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Chaos."
  },
  "VEN-R05": {
    n: "Rune de Chaos",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Chaos."
  },
  "OGN-007a/298": {
    n: "Rune de Furie",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Furie."
  },
  "VEN-R01": {
    n: "Rune de Furie",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance de Furie."
  },
  "OGN-089a/298": {
    n: "Rune d'Esprit",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance d'Esprit."
  },
  "VEN-R03": {
    n: "Rune d'Esprit",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance d'Esprit."
  },
  "OGN-214a/298": {
    n: "Rune d'Ordre",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance d'Ordre."
  },
  "VEN-R06": {
    n: "Rune d'Ordre",
    tx: "Aucun texte de règles.",
    note: "L'épuiser donne 1 Énergie. La recycler donne 1 Puissance d'Ordre."
  },
  "OGN-088/298": {
    n: "Méga-Méca",
    tx: "Aucun texte de règles.",
    note: "8 Puissance nue pour 7 Énergie : une grosse masse sans mot-clé."
  },
  "OGN-049/298": {
    n: "Fantôme joueur",
    tx: "Aucun texte de règles.",
    note: "5 Puissance pour 5 Énergie, sans capacité : un corps de remplissage honnête."
  },
  "VEN-T04": {
    n: "Recrue",
    tx: "Aucun texte de règles.",
    note: "Jeton d'unité de 1 Puissance. Comme tout jeton, il disparaît définitivement dès qu'il quitte le plateau."
  },
  "OGN-271/298": {
    n: "Recrue (Demacia)",
    tx: "Aucun texte de règles.",
    note: "Jeton d'unité de 1 Puissance. La mention de région n'est qu'une variante d'illustration : les trois Recrues sont identiques."
  },
  "OGN-272/298": {
    n: "Recrue (Noxus)",
    tx: "Aucun texte de règles.",
    note: "Jeton d'unité de 1 Puissance. La mention de région n'est qu'une variante d'illustration : les trois Recrues sont identiques."
  },
  "OGN-273/298": {
    n: "Recrue (Zaun)",
    tx: "Aucun texte de règles.",
    note: "Jeton d'unité de 1 Puissance. La mention de région n'est qu'une variante d'illustration : les trois Recrues sont identiques."
  },
  "OGN-175/298": {
    n: "Rôdeur des chantiers navals",
    tx: "Aucun texte de règles.",
    note: "3 Puissance pour 3 Énergie, sans capacité."
  },
  "OGN-219/298": {
    n: "Sergent de l'avant-garde",
    tx: "Aucun texte de règles.",
    note: "4 Puissance pour 4 Énergie, sans capacité."
  },

  /* ---------- champs de bataille restants ---------- */

  "UNL-206/219": {
    n: "Autel de sang",
    tx: "Si une unité présente ici devait mourir pendant un combat, son contrôleur peut payer 3 Puissance, de n'importe quel domaine, pour la soigner, l'épuiser et la rappeler à la base à la place.",
    note: "Vaut pour les deux joueurs. L'unité survit mais quitte le champ de bataille : tu sauves l'unité, pas la position."
  },
  "OGN-276/298": {
    n: "L'Ascension de l'aspirant",
    tx: "Augmente de 1 le nombre de points nécessaires pour gagner la partie.",
    note: "Rallonge la partie pour tout le monde : avantage aux decks lents, qui gagnent un tour de préparation."
  },
  "OGN-278/298": {
    n: "Arbre de Bandle",
    tx: "Tu peux cacher une carte de plus ici.",
    note: "Normalement une seule carte cachée par endroit : ce champ de bataille permet de préparer deux embuscades au même endroit."
  },
  "UNL-T01": {
    n: "Fosse du Baron",
    tx: "(Tu ne peux pas commencer la partie avec un champ de bataille-jeton.)\nLes unités peuvent s'y déplacer depuis n'importe où.",
    note: "Jeton amené en jeu par Baron Nashor. Il compte comme un champ de bataille supplémentaire pour la règle du dernier point."
  },
  "UNL-208/219": {
    n: "Autel de flamme noire",
    tx: "Les unités présentes ici qui ont Temporaire ont Bouclier. (+1 Puissance tant qu'elles sont défenseuses.)"
  },
  "UNL-T03": {
    n: "Fourré",
    tx: "Les unités Oiseau, Chat, Chien, Poro et Ivern présentes ici ont +1 Puissance.\nQuand tu marques ici, tu peux le remplacer par le champ de bataille qu'il avait remplacé.",
    note: "Jeton amené en jeu par la légende d'Ivern, en remplacement d'un champ de bataille existant. La seconde ligne permet de remettre l'original en place."
  },
  "UNL-211/219": {
    n: "Bibliothèque oubliée",
    tx: "Tant que tu contrôles ce champ de bataille, quand tu joues un sort, si tu as dépensé 4 Énergie ou plus, fais une Prédiction. (Regarde la première carte de ton deck principal. Tu peux la recycler.)"
  },
  "OGN-281/298": {
    n: "Tombe consacrée",
    tx: "Quand tu tiens ce champ de bataille, tu peux renvoyer ton Champion choisi de ta défausse vers ta Zone de Champion si celle-ci est vide."
  },
  "VEN-160/166": {
    n: "Vortex mystique",
    tx: "Pendant les affrontements qui s'y déroulent, les cartes ayant Réaction coûtent 1 Puissance de plus à jouer, de n'importe quel domaine. (Les cartes Cachées ont Réaction.)",
    note: "Taxe les combats en chaîne pour les deux joueurs : rend les embuscades et les contres nettement plus chers."
  },
  "OGN-283/298": {
    n: "Arène de Navori",
    tx: "Quand tu tiens ce champ de bataille, améliore une unité présente ici. (Si elle n'a pas d'amélioration, elle reçoit +1 Puissance.)"
  },
  "OGN-284/298": {
    n: "Obélisque de puissance",
    tx: "Au début de la première phase Initiale de chaque joueur, ce joueur canalise 1 rune.",
    note: "La rune arrive prête, et non épuisée : c'est un vrai tour d'avance, pour les deux joueurs."
  },
  "VEN-161/166": {
    n: "Forge piltovienne",
    tx: "Tant que tu contrôles ce champ de bataille, la première capacité activée d'Équipement allié utilisée à chaque tour coûte 1 Énergie de moins."
  },
  "SFD-214/221": {
    n: "Nexus de puissance",
    tx: "Quand tu tiens ce champ de bataille, tu peux payer 4 Puissance, de n'importe quel domaine, pour marquer 1 point.",
    note: "Un point supplémentaire par tour, mais 4 Puissance représente presque toutes tes runes : c'est un choix coûteux."
  },
  "VEN-162/166": {
    n: "Sables protecteurs",
    tx: "Quand tu conquiers ici, si tu contrôles 4 runes ou moins, tu peux payer 1 Énergie pour piocher 1 carte.",
    note: "Réservé au début de partie : passé 5 runes, l'effet s'éteint."
  },
  "OGN-285/298": {
    n: "Ruelle du Pillard",
    tx: "Quand tu défends ici, tu peux renvoyer à la base une unité alliée présente ici.",
    note: "Permet de sauver une unité du combat après avoir vu l'attaque arriver."
  },
  "VEN-165/166": {
    n: "Temple des ombres",
    tx: "Quand tu tiens ce champ de bataille, subis Brûlure 3. (Mets les 3 premières cartes de ton deck principal dans ta défausse.)",
    note: "Ce n'est un avantage que dans un deck qui exploite sa défausse : Flux, résurrection, Rhasa le Pourfendeur."
  },
  "UNL-216/219": {
    n: "L'Académie",
    tx: "Quand tu tiens ce champ de bataille, donne à ton prochain sort du tour le mot-clé Répétition pour un coût égal à son coût de base. (Tu peux payer ce coût additionnel pour répéter l'effet du sort.)",
    note: "Doubler un sort une fois par tour : d'autant plus fort que le sort visé est bon marché."
  },
  "OGN-290/298": {
    n: "Le Champion de l'arène",
    tx: "Au début de la première phase Initiale de chaque joueur, ce joueur gagne 1 point.",
    note: "Un point offert à chacun : la partie démarre à 1-1 et se joue donc sur moins de tours."
  },
  "OGN-292/298": {
    n: "L'Arbre rêveur",
    tx: "La première fois à chaque tour qu'un joueur choisit avec un sort une unité alliée présente ici, il pioche 1 carte.",
    note: "Il faut viser sa propre unité : un simple sort de bonus suffit à déclencher la pioche."
  },
  "UNL-217/219": {
    n: "Terrain piégé",
    tx: "Quand tu conquiers ici, si tu as assigné 3 dégâts en excès ou plus, crée un jeton d'unité Oiseau de 1 Puissance avec Déviation.",
    note: "Les dégâts en excès sont ceux envoyés au-delà de ce qu'il fallait pour tuer : il faut donc attaquer largement plus fort que nécessaire."
  },
  "UNL-219/219": {
    n: "Cryptes d'Helia",
    tx: "Quand tu tiens ce champ de bataille, tes unités qui ne sont pas des jetons coûtent 1 Énergie de plus à jouer ce tour-ci.",
    note: "Champ de bataille à contrainte : le tenir a un prix. Il avantage les decks bâtis sur les jetons, qui n'en souffrent pas."
  }
};
