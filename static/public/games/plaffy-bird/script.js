// Set up the canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set up the game variables
let birdX = 50;
let birdY = canvas.height / 2;
let birdDY = 0;
let gravity = 0.5;
let pipes = [];
let score = 0;
let isGameOver = false;

var data = {}
data.game = 'plaffy bird'
data.score = 0
data.achievements = []

// Set up the key events
document.addEventListener('keydown', flap);
document.addEventListener('touchstart', flap);

function flap() {
  birdDY = -8;
}

// Set up the game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the bird
  ctx.fillStyle = '#FFA500';
  ctx.fillRect(birdX, birdY, 30, 30);

  // Update the bird's position
  birdY += birdDY;
  birdDY += gravity;

  // Check for collisions
  if (birdY > canvas.height || birdY < 0) {
    isGameOver = true;
}

for (let i = 0; i < pipes.length; i++) {
    if (birdX + 30 > pipes[i].x && birdX < pipes[i].x + pipes[i].width &&
        (birdY < pipes[i].topHeight || birdY + 30 > pipes[i].topHeight + pipes[i].gap)) {
      isGameOver = true;
}

pipes[i].x -= 3;

if (pipes[i].x < -pipes[i].width) {
  pipes.splice(i, 1);
  i--;
  score++;
}
}

  // Draw the pipes
for (let i = 0; i < pipes.length; i++) {
    ctx.fillStyle = '#008000';
    ctx.fillRect(pipes[i].x, 0, pipes[i].width, pipes[i].topHeight);
    ctx.fillRect(pipes[i].x, pipes[i].topHeight + pipes[i].gap, pipes[i].width, canvas.height - pipes[i].topHeight - pipes[i].gap);
}

  // Add new pipes
if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - 200) {
    let gapHeight = Math.random() * 200 + 100;
    let topHeight = Math.random() * (canvas.height - gapHeight - 100) + 50;
    let pipe = {
      x: canvas.width,
      topHeight: topHeight,
      gap: gapHeight,
      width: 50
  };
  pipes.push(pipe);
}

  // Draw the score
ctx.fillStyle = '#000000';
ctx.font = '30px Arial';
ctx.fillText(`Score: ${score}`, 10, 50);

  // Game over
if (isGameOver) {
    clearInterval(intervalId);
    ctx.fillStyle = '#FF0000';
    ctx.font = '50px Arial';
    ctx.fillText('Game Over', canvas.width / 2 - 150, canvas.height / 2);

    data.score = score
    
    if (score > 0) {
        data.achievements = [1]
    }

    window.parent.postMessage(data, '*');
}
}

let intervalId = setInterval(gameLoop, 30);