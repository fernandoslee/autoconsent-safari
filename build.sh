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
rm -rf dist/addon-safari
cp -r dist/addon-mv3 dist/addon-safari
cp addon/manifest.safari.json dist/addon-safari/manifest.json
cp addon/popup.safari.html dist/addon-safari/popup.safari.html
cp addon/popup.safari.js dist/addon-safari/popup.safari.js
rm -rf dist/addon-safari/devtools

# Safari doesn't support chrome.storage.session — patch to use chrome.storage.local
sed -i.bak 's/chrome\.storage\.session/chrome.storage.local/g' dist/addon-safari/background.bundle.js
rm -f dist/addon-safari/background.bundle.js.bak

# Safari: loadRules() is only called from onInstalled, which doesn't reliably
# fire for unsigned extensions. Inject a fallback that loads rules on every
# service worker startup.
sed -i.bak 's/})();$/loadRules();initConfig();})();/' dist/addon-safari/background.bundle.js
rm -f dist/addon-safari/background.bundle.js.bak

echo '  Safari → dist/addon-safari/'
