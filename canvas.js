var canvas = document.getElementById('#canvas');
canvas.width = Window.innnerWidth;
canvas.height = Window.innnerHeight;

const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 3;
let dy = 2;
const radius = 20;

function bounceAnimation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'purple';
    ctx.fill();
    ctx.closePath();

    // Update position
    x += dx;
    y += dy;

    // Check for collisions with canvas edges and reverse direction
    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy;
    }

    requestAnimationFrame(bounceAnimation);
}