// draw a calculator on screen
// with buttons and a display

// declare variables
function setup()
{
    // create a canvas
    createCanvas(400, 400);

    // set the background color
    background(255, 255, 255);

    // draw the calculator
    drawCalculator();
    
}

// draw the calculator
function drawCalculator()
{
    // draw the display
    fill(0, 0, 0);
    rect(0, 0, 400, 100);
    
    // draw the buttons for the calculator using createButton()
    // createButton("text", x, y, width, height);
    createButton("1", 0, 100, 100, 100);
    createButton("2", 100, 100, 100, 100);
    createButton("3", 200, 100, 100, 100);
    createButton("4", 300, 100, 100, 100);
    createButton("5", 0, 200, 100, 100);
    createButton("6", 100, 200, 100, 100);
    createButton("7", 200, 200, 100, 100);
    createButton("8", 300, 200, 100, 100);
    createButton("9", 0, 300, 100, 100);
    createButton("0", 100, 300, 100, 100);
    createButton("+", 200, 300, 100, 100);
    createButton("-", 300, 300, 100, 100);
    createButton("*", 0, 400, 100, 100);
    createButton("/", 100, 400, 100, 100);
    createButton("=", 200, 400, 100, 100);
    createButton("C", 300, 400, 100, 100);
}

function draw()
{
    
}

function mousePressed()
{
    
}