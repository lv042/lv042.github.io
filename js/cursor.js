const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);

const INTERACTIVE = new Set(['A', 'BUTTON', 'WIRED-BUTTON', 'WIRED-CARD']);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
  const el = document.elementFromPoint(e.clientX, e.clientY);
  const hit = el && (INTERACTIVE.has(el.tagName) || el.closest('a, button, wired-button, wired-card'));
  cursor.classList.toggle('hover', !!hit);
});

// Inject cursor:none into wired-elements shadow roots
const shadowCursorSheet = new CSSStyleSheet();
shadowCursorSheet.replaceSync('* { cursor: none !important; }');

function patchShadowRoots() {
  document.querySelectorAll('wired-card, wired-button, wired-divider').forEach(el => {
    if (el.shadowRoot && !el.shadowRoot._cursorPatched) {
      el.shadowRoot.adoptedStyleSheets = [...el.shadowRoot.adoptedStyleSheets, shadowCursorSheet];
      el.shadowRoot._cursorPatched = true;
    }
  });
}

Promise.all(['wired-card', 'wired-button', 'wired-divider'].map(t => customElements.whenDefined(t)))
  .then(() => setTimeout(patchShadowRoots, 100));
