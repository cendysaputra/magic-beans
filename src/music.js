import './style.css';
import gsap from 'gsap';



// Settings Music Web
const audio = new Audio('/assets/Sound/Telling the Story.wav');
audio.loop = true;
audio.volume = 0.4; // Settings Volume

// Mute (user pertama buka web)
let isMuted = true;

// Play music
function playAudio() {
  audio.play().catch(e => console.log('Audio play error:', e));
  isMuted = false;
}

// Pause music
function pauseAudio() {
  audio.pause();
  isMuted = true;
}

// Klik button > nyala
function getIsMuted() {
  return isMuted;
}



// Animasi wave music
let waveTimeline = null;

// Animasi gelombang
function createWaveTimeline(wavePath) {
  if (!wavePath) return null;

  // Gelombang looping
  waveTimeline = gsap.timeline({ repeat: -1, paused: true });

  // Gelombang naik/turun
  waveTimeline
    .to(wavePath, {
      attr: { d: "M 0 4 Q 2 7, 4 4 T 8 4 T 12 4 T 16 4 T 20 4" },
      duration: 0.8,
      ease: "power1.inOut"
    })
    .to(wavePath, {
      attr: { d: "M 0 4 Q 2 1, 4 4 T 8 4 T 12 4 T 16 4 T 20 4" },
      duration: 0.8,
      ease: "power1.inOut"
    });

  // Garis lurus (mute)
  gsap.set(wavePath, {
    attr: { d: "M 0 4 L 16 4" }
  });

  return waveTimeline;
}



// Wave jadi lurus (mute)
function setWaveStraight(wavePath) {
  gsap.set(wavePath, {
    attr: { d: "M 0 4 L 16 4" }
  });
}

// Jadi wave (play)
function setWaveAnimated(wavePath) {
  gsap.set(wavePath, {
    attr: { d: "M 0 4 Q 2 1, 4 4 T 8 4 T 12 4 T 16 4 T 20 4" }
  });
}



// Nyala mati music + animasi
function toggleSound(wavePath) {
  if (getIsMuted()) {
    playAudio();
    if (waveTimeline) {
      setWaveAnimated(wavePath);
      waveTimeline.play(0);
    }
  }
  
  else {
    pauseAudio();
    if (waveTimeline) {
      waveTimeline.pause();
      setWaveStraight(wavePath);
    }
  }
}



// Auto-play musik pas user klik tombol (Triger utama)
function autoPlaySound(wavePath) {
  if (getIsMuted()) {
    playAudio();
    if (waveTimeline) {
      setWaveAnimated(wavePath);
      waveTimeline.play(0);
    }
  }
}



// Jalan pas laman selesai load
document.addEventListener('DOMContentLoaded', function() {
  const wavePath = document.getElementById('wavePath');
  const soundToggle = document.getElementById('soundToggle');
  const acceptBtn = document.getElementById('acceptBtn');
  const denyBtn = document.getElementById('denyBtn');

  if (wavePath) {
    createWaveTimeline(wavePath);

    if (soundToggle) {
      soundToggle.addEventListener('click', () => toggleSound(wavePath));
    }

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => autoPlaySound(wavePath));
    }

    if (denyBtn) {
      denyBtn.addEventListener('click', () => autoPlaySound(wavePath));
    }
  }
});