const canvas = document.getElementById('dustCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

// Particle properties
const particles = [];
const numParticles = 200;

class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speedX = (Math.random() - 0.5) * 0.5; // horizontal movement
    this.speedY = (Math.random() - 0.5) * 0.5; // vertical movement
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around edges
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function createParticles() {
  for (let i = 0; i < numParticles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 1.5 + 0.5; // Smaller particles
    const color = `rgba(200, 200, 200, ${Math.random() * 0.4 + 0.1})`; // Light ash-like
    particles.push(new Particle(x, y, radius, color));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

createParticles();
animate();

// Adjust canvas on window resize
window.addEventListener('resize', () => {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  particles.length = 0; 
  createParticles();
});
