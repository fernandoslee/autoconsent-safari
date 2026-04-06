# Autoconsent — Safari Fork

This is a private fork of [duckduckgo/autoconsent](https://github.com/duckduckgo/autoconsent) that adds a Safari extension distribution target.

## What this fork adds

Four files were added or modified on top of upstream. Everything else is byte-for-byte identical to upstream and must stay that way.

| File | Change | Purpose |
|---|---|---|
| `addon/manifest.safari.json` | New | Safari 16.4+ manifest (see differences below) |
| `build.sh` | +10 lines appended | Produces `dist/addon-safari/` |
| `update_version.js` | +1 line | Stamps `manifest.safari.json` on `npm version` |
| `.gitignore` | +1 line | Excludes `xcode/.../Resources/` (rebuilt in CI) |
| `.github/workflows/upstream-sync.yml` | New | Daily sync from upstream |
| `.github/workflows/safari-build.yml` | New | Builds notarized `.dmg` on macOS runner |

### Why `manifest.safari.json` differs from `manifest.firefox.json`

| Removed key | Reason |
|---|---|
| `match_origin_as_fallback: true` | Safari ignores it; Apple's manifest validator warns — remove to avoid App Store friction |
| `devtools_page` | Safari has no `chrome.devtools.*` API |
| `browsingData` permission | Not supported until Safari 17; removing it widens target to Safari 16.4+ |

### Why the JS source is unchanged

The upstream codebase is browser-agnostic by design. The only Safari-specific code fix (async message wrapping in `content.ts`) was already merged upstream in PR #1042 (Oct 2025). No TypeScript changes are needed in this fork.

### Why DuckDuckGo never shipped a Safari extension

DuckDuckGo bundles autoconsent directly into their own Safari browser apps. They have no need for a standalone Safari extension and no Apple Developer account in their open-source CI pipeline.

---

## Staying in sync with upstream

A GitHub Actions workflow (`.github/workflows/upstream-sync.yml`) runs daily at 02:00 UTC and merges `duckduckgo/autoconsent` main into this fork's main.

- **Clean merge** → pushed automatically; `safari-build.yml` runs if relevant files changed
- **Merge conflict** → a PR is opened for manual resolution

Conflicts are rare because the fork's changes to `build.sh` and `update_version.js` are append-only at line positions upstream never touches. If upstream ever restructures `build.sh`, a one-time manual resolution is needed.

**Rule updates** (285 CMP rules + weekly EasyList refresh) land in this fork within 24 hours of merging upstream.

---

## One-time Xcode setup

This only needs to be done once per developer machine, or when the Xcode project structure needs regeneration.

### Prerequisites

- Node.js (LTS)
- Xcode 15+ (free from the Mac App Store)
- macOS 13.0+ (Ventura)

### Steps

```bash
# 1. Install dependencies and build the Safari extension bundle
npm install
npm run prepublish
# → produces dist/addon-safari/

# 2. Verify the bundle looks right
ls dist/addon-safari/
# Should contain: manifest.json, *.js, rules.json, icons/, popup.html
# Must NOT contain: devtools/

# 3. Generate the Xcode project (first time only)
xcrun safari-web-extension-converter \
  dist/addon-safari \
  --project-location xcode/ \
  --app-name "AutoconsentSafari" \
  --bundle-identifier "com.yourorg.autoconsent-safari" \
  --macos-only \
  --no-open

# 4. Open in Xcode
open xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj
```

In Xcode:
- **Signing & Capabilities** on both targets: set Team to your Apple ID (free account works for local builds)
- **Deployment Target**: set minimum macOS to **13.0** on both targets

### Local build (no Apple Developer account needed)

Build and run directly from Xcode, or from the command line:

```bash
xcodebuild build \
  -project xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj \
  -scheme AutoconsentSafari \
  -configuration Debug \
  CODE_SIGN_IDENTITY="-" \
  CODE_SIGNING_REQUIRED=NO
```

Then enable the extension in **Safari → Settings → Extensions**.

> Safari will show an "unsigned extension" warning for local builds — this is expected without a paid Apple Developer account.

### Rebuild after upstream rule updates

The Xcode project does **not** contain the JS bundles or rules — those live in `dist/addon-safari/` which is gitignored. Any time you pull changes, rebuild before opening in Xcode:

```bash
npm run prepublish
# The safari-build.yml CI workflow does this automatically on every push
```

---

## CI/CD (with Apple Developer account)

The `.github/workflows/safari-build.yml` workflow produces a signed, notarized `.dmg` on every push that changes `addon/**`, `lib/**`, `rules/**`, `build.sh`, or `xcode/**`.

### Required GitHub Actions secrets

| Secret | Value |
|---|---|
| `SYNC_PAT` | GitHub PAT with `repo` + `workflow` scope |
| `APPLE_CERTIFICATE_BASE64` | `base64 -i "Developer ID Application.p12"` |
| `APPLE_CERTIFICATE_PASSWORD` | .p12 export password |
| `APPLE_TEAM_ID` | 10-character Apple Team ID |
| `APPLE_APP_STORE_CONNECT_API_KEY_ID` | For notarization |
| `APPLE_APP_STORE_CONNECT_API_KEY_ISSUER` | Issuer UUID |
| `APPLE_APP_STORE_CONNECT_API_KEY_B64` | base64-encoded `.p8` private key |

An Apple Developer Program membership ($99/year) is required for signing and notarization. Local builds and testing work without it.

---

## Remotes

```
origin    https://github.com/fernandoslee/autoconsent-safari.git  (this fork)
upstream  https://github.com/duckduckgo/autoconsent.git           (DuckDuckGo)
```

## Files that must never be modified in this fork

```
lib/                      addon/content.ts          addon/background.ts
addon/mv-compat.ts        addon/popup.ts            addon/utils.ts
addon/devtools/           addon/manifest.mv3.json   addon/manifest.firefox.json
rules/                    package.json              tsconfig.json
```

Modifying any of these creates divergence that turns every upstream sync into a potential conflict.
