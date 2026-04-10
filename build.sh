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

## Safari build target
mkdir -p dist/addon-safari
cp dist/addon-mv3/background.bundle.js dist/addon-safari/
cp dist/addon-mv3/content.bundle.js    dist/addon-safari/
cp dist/addon-mv3/popup.bundle.js      dist/addon-safari/
cp -r addon/icons                      dist/addon-safari/
cp rules/rules.json                    dist/addon-safari/
cp rules/compact-rules.json            dist/addon-safari/
node -e "
const fs = require('fs');
const f = 'dist/addon-safari/compact-rules.json';
const d = JSON.parse(fs.readFileSync(f, 'utf8'));
d.generated_at = new Date().toISOString();
fs.writeFileSync(f, JSON.stringify(d));
"
cp addon/popup.safari.html             dist/addon-safari/popup.html
cp addon/popup.safari.js               dist/addon-safari/popup.safari.js
cp addon/manifest.safari.json          dist/addon-safari/manifest.json
# devtools/ intentionally omitted — Safari has no chrome.devtools API

## Generate rules auto-updater content script (Safari only)
## Runs once per 24 h in the top frame; fetches compact-rules.json and
## rules.json from the CDN and writes them into chrome.storage.local so
## rule updates reach users without a full app rebuild.
cat > dist/addon-safari/rules-updater.js << 'ENDOFSCRIPT'
(async () => {
  const COMPACT_URL =
    "https://cdn.jsdelivr.net/gh/fernandoslee/autoconsent-safari@main/rules/compact-rules.json";
  const FULL_URL =
    "https://cdn.jsdelivr.net/gh/fernandoslee/autoconsent-safari@main/rules/rules.json";
  const INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 hours

  try {
    const { rules_checked_at: last = 0 } =
      await chrome.storage.local.get("rules_checked_at");

    if (Date.now() - last < INTERVAL_MS) return;

    // Stamp before fetching so parallel tabs don't also trigger a fetch
    await chrome.storage.local.set({ rules_checked_at: Date.now() });

    const [cr, fr] = await Promise.all([fetch(COMPACT_URL), fetch(FULL_URL)]);
    if (!cr.ok || !fr.ok) return;

    const [compact, full] = await Promise.all([cr.json(), fr.json()]);

    await chrome.storage.local.set({
      rules: compact,
      fullRules: full.autoconsent,
    });
  } catch (_) {
    // Silent fail — bundled rules remain in use
  }
})();
ENDOFSCRIPT
