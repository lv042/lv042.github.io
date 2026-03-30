const PINNED = ['007', 'Network-Scanner', 'Weather-Wizard', 'Super-Smash-Profs', 'perplexity-web-search-mcp', 'Solidity-Crowdfunding', 'Angry-Gopher'];
const BLACKLIST = new Set(['lv042', 'ING-Zoo', 'Veit-Game', 'ThreeJS-Commputergraphics-Project']);

const FALLBACK = [
  { name: 'Angry-Gopher',             description: 'A Golang based reverse shell trojan.',                                                                                                     html_url: 'https://github.com/lv042/Angry-Gopher',              language: 'Go',               fork: false },
  { name: 'Network-Scanner',           description: 'Python tool that identifies online hosts in a network using multi-threaded pinging with configurable scan range and packet loss tolerance.', html_url: 'https://github.com/lv042/Network-Scanner',            language: 'Python',           fork: false },
  { name: 'Weather-Wizard',            description: 'IoT project that collects and analyzes weather data in real-time, providing up-to-date weather information and climate trend insights.',    html_url: 'https://github.com/lv042/Weather-Wizard',             language: 'Visual Basic 6.0', fork: false },
  { name: 'Super-Smash-Profs',         description: 'Java platformer built with LIBgdx and Tiled, playable on a single keyboard with character selection and various abilities.',               html_url: 'https://github.com/lv042/Super-Smash-Profs',          language: 'Java',             fork: false },
  { name: 'Thread-Scheduler',          description: 'A tool that manages and runs multiple tasks concurrently without overloading the system.',                                                  html_url: 'https://github.com/lv042/Thread-Scheduler',           language: 'Rust',             fork: false },
  { name: 'Solidity-Crowdfunding',     description: 'A mini crowdfunding platform built on Ethereum — a smart contract that tracks projects and their backers.',                                html_url: 'https://github.com/lv042/Solidity-Crowdfunding',      language: 'Solidity',         fork: false },
  { name: '007',                       description: 'An autonomous software engineering agent for solving programming tasks from the SWE-bench dataset.',                                        html_url: 'https://github.com/lv042/007',                        language: 'Python',           fork: false },
  { name: 'perplexity-web-search-mcp', description: 'Supercharge your AI assistant with real-time web search and academic research capabilities.',                                               html_url: 'https://github.com/lv042/perplexity-web-search-mcp', language: 'Python',           fork: false },
  { name: 'P2P-Server',                description: 'This server acts as a middleman between two clients and forwards their packets.',                                                           html_url: 'https://github.com/lv042/P2P-Server',                 language: 'Go',               fork: false },
  { name: 'Cocoa-Menu-Bar-Manager',    description: null,                                                                                                                                        html_url: 'https://github.com/lv042/Cocoa-Menu-Bar-Manager',     language: 'Swift',            fork: false },
  { name: 'Multiclipboard',            description: null,                                                                                                                                        html_url: 'https://github.com/lv042/Multiclipboard',             language: 'Python',           fork: false },
];

function renderProjectCard(repo, pinned) {
  const wrapper = document.createElement('a');
  wrapper.href = repo.html_url;
  wrapper.target = '_blank';
  wrapper.rel = 'noopener noreferrer';
  wrapper.style.cssText = 'display:block; text-decoration:none; color:inherit;';

  const card = document.createElement('wired-card');
  card.setAttribute('elevation', '2');
  card.innerHTML = `
    <div class="proj-inner">
      ${pinned ? '<div class="proj-pin">★ pinned</div>' : ''}
      <div class="proj-name">${repo.name}</div>
      <div class="proj-desc">${repo.description || '—'}</div>
      <div class="proj-tags">${repo.language ? `<span class="tag">${repo.language}</span>` : ''}</div>
      <span class="proj-link">GitHub</span>
    </div>`;
  wrapper.appendChild(card);
  return wrapper;
}

function equalizeCardHeights() {
  if (window.innerWidth <= 620) return;
  const cards = Array.from(document.querySelectorAll('.proj-grid > a wired-card'));
  cards.forEach(c => c.style.height = '');
  const rows = new Map();
  cards.forEach(c => {
    const top = c.getBoundingClientRect().top;
    if (!rows.has(top)) rows.set(top, []);
    rows.get(top).push(c);
  });
  rows.forEach(group => {
    const max = Math.max(...group.map(c => c.getBoundingClientRect().height));
    group.forEach(c => c.style.height = max + 'px');
  });
}

window.addEventListener('resize', equalizeCardHeights);

export async function loadProjects() {
  const grid = document.getElementById('proj-grid');
  try {
    const res = await fetch('https://api.github.com/users/lv042/repos?per_page=100&sort=updated');
    const data = await res.json();
    if (!res.ok || !Array.isArray(data)) throw new Error(data.message || 'Bad response');

    const nonForks    = data.filter(r => !r.fork && !BLACKLIST.has(r.name));
    const pinnedRepos = PINNED.map(n => nonForks.find(r => r.name === n)).filter(Boolean);
    const pinnedNames = new Set(pinnedRepos.map(r => r.name));
    const restRepos   = nonForks.filter(r => !pinnedNames.has(r.name))
                                .sort((a, b) => b.updated_at.localeCompare(a.updated_at));

    grid.innerHTML = '';
    pinnedRepos.forEach(r => grid.appendChild(renderProjectCard(r, true)));
    restRepos.forEach(r => grid.appendChild(renderProjectCard(r, false)));
    requestAnimationFrame(equalizeCardHeights);
  } catch (err) {
    console.warn('GitHub API unavailable, using fallback:', err.message);
    grid.innerHTML = '';
    FALLBACK.forEach(r => grid.appendChild(renderProjectCard(r, true)));
    requestAnimationFrame(equalizeCardHeights);
  }
}
