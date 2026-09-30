# Riftbound en français — extension Chrome

Affiche la **traduction française d'une carte au survol de la souris**, sur [Rift Atlas](https://riftatlas.com) et dans le simulateur de parties [play.riftatlas.com](https://play.riftatlas.com).

Les 1197 cartes du jeu sont traduites : nom, texte de règles, et une note explicative sur les cartes difficiles à comprendre.

Les mots-clés suivent la **terminologie officielle de la VF** (Agonie, Amplification, Protection, Essence runique…) et reprennent le **code couleur imprimé sur les cartes** : sarcelle pour la façon de jouer la carte, vert pour ses capacités, rose pour son rôle au combat, gris pour les actions de jeu.

---

## Installation (5 minutes, une seule fois)

L'extension n'est pas sur le Chrome Web Store, elle s'installe donc « à la main ». Rien de risqué, mais il y a quatre étapes.

**1. Télécharger le dossier**

Va sur https://github.com/PIPFisher/rift-explique → bouton vert **Code** → **Download ZIP**.

**2. Décompresser**

Clic droit sur le fichier téléchargé → *Extraire tout*. Tu obtiens un dossier `rift-explique-main`, qui contient un sous-dossier **`extension`**. C'est celui-là qui nous intéresse.

**3. Charger l'extension dans Chrome**

