/*
 * ================================================================
 *  RAJEEV KUMAR GUPTA — Blog Scripts
 *  rajeevfrombarhi.in
 * ================================================================
 *  01. Theme Toggle (Dark / Light mode)
 *  02. Color Theme & Scene Picker
 *  03. Posts Data & Rendering
 *  04. Search & Category Filters
 *  05. Tags Cloud
 *  06. Newsletter Form
 *  07. Toast Notification
 *  08. Scroll to Top
 *  09. Post Page Loader
 * ================================================================
 */

// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  if (themeIcon) themeIcon.textContent = dark ? '☀️' : '🌙';
  if (themeLabel) themeLabel.textContent = dark ? 'Light' : 'Dark';
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
applyTheme(isDark);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
    applyTheme(!currentlyDark);
    localStorage.setItem('theme', !currentlyDark ? 'dark' : 'light');
  });
}

// ===== Color Theme Picker =====
const colorThemes = [
  { id: 'purple',  label: 'Purple',  color: '#6c63ff' },
  { id: 'blue',    label: 'Blue',    color: '#3b82f6' },
  { id: 'green',   label: 'Green',   color: '#10b981' },
  { id: 'orange',  label: 'Orange',  color: '#f97316' },
  { id: 'rose',    label: 'Rose',    color: '#f43f5e' },
  { id: 'teal',    label: 'Teal',    color: '#14b8a6' },
  { id: 'crimson', label: 'Crimson', color: '#dc2626' },
  { id: 'golden',  label: 'Golden',  color: '#d97706' },
  { id: 'indigo',  label: 'Indigo',  color: '#4f46e5' },
  { id: 'emerald', label: 'Emerald', color: '#059669' },
];

const sceneThemes = [
  { id: 'none',      label: 'Default',      gradient: 'var(--bg-secondary)',                                                   icon: '🏠' },
  { id: 'mountains', label: 'Mountains',    gradient: 'linear-gradient(to bottom,#87ceeb,#6b8e9f,#4a7c59,#2d4a2e)',           icon: '🏔️' },
  { id: 'spiritual', label: 'Spiritual',    gradient: 'linear-gradient(135deg,#fff8e1,#ffe082,#ffb300,#e65100)',               icon: '🕉️' },
  { id: 'ocean',     label: 'Ocean',        gradient: 'linear-gradient(to bottom,#006064,#00acc1,#80deea)',                   icon: '🌊' },
  { id: 'forest',    label: 'Forest',       gradient: 'linear-gradient(to bottom,#1b5e20,#388e3c,#4caf50)',                   icon: '🌿' },
  { id: 'sunset',    label: 'Sunset',       gradient: 'linear-gradient(to bottom,#311b92,#9c27b0,#f44336,#ff9800,#ffeb3b)',   icon: '🌅' },
  { id: 'nightsky',  label: 'Night Sky',    gradient: 'linear-gradient(to bottom,#000010,#0a0a2e,#1a237e)',                   icon: '🌌' },
  { id: 'blossom',   label: 'Cherry Blossom', gradient: 'linear-gradient(135deg,#fce4ec,#f48fb1,#f06292)',                   icon: '🌸' },
  { id: 'desert',    label: 'Desert',       gradient: 'linear-gradient(to bottom,#1565c0,#42a5f5,#ffa726,#e65100)',           icon: '🏜️' },
  { id: 'snow',      label: 'Himalayan Snow', gradient: 'linear-gradient(to bottom,#1565c0,#90caf9,#e3f2fd,#fff)',            icon: '❄️' },
  { id: 'monsoon',   label: 'Monsoon',      gradient: 'linear-gradient(to bottom,#263238,#546e7a,#78909c)',                   icon: '🌧️' },
];

function applyColorTheme(id) {
  if (id === 'purple') {
    document.documentElement.removeAttribute('data-color');
  } else {
    document.documentElement.setAttribute('data-color', id);
  }
  localStorage.setItem('colorTheme', id);
  document.querySelectorAll('.swatch[data-theme]').forEach(s => {
    s.classList.toggle('active', s.dataset.theme === id);
  });
}

function applyScene(id) {
  if (id === 'none') {
    document.documentElement.removeAttribute('data-scene');
  } else {
    document.documentElement.setAttribute('data-scene', id);
  }
  // Activate full-page background layer
  const pageBg = document.getElementById('pageBg');
  if (pageBg) pageBg.classList.toggle('active', id !== 'none');

  localStorage.setItem('sceneTheme', id);
  document.querySelectorAll('.scene-swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.scene === id);
  });
}

