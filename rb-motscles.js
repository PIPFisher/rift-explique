/* ============================================================
   rb-motscles.js — les mots-clés que le panneau met en couleur.

   C'est la source unique : ce fichier est embarqué dans fr.json à la
   génération, et l'extension le lit depuis les données, pas depuis son code.
   Un mot-clé ajouté ici arrive donc chez tout le monde par la mise à jour
   quotidienne, sans que personne ait à réinstaller l'extension.

   Les mots-clés gardent leur nom anglais, celui qui est imprimé sur la carte
   et employé dans le simulateur, sur Rift Atlas et au Discord. La phrase qui
   les entoure, elle, est en français, et la parenthèse explique le mot.

   Les familles reprennent les couleurs imprimées sur les cartes officielles :
     t  vert sapin  quand et d'où tu as le droit de jouer la carte
     e  vert olive  ce que la carte gagne, sous condition ou en mourant
     c  magenta     ce qui compte pendant un combat
     n  gris        les coûts, les actions et les états

   « val » liste les mots-clés qui portent un chiffre : Assault 2, Shield 3…
   Le chiffre qui suit le mot est alors avalé dans la pastille.
   ============================================================ */
window.RB_MOTS = {
  fam: {
    t: ["Accelerate", "Quick-Draw", "Reaction", "Ambush", "Repeat", "Deploy",
        "Action", "Legion", "Hidden", "Flow"],
    e: ["Empowered", "Temporary", "Deathknell", "Deflect", "Ganking",
        "Hunt", "Level", "Vision"],
    c: ["Backline", "Disarm", "Shield", "Assault", "Stunned", "Stun", "Tank"],
    n: ["Weaponmaster", "Show Off", "Empower", "Predict", "Mighty", "Buffed",
        "Equip", "Buff", "Burn", "Unique"]
  },
  val: ["Assault", "Shield", "Deflect", "Hunt", "Level", "Burn",
        "Predict", "Disarm"]
};