- Ouvre `chrome://extensions` (à taper dans la barre d'adresse).
- Active **Mode développeur**, en haut à droite.
- Clique **Charger l'extension non empaquetée**.
- Sélectionne le dossier **`extension`** (pas le dossier parent).

**4. Vérifier**

Va sur [riftatlas.com/cards](https://riftatlas.com/cards) et passe la souris sur une carte : un panneau doit s'ouvrir avec la traduction.

> **Ne déplace plus ce dossier après l'avoir chargé, et ne le supprime pas.**
> Chrome ne copie pas l'extension : il garde le chemin du dossier et relit les
> fichiers à chaque démarrage. Le déplacer, le renommer ou vider son dossier de
> téléchargements désactive l'extension sans prévenir. Range-le une bonne fois
> quelque part de durable avant de le charger.

> Chrome affichera un bandeau « Désactiver les extensions en mode développeur » à chaque démarrage. C'est normal pour une extension installée ainsi, il suffit de le fermer. Ne clique pas sur « Désactiver ».

---

## Utilisation

| Où | Ce qui se passe |
|---|---|
| Grille de cartes sur Rift Atlas | Un panneau s'ouvre à côté de la carte survolée |
| Fiche d'une carte | Le panneau est inséré dans la page, sous le titre |
| Simulateur en partie | Le panneau s'ouvre à côté de la carte, immédiatement, en plus grand |

Le panneau s'ouvre **toujours au même endroit** : collé au bord gauche de la
carte, aligné sur son haut. Une seule exception, les cartes du bord gauche de
l'écran, où il passe à droite. Jamais au-dessus ni en dessous, pour qu'on
finisse par savoir où regarder sans y penser.

Le côté gauche n'est pas un hasard. En partie, Rift Atlas affiche son propre
agrandissement de la carte survolée, systématiquement à sa droite, dans un
calque placé tout en haut de la pile. En prenant la gauche, le panneau ne lui
dispute pas la place : la traduction d'un côté, la carte agrandie de l'autre.
Pour les rares cas où le chevauchement reste inévitable, le panneau monte à
la même hauteur de pile et passe devant, plutôt que de disparaître derrière.

Il laisse passer les clics : même posé sur le plateau, il n'empêche pas de
jouer.

## Les gestes

Si tu ne devais en retenir qu'un : **`Alt`+`²`** affiche tous les autres,
par-dessus la page, où que tu sois. Échap ou un clic le referment.

La touche **`?`** fait la même chose — c'est la convention du web, celle que
GitHub et Gmail emploient. Mais elle demande `Maj` sur un clavier français, et
certaines dispositions ne rapportent pas le caractère correctement dans ce
cas ; `Alt`+`²` ne dépend d'aucun caractère et marche partout.

Chaque geste répond à **deux touches** : `²` (au-dessus de Tab) et `F2`. La
première est la plus rapide sur un clavier français ; la seconde existe et
porte le même nom sur tous les claviers.

| Touche | Effet |
|---|---|
| **`Alt`+`²`** / **`Alt`+`F2`**, ou **`?`** | Affiche le rappel des raccourcis, par-dessus la page |
| **`²`** ou **`F2`** | Coupe et rallume les traductions |
| **`Maj`+`²`** / **`Maj`+`F2`**, ou **`*`** (à droite d'Entrée) | Bascule entre panneau complet et texte de la carte seul |
| **`Ctrl`+`²`** / **`Ctrl`+`F2`** | Fige le panneau sur place et le rend cliquable |

**`²`** (ou `F2`) fait tout disparaître : le panneau, les pastilles FR et les liserés
dorés.

**`Maj`+`²`** (ou `Maj`+`F2`) ne coupe rien, il allège. Par défaut le panneau explique : chaque
mot-clé est suivi de son rappel de règles entre parenthèses, et les cartes
difficiles portent une note. En mode sobre, ces deux choses disparaissent et il
ne reste que le texte de la carte, traduit — ce que lit quelqu'un qui connaît
déjà ses cartes et veut juste aller vite.

**`Ctrl`+`²`** (ou `Ctrl`+`F2`) cloue le panneau où il est. Normalement il suit la souris et
disparaît dès qu'on quitte la carte, ce qui rend le lien vers le site
inatteignable : le panneau laisse passer les clics, pour ne jamais bloquer le
plateau. Figé, il reste en place, reprend les clics et son lien devient
cliquable. Un liseré doré et un rappel sous le panneau signalent l'état.

On en sort par **`Échap`**, par le même raccourci à nouveau, ou simplement en
cliquant ailleurs — ce clic-là atteint quand même ce qu'il visait, donc rien
n'est jamais bloqué. Le panneau se libère aussi tout seul dès qu'on clique sur
son lien, et l'état n'est jamais retenu d'une session à l'autre.

Un bref message confirme l'état à chaque fois. L'affichage et le mode sont
retenus d'une partie à l'autre, séparément.

Les touches sont ignorées pendant que tu écris, donc elles ne gênent pas le
chat du simulateur.

Pour en changer, modifier `config.toggleKey` (la touche principale),
`config.altKey` (sa doublure) et `config.modeKey` dans `fr.json`, avec un code
de touche (`"KeyT"`, `"F2"`, `"Backslash"`…). C'est un code de **position**,
pas de caractère : `Backquote` désigne la touche au-dessus de Tab, quelle que
soit la lettre imprimée dessus. Mettre `config.altKey` à `""` supprime la
seconde touche. `Maj` et `Ctrl` restent toujours valables sur l'une comme sur
l'autre.

Pour le fixer à un bord de l'écran plutôt qu'à côté de la carte, changer
`config.side` dans `fr.json` : `"auto"` (par défaut), `"left"` ou `"right"`.

Une pastille **FR** marque les cartes déjà traduites dans les grilles, et un liseré doré les entoure en partie.

## La fenêtre de réglages

Un clic sur l'icône de l'extension, à droite de la barre d'adresse, ouvre une
petite fenêtre : la version installée, le nombre de cartes chargées, les deux
mêmes bascules que les raccourcis (traductions, explications), le rappel des
trois gestes et un bouton **Forcer la mise à jour** qui vide le cache et va
rechercher les traductions tout de suite.

Les bascules et les raccourcis agissent sur le même réglage : changer l'un
met l'autre à jour immédiatement, sans recharger la page.

---

## Mise à jour des traductions

**Aucune réinstallation nécessaire.** L'extension va chercher les traductions sur le site :

```
https://pipfisher.github.io/rift-explique/fr.json
```

Elle les garde en cache 24 heures, puis les rafraîchit toute seule. La copie embarquée dans le dossier ne sert que de secours, si le site est injoignable.

Pour forcer une mise à jour immédiate : icône de l'extension → **Forcer la mise à jour**.

---

## Fichiers

```
manifest.json   déclaration de l'extension (Manifest V3)
content.js      détection des cartes, panneau, cache, raccourcis
panel.css       habillage du panneau et de la pastille FR
popup.html      fenêtre de réglages ouverte par l'icône
popup.js        ses bascules et le bouton de mise à jour
background.js   réinjection du script après une mise à jour
fr.json         copie de secours des traductions
icon*.png       icône de l'extension, en quatre tailles
```

## Comment une carte est reconnue

Rift Atlas met le numéro de collection dans ses liens (`/card/OGN-004`) et dans le nom de ses visuels (`/cards/original/OGN-004.webp`). L'extension lit ce numéro et cherche `OGN-004` dans `fr.json`. En secours, elle cherche par nom anglais, ce qui permettra de brancher d'autres sites plus tard.

Dans le simulateur, les visuels de cartes ne reçoivent pas les événements de souris : l'extension détecte alors la carte par sa position à l'écran.

## Limites connues

- Rift Atlas peut changer la structure de ses pages sans prévenir. Si le panneau ne s'ouvre plus, c'est la détection dans `content.js` qu'il faudra ajuster.
- L'extension ne fonctionne que sur `riftatlas.com` et `play.riftatlas.com`.

## Vie privée

L'extension **ne collecte rien, ne mesure rien, n'envoie nulle part ce que tu
fais** : pas de compte, pas de statistiques, pas de suivi. Elle ne modifie pas
non plus le contenu des sites, elle ajoute un panneau de lecture par-dessus.

Deux requêtes sortantes, à connaître pour que ce soit dit honnêtement :

- le fichier de traductions, sur `pipfisher.github.io` — une fois par jour ;
- les pictogrammes officiels (énergie, runes, puissance), servis par le serveur
  de Riot `assetcdn.rgpub.io` au moment où un panneau s'affiche.

Comme toute requête web, elles font connaître ton adresse IP à GitHub et à Riot.
Rien d'autre n'est transmis, et rien ne dit à ces serveurs quelle carte tu
consultes.

## Licence et mentions

Projet de fan non officiel, sans lien avec Riot Games ni avec Rift Atlas.
Riftbound et League of Legends sont des marques de Riot Games, Inc. Le texte
original des cartes et les illustrations leur appartiennent.

La **traduction française**, les **notes explicatives** et le code sont
l'œuvre de Fisher, sous licence **CC BY-NC-ND 4.0** : libre d'usage et de
partage tel quel, avec crédit ; pas de republication sous un autre nom, pas
d'usage commercial, pas de version modifiée. Voir `LICENSE.md` à la racine du
dépôt.
