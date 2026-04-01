// ===================================================
// GALLERY DATA — Add your places and photos here
// ===================================================
// HOW TO ADD PHOTOS:
//   1. Create a folder: blog/images/chanderi/
//   2. Add photos:      blog/images/chanderi/1.jpg, 2.jpg, 3.jpg ...
//   3. Update the photos array below for that place
// ===================================================

const galleryData = [
  {
    id: 'chanderi',
    name: 'Chanderi',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Ancient weavers town with Mughal monuments & baolis',
    emoji: '🏯',
    photos: [
      // { src: 'images/chanderi/1.jpg', caption: 'Chanderi Fort' },
      // { src: 'images/chanderi/2.jpg', caption: 'Koshak Mahal' },
    ]
  },
  {
    id: 'orchha',
    name: 'Orchha',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Riverside town of cenotaphs and Bundela kings',
    emoji: '🛕',
    photos: [
      // { src: 'images/orchha/1.jpg', caption: 'Ram Raja Temple' },
      // { src: 'images/orchha/2.jpg', caption: 'Cenotaphs on the Betwa' },
    ]
  },
  {
    id: 'datia',
    name: 'Datia',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Seat of the goddess Pitambara Peeth',
    emoji: '⛩️',
    photos: [
      // { src: 'images/datia/1.jpg', caption: 'Pitambara Peeth' },
    ]
  },
  {
    id: 'bandhavgarh',
    name: 'Bandhavgarh',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Home of the Royal Bengal Tiger',
    emoji: '🐯',
    photos: [
      // { src: 'images/bandhavgarh/1.jpg', caption: 'Tiger Sighting' },
      // { src: 'images/bandhavgarh/2.jpg', caption: 'Jungle Safari' },
    ]
  },
  {
    id: 'bhopal',
    name: 'Bhopal',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'City of Lakes and the Bharat Bhavan',
    emoji: '🌊',
    photos: [
      // { src: 'images/bhopal/1.jpg', caption: 'Upper Lake at Sunset' },
      // { src: 'images/bhopal/2.jpg', caption: 'Tajul Masjid' },
    ]
  },
  {
    id: 'ujjain',
    name: 'Ujjain',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Sacred city on the banks of Kshipra',
    emoji: '🙏',
    photos: [
      // { src: 'images/ujjain/1.jpg', caption: 'Mahakaleshwar Temple' },
      // { src: 'images/ujjain/2.jpg', caption: 'Kshipra Ghat' },
    ]
  },
  {
    id: 'mandu',
    name: 'Mandu (Mandav)',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Ruined city of romance, forts and baolis',
    emoji: '🏰',
    photos: [
      // { src: 'images/mandu/1.jpg', caption: 'Jahaz Mahal' },
      // { src: 'images/mandu/2.jpg', caption: 'Roopmati Pavilion' },
    ]
  },
  {
    id: 'maheshwar',
    name: 'Maheshwar',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Holkar queen Ahilya Bai\'s riverside fortress',
    emoji: '⛵',
    photos: [
      // { src: 'images/maheshwar/1.jpg', caption: 'Maheshwar Fort Ghats' },
      // { src: 'images/maheshwar/2.jpg', caption: 'Narmada River View' },
    ]
  },
  {
    id: 'hanuwantiya',
    name: 'Hanuwantiya',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Island retreat on Indira Sagar reservoir',
    emoji: '🏝️',
    photos: [
      // { src: 'images/hanuwantiya/1.jpg', caption: 'Lakeside View' },
    ]
  },
  {
    id: 'bhojpur',
    name: 'Bhojpur',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Unfinished Shiva temple, an architectural marvel',
    emoji: '🗿',
    photos: [
      // { src: 'images/bhojpur/1.jpg', caption: 'Bhojeshwar Temple' },
    ]
  },
  {
    id: 'salkanpur',
    name: 'Salkanpur',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Hilltop temple of Goddess Bijasan Mata',
    emoji: '⛰️',
    photos: [
      // { src: 'images/salkanpur/1.jpg', caption: 'Hilltop View' },
    ]
  },
  {
    id: 'bhimbetka',
    name: 'Bhimbetka',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'UNESCO rock shelters with prehistoric paintings',
    emoji: '🪨',
    photos: [
      // { src: 'images/bhimbetka/1.jpg', caption: 'Rock Art' },
      // { src: 'images/bhimbetka/2.jpg', caption: 'Cave Entrance' },
    ]
  },
  {
    id: 'indore',
    name: 'Indore',
    region: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    description: 'Foodie capital of India',
    emoji: '🍽️',
    photos: [
      // { src: 'images/indore/1.jpg', caption: 'Sarafa Bazaar Night' },
      // { src: 'images/indore/2.jpg', caption: 'Rajwada Palace' },
    ]
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    region: 'gujarat',
    state: 'Gujarat',
    description: 'India\'s first UNESCO World Heritage City',
    emoji: '🕌',
    photos: [
      // { src: 'images/ahmedabad/1.jpg', caption: 'Adalaj Stepwell' },
      // { src: 'images/ahmedabad/2.jpg', caption: 'Old City Pols' },
    ]
  },
  {
    id: 'somnath',
    name: 'Somnath',
    region: 'gujarat',
    state: 'Gujarat',
    description: 'One of the twelve sacred Jyotirlingas',
    emoji: '🌊',
    photos: [
      // { src: 'images/somnath/1.jpg', caption: 'Somnath Temple' },
      // { src: 'images/somnath/2.jpg', caption: 'Arabian Sea View' },
    ]
  },
  {
    id: 'dwarka',
    name: 'Dwarka',
    region: 'gujarat',
    state: 'Gujarat',
    description: 'Sacred city of Lord Krishna by the sea',
    emoji: '🐚',
    photos: [
      // { src: 'images/dwarka/1.jpg', caption: 'Dwarkadhish Temple' },
    ]
  },
  {
    id: 'junagadh',
    name: 'Junagadh',
    region: 'gujarat',
    state: 'Gujarat',
    description: 'City at the foothills of sacred Girnar',
    emoji: '🦁',
    photos: [
      // { src: 'images/junagadh/1.jpg', caption: 'Girnar Climb' },
      // { src: 'images/junagadh/2.jpg', caption: 'Uparkot Fort' },
    ]
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    region: 'maharashtra',
    state: 'Maharashtra',
    description: 'The city that never sleeps',
    emoji: '🌆',
    photos: [
      // { src: 'images/mumbai/1.jpg', caption: 'Gateway of India' },
      // { src: 'images/mumbai/2.jpg', caption: 'Marine Drive' },
      // { src: 'images/mumbai/3.jpg', caption: 'Street Food' },
    ]
  },
  {
    id: 'coorg',
    name: 'Coorg',
    region: 'karnataka',
    state: 'Karnataka',
    description: 'Scotland of India — coffee and misty hills',
    emoji: '☕',
    photos: [
      // { src: 'images/coorg/1.jpg', caption: 'Coffee Plantation' },
      // { src: 'images/coorg/2.jpg', caption: 'Abbey Falls' },
    ]
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    region: 'kerala',
    state: 'Kerala',
    description: 'Wild jungles and spice gardens of Kerala',
    emoji: '🌿',
    photos: [
      // { src: 'images/wayanad/1.jpg', caption: 'Chembra Peak' },
      // { src: 'images/wayanad/2.jpg', caption: 'Spice Garden' },
    ]
  }
];

