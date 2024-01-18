var playertexture, enemytexture;
var player;
var Enemies = [];
var Bullets = [];
var invincible = false;


function preload()
{
    playertexture = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg");
    enemytexture = loadImage("https://pbs.twimg.com/media/ErHfJ1OW8AYAuff.png");
}

class Player {
    constructor(x, y, health, speed, firingrate) {
        this.x = x;
        this.y = y;
        this.health = health;
        this.speed = speed;
        this.firingrate = firingrate;
    }
}

class Bullet {
    constructor(x, y, speed, size, angle) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
        this.angle = angle;
    }
}

class Enemy {
    constructor(x, y, health, speed) {
        this.x = x;
        this.y = y;
        this.health = health;
        this.speed = speed;
    }
}


function setup()
{
    createCanvas(width, height);
    background(255, 255, 255);
    textAlign(CENTER, CENTER);
    
    // setup player
    player = new Player(width / 2, height / 2, 100, 5, 5);

    // setup enemies
    for (let i = 0; i < 10; i++) {
        Enemies.push(new Enemy(random(0, width), random(0, height), 100, 1));
    }
}

function draw()
{
    background(50, 50, 50);

    DrawGame();
}

function DrawGame()
{
    // wasd movement
    if (keyIsDown(87)) {
        player.y -= player.speed;
    }
    if (keyIsDown(83)) {
        player.y += player.speed;
    }
    if (keyIsDown(65)) {
        player.x -= player.speed;
    }
    if (keyIsDown(68)) {
        player.x += player.speed;
    }

    // draw player
    image(playertexture, player.x, player.y, 50, 50);

    // draw health bar top left
    fill(255, 255,255);
    rect(0, 0, 100, 20);
    fill(255, 0, 0);
    rect(0, 0, player.health, 20);
    textSize(20);
    fill(0, 0, 0);
    text(player.health, 50, 11);

    // draw bullets
    for (let i = 0; i < Bullets.length; i++) {
        fill(255, 255, 255);
        rect(Bullets[i].x, Bullets[i].y, Bullets[i].size, Bullets[i].size);
        Bullets[i].x += Bullets[i].speed * cos(Bullets[i].angle);
        Bullets[i].y += Bullets[i].speed * sin(Bullets[i].angle);
    }

    // draw enemies
    for (let i = 0; i < Enemies.length; i++) {
        image(enemytexture, Enemies[i].x, Enemies[i].y, 50, 50);

        // enemy ai movement
        if (Enemies[i].x > player.x) {
            Enemies[i].x -= Enemies[i].speed;
        }
        if (Enemies[i].x < player.x) {
            Enemies[i].x += Enemies[i].speed;
        }
        if (Enemies[i].y > player.y) {
            Enemies[i].y -= Enemies[i].speed;
        }
        if (Enemies[i].y < player.y) {
            Enemies[i].y += Enemies[i].speed;
        }

        // bullet collision
        for (let j = 0; j < Bullets.length; j++) {
            if (Bullets[j].x > Enemies[i].x && Bullets[j].x < Enemies[i].x + 50 && Bullets[j].y > Enemies[i].y && Bullets[j].y < Enemies[i].y + 50) {
                Enemies[i].health -= 10;
                Bullets.splice(j, 1);
            }
        }

        // enemy health bar
        fill(255, 255, 255);
        rect(Enemies[i].x, Enemies[i].y - 10, 50, 10);
        fill(255, 0, 0);
        rect(Enemies[i].x, Enemies[i].y - 10, Enemies[i].health / 2, 10);
        textSize(10);
        fill(0, 0, 0);
        text(Enemies[i].health, Enemies[i].x + 25, Enemies[i].y - 5);

        // enemy death
        if (Enemies[i].health <= 0) {
            Enemies.splice(i, 1);
        }
    }

    // if player is touching enemy
    let takingdamage = false;
    for (let i = 0; i < Enemies.length; i++) {
        if (player.x + 50 > Enemies[i].x && player.x < Enemies[i].x + 50 && player.y + 50 > Enemies[i].y && player.y < Enemies[i].y + 50) {
            takingdamage = true;
        }
    }
    if (takingdamage && !invincible) {
        player.health -= 1;
        invincible = true;
        setTimeout(function() {
            invincible = false;
        }, 200);
    }

    // if health is 0, game over
    if (player.health <= 0) {
        fill(255, 0, 0);
        textSize(50);
        text("Game Over", width / 2, height / 2);

        noLoop();
    }

    // arrow keys shoot bullets

    if (keyIsDown(UP_ARROW)) {
        Bullets.push(new Bullet(player.x + 25, player.y, 10, 5, -HALF_PI));
    }
    if (keyIsDown(DOWN_ARROW)) {
        Bullets.push(new Bullet(player.x + 25, player.y + 50, 10, 5, HALF_PI));
    }
    if (keyIsDown(LEFT_ARROW)) {
        Bullets.push(new Bullet(player.x, player.y + 25, 10, 5, PI));
    }
    if (keyIsDown(RIGHT_ARROW)) {
        Bullets.push(new Bullet(player.x + 50, player.y + 25, 10, 5, 0));
    }
}