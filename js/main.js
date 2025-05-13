

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

      function speakIntro(voice) {
        const hour = new Date().getHours();
        const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

        const text = `${greeting}. Welcome to Ajay Sundaran's aerospace portfolio. Discover innovations in VTOL design, UAV development, and advanced flight systems.`;

        const utter = new SpeechSynthesisUtterance(text);
        utter.voice = voice;
        utter.rate = 1;
        utter.pitch = 1.2;

        synth.cancel();  // Cancel any queued speech
        synth.speak(utter);
      }

      function trySpeak() {
        const voices = synth.getVoices();
        if (voices.length === 0) {
          // Retry until voices load (max 20 tries)
          if (window.__tryCount === undefined) window.__tryCount = 0;
          if (window.__tryCount++ < 20) {
            return setTimeout(trySpeak, 200);
          } else {
            console.warn("No voices loaded.");
            return;
          }
        }

        console.log("Voices loaded:");
        voices.forEach(v => console.log(`${v.name} (${v.lang})`));

        const preferred = voices.find(v => v.name === "Google UK English Female" && v.lang === "en-GB");
        const fallback = voices.find(v => v.lang.startsWith("en")) || voices[0];

        speakIntro(preferred || fallback);
      }

      // If voices are already available
      if (synth.getVoices().length > 0) {
        trySpeak();
      } else {
        synth.onvoiceschanged = trySpeak;
        // Also trigger manually in case event doesn't fire
        setTimeout(trySpeak, 100);
      }
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
