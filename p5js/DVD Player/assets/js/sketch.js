var enemy_size = 50;
var mx;
var my;
var screen_x = 800;
var screen_y = 800;

var player;
var bullets = [];

var enemies = [];


class Player
{
  constructor(x, y, speed, size, alive, points, highscore)
  {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
    this.alive = alive;
    this.points = points;
    this.highscore = highscore;
  }
}

class Enemy
{
  constructor(x, y, speed, angle)
  {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
  }
}

function setup()
{
  player = new Player(screen_x / 2, screen_y / 2, 5, 20, true, 0, 0);
  createCanvas(screen_x, screen_y);
}

function UpdatePlayerPos()
{
  if (!player.alive)
    return;
  
  // ugly movement code (tried using switch statements, but broken)
  if (keyIsDown(0x57)) { // W
    if (player.size - player.speed > 0)
      player.y -= player.speed;
  }

  if (keyIsDown(0x41)) { // A
    if (player.x - player.speed > 0)
      player.x -= player.speed;
  }

  if (keyIsDown(0x53)) { // S
    if (player.y + player.speed < screen_y)
      player.y += player.speed;
  }

  if (keyIsDown(0x44)) { // D
    if (player.x + player.speed < screen_x)
      player.x += player.speed;
  }
}

function DrawPlayer()
{
  // draw player
  fill(255, 255, 255);
  circle(player.x, player.y, player.size * 2);
}

function DrawEnemies()
{
  if (enemies.length < (player.points + 1)) // enemy count
  {
    // spawn enemy at random position
    var enemy = new Enemy(random(0, screen_x), random(0, screen_y), random(5, 5), random(0, 359));
    enemies.push(enemy);
  }

  // draw enemies
  for (var i = 0; i < enemies.length; i++)
  {
    var selected_enemy = enemies[i];

    // move enemy and bounce if it hits the walls
    selected_enemy.x += selected_enemy.speed * cos(selected_enemy.angle);
    selected_enemy.y += selected_enemy.speed * sin(selected_enemy.angle);
   
    if (selected_enemy.y < 0 || selected_enemy.y > screen_y)
    {
      selected_enemy.angle = -selected_enemy.angle;
    }
    // THIS IS BUGGY - DOESN'T WORK
    if (selected_enemy.x < 0 || selected_enemy.x > screen_x)
    {
      selected_enemy.angle += selected_enemy.angle;
      if (selected_enemy.angle >= 360)
      {
        var left = selected_enemy.angle - 360;
        selected_enemy.angle = left;
      }
    }

    // draw angle arrow line
    line(selected_enemy.x, selected_enemy.y, selected_enemy.x + selected_enemy * cos(selected_enemy.angle), selected_enemy.y + enemy_size * sin(selected_enemy.angle));
    // draw 2 lines from the tip of the arrow in the angle of 45 degrees
    line(selected_enemy.x + enemy_size * cos(selected_enemy.angle), selected_enemy.y + enemy_size * sin(selected_enemy.angle), selected_enemy.x + enemy_size * cos(selected_enemy.angle + PI / 4), selected_enemy.y + enemy_size * sin(selected_enemy.angle + PI / 4));
    line(selected_enemy.x + enemy_size * cos(selected_enemy.angle), selected_enemy.y + enemy_size * sin(selected_enemy.angle), selected_enemy.x + enemy_size * cos(selected_enemy.angle - PI / 4), selected_enemy.y + enemy_size * sin(selected_enemy.angle - PI / 4));

    // draw enemy postion text
    textSize(16);
    fill(255, 0, 0);
    text("x: " + selected_enemy.x + " y: " + selected_enemy.y, 10, 60);
    text("angle: " + selected_enemy.angle, 10, 80);


    // if player touches enemy, kill player
    if (dist(player.x, player.y, selected_enemy.x, selected_enemy.y) < (player.size * 2))
    {
      player.alive = false;
      // remove all enemies and bullets
      enemies = [];
      bullets = [];
    }

    fill(255, 0, 0);
    circle(selected_enemy.x, selected_enemy.y, enemy_size);
  }
}

function DrawPoints()
{
  textSize(16);
  text("Points: " + player.points, 10, 20);
  text("Highscore: " + player.highscore, 10, 40);
}

function draw()
{
  background(220);
  
  if (!player.alive)
  {
    // show game over text
    textSize(32);
    text("Game Over", width / 2 - 100, height / 2);
    // press spacebar to restart
    textSize(16);
    text("Press spacebar to restart", width / 2 - 100, height / 2 + 30);

    // show highscore text in the middle of the screen
    textSize(48);
    text("Highscore: " + player.highscore, width / 2 - 100, height / 2 - 50);

    // show points text in the middle of the screen
    textSize(48);
    text("Points: " + player.points, width / 2 - 100, height / 2 - 100);
    
    // show red screen
    if (keyIsDown(0x20)){
      player.points = 0;
      player.alive = true;
    }
  }
  else
  {
    UpdatePlayerPos();

    DrawPlayer();

    DrawEnemies();

    DrawPoints();
  }
}