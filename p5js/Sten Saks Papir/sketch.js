var choices = ["rock", "paper", "scissors"];
var playerchoice = "";
var computerchoice = "";
var winner = "";

var computer_scissor_win;
var player_scissor_win;

var buttons = [];

function preload()
{
    // com rock
    // player rock

    // com paper
    // player paper

    computer_scissor_win = loadImage("https://mir-s3-cdn-cf.behance.net/project_modules/disp/d1e3cf36880203.5731151fed538.gif");
    player_scissor_win = loadImage("https://64.media.tumblr.com/92959aa5bd2cee227c30a5b473bb6f89/tumblr_owzyukETwU1v60vbdo2_r1_1280.gif");

    // load buttons
     var buttonx = width / 2 - 200;
     var buttony = height - 250;
 
     // create rock button using texture
     var rockbutton = createImg("https://timetoparty.dance/static/media/jumbotron-red.63adc826.png", "rock");
     rockbutton.position(buttonx - 100, buttony);
     rockbutton.size(200, 200);
     rockbutton.mousePressed(function() { playerchoice = "rock"; winner = CalculateWinner(); });
     buttons.push(rockbutton);
 
     // create paper button
     var paperbutton = createImg("https://timetoparty.dance/static/media/jumbotron-green.f9080f7f.png", "paper");
     paperbutton.position(buttonx + 150, buttony);
     paperbutton.size(200, 200);
     paperbutton.mousePressed(function() { playerchoice = "paper"; winner = CalculateWinner(); });
     buttons.push(paperbutton);
 
     // create scissors button
     var scissorsbutton = createImg("https://timetoparty.dance/static/media/jumbotron-blue.dd4c778b.png", "scissors");
     scissorsbutton.position(buttonx + 400, buttony);
     scissorsbutton.size(200, 200);
     scissorsbutton.mousePressed(function() { playerchoice = "scissors"; winner = CalculateWinner(); });
     buttons.push(scissorsbutton);
}

function setup()
{
    createCanvas(canvas.width, canvas.height);
    background(255, 255, 255);
    textAlign(CENTER, CENTER);
}

function draw()
{
    if (playerchoice == "" || winner == "")
        return;

    // hide buttons
    for (var i = 0; i < buttons.length; i++)
        buttons[i].hide();


    // play gif
    if (winner == "Computer" && computerchoice == "scissors")
    {
        console.log("drawing...");
        image(computer_scissor_win, 0, 0, width, height);
        // when gif is done, reset game
        if (computer_scissor_win.getFrame() == computer_scissor_win.getLastFrame())
            ResetGame();
    }
    else if (winner == "Player" && computerchoice == "paper")
    {
        console.log("drawing...");
        // set frame to 0
        image(player_scissor_win, 0, 0, width, height);
        // when gif is done, reset game
        if (player_scissor_win.getFrame() == player_scissor_win.getLastFrame())
            ResetGame();
    }


}

function ResetGame()
{
    playerchoice = "";
    computerchoice = "";
    winner = "";

    for (var i = 0; i < buttons.length; i++)
        buttons[i].show();
}

function CalculateWinner()
{
    computerchoice = random(choices);

    if (playerchoice == computerchoice)
        return "Draw";
    else if (playerchoice == "rock" && computerchoice == "scissors")
        return "Player";
    else if (playerchoice == "paper" && computerchoice == "rock")
        return "Player";
    else if (playerchoice == "scissors" && computerchoice == "paper")
        return "Player";
    else
        return "Computer";
}