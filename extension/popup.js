/* Fenêtre de réglages. Elle écrit dans chrome.storage ; le script de contenu
   écoute ces changements et s'applique aussitôt, sans recharger la page. */
(function () {
  "use strict";

  var bActif = document.getElementById("bActif");
  var bMode  = document.getElementById("bMode");
  var etat   = document.getElementById("etat");

  function dit(t) { etat.textContent = t; setTimeout(function () { etat.textContent = ""; }, 2600); }

  function peint(bouton, actif, oui, non) {
    bouton.setAttribute("aria-pressed", actif ? "true" : "false");
    bouton.textContent = actif ? oui : non;
  }

  try {
    var m = chrome.runtime.getManifest();
    document.getElementById("version").textContent = m.version;
  } catch (e) {}

  chrome.storage.local.get(["actif", "sobre", "fr"], function (r) {
    peint(bActif, !(r && r.actif === false), "Activées", "Coupées");
    peint(bMode, !(r && r.sobre), "Affichées", "Masquées");
    var n = r && r.fr && r.fr.byCode ? Object.keys(r.fr.byCode).length : null;
    document.getElementById("cartes").textContent = n ? n + " entrées" : "copie embarquée";
  });

  bActif.addEventListener("click", function () {
    var futur = bActif.getAttribute("aria-pressed") !== "true";
    chrome.storage.local.set({ actif: futur });
    peint(bActif, futur, "Activées", "Coupées");
  });

  bMode.addEventListener("click", function () {
    var futur = bMode.getAttribute("aria-pressed") !== "true";   // affichées = sobre faux
    chrome.storage.local.set({ sobre: !futur });
    peint(bMode, futur, "Affichées", "Masquées");
  });

  document.getElementById("bMaj").addEventListener("click", function () {
    // on périme le cache : le prochain chargement de page ira rechercher le fichier
    chrome.storage.local.remove(["at"], function () {
      dit("Fait — recharge la page de Rift Atlas.");
    });
  });
})();
