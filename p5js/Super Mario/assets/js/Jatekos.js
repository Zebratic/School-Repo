function Jatekos() {


  this.x = 150;
  this.y = 269;
  this.m1 = 30;
  this.m2 = 41;

  this.balra = false;
  this.jobbra = false;
  this.guggolas = false;
  this.ugras = false;
  this.lmugras = 90;
  this.talaj = 0;
  this.fut = false;
  
  this.em = height;
  this.zuhanas = false;

  this.msebesseg = 3;
  this.zsebesseg = 6;
  this.usebesseg = 30;
  this.ugrasi = 0;
  this.gomba_ = 0;
  this.ge = true;
  this.halal = false;
  this.hx = 0;
  this.hy = 0;
  this.ax = 0;
  this.ay = 0;
  this.ht = 0;
  this.halhatatlan = false;
  this.villog = false;
  this.vi = 0;
  this.millish_ = 0;

  this.kep = [];
  this.kep[0] = loadImage("assets/imgs/mario/mario_0.png");
  this.kep[1] = loadImage("assets/imgs/mario/mario_1.png");
  this.kep[2] = loadImage("assets/imgs/mario/mario_2.png");
  this.kep[3] = loadImage("assets/imgs/mario/mario_3.png");
  this.kep[4] = loadImage("assets/imgs/mario/mario_4.png");
  this.kep[5] = loadImage("assets/imgs/mario/mario_5.png");
  this.kep[6] = loadImage("assets/imgs/mario/fire_mario_0.png");
  this.kep[7] = loadImage("assets/imgs/mario/fire_mario_1.png");
  this.kep[8] = loadImage("assets/imgs/mario/fire_mario_2.png");
  this.kep[9] = loadImage("assets/imgs/mario/fire_mario_3.png");
  this.kep[10] = loadImage("assets/imgs/mario/fire_mario_4.png");
  this.kep[11] = loadImage("assets/imgs/mario/fire_mario_5.png");
  this.kep[12] = loadImage("assets/imgs/mario/fire_mario_6.png");
  this.kep[13] = loadImage("assets/imgs/mario/mario_reversed_0.png");
  this.kep[14] = loadImage("assets/imgs/mario/mario_reversed_1.png");
  this.kep[15] = loadImage("assets/imgs/mario/mario_reversed_2.png");
  this.kep[16] = loadImage("assets/imgs/mario/mario_reversed_3.png");
  this.kep[17] = loadImage("assets/imgs/mario/mario_reversed_3.png");
  this.kep[18] = loadImage("assets/imgs/mario/mario_reversed_5.png");
  this.kep[19] = loadImage("assets/imgs/mario/fire_mario_reversed_0.png");
  this.kep[20] = loadImage("assets/imgs/mario/fire_mario_reversed_1.png");
  this.kep[21] = loadImage("assets/imgs/mario/fire_mario_reversed_2.png");
  this.kep[22] = loadImage("assets/imgs/mario/fire_mario_reversed_3.png");
  this.kep[23] = loadImage("assets/imgs/mario/fire_mario_reversed_4.png");
  this.kep[24] = loadImage("assets/imgs/mario/fire_mario_reversed_5.png");
  this.kep[25] = loadImage("assets/imgs/mario/fire_mario_reversed_6.png");
  this.kep[26] = loadImage("assets/imgs/mario/mario_dead.png");

  this.millis_ = 0;
  this.je = false;
  this.ji = 0;

  this.sebesseg_v2 = 3;

  this.megjelenites = function() {

    if (jatekos.y > height) {
      //this.halal = true;
    }

    if (palya_vege.jv == false || palya_vege.av == true) {
      if (this.balra == true && talaj_fal.tiltasb == false ) {
        if (this.guggolas == false || this.gomba_ == 0 || this.zuhanas == true) {
          this.x -= this.msebesseg;
          this.x -= 5;
        }
      }

      if (this.jobbra == true && talaj_fal.tiltasj == false) {
        if (this.guggolas == false || this.gomba_ == 0 || this.zuhanas == true) {
          this.x += this.msebesseg;
        }
      }

      if (jatekos.guggolas == true) {
        if (this.gomba_ > 0 && this.ugras == false && this.zuhanas == false) {
          this.m1 = 39;
          this.m2 = 55;
        }
      } else {
        if (talaj_fal.felallase == true) {
          if (this.gomba_ == 0) {
            this.m1 = 30;
            this.m2 = 41;
          }
          if (this.gomba_ > 0 || virag.felvett_virag == true) {
            this.m1 = 41;
            this.m2 = 75;
          }
        }
      }


      if (this.ugras == true) {
        this.ugrasi += this.usebesseg;
        this.msebesseg = 6
        this.y -= map(this.ugrasi, 1, this.lmugras, 20, 6);

        if (this.ugrasi >= this.lmugras) {
          this.ugras = false;
          this.ugrasi = 0;
          this.msebesseg = 0;
        }
      }

      if (this.ugras == false) {
        this.lmugras = 890;
      }

      if (this.y + this.zsebesseg + jatekos.m2 / 2 <= this.em) {
        this.y += this.zsebesseg
        this.zuhanas = true;
        this.msebesseg = 0;
      }

      if (this.em - this.y - this.m2 / 2 <= this.zsebesseg) {
        if (this.ugras == false) {
          this.y = this.em - this.m2 / 2
          this.zuhanas = false;
        }
      }
      if (jatekos.balra == true || jatekos.jobbra == true) {
        if (this.millis_ <= millis()) {
          this.millis_ = millis() + 70;
          this.ji--;
          if (this.ji <= 0) {
            this.ji = 3;
          }
        }
      }

      if (this.guggolas == true && this.ugras == false && (this.gomba_ > 0 || virag.felvett_virag == true)) {
        this.ji = 5;
      }

      if (this.ugras == true || this.zuhanas == true) {
        this.ji = 4;
      }

      if (key == "" && this.zuhanas == false && this.balra == false && this.jobbra == false && this.guggolas == false) {
        this.ji = 0;
      }
    }
    if (virag.felvett_virag == true) {
      this.ji += 6;

    }

    if (loves.e == true && virag.felvett_virag == true && this.guggolas == false) {
      this.ji = 12;
    }


    if (this.villog == false && this.halal == false) {
      if (loves.i == "j") {
        switch (this.ji) {
          case 0:
            image(this.kep[0], this.x, this.y, this.m1, this.m2);
            break;
          case 1:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 33;
              this.m2 = 40;
            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 39;
              this.m2 = 75;
            }
            image(this.kep[1], this.x, this.y, this.m1, this.m2);
            break;
          case 2:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 28;
              this.m2 = 40;

            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 34;
              this.m2 = 75;
            }
            image(this.kep[2], this.x, this.y, this.m1, this.m2);
            break;
          case 3:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 33;
              this.m2 = 40;
            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 39;
              this.m2 = 75;
            }
            image(this.kep[3], this.x, this.y, this.m1, this.m2);
            break;
          case 4:
            image(this.kep[4], this.x, this.y, this.m1, this.m2);
            break;
          case 5:
            this.m1 = 39;
            this.m2 = 55;
            image(this.kep[5], this.x, this.y, this.m1, this.m2);
            break;
          case 6:
            image(this.kep[6], this.x, this.y, this.m1, this.m2);
            break;
          case 7:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 33;
              this.m2 = 40;
            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 39;
              this.m2 = 75;
            }
            image(this.kep[7], this.x, this.y, this.m1, this.m2);
            break;
          case 8:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 28;
              this.m2 = 40;

            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 34;
              this.m2 = 75;
            }
            image(this.kep[8], this.x, this.y, this.m1, this.m2);
            break;
          case 9:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 33;
              this.m2 = 40;
            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 39;
              this.m2 = 75;
            }
            image(this.kep[9], this.x, this.y, this.m1, this.m2);
            break;
          case 10:
            image(this.kep[10], this.x, this.y, this.m1, this.m2);
            break;
          case 11:
            this.m1 = 39;
            this.m2 = 55;
            image(this.kep[11], this.x, this.y, this.m1, this.m2);
            break;
          case 12:
            this.m1 = 39;
            this.m2 = 75;
            image(this.kep[12], this.x, this.y, this.m1, this.m2);
            break;
          default:

            break;
        }
      } else {
        switch (this.ji) {
          case 0:
            image(this.kep[13], this.x, this.y, this.m1, this.m2);
            break;
          case 1:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 33;
              this.m2 = 40;
            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 39;
              this.m2 = 75;
            }
            image(this.kep[14], this.x, this.y, this.m1, this.m2);
            break;
          case 2:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 28;
              this.m2 = 40;

            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 34;
              this.m2 = 75;
            }
            image(this.kep[15], this.x, this.y, this.m1, this.m2);
            break;
          case 3:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 33;
              this.m2 = 40;
            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 39;
              this.m2 = 75;
            }
            image(this.kep[16], this.x, this.y, this.m1, this.m2);
            break;
          case 4:
            image(this.kep[17], this.x, this.y, this.m1, this.m2);
            break;
          case 5:
            this.m1 = 39;
            this.m2 = 55;
            image(this.kep[18], this.x, this.y, this.m1, this.m2);
            break;
          case 6:
            image(this.kep[19], this.x, this.y, this.m1, this.m2);
            break;
          case 7:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 33;
              this.m2 = 40;
            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 39;
              this.m2 = 75;
            }
            image(this.kep[20], this.x, this.y, this.m1, this.m2);
            break;
          case 8:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 28;
              this.m2 = 40;

            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 34;
              this.m2 = 75;
            }
            image(this.kep[21], this.x, this.y, this.m1, this.m2);
            break;
          case 9:
            if (this.gomba_ == 0 || virag.felvett_virag == false) {
              this.m1 = 33;
              this.m2 = 40;
            }
            if (this.gomba_ > 0 || virag.felvett_virag == true) {
              this.m1 = 39;
              this.m2 = 75;
            }
            image(this.kep[22], this.x, this.y, this.m1, this.m2);
            break;
          case 10:
            image(this.kep[23], this.x, this.y, this.m1, this.m2);
            break;
          case 11:
            this.m1 = 39;
            this.m2 = 55;
            image(this.kep[24], this.x, this.y, this.m1, this.m2);
            break;
          case 12:
            this.m1 = 39;
            this.m2 = 75;
            image(this.kep[25], this.x, this.y, this.m1, this.m2);
            break;
        }
      }

      if (virag.felvett_virag == true) {
        this.ji -= 6;
      }

    }


    for (var j = 1; j <= ellenseg_gomba.x.length - 1; j++) {
      if (ellenseg_gomba.halott[j] == false && this.halhatatlan == false && this.halal == false) {
        if (abs(this.x - ellenseg_gomba.x[j]) < 20 && abs(this.y - ellenseg_gomba.y[j]) < 20) {
          if (this.gomba_ == 0 && virag.felvett_virag == false) {
            this.halal = true;
            this.hx = this.x;
            this.hy = this.y;
            this.ht = 0;
          } else {
            this.gomba_ = 0;
            virag.felvett_virag = false;
            this.halhatatlan = true;
            this.vi = 0;
          }
        }
      }
    }


    for (var j = 1; j <= ellenseg_kacsa.x.length - 1; j++) {
      if (ellenseg_kacsa.kv[j] == false && this.halhatatlan == false && this.halal == false) {
        if (abs(this.x - ellenseg_kacsa.x[j]) < 20 && abs(this.y - ellenseg_kacsa.y[j]) < 20) {
          if (this.gomba_ == 0 && virag.felvett_virag == false) {
            this.halal = true;
            this.hx = this.x;
            this.hy = this.y;
          } else {
            this.gomba_ = 0;
            virag.felvett_virag = false;
            this.halhatatlan = true;
            this.vi = 0;
          }
        }
      }
    }

    if (this.halhatatlan == true) {
      if (this.millish_ < millis()) {
        this.millish_ = millis() + 100;
        this.vi++;
        if (this.villog == false) {
          this.villog = true;
        } else {
          this.villog = false;
        }
      }

      if (this.vi >= 30) {
        this.villog = false
        this.halhatatlan = false;
      }

    }

    this.meghal = function() {

      if (this.halal == true && this.halhatatlan == false) {
        this.ht += 0.2
        this.ax = this.hx + 40 * this.ht * cos(-90);
        this.ay = this.hy + 40 * this.ht * sin(-90) + 9.81 / 2 * sq(this.ht);
        image(this.kep[26], this.ax, this.ay, 35, 37);

      }
    }

  }
}