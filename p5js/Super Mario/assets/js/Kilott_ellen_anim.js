function Kilott_ellen_anim() {

  this.x = [];
  this.y = [];
  this.xe = [];
  this.ye = [];
  this.l = [];
  this.sz = [];
  this.kg = [];
  this.t = [];
  this.kep = [];
  this.i = 0;

  this.l[1] = false;
  this.l[2] = false;
  this.l[3] = false;
  this.l[4] = false;
  this.l[5] = false;
  this.l[6] = false;

  this.kep[0] = loadImage("assets/imgs/enemies/ellenseg_1_bal.png");
  this.kep[1] = loadImage("assets/imgs/enemies/kacsa_teknos_3.png");
  this.megjelenites = function() {

    for (var i = 1; i <= 6; i++) {
      if (this.l[i] == true) {
        this.t[i] += 0.2;

        if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
          this.xe[i] -= jatekos.sebesseg_v2;
        }

        this.x[i] = this.xe[i] + 30 * this.t[i] * cos(this.sz[i]);
        this.y[i] = this.ye[i] + 30 * this.t[i] * sin(this.sz[i]) + 9.81 / 2 * sq(this.t[i]);
        translate(this.x[i], this.y[i]);
        rotate(180);
        if (this.kg[i] == "g") {
          image(this.kep[0], 0, 0, 40, 39);
        } else {
          image(this.kep[1], 0, 0, 39, 34);
        }
        rotate(-180);
        translate(-this.x[i], -this.y[i]);
      }
    }
  }
}