import gsap from 'gsap';

// Animasi pohon terkena angin
function initTreeAnimation() {
  const tree = document.getElementById('tree');

  if (!tree) return;

  // Posisi statis bagian bawah pohon
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
      rotation: 0.45,
      duration: 2.2,
      ease: "sine.inOut"
    })

    // Gerakan besar > angin
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
      rotation: -0.25,
      duration: 2.5,
      ease: "sine.inOut"
    })

    .to(tree, {
      rotation: 0.4,
      duration: 2,
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


document.addEventListener('DOMContentLoaded', initTreeAnimation);