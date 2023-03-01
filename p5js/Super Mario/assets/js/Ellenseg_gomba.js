function Ellenseg_gomba() {

  this.x = [];
  this.y = [];
  this.em = [];
  this.zuhanas = [];
  this.balra = [];
  this.jobbra = [];
  this.tiltasb = [];
  this.tiltasj = [];
  this.indul = [];
  this.halott = [];
  this.halotti = [];
  this.hx = [];
  this.hy = [];
  this.sebesseg_v2 = [];
  this.pa = false;
  this.pax = 0;
  this.pay = 0;
  this.pai = 0;

  this.gba = -1;

  this.m1 = 40;
  this.m2 = 39;

  this.zsebesseg = 5;

  this.millis_ = 0;

  this.ki = true;
  this.kep = [];
  this.kep[1] = loadImage("assets/imgs/enemies/ellenseg_1_bal.png");
  this.kep[2] = loadImage("assets/imgs/enemies/ellenseg_1_jobb.png");
  this.kep[3] = loadImage("assets/imgs/enemies/ellenseg_1_halott.png");
  this.kep[0] = this.kep[1];

  this.x[1] = 968;
  this.y[1] = 532;
  this.em[1] = 0;
  this.zuhanas[1] = true;
  this.balra[1] = true;
  this.jobbra[1] = false;
  this.tiltasb[1] = false;
  this.tiltasj[1] = false;
  this.indul[1] = false;
  this.halott[1] = false;
  this.halotti[1] = 0;

  this.x[2] = 2007;
  this.y[2] = 532;
  this.em[2] = 0;
  this.zuhanas[2] = true;
  this.balra[2] = true;
  this.jobbra[2] = false;
  this.tiltasb[2] = false;
  this.tiltasj[2] = false;
  this.indul[2] = false;
  this.halott[2] = false;
  this.halotti[2] = 0;

  this.x[3] = 2471;
  this.y[3] = 532;
  this.em[3] = 0;
  this.zuhanas[3] = true;
  this.balra[3] = true;
  this.jobbra[3] = false;
  this.tiltasb[3] = false;
  this.tiltasj[3] = false;
  this.indul[3] = false;
  this.halott[3] = false;
  this.halotti[3] = 0;

  this.x[4] = 2410;
  this.y[4] = 532;
  this.em[4] = 0;
  this.zuhanas[4] = true;
  this.balra[4] = true;
  this.jobbra[4] = false;
  this.tiltasb[4] = false;
  this.tiltasj[4] = false;
  this.indul[4] = false;
  this.halott[4] = false;
  this.halotti[4] = 0;

  this.x[5] = 3560;
  this.y[5] = 175;
  this.em[5] = 0;
  this.zuhanas[5] = true;
  this.balra[5] = true;
  this.jobbra[5] = false;
  this.tiltasb[5] = false;
  this.tiltasj[5] = false;
  this.indul[5] = false;
  this.halott[5] = false;
  this.halotti[5] = 0;

  this.x[6] = 3620;
  this.y[6] = 175;
  this.em[6] = 0;
  this.zuhanas[6] = true;
  this.balra[6] = true;
  this.jobbra[6] = false;
  this.tiltasb[6] = false;
  this.tiltasj[6] = false;
  this.indul[6] = false;
  this.halott[6] = false;
  this.halotti[6] = 0;

  this.x[7] = 4327;
  this.y[7] = 532;
  this.em[7] = 0;
  this.zuhanas[7] = true;
  this.balra[7] = true;
  this.jobbra[7] = false;
  this.tiltasb[7] = false;
  this.tiltasj[7] = false;
  this.indul[7] = false;
  this.halott[7] = false;
  this.halotti[7] = 0;

  this.x[8] = 4400;
  this.y[8] = 532;
  this.em[8] = 0;
  this.zuhanas[8] = true;
  this.balra[8] = true;
  this.jobbra[8] = false;
  this.tiltasb[8] = false;
  this.tiltasj[8] = false;
  this.indul[8] = false;
  this.halott[8] = false;
  this.halotti[8] = 0;

  this.x[9] = 5066;
  this.y[9] = 532;
  this.em[9] = 0;
  this.zuhanas[9] = true;
  this.balra[9] = true;
  this.jobbra[9] = false;
  this.tiltasb[9] = false;
  this.tiltasj[9] = false;
  this.indul[9] = false;
  this.halott[9] = false;
  this.halotti[9] = 0;

  this.x[10] = 5130;
  this.y[10] = 532;
  this.em[10] = 0;
  this.zuhanas[10] = true;
  this.balra[10] = true;
  this.jobbra[10] = false;
  this.tiltasb[10] = false;
  this.tiltasj[10] = false;
  this.indul[10] = false;
  this.halott[10] = false;
  this.halotti[10] = 0;

  this.x[11] = 5599;
  this.x[11] = 5479;
  this.y[11] = 532;
  this.em[11] = 0;
  this.zuhanas[11] = true;
  this.balra[11] = true;
  this.jobbra[11] = false;
  this.tiltasb[11] = false;
  this.tiltasj[11] = false;
  this.indul[11] = false;
  this.halott[11] = false;
  this.halotti[11] = 0;

  this.x[12] = 5533;
  this.y[12] = 532;
  this.em[12] = 0;
  this.zuhanas[12] = true;
  this.balra[12] = true;
  this.jobbra[12] = false;
  this.tiltasb[12] = false;
  this.tiltasj[12] = false;
  this.indul[12] = false;
  this.halott[12] = false;
  this.halotti[12] = 0;

  this.x[13] = 5700;
  this.y[13] = 532;
  this.em[13] = 0;
  this.zuhanas[13] = true;
  this.balra[13] = true;
  this.jobbra[13] = false;
  this.tiltasb[13] = false;
  this.tiltasj[13] = false;
  this.indul[13] = false;
  this.halott[13] = false;
  this.halotti[13] = 0;

  this.x[14] = 5761;
  this.y[14] = 532;
  this.em[14] = 0;
  this.zuhanas[14] = true;
  this.balra[14] = true;
  this.jobbra[14] = false;
  this.tiltasb[14] = false;
  this.tiltasj[14] = false;
  this.indul[14] = false;
  this.halott[14] = false;
  this.halotti[14] = 0;

  this.x[15] = 7743;
  this.y[15] = 532;
  this.em[15] = 0;
  this.zuhanas[15] = true;
  this.balra[15] = true;
  this.jobbra[15] = false;
  this.tiltasb[15] = false;
  this.tiltasj[15] = false;
  this.indul[15] = false;
  this.halott[15] = false;
  this.halotti[15] = 0;

  this.x[16] = 7798;
  this.y[16] = 532;
  this.em[16] = 0;
  this.zuhanas[16] = true;
  this.balra[16] = true;
  this.jobbra[16] = false;
  this.tiltasb[16] = false;
  this.tiltasj[16] = false;
  this.indul[16] = false;
  this.halott[16] = false;
  this.halotti[16] = 0;

  this.megjelenites = function() {

    if (this.millis_ <= millis()) {
      this.millis_ = millis() + 150;
      if (this.ki == true) {
        this.ki = false;
        this.kep[0] = this.kep[1];
      } else {
        this.ki = true;
        this.kep[0] = this.kep[2];
      }
    }


    for (var i = 1; i <= this.x.length - 1; i++) {
      if (abs(this.x[i] - jatekos.x) < 1200 && abs(this.y[i] - jatekos.y) < 800) {
        let agbo = this.x[i] - this.m1 / 2;
        let agjo = this.x[i] + this.m1 / 2;
        let agfo = this.y[i] - this.m2 / 2;
        let agao = this.y[i] + this.m2 / 2;


        for (var j = 1; j <= this.x.length - 1; j++) {

          let ogbo = this.x[j] - this.m1 / 2;
          let ogjo = this.x[j] + this.m1 / 2;
          let ogfo = this.y[j] - this.m2 / 2;
          let ogao = this.y[j] + this.m2 / 2;

          if (j != i) {
            if (agbo - this.sebesseg_v2[i] < ogjo + this.sebesseg_v2[i] && agjo + this.sebesseg_v2[i] > ogbo - this.sebesseg_v2[i]) {
              if (this.indul[i] == true && this.halott[i] == false && this.halott[j] == false) {
                if (this.jobbra[i] == true) {
                  this.tiltasj[i] = true;
                } else {
                  this.tiltasb[i] = true
                }
              }
            }
          }

        }

        if (this.indul[i] == true) {
          if (this.tiltasj[i] == true) {
            this.balra[i] = true;
            this.jobbra[i] = false;
            this.tiltasj[i] = false;
          }

          if (this.tiltasb[i] == true) {
            this.balra[i] = false;
            this.jobbra[i] = true;
            this.tiltasb[i] = false
          }

          if (this.balra[i] == true && this.tiltasb[i] == false && this.halott[i] == false) {
            this.x[i] -= this.sebesseg_v2[i];
          }

          if (this.jobbra[i] == true && this.tiltasj[i] == false && this.halott[i] == false) {
            this.x[i] += this.sebesseg_v2[i];

          }

          if (this.y[i] + this.zsebesseg + this.m2 / 2 <= this.em[i]) {
            this.y[i] += this.zsebesseg
            this.zuhanas[i] = true;
          }

          if (this.em[i] - this.y[i] - this.m2 / 2 <= this.zsebesseg) {
            this.y[i] = this.em[i] - this.m2 / 2
            this.zuhanas[i] = false;
          }
        }

        if (agbo < jatekos.x + jatekos.m1 / 2 && agjo > jatekos.x - jatekos.m1 / 2) {
          if (jatekos.y < agfo && jatekos.y + jatekos.m2 / 2 > agfo && jatekos.ugras == false) {
            if (this.halott[i] == false) {
              jatekos.ugras = true;
              jatekos.lmugras = 200;
              this.halott[i] = true;
              this.hx[i] = this.x[i];
              this.hy[i] = this.y[i] + 13;
              this.halotti[i] = millis() + 1000;
              pont_animacio.ai++;
              pont_animacio.x[pont_animacio.ai] = this.x[i];
              pont_animacio.y[pont_animacio.ai] = this.y[i];
              pont_animacio.ye[pont_animacio.ai] = this.y[i];
              pont_animacio.e[pont_animacio.ai] = 100;
              pont_animacio.l[pont_animacio.ai] = true;
              grafika.pont += pont_animacio.e[pont_animacio.ai];
            }
          }
        }

        if (this.halott[i] == false) {
          this.m1 = 40;
          this.m2 = 39;
          image(this.kep[0], this.x[i], this.y[i], this.m1, this.m2);
        } else {
          this.indul[i] = false;
          if (this.halotti[i] > millis()) {
            if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.x >= 300) {
              this.hx[i] -= 4;
            }
            image(this.kep[3], this.hx[i], this.hy[i], this.m1, 15);
          }
        }
      }
    }




  }
}