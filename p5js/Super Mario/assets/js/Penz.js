function Penz() {

  this.x = 1061;
  this.y = 360;
  this.m1e = 28;
  this.m2e = 35;
  this.player_width = 28;
  this.player_height = 35;
  this.sprites = [];
  this.forgas = 1;
  this.zuhan = false;
  this.lathato = false;
  this.yelvartmin = 0;
  this.yelvartmax = 0;
  this.sprites[1] = loadImage("assets/imgs/items/money_1.png");
  this.sprites[2] = loadImage("assets/imgs/items/money_2.png");
  this.sprites[3] = loadImage("assets/imgs/items/money_3.png");

  this.sprites[0] = this.sprites[1];
  this.pl = false;
  this.px = 0;
  this.py = 0;
  
  this.sebesseg_v2 = 0;
  
  this.update = function() {

    if (talaj_fal.kerd == 1000 || talaj_fal.kerd == 1001 || talaj_fal.kerd == 1007 || talaj_fal.kerd == 1009) {
      if (talaj_fal.kerdi[talaj_fal.kerd] == 1) {
        grafika.pont += 200;
        grafika.erem += 1;
        this.lathato = true;
        this.zuhan = false;
      }
      talaj_fal.kerd = 0;
    }

    if (talaj_fal.kerd == 1002 || talaj_fal.kerd == 1004 || talaj_fal.kerd == 1005 || talaj_fal.kerd == 1010) {
      if (talaj_fal.kerdi[talaj_fal.kerd] == 1) {
        grafika.pont += 200;
        grafika.erem += 1;
        this.lathato = true;
        this.zuhan = false;
      }
      talaj_fal.kerd = 0;
    }

    if (talaj_fal.kerd == 1011 || talaj_fal.kerd == 1012) {
      if (talaj_fal.kerdi[talaj_fal.kerd] == 1) {
        grafika.pont += 200;
        grafika.erem += 1;
        this.lathato = true;
        this.zuhan = false;
      }
      talaj_fal.kerd = 0;
    }


    if (this.lathato == true) {
      this.x -= this.sebesseg_v2;
      image(this.sprites[0], this.x, this.y, this.player_width, this.player_height);
    }

    switch (this.forgas) {
      case 1:
        if (this.player_width >= this.m1e / 3) {
          this.player_width -= 1.7;
        } else {
          this.forgas = 2;
          this.sprites[0] = this.sprites[3];
        }
        break;
      case 2:
        if (this.player_width <= this.m1e * 1.1) {
          this.player_width += 1.7;
        } else {
          this.forgas = 3;
          this.sprites[0] = this.sprites[2];
        }
        break;
      case 3:
        if (this.player_width <= this.m1e * 1.6) {
          this.player_width += 1.7;
        } else {
          this.forgas = 1;
          this.player_width = this.m1e * 0.9;
          this.sprites[0] = this.sprites[1];
        }
        break;
      default:
    }

    if (this.lathato == true) {
      if (this.zuhan == false) {
        if (this.y >= this.yelvartmin) {
          this.y -= 5;
        } else {
          this.zuhan = true;
        }
      } else {
        if (this.y <= this.yelvartmax) {
          this.y += 5;
        } else {
          this.lathato = false;
          this.zuhan = false
          pont_animacio.ai++;
          pont_animacio.x[pont_animacio.ai] = this.x;
          pont_animacio.y[pont_animacio.ai] = this.y;
          pont_animacio.ye[pont_animacio.ai] = this.y;
          pont_animacio.e[pont_animacio.ai] = 200;
          pont_animacio.l[pont_animacio.ai] = true;
          grafika.pont += pont_animacio.e[pont_animacio.ai];
        }
      }
    }

    if (this.pl == true) {
      if (this.py >= this.y - 50) {
        fill(255);
        textSize(25);
        text("200", this.px, this.py);
        this.py -= 2;
      } else {
        this.pl = false;
      }
    }


  }
}