// make a blue ball bounce around the screen

// Create canvas element
var canvas = document.createElement("canvas");

// Set width and height of canvas element
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Get the context of the canvas element
var ctx = canvas.getContext("2d");

// Create a ball object with x and y coordinates, radius, color and velocity
var ball = {
  x: 50, // x coordinate
  y: 50, // y coordinate
  r: 10, // radius
  c: "blue", // color
  vx: 5, // velocity in x direction
  vy: 5, // velocity in y direction

  // Function to draw the ball on the canvas element
  draw: function () {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  },
};

// Function to update the position of the ball based on its velocity
function update() {
  ball.x += ball.vx;
  ball.y += ball.vy;
}

// Function to detect collision with walls and change direction of ball when it hits any wall
function detectCollision() {
  if (ball.x + ball.r > canvas.width || ball.x - ball.r < 0) {
    ball.vx = -ball.vx;
  }
  if (ball.y + ball.r > canvas.height || ball.y - ball.r < 0) {
    ball.vy = -ball.vy;
  }
}