// Build full-page background element
function buildPageBg() {
  if (document.getElementById('pageBg')) return;
  const el = document.createElement('div');
  el.id = 'pageBg';
  el.className = 'page-bg';
  document.body.insertBefore(el, document.body.firstChild);
}

// Build theme picker — centered modal
function buildThemePicker() {
  const navActions = document.querySelector('.nav-actions');
  if (!navActions) return;

  // Add 🎨 button to nav
  const btn = document.createElement('button');
  btn.className = 'theme-picker-btn';
  btn.id = 'themePickerBtn';
  btn.setAttribute('aria-label', 'Customise theme');
  btn.textContent = '🎨';
  const themeToggleBtn = navActions.querySelector('.theme-toggle');
  navActions.insertBefore(btn, themeToggleBtn);

  // Build modal
  const backdrop = document.createElement('div');
  backdrop.className = 'theme-modal-backdrop';
  backdrop.id = 'themeModalBackdrop';
  backdrop.innerHTML = `
    <div class="theme-palette" id="themePalette" role="dialog" aria-label="Customise theme">
      <div class="theme-palette-header">
        <h3>🎨 Customise Theme</h3>
        <button class="theme-palette-close" id="themePaletteClose" aria-label="Close">✕</button>
      </div>
      <div class="theme-section">
        <h4>Accent Colour</h4>
        <div class="theme-swatches">
          ${colorThemes.map(t => `
            <div class="swatch" data-theme="${t.id}" title="${t.label}"
              style="background:${t.color}"></div>`).join('')}
        </div>
      </div>
      <div class="theme-section">
        <h4>Background Scene</h4>
        <div class="theme-swatches scene-swatches">
          ${sceneThemes.map(t => `
            <div class="swatch scene-swatch" data-scene="${t.id}" title="${t.label}"
              style="background:${t.gradient};">
              <span style="font-size:1.1rem;filter:drop-shadow(0 1px 3px rgba(0,0,0,0.6))">${t.icon}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
  document.body.appendChild(backdrop);

  // Open modal
  btn.addEventListener('click', e => {
    e.stopPropagation();
    backdrop.classList.add('open');
  });

  // Close on backdrop click or close button
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) backdrop.classList.remove('open');
  });
  document.getElementById('themePaletteClose').addEventListener('click', () => {
    backdrop.classList.remove('open');
  });

  // Keyboard close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') backdrop.classList.remove('open');
  });

  // Colour swatches
  backdrop.querySelectorAll('.swatch[data-theme]').forEach(s => {
    s.addEventListener('click', () => applyColorTheme(s.dataset.theme));
  });

  // Scene swatches
  backdrop.querySelectorAll('.scene-swatch').forEach(s => {
    s.addEventListener('click', () => applyScene(s.dataset.scene));
  });
}

// Restore saved themes
const savedColor = localStorage.getItem('colorTheme') || 'purple';
applyColorTheme(savedColor);
buildPageBg();
const savedScene = localStorage.getItem('sceneTheme') || 'none';
applyScene(savedScene);
buildThemePicker();

// ===== Posts Data =====
const posts = [
  {
    id: 1,
    title: "My Journey Through the Himalayas",
    excerpt: "There's something magical about standing at the foot of the world's tallest mountains — a humbling reminder of how vast and beautiful this planet truly is.",
    category: "Travel",
    date: "March 20, 2026",
    readTime: "6 min read",
    tags: ["Travel"],
    emoji: "🏔️",
    slug: "journey-himalayas"
  },
  {
    id: 2,
    title: "10 Life Lessons I Learned at 30",
    excerpt: "Turning 30 brought with it a clarity I hadn't expected — about relationships, ambition, failure, and what it really means to live with intention.",
    category: "Personal",
    date: "March 12, 2026",
    readTime: "8 min read",
    tags: ["Personal"],
    emoji: "✨",
    slug: "life-lessons-at-30"
  },
  {
    id: 3,
    title: "The Art of Slowing Down",
    excerpt: "In a world obsessed with hustle culture and endless productivity, I found something radical — the immense value of deliberately doing nothing.",
    category: "Lifestyle",
    date: "March 5, 2026",
    readTime: "5 min read",
    tags: ["Personal"],
    emoji: "🌿",
    slug: "art-of-slowing-down"
  },
  {
    id: 4,
    title: "Street Food Diaries: Mumbai",
    excerpt: "Mumbai's streets tell their stories through food — from vada pav to pav bhaji, each dish carries the city's chaotic, beautiful soul.",
    category: "Food",
    date: "February 28, 2026",
    readTime: "4 min read",
    tags: ["Food", "Mumbai", "Travel"],
    emoji: "🍛",
    slug: "street-food-mumbai"
  },
  {
    id: 5,
    title: "Why I Started Writing",
    excerpt: "Writing was never something I thought I'd do publicly. It felt too vulnerable, too exposed. But then I discovered it wasn't about being read — it was about being honest.",
    category: "Personal",
    date: "February 8, 2026",
    readTime: "5 min read",
    tags: ["Personal"],
    emoji: "✍️",
    slug: "why-i-started-writing"
  }
];

