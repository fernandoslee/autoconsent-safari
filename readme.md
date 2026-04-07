# Autoconsent for Safari

A Safari extension that automatically opts out of cookie consent popups. This is a private fork of [duckduckgo/autoconsent](https://github.com/duckduckgo/autoconsent) that adds a Safari distribution target.

> **Current version:** 2026.3.31  
> **Status:** Working locally. Handles the vast majority of GDPR cookie banners automatically.

---

## What it does

When you visit a website with a cookie consent popup, the extension silently clicks "Reject all" (or equivalent) for you. It covers 285+ Consent Management Providers (CMPs) — OneTrust, Sourcepoint, Cookiebot, and hundreds of others — plus thousands of site-specific rules maintained by the DuckDuckGo team.

Sites with no reject option get their popup hidden via cosmetic rules. Sites with no matching rule are left untouched.

---

## Dependencies

### System requirements

| Dependency | Version | Notes |
|---|---|---|
| macOS | 13.0+ (Ventura) | Required to run the extension |
| Safari | 16.4+ | MV3 extension support |
| Xcode | 15+ | Free from the Mac App Store |
| Node.js | LTS (18+) | Install via [nodejs.org](https://nodejs.org) or `brew install node` |
| npm | 9+ | Bundled with Node.js |

### Node packages

Installed automatically by `npm install`. Key packages:

| Package | Purpose |
|---|---|
| `esbuild` | Bundles TypeScript source into extension JS files |
| `typescript` | Type checking |
| `playwright` | E2E test runner |
| `web-test-runner` | Unit test runner |

---

## First-time setup

### 1. Clone and install Node dependencies

```bash
git clone https://github.com/fernandoslee/autoconsent-safari.git
cd autoconsent-safari
npm install
```

### 2. Build the Safari extension bundle

```bash
npm run prepublish
```

This compiles TypeScript, bundles all rules, and produces `dist/addon-safari/` — the web extension bundle that Xcode will package into the macOS app.

### 3. Set up Xcode (first time only)

If you've never used Xcode from the command line before, run these once:

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept
sudo xcodebuild -runFirstLaunch
```

### 4. Generate the Xcode project (first time only)

```bash
xcrun safari-web-extension-converter \
  dist/addon-safari \
  --project-location xcode/ \
  --app-name "AutoconsentSafari" \
  --bundle-identifier "com.yourorg.autoconsent-safari" \
  --macos-only \
  --no-open
```

### 5. Fix bundle identifier (first time only)

The converter generates a mismatched bundle ID for the host app. Fix it with a find-and-replace in the project file:

```bash
sed -i '' \
  's/PRODUCT_BUNDLE_IDENTIFIER = com.yourorg.AutoconsentSafari;/PRODUCT_BUNDLE_IDENTIFIER = "com.yourorg.autoconsent-safari";/g' \
  xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj/project.pbxproj
```

### 6. Build the macOS app

```bash
xcodebuild build \
  -project xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj \
  -scheme AutoconsentSafari \
  -configuration Debug \
  CODE_SIGN_IDENTITY="-" \
  CODE_SIGNING_REQUIRED=NO
```

The built app lands in Xcode's DerivedData directory.

### 7. Register the extension with Safari

```bash
open ~/Library/Developer/Xcode/DerivedData/AutoconsentSafari-*/Build/Products/Debug/AutoconsentSafari.app
```

Opening the app registers it with Safari. You only need to do this once, or after a rebuild.

### 8. Enable in Safari

1. Go to **Safari → Settings → Extensions**
2. Enable **Autoconsent**
3. Set Website Access to **Allow on All Websites**

> Safari will show an "unsigned extension" warning for local builds — this is expected without a paid Apple Developer account.

---

## Rebuilding after updates

Rules sync automatically from upstream every 24 hours. After pulling, a rebuild and re-open is all that's needed — steps 4 and 5 are one-time only.

```bash
git pull
npm run prepublish

xcodebuild build \
  -project xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj \
  -scheme AutoconsentSafari \
  -configuration Debug \
  CODE_SIGN_IDENTITY="-" \
  CODE_SIGNING_REQUIRED=NO

open ~/Library/Developer/Xcode/DerivedData/AutoconsentSafari-*/Build/Products/Debug/AutoconsentSafari.app
```

If the rebuild doesn't take effect in Safari, try disabling the extension, quitting Safari fully (`Cmd+Q`), reopening Safari, and re-enabling the extension.

---

## How it works

The extension injects a content script on every page at `document_start`. The script checks the page against 285+ CMP rules. When a match is found, it automatically clicks the reject/decline button. If the popup has no reject option, it is hidden via CSS.

The background service worker loads all rules on install and responds to the content script with the applicable ruleset for each page.

Rules are maintained by DuckDuckGo upstream and synced into this fork daily.

---

## Current state & known limitations

| Area | Status |
|---|---|
| GDPR cookie banners | Working — covers all major CMPs |
| US-only popups (CCPA) | Partial — depends on the CMP |
| Sites with no reject button | Handled via cosmetic (hide) rules |
| Unsigned local build | Working — Safari shows a one-time warning |
| Signed/notarized DMG | Not set up — requires Apple Developer account ($99/yr) |
| App Store distribution | Not planned |

Sites with no matching rule are left untouched. Pulling regularly keeps rule coverage up to date as the upstream project adds rules continuously.

---

## Upstream sync

This fork tracks [duckduckgo/autoconsent](https://github.com/duckduckgo/autoconsent) via `.github/workflows/upstream-sync.yml`, which runs daily at 02:00 UTC and merges upstream `main` into this fork.

- **Clean merge** → pushed automatically
- **Conflict** → a PR is opened for manual resolution

Conflicts are rare — the fork's changes to `build.sh` and `update_version.js` are append-only at positions upstream never touches.

---

## Fork structure

Only four files differ from upstream:

| File | Change |
|---|---|
| `addon/manifest.safari.json` | Safari-specific manifest (no `browsingData`, no `devtools_page`) |
| `build.sh` | +10 lines appended — produces `dist/addon-safari/` |
| `update_version.js` | +1 line — stamps `manifest.safari.json` on `npm version` |
| `.gitignore` | +1 line — excludes `xcode/.../Resources/` (rebuilt by Xcode) |

Everything else is byte-for-byte identical to upstream.

---

## Remotes

```
origin    https://github.com/fernandoslee/autoconsent-safari.git  (this fork)
upstream  https://github.com/duckduckgo/autoconsent.git           (DuckDuckGo)
```

## License

MPLv2 — same as upstream.
