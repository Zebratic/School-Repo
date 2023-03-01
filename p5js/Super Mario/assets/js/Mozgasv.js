function Mozgasv() {

  this.e = false;
  this.t = 400;
  this.funkcio = function() {


    this.e = false

    if (jatekos.x >= 300) {
      jatekos.sebesseg_v2 = 4;
      jatekos.msebesseg = 0;
    } else {
      jatekos.sebesseg_v2 = 0;
      if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
        jatekos.msebesseg = 4;
      }
      if (jatekos.x < jatekos.m1 / 2) {
        talaj_fal.tiltasb = true;
      }
      if (jatekos.balra == true && talaj_fal.tiltasb == false) {
        jatekos.msebesseg = 0;
      }
    }

    for (let i = 0; i <= talaj_fal.x.length - 1; i++) {
      if (i >= 0 && i <= 230 || i >= 1000 && i <= 1012 || i >= 1050 && i <= 1081 || i >= 1100 && i <= 1198 || i >= 1300 && i <= 1302 || i >= 1350 && i <= 1350 || i >= 1400 && i <= 1401) {
        if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
          talaj_fal.x[i] -= jatekos.sebesseg_v2;
        }
      }
    }

    if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
      for (let i = 0; i <= grafika.kfx.length - 1; i++) {
        grafika.kfx[i] -= jatekos.sebesseg_v2;
      }

      for (let i = 0; i <= grafika.kozfx.length - 1; i++) {
        grafika.kozfx[i] -= jatekos.sebesseg_v2;
      }

      for (let i = 0; i <= grafika.nfx.length - 1; i++) {
        grafika.nfx[i] -= jatekos.sebesseg_v2;
      }

      for (let i = 0; i <= grafika.kdbx.length - 1; i++) {
        grafika.kdbx[i] -= jatekos.sebesseg_v2;
      }

      for (let i = 0; i <= grafika.ndbx.length - 1; i++) {
        grafika.ndbx[i] -= jatekos.sebesseg_v2;
      }

      for (let i = 0; i <= grafika.kbx.length - 1; i++) {
        grafika.kbx[i] -= jatekos.sebesseg_v2;
      }

      for (let i = 0; i <= grafika.kozbx.length - 1; i++) {
        grafika.kozbx[i] -= jatekos.sebesseg_v2;
      }

      for (let i = 0; i <= grafika.nbx.length - 1; i++) {
        grafika.nbx[i] -= jatekos.sebesseg_v2;
      }
    }

    if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
      talaj_fal.sebesseg_v2 = -jatekos.sebesseg_v2
    } else {
      talaj_fal.sebesseg_v2 = 0;
    }

    if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
      if (gomba.balra == true && gomba.tiltasb == false) {
        gomba.sebesseg_v2 = jatekos.sebesseg_v2 + 3;
      }
      if (gomba.jobbra == true && gomba.tiltasj == false) {
        gomba.sebesseg_v2 = (jatekos.sebesseg_v2 - 3) * -1;
      }

      if (gomba.animation == true) {
        gomba.x -= jatekos.sebesseg_v2;
      }

    } else {
      gomba.sebesseg_v2 = 3;
    }

    if (jatekos.jobbra == true && talaj_fal.tiltasj == false) {
      if (penz.lathato == true) {
        penz.sebesseg_v2 = jatekos.sebesseg_v2;
      }
    } else {
      penz.sebesseg_v2 = 0;
    }

    if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
      if (virag.lathato == true || virag.animation == true) {
        virag.sebesseg_v2 = jatekos.sebesseg_v2;
      }
    } else {
      virag.sebesseg_v2 = 0;
    }

    if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {
      palya_vege.rx -= jatekos.sebesseg_v2;
      palya_vege.zx -= jatekos.sebesseg_v2;
      palya_vege.vx -= jatekos.sebesseg_v2;
    }

    for (var i = 1; i <= ellenseg_gomba.x.length - 1; i++) {
      if (jatekos.jobbra == true && talaj_fal.tiltasj == false && ellenseg_gomba.indul[i] == false && jatekos.halal == false) {
        ellenseg_gomba.x[i] -= jatekos.sebesseg_v2;
        ellenseg_gomba.sebesseg_v2[i] = 0;

        if (abs(jatekos.x - ellenseg_gomba.x[1]) < 470) {
          ellenseg_gomba.indul[1] = true;
        }

        if (abs(jatekos.x - ellenseg_gomba.x[2]) < 470) {
          ellenseg_gomba.indul[2] = true;
        }

        if (abs(jatekos.x - ellenseg_gomba.x[3]) < 470) {
          ellenseg_gomba.indul[3] = true;
          ellenseg_gomba.indul[4] = true;
        }

        if (abs(jatekos.x - ellenseg_gomba.x[5]) < 470) {
          ellenseg_gomba.indul[5] = true;
          ellenseg_gomba.indul[6] = true;
        }

        if (abs(jatekos.x - ellenseg_gomba.x[7]) < 470) {
          ellenseg_gomba.indul[7] = true;
          ellenseg_gomba.indul[8] = true;
        }

        if (abs(jatekos.x - ellenseg_gomba.x[9]) < 470) {
          ellenseg_gomba.indul[9] = true;
          ellenseg_gomba.indul[10] = true;
        }

        if (abs(jatekos.x - ellenseg_gomba.x[11]) < 470) {
          ellenseg_gomba.indul[11] = true;
          ellenseg_gomba.indul[12] = true;
        }

        if (abs(jatekos.x - ellenseg_gomba.x[13]) < 470) {
          ellenseg_gomba.indul[13] = true;
          ellenseg_gomba.indul[14] = true;
        }

        if (abs(jatekos.x - ellenseg_gomba.x[15]) < 470) {
          ellenseg_gomba.indul[15] = true;
          ellenseg_gomba.indul[16] = true;
        }

      } else {
        if (ellenseg_gomba.x[i] > -400) {

          if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {

            if (ellenseg_gomba.balra[i] == true && ellenseg_gomba.tiltasb[i] == false && ellenseg_gomba.halott[i] == false) {
              ellenseg_gomba.sebesseg_v2[i] = jatekos.sebesseg_v2 + 2;
            }
            if (ellenseg_gomba.jobbra[i] == true && ellenseg_gomba.tiltasj[i] == false && ellenseg_gomba.halott[i] == false) {
              ellenseg_gomba.sebesseg_v2[i] = (jatekos.sebesseg_v2 - 2) * -1;
            }
          } else {
            ellenseg_gomba.sebesseg_v2[i] = 2;
          }
        } else {
          ellenseg_gomba.halott[i] = true;
          ellenseg_gomba.halotti[i] = millis() - 1;

        }
      }
    }

    for (var i = 1; i <= ellenseg_kacsa.x.length - 1; i++) {
      if (jatekos.jobbra == true && talaj_fal.tiltasj == false && ellenseg_kacsa.indul[i] == false && jatekos.halal == false) {
        ellenseg_kacsa.x[i] -= jatekos.sebesseg_v2;
        ellenseg_kacsa.sebesseg_v2[i] = 0;

        if (abs(jatekos.x - ellenseg_kacsa.x[1]) < 470) {
          ellenseg_kacsa.indul[1] = true;
        }

      } else {
        if (ellenseg_kacsa.x[i] > -400) {

          if (jatekos.jobbra == true && talaj_fal.tiltasj == false && jatekos.halal == false) {

            if (ellenseg_kacsa.vhmi[i] == "s") {
              ellenseg_kacsa.sebesseg_v2[1] = 2;

              if (ellenseg_kacsa.balra[i] == true && ellenseg_kacsa.tiltasb[i] == false) {
                ellenseg_kacsa.sebesseg_v2[i] = jatekos.sebesseg_v2 + 2;
              }
              if (ellenseg_kacsa.jobbra[i] == true && ellenseg_kacsa.tiltasj[i] == false) {
                ellenseg_kacsa.sebesseg_v2[i] = (jatekos.sebesseg_v2 - 2) * -1;
              }
            } else {
              if (ellenseg_kacsa.vhmi[i] == "b") {
                ellenseg_kacsa.sebesseg_v2[i] = -4;
              }
              if (ellenseg_kacsa.vhmi[i] == "j") {
                ellenseg_kacsa.sebesseg_v2[i] = -4;
              }
            }

          } else {
            if (ellenseg_kacsa.vhmi[i] == "b" || ellenseg_kacsa.vhmi[i] == "j") {
              ellenseg_kacsa.sebesseg_v2[i] = 0;
            }
            if (ellenseg_kacsa.vhmi[i] == "s") {
              ellenseg_kacsa.sebesseg_v2[1] = 2;
            }
          }
        } else {
          ellenseg_kacsa.halott[i] = true;
          ellenseg_kacsa.halotti[i] = millis() - 1;

        }
      }
    }



  }
}
