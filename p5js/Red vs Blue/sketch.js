var players = [];

var KillPlayersOnTouch = true;

// teamtype enum ?
var TEAM_UNKNOWN = 0;
var TEAM_RED = 1;
var TEAM_BLUE = 2;

var gamerunning = false;

class Player
{
    constructor(x, y, size, team, speed)
    {
        this.x = x;
        this.y = y;
        this.size = size;
        this.team = team;
        this.speed = speed;
        this.swappedtimer = 0;
    }
}

function setup()
{
    // GET WINDOW SIZE
    var w = window.innerWidth;
    var h = window.innerHeight;
    createCanvas(w, h);
    var teamsize = 10;
    var playerspeed = 5;

    for (var i = 0; i < teamsize; i++)
        players.push(new Player(width - 100 + random(-50, 50), (height / teamsize * i) + random(0, 50), 25, TEAM_RED, playerspeed));

    for (var i2 = 0; i2 < teamsize; i2++)
        players.push(new Player(100 - random(-50, 50), (height / teamsize * i2) + random(0, 50), 25, TEAM_BLUE, playerspeed));
}

function RenderPlayers()
{
    for (var i = 0; i < players.length; i++)
    {
        // render player
        if (players[i].team == TEAM_RED)        fill(255, 0, 0);
        else if (players[i].team == TEAM_BLUE)  fill(0, 0, 255);
        else                                    fill(255);

        ellipse(players[i].x, players[i].y, players[i].size, players[i].size);
    }
}

function RenderMap() // draws a line in the middle of the screen
{
    stroke(255);
    line(width / 2, 0, width / 2, height);

    // Draw circle in the middle of the screen with outline only
    stroke(255);
    fill(0);
    ellipse(width / 2, height / 2, 100, 100);

    // Draw a line in the middle of the circle
    stroke(255);
    line(width / 2 + 50, height / 2, width / 2 - 50, height / 2);
}


function MovePlayers()
{
    var playerstokill = [];
    for (var i = 0; i < players.length; i++)
    {
        // move player towards nearest player of opposite team
        var nearestplayer = players[i];
        var nearestplayerdistance = 100000;
        for (var i2 = 0; i2 < players.length; i2++)
        {
            if (players[i2].team != players[i].team)
            {
                var distance = dist(players[i].x, players[i].y, players[i2].x, players[i2].y);
                if (distance < nearestplayerdistance)
                {
                    nearestplayer = players[i2];
                    nearestplayerdistance = distance;
                }
            }
        }
        // move player towards nearest player of opposite team
        var direction = createVector(nearestplayer.x - players[i].x, nearestplayer.y - players[i].y);
        direction.normalize();
        // move
        // dont move outside of the screen
        if (players[i].x + direction.x * players[i].speed < width && players[i].x + direction.x * players[i].speed > 0)
        {
            players[i].x += direction.x * players[i].speed;
            players[i].y += direction.y * players[i].speed;
        }
        

        // if player touches other player, swap teams
        for (var i3 = 0; i3 < players.length; i3++)
        {
            // if opposing team
            if (players[i].team != players[i3].team)
            {
                if (i != i3 && players[i3].swappedtimer == 0  && players[i].swappedtimer == 0)
                {
                    // if player is not in swappedarrays
                    if (dist(players[i].x, players[i].y, players[i3].x, players[i3].y) < players[i].size)
                    {
                        if (random(0, 1) == 0)
                        {
                            if (KillPlayersOnTouch)
                                playerstokill.push(players[i]);
                            else
                            {
                                players[i].team = players[i3].team;
                                players[i].swappedtimer = 10;
                            }
                        }
                        else
                        {
                            if (KillPlayersOnTouch)
                                playerstokill.push(players[i3]);
                            else
                            {
                                players[i3].team = players[i].team;
                                players[i3].swappedtimer = 10;
                            }
                        }
                    }   
                }
            }
        }

        // decrease swappedtimer
        if (players[i].swappedtimer > 0)
            players[i].swappedtimer--;
    }

    // kill players if they are in the playerstokill array
    for (var i4 = 0; i4 < playerstokill.length; i4++)
        players.splice(players.indexOf(playerstokill[i4]), 1);
}

function RenderStats()
{
    textSize(34);
    textAlign(CENTER);
    stroke(0);
    fill(255, 0, 0);
    text("Red: " + players.filter(x => x.team == TEAM_RED).length, width / 2, 40);

    fill(0, 0, 255);
    text("Blue: " + players.filter(x => x.team == TEAM_BLUE).length, width / 2, 80);
}

function draw()
{
    strokeWeight(2);
    background(0);
    RenderMap();
    RenderPlayers();
    RenderStats();

    // show text if game is running
    if (gamerunning)
    {
        MovePlayers();
    }
    else
    {
        // show controls
        background(0, 0, 0, 200);
        textSize(54);
        textAlign(CENTER);
        strokeWeight(4);
        stroke(0);
        fill(255, 255, 255);
        text("Paused", width / 2, 100);

        textSize(54);
        fill(255, 255, 0);
        text("Controls:", width / 2, height / 2 - 100);
        textSize(34);
        fill(180, 180, 0);
        text("Escape - Pause/Unpause simulation", width / 2, height / 2 - 50);
        text("Enter - Reset simulation", width / 2, height / 2);
        text("Space - Spawn 10 players on each team", width / 2, height / 2 + 50);




        textSize(54);
        fill(255, 255, 255);
        text("Settings:", width / 2, height / 2 + 150);
        textSize(34);

        if (KillPlayersOnTouch) fill(255, 0, 0);
        else                    fill(0, 255, 0);

        text("1 - On Touch: " + (KillPlayersOnTouch ? "Kill" : "Swap Team"), width / 2, height / 2 + 200);
    }
}



function keyPressed()
{
    switch (keyCode)
    {
        case ESCAPE: gamerunning = !gamerunning; break;
        case ENTER: players = []; break;
        case 32: setup(); break;                                    // 0x32 = space key
        case 49: KillPlayersOnTouch = !KillPlayersOnTouch; break;   // 0x49 = 1 key
    }
}  