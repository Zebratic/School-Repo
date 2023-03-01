function Player() {

    this.x = 150;
    this.y = 269;
    this.width = 30;
    this.height = 41;
    
    this.moveLeft = false;
    this.moveRight = false;
    this.crouch = false;
    this.jump = false;
    this.lastJump = 90;
    this.floor = 0;
    this.run = false;
    
    this.bottom = height;
    this.falling = false;
    
    this.moveSpeed = 3;
    this.jumpSpeed = 6;
    this.maxJumpSpeed = 30;
    this.jumpCounter = 0;
    this.mushroom = 0;
    this.isBig = true;
    this.dead = false;
    this.deadX = 0;
    this.deadY = 0;
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.hurtTime = 0;
    this.invulnerable = false;
    this.flashing = false;
    this.flashTime = 0;
    
    this.sprite = [];
    this.sprite[0] = loadImage("assets/imgs/mario/mario_0.png");
    this.sprite[1] = loadImage("assets/imgs/mario/mario_1.png");
    this.sprite[2] = loadImage("assets/imgs/mario/mario_2.png");
    this.sprite[3] = loadImage("assets/imgs/mario/mario_3.png");
    this.sprite[4] = loadImage("assets/imgs/mario/mario_4.png");
    this.sprite[5] = loadImage("assets/imgs/mario/mario_5.png");
    this.sprite[6] = loadImage("assets/imgs/mario/fire_mario_0.png");
    this.sprite[7] = loadImage("assets/imgs/mario/fire_mario_1.png");
    this.sprite[8] = loadImage("assets/imgs/mario/fire_mario_2.png");
    this.sprite[9] = loadImage("assets/imgs/mario/fire_mario_3.png");
    this.sprite[10] = loadImage("assets/imgs/mario/fire_mario_4.png");
    this.sprite[11] = loadImage("assets/imgs/mario/fire_mario_5.png");
    this.sprite[12] = loadImage("assets/imgs/mario/fire_mario_6.png");
    this.sprite[13] = loadImage("assets/imgs/mario/mario_reversed_0.png");
    this.sprite[14] = loadImage("assets/imgs/mario/mario_reversed_1.png");
    this.sprite[15] = loadImage("assets/imgs/mario/mario_reversed_2.png");
    this.sprite[16] = loadImage("assets/imgs/mario/mario_reversed_3.png");
    this.sprite[17] = loadImage("assets/imgs/mario/mario_reversed_3.png");
    this.sprite[18] = loadImage("assets/imgs/mario/mario_reversed_5.png");
    this.sprite[19] = loadImage("assets/imgs/mario/fire_mario_reversed_0.png");
    this.sprite[20] = loadImage("assets/imgs/mario/fire_mario_reversed_1.png");
    this.sprite[21] = loadImage("assets/imgs/mario/fire_mario_reversed_2.png");
    this.sprite[22] = loadImage("assets/imgs/mario/fire_mario_reversed_3.png");
    this.sprite[23] = loadImage("assets/imgs/mario/fire_mario_reversed_4.png");
    this.sprite[24] = loadImage("assets/imgs/mario/fire_mario_reversed_5.png");
    this.sprite[25] = loadImage("assets/imgs/mario/fire_mario_reversed_6.png");
    this.sprite[26] = loadImage("assets/imgs/mario/mario_dead.png");

    this.elapsedMillis = 0;
    this.je = false;
    this.ji = 0;
  
    this.speed_v2 = 3;

}