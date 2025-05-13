

// 1. Typed.js Animation
document.addEventListener("DOMContentLoaded", function() {
  const typed = new Typed(".typing-text", {
    strings: ["Aerospace Engineer", "VTOL Designer", "UAV Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    showCursor: false
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

// 2. Text-to-Speech Intro
window.addEventListener('load', () => {
  const synth = window.speechSynthesis;

  function speakIntroWithVoice(voice) {
    const now = new Date();
    const hour = now.getHours();
    let greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

    const intro = `${greeting}. Welcome to Aajay Sundaran's aerospace portfolio. Discover innovations in vtol design, UAV development, and advanced flight systems.`;

    const utterance = new SpeechSynthesisUtterance(intro);
    utterance.voice = voice;
    utterance.rate = 1;
    utterance.pitch = 1.2;
    synth.speak(utterance);
  }

  function waitForVoices(retries = 20) {
    const interval = setInterval(() => {
      const voices = synth.getVoices();
      if (voices.length !== 0) {
        clearInterval(interval);

        console.log("Voices loaded:", voices.map(v => `${v.name} (${v.lang})`));

        const ukVoice = voices.find(v => v.name === "Google UK English Female" && v.lang === "en-GB");
        speakIntroWithVoice(ukVoice || voices[0]);  // fallback to first voice if not found
      } else if (--retries === 0) {
        clearInterval(interval);
        console.warn("Could not load speech synthesis voices.");
      }
    }, 200);
  }

  waitForVoices();
});















window.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector('#page9 form');
  if (contactForm) {
    contactForm.reset();
  }
});




if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  // Jump instantly to top-left of the document
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

