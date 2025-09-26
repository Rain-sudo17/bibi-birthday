const yesBtn = document.getElementById('yesBtn');
const overlay = document.getElementById('overlay');
const message = document.getElementById('message');
const confettiCanvas = document.getElementById('confetti');
const ctx = confettiCanvas.getContext('2d');

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

yesBtn.addEventListener('click', () => {
  overlay.style.display = 'none';      // Hide overlay
  message.style.opacity = '1';         // Reveal message
  startConfetti();                     // Start confetti animation
});

let confettiPieces = [];

function randomColor() {
  const colors = ['#FF4081', '#FFD700', '#4CAF50', '#2196F3', '#FF5722'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    confettiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      w: 10,
      h: 10,
      color: randomColor(),
      speed: Math.random() * 3 + 2
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.w, p.h);
    p.y += p.speed;
    if (p.y > confettiCanvas.height) p.y = -10;
  });
  requestAnimationFrame(drawConfetti);
}

function startConfetti() {
  confettiPieces = [];
  createConfetti();
  drawConfetti();
}

window.addEventListener('resize', () => {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});
