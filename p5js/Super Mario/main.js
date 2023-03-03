var player;
var maploader;
var graphics;
var money;
var mushroom;
var fireball;
var points_animation;
var squash_animation;
var movement;

function setup() {
    createCanvas(705, 607.5);
    player = new Player();
    maploader = new MapLoader();
    graphics = new Graphics();
    money = new Money();
    mushroom = new Mushroom();
    flower = new Flower();
    goomba = new Goomba();
    koopa = new Koopa();
    fireball = new Fireball();
    points_animation = new Points_Animation();
    squash_animation = new Squash_Animation();
    castle = new Castle();
    movement = new Movement();
    debug = new Debug();

    fireball.i = "j";
    textFont('monospace')
    angleMode(DEGREES);
    rectMode(CENTER);
    imageMode(CENTER);

    movement.update();

    for (let j = 0; j <= 2700 - 1; j++) {

        // castle.rx -= player.speed_v2;
        //  castle.zx -= player.speed_v2;
        //  castle.vx -= player.speed_v2;

        for (let i = 0; i <= maploader.x.length - 1; i++) {
            if (i >= 0 && i <= 230 || i >= 1000 && i <= 1012 || i >= 1050 && i <= 1081 || i >= 1100 && i <= 1198 || i >= 1300 && i <= 1302 || i >= 1350 && i <= 1350 || i >= 1400 && i <= 1401) {
                //   maploader.x[i] -= player.speed_v2;
            }
        }
    }

}

function draw()
{
    background(92, 136, 252);
    graphics.render();
    castle.update();

    if (player.mushroom == 0) {
        mushroom.update();
    }

    if (player.mushroom > 0 || flower.visible == true) {
        flower.update();
    }

    if (flower.has_flower == true) {
        fireball.update();
    }

    if (player.dead == false && castle.vx - player.x > 5) {
        player.update();
    }

    maploader.update();
    money.update();
    goomba.update();
    koopa.update();
    points_animation.update();
    squash_animation.update();
    player.dies();

    movement.update();
    debug.update();
}

function keyPressed()
{
    if (castle.end == false) {
        if ((key == "a" || key == "A" || keyCode == "37") && player.crouch == false) {
            player.moveLeft = true;
            fireball.i = "b";
        }

        if ((key == "d" || key == "D" || keyCode == "39") && player.crouch == false) {
            player.moveRight = true;
            fireball.i = "j";
        }

        if (key == "s" || key == "S" || keyCode == "40") {
            player.crouch = true;
        }

        if (key == "w" || key == "W" || keyCode == "38") {
            if (player.falling == false) {
                player.jump = true;
            }
        }

        if (key == " ") fireball.e = true;
        if (key == "Shift") player.run = true;
    }

    if (key == "Control")
        debug.enabled = !debug.enabled;
        
    switch (key)
    {
        case "1": debug.shown_type = "player"; break;
        case "2": debug.shown_type = "enemies"; break;
        case "3": debug.shown_type = "map"; break;
        case "4": debug.shown_type = "misc"; break;
    }
}

function keyReleased()
{
    if (key == "a" || key == "A" || keyCode == "37") player.moveLeft = false;
    if (key == "d" || key == "D" || keyCode == "39") player.moveRight = false;
    if (key == "s" || key == "S" || keyCode == "40") player.crouch = false;
    if (key == " ") fireball.e = false;
    if (key == "Shift") player.run = false;

    key = ""; // reset key to set animation to idle
}

function mousePressed()
{
    if (debug.enabled)
    {
        // debug place mario
        player.x = mouseX;
        player.y = mouseY;
        print(mouseX);
        print(mouseY);
    }
}