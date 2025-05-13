

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

  function speakIntro() {
    if (!synth) return;

    // Wait for voices to be loaded
    let voices = synth.getVoices();
    if (voices.length === 0) {
      // Voices aren't available yet, so we try again after a short delay
      setTimeout(speakIntro, 100);
      return;
    }

    // Log available voices to the console (optional)
    console.log("Available voices:");
    voices.forEach((voice, index) => {
      console.log(`${index + 1}: ${voice.name} (${voice.lang})`);
    });

    // Find the "Google UK English Female (en-GB)" voice
    const ukEnglishFemale = voices.find(v => v.name === "Google UK English Female" && v.lang === "en-GB");

    if (!ukEnglishFemale) {
      console.log("Google UK English Female voice not found!");
      return; // Exit if the desired voice is not found
    }

    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) greeting = "Good morning";
    else if (hour < 18) greeting = "Good afternoon";
    else greeting = "Good evening";

    const intro = `${greeting}. Welcome to Aajay Sundaran's aerospace portfolio. Discover innovations in vtol design, UAV development, and advanced flight systems.`;

    const utterance = new SpeechSynthesisUtterance(intro);
    utterance.voice = ukEnglishFemale; // Use the desired voice
    utterance.rate = 1;
    utterance.pitch = 1.2;
    synth.speak(utterance);
  }

  // If the voices are not available yet, wait for them to load
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = speakIntro;
  } else {
    // Ensure that voices are fully loaded before speaking
    setTimeout(() => {
      let voices = synth.getVoices();
      if (voices.length > 0) {
        speakIntro();
      } else {
        setTimeout(() => speakIntro(), 100); // Retry if voices are still unavailable
      }
    }, 100);
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

