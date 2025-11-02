import gsap from 'gsap';

// Animasi pohon knea angin
function initTreeAnimation() {
  const tree = document.getElementById('tree');

  if (!tree) return;

  // Statis bawah pohon
  gsap.set(tree, {
    transformOrigin: "bottom left"
  });

  // Animasi gerak tiup angin
  const treeTimeline = gsap.timeline({ repeat: -1 });

  treeTimeline
    // Gerak kecil
    .to(tree, {
      rotation: 0.4,
      duration: 2,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: -0.3,
      duration: 1.8,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: 0.25,
      duration: 1.5,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: -0.15,
      duration: 1.6,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: 0.45,
      duration: 2.2,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: -0.2,
      duration: 1.4,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: 0.35,
      duration: 1.7,
      ease: "sine.inOut"
    })

    // Gerakan besar
    .to(tree, {
      rotation: 0.5,
      duration: 1.5,
      ease: "sine.in"
    })

    .to(tree, {
      rotation: 0.8,
      duration: 1.2,
      ease: "sine.in"
    })

    // Efek kena angin besar
    .to(tree, {
      rotation: 1.5,
      duration: 2,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: -0.8,
      duration: 1.8,
      ease: "sine.inOut"
    })

    // Stabil setelah angin besar
    .to(tree, {
      rotation: 0.5,
      duration: 1.8,
      ease: "sine.out"
    })

    .to(tree, {
      rotation: 0.2,
      duration: 1.5,
      ease: "sine.out"
    })

    // Balik ke gerak kecil
    .to(tree, {
      rotation: -0.35,
      duration: 2,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: 0.3,
      duration: 1.8,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: -0.15,
      duration: 1.6,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: 0.22,
      duration: 1.5,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: -0.25,
      duration: 2.5,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: 0.18,
      duration: 1.7,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: 0.4,
      duration: 2,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: -0.28,
      duration: 1.6,
      ease: "sine.inOut"
    })

    // Efek kena angin besar (lagi)
    .to(tree, {
      rotation: 0.6,
      duration: 1.5,
      ease: "sine.in"
    })
    .to(tree, {
      rotation: 1,
      duration: 1.3,
      ease: "sine.in"
    })

    // Efek kena angin besar (kedua)
    .to(tree, {
      rotation: 1.8,
      duration: 2.2,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: -0.5,
      duration: 1.8,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: 0.4,
      duration: 1.8,
      ease: "sine.out"
    })

    .to(tree, {
      rotation: 0.2,
      duration: 1.5,
      ease: "sine.out"
    });
}


// Animasi pohon kanan kena angin
function initTreeRightAnimation() {
  const treeRight = document.getElementById('tree-right');

  if (!treeRight) return;

  // Posisi statis bawah
  gsap.set(treeRight, {
    transformOrigin: "bottom center"
  });

  // Gerak tiup angin
  const treeRightTimeline = gsap.timeline({
    repeat: -1,
    delay: 1.5
  });

  treeRightTimeline
    // Gerak kecil
    .to(treeRight, {
      rotation: -0.25,
      duration: 1.6,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: 0.15,
      duration: 2.3,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: -0.35,
      duration: 1.9,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: 0.28,
      duration: 1.4,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: -0.18,
      duration: 2.1,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: 0.4,
      duration: 1.7,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: -0.22,
      duration: 1.5,
      ease: "sine.inOut"
    })

    // Gerakan besar
    .to(treeRight, {
      rotation: -0.5,
      duration: 1.3,
      ease: "sine.in"
    })

    .to(treeRight, {
      rotation: -0.85,
      duration: 1.6,
      ease: "sine.in"
    })

    // Efek kena angin besar
    .to(treeRight, {
      rotation: -1.2,
      duration: 2.4,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: 0.6,
      duration: 2.1,
      ease: "sine.inOut"
    })

    // Stabil setelah angin besar
    .to(treeRight, {
      rotation: -0.35,
      duration: 2,
      ease: "sine.out"
    })

    .to(treeRight, {
      rotation: -0.15,
      duration: 1.7,
      ease: "sine.out"
    })

    // Balik ke gerak kecil
    .to(treeRight, {
      rotation: 0.22,
      duration: 1.7,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: -0.3,
      duration: 2.2,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: 0.18,
      duration: 1.4,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: -0.12,
      duration: 1.9,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: 0.26,
      duration: 2.3,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: -0.2,
      duration: 1.5,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: -0.38,
      duration: 2.1,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: 0.15,
      duration: 1.8,
      ease: "sine.inOut"
    })

    // Efek kena angin besar (lagi)
    .to(treeRight, {
      rotation: -0.48,
      duration: 1.7,
      ease: "sine.in"
    })
    .to(treeRight, {
      rotation: -0.75,
      duration: 1.4,
      ease: "sine.in"
    })

    // Efek kena angin besar (kedua)
    .to(treeRight, {
      rotation: -1.45,
      duration: 2.5,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: 0.5,
      duration: 2,
      ease: "sine.inOut"
    })

    .to(treeRight, {
      rotation: -0.3,
      duration: 2.1,
      ease: "sine.out"
    })

    .to(treeRight, {
      rotation: -0.18,
      duration: 1.6,
      ease: "sine.out"
    });
}


document.addEventListener('DOMContentLoaded', () => {
  initTreeAnimation();
  initTreeRightAnimation();
});