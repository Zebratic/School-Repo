function Gomba() {

  this.x = 219;
  this.y = 269;
  this.m1 = 43;
  this.m2 = 43;

  this.balra = false;
  this.jobbra = true;

  this.zuhanas = false;

  this.msebesseg = 3;
  this.zsebesseg = 5;
  this.usebesseg = 5;
  this.ugrasi = 0;
  this.kep = loadImage("assets/imgs/items/gomba.png");

  this.tiltasb = false;
  this.tiltasj = false;
  this.lathato = false;
  this.animation = false;
  this.gba = -1;
  this.gb = 0;

  this.sebesseg_v2 = 0;

  this.megjelenites = function() {

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
      image(this.kep, this.x, this.y, this.m1, this.m2);
      if (this.y >= talaj_fal.y[this.gb] - talaj_fal.m2[this.gb]) {
        this.y--;
      } else {

        this.animation = false;
        talaj_fal.kerd = 0;
        this.lathato = true;

      }
    }

    if (abs(this.x - jatekos.x) < 30 && abs(this.y - jatekos.y) < 30 && this.lathato == true) {
      this.lathato = false;
      jatekos.gomba_++;
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
        this.balra = true;
        this.jobbra = false;
        this.tiltasj = false;
      }

      if (this.tiltasb == true) {
        this.balra = false;
        this.jobbra = true;
        this.tiltasb = false;
      }

      if (this.balra == true && this.tiltasb == false) {
        this.x -= this.sebesseg_v2;
      }

      if (this.jobbra == true && this.tiltasj == false) {
        this.x += this.sebesseg_v2;
      }

      if (this.y + this.zsebesseg + this.m2 / 2 <= this.em) {
        this.y += this.zsebesseg
        this.zuhanas = true;
        this.msebesseg = this.sebesseg_v2;
      }

      if (this.em - this.y - this.m2 / 2 <= this.zsebesseg) {
        this.y = this.em - this.m2 / 2
        this.zuhanas = false;
        this.msebesseg = this.sebesseg_v2;
      }

      image(this.kep, this.x, this.y, this.m1, this.m2);

    }

  }
}