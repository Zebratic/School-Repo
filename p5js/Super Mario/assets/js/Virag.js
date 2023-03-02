function Virag() {

  this.x = 3495;
  this.y = 360;
  this.player_width = 39;
  this.player_height = 40;

  this.sprites = [];

  this.sprites[1] = loadImage("assets/imgs/items/virag_1.png");
  this.sprites[2] = loadImage("assets/imgs/items/virag_2.png");
  this.sprites[3] = loadImage("assets/imgs/items/virag_3.png");
  this.sprites[0] = this.sprites[1];
  this.elapsedMilliseconds = 0;
  this.i = 0;

  this.gba = -1;
  this.felvett_virag = false;
  this.bx = 0;
  this.by = 0;

  this.sebesseg_v2 = 0;

  this.update = function() {

    if (this.gba != talaj_fal.kerd && talaj_fal.kerd != 0 && (talaj_fal.kerd == 1003 || talaj_fal.kerd == 1006 || talaj_fal.kerd == 1008)) {
      this.gba = talaj_fal.kerd;
      this.tiltasb = false;
      this.tiltasj = false;
      this.lathato = false;
      this.animation = false;

    }

    if (this.elapsedMilliseconds <= millis()) {
      this.elapsedMilliseconds = millis() + 20;

      switch (this.i) {
        case 0:
          this.sprites[0] = this.sprites[1];
          this.i = 1;
          break;
        case 1:
          this.sprites[0] = this.sprites[2];
          this.i = 2;
          break;
        case 2:
          this.sprites[0] = this.sprites[3];
          this.i = 0;
          break;
      }
    }

    if (talaj_fal.kerd == 1003 || talaj_fal.kerd == 1006 || talaj_fal.kerd == 1008) {
      if (talaj_fal.kerdi[talaj_fal.kerd] == 1) {
        if (this.animation == false) {
          this.animation = true
          this.x = talaj_fal.x[talaj_fal.kerd];
          this.y = talaj_fal.y[talaj_fal.kerd] - 15;
        }
      }
    }

    if (this.animation == true) {
      this.x -= this.sebesseg_v2;
      image(this.sprites[0], this.x, this.y, this.player_width, this.player_height);
      if (this.y >= talaj_fal.y[talaj_fal.kerd] - talaj_fal.player_height[talaj_fal.kerd] * 0.94) {
        this.y--;
      } else {
        this.animation = false;
        talaj_fal.kerd = 0;
        this.lathato = true;
      }
    }

    if (abs(this.x - jatekos.x) < 30 && abs(this.y - jatekos.y) < 40 && this.lathato == true) {
      this.lathato = false;
      this.felvett_virag = true;
      pont_animacio.ai++;
      pont_animacio.x[pont_animacio.ai] = this.x;
      pont_animacio.y[pont_animacio.ai] = this.y;
      pont_animacio.ye[pont_animacio.ai] = this.y;
      pont_animacio.e[pont_animacio.ai] = 1000;
      pont_animacio.l[pont_animacio.ai] = true;
      grafika.pont += pont_animacio.e[pont_animacio.ai];
    }

    if (this.lathato == true) {
      this.x -= this.sebesseg_v2;
      image(this.sprites[0], this.x, this.y, this.player_width, this.player_height);
    }

  }
}