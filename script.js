const particleCount = 60;
const particleSize = 4;
const particleSpeed = 0.2;
const particleColor = '#FFFFFF';

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * particleSize,
        speed: Math.random() * particleSpeed + 0.1,
        angle: Math.random() * Math.PI * 2
    });
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        const vx = Math.cos(particle.angle) * particle.speed;
        const vy = Math.sin(particle.angle) * particle.speed;

        particle.x += vx;
        particle.y += vy;

        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
        }

        ctx.beginPath();
        ctx.fillStyle = particleColor;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

animate();
