// create global variables to store the player and computer choices
let playerChoice;
let computerChoice;

// create an array of possible choices
const choices = ["rock", "paper", "scissors"];

// create global variables for the gifs
let playerWinGif;
let computerWinGif;
let drawGif;

// create a flag to check if the game is over
let gameOver = false;

// create a global variable to store the game result
let gameResult;

function preload() {
  // preload the gifs
  playerWinGif = loadImage("https://mir-s3-cdn-cf.behance.net/project_modules/disp/d1e3cf36880203.5731151fed538.gif", 0, 0, width, height);
  computerWinGif = loadImage("https://mir-s3-cdn-cf.behance.net/project_modules/disp/d1e3cf36880203.5731151fed538.gif", 0, 0, width, height);
  drawGif = loadImage("https://mir-s3-cdn-cf.behance.net/project_modules/disp/d1e3cf36880203.5731151fed538.gif", 0, 0, width, height);
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  // if the game is over, display the gif according to the game result
  if (gameOver) {
    if (gameResult === "player") {
      image(playerWinGif, 0, 0, width, height);
    } else if (gameResult === "computer") {
      image(computerWinGif, 0, 0, width, height);
    } else {
      image(drawGif, 0, 0, width, height);
    }

    // check if the gif has finished playing
    if (!playerWinGif.isPlaying() && !computerWinGif.isPlaying() && !drawGif.isPlaying()) {
      // reset the game
      resetGame();
    }
  } else {
    // draw the images for the player and computer choices
    if (playerChoice) {
      image(playerChoice, 0, 0, width / 2, height);
    }
    if (computerChoice) {
      image(computerChoice, width / 2, 0, width / 2, height);
    }

    // check if both the player and computer have chosen
    if (playerChoice && computerChoice) {
      // calculate the game result
      gameResult = calculateGameResult();

      // set the game as over
      gameOver = true;
    }
  }
}

function mouseClicked() {
  // check if the game is over
  if (!gameOver) {
    // calculate the x and y coordinates of the click
    const x = floor(mouseX / (width / 2));
    const y = floor(mouseY / (height / 2));

    // check if the click is within the bounds of the images
    if (x >= 0 && x < 2 && y >= 0 && y < 1) {
      // select the player choice according to the click coordinates
      playerChoice = loadImage(choices[x] + ".png");
    }
  }
}

function calculateGameResult()
{
    // calculate the result based on the player and computer choices
    if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper")
        return "player";
    else if (playerChoice === computerChoice)
        return "draw";
    else
        return "computer";
}