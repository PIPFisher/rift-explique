# Le Rift Expliqué

Un guide français de **Riftbound** (le TCG League of Legends), pensé pour expliquer le jeu à des débutants.

Quatre onglets :

| Onglet | Ce qu'il fait |
|---|---|
| **Les règles** | Les notions qui coincent : affrontement, focus/priorité/chaîne, score, pièges de débutant, et un lexique VO → FR des mots-clés |
| **La chaîne** | Une animation en 14 étapes qui déroule un affrontement, avec de vraies cartes |
| **Simulateur** | Tu montes une situation avec de vraies cartes et tu joues coup par coup ; les coups illégaux sont refusés avec l'explication de la règle |
| **Les cartes** | Les 1189 cartes des cinq extensions, avec recherche et filtres |

## Publier sur GitHub Pages

1. Crée un dépôt **public** sur GitHub, par exemple `rift-explique`.
2. Envoie le contenu de ce dossier à la racine du dépôt :

```bash
cd rift-explique
git init
git add .
git commit -m "Le Rift Expliqué"
git branch -M main
git remote add origin https://github.com/<ton-pseudo>/rift-explique.git
git push -u origin main
```

3. Sur GitHub : **Settings → Pages**, source **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Une minute plus tard, le site est en ligne sur `https://<ton-pseudo>.github.io/rift-explique/`. C'est ce lien que tu envoies à tes amis.

## Tester en local

Double-clique `index.html`. Les données sont dans un fichier JavaScript, donc aucun serveur n'est nécessaire.

## Mettre à jour les cartes

`cards-data.js` est un instantané de la galerie officielle. Pour le régénérer quand une extension sort, le script du projet communautaire [riftbound-card-db](https://github.com/riccjohn/riftbound-card-db) aspire la galerie et produit le même format ; il suffit ensuite de réappliquer la simplification des champs (`n`, `t`, `d`, `e`, `m`, `tx`…).

## Structure

```
index.html          coquille et navigation
style.css           thème sombre, composants
cards-data.js       1189 cartes (données allégées, liens vers les images officielles)
rb-core.js          chargement, symboles [A] [C] [S] [T], lexique
rb-rules.js         guide des règles
rb-chain.js         animation de la chaîne
rb-sim.js           simulateur d'affrontement
rb-explorer.js      recherche et filtres
rb-app.js           navigation entre les onglets
```

Tous les fichiers sont à la racine : un double-clic sur `index.html` suffit pour tester, aucun serveur n'est nécessaire.

## Ce que le simulateur fait et ne fait pas

Il applique les règles de **timing** : qui a le focus, qui a la priorité, quand une Action est jouable, l'empilement et la résolution un élément à la fois, la fin sur deux passages consécutifs, les dégâts simultanés et l'assignation létale.

Il ne calcule **pas** les effets des sorts : quand une carte se résout, le journal le signale sans appliquer son texte. C'est un outil pour comprendre *quand* on peut jouer, pas un moteur de jeu.

## Mentions

Projet de fan non officiel, sans lien avec Riot Games. Riftbound et League of Legends sont des marques de Riot Games, Inc. Les données et les illustrations des cartes appartiennent à Riot Games ; les images sont affichées depuis leurs serveurs et ne sont pas redistribuées ici.

Riot ne publie pas encore Riftbound en français. Les 1189 cartes sont traduites à la main dans `rb-fr.js`, avec le texte original anglais conservé à côté, et une note explicative sur les cartes difficiles à comprendre. Le lexique de l'onglet « Les règles » donne l'équivalent français de chaque mot-clé.

Si tu veux passer à la voie officielle, Riot fournit une clé d'API sur son [portail développeur](https://developer.riotgames.com/docs/riftbound), qui donne accès aux visuels et aux traductions officielles quand elles existent.
