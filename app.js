
const GITHUB_USER = '1Anthonia';
const GITHUB_API   = `https://api.github.com/users/${GITHUB_USER}`;
const REPOS_API    = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=30`;

const FEATURED_REPOS = [
  {
    name: 'portfolio-os',
    displayName: 'PORTFOLIO_OS',
    description: 'An OS-inspired personal portfolio built with Angular — interactive windows, animated transitions and fully responsive.',
    live: 'https://toniaportfolioos-nine.vercel.app',
    github: 'https://github.com/1Anthonia/portfolio-os',
    language: 'Angular',
    thumb: 'images/thumb-portfolio-os.png',
  },
  {
    name: 'salesforce',
    displayName: 'SALESFORCE',
    description: 'A Salesforce-integrated web application — streamlined CRM workflows, data visualisation and dynamic dashboards.',
    live: 'https://salesforce-chi.vercel.app',
    github: 'https://github.com/1Anthonia/salesforce',
    language: 'HTML',
    thumb: 'images/thumb-salesforce.png',
  },
  {
    name: 'Food-Share',
    displayName: 'FOOD_SHARE',
    description: 'A community-driven food sharing platform connecting donors with those in need — built with HTML & JavaScript.',
    live: 'https://food-share-three-xi.vercel.app',
    github: 'https://github.com/1Anthonia/Food-Share',
    language: 'JavaScript',
    thumb: 'images/thumb-food-share.png',
  },
  {
    name: 'Zero-Hunger-Project',
    displayName: 'ZERO_HUNGER',
    description: 'A web initiative tackling food insecurity — raising awareness and driving community action against hunger.',
    live: 'https://zhungerpro.vercel.app',
    github: 'https://github.com/1Anthonia/Zero-Hunger-Project',
    language: 'HTML',
    thumb: 'images/thumb-zero-hunger.png',
  },
  {
    name: 'WayQuest-Travle-and-Tourism-Agency',
    displayName: 'WAYQUEST',
    description: 'A travel and tourism agency landing page — curated destinations, booking flows and immersive visual storytelling.',
    live: 'https://way-quest-travle-and-tourism-agency.vercel.app',
    github: 'https://github.com/1Anthonia/WayQuest-Travle-and-Tourism-Agency',
    language: 'HTML',
    thumb: 'images/thumb-wayquest.png',
  },
  {
    name: 'weatherapi',
    displayName: 'WEATHER_APP',
    description: 'A real-time weather application powered by a live weather API — location search, forecasts and dynamic UI.',
    live: 'https://weatherapi-blond.vercel.app',
    github: 'https://github.com/1Anthonia/weatherapi',
    language: 'CSS',
    thumb: 'images/thumb-weather.png',
  },
];


const TECH_STACK = [
  {
    name: 'HTML',
    desc: 'Semantic, accessible markup for structured, meaningful web content.',
    emoji: '📄',
    bg: 'rgba(227, 76, 38, 0.15)',
    color: '#e34c26',
  },
  {
    name: 'CSS',
    desc: 'Modern styling from fluid layouts to glassmorphism and animations.',
    emoji: '🎨',
    bg: 'rgba(21, 114, 182, 0.15)',
    color: '#1572b6',
  },
  {
    name: 'JavaScript',
    desc: 'Dynamic, interactive experiences built with clean, vanilla JS.',
    emoji: '⚡',
    bg: 'rgba(247, 223, 30, 0.12)',
    color: '#f7df1e',
  },
  {
    name: 'Angular',
    desc: 'Component-based framework for building scalable single-page applications.',
    emoji: '🅰️',
    bg: 'rgba(221, 0, 49, 0.13)',
    color: '#dd0031',
  },
  {
    name: 'PHP',
    desc: 'Server-side scripting for robust backends and dynamic web apps.',
    emoji: '🐘',
    bg: 'rgba(119, 123, 179, 0.15)',
    color: '#777bb3',
  },
  {
    name: 'Git & GitHub',
    desc: 'Version control and collaborative development workflows.',
    emoji: '🔀',
    bg: 'rgba(240, 80, 50, 0.12)',
    color: '#f05032',
  },
];

function initNav() {
  const nav     = document.querySelector('.nav');
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const allLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }, { passive: true });

  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuBtn.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    mobileMenu.setAttribute('aria-hidden', !open);
  });

  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', false);
      mobileMenu.setAttribute('aria-hidden', true);
    });
  });

  document.addEventListener('click', (event) => {
    if (mobileMenu.classList.contains('open') && !mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
      mobileMenu.classList.remove('open');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', false);
      mobileMenu.setAttribute('aria-hidden', true);
    }
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('nav__link--active', active);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = window.innerWidth < 640 ? 16 : 32;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const colors = ['var(--accent-purple)', 'var(--accent-cyan)', '#a78bfa'];
    p.style.setProperty('--dur', `${4 + Math.random() * 6}s`);
    p.style.setProperty('--delay', `${Math.random() * 6}s`);
    p.style.left = `${Math.random() * 100}%`;
    p.style.top  = `${30 + Math.random() * 60}%`;
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.width = p.style.height = `${1 + Math.random() * 3}px`;
    container.appendChild(p);
  }
}

function renderTechStack() {
  const grid = document.getElementById('techGrid');
  if (!grid) return;

  grid.innerHTML = TECH_STACK.map((tech, i) => `
    <article class="tech-card reveal" style="transition-delay:${i * 0.08}s" aria-label="${tech.name} technology card">
      <div class="tech-card__icon" style="background:${tech.bg}; color:${tech.color}; font-size:1.5rem;">
        ${tech.emoji}
      </div>
      <h3 class="tech-card__name">${tech.name}</h3>
      <p class="tech-card__desc">${tech.desc}</p>
    </article>
  `).join('');
}

function renderProjects(repoMap) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  FEATURED_REPOS.forEach((proj, i) => {
    const repoData = repoMap?.[proj.name];
    const lang     = proj.language || repoData?.language || 'Code';
    const desc     = proj.description;

    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${i * 0.12}s`;
    card.setAttribute('aria-label', `${proj.displayName} project card`);

    card.innerHTML = `
      <div class="project-card__thumb">
        ${proj.thumb
          ? `<img src="${proj.thumb}" alt="${proj.displayName} project preview" class="project-card__thumb-img" loading="lazy" />`
          : `<div class="project-card__thumb-fallback" aria-hidden="true">🖥️</div>`
        }
        <div class="project-card__overlay" aria-hidden="true"></div>
        <span class="project-card__lang-badge">${lang}</span>
      </div>
      <div class="project-card__body">
        <h3 class="project-card__name">${proj.displayName}</h3>
        <p class="project-card__desc">${desc}</p>
        <div class="project-card__links">
          ${proj.live ? `
          <a href="${proj.live}" target="_blank" rel="noopener noreferrer"
             class="project-card__link project-card__link--live"
             id="proj-live-${i}">
            Explore →
          </a>` : ''}
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer"
             class="project-card__link"
             id="proj-github-${i}">
            GitHub ↗
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

async function fetchGitHubData() {
  try {
    const userRes  = await fetch(GITHUB_API, { headers: { Accept: 'application/vnd.github.v3+json' } });
    if (userRes.ok) {
      const user = await userRes.json();
      const repoCountEl    = document.getElementById('repoCount');
      const followerCountEl= document.getElementById('followerCount');
      if (repoCountEl)    repoCountEl.textContent  = `${user.public_repos}+`;
      if (followerCountEl) followerCountEl.textContent = user.followers;
    }
  } catch (e) {
    console.warn('GitHub user fetch failed', e);
  }

  let repoMap = {};
  try {
    const reposRes = await fetch(REPOS_API, { headers: { Accept: 'application/vnd.github.v3+json' } });
    if (reposRes.ok) {
      const repos = await reposRes.json();
      repos.forEach(r => { repoMap[r.name] = r; });
      const liveCount = repos.filter(r =>
        r.homepage && r.homepage.startsWith('http') && !r.homepage.includes('github.com')
      ).length;
      document.querySelectorAll('.about__stat').forEach(stat => {
        const label = stat.querySelector('.about__stat-label');
        const num   = stat.querySelector('.about__stat-num');
        if (label && label.textContent.trim() === 'Live Projects' && num) {
          num.textContent = `${liveCount}+`;
        }
      });
    }
  } catch (e) {
    console.warn('GitHub repos fetch failed', e);
  }

  return repoMap;
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

function setFooterYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

async function init() {
  initNav();
  initParticles();
  renderTechStack();

  renderProjects(null);

  const repoMap = await fetchGitHubData();
  renderProjects(repoMap);

  initScrollReveal();
  setFooterYear();
}

document.addEventListener('DOMContentLoaded', init);
