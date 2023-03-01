function Pont_animacio() {

  this.x = [];
  this.y = [];
  this.ye = [];
  this.e = [];
  this.l = [];

  this.ai = 0;

  this.megjelenites = function() {

    for (var i = 0; i <= this.ai; i++) {
      if (this.l[i] == true) {
        if (this.y[i] >= this.ye[i] - 90) {
          fill(255);
          textSize(25);

          if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
            this.x[i] -= jatekos.sebesseg_v2;
          }

          text(this.e[i], this.x[i], this.y[i]);
          this.y[i] -= 2;
        } else {
          this.l[i] = false;
        }
      }
    }

  }
}