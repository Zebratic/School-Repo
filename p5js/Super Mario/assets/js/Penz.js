function Penz() {

  this.x = 1061;
  this.y = 360;
  this.m1e = 28;
  this.m2e = 35;
  this.m1 = 28;
  this.m2 = 35;
  this.kep = [];
  this.forgas = 1;
  this.zuhan = false;
  this.lathato = false;
  this.yelvartmin = 0;
  this.yelvartmax = 0;
  this.kep[1] = loadImage("assets/imgs/items/money_1.png");
  this.kep[2] = loadImage("assets/imgs/items/money_2.png");
  this.kep[3] = loadImage("assets/imgs/items/money_3.png");

  this.kep[0] = this.kep[1];
  this.pl = false;
  this.px = 0;
  this.py = 0;
  
  this.sebesseg_v2 = 0;
  
  this.megjelenites = function() {

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
      image(this.kep[0], this.x, this.y, this.m1, this.m2);
    }

    switch (this.forgas) {
      case 1:
        if (this.m1 >= this.m1e / 3) {
          this.m1 -= 1.7;
        } else {
          this.forgas = 2;
          this.kep[0] = this.kep[3];
        }
        break;
      case 2:
        if (this.m1 <= this.m1e * 1.1) {
          this.m1 += 1.7;
        } else {
          this.forgas = 3;
          this.kep[0] = this.kep[2];
        }
        break;
      case 3:
        if (this.m1 <= this.m1e * 1.6) {
          this.m1 += 1.7;
        } else {
          this.forgas = 1;
          this.m1 = this.m1e * 0.9;
          this.kep[0] = this.kep[1];
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