function Gomba() {

  this.x = 219;
  this.y = 269;
  this.player_width = 43;
  this.player_height = 43;

  this.moveLeft = false;
  this.moveRight = true;

  this.falling = false;

  this.moveSpeed = 3;
  this.jumpSpeed = 5;
  this.maxJumpSpeed = 5;
  this.jumpCounter = 0;
  this.sprites = loadImage("assets/imgs/items/gomba.png");

  this.tiltasb = false;
  this.tiltasj = false;
  this.lathato = false;
  this.animation = false;
  this.gba = -1;
  this.gb = 0;

  this.sebesseg_v2 = 0;

  this.update = function() {

    if (this.gba != talaj_fal.kerd && talaj_fal.kerd != 0 && (talaj_fal.kerd == 1006 || talaj_fal.kerd == 1008)) {
      this.gba = talaj_fal.kerd;
      this.tiltasb = false;
      this.tiltasj = false;
      this.lathato = false;
      this.animation = false;
      this.gb = talaj_fal.kerd
    }

    if (talaj_fal.kerd == 1003 || talaj_fal.kerd == 1006 || talaj_fal.kerd == 1008) {
      this.gb = talaj_fal.kerd;
      if (talaj_fal.kerdi[talaj_fal.kerd] == 1) {
        if (this.animation == false) {
          this.animation = true
          this.x = talaj_fal.x[talaj_fal.kerd];
          this.y = talaj_fal.y[talaj_fal.kerd] - 15;
        }
      }
    }

    if (this.animation == true) {
      image(this.sprites, this.x, this.y, this.player_width, this.player_height);
      if (this.y >= talaj_fal.y[this.gb] - talaj_fal.player_height[this.gb]) {
        this.y--;
      } else {

        this.animation = false;
        talaj_fal.kerd = 0;
        this.lathato = true;

      }
    }

    if (abs(this.x - jatekos.x) < 30 && abs(this.y - jatekos.y) < 30 && this.lathato == true) {
      this.lathato = false;
      jatekos.mushroom++;
      pont_animacio.ai++;
      pont_animacio.x[pont_animacio.ai] = this.x;
      pont_animacio.y[pont_animacio.ai] = this.y;
      pont_animacio.ye[pont_animacio.ai] = this.y;
      pont_animacio.e[pont_animacio.ai] = 1000;
      pont_animacio.l[pont_animacio.ai] = true;
      grafika.pont += pont_animacio.e[pont_animacio.ai];
    }

    if (this.lathato == true) {
      if (this.tiltasj == true) {
        this.moveLeft = true;
        this.moveRight = false;
        this.tiltasj = false;
      }

      if (this.tiltasb == true) {
        this.moveLeft = false;
        this.moveRight = true;
        this.tiltasb = false;
      }

      if (this.moveLeft == true && this.tiltasb == false) {
        this.x -= this.sebesseg_v2;
      }

      if (this.moveRight == true && this.tiltasj == false) {
        this.x += this.sebesseg_v2;
      }

      if (this.y + this.jumpSpeed + this.player_height / 2 <= this.bottom) {
        this.y += this.jumpSpeed
        this.falling = true;
        this.moveSpeed = this.sebesseg_v2;
      }

      if (this.bottom - this.y - this.player_height / 2 <= this.jumpSpeed) {
        this.y = this.bottom - this.player_height / 2
        this.falling = false;
        this.moveSpeed = this.sebesseg_v2;
      }

      image(this.sprites, this.x, this.y, this.player_width, this.player_height);

    }

  }
}