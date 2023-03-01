function Palya_vege() {

  this.rx = 8828;
  this.ry = 343;
  this.zx = 8803;
  this.zy = 175;
  this.vx = 9182
  this.vy = 452.5
  this.kep = [];
  this.kep[0] = loadImage("assets/imgs/props/var.png");
  this.kep[1] = loadImage("assets/imgs/props/zaszlo.png");
  this.kep[2] = loadImage("assets/imgs/props/rud.png");
  this.jv = false;
  this.millis_ = 0;
  this.av = false;
  this.zi = false;
  this.mt = false

  this.megjelenites = function() {
    image(this.kep[0], this.vx, this.vy, 196, 200);
    image(this.kep[1], this.zx, this.zy, 40, 39);
    image(this.kep[2], this.rx, this.ry, 39, 420);
    
    if (abs(jatekos.x - this.rx) < 10 && this.jv == false && this.av == false) {
      this.jv = true;
      this.millis_ = millis() + 100;
      this.mt = true;
      jatekos.jobbra = false;
      pont_animacio.ai++;
      pont_animacio.x[pont_animacio.ai] = jatekos.x + 20;
      pont_animacio.y[pont_animacio.ai] = jatekos.y;
      pont_animacio.ye[pont_animacio.ai] = jatekos.y;

      if (jatekos.y < 204) {
        pont_animacio.e[pont_animacio.ai] = 5000;
      }

      if (jatekos.y < 264 && jatekos.y > 204) {
        pont_animacio.e[pont_animacio.ai] = 2000;
      }

      if (jatekos.y < 324 && jatekos.y > 264) {
        pont_animacio.e[pont_animacio.ai] = 1000;
      }

      if (jatekos.y < 384 && jatekos.y > 324) {
        pont_animacio.e[pont_animacio.ai] = 500;
      }

      if (jatekos.y > 444) {
        pont_animacio.e[pont_animacio.ai] = 100;
      }
      if (jatekos.y < 444 && jatekos.y > 384) {
        pont_animacio.e[pont_animacio.ai] = 200;
      }

      pont_animacio.l[pont_animacio.ai] = true;
      grafika.pont += pont_animacio.e[pont_animacio.ai];
    }

    if (this.jv == true && this.millis_ < millis()) {
      if (jatekos.y <= 460) {
        this.zi = true;
        jatekos.y += 2;
      } else {
        this.jv = false
        this.av = true;
      }
    }

    if (this.av == true) {
      if (abs(this.vx -jatekos.x) > 5) {
        jatekos.jobbra = true;
      } else {
        jatekos.jobbra = false;

      }
    }

    if (this.zi == true) {
      if (this.zy < 481) {
        this.zy += 2;
      }
    }

  }
}