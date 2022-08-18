let piString;

const columns = 1000;
const rows = 1000;
let row = 0;

let colors = [];

function preload() {
  loadStrings("pi.txt", loadPi);
}

function loadPi(piLines) {
  piString = piLines[0];
}

function setup() {
  createCanvas(1000, 1000);
  noSmooth();
  noStroke();
  background(32);

  colors = [
    "black", //0
    "red", //1
    "orange", //2
    "yellow", //3
    "green", //4
    "cyan", // 5
    "blue", //6
    "indigo", //7
    "violet", //8
    "white", //9
  ];
}

// restart the animation with random colors
function keyPressed() {
  colors = [];
  for (let i = 0; i < 10; i++) {
    colors.push(color(random(255), random(255), random(255)));
  }
  background(0);
  row = 0;
  loop();
}

function draw() {
  if (!piString) {
    return;
  }

  // draw a whole row of digits
  for (let column = 0; column < columns; column++) {
    const piDigitIndex = columns * row + column;
    const piDigit = int(piString.substring(piDigitIndex, piDigitIndex + 1));
    const digitColor = colors[piDigit];

    fill(digitColor);
    rect(column, row, 1, 1);
  }

  // move to the next row, or stop the animation
  row++;
  if (row >= rows) {
    console.log("Done!");
    noLoop();
  }
}