// ===================================================
// GALLERY ENGINE — no need to edit below this line
// ===================================================

let currentPlace = null;
let currentView = 'grid';
let currentPhotoIndex = 0;
let slideshowTimer = null;

// ---- Render Albums ----
function renderAlbums(filter = 'all') {
  const grid = document.getElementById('albumGrid');
  const countEl = document.getElementById('galleryCount');
  const filtered = filter === 'all' ? galleryData : galleryData.filter(p => p.region === filter);

  countEl.textContent = filtered.length + ' place' + (filtered.length !== 1 ? 's' : '');

  grid.innerHTML = filtered.map(place => {
    const count = place.photos.length;
    const cover = count > 0 ? place.photos[0].src : null;
    return `
      <div class="album-card" onclick="openAlbum('${place.id}')">
        <div class="album-cover">
          ${cover
            ? `<img src="${cover}" alt="${place.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />`
            : ''}
          <div class="album-placeholder" ${cover ? 'style="display:none"' : ''}>${place.emoji}</div>
        </div>
        <div class="album-info">
          ${count > 0
            ? `<span class="no-photos-label" style="color:var(--accent); font-style:normal; font-weight:600;">${count} photo${count !== 1 ? 's' : ''}</span>`
            : `<span class="no-photos-label">No photos yet</span>`}
          <h3>${place.name}</h3>
          <span class="gallery-region">${place.state}</span>
        </div>
      </div>`;
  }).join('');
}

// ---- Open Album Modal ----
function openAlbum(id) {
  currentPlace = galleryData.find(p => p.id === id);
  if (!currentPlace) return;

  document.getElementById('modalTitle').textContent = currentPlace.name;
  document.getElementById('modalState').textContent = currentPlace.state + ' · ' + currentPlace.description;
  document.getElementById('modalPhotoCount').textContent = currentPlace.photos.length + ' photo' + (currentPlace.photos.length !== 1 ? 's' : '');

  setView(currentView);
  document.getElementById('albumModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAlbum() {
  document.getElementById('albumModal').classList.remove('open');
  document.body.style.overflow = '';
  stopSlideshow();
}

// ---- View Switcher ----
function setView(view) {
  currentView = view;
  stopSlideshow();
  document.querySelectorAll('.view-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));

  const content = document.getElementById('modalContent');
  content.className = 'modal-content';

  if (!currentPlace || currentPlace.photos.length === 0) {
    content.innerHTML = `<div class="empty-album"><div style="font-size:3rem">${currentPlace ? currentPlace.emoji : '📷'}</div><p>No photos added yet.</p><small>Add photos to <code>images/${currentPlace ? currentPlace.id : 'folder'}/</code> and update gallery.js</small></div>`;
    return;
  }

  if (view === 'grid') renderGridView(content);
  else if (view === 'masonry') renderMasonryView(content);
  else if (view === 'slideshow') renderSlideshowView(content);
}

// ---- Grid View ----
function renderGridView(container) {
  container.classList.add('view-grid');
  container.innerHTML = currentPlace.photos.map((photo, i) => `
    <div class="grid-item" onclick="openLightbox(${i})">
      <img src="${photo.src}" alt="${photo.caption || ''}" loading="lazy"
        onerror="this.parentElement.classList.add('img-error'); this.style.display='none';" />
      <div class="grid-overlay"><span>${photo.caption || ''}</span></div>
    </div>`).join('');
}

// ---- Masonry View ----
function renderMasonryView(container) {
  container.classList.add('view-masonry');
  container.innerHTML = currentPlace.photos.map((photo, i) => `
    <div class="masonry-item" onclick="openLightbox(${i})">
      <img src="${photo.src}" alt="${photo.caption || ''}" loading="lazy"
        onerror="this.parentElement.classList.add('img-error'); this.style.display='none';" />
      ${photo.caption ? `<div class="masonry-caption">${photo.caption}</div>` : ''}
    </div>`).join('');
}

// ---- Slideshow View ----
function renderSlideshowView(container) {
  container.classList.add('view-slideshow');
  currentPhotoIndex = 0;
  container.innerHTML = `
    <div class="slideshow-main">
      <button class="slide-btn slide-prev" onclick="slideNavigate(-1)">&#8249;</button>
      <div class="slide-display">
        <img id="slideImg" src="" alt="" />
        <div class="slide-caption" id="slideCaption"></div>
      </div>
      <button class="slide-btn slide-next" onclick="slideNavigate(1)">&#8250;</button>
    </div>
    <div class="slide-counter" id="slideCounter"></div>
    <div class="slide-thumbs" id="slideThumbs">
      ${currentPlace.photos.map((p, i) => `
        <div class="slide-thumb ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})">
          <img src="${p.src}" alt="" loading="lazy" onerror="this.style.display='none'" />
        </div>`).join('')}
    </div>
    <div class="slide-controls">
      <button class="btn btn-outline" onclick="toggleAutoplay()" id="autoplayBtn" style="font-size:0.82rem;padding:7px 14px;">▶ Autoplay</button>
    </div>`;
  updateSlide();
}

function updateSlide() {
  const photo = currentPlace.photos[currentPhotoIndex];
  const img = document.getElementById('slideImg');
  const caption = document.getElementById('slideCaption');
  const counter = document.getElementById('slideCounter');
  const thumbs = document.querySelectorAll('.slide-thumb');
  if (!photo || !img) return;

  img.src = photo.src;
  img.alt = photo.caption || '';
  if (caption) caption.textContent = photo.caption || '';
  if (counter) counter.textContent = (currentPhotoIndex + 1) + ' / ' + currentPlace.photos.length;

  thumbs.forEach((t, i) => t.classList.toggle('active', i === currentPhotoIndex));
  // scroll active thumb into view
  const activeThumb = document.querySelector('.slide-thumb.active');
  if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function slideNavigate(dir) {
  currentPhotoIndex = (currentPhotoIndex + dir + currentPlace.photos.length) % currentPlace.photos.length;
  updateSlide();
}

function goToSlide(i) {
  currentPhotoIndex = i;
  updateSlide();
}

function toggleAutoplay() {
  const btn = document.getElementById('autoplayBtn');
  if (slideshowTimer) {
    stopSlideshow();
    if (btn) btn.textContent = '▶ Autoplay';
  } else {
    slideshowTimer = setInterval(() => slideNavigate(1), 3000);
    if (btn) btn.textContent = '⏸ Pause';
  }
}

function stopSlideshow() {
  if (slideshowTimer) { clearInterval(slideshowTimer); slideshowTimer = null; }
}

// ---- Lightbox (for Grid & Masonry) ----
function openLightbox(index) {
  if (!currentPlace) return;
  currentPhotoIndex = index;
  const lb = document.getElementById('lightbox');
  lb.classList.add('open');
  updateLightbox();
}

function updateLightbox() {
  const photo = currentPlace.photos[currentPhotoIndex];
  document.getElementById('lightboxImg').src = photo.src;
  document.getElementById('lightboxImg').alt = photo.caption || '';
  document.getElementById('lightboxPlace').textContent = currentPlace.name;
  document.getElementById('lightboxCaption').textContent = photo.caption || '';
  document.getElementById('lbCounter').textContent = (currentPhotoIndex + 1) + ' / ' + currentPlace.photos.length;
  document.getElementById('lbPrev').style.opacity = currentPhotoIndex > 0 ? '1' : '0.3';
  document.getElementById('lbNext').style.opacity = currentPhotoIndex < currentPlace.photos.length - 1 ? '1' : '0.3';
}

function lbNavigate(dir, e) {
  if (e) e.stopPropagation();
  const next = currentPhotoIndex + dir;
  if (next >= 0 && next < currentPlace.photos.length) {
    currentPhotoIndex = next;
    updateLightbox();
  }
}

function closeLightbox(e) {
  if (!e || e.target === document.getElementById('lightbox') || e.target.classList.contains('lightbox-close')) {
    document.getElementById('lightbox').classList.remove('open');
  }
}

// ---- Keyboard Nav ----
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  const modal = document.getElementById('albumModal');

  if (lb && lb.classList.contains('open')) {
    if (e.key === 'ArrowLeft') lbNavigate(-1);
    if (e.key === 'ArrowRight') lbNavigate(1);
    if (e.key === 'Escape') closeLightbox({ target: lb });
  } else if (modal && modal.classList.contains('open') && currentView === 'slideshow') {
    if (e.key === 'ArrowLeft') slideNavigate(-1);
    if (e.key === 'ArrowRight') slideNavigate(1);
    if (e.key === 'Escape') closeAlbum();
  } else if (modal && modal.classList.contains('open')) {
    if (e.key === 'Escape') closeAlbum();
  }
});

// ---- Region Filters ----
document.addEventListener('DOMContentLoaded', () => {
  renderAlbums();

  document.querySelectorAll('#galleryFilters .cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#galleryFilters .cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAlbums(btn.dataset.region);
    });
  });
});
