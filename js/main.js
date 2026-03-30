import { drawSeparator, drawTimelineLine } from './drawings.js';
import { loadProjects } from './projects.js';

// ── Version ──
const VERSION = 'v0.1';
document.getElementById('build-id').textContent = VERSION;

// ── Nav ──
const sections   = document.querySelectorAll('.section');
const navItems   = document.querySelectorAll('.nav-item');
const contentArea = document.getElementById('content-area');

function showSection(id) {
  sections.forEach(s => s.classList.remove('active'));
  navItems.forEach(n => n.classList.remove('active'));
  document.getElementById('section-' + id)?.classList.add('active');
  document.querySelector(`.nav-item[data-section="${id}"]`)?.classList.add('active');
  contentArea.scrollTop = 0;
  if (id === 'experience') requestAnimationFrame(drawTimelineLine);
}

navItems.forEach(n => n.addEventListener('click', () => showSection(n.dataset.section)));
showSection('about');

// ── Init: wait for wired-elements then reveal ──
Promise.all([
  customElements.whenDefined('wired-card'),
  customElements.whenDefined('wired-button'),
  customElements.whenDefined('wired-divider'),
]).then(() => {
  drawSeparator();
  requestAnimationFrame(() => document.querySelector('.frame').classList.add('ready'));
});

window.addEventListener('load', drawSeparator);

loadProjects();
