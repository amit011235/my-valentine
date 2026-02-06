const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");
const hoverSound = document.getElementById("hoverSound");
const yesSound = document.getElementById("yesSound");

// Mobile touch support included
noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
    hoverSound.currentTime = 0;
    hoverSound.play();
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate limits to keep button inside card
    const maxX = cardRect.width - btnRect.width - 20;
    const maxY = cardRect.height - btnRect.height - 20;

    // Move random
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
}

yesBtn.addEventListener("click", () => {
    yesSound.play();
    // Fire confetti
    confetti({
        particleCount: 260,
        spread: 120,
        origin: { y: 0.65 }
    });

    // Delay alert slightly
    setTimeout(() => {
        alert("YAY 💕 I can't wait for Valentine's Day with you!");
    }, 500);
});

// Background hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 22 + 14 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heart.style.opacity = Math.random() * 0.5 + 0.4;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 380);