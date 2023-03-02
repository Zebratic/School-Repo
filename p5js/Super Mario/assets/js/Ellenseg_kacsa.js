function Ellenseg_kacsa() {

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
  this.ue = [];
  this.uei = [];
  this.vh = [];
  this.li = [];
  this.vhms = [];
  this.vhmi = [];
  this.kv = [];
  this.player_width = 39;
  this.player_height = 57;
  this.sebesseg_v2 = [];

  this.moveSpeed = 1;
  this.jumpSpeed = 5;

  this.elapsedMilliseconds = 0;

  this.ki = true;
  this.sprites = [];
  this.sprites[1] = loadImage("assets/imgs/enemies/kacsa_teknos_1.png");
  this.sprites[2] = loadImage("assets/imgs/enemies/kacsa_teknos_2.png");
  this.sprites[3] = loadImage("assets/imgs/enemies/kacsa_teknos_3.png");
  this.sprites[4] = loadImage("assets/imgs/enemies/kacsa_teknos_4.png");
  this.sprites[5] = loadImage("assets/imgs/enemies/kacsa_teknos_5.png");
  this.sprites[0] = this.sprites[1];

  this.x[1] = 4770;
  this.y[1] = 520;
  this.bottom[1] = 0;
  this.falling[1] = true;
  this.moveLeft[1] = true;
  this.moveRight[1] = false;
  this.tiltasb[1] = false;
  this.tiltasj[1] = false;
  this.indul[1] = false;
  this.halott[1] = false;
  this.halotti[1] = 0;
  this.ue[1] = false;
  this.uei[1] = 0;
  this.vh[1] = false;
  this.vhms[1] = 10;
  this.vhmi[1] = "s"
  this.kv[1] = false;

  this.update = function() {

    for (var i = 1; i <= this.x.length - 1; i++) {
      if (this.kv[i] == false) {
        if (this.elapsedMilliseconds <= millis()) {
          this.elapsedMilliseconds = millis() + 150;
          if (this.ki == true) {
            this.ki = false;
            if (this.moveLeft[i] == true) {
              this.sprites[0] = this.sprites[1];
            }
            if (this.moveRight[i] == true) {
              this.sprites[0] = this.sprites[4];
            }
          } else {
            this.ki = true;
            if (this.moveLeft[i] == true) {
              this.sprites[0] = this.sprites[2];
            }
            if (this.moveRight[i] == true) {
              this.sprites[0] = this.sprites[5];
            }
          }
        }


        if (abs(this.x[i] - jatekos.x) < 3000 && abs(this.y[i] - jatekos.y) < 800) {
          let akbo = this.x[i] - this.player_width / 2;
          let akjo = this.x[i] + this.player_width / 2;
          let akfo = this.y[i] - this.player_height / 2;
          let akao = this.y[i] + this.player_height / 2;

          for (var j = 1; j <= ellenseg_gomba.x.length - 1; j++) {
            if (abs(ellenseg_gomba.x[j] - this.x[i]) < 20 && abs(ellenseg_gomba.y[j] - this.y[i]) < 20) {
              if (this.vh[i] == true && ellenseg_gomba.halott[j] == false) {

                pont_animacio.ai++;
                pont_animacio.x[pont_animacio.ai] = this.x[i];
                pont_animacio.y[pont_animacio.ai] = this.y[i];
                pont_animacio.ye[pont_animacio.ai] = this.y[i];
                pont_animacio.e[pont_animacio.ai] = 100;
                pont_animacio.l[pont_animacio.ai] = true;
                grafika.pont += pont_animacio.e[pont_animacio.ai];

                kilott_ellen_anim.i++;
                kilott_ellen_anim.xe[kilott_ellen_anim.i] = ellenseg_gomba.x[j];
                kilott_ellen_anim.ye[kilott_ellen_anim.i] = ellenseg_gomba.y[j];
                kilott_ellen_anim.l[kilott_ellen_anim.i] = true;
                kilott_ellen_anim.kg[kilott_ellen_anim.i] = "g";
                kilott_ellen_anim.t[kilott_ellen_anim.i] = 0;
                ellenseg_gomba.halott[j] = true;
                ellenseg_gomba.halotti[j] = millis() - 1;

                if (this.x[i] < ellenseg_gomba.x[j]) {
                  kilott_ellen_anim.sz[kilott_ellen_anim.i] = -60;
                } else {
                  kilott_ellen_anim.sz[kilott_ellen_anim.i] = 240;
                }
              }
            }
          }

          for (var j = 1; j <= this.x.length - 1; j++) {

            let okbo = this.x[j] - this.player_width / 2;
            let okjo = this.x[j] + this.player_width / 2;
            let okfo = this.y[j] - this.player_height / 2;
            let okao = this.y[j] + this.player_height / 2;

            if (j != i) {
              if (akbo - this.moveSpeed < okjo + this.sebesseg_v2[i] && akjo + this.moveSpeed > okbo - this.sebesseg_v2[i]) {
                if (this.moveRight[i] == true) {
                  this.tiltasj[i] = true;
                } else {
                  this.tiltasb[i] = true
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

            if (this.moveLeft[i] == true && this.tiltasb[i] == false && this.vh[i] == false && this.halott[i] == false) {
              this.x[i] -= this.sebesseg_v2[i];
            }

            if (this.moveRight[i] == true && this.tiltasj[i] == false && this.vh[i] == false && this.halott[i] == false) {
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

          if (akbo < jatekos.x + jatekos.player_width / 2 && akjo > jatekos.x - jatekos.player_width / 2) {

            if (abs(jatekos.y - this.y[i]) < 20 && this.uei[i] == 1) {
              this.vh[1] = true;
              this.uei[i] = 2;
            }

            if (jatekos.y < akfo && jatekos.y + jatekos.player_height / 2 > akfo && jatekos.jump == false) {

              if (this.uei[i] > 1) {
                this.vhmi[i] = "s";
                this.vh[i] = false
                this.uei[i] = 0;
                this.y[i] -= 11
              }

              if (this.halott[i] == false || this.ue[1] == false) {
                jatekos.jump = true;
                jatekos.lastJump = 200;
                this.halott[i] = true;
                if (this.uei[i] == 0) {
                  this.y[i] += 11;
                }
                this.halotti[i] = millis() + 4000;

                if (this.uei[i] == 0) {
                  pont_animacio.ai++;
                  pont_animacio.x[pont_animacio.ai] = this.x[i];
                  pont_animacio.y[pont_animacio.ai] = this.y[i];
                  pont_animacio.ye[pont_animacio.ai] = this.y[i];
                  pont_animacio.e[pont_animacio.ai] = 100;
                  pont_animacio.l[pont_animacio.ai] = true;
                  grafika.pont += pont_animacio.e[pont_animacio.ai];
                }

                this.uei[i]++;

              }
            }
          }

          if (this.halott[i] == false) {
            this.ue[1] = false;
            this.player_width = 39;
            this.player_height = 57;
            image(this.sprites[0], this.x[i], this.y[i], this.player_width, this.player_height);
          } else {
            this.player_width = 39;
            this.player_height = 34;
            this.indul[i] = false;
            if (this.uei[i] > 1) {
              this.indul[i] = true;
              this.vh[1] = true;

              if (this.vhmi[i] == "s") {
                pont_animacio.ai++;
                pont_animacio.x[pont_animacio.ai] = this.x[i];
                pont_animacio.y[pont_animacio.ai] = this.y[i];
                pont_animacio.ye[pont_animacio.ai] = this.y[i];
                pont_animacio.e[pont_animacio.ai] = 400;
                pont_animacio.l[pont_animacio.ai] = true;
                grafika.pont += pont_animacio.e[pont_animacio.ai];
                if (jatekos.x < this.x[i]) {
                  this.vhmi[i] = "b";
                } else {
                  this.vhmi[i] = "j"
                }
              }

              if (this.vhmi[i] == "b") {
                this.x[i] += this.vhms[i] + ellenseg_kacsa.sebesseg_v2[i];
              }
              if (this.vhmi[i] == "j") {
                this.x[i] -= this.vhms[i] + ellenseg_kacsa.sebesseg_v2[i];
              }

            }
            if (this.halotti[i] > millis() || this.vh[i] == true) {
              image(this.sprites[3], this.x[i], this.y[i], this.player_width, this.player_height);
            } else {
              this.indul[i] = true;
              if (this.vh[i] == false) {
                this.halott[i] = false;
              }
              this.y[i] -= 21;
              this.ue[i] = true;
              this.uei[i] = 0;

              if (this.moveLeft[i] == true) {
                this.sprites[0] = this.sprites[4];
                this.moveLeft[i] = false;
                this.moveRight[i] = true;
                this.tiltasj[i] = false;
                this.tiltasb[i] = false;
              } else {
                this.sprites[0] = this.sprites[1];
                this.moveLeft[i] = true;
                this.moveRight[i] = false;
                this.tiltasj[i] = false;
                this.tiltasb[i] = false;
              }
            }
          }
        }
      }
    }

  }
}