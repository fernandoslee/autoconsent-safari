# Autoconsent for Safari

A Safari extension that automatically opts out of cookie consent popups. This is a private fork of [duckduckgo/autoconsent](https://github.com/duckduckgo/autoconsent) that adds a Safari distribution target.

> **Current version:** 2026.3.31  
> **Status:** Working locally. Handles the vast majority of GDPR cookie banners automatically.

---

## What it does

When you visit a website with a cookie consent popup, the extension silently clicks "Reject all" (or equivalent) for you. It covers 285+ Consent Management Providers (CMPs) — OneTrust, Sourcepoint, Cookiebot, and hundreds of others — plus thousands of site-specific rules maintained by the DuckDuckGo team.

Sites with no reject option get their popup hidden via cosmetic rules. Sites with no matching rule are left untouched.

---

## Installation (one-time)

### Prerequisites

- macOS 13.0+ (Ventura or later)
- Xcode 15+ (free from the Mac App Store)
- Node.js LTS

### Steps

```bash
# 1. Clone and install dependencies
git clone https://github.com/fernandoslee/autoconsent-safari.git
cd autoconsent-safari
npm install

# 2. Build the Safari extension bundle
npm run prepublish
# → produces dist/addon-safari/

# 3. Accept Xcode license (first time only)
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license accept
sudo xcodebuild -runFirstLaunch

# 4. Generate the Xcode project (first time only)
xcrun safari-web-extension-converter \
  dist/addon-safari \
  --project-location xcode/ \
  --app-name "AutoconsentSafari" \
  --bundle-identifier "com.yourorg.autoconsent-safari" \
  --macos-only \
  --no-open

# 5. Fix bundle identifier prefix in the generated project
# Edit xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj/project.pbxproj
# Change: PRODUCT_BUNDLE_IDENTIFIER = com.yourorg.AutoconsentSafari;
# To:     PRODUCT_BUNDLE_IDENTIFIER = "com.yourorg.autoconsent-safari";

# 6. Build the app
xcodebuild build \
  -project xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj \
  -scheme AutoconsentSafari \
  -configuration Debug \
  CODE_SIGN_IDENTITY="-" \
  CODE_SIGNING_REQUIRED=NO

# 7. Open the app to register the extension with Safari
open ~/Library/Developer/Xcode/DerivedData/AutoconsentSafari-*/Build/Products/Debug/AutoconsentSafari.app
```

Then go to **Safari → Settings → Extensions**, enable **Autoconsent**, and set Website Access to **Allow on All Websites**.

> Safari will show an "unsigned extension" warning — expected for local builds without an Apple Developer account.

---

## Rebuilding after rule updates

Rules sync automatically from upstream within 24 hours. After pulling, rebuild and reinstall:

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

You do **not** need to re-run `xcrun safari-web-extension-converter` — that's a one-time step.

---

## How it works

The extension injects a content script on every page. The script checks the page against 285+ CMP rules and, when a match is found, automatically clicks the reject/decline button. If the CMP has no reject option, the popup is hidden via CSS.

Rules are maintained upstream by DuckDuckGo and sync daily via GitHub Actions.

---

## Current state & known limitations

| Area | Status |
|---|---|
| GDPR cookie banners | Working — covers the major CMPs |
| US-only popups (CCPA) | Partial — depends on the CMP |
| Sites with no reject button | Handled via cosmetic (hide) rules |
| Unsigned local build | Working — Safari shows a one-time warning |
| Signed/notarized DMG | Not yet set up (requires Apple Developer account) |
| App Store distribution | Not planned |

**Sites not handled** are ones with no matching rule. The upstream project adds rules continuously — pulling regularly keeps coverage up to date.

---

## Upstream sync

This fork stays in sync with [duckduckgo/autoconsent](https://github.com/duckduckgo/autoconsent) via a daily GitHub Actions workflow (`.github/workflows/upstream-sync.yml`). Clean merges land automatically. Conflicts (rare) open a PR for manual resolution.

---

## Fork structure

Only four files differ from upstream:

| File | Change |
|---|---|
| `addon/manifest.safari.json` | Safari-specific manifest (no `browsingData`, no `devtools_page`) |
| `build.sh` | +10 lines that produce `dist/addon-safari/` |
| `update_version.js` | +1 line to stamp `manifest.safari.json` on version bumps |
| `.gitignore` | +1 line to exclude `xcode/.../Resources/` |

Everything else is byte-for-byte identical to upstream.

---

## Remotes

```
origin    https://github.com/fernandoslee/autoconsent-safari.git  (this fork)
upstream  https://github.com/duckduckgo/autoconsent.git           (DuckDuckGo)
```

## License

MPLv2 — same as upstream.
