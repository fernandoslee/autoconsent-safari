// External script for Safari popup extras.
// Inline <script> blocks are blocked by the MV3 default CSP
// (script-src 'self'). All popup-specific JS must live here.

// ── Reload rules: brief visual confirmation ────────────────────────────────
// popup.bundle.js's listener does the actual fetch; we just show feedback.
document.getElementById('reload').addEventListener('click', function () {
  const btn = this;
  const orig = btn.textContent;
  btn.textContent = '✓ Reloaded';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = orig;
    btn.disabled = false;
  }, 1500);
});

// ── Reset: reload popup instead of closing it ──────────────────────────────
// popup.bundle.js's reset handler: storageRemove('config') → initConfig()
// (writes defaults back) → window.close(). We let that handler run in full
// so defaults are restored, then reload the popup instead of closing.
let _resetting = false;
const _origClose = window.close.bind(window);

window.close = function () {
  if (_resetting) {
    _resetting = false;
    window.location.reload();
  } else {
    _origClose();
  }
};

// Capture phase so the flag is set before popup.ts's bubble handler fires.
document.getElementById('reset').addEventListener(
  'click',
  () => {
    _resetting = true;
  },
  true,
);

// ── Extension version ──────────────────────────────────────────────────────
(function () {
  const el = document.getElementById('ext-version');
  if (el) {
    el.textContent = 'v' + chrome.runtime.getManifest().version;
  }
}());

// ── Rules date ─────────────────────────────────────────────────────────────
chrome.storage.local.get('rules', (result) => {
  const el = document.getElementById('rules-date');
  if (!el) { return; }
  const ts = result && result.rules && result.rules.generated_at;
  if (ts) {
    el.textContent = 'Rules: ' + new Date(ts).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  }
});

// ── GitHub link ────────────────────────────────────────────────────────────
(function () {
  const el = document.getElementById('gh-link');
  if (!el) { return; }
  el.addEventListener('click', (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://github.com/fernandoslee/autoconsent-safari' });
  });
}());

// ── Theme switching ────────────────────────────────────────────────────────
(function () {
  const KEY = 'colorScheme';

  function applyTheme(scheme) {
    const s = scheme || 'system';
    document.documentElement.setAttribute('data-theme', s);
    document.querySelectorAll('.ts-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.scheme === s);
    });
  }

  // Restore saved theme immediately on load
  chrome.storage.local.get(KEY, (result) => {
    applyTheme(result[KEY]);
  });

  // Handle user clicks on the three theme buttons
  document.querySelectorAll('.ts-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const scheme = btn.dataset.scheme;
      applyTheme(scheme);
      const obj = {};
      obj[KEY] = scheme;
      chrome.storage.local.set(obj);
    });
  });
}());

// ── Tooltips (1s hover delay, JS-driven to escape overflow:hidden) ─────────
(function () {
  let timer = null;
  let tipEl  = null;

  function isDark() {
    const t = document.documentElement.getAttribute('data-theme');
    return t === 'dark' ||
      (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  function removeTip() {
    clearTimeout(timer);
    timer = null;
    if (tipEl) { tipEl.remove(); tipEl = null; }
  }

  function showTip(target) {
    const text = target.getAttribute('data-tip');
    if (!text) { return; }

    const dark = isDark();
    const el = document.createElement('div');
    el.textContent = text;
    el.style.cssText =
      'position:fixed;' +
      'background:' + (dark ? 'rgba(255,255,255,0.9)' : 'rgba(28,28,30,0.92)') + ';' +
      'color:'      + (dark ? '#1c1c1e'               : '#ffffff')              + ';' +
      'font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Helvetica Neue",sans-serif;' +
      'font-size:10.5px;font-weight:500;' +
      'padding:5px 9px;border-radius:7px;' +
      'white-space:nowrap;pointer-events:none;z-index:9999;' +
      'box-shadow:0 2px 12px rgba(0,0,0,0.28);' +
      'transform:translateX(-50%)';

    document.body.appendChild(el);

    const rect = target.getBoundingClientRect();
    el.style.left = (rect.left + rect.width / 2) + 'px';
    el.style.top  = (rect.top  - el.offsetHeight - 8) + 'px';
    tipEl = el;
  }

  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('[data-tip]');
    if (!target) { return; }
    removeTip();
    timer = setTimeout(() => { showTip(target); }, 1000);
  });

  document.addEventListener('mouseout', (e) => {
    if (!e.target.closest('[data-tip]')) { return; }
    removeTip();
  });
}());
