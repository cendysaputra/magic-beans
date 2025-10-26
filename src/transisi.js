import gsap from 'gsap';

// Animasi transisi awan
function playTransition() {
  const transisi1 = document.getElementById('transisi-1');
  const transisi2 = document.getElementById('transisi-2');

  if (!transisi1 || !transisi2) return;

  // Awan masuk nutup layar
  const timeline = gsap.timeline();

  timeline
    // Transisi-1
    .to(transisi1, {
      x: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, 0)

    // Transisi-2
    .to(transisi2, {
      x: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, 0.2);
}

// Button Next
document.addEventListener('DOMContentLoaded', function() {
  const transisi1 = document.getElementById('transisi-1');
  const transisi2 = document.getElementById('transisi-2');
  const acceptBtn = document.getElementById('acceptBtn');

  // Set posisi awal awan di luar layar saat page load
  if (transisi1 && transisi2) {
    gsap.set(transisi1, { x: "-150vw" }); // transisi-1 dari kiri
    gsap.set(transisi2, { x: "150vw" });  // transisi-2 dari kanan
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function() {
      playTransition();
    });
  }
});
