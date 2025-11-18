// Typewriter + fade effect for About quote
const phrases = [
    '"Problem-solving through secure, user-focused design."',
    '"Continuous learner in web development and cybersecurity."',
    '"Bridging healthcare operations, IT support, and security."'
];

const quoteSpan = document.getElementById("about-quote-text");
const quoteContainer = document.querySelector(".about-quote");

let phraseIndex = 0;
let charIndex = 0;

const TYPING_SPEED = 80;   // ms per letter
const HOLD_TIME = 1500;    // how long to hold the full phrase
const FADE_TIME = 600;     // match CSS transition (0.6s)

function typePhrase() {
    if (!quoteSpan || !quoteContainer) return;

    quoteContainer.classList.add("visible"); // fade in

    const currentPhrase = phrases[phraseIndex];

    if (charIndex < currentPhrase.length) {
        quoteSpan.textContent += currentPhrase.charAt(charIndex);
        charIndex++;
        setTimeout(typePhrase, TYPING_SPEED);
    } else {
        // Done typing, hold for a moment, then fade out
        setTimeout(() => fadeOutPhrase(), HOLD_TIME);
    }
}

function fadeOutPhrase() {
    quoteContainer.classList.remove("visible"); // fade out

    setTimeout(() => {
        // After fade-out finishes, clear and start next phrase
        quoteSpan.textContent = "";
        charIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typePhrase();
    }, FADE_TIME);
}

// Start the animation when the page is ready
document.addEventListener("DOMContentLoaded", () => {
    if (quoteSpan && quoteContainer) {
        typePhrase();
    }
});
