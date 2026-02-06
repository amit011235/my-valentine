// 1. Select all the elements we need
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");
const popup = document.getElementById("lovePopup"); // The new popup
const hoverSound = document.getElementById("hoverSound");
const yesSound = document.getElementById("yesSound");

// 2. The "No" Button Logic (It runs away!)
function moveButton() {
  // Play the funny sound
  hoverSound.currentTime = 0;
  hoverSound.play().catch(error => console.log("Audio play failed", error));

  // Get the size of the card so the button stays inside
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // Calculate random positions
  const maxX = cardRect.width - btnRect.width - 20;
  const maxY = cardRect.height - btnRect.height - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Apply new position
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Add events for both Mouse (Computer) and Touch (Phone)
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", (e) => { 
  e.preventDefault(); // Prevents clicking
  moveButton();
});

// 3. The "Yes" Button Logic (Confetti + Popup)
yesBtn.addEventListener("click", () => {
  // Play the success sound
  yesSound.play().catch(error => console.log("Audio play failed", error));

  // Fire the Confetti explosion
  if (typeof confetti === "function") {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });
  }

  // Show the Love Popup after a short delay (300ms)
  setTimeout(() => {
    popup.classList.add("show"); // This activates the CSS to show the images
  }, 300);
});

// 4. Background Floating Hearts Animation
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  
  // Randomly choose a heart emoji
  heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";
  
  // Random position and size
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  
  // Random speed
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  
  // Append to body and remove after animation
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Create a new heart every 400 milliseconds
setInterval(createHeart, 400);
