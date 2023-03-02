function Loves() {

  this.x = [];
  this.y = [];
  this.player_width = [];
  this.player_height = [];
  this.sz = [];
  this.xe = [];
  this.ye = [];
  this.t = [];
  this.lat = [];
  this.anim = [];
  this.vx = [];
  this.vy = [];
  this.vm1 = [];
  this.vm2 = [];
  this.te = [];
  this.elapsedMilliseconds = 0;
  this.e = false;

  this.sprites = [];

  this.sprites[1] = loadImage("assets/imgs/props/tuzgolyo_1.png");
  this.sprites[2] = loadImage("assets/imgs/props/tuzgolyo_2.png");
  this.l = -1;
  this.i = "j";
  this.te[1] = false;
  this.te[2] = false;

  this.elapsedMilliseconds = 0;
  this.i = 0;

  this.update = function() {

    if (this.e == true && this.elapsedMilliseconds <= millis() && jatekos.crouch == false) {

      if (this.elapsedMilliseconds <= millis()) {
        if (this.l == 10) {
          this.l = -1;
        }
        this.l += 2;
        this.elapsedMilliseconds = millis() + 500;
      }

      this.player_width[this.l] = 19;
      this.player_height[this.l] = 19;
      this.player_width[this.l + 1] = 19;
      this.player_height[this.l + 1] = 19;

      this.te[this.l] = false;
      this.te[this.l + 1] = false;

      this.x[this.l] = jatekos.x
      this.y[this.l] = jatekos.y
      this.x[this.l + 1] = jatekos.x
      this.y[this.l + 1] = jatekos.y
      this.t[this.l] = 0;
      this.t[this.l + 1] = 0;

      this.lat[this.l] = true;
      this.lat[this.l + 1] = true;

      this.anim[this.l] = false;
      this.anim[this.l + 1] = false;

      if (this.i == "j") {
        this.sz[this.l] = 15;
        this.sz[this.l + 1] = 15;

        this.xe[this.l] = jatekos.x - 15;
        this.xe[this.l + 1] = jatekos.x + 19;

        this.ye[this.l] = jatekos.y - 13
        this.ye[this.l + 1] = jatekos.y - 12

        if (kilott_ellen_anim.i == 6) {
          kilott_ellen_anim.i = 0;
        }

        kilott_ellen_anim.sz[kilott_ellen_anim.i + 1] = -60;
        kilott_ellen_anim.sz[kilott_ellen_anim.i + 2] = -60;

      } else {
        this.sz[this.l] = 165;
        this.sz[this.l + 1] = 165;

        this.xe[this.l] = jatekos.x + 19;
        this.xe[this.l + 1] = jatekos.x - 19;

        this.ye[this.l] = jatekos.y - 15
        this.ye[this.l + 1] = jatekos.y - 12

        kilott_ellen_anim.sz[kilott_ellen_anim.i + 1] = 240;
        kilott_ellen_anim.sz[kilott_ellen_anim.i + 2] = 240;

      }
    }

    for (var i = 1; i <= this.l + 1; i++) {
      if (this.lat[i] == true) {
        this.t[i] += 0.2;
        this.x[i] = this.xe[i] + 60 * this.t[i] * cos(this.sz[i]);
        this.y[i] = this.ye[i] + 60 * this.t[i] * sin(this.sz[i]) + 9.81 / 2 * sq(this.t[i]);

        image(this.sprites[1], this.x[i], this.y[i], this.player_width[i], this.player_height[i]);

        if (abs(jatekos.x - this.x[i]) > 1500) {
          this.lat[i] = false;
        }

        if (this.x[i] < 0 || this.x[i] > width) {
          this.lat[i] = false;
        }

        for (var j = 1; j <= ellenseg_gomba.x.length - 1; j++) {
          if (ellenseg_gomba.halott[j] == false && this.lat[i] == true) {
            if (abs(this.x[i] - ellenseg_gomba.x[j]) < 20 && abs(this.y[i] - ellenseg_gomba.y[j]) < 20) {
              this.lat[i] = false;
              ellenseg_gomba.halotti[j] = millis() - 1;
              ellenseg_gomba.halott[j] = true;

              pont_animacio.ai++;
              pont_animacio.x[pont_animacio.ai] = ellenseg_gomba.x[j];
              pont_animacio.y[pont_animacio.ai] = ellenseg_gomba.y[j];
              pont_animacio.ye[pont_animacio.ai] = ellenseg_gomba.y[j];
              pont_animacio.e[pont_animacio.ai] = 100;
              pont_animacio.l[pont_animacio.ai] = true;
              grafika.pont += pont_animacio.e[pont_animacio.ai];
              this.anim[i] = true;
              this.vx[i] = this.x[i];
              this.vy[i] = this.y[i];
              this.vm1[i] = 38 * 0.25;
              this.vm2[i] = 43 * 0.25;
              kilott_ellen_anim.i++;
              kilott_ellen_anim.xe[kilott_ellen_anim.i] = ellenseg_gomba.x[j];
              kilott_ellen_anim.ye[kilott_ellen_anim.i] = ellenseg_gomba.y[j];
              kilott_ellen_anim.l[kilott_ellen_anim.i] = true;
              kilott_ellen_anim.kg[kilott_ellen_anim.i] = "g";
              kilott_ellen_anim.t[kilott_ellen_anim.i] = 0;
            }
          }
        }

        for (var j = 1; j <= ellenseg_kacsa.x.length - 1; j++) {
          if (ellenseg_kacsa.kv[j] == false && this.lat[i] == true) {
            if (abs(this.x[i] - ellenseg_kacsa.x[j]) < 20 && abs(this.y[i] - ellenseg_kacsa.y[j]) < 20) {
              this.lat[i] = false;
              ellenseg_kacsa.kv = true;
              pont_animacio.ai++;
              pont_animacio.x[pont_animacio.ai] = ellenseg_kacsa.x[j];
              pont_animacio.y[pont_animacio.ai] = ellenseg_kacsa.y[j];
              pont_animacio.ye[pont_animacio.ai] = ellenseg_kacsa.y[j];
              pont_animacio.e[pont_animacio.ai] = 100;
              pont_animacio.l[pont_animacio.ai] = true;
              grafika.pont += pont_animacio.e[pont_animacio.ai];
              this.anim[i] = true;
              this.vx[i] = this.x[i];
              this.vy[i] = this.y[i];
              this.vm1[i] = 38 * 0.25;
              this.vm2[i] = 43 * 0.25;
              kilott_ellen_anim.i++;
              kilott_ellen_anim.xe[kilott_ellen_anim.i] = ellenseg_kacsa.x[j];
              kilott_ellen_anim.ye[kilott_ellen_anim.i] = ellenseg_kacsa.y[j];
              kilott_ellen_anim.l[kilott_ellen_anim.i] = true;
              kilott_ellen_anim.kg[kilott_ellen_anim.i] = "k";
              kilott_ellen_anim.t[kilott_ellen_anim.i] = 0;
            }
          }
        }


      } else {
        if (this.anim[i] == true) {
          image(this.sprites[2], this.vx[i], this.vy[i], this.vm1[i], this.vm2[i]);
          this.vm1[i] *= 1.2;
          this.vm2[i] *= 1.2;
          if (this.vm1[i] >= 38) {
            this.anim[i] = false;
          }
        }
      }
    }


  }
}
