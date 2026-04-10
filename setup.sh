#!/usr/bin/env bash
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m'

info()    { echo -e "  ${BOLD}$*${NC}"; }
success() { echo -e "  ${GREEN}✓${NC} $*"; }
warn()    { echo -e "  ${YELLOW}!${NC} $*"; }
die()     { echo -e "  ${RED}✗${NC} $*" >&2; exit 1; }

echo ""
echo -e "${BOLD}Autoconsent for Safari — setup${NC}"
echo ""

# ── 1. Dependencies ────────────────────────────────────────────────────────────

info "Checking dependencies..."

command -v node &>/dev/null  || die "Node.js not found. Install from https://nodejs.org or run: brew install node"
command -v npm  &>/dev/null  || die "npm not found. It comes bundled with Node.js."
success "Node.js $(node --version), npm $(npm --version)"

if ! command -v xcodebuild &>/dev/null; then
  die "Xcode not found. Install it free from the Mac App Store, then rerun this script."
fi
success "Xcode $(xcodebuild -version 2>/dev/null | head -1)"

# ── 2. Point xcode-select at Xcode.app (not just CLT) ─────────────────────────

XCODE_PATH=$(xcode-select -p 2>/dev/null || true)
if [[ "$XCODE_PATH" == *"CommandLineTools"* ]] || [[ -z "$XCODE_PATH" ]]; then
  warn "xcode-select is pointing at Command Line Tools, not Xcode.app. Fixing (requires sudo)..."
  sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
fi

# ── 3. Accept Xcode license / first launch if needed ──────────────────────────

if ! xcrun --find safari-web-extension-converter &>/dev/null; then
  warn "Accepting Xcode license and running first-launch setup (requires sudo)..."
  sudo xcodebuild -license accept
  sudo xcodebuild -runFirstLaunch
fi
success "safari-web-extension-converter available"

# ── 4. Node dependencies ───────────────────────────────────────────────────────

echo ""
info "Installing Node dependencies..."
npm install
success "node_modules ready"

# ── 5. Build the Safari extension bundle ──────────────────────────────────────

echo ""
info "Building Safari extension bundle..."
npm run prepublish
success "dist/addon-safari/ built"

# Sanity checks
if [ -d dist/addon-safari/devtools ]; then
  die "Build error: dist/addon-safari/devtools/ must not exist in the Safari bundle"
fi
if grep -q "browsingData" dist/addon-safari/manifest.json; then
  die "Build error: manifest.json must not contain browsingData"
fi

# ── 6. Generate Xcode project (first time only) ────────────────────────────────

if [ ! -d "xcode/AutoconsentSafari" ]; then
  echo ""
  info "Generating Xcode project (first time only)..."
  xcrun safari-web-extension-converter \
    dist/addon-safari \
    --project-location xcode/ \
    --app-name "AutoconsentSafari" \
    --bundle-identifier "com.yourorg.autoconsent-safari" \
    --macos-only \
    --no-open 2>&1 | grep -v "^$" | grep -v "^Xcode\|^App\|^Platform\|^Language" || true

  # Fix bundle identifier prefix mismatch introduced by the converter
  sed -i '' \
    's/PRODUCT_BUNDLE_IDENTIFIER = com.yourorg.AutoconsentSafari;/PRODUCT_BUNDLE_IDENTIFIER = "com.yourorg.autoconsent-safari";/g' \
    xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj/project.pbxproj

  success "Xcode project generated at xcode/"
else
  success "Xcode project already exists — skipping generation"
fi

# ── 7. Build the macOS app ─────────────────────────────────────────────────────

echo ""
info "Building AutoconsentSafari.app (unsigned)..."
xcodebuild build \
  -project xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj \
  -scheme AutoconsentSafari \
  -configuration Debug \
  CODE_SIGN_IDENTITY="-" \
  CODE_SIGNING_REQUIRED=NO \
  -quiet

APP_PATH=$(find ~/Library/Developer/Xcode/DerivedData/AutoconsentSafari-*/Build/Products/Debug -name "AutoconsentSafari.app" 2>/dev/null | head -1)
[ -n "$APP_PATH" ] || die "Build succeeded but app not found in DerivedData."
success "Built: $APP_PATH"

# ── 8. Register with Safari ────────────────────────────────────────────────────

echo ""
info "Opening app to register extension with Safari..."
open "$APP_PATH"

echo ""
echo -e "${GREEN}${BOLD}Setup complete!${NC}"
echo ""
echo "  Next steps:"
echo "    1. Safari → Settings → Extensions → enable Autoconsent"
echo "    2. Set Website Access to 'Allow on All Websites'"
echo "    3. Visit any site with a cookie banner — it will be dismissed automatically"
echo ""
echo "  To rebuild after pulling updates:"
echo "    npm run prepublish && xcodebuild build \\"
echo "      -project xcode/AutoconsentSafari/AutoconsentSafari.xcodeproj \\"
echo "      -scheme AutoconsentSafari -configuration Debug \\"
echo "      CODE_SIGN_IDENTITY=\"-\" CODE_SIGNING_REQUIRED=NO -quiet"
echo "    open \"$APP_PATH\""
echo ""
