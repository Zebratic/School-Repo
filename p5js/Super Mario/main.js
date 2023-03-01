var jatekos;
var talaj_fal;
var grafika;
var money
var gomba;
var loves;
var pont_animacio;
var kilott_ellen_anim;
var mozgasv;

function setup() {
  createCanvas(705, 607.5);
  jatekos = new Jatekos();
  talaj_fal = new Talaj_fal();
  grafika = new Grafika();
  penz = new Penz();
  gomba = new Gomba();
  virag = new Virag();
  ellenseg_gomba = new Ellenseg_gomba();
  ellenseg_kacsa = new Ellenseg_kacsa();
  loves = new Loves();
  pont_animacio = new Pont_animacio();
  kilott_ellen_anim = new Kilott_ellen_anim();
  palya_vege = new Palya_vege();
  mozgasv = new Mozgasv();

  loves.i = "j";
  textFont('monospace')
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);

  mozgasv.funkcio();

  for (let j = 0; j <= 2700 - 1; j++) {

    // palya_vege.rx -= jatekos.sebesseg_v2;
    //  palya_vege.zx -= jatekos.sebesseg_v2;
    //  palya_vege.vx -= jatekos.sebesseg_v2;

    for (let i = 0; i <= talaj_fal.x.length - 1; i++) {
      if (i >= 0 && i <= 230 || i >= 1000 && i <= 1012 || i >= 1050 && i <= 1081 || i >= 1100 && i <= 1198 || i >= 1300 && i <= 1302 || i >= 1350 && i <= 1350 || i >= 1400 && i <= 1401) {
        //   talaj_fal.x[i] -= jatekos.sebesseg_v2;
      }
    }
  }

}

function draw() {
  background(92, 136, 252);
  grafika.kfmegjelenites();
  palya_vege.megjelenites();

  if (jatekos.gomba_ == 0) {
    gomba.megjelenites();
  }

  if (jatekos.gomba_ > 0 || virag.lathato == true) {
    virag.megjelenites();
  }

  if (virag.felvett_virag == true) {
    loves.megjelenites();
  }

  if (jatekos.halal == false && palya_vege.vx - jatekos.x > 5) {
    jatekos.megjelenites();
  }

  talaj_fal.megjelenites();
  penz.megjelenites();
  ellenseg_gomba.megjelenites();
  ellenseg_kacsa.megjelenites();
  pont_animacio.megjelenites();
  kilott_ellen_anim.megjelenites();
  jatekos.meghal();

  mozgasv.funkcio();
    
}

function keyPressed() {

  if (palya_vege.mt == false) {
    if ((key == "a" || key == "A" || keyCode == "37") && jatekos.guggolas == false) {
      jatekos.balra = true;
      loves.i = "b";
    }

    if ((key == "d" || key == "D" || keyCode == "39") && jatekos.guggolas == false) {
      jatekos.jobbra = true;
      loves.i = "j";
    }

    if (key == "s" || key == "S" || keyCode == "40") {
      jatekos.guggolas = true;
    }

    if (key == "w" || key == "W" || keyCode == "38") {
      if (jatekos.zuhanas == false) {
        jatekos.ugras = true;
      }
    }

    if (key == "f" || key == "F") {
      loves.e = true;
    }

    if (key == "Shift") {
      jatekos.fut = true;
    }

  }
}

function keyReleased() {

  if (key == "a" || key == "A" || keyCode == "37") {
    jatekos.balra = false;
  }

  if (key == "d" || key == "D" || keyCode == "39") {
    jatekos.jobbra = false;
  }

  if (key == "s" || key == "S" || keyCode == "40") {
    jatekos.guggolas = false;
  }

  if (key == "f" || key == "F") {
    loves.e = false;
  }
  if (key == "Shift") {
    jatekos.fut = false;
  }

  key = "";

}

function mousePressed() {
  jatekos.x = mouseX;
  jatekos.y = mouseY;
  print(mouseX);
  print(mouseY);
}