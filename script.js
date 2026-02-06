// CONFIGURATION
const TOTAL_PHOTOS = 38; // Number of photos in your folder
const SLIDE_DURATION = 4000; // Time per photo (4 seconds)

// SELECTORS
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const proposalCard = document.getElementById("proposalCard");
const slideshowContainer = document.getElementById("slideshowContainer");
const photoWrapper = document.getElementById("photoWrapper");
const bgMusic = document.getElementById("bgMusic");
const noSound = document.getElementById("noSound");

// 1. "NO" BUTTON EVASION LOGIC
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton); // For mobile

function moveButton() {
  // Play funny sound
  noSound.currentTime = 0;
  noSound.play().catch(e => console.log("Sound blocked"));

  // Calculate random position
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// 2. "YES" BUTTON LOGIC
yesBtn.addEventListener("click", () => {
  // 1. Hide the Proposal Card
  proposalCard.style.display = "none";
  
  // 2. Show the Slideshow
  slideshowContainer.classList.remove("hidden");
  
  // 3. Play Romantic Music
  bgMusic.play().catch(e => console.log("Music blocked"));
  
  // 4. Fire Confetti
  confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

  // 5. Start the Slideshow Logic
  startSlideshow();
});

// 3. SLIDESHOW LOGIC
function startSlideshow() {
  // Dynamically create 38 image elements
  for (let i = 1; i <= TOTAL_PHOTOS; i++) {
    const img = document.createElement("img");
    // This assumes your photos are named 1.jpg, 2.jpg... inside a 'photos' folder
    img.src = `photos/${i}.jpg`; 
    img.className = "slide-photo";
    photoWrapper.appendChild(img);
  }

  const photos = document.querySelectorAll(".slide-photo");
  let currentIndex = 0;

  // Show the first photo immediately
  photos[currentIndex].classList.add("active");

  // Cycle through photos
  setInterval(() => {
    // Remove active class from current photo
    photos[currentIndex].classList.remove("active");

    // Move to next index (loop back to 0 if at the end)
    currentIndex = (currentIndex + 1) % photos.length;

    // Add active class to new photo
    photos[currentIndex].classList.add("active");
  }, SLIDE_DURATION);
}
