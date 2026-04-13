#!/bin/bash
set -ex

ESBUILD="node_modules/.bin/esbuild --bundle"

$ESBUILD --format=iife --target=es2021 playwright/content.ts --outfile=dist/autoconsent.playwright.js
$ESBUILD --format=esm --target=es2021 lib/web-extra.ts --outfile=dist/autoconsent.extra.esm.js
$ESBUILD --format=cjs --target=es2021 --platform=node lib/web-extra.ts --outfile=dist/autoconsent.extra.cjs.js
$ESBUILD --format=esm --target=es2021 lib/web.ts --outfile=dist/autoconsent.esm.js
$ESBUILD --format=cjs --target=es2021 --platform=node lib/web.ts --outfile=dist/autoconsent.cjs.js

# Generate type declarations for consumers
npx tsc -p tsconfig.build.json

# Extension
$ESBUILD addon/background.ts --outfile=dist/addon-mv3/background.bundle.js
$ESBUILD addon/content.ts --outfile=dist/addon-mv3/content.bundle.js
$ESBUILD addon/popup.ts --outfile=dist/addon-mv3/popup.bundle.js
$ESBUILD addon/devtools/panel.ts --outfile=dist/addon-mv3/devtools/panel.js

## Copy extension files into place
mkdir -p dist/addon-firefox
cp -r dist/addon-mv3/*.js dist/addon-firefox/
cp -r addon/icons dist/addon-mv3/
cp -r addon/icons dist/addon-firefox/
cp rules/rules.json dist/addon-mv3/
cp rules/compact-rules.json dist/addon-mv3/
cp rules/rules.json dist/addon-firefox/
cp rules/compact-rules.json dist/addon-firefox/
cp addon/popup.html dist/addon-mv3/
cp addon/popup.html dist/addon-firefox/
cp -r addon/devtools dist/addon-mv3/
cp -r addon/devtools dist/addon-firefox/
cp addon/manifest.mv3.json dist/addon-mv3/manifest.json
cp addon/manifest.firefox.json dist/addon-firefox/manifest.json
cp node_modules/bulma/css/bulma.min.css dist/addon-mv3/devtools/

# ── Safari ────────────────────────────────────────────────────────────────────
cp -r dist/addon-mv3 dist/addon-safari
cp addon/manifest.safari.json dist/addon-safari/manifest.json
cp addon/popup.safari.html dist/addon-safari/popup.safari.html
cp addon/popup.safari.js dist/addon-safari/popup.safari.js
rm -rf dist/addon-safari/devtools

# Safari rules-updater: fetches latest rules from CDN every 24 hours
node -e "
const code = \`
(function() {
  const CDN = 'https://cdn.jsdelivr.net/npm/@nicedishy/nicedishy-autoconsent-rules@latest';
  const INTERVAL = 24 * 60 * 60 * 1000;
  async function update() {
    try {
      const [rules, compact] = await Promise.all([
        fetch(CDN + '/rules.json').then(r => r.json()),
        fetch(CDN + '/compact-rules.json').then(r => r.json()),
      ]);
      const data = { rules, compact, generated_at: new Date().toISOString() };
      chrome.storage.local.set({ rules: data });
    } catch (e) { /* silent */ }
  }
  chrome.runtime.onInstalled.addListener(() => update());
  setInterval(update, INTERVAL);
  // Also update when the service worker wakes up (if stale)
  chrome.storage.local.get('rules', (result) => {
    if (!result.rules || !result.rules.generated_at) return update();
    const age = Date.now() - new Date(result.rules.generated_at).getTime();
    if (age > INTERVAL) update();
  });
})();
\`;
require('fs').writeFileSync('dist/addon-safari/rules-updater.js', code);
"

echo '  Safari → dist/addon-safari/'
