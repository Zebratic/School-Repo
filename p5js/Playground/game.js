/* create a javascript game with p5js which will render a circle that starts in the center of the canvas of 800x800 and will move in a random direction and will bounce off walls */

var x = 400;
var y = 400;
var xspeed = 2;
var yspeed = 2;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  ellipse(x, y, 50, 50);
  x = x + xspeed;
  y = y + yspeed;
  if (x > width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y > height || y < 0) {
    yspeed = yspeed * -1;
  }
}   