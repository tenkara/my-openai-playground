// make a blue ball bounce around the screen
// Create a canvas element
let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

// Set the size of the canvas
canvas.width = 500;
canvas.height = 500;

// Create a blue ball
let x = 50; // x coordinate of the ball
let y = 50; // y coordinate of the ball
let radius = 25; // radius of the ball
let color = "blue"; // color of the ball

// Draw the ball on the canvas
ctx?.beginPath();
ctx?.arc(x, y, radius, 0, Math.PI * 2);
ctx?.fill();

// Move the ball across the screen

function animate(): void {
  requestAnimationFrame(animate);

  ctx?.clearRect(0, 0, innerWidth, innerHeight);

  ctx?.beginPath();

  ctx?.arc(x, y, radius, 0, Math.PI * 2);

  ctx?.fill();

  x += 5;

  if (x + radius > innerWidth || x - radius < 0) {
    x -= 5;
  }
}
animate();
