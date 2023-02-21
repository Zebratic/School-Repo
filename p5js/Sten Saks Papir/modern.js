var ingame = true;
var rocktexture, papertexture, scissortexture;

function preload()
{
    // load textures from url
    rocktexture = loadImage("https://timetoparty.dance/static/media/jumbotron-red.63adc826.png"); // png not supported?
    papertexture = loadImage("https://timetoparty.dance/static/media/jumbotron-green.f9080f7f.png");
    scissortexture = loadImage("https://timetoparty.dance/static/media/jumbotron-blue.dd4c778b.png");
}

function setup()
{
    createCanvas(width, height);
    background(255, 255, 255);
    textAlign(CENTER, CENTER);
}

function draw()
{
    background(50, 50, 50);

    if (!ingame)
        DrawMenu();
    else
        DrawGame();

}


function DrawGame()
{
    // draw rock paper scissors buttons using the textures
    image(rocktexture, width / 2 - 200, height / 2 - 100, 200, 200);
    image(papertexture, width / 2, height / 2 - 100, 200, 200);
    image(scissortexture, width / 2 + 200, height / 2 - 100, 200, 200);


}




function DrawMenu()
{
    // Draw text in the middle of the screen
    fill(255, 255, 255);
    textSize(64);
    text("Sten Saks Papir", width / 2, 100);

    // Draw buttons
    fill(255, 255, 255);
    var playbutton = rect(width / 2 - 100, 200, 200, 100);
    fill(0, 0, 0);
    textSize(32);
    text("Play", width / 2, 250);

    fill(255, 255, 255);
    var optionsbutton = rect(width / 2 - 100, 350, 200, 100);
    fill(0, 0, 0);
    textSize(32);
    text("Options", width / 2, 400);

    fill(255, 255, 255);
    var exitbutton = rect(width / 2 - 100, 500, 200, 100);
    fill(0, 0, 0);
    textSize(32);
    text("Exit", width / 2, 550);

    // button click events
    if (mouseIsPressed)
    {
        // if mouse is pressed and inside play button
        if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > 200 && mouseY < 300)
        {
            ingame = true;
        }

        // if mouse is pressed and inside options button
        if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > 350 && mouseY < 450)
        {
            // do options stuff
        }

        // if mouse is pressed and inside exit button
        if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > 500 && mouseY < 600)
        {
            // write text
            fill(255, 255, 255);
            textSize(32);
            text("You cant exit, too bad", width / 2, 150);
        }

    }
}