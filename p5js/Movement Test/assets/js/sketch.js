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

class Bullet
{
  constructor(x, y, speed, angle)
  {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
  }
}

class Enemy
{
  constructor(x, y, speed)
  {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
}

function setup()
{
  player = new Player(screen_x / 2, screen_y / 2, 5, 20, true, 0, 0);
  createCanvas(screen_x, screen_y);
}

function GetMousePos()
{
  mx = map(mouseX, 0, width, 0, screen_x);
  my = map(mouseY, 0, height, 0, screen_y);
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

function DrawGunAndBullets()
{
  // render bullets
  for (var i = 0; i < bullets.length; i++)
  {
    var bullet = bullets[i];
    
    // move bullet to next position
    bullet.x += bullet.speed * cos(bullet.angle);
    bullet.y += bullet.speed * sin(bullet.angle);

    // if bullet is off screen, remove it
    if (bullet.x < 0 || bullet.x > screen_x || bullet.y < 0 || bullet.y > screen_y)
    {
      bullets.splice(i, 1);
    }

    // if bullet touches enemy, remove enemy and bullet
    for (var j = 0; j < enemies.length; j++)
    {
      var selected_enemy = enemies[j];
      if (bullet.x > selected_enemy.x - player.size && bullet.x < selected_enemy.x + player.size && bullet.y > selected_enemy.y - player.size && bullet.y < selected_enemy.y + player.size)
      {
        enemies.splice(j, 1);
        bullets.splice(i, 1);

        // increase player points
        player.points++;

        // if player has more points than highscore, set highscore to player points
        if (player.points > player.highscore)
        {
          player.highscore = player.points;
        }
      }
    }

    // draw bullet
    circle(bullet.x, bullet.y, 5);
  }
  
  // draw a line from player to mouse
  line(player.x, player.y, mx, my);
}

function mouseClicked()
{
   // shoot bullet in direction of mouse
    var bullet = new Bullet(player.x, player.y, 10, atan2(my - player.y, mx - player.x));
    // add bullet to array
    bullets.push(bullet);
}

function DrawPlayer()
{
  // draw player
  fill(255, 255, 255);
  circle(player.x, player.y, player.size * 2);

  // draw gun pointing at mouse
  DrawGunAndBullets();
}

function DrawEnemies()
{
  if (enemies.length < (player.points + 1)) // enemy count
  {
    // spawn enemy at random position
    var enemy = new Enemy(random(0, screen_x), random(0, screen_y), random(1, 5));
    enemies.push(enemy);
  }

  // draw enemies
  for (var i = 0; i < enemies.length; i++)
  {
    var selected_enemy = enemies[i];

    // move towards player
    selected_enemy.x += selected_enemy.speed * cos(atan2(player.y - selected_enemy.y, player.x - selected_enemy.x));
    selected_enemy.y += selected_enemy.speed * sin(atan2(player.y - selected_enemy.y, player.x - selected_enemy.x));

    // if enemy touches player, kill player
    if (selected_enemy.x > player.x - player.size && selected_enemy.x < player.x + player.size && selected_enemy.y > player.y - player.size && selected_enemy.y < player.y + player.size)
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
    // getting mouse position on canvas
    GetMousePos();

    // draw 2 lines at mouse position ()
    line(mx - player.size / 2, my, mx + player.size / 2, my);
    line(mx, my - player.size / 2, mx, my + player.size / 2);

    UpdatePlayerPos();

    DrawPlayer();

    DrawEnemies();

    DrawPoints();
  }
}