import gsap from 'gsap';

// Deteksi mobile/tablet + desktop
function isMobile() {
  return window.innerWidth < 1024; // Mobile & Tablet
}

// Transisi awan
function playTransition() {
  const transisi1 = document.getElementById('transisi-1');
  const transisi2 = document.getElementById('transisi-2');

  if (!transisi1 || !transisi2) return;

  // Awan masuk nutup layar
  const timeline = gsap.timeline();

  if (isMobile()) {
    // Mobile & Tablet: animasi atas > bawah
    timeline
      // Transisi-1 : atas
      .to(transisi1, {
        y: 0,
        duration: 1.5,
        ease: "power2.inOut"
      }, 0)

      // Transisi-2 : bawah
      .to(transisi2, {
        y: "16.67vh",
        duration: 1.5,
        ease: "power2.inOut"
      }, 0.2);
  } else {
    // Desktop: animasi kanan > kiri
    timeline
      // Transisi-1 : kiri
      .to(transisi1, {
        x: 0,
        duration: 1.5,
        ease: "power2.inOut"
      }, 0)

      // Transisi-2 : kanan
      .to(transisi2, {
        x: 0,
        duration: 1.5,
        ease: "power2.inOut"
      }, 0.2);
  }
}

// Button Next
document.addEventListener('DOMContentLoaded', function() {
  const transisi1 = document.getElementById('transisi-1');
  const transisi2 = document.getElementById('transisi-2');
  const acceptBtn = document.getElementById('acceptBtn');

  // Posisi awal awan
  if (transisi1 && transisi2) {
    if (isMobile()) {
      // Mobile & Tablet: posisi awal atas-bawah
      gsap.set(transisi1, { y: "-150vh" });
      gsap.set(transisi2, { y: "150vh" });
    } else {
      // Desktop: posisi awal kanan-kiri
      gsap.set(transisi1, { x: "-150vw" });
      gsap.set(transisi2, { x: "150vw" });
    }
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function() {
      playTransition();
    });
  }
});