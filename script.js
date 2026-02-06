// --- CONFIGURATION ---
const TOTAL_PHOTOS = 38; 
const SLIDE_DURATION = 4000; // 4 seconds per photo

// LIST OF 38 LOVELY QUOTES (One for each photo)
const quotes = [
  "My heart beats only for you, Anisha ❤️",
  "You are my favorite notification 📲",
  "Every love story is beautiful, but ours is my favorite 📖",
  "You are the reason I smile today 😊",
  "I want to grow old with you 👵👴",
  "You are my safe place 🏠",
  "Better than I could have ever imagined ✨",
  "I love you more than pizza (and that says a lot) 🍕",
  "You make my world brighter ☀️",
  "To the moon and back 🌙",
  "My dream come true 💭",
  "Forever isn't long enough with you ⏳",
  "You are my sunshine on a rainy day 🌧️",
  "I still get butterflies when I see you 🦋",
  "My partner in crime 😎",
  "Thank you for being you 🌹",
  "You are my happy place 📍",
  "I love holding your hand 🤝",
  "My best friend and my love 💑",
  "Life is better with you in it 🌍",
  "You steal my heart every single day 💘",
  "I am so lucky to have you 🍀",
  "You are perfection to me 💎",
  "My heart is full because of you 💖",
  "I cherish every moment with you ⏳",
  "You are my everything ♾️",
  "I love your laugh 😂",
  "Together is a beautiful place to be 🏡",
  "You are the missing piece to my puzzle 🧩",
  "I love you endlessly 🔄",
  "You are my greatest adventure 🏔️",
  "My heart belongs to you 🔐",
  "You make life sweet 🍭",
  "I love you to infinity 🚀",
  "Always and Forever 🤞",
  "You are my soulmate 👻",
  "I love you, Anisha! ❤️",
  "Be my Valentine forever? 💍"
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
