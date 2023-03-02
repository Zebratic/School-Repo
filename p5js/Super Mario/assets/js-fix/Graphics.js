function Graphics() {

    this.p_kf = loadImage("assets/imgs/props/kf.png");
    this.p_kozf = loadImage("assets/imgs/props/kozf.png");
    this.p_nf = loadImage("assets/imgs/props/nf.png");
    this.p_kdb = loadImage("assets/imgs/props/kdb.png");
    this.p_ndb = loadImage("assets/imgs/props/ndb.png");
    this.p_kb = loadImage("assets/imgs/props/kb.png");
    this.p_kozb = loadImage("assets/imgs/props/kozb.png");
    this.p_nb = loadImage("assets/imgs/props/nb.png");
    this.penz = loadImage("assets/imgs/items/money_1.png");

    this.point = 0;
    this.pontx = 80;
    this.erem = 0;
    this.eremx = 270;
    this.vilag = "1-1"
    this.vilagx = 450;
    this.ido = 400;
    this.idox = 590
    this.millis = 0;

    this.kfx = [];
    this.kfy = [];
    this.kfm1 = [];
    this.kfm2 = [];

    this.kozfx = [];
    this.kozfy = [];
    this.kozfm1 = [];
    this.kozfm2 = [];

    this.nfx = [];
    this.nfy = [];
    this.nfm1 = [];
    this.nfm2 = [];

    this.kdbx = [];
    this.kdby = [];
    this.kdbm1 = [];
    this.kdbm2 = [];

    this.ndbx = [];
    this.ndby = [];
    this.ndbm1 = [];
    this.ndbm2 = [];

    this.kbx = [];
    this.kby = [];
    this.kbm1 = [];
    this.kbm2 = [];

    this.kozbx = [];
    this.kozby = [];
    this.kozbm1 = [];
    this.kozbm2 = [];

    this.nbx = [];
    this.nby = [];
    this.nbm1 = [];
    this.nbm2 = [];

    this.kfx[0] = 435;
    this.kfy[0] = 160;
    this.kfm1[0] = 93;
    this.kfm2[0] = 70;

    this.kfx[1] = 928;
    this.kfy[1] = 120;
    this.kfm1[1] = 93;
    this.kfm2[1] = 70;

    this.kfx[2] = 2552;
    this.kfy[2] = 160;
    this.kfm1[2] = 93;
    this.kfm2[2] = 70;

    this.kfx[3] = 3045;
    this.kfy[3] = 100;
    this.kfm1[3] = 93;
    this.kfm2[3] = 70;

    this.kfx[4] = 4698;
    this.kfy[4] = 140;
    this.kfm1[4] = 93;
    this.kfm2[4] = 70;

    this.kfx[5] = 5191;
    this.kfy[5] = 100;
    this.kfm1[5] = 93;
    this.kfm2[5] = 70;

    this.kfx[6] = 6815;
    this.kfy[6] = 160;
    this.kfm1[6] = 93;
    this.kfm2[6] = 70;

    this.kfx[7] = 7308;
    this.kfy[7] = 100;
    this.kfm1[7] = 93;
    this.kfm2[7] = 70;

    this.kfx[8] = 8961;
    this.kfy[8] = 160;
    this.kfm1[8] = 93;
    this.kfm2[8] = 70;

    this.kozfx[0] = 1711;
    this.kozfy[0] = 120;
    this.kozfm1[0] = 134;
    this.kozfm2[0] = 71;

    this.kozfx[1] = 3828;
    this.kozfy[1] = 100;
    this.kozfm1[1] = 134;
    this.kozfm2[1] = 71;

    this.kozfx[2] = 5974;
    this.kozfy[2] = 100;
    this.kozfm1[2] = 134;
    this.kozfm2[2] = 71;

    this.kozfx[3] = 8091;
    this.kozfy[3] = 120;
    this.kozfm1[3] = 134;
    this.kozfm2[3] = 71;

    this.nfx[0] = 1334;
    this.nfy[0] = 160;
    this.nfm1[0] = 178;
    this.nfm2[0] = 69;

    this.nfx[1] = 3451;
    this.nfy[1] = 160;
    this.nfm1[1] = 178;
    this.nfm2[1] = 69;

    this.nfx[2] = 5597;
    this.nfy[2] = 140;
    this.nfm1[2] = 178;
    this.nfm2[2] = 69;

    this.nfx[3] = 7714;
    this.nfy[3] = 160;
    this.nfm1[3] = 178;
    this.nfm2[3] = 69;

    this.kdbx[0] = 783;
    this.kdby[0] = 527;
    this.kdbm1[0] = 136;
    this.kdbm2[0] = 54;

    this.kdbx[1] = 2929;
    this.kdby[1] = 527;
    this.kdbm1[1] = 136;
    this.kdbm2[1] = 54;

    this.kdbx[2] = 5046;
    this.kdby[2] = 527;
    this.kdbm1[2] = 136;
    this.kdbm2[2] = 54;

    this.kdbx[3] = 7163;
    this.kdby[3] = 527;
    this.kdbm1[3] = 136;
    this.kdbm2[3] = 54;

    this.kdbx[3] = 9319;
    this.kdby[3] = 527;
    this.kdbm1[3] = 136;
    this.kdbm2[3] = 54;

    this.ndbx[0] = 116;
    this.ndby[0] = 504;
    this.ndbm1[0] = 222;
    this.ndbm2[0] = 100;

    this.ndbx[1] = 4379;
    this.ndby[1] = 504;
    this.ndbm1[1] = 222;
    this.ndbm2[1] = 100;

    this.ndbx[2] = 6496;
    this.ndby[2] = 504;
    this.ndbm1[2] = 222;
    this.ndbm2[2] = 100;

    this.ndbx[3] = 8642;
    this.ndby[3] = 504;
    this.ndbm1[3] = 222;
    this.ndbm2[3] = 100;

    this.ndbx[4] = 2262;
    this.ndby[4] = 531;
    this.ndbm1[4] = 222;
    this.ndbm2[4] = 100;

    this.kbx[0] = 1102;
    this.kby[0] = 530;
    this.kbm1[0] = 88;
    this.kbm2[0] = 45;

    this.kbx[1] = 3219;
    this.kby[1] = 530;
    this.kbm1[1] = 88;
    this.kbm2[1] = 45;

    this.kbx[2] = 5365;
    this.kby[2] = 530;
    this.kbm1[2] = 88;
    this.kbm2[2] = 45;

    this.kbx[3] = 7482;
    this.kby[3] = 530;
    this.kbm1[3] = 88;
    this.kbm2[3] = 45;

    this.kozbx[0] = 1914;
    this.kozby[0] = 531;
    this.kozbm1[0] = 133;
    this.kozbm2[0] = 46;

    this.kozbx[1] = 4031;
    this.kozby[1] = 531;
    this.kozbm1[1] = 133;
    this.kozbm2[1] = 46;

    this.kozbx[2] = 6177;
    this.kozby[2] = 531;
    this.kozbm1[2] = 133;
    this.kozbm2[2] = 46;

    this.nbx[0] = 609;
    this.nby[0] = 531;
    this.nbm1[0] = 179;
    this.nbm2[0] = 46;

    this.nbx[1] = 2755;
    this.nby[1] = 531;
    this.nbm1[1] = 179;
    this.nbm2[1] = 46;

    this.nbx[2] = 4872;
    this.nby[2] = 531;
    this.nbm1[2] = 179;
    this.nbm2[2] = 46;



    this.render = function () {


        for (let i = 0; i <= this.kfx.length - 1; i++) {
            if (abs(this.kfx[i] - player.x) < 1200 && abs(this.kfy[i] - player.y) < 800) {
                image(this.p_kf, this.kfx[i], this.kfy[i], this.kfm1[i], this.kfm2[i]);
            }
        }

        for (let i = 0; i <= this.kozfx.length - 1; i++) {
            if (abs(this.kozfx[i] - player.x) < 1200 && abs(this.kozfy[i] - player.y) < 800) {
                image(this.p_kozf, this.kozfx[i], this.kozfy[i], this.kozfm1[i], this.kozfm2[i]);
            }
        }

        for (let i = 0; i <= this.nfx.length - 1; i++) {
            if (abs(this.nfx[i] - player.x) < 1200 && abs(this.nfy[i] - player.y) < 800) {
                image(this.p_nf, this.nfx[i], this.nfy[i], this.nfm1[i], this.nfm2[i]);
            }
        }

        for (let i = 0; i <= this.kdbx.length - 1; i++) {
            if (abs(this.kdbx[i] - player.x) < 12000 && abs(this.kdby[i] - player.y) < 800) {
                image(this.p_kdb, this.kdbx[i], this.kdby[i], this.kdbm1[i], this.kdbm2[i]);
            }
        }

        for (let i = 0; i <= this.ndbx.length - 1; i++) {
            if (abs(this.ndbx[i] - player.x) < 1200 && abs(this.ndby[i] - player.y) < 800) {
                image(this.p_ndb, this.ndbx[i], this.ndby[i], this.ndbm1[i], this.ndbm2[i]);
            }
        }

        for (let i = 0; i <= this.kbx.length - 1; i++) {
            if (abs(this.kbx[i] - player.x) < 1200 && abs(this.kby[i] - player.y) < 800) {
                image(this.p_kb, this.kbx[i], this.kby[i], this.kbm1[i], this.kbm2[i]);
            }
        }

        for (let i = 0; i <= this.kozbx.length - 1; i++) {
            if (abs(this.kozbx[i] - player.x) < 1200 && abs(this.kozby[i] - player.y) < 800) {
                image(this.p_kozb, this.kozbx[i], this.kozby[i], this.kozbm1[i], this.kozbm2[i]);
            }
        }

        for (let i = 0; i <= this.nbx.length - 1; i++) {
            if (abs(this.nbx[i] - player.x) < 1200 && abs(this.nby[i] - player.y) < 800) {
                image(this.p_nb, this.nbx[i], this.nby[i], this.nbm1[i], this.nbm2[i]);
            }
        }

        textSize(36);
        fill(255);

        text("MARIO", this.pontx - 20, 55);
        text(nf(this.point, 6, 0), this.pontx - 22, 80);

        image(this.penz, this.eremx, 68, 28, 37);
        text("x", this.eremx + 11, 80);
        text(nf(this.erem, 2, 0), this.eremx + 32, 80);

        text("WORLD", this.vilagx - 20, 55);
        text(this.vilag, this.vilagx, 80);

        text("TIME", this.idox - 20, 55);
        text(this.ido, this.idox, 80);
        if (this.millis <= millis() && this.ido > 0) {
            this.millis = this.millis + 500;
            this.ido -= 1;
        }

    }


}