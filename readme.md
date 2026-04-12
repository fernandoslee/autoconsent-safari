# Autoconsent for Safari

A Safari extension that automatically opts out of cookie consent popups. This is an unofficial, personal fork of [duckduckgo/autoconsent](https://github.com/duckduckgo/autoconsent) that adds a Safari distribution target.

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
[![Upstream sync](https://github.com/fernandoslee/autoconsent-safari/actions/workflows/upstream-sync.yml/badge.svg)](https://github.com/fernandoslee/autoconsent-safari/actions/workflows/upstream-sync.yml)

---

## What it does

When you visit a website with a cookie consent popup, the extension silently clicks "Reject all" (or equivalent) for you. It covers 285+ Consent Management Providers (CMPs) — OneTrust, Sourcepoint, Cookiebot, and hundreds of others — plus thousands of site-specific rules maintained by the DuckDuckGo team.

Sites with no reject option get their popup hidden via cosmetic rules. Sites with no matching rule are left untouched.

---

## Installation options

There are two ways to install this extension. **Building from source is strongly recommended** — it gives you full visibility into what you are running. The pre-built option is provided for convenience but requires you to explicitly bypass macOS security controls, which carries risk.

---

## Option A — Build from source (recommended)

Building from source means you compile the code yourself, so you know exactly what is being installed. This is the safest approach.

### Requirements

| Dependency | Version | Notes |
|---|---|---|
| macOS | 13.0+ (Ventura) | |
| Safari | 16.4+ | MV3 extension support |
| Xcode | 15+ | Free from the Mac App Store (~7 GB) |
| Node.js | LTS (18+) | [nodejs.org](https://nodejs.org) or `brew install node` |
| npm | 9+ | Bundled with Node.js |

### Automated setup (recommended)

A single script handles the entire process:

```bash
git clone https://github.com/fernandoslee/autoconsent-safari.git
cd autoconsent-safari
./setup.sh
```

`setup.sh` will check all dependencies, build the JavaScript bundle, generate the Xcode project on first run, build the app, and open it to register the extension with Safari.

### Manual setup (step by step)

If you prefer to run each step yourself:

**1. Clone and install dependencies**

```bash
git clone https://github.com/fernandoslee/autoconsent-safari.git
cd autoconsent-safari
npm install
```

**2. Build the Safari extension bundle**

```bash
npm run prepublish
```

Compiles TypeScript, bundles all rules, and produces `dist/addon-safari/`.

**3. Set up Xcode command-line tools (first time only)**

```bash
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept
sudo xcodebuild -runFirstLaunch
```

**4. Generate the Xcode project (first time only)**

```bash
xcrun safari-web-extension-converter \
  dist/addon-safari \
  --project-location xcode/ \
  --app-name "AutoconsentSafari" \
  --bundle-identifier "com.yourorg.autoconsent-safari" \
  --macos-only \
  --no-open
```

**5. Fix bundle identifier (first time only)**

```bash
sed -i '' \
  's/PRODUCT_BUNDLE_IDENTIFIER = com.yourorg.AutoconsentSafari;/PRODUCT_BUNDLE_IDENTIFIER = "com.yourorg.autoconsent-safari";/g' \
  xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj/project.pbxproj
```

**6. Build the app**

```bash
xcodebuild build \
  -project xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj \
  -scheme AutoconsentSafari \
  -configuration Debug \
  CODE_SIGN_IDENTITY="-" \
  CODE_SIGNING_REQUIRED=NO
```

**7. Open the app to register the extension**

```bash
open ~/Library/Developer/Xcode/DerivedData/AutoconsentSafari-*/Build/Products/Debug/AutoconsentSafari.app
```

**8. Enable in Safari**

Go to **Safari → Settings → Extensions**, enable **Autoconsent**, and set Website Access to **Allow on All Websites**.

Safari will show an "unsigned extension" warning — this is expected for local builds without a paid Apple Developer account ($99/year).

### Rebuilding after updates

Rules sync automatically from upstream daily. After pulling:

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

Steps 4 and 5 are one-time only. If Safari doesn't pick up the update, disable the extension, quit Safari (`Cmd+Q`), reopen, and re-enable.

---

## Option B — Pre-built download

> **Read this section carefully before proceeding.**

A pre-built unsigned `.app` is published automatically by CI on every update and is available on the [Releases page](https://github.com/fernandoslee/autoconsent-safari/releases/tag/latest).

### Why it is unsigned

Distributing a properly signed and notarized macOS app requires an Apple Developer Program membership ($99/year). This is a personal project with no commercial intent, so no certificate has been purchased. The app is built by a GitHub Actions CI pipeline from the source code in this repository, but it has not been reviewed or approved by Apple.

### Security implications

macOS includes Gatekeeper, a security feature that blocks apps not signed by a verified developer. Installing this app requires you to explicitly disable Gatekeeper's protection for it. **You should understand what this means before proceeding:**

- You are running software that has not been verified by Apple.
- The `xattr -cr` command below removes the quarantine flag that macOS uses to warn you about unverified downloads. Once removed, macOS will not prompt you again.
- If you have any doubt about the source of the file you downloaded, do not proceed. Build from source instead.

The risk is mitigated by the fact that the source code is fully open, the CI build pipeline is public and auditable, and the extension only reads web page content to detect and dismiss cookie banners — it does not have access to passwords, files, or other sensitive data.

### Installation steps

**1.** Download `AutoconsentSafari-*-unsigned.zip` from the [Releases page](https://github.com/fernandoslee/autoconsent-safari/releases/tag/latest) and unzip it.

**2.** Verify the download came from this repository's CI pipeline (check the release was published by `github-actions[bot]`).

**3.** Remove the macOS quarantine flag:

```bash
xattr -cr AutoconsentSafari.app
```

**4.** Open the app:

```bash
open AutoconsentSafari.app
```

Or double-click it in Finder. macOS may still show a warning — click **Open** to proceed.

**5.** In Safari: **Settings → Extensions → Enable Autoconsent → Allow on All Websites**.

---

## How it works

The extension injects a content script on every page at `document_start`. The script checks the page against 285+ CMP rules. When a match is found, it automatically clicks the reject/decline button. If the popup has no reject option, it is hidden via CSS.

The background service worker loads all rules on install and responds to the content script with the applicable ruleset for each page.

---

## Rules auto-update

Rules are decoupled from the app binary and update automatically — no app reinstall required.

A lightweight content script (`rules-updater.js`) runs once per 24 hours in the background while you browse normally. It fetches the latest `compact-rules.json` and `rules.json` directly from this repository via the [jsDelivr CDN](https://www.jsdelivr.com/) and writes them into the extension's local storage. On the next page load, the updated rules are active.

| Component | How it updates |
|---|---|
| Rules (285+ CMPs) | Automatically, once per 24 h — no action needed |
| Engine (JS bundle) | Requires downloading a new release or rebuilding |

The engine (the code that interprets and executes rules) changes infrequently — only when DuckDuckGo modifies the detection or opt-out logic. Rules change weekly as new CMPs are added or existing ones are fixed.

**Update timeline:** Upstream pushes rules → this fork syncs within 24 h → jsDelivr CDN picks up the change within ~12 h → your extension fetches the update on its next 24 h check. Maximum staleness: ~60 hours.

**Fallback:** If the CDN fetch fails (offline, network error), the previously stored rules remain in use. The extension never stops working due to a failed update.

---

## Current state & known limitations

| Area | Status |
|---|---|
| GDPR cookie banners | Working — covers all major CMPs |
| US-only popups (CCPA) | Partial — depends on the CMP |
| Sites with no reject button | Handled via cosmetic (hide) rules |
| Sites with no matching rule | Left untouched |
| Rules | Auto-update every 24 h — no reinstall needed |
| Engine | Requires new release or rebuild to update |
| Unsigned local build | Working — Safari shows a one-time warning |
| Signed/notarized build | Not available — requires Apple Developer account |
| App Store distribution | Not planned |

---

## Upstream sync

This fork tracks [duckduckgo/autoconsent](https://github.com/duckduckgo/autoconsent) via a daily GitHub Actions workflow that merges upstream `main` into this fork.

- **Clean merge** → pushed automatically; unsigned CI build publishes a new release
- **Conflict** → a PR is opened for manual resolution (rare)

---

## Fork structure

Eight files differ from upstream:

| File | Change |
|---|---|
| `addon/manifest.safari.json` | New — Safari MV3 manifest (no `browsingData`, no `devtools_page`) |
| `addon/popup.safari.html` | New — Safari popup UI (Apple HIG design, light/dark/system themes) |
| `addon/popup.safari.js` | New — Safari popup extras (theme switching, tooltips, reset behaviour) |
| `build.sh` | +~20 lines appended — produces `dist/addon-safari/` |
| `update_version.js` | +1 line — stamps `manifest.safari.json` on `npm version` |
| `.gitignore` | +1 line — excludes `xcode/.../Resources/` (rebuilt by Xcode) |
| `.github/workflows/upstream-sync.yml` | New — daily upstream sync |
| `.github/workflows/safari-build.yml` | New — CI unsigned build + release |

Everything else is byte-for-byte identical to upstream.

---

## Disclaimer

This project is not affiliated with or endorsed by DuckDuckGo. It is an independent personal fork maintained on a best-effort basis, provided as-is with no warranties, guarantees, or support obligations. The upstream project ([duckduckgo/autoconsent](https://github.com/duckduckgo/autoconsent)) is the authoritative source for rules and engine updates.

## License

MPLv2 — same as upstream.
