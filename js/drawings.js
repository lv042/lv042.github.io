export function drawSeparator() {
  const svg = document.getElementById('sep-svg');
  const h = svg.getBoundingClientRect().height;
  if (!h || typeof rough === 'undefined') return;
  svg.setAttribute('viewBox', `0 0 16 ${h}`);
  const rc = rough.svg(svg);
  svg.appendChild(rc.line(8, 8, 8, h - 8, {
    stroke: '#1a1916',
    strokeWidth: 1,
    roughness: 2.5,
    bowing: 1,
  }));
}

export function drawTimelineLine() {
  const svg = document.getElementById('tl-svg');
  if (!svg || typeof rough === 'undefined') return;
  const h = svg.getBoundingClientRect().height;
  if (!h) return;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 16 ${h}`);
  const rc = rough.svg(svg);
  svg.appendChild(rc.line(8, 8, 8, h - 8, {
    stroke: '#1a1916',
    strokeWidth: 1,
    roughness: 0.8,
    bowing: 0.3,
  }));
}
