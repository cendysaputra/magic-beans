import gsap from 'gsap';

// Animasi daun terbang
function createFallingLeaf(leafElement, delay = 0) {
  // Random values untuk animasi ini
  const randomOpacity = 0.7 + Math.random() * 0.3;
  const randomScale = 0.8 + Math.random() * 0.4;
  const randomRotation = 360 + Math.random() * 720;
  const duration = 12 + Math.random() * 6;
  const repeatDelay = Math.random() * 8 + 6;

  let loopCount = 0;

  // Reset posisi awal
  function resetLeafPosition() {
    const startY = -50 - Math.random() * 100;
    gsap.set(leafElement, {
      left: `${100 + Math.random() * 10}%`,
      top: `${startY}px`,
      opacity: 0,
      scale: randomScale,
      rotation: Math.random() * 360
    });
  }

  // Posisi awal pertama kali
  resetLeafPosition();

  // Buat animasi loop
  function createAnimation() {
    const patternType = loopCount % 3; // 3 Pattern
    loopCount++;

    const tl = gsap.timeline({
      delay: loopCount === 1 ? delay : repeatDelay,
      onComplete: () => {
        createAnimation();
      }
    });

    if (patternType === 0) {
      // Pattern 1: Kanan atas → Kiri bawah
      gsap.set(leafElement, {
        left: `${100 + Math.random() * 10}%`,
        top: `${-50 - Math.random() * 100}px`,
        opacity: 0,
        scale: randomScale,
        rotation: Math.random() * 360
      });

      tl.to(leafElement, {
        opacity: randomOpacity,
        duration: 1.5,
        ease: "power1.in"
      })

      .to(leafElement, {
        left: "-10%",
        top: `${window.innerHeight + 100}px`,
        rotation: randomRotation,
        duration: duration,
        ease: "linear"
      }, 0.5);

    } else if (patternType === 1) {
      // Pattern 2: Kanan atas → Kiri tengah
      gsap.set(leafElement, {
        left: `${100 + Math.random() * 10}%`,
        top: `${-50 - Math.random() * 100}px`,
        opacity: 0,
        scale: randomScale,
        rotation: Math.random() * 360
      });

      const midY = window.innerHeight / 2 + (Math.random() * 200 - 100);

      tl.to(leafElement, {
        opacity: randomOpacity,
        duration: 1.5,
        ease: "power1.in"
      })

      .to(leafElement, {
        left: "-10%",
        top: midY,
        rotation: randomRotation,
        duration: duration,
        ease: "linear",
        
        keyframes: {
          top: [
            { value: midY - 100, duration: duration * 0.25 }, // Naik sedikit
            { value: midY + 50, duration: duration * 0.25 },  // Turun
            { value: midY - 80, duration: duration * 0.25 },  // Naik lagi
            { value: midY, duration: duration * 0.25 }        // Ke tengah
          ]
        }
      }, 0.5);

    } else {
      // Pattern 3: Kanan bawah → turun kiri bawah
      // Dengan gerakan melingkar sambil turun
      const startBottomY = window.innerHeight * 0.7;
      const endBottomY = window.innerHeight + 100;

      gsap.set(leafElement, {
        left: `${100 + Math.random() * 10}%`,
        top: `${startBottomY}px`,
        opacity: 0,
        scale: randomScale,
        rotation: Math.random() * 360
      });

      tl.to(leafElement, {
        opacity: randomOpacity,
        duration: 1.5,
        ease: "power1.in"
      })

      // Animasi diagonal
      .to(leafElement, {
        duration: duration,
        rotation: randomRotation,
        ease: "linear",
        
        keyframes: [
          {
            left: "80%",
            top: startBottomY + 80,
            duration: duration * 0.2
          },

          {
            left: "65%",
            top: startBottomY + 150,
            duration: duration * 0.2
          },

          {
            left: "45%",
            top: startBottomY + 240,
            duration: duration * 0.2
          },

          {
            left: "25%",
            top: startBottomY + 320,
            duration: duration * 0.2
          },

          {
            left: "-10%",
            top: endBottomY,
            duration: duration * 0.2
          }
        ]
      }, 0.5);
    }

    // Fade out
    tl.to(leafElement, {
      opacity: 0,
      duration: 2,
      ease: "power1.out"
    }, `-=2`);

    return tl;
  }

  // Mulai animasi
  createAnimation();
}

// Inisialisasi daun terbang
function initFallingLeaves() {
  const leaves = document.querySelectorAll('.falling-leaf');

  if (leaves.length === 0) {
    console.warn('No falling leaves found!');
    return;
  }

  leaves.forEach((leaf, index) => {
    // Delay buat tiap daun
    const delay = index * 4;
    createFallingLeaf(leaf, delay);
  });
}


document.addEventListener('DOMContentLoaded', initFallingLeaves);