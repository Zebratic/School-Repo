function Ellenseg_gomba() {

  this.x = [];
  this.y = [];
  this.bottom = [];
  this.falling = [];
  this.moveLeft = [];
  this.moveRight = [];
  this.tiltasb = [];
  this.tiltasj = [];
  this.indul = [];
  this.halott = [];
  this.halotti = [];
  this.deadX = [];
  this.deadY = [];
  this.sebesseg_v2 = [];
  this.pa = false;
  this.pax = 0;
  this.pay = 0;
  this.pai = 0;

  this.gba = -1;

  this.player_width = 40;
  this.player_height = 39;

  this.jumpSpeed = 5;

  this.elapsedMilliseconds = 0;

  this.ki = true;
  this.sprites = [];
  this.sprites[1] = loadImage("assets/imgs/enemies/ellenseg_1_bal.png");
  this.sprites[2] = loadImage("assets/imgs/enemies/ellenseg_1_jobb.png");
  this.sprites[3] = loadImage("assets/imgs/enemies/ellenseg_1_halott.png");
  this.sprites[0] = this.sprites[1];

  this.x[1] = 968;
  this.y[1] = 532;
  this.bottom[1] = 0;
  this.falling[1] = true;
  this.moveLeft[1] = true;
  this.moveRight[1] = false;
  this.tiltasb[1] = false;
  this.tiltasj[1] = false;
  this.indul[1] = false;
  this.halott[1] = false;
  this.halotti[1] = 0;

  this.x[2] = 2007;
  this.y[2] = 532;
  this.bottom[2] = 0;
  this.falling[2] = true;
  this.moveLeft[2] = true;
  this.moveRight[2] = false;
  this.tiltasb[2] = false;
  this.tiltasj[2] = false;
  this.indul[2] = false;
  this.halott[2] = false;
  this.halotti[2] = 0;

  this.x[3] = 2471;
  this.y[3] = 532;
  this.bottom[3] = 0;
  this.falling[3] = true;
  this.moveLeft[3] = true;
  this.moveRight[3] = false;
  this.tiltasb[3] = false;
  this.tiltasj[3] = false;
  this.indul[3] = false;
  this.halott[3] = false;
  this.halotti[3] = 0;

  this.x[4] = 2410;
  this.y[4] = 532;
  this.bottom[4] = 0;
  this.falling[4] = true;
  this.moveLeft[4] = true;
  this.moveRight[4] = false;
  this.tiltasb[4] = false;
  this.tiltasj[4] = false;
  this.indul[4] = false;
  this.halott[4] = false;
  this.halotti[4] = 0;

  this.x[5] = 3560;
  this.y[5] = 175;
  this.bottom[5] = 0;
  this.falling[5] = true;
  this.moveLeft[5] = true;
  this.moveRight[5] = false;
  this.tiltasb[5] = false;
  this.tiltasj[5] = false;
  this.indul[5] = false;
  this.halott[5] = false;
  this.halotti[5] = 0;

  this.x[6] = 3620;
  this.y[6] = 175;
  this.bottom[6] = 0;
  this.falling[6] = true;
  this.moveLeft[6] = true;
  this.moveRight[6] = false;
  this.tiltasb[6] = false;
  this.tiltasj[6] = false;
  this.indul[6] = false;
  this.halott[6] = false;
  this.halotti[6] = 0;

  this.x[7] = 4327;
  this.y[7] = 532;
  this.bottom[7] = 0;
  this.falling[7] = true;
  this.moveLeft[7] = true;
  this.moveRight[7] = false;
  this.tiltasb[7] = false;
  this.tiltasj[7] = false;
  this.indul[7] = false;
  this.halott[7] = false;
  this.halotti[7] = 0;

  this.x[8] = 4400;
  this.y[8] = 532;
  this.bottom[8] = 0;
  this.falling[8] = true;
  this.moveLeft[8] = true;
  this.moveRight[8] = false;
  this.tiltasb[8] = false;
  this.tiltasj[8] = false;
  this.indul[8] = false;
  this.halott[8] = false;
  this.halotti[8] = 0;

  this.x[9] = 5066;
  this.y[9] = 532;
  this.bottom[9] = 0;
  this.falling[9] = true;
  this.moveLeft[9] = true;
  this.moveRight[9] = false;
  this.tiltasb[9] = false;
  this.tiltasj[9] = false;
  this.indul[9] = false;
  this.halott[9] = false;
  this.halotti[9] = 0;

  this.x[10] = 5130;
  this.y[10] = 532;
  this.bottom[10] = 0;
  this.falling[10] = true;
  this.moveLeft[10] = true;
  this.moveRight[10] = false;
  this.tiltasb[10] = false;
  this.tiltasj[10] = false;
  this.indul[10] = false;
  this.halott[10] = false;
  this.halotti[10] = 0;

  this.x[11] = 5599;
  this.x[11] = 5479;
  this.y[11] = 532;
  this.bottom[11] = 0;
  this.falling[11] = true;
  this.moveLeft[11] = true;
  this.moveRight[11] = false;
  this.tiltasb[11] = false;
  this.tiltasj[11] = false;
  this.indul[11] = false;
  this.halott[11] = false;
  this.halotti[11] = 0;

  this.x[12] = 5533;
  this.y[12] = 532;
  this.bottom[12] = 0;
  this.falling[12] = true;
  this.moveLeft[12] = true;
  this.moveRight[12] = false;
  this.tiltasb[12] = false;
  this.tiltasj[12] = false;
  this.indul[12] = false;
  this.halott[12] = false;
  this.halotti[12] = 0;

  this.x[13] = 5700;
  this.y[13] = 532;
  this.bottom[13] = 0;
  this.falling[13] = true;
  this.moveLeft[13] = true;
  this.moveRight[13] = false;
  this.tiltasb[13] = false;
  this.tiltasj[13] = false;
  this.indul[13] = false;
  this.halott[13] = false;
  this.halotti[13] = 0;

  this.x[14] = 5761;
  this.y[14] = 532;
  this.bottom[14] = 0;
  this.falling[14] = true;
  this.moveLeft[14] = true;
  this.moveRight[14] = false;
  this.tiltasb[14] = false;
  this.tiltasj[14] = false;
  this.indul[14] = false;
  this.halott[14] = false;
  this.halotti[14] = 0;

  this.x[15] = 7743;
  this.y[15] = 532;
  this.bottom[15] = 0;
  this.falling[15] = true;
  this.moveLeft[15] = true;
  this.moveRight[15] = false;
  this.tiltasb[15] = false;
  this.tiltasj[15] = false;
  this.indul[15] = false;
  this.halott[15] = false;
  this.halotti[15] = 0;

  this.x[16] = 7798;
  this.y[16] = 532;
  this.bottom[16] = 0;
  this.falling[16] = true;
  this.moveLeft[16] = true;
  this.moveRight[16] = false;
  this.tiltasb[16] = false;
  this.tiltasj[16] = false;
  this.indul[16] = false;
  this.halott[16] = false;
  this.halotti[16] = 0;

  this.update = function() {

    if (this.elapsedMilliseconds <= millis()) {
      this.elapsedMilliseconds = millis() + 150;
      if (this.ki == true) {
        this.ki = false;
        this.sprites[0] = this.sprites[1];
      } else {
        this.ki = true;
        this.sprites[0] = this.sprites[2];
      }
    }


    for (var i = 1; i <= this.x.length - 1; i++) {
      if (abs(this.x[i] - jatekos.x) < 1200 && abs(this.y[i] - jatekos.y) < 800) {
        let agbo = this.x[i] - this.player_width / 2;
        let agjo = this.x[i] + this.player_width / 2;
        let agfo = this.y[i] - this.player_height / 2;
        let agao = this.y[i] + this.player_height / 2;


        for (var j = 1; j <= this.x.length - 1; j++) {

          let ogbo = this.x[j] - this.player_width / 2;
          let ogjo = this.x[j] + this.player_width / 2;
          let ogfo = this.y[j] - this.player_height / 2;
          let ogao = this.y[j] + this.player_height / 2;

          if (j != i) {
            if (agbo - this.sebesseg_v2[i] < ogjo + this.sebesseg_v2[i] && agjo + this.sebesseg_v2[i] > ogbo - this.sebesseg_v2[i]) {
              if (this.indul[i] == true && this.halott[i] == false && this.halott[j] == false) {
                if (this.moveRight[i] == true) {
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
            this.moveLeft[i] = true;
            this.moveRight[i] = false;
            this.tiltasj[i] = false;
          }

          if (this.tiltasb[i] == true) {
            this.moveLeft[i] = false;
            this.moveRight[i] = true;
            this.tiltasb[i] = false
          }

          if (this.moveLeft[i] == true && this.tiltasb[i] == false && this.halott[i] == false) {
            this.x[i] -= this.sebesseg_v2[i];
          }

          if (this.moveRight[i] == true && this.tiltasj[i] == false && this.halott[i] == false) {
            this.x[i] += this.sebesseg_v2[i];

          }

          if (this.y[i] + this.jumpSpeed + this.player_height / 2 <= this.bottom[i]) {
            this.y[i] += this.jumpSpeed
            this.falling[i] = true;
          }

          if (this.bottom[i] - this.y[i] - this.player_height / 2 <= this.jumpSpeed) {
            this.y[i] = this.bottom[i] - this.player_height / 2
            this.falling[i] = false;
          }
        }

        if (agbo < jatekos.x + jatekos.player_width / 2 && agjo > jatekos.x - jatekos.player_width / 2) {
          if (jatekos.y < agfo && jatekos.y + jatekos.player_height / 2 > agfo && jatekos.jump == false) {
            if (this.halott[i] == false) {
              jatekos.jump = true;
              jatekos.lastJump = 200;
              this.halott[i] = true;
              this.deadX[i] = this.x[i];
              this.deadY[i] = this.y[i] + 13;
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
          this.player_width = 40;
          this.player_height = 39;
          image(this.sprites[0], this.x[i], this.y[i], this.player_width, this.player_height);
        } else {
          this.indul[i] = false;
          if (this.halotti[i] > millis()) {
            if (jatekos.moveRight == true && talaj_fal.tiltasj == false && jatekos.x >= 300) {
              this.deadX[i] -= 4;
            }
            image(this.sprites[3], this.deadX[i], this.deadY[i], this.player_width, 15);
          }
        }
      }
    }




  }
}