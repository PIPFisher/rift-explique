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
  }
};
