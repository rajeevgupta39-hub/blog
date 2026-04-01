// ===================================================
// IMAGE PROTECTION — rajeevfrombarhi.in
// Blocks right-click, drag, keyboard shortcuts,
// and overlays a watermark on all images.
// ===================================================

(function () {
  'use strict';

  const OWNER = '© Rajeev Kumar Gupta | rajeevfrombarhi.in';

  // ---- 1. Block Right-Click ----
  document.addEventListener('contextmenu', function (e) {
    if (isProtectedTarget(e.target)) {
      e.preventDefault();
      showToast('🔒 Images are protected.');
      return false;
    }
  });

  // ---- 2. Block Drag on Images ----
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      return false;
    }
  });

  // ---- 3. Block Keyboard Shortcuts ----
  document.addEventListener('keydown', function (e) {
    const key = e.key.toLowerCase();
    const ctrl = e.ctrlKey || e.metaKey;

    // Block Ctrl+S (Save), Ctrl+U (View Source), Ctrl+P (Print)
    if (ctrl && (key === 's' || key === 'u' || key === 'p')) {
      e.preventDefault();
      showToast('🔒 Content is protected.');
      return false;
    }

    // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools)
    if (
      key === 'f12' ||
      (ctrl && e.shiftKey && (key === 'i' || key === 'j' || key === 'c'))
    ) {
      e.preventDefault();
      showToast('🔒 Inspection is disabled.');
      return false;
    }

    // Block PrintScreen key (warn, can't fully stop OS-level)
    if (key === 'printscreen' || key === 'print') {
      e.preventDefault();
      // Clear clipboard after a tiny delay (works in some browsers)
      setTimeout(() => {
        try { navigator.clipboard.writeText(''); } catch (_) {}
      }, 300);
      showToast('🔒 Screenshots are disabled.');
      return false;
    }
  });

  // ---- 4. Block Print (Ctrl+P / window.print) ----
  window.addEventListener('beforeprint', function (e) {
    e.preventDefault();
    showToast('🔒 Printing is disabled.');
  });
  window.onbeforeprint = function () { return false; };

  // ---- 5. Add Transparent Overlay + Watermark on All Images ----
  function protectImages() {
    document.querySelectorAll('img:not(.protected)').forEach(img => {
      img.classList.add('protected');
      img.setAttribute('draggable', 'false');
      img.style.userSelect = 'none';
      img.style.webkitTouchCallout = 'none';
      img.style.pointerEvents = 'none'; // overlay handles all interaction

      const parent = img.parentElement;
      if (!parent) return;

      // Ensure parent is positioned
      const pos = window.getComputedStyle(parent).position;
      if (pos === 'static') parent.style.position = 'relative';

      // Create transparent overlay
      if (!parent.querySelector('.img-shield')) {
        const shield = document.createElement('div');
        shield.className = 'img-shield';
        shield.setAttribute('draggable', 'false');
        shield.addEventListener('contextmenu', e => {
          e.preventDefault();
          showToast('🔒 Images are protected.');
          return false;
        });
        shield.addEventListener('dragstart', e => e.preventDefault());

        // Watermark label inside shield
        const wm = document.createElement('span');
        wm.className = 'img-watermark';
        wm.textContent = OWNER;
        shield.appendChild(wm);

        parent.appendChild(shield);
      }
    });
  }

  // Run on load and whenever DOM updates (for dynamically rendered gallery)
  protectImages();
  const observer = new MutationObserver(protectImages);
  observer.observe(document.body, { childList: true, subtree: true });

  // ---- 6. Disable text selection on the whole page ----
  document.addEventListener('selectstart', function (e) {
    if (isProtectedTarget(e.target)) e.preventDefault();
  });

  // ---- 7. Helper: is the target an image or inside gallery? ----
  function isProtectedTarget(target) {
    return (
      target.tagName === 'IMG' ||
      target.classList.contains('img-shield') ||
      target.closest('.gallery-card, .album-card, .grid-item, .masonry-item, .slide-display, .lightbox, .hero-photo-item, .about-avatar-large')
    );
  }

  // ---- 8. Toast Helper ----
  function showToast(msg) {
    let toast = document.getElementById('protectToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'protectToast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

})();