// ===== Render Posts =====
let activeCategory = 'All';
let searchQuery = '';

function renderPosts() {
  const grid = document.getElementById('postsGrid');
  const countEl = document.getElementById('postsCount');
  if (!grid) return;

  const filtered = posts.filter(post => {
    const matchCat = activeCategory === 'All' || post.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some(t => t.toLowerCase().includes(q)) ||
      post.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (countEl) countEl.textContent = `${filtered.length} post${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div style="font-size:3rem">🔍</div>
        <p>No posts found. Try a different search or category.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(post => `
    <article class="post-card" onclick="goToPost('${post.slug}')">
      <div class="post-card-img">${post.emoji}</div>
      <div class="post-card-body">
        <div class="post-meta">
          <span class="post-category">${post.category}</span>
          <span class="post-date">${post.date}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="post-card-footer">
          <div class="post-tags">
            ${post.tags.slice(0, 2).map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <span class="read-more">${post.readTime} →</span>
        </div>
      </div>
    </article>
  `).join('');
}

function goToPost(slug) {
  window.location.href = `post.html?slug=${slug}`;
}

// ===== Search =====
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    renderPosts();
  });
}

// ===== Category Filters =====
const catButtons = document.querySelectorAll('.cat-btn');
catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    activeCategory = btn.dataset.cat;
    catButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPosts();
    scrollToPosts();
  });
});

// Scroll to posts grid with header offset
function scrollToPosts() {
  const grid = document.getElementById('postsGrid');
  if (!grid) return;
  const headerHeight = document.querySelector('header')?.offsetHeight || 70;
  const top = grid.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
  window.scrollTo({ top, behavior: 'smooth' });
}

// Sidebar category clicks
const catListItems = document.querySelectorAll('.category-list li');
catListItems.forEach(li => {
  li.addEventListener('click', () => {
    const cat = li.dataset.cat;
    activeCategory = cat;
    catButtons.forEach(b => {
      b.classList.toggle('active', b.dataset.cat === cat);
    });
    renderPosts();
    scrollToPosts();
  });
});

// Tags cloud clicks
const tagItems = document.querySelectorAll('.tags-cloud .tag');
tagItems.forEach(tag => {
  tag.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = tag.textContent;
      searchQuery = tag.textContent;
      renderPosts();
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

// ===== Newsletter Form =====
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value) {
      showToast('🎉 Thanks for subscribing!');
      input.value = '';
    }
  });
});

// ===== Toast =====
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== Scroll to Top =====
const scrollBtn = document.getElementById('scrollTop');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== Post Page =====
function loadPost() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (!slug) return;

  const post = posts.find(p => p.slug === slug);
  if (!post) return;

  const postContents = {
    'journey-himalayas': `
      <p>It was 4:30 in the morning when our jeep crawled into Leh, the ancient capital of Ladakh. The air was thin, the stars impossibly bright, and the mountains — massive dark shapes against an indigo sky — seemed to breathe.</p>
      <p>I had dreamed of this journey for years. Not the kind of passive dreaming where you pin photos to a board, but the kind where you lie awake imagining the cold wind on your face, the creak of prayer wheels, the distant echo of monastery bells.</p>
      <blockquote>"The mountains teach you that your problems are smaller than you think, and your capacity for wonder is larger than you ever imagined."</blockquote>
      <h2>The Road to Pangong Tso</h2>
      <p>Two days after arriving in Leh, we set out for Pangong Tso — the famous high-altitude lake that straddles the India-China border. The road there is a lesson in patience and awe in equal measure.</p>
      <p>Every switchback reveals a new perspective. Every valley is more remote than the last. We crossed Changla Pass at 17,688 feet above sea level, where the air is so thin that even laughing requires effort.</p>
      <h2>What the Himalayas Taught Me</h2>
      <ul>
        <li>Silence is not empty — it is full of things we normally drown out.</li>
        <li>Slowness is not laziness. Sometimes it is wisdom.</li>
        <li>The most beautiful places on Earth often require the most effort to reach.</li>
      </ul>
      <p>When I finally stood at the edge of Pangong Tso, watching the water shift from turquoise to deep cobalt as clouds drifted overhead, I understood something I couldn't have understood from a photograph.</p>
      <p>Some places don't just exist in the world. They exist in you, permanently, once you've stood inside them.</p>
      <hr>
      <p>If you've been considering this trip, stop considering. Go.</p>
    `,
    'life-lessons-at-30': `
      <p>I used to think that wisdom was something that arrived gradually, invisibly, like grey hair. But turning 30 felt more like a switch being flipped. Suddenly, things that had confused me made sense. Things I had clung to, I could let go.</p>
      <p>Here are ten things I've learned — some the hard way, some through sheer luck of observation.</p>
      <h2>1. Most of your worries will never happen</h2>
      <p>I have spent entire weeks dreading conversations that lasted two minutes and went fine. The mind is a catastrophist by default. Learning to observe your anxiety without being controlled by it is perhaps the most valuable skill I've developed.</p>
      <h2>2. Relationships require maintenance, not just intent</h2>
      <p>Good intentions don't maintain friendships. Phone calls do. Showing up does. I've learned that the people who matter most to me deserve more than my warmth — they deserve my time.</p>
      <h2>3. Comparison is a thief with no off switch</h2>
      <blockquote>"Someone else's chapter 20 is not your chapter 5. Stop reading their book."</blockquote>
      <h2>4. Rest is not a reward for hard work</h2>
      <p>It is a prerequisite for it. I spent my 20s treating rest as something you earn. I've since learned that well-rested people do better work, make better decisions, and are better company.</p>
      <h2>5. Say thank you more</h2>
      <p>Not performatively. Specifically. "Thank you for staying up to help me with that" lands differently than "thanks." Specificity shows you were present.</p>
      <hr>
      <p>I'm still learning. I expect to be learning at 40, 50, and beyond. But I think that's the point.</p>
    `,
    'art-of-slowing-down': `
      <p>There was a period in my life when I wore busyness like a badge of honour. "How are you?" would be answered with "exhausted but good — so much going on." The exhaustion was the proof that I was living fully.</p>
      <p>I've since changed my mind entirely.</p>
      <h2>The Hustle Mythology</h2>
      <p>We have built a culture that glorifies being busy while quietly pathologising being still. Waiting is boredom. Quiet is emptiness. Leisure is laziness dressed up in nicer clothes.</p>
      <p>But what if that's wrong? What if the opposite of rest isn't laziness, but burnout?</p>
      <blockquote>"It is not enough to be busy. So are the ants. The question is: what are we busy about?" — Henry David Thoreau</blockquote>
      <h2>What Slowing Down Actually Looks Like</h2>
      <ul>
        <li>Eating a meal without a screen</li>
        <li>Walking without a destination or podcast</li>
        <li>Letting a conversation end without checking your phone</li>
        <li>Sitting with a thought instead of immediately acting on it</li>
      </ul>
      <p>None of these are dramatic. None require a meditation retreat or a sabbatical. They are small surrenders of urgency.</p>
      <h2>What I Found in the Space</h2>
      <p>When I stopped filling every gap with content, noise, and tasks, I found something unexpected: ideas. Not the forced kind you produce under deadline, but the kind that arrive quietly, unbidden, when you're not looking for them.</p>
      <p>I also found I was better company. When you're always rushing, you're never fully present. Slowing down gave me back my presence.</p>
      <hr>
      <p>Try it this week. Pick one meal, one walk, one conversation — and give it your full, unhurried attention. See what shows up.</p>
    `,
    'street-food-mumbai': `
      <p>If you want to understand Mumbai, you have to eat it. Not in its restaurants — though those are wonderful — but on its streets, at its carts and stalls, among its people.</p>
      <p>I spent three days in Mumbai doing almost nothing but eating street food, and I came away with a profound respect for this city's relationship with flavour.</p>
      <h2>Vada Pav: The People's Burger</h2>
      <p>Every food story about Mumbai begins here: a spiced potato dumpling (vada) inside a soft bread roll (pav), with chutneys that range from sweet to searingly hot. It costs less than a cup of tea.</p>
      <p>The best one I had was near Dadar station, sold by a man who has been at the same cart for thirty years. It tasted like the city itself — quick, intense, unforgettable.</p>
      <h2>Pav Bhaji at Marine Drive</h2>
      <blockquote>"Good food doesn't need an elegant setting. It needs someone who cares about making it."</blockquote>
      <p>Pav bhaji — a thick, buttery vegetable mash served with bread rolls — is the dish I ordered three times in three days. Each version told me something different about the cook's priorities.</p>
      <h2>Bhel Puri by the Sea</h2>
      <p>There's something perfect about eating bhel puri — puffed rice, vegetables, tamarind chutney — standing at the edge of the Arabian Sea as the sun goes down. The tanginess of the chutney, the crunch of the sev, the salt air. This is Mumbai at its most romantic.</p>
      <hr>
      <p>I could write an entire book about Mumbai's street food. Maybe I will.</p>
    `,
    'why-i-started-writing': `
      <p>For a long time, I believed writing was for writers — capital-W Writers who had MFAs and literary agents and something Important to say. I was not that person. I was someone with ordinary thoughts about ordinary things who happened to sometimes arrange sentences in his head.</p>
      <p>Then a friend said something that cracked me open: "You don't write to be read. You write to figure out what you think."</p>
      <h2>Writing as Thinking</h2>
      <p>I started a private journal. Chaotic, unpolished, embarrassingly earnest. I wrote about things I was confused about. About relationships, ambitions, fears, small joys. I wrote badly, and then less badly, and then — on occasional, startling mornings — well.</p>
      <p>The writing wasn't the point. The thinking was.</p>
      <blockquote>"Writing is thinking on paper. You don't know what you believe until you've tried to explain it to someone else — even if that someone else is future-you."</blockquote>
      <h2>Why I Started Writing Publicly</h2>
      <p>That came later, and more reluctantly. The idea of people reading my thoughts felt like walking into a room mid-sentence. What if they laughed? What if I was wrong? What if my writing was just unremarkable?</p>
      <p>What pushed me over the edge was reading something someone else had written that made me feel less alone. I thought: if that person hadn't posted that, I wouldn't have had that experience. What if my unremarkable thoughts are useful to someone else's unremarkable Tuesday?</p>
      <h2>What I've Learned</h2>
      <ul>
        <li>Most of your readers are kinder than your anxious brain predicts.</li>
        <li>Being specific is more interesting than being universal.</li>
        <li>You don't need permission to have a perspective.</li>
      </ul>
      <hr>
      <p>If you've been thinking about writing, start. Not when you have something to say. Start so that you can discover what you have to say.</p>
    `
  };

  document.title = `${post.title} — Rajeev Kumar Gupta`;

  const catEl = document.getElementById('postCategory');
  const titleEl = document.getElementById('postTitle');
  const dateEl = document.getElementById('postDate');
  const readEl = document.getElementById('postReadTime');
  const emojiEl = document.getElementById('postEmoji');
  const bodyEl = document.getElementById('postBody');
  const tagsEl = document.getElementById('postTagsRow');

  if (catEl) catEl.textContent = post.category;
  if (titleEl) titleEl.textContent = post.title;
  if (dateEl) dateEl.textContent = post.date;
  if (readEl) readEl.textContent = post.readTime;
  if (emojiEl) emojiEl.textContent = post.emoji;
  if (bodyEl) bodyEl.innerHTML = postContents[slug] || `<p>${post.excerpt}</p>`;
  if (tagsEl) {
    tagsEl.innerHTML = post.tags.map(t => `<span class="tag">${t}</span>`).join('');
  }

  // Navigation
  const idx = posts.findIndex(p => p.slug === slug);
  const prevEl = document.getElementById('prevPost');
  const nextEl = document.getElementById('nextPost');

  if (prevEl && idx < posts.length - 1) {
    const prev = posts[idx + 1];
    prevEl.innerHTML = `<div class="label">← Previous</div><div class="title">${prev.title}</div>`;
    prevEl.href = `post.html?slug=${prev.slug}`;
  } else if (prevEl) { prevEl.style.display = 'none'; }

  if (nextEl && idx > 0) {
    const next = posts[idx - 1];
    nextEl.innerHTML = `<div class="label">Next →</div><div class="title">${next.title}</div>`;
    nextEl.href = `post.html?slug=${next.slug}`;
    nextEl.classList.add('next');
  } else if (nextEl) { nextEl.style.display = 'none'; }
}

// ===== Init =====
if (document.getElementById('postsGrid')) renderPosts();
if (document.getElementById('postTitle')) loadPost();
