/* ============================================================
   rb-extension.js — la page à envoyer aux joueurs :
   ce que fait l'extension, comment l'installer, sous quelle licence.
   ============================================================ */
window.Extension = (function(){
  "use strict";

  var ZIP  = "https://github.com/PIPFisher/rift-explique/archive/refs/heads/main.zip";
  var REPO = "https://github.com/PIPFisher/rift-explique";
  var DOSSIER = REPO + "/tree/main/extension";

  var ATOUTS = [
    { t:"Les 1197 cartes",
      s:"Nom, texte de règles et, sur les cartes qui le méritent, une note qui explique le piège. " +
        "Tout le jeu est couvert : Origins, Proving Grounds, Spiritforged, Unleashed, Vendetta et Radiance." },
    { t:"Une terminologie tenue",
      s:"Essence runique, Puissance, Agonie, Amplification, Protection… Riot ne publie pas encore " +
        "Riftbound en français : ces termes sont un choix assumé, appliqué de la même façon sur les " +
        "1197 cartes et dans les règles, pour qu'un mot veuille toujours dire la même chose." },
    { t:"Les pictogrammes du jeu",
      s:"Énergie, runes de chaque domaine, Puissance et épuisement s'affichent avec les symboles " +
        "officiels de Riot, servis depuis leurs serveurs. Ce sont exactement les symboles que tu as sous les yeux sur la carte." },
    { t:"Le code couleur des cartes",
      s:"Sarcelle pour la façon de jouer la carte, vert pour ses capacités, rose pour son rôle au combat. " +
        "Les rappels de règles sont écrits plus petit et décalés vers la droite, pour qu'on lise l'effet avant eux." },
    { t:"Une touche pour tout couper",
      s:"La touche « ² » — ou « F2 », pour les claviers qui n'ont pas de « ² » — éteint et rallume " +
        "les traductions en pleine partie. Panneau, pastilles et liserés disparaissent d'un coup. " +
        "L'état est retenu d'une partie à l'autre." },
    { t:"Attraper le panneau au vol",
      s:"Par défaut, le panneau est <b>transparent aux clics</b> : tu cliques à travers lui comme " +
        "s'il n'était pas là, donc il ne gêne jamais le plateau. Mais du coup son lien n'est pas " +
        "cliquable non plus. « Ctrl&nbsp;+&nbsp;² » — ou « Ctrl&nbsp;+&nbsp;F2 » — le fige où il est " +
        "et le rend cliquable, le temps d'ouvrir le lien vers ce site. Échap, ou un clic ailleurs, " +
        "le remet comme avant — et ce clic-là fonctionne normalement." },
    { t:"Débutant ou habitué, au choix",
      s:"Par défaut, le panneau explique : chaque mot-clé est suivi de son rappel de règles, et " +
        "les cartes retorses reçoivent une note. Quand tu connais tes cartes, « Maj&nbsp;+&nbsp;² » " +
        "— ou « Maj&nbsp;+&nbsp;F2 », ou la touche « * » à droite d'Entrée — range tout ça et ne " +
        "laisse que le texte de la carte, traduit. Une seule ligne par effet, rien à survoler en trop." },
    { t:"Une touche qui rappelle les autres",
      s:"« Alt&nbsp;+&nbsp;² » — ou « ?&nbsp;», la convention du web — affiche la liste des " +
        "raccourcis par-dessus la page, en partie comme ailleurs. Rien à mémoriser, rien à " +
        "aller chercher. Échap ou un clic la referment. La forme avec Alt existe parce que " +
        "le point d'interrogation demande Maj sur un clavier français, et que toutes les " +
        "dispositions ne le rapportent pas de la même façon." },
    { t:"Une fenêtre de réglages",
      s:"Un clic sur l'icône de l'extension ouvre les réglages : la version installée, le nombre " +
        "de cartes chargées, les mêmes bascules que les raccourcis, et un bouton pour forcer la " +
        "mise à jour des traductions. Les bascules et les touches agissent sur le même réglage." },
    { t:"Mise à jour automatique",
      s:"Les traductions sont relues depuis ce site une fois par jour. Une correction publiée ici " +
        "arrive chez toi sans rien réinstaller." }
  ];

  var ETAPES = [
    { t:"Télécharger le dossier",
      s:'Récupère l\'archive avec le bouton ci-dessus, puis décompresse-la — clic droit, ' +
        '<em>Extraire tout</em>. Tu obtiens un dossier <code>rift-explique-main</code> qui contient ' +
        'un sous-dossier <code>extension</code>. C\'est celui-là qui compte.' },
    { t:"Ouvrir la page des extensions",
      s:'Dans Chrome, tape <code>chrome://extensions</code> dans la barre d\'adresse.' },
    { t:"Activer le mode développeur",
      s:'L\'interrupteur est en haut à droite de cette page. Il est nécessaire parce que ' +
        'l\'extension n\'est pas distribuée par le Chrome Web Store.' },
    { t:"Charger le dossier",
      s:'Clique <b>Charger l\'extension non empaquetée</b>, puis sélectionne le sous-dossier ' +
        '<code>extension</code> — pas le dossier parent.' },
    { t:"Vérifier",
      s:'Va sur <a href="https://riftatlas.com/cards" target="_blank" rel="noopener">riftatlas.com/cards</a> ' +
        'et passe la souris sur une carte : un panneau s\'ouvre à côté avec la traduction.' }
  ];

  function mount(el){
    var atouts = ATOUTS.map(function(a){
      return '<div class="xt-card"><h3>' + RB.esc(a.t) + '</h3><p>' + a.s + '</p></div>';
    }).join("");

    var etapes = ETAPES.map(function(e, i){
      return '<div class="step-item"><div class="no">' + (i + 1) + '</div>' +
        '<div><p><b>' + RB.esc(e.t) + '</b></p><p class="sub">' + e.s + '</p></div></div>';
    }).join("");

    el.innerHTML =
      '<div class="view-head">' +
        '<div class="eyebrow">Extension Chrome · gratuite</div>' +
        '<h1>Riftbound en français, au survol de la souris</h1>' +
        '<p class="lede">Sur Rift Atlas et dans son simulateur, la traduction de la carte ' +
        's\'affiche à côté d\'elle pendant que tu joues. Pas de copier-coller, pas d\'onglet à ' +
        'ouvrir, rien à retenir. Tu passes la souris dessus et c\'est lu.</p>' +
      '</div>' +

      '<section class="panel xt-hero">' +
        '<div class="xt-hero-main">' +
          '<a class="xt-dl" href="' + ZIP + '">Télécharger l\'extension</a>' +
          '<p class="xt-dl-sub">Archive du projet · installation en 5 minutes, une seule fois</p>' +
        '</div>' +
        '<ul class="xt-facts">' +
          '<li><b>1197</b> cartes traduites</li>' +
          '<li><b>967</b> rappels de règles</li>' +
          '<li><b>834</b> notes explicatives</li>' +
          '<li><b>0</b> donnée envoyée</li>' +
        '</ul>' +
      '</section>' +

      '<section class="panel">' +
        '<h2>Ce que ça fait</h2>' +
        '<div class="xt-grid">' + atouts + '</div>' +
      '</section>' +

      '<section class="panel">' +
        '<h2 style="margin-bottom:4px">Installation</h2>' +
        '<p class="lede" style="margin-bottom:12px">Cinq étapes, une seule fois. ' +
        'Rien de risqué : l\'extension ne lit que les pages de Rift Atlas.</p>' +
        '<div class="steps-list">' + etapes + '</div>' +
        '<p class="xt-warn">Chrome affiche un bandeau « Désactiver les extensions en mode ' +
        'développeur » à chaque démarrage. C\'est normal pour une extension installée ainsi : ' +
        'ferme-le, ne clique pas sur « Désactiver ».</p>' +
      '</section>' +

      '<section class="panel">' +
        '<h2>Vie privée</h2>' +
        '<p class="lede">L\'extension <b>ne collecte rien, ne mesure rien, n\'envoie nulle part ce ' +
        'que tu fais</b> : pas de compte, pas de statistiques, pas de suivi. Elle ne modifie pas non ' +
        'plus le contenu des sites, elle ajoute un panneau de lecture par-dessus. Elle ne ' +
        's\'active que sur riftatlas.com et play.riftatlas.com, et nulle part ailleurs.</p>' +
        '<p class="lede">Elle fait <b>deux requêtes sortantes</b>, autant le dire honnêtement : ' +
        'le fichier de traductions, sur ce site, une fois par jour ; et les pictogrammes officiels ' +
        'd\'énergie, de runes et de puissance, servis par le serveur de Riot au moment où un ' +
        'panneau s\'affiche. Comme toute requête web, elles font connaître ton adresse IP à GitHub ' +
        'et à Riot. Rien d\'autre n\'est transmis, et rien ne dit à ces serveurs quelle carte tu ' +
        'consultes.</p>' +
      '</section>' +

      '<section class="panel xt-licence">' +
        '<h2>Licence et mentions</h2>' +
        '<p class="lede">Projet de fan non officiel, sans lien avec Riot Games ni avec Rift Atlas. ' +
        'Riftbound et League of Legends sont des marques de Riot&nbsp;Games,&nbsp;Inc. Le texte ' +
        'original des cartes, leurs illustrations et leurs pictogrammes appartiennent à Riot Games ; ' +
        'ce projet ne les redistribue pas, il les affiche depuis leurs serveurs.</p>' +
        '<p class="lede">La <b>traduction française</b>, les <b>notes explicatives</b>, les choix de ' +
        'terminologie et le code sont l\'œuvre de <b>Fisher</b>, publiés sous licence ' +
        '<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr" target="_blank" rel="noopener">' +
        'CC BY-NC-ND 4.0</a>.</p>' +
        '<div class="xt-lic-grid">' +
          '<div class="xt-lic ok"><h3>Tu peux</h3><ul>' +
            '<li>utiliser le site et l\'extension librement, pour jouer</li>' +
            '<li>partager le lien, l\'archive, l\'extension telle quelle</li>' +
            '<li>en parler, la recommander, la montrer en tournoi</li>' +
          '</ul></div>' +
          '<div class="xt-lic no"><h3>Sans accord écrit, tu ne peux pas</h3><ul>' +
            '<li>retirer ou masquer le crédit</li>' +
            '<li>republier les traductions sous un autre nom</li>' +
            '<li>les intégrer à un autre site, une autre extension ou une base de données</li>' +
            '<li>en faire un usage commercial, ni en diffuser une version modifiée</li>' +
          '</ul></div>' +
        '</div>' +
        '<p class="hint">Code source et texte complet de la licence : ' +
          '<a href="' + REPO + '" target="_blank" rel="noopener">le dépôt du projet ↗</a> · ' +
          '<a href="' + DOSSIER + '" target="_blank" rel="noopener">le dossier de l\'extension ↗</a></p>' +
      '</section>';
  }

  return { mount: mount };
})();
