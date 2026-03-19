# AGENTS.md

## Cursor Cloud specific instructions

This is the **@duckduckgo/autoconsent** library — a TypeScript/JavaScript library of rules for automatically navigating cookie consent popups. It ships an npm library and a reference browser extension (Chrome MV3 + Firefox).

### Key commands

| Task | Command |
|---|---|
| Install dependencies | `npm ci` |
| Lint (ESLint + Prettier + rule syntax) | `npm run lint` |
| Auto-fix lint | `npm run lint-fix` |
| Unit tests (Web Test Runner, headless Chrome) | `npm run test:lib` |
| Full build (filterlist compile + rule build + esbuild bundle + tsc declarations + extension) | `npm run prepublish` |
| Watch mode (rebuild on source changes) | `npm run watch` |
| Integration tests (Playwright, requires internet + `npx playwright install`) | `npm run test` |

### Notes

- `npm ci` triggers the `prepublish` lifecycle hook automatically, so a full build runs as part of dependency installation. If you only need a fresh build without reinstalling, use `npm run prepublish` directly.
- Unit tests (`test:lib`) run entirely locally via `@web/test-runner` in headless Chrome. No network access required.
- Playwright integration tests (`npm run test`) navigate to ~296 live websites. They require internet access and `npx playwright install` to download browser binaries. These are slow and best reserved for targeted CMP testing.
- The built browser extension lives in `dist/addon-mv3/` (Chrome) and `dist/addon-firefox/` (Firefox). Load unpacked in Chrome via `chrome://extensions` with Developer mode enabled.
- There are no databases or backend services. This is a pure frontend/library project.
- ESLint uses flat config (`eslint.config.mjs`) with TypeScript type-checking enabled (`projectService`). Lint can take ~45 seconds due to type-aware rules.
