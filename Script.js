// 🌌 Space Facts
const facts = [
  "A day on Venus is longer than a year on Venus.",
  "Neutron stars are so dense that a spoonful weighs billions of tons.",
  "Jupiter has the shortest day of all planets.",
  "There are more stars in the universe than grains of sand on Earth.",
  "Black holes can slow down time.",
  "The Sun makes up 99.86% of the solar system’s mass."
];

function newFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").textContent = facts[random];
}

// ⭐ Starfield Animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}

animate();
