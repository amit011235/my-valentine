// --- CONFIGURATION ---
const TOTAL_PHOTOS = 38; 
const SLIDE_DURATION = 4000; // 4 seconds per photo

// LIST OF 38 LOVELY QUOTES (One for each photo)
// LIST OF 38 LOVELY QUOTES (Hindi Script with 'Aap' + English Mixed)
const quotes = [
  "Listen Anisha, आप मेरी जान हैं ❤️",
  "My heart beats only for you, जी! 💓",
  "आपकी smile पर मैं फ़िदा हूँ 😊",
  "You are my favorite notification 📲",
  "जान लेंगी क्या? You look so beautiful! 😍",
  "मुझे बस आप ही चाहिए, Anisha 🤝",
  "Every love story is beautiful, पर हमारी वाली best है 📖",
  "आप ही मेरी दुनिया हैं, baby 🌍",
  "आपके बिना सुकून कहाँ? You are my peace 🏠",
  "ये दिल अब आपका हो गया है 💘",
  "I love you more than Chai (and that says a lot!) ☕",
  "आप मेरा first and last love हैं ✨",
  "My partner in crime, मेरी Anisha 😎",
  "आपकी आँखों में जादू है 👀",
  "You are the reason I smile today 😊",
  "सच कहूँ? आपके जैसा कोई नहीं 🌹",
  "हमारी जोड़ी Number 1 है 💑",
  "Life is better जब आप साथ हैं 👫",
  "आप हँसती हैं तो मेरा दिल खुश हो जाता है 😂",
  "Forever आपके साथ बूढ़ा होना है 👵👴",
  "You are my sunshine, मेरा सोना ☀️",
  "आपके साथ वक्त का पता ही नहीं चलता ⏳",
  "You are perfect, बिलकुल perfect 💎",
  "मेरे दिल की रानी, Anisha 👑",
  "I choose you, आज और हमेशा 🤞",
  "आपके बिना मन नहीं लगता 🙈",
  "You are my dream come true, सच्ची! 💭",
  "बस एक नज़र देख के दिल garden garden हो जाता है 🌸",
  "Love you to the moon and back, baby 🌙",
  "मेरी साँसें भी आपके नाम से चलती हैं 💨",
  "Anisha, आप मेरी lifeline हैं 🏥",
  "आपके हाथ में मेरा हाथ, best feeling ever 🤝",
  "Thank you for being mine, जान 🍀",
  "आपसे दूर रहा नहीं जाता अब 🥺",
  "My soulmate, मेरी हमसफ़र 👻",
  "I promise to love you, हमेशा-हमेशा ❤️",
  "सब कुछ छोड़ के बस आपका हो गया हूँ 🏃‍♂️",
  "Will you be my Valentine forever, Anisha? 💍"
];


// --- SELECTORS ---
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const proposalCard = document.getElementById("proposalCard");
const slideshowContainer = document.getElementById("slideshowContainer");
const photoWrapper = document.getElementById("photoWrapper");
const quoteDisplay = document.getElementById("quoteDisplay");
const bgMusic = document.getElementById("bgMusic");
const noSound = document.getElementById("noSound");

// --- 1. RUNAWAY "NO" BUTTON ---
// Move button on Hover (Desktop) or Touch (Mobile)
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton(e) {
  if(e) e.preventDefault(); // Stop clicking on mobile
  
  noSound.currentTime = 0;
  noSound.play().catch(e => console.log("Audio needed interaction"));

  // Get screen width/height to make it jump ANYWHERE
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed"; // Make it break out of the card
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// --- 2. "YES" BUTTON CLICK ---
yesBtn.addEventListener("click", () => {
  // Hide Card
  proposalCard.style.display = "none";
  
  // Show Slideshow
  slideshowContainer.classList.remove("hidden");
  
  // Play Music
  bgMusic.play();
  
  // Confetti
  confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });

  // Start Slideshow
  initSlideshow();
});

// --- 3. SLIDESHOW LOGIC ---
function initSlideshow() {
  // Create Images
  for (let i = 1; i <= TOTAL_PHOTOS; i++) {
    const img = document.createElement("img");
    img.src = `photos/${i}.jpg`; // Assumes files are 1.jpg, 2.jpg...
    img.className = "slide-photo";
    photoWrapper.appendChild(img);
  }

  const photos = document.querySelectorAll(".slide-photo");
  let currentIndex = 0;

  // Function to show frame
  function showFrame(index) {
    // Remove active from all
    photos.forEach(p => p.classList.remove("active"));
    
    // Add active to current
    photos[index].classList.add("active");
    
    // Update Quote
    quoteDisplay.innerText = quotes[index % quotes.length];
  }

  // Start first frame
  showFrame(currentIndex);

  // Loop
  setInterval(() => {
    currentIndex = (currentIndex + 1) % photos.length;
    showFrame(currentIndex);
  }, SLIDE_DURATION);
}
