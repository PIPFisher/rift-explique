/* ============================================================
   rb-motscles.js — les mots-clés que le panneau met en couleur.

   C'est la source unique : ce fichier est embarqué dans fr.json à la
   génération, et l'extension le lit depuis les données, pas depuis son code.
   Un mot-clé ajouté ici arrive donc chez tout le monde par la mise à jour
   quotidienne, sans que personne ait à réinstaller l'extension.

   Les familles reprennent les couleurs imprimées sur les cartes officielles :
     t  vert sapin  quand et d'où tu as le droit de jouer la carte
     e  vert olive  ce que la carte gagne, sous condition ou en mourant
     c  magenta     ce qui compte pendant un combat
     n  gris        les coûts, les actions et les états

   « val » liste les mots-clés qui portent un chiffre : Assaut 2, Bouclier 3…
   Le chiffre qui suit le mot est alors avalé dans la pastille.
   ============================================================ */
window.RB_MOTS = {
  fam: {
    t: ["Accélération", "Déploiement", "Répétition", "Embuscade", "Réaction",
        "Dégainer", "Action", "Légion", "Caché", "Flux"],
    e: ["Amplifiées", "Amplifiés", "Amplifiée", "Amplifié", "Temporaire",
        "Protection", "Vengeance", "Agonie", "Chasse", "Niveau", "Vision", "Gank"],
    c: ["Désarmement", "Arrière-ligne", "Bouclier", "Assaut", "Tank"],
    n: ["Expert en armes", "Amplification", "Prédiction", "Puissantes",
        "Puissante", "Équiper", "Exhiber", "Exhibe", "Brûler", "Unique"]
  },
  val: ["Assaut", "Bouclier", "Protection", "Chasse", "Niveau", "Brûler",
        "Prédiction", "Désarmement"]
};
