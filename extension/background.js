/* Réinjection après un rechargement de l'extension.
   Chrome n'injecte le script que dans les pages ouvertes APRÈS coup : les
   onglets déjà ouverts continuent d'exécuter l'ancienne version, sans le
   dire. On remet donc le script à jour dans tous les onglets concernés dès
   que l'extension est installée ou rechargée. */

const SITES = [
  "https://riftatlas.com/*",
  "https://www.riftatlas.com/*",
  "https://play.riftatlas.com/*"
];

/* Le script de contenu garde les traductions en cache pendant 24 h. Une
   nouvelle version de l'extension apporte une copie embarquée plus récente,
   mais le cache la masquait jusqu'au lendemain : on installait la mise à jour
   sans la voir. On périme donc le cache dès l'installation ou le rechargement,
   exactement ce que fait le bouton « Forcer la mise à jour ». */
async function perimerCache() {
  try { await chrome.storage.local.remove(["at"]); } catch (e) {}
}

async function reinjecter() {
  let onglets = [];
  try { onglets = await chrome.tabs.query({ url: SITES }); } catch (e) { return; }
  for (const t of onglets) {
    if (!t.id) continue;
    try {
      // le CSS d'abord : sinon le panneau apparaît une fraction de seconde nu
      await chrome.scripting.insertCSS({ target: { tabId: t.id }, files: ["panel.css"] });
      await chrome.scripting.executeScript({ target: { tabId: t.id }, files: ["content.js"] });
    } catch (e) {
      // onglet déchargé, page d'erreur, navigation en cours : sans importance
    }
  }
}

// l'ordre compte : le cache doit être périmé avant que le script réinjecté
// ne relise les données, sinon il repart sur l'ancienne copie
chrome.runtime.onInstalled.addListener(async function () {
  await perimerCache();
  await reinjecter();
});
chrome.runtime.onStartup.addListener(reinjecter);
