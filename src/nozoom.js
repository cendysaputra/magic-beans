// User gak bisa zoom in/out

// Zoom keyboard
document.addEventListener('keydown', function(e) {
  // Ctrl + (+, -, 0) or Cmd + (+, -, 0) on Mac
  if ((e.ctrlKey || e.metaKey) &&
      (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
    e.preventDefault();
  }
});

// Zoom dari roda mouse
document.addEventListener('wheel', function(e) {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
  }
}, { passive: false });

// Zoom device sentuh
let lastTouchDistance = 0;

document.addEventListener('touchstart', function(e) {
  if (e.touches.length > 1) {
    lastTouchDistance = Math.hypot(
      e.touches[0].pageX - e.touches[1].pageX,
      e.touches[0].pageY - e.touches[1].pageY
    );
  }
}, { passive: false });

document.addEventListener('touchmove', function(e) {
  if (e.touches.length > 1) {
    e.preventDefault();

    const currentDistance = Math.hypot(
      e.touches[0].pageX - e.touches[1].pageX,
      e.touches[0].pageY - e.touches[1].pageY
    );

    // Deteksi gestur zoom mobile
    if (Math.abs(currentDistance - lastTouchDistance) > 10) {
      e.preventDefault();
    }

    lastTouchDistance = currentDistance;
  }
}, { passive: false });

// Zoom ketuk dua kali (mobile)
let lastTouchEnd = 0;

document.addEventListener('touchend', function(e) {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) {
    e.preventDefault();
  }
  lastTouchEnd = now;
}, { passive: false });

// Tambah meta view post (kalau tidak ada)
function addViewportMeta() {
  let viewport = document.querySelector('meta[name="viewport"]');

  if (viewport) {
    // Update existing viewport
    viewport.setAttribute('content',
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    );
  } else {
    // Buat baru viewport meta
    viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(viewport);
  }
}

// Tunggu DOM ready
document.addEventListener('DOMContentLoaded', addViewportMeta);