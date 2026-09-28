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

chrome.runtime.onInstalled.addListener(reinjecter);
chrome.runtime.onStartup.addListener(reinjecter);
