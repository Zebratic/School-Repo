function Graphics() {

    this.cloud_1 = loadImage("assets/imgs/props/cloud_1.png");
    this.cloud_2 = loadImage("assets/imgs/props/cloud_2.png");
    this.cloud_3 = loadImage("assets/imgs/props/cloud_3.png");
    this.hill_1 = loadImage("assets/imgs/props/hill_1.png");
    this.hill_2 = loadImage("assets/imgs/props/hill_2.png");
    this.bush_1 = loadImage("assets/imgs/props/bush_1.png");
    this.bush_2 = loadImage("assets/imgs/props/bush_2.png");
    this.bush_3 = loadImage("assets/imgs/props/bush_3.png");
    this.money = loadImage("assets/imgs/items/money_1.png");

    this.point = 0;
    this.pontx = 80;
    this.coins = 0;
    this.coinsx = 270;
    this.world = "1-1"
    this.worldx = 450;
    this.time = 400;
    this.timex = 590
    this.millis = 0;

    this.kfx = [];
    this.kfy = [];
    this.kfwidth = [];
    this.kfheight = [];

    this.kozfx = [];
    this.kozfy = [];
    this.kozfwidth = [];
    this.kozfheight = [];

    this.nfx = [];
    this.nfy = [];
    this.nfwidth = [];
    this.nfheight = [];

    this.kdbx = [];
    this.kdby = [];
    this.kdbwidth = [];
    this.kdbheight = [];

    this.ndbx = [];
    this.ndby = [];
    this.ndbwidth = [];
    this.ndbheight = [];

    this.kbx = [];
    this.kby = [];
    this.kbwidth = [];
    this.kbheight = [];

    this.kozbx = [];
    this.kozby = [];
    this.kozbwidth = [];
    this.kozbheight = [];

    this.nbx = [];
    this.nby = [];
    this.nbwidth = [];
    this.nbheight = [];

    this.kfx[0] = 435;
    this.kfy[0] = 160;
    this.kfwidth[0] = 93;
    this.kfheight[0] = 70;

    this.kfx[1] = 928;
    this.kfy[1] = 120;
    this.kfwidth[1] = 93;
    this.kfheight[1] = 70;

    this.kfx[2] = 2552;
    this.kfy[2] = 160;
    this.kfwidth[2] = 93;
    this.kfheight[2] = 70;

    this.kfx[3] = 3045;
    this.kfy[3] = 100;
    this.kfwidth[3] = 93;
    this.kfheight[3] = 70;

    this.kfx[4] = 4698;
    this.kfy[4] = 140;
    this.kfwidth[4] = 93;
    this.kfheight[4] = 70;

    this.kfx[5] = 5191;
    this.kfy[5] = 100;
    this.kfwidth[5] = 93;
    this.kfheight[5] = 70;

    this.kfx[6] = 6815;
    this.kfy[6] = 160;
    this.kfwidth[6] = 93;
    this.kfheight[6] = 70;

    this.kfx[7] = 7308;
    this.kfy[7] = 100;
    this.kfwidth[7] = 93;
    this.kfheight[7] = 70;

    this.kfx[8] = 8961;
    this.kfy[8] = 160;
    this.kfwidth[8] = 93;
    this.kfheight[8] = 70;

    this.kozfx[0] = 1711;
    this.kozfy[0] = 120;
    this.kozfwidth[0] = 134;
    this.kozfheight[0] = 71;

    this.kozfx[1] = 3828;
    this.kozfy[1] = 100;
    this.kozfwidth[1] = 134;
    this.kozfheight[1] = 71;

    this.kozfx[2] = 5974;
    this.kozfy[2] = 100;
    this.kozfwidth[2] = 134;
    this.kozfheight[2] = 71;

    this.kozfx[3] = 8091;
    this.kozfy[3] = 120;
    this.kozfwidth[3] = 134;
    this.kozfheight[3] = 71;

    this.nfx[0] = 1334;
    this.nfy[0] = 160;
    this.nfwidth[0] = 178;
    this.nfheight[0] = 69;

    this.nfx[1] = 3451;
    this.nfy[1] = 160;
    this.nfwidth[1] = 178;
    this.nfheight[1] = 69;

    this.nfx[2] = 5597;
    this.nfy[2] = 140;
    this.nfwidth[2] = 178;
    this.nfheight[2] = 69;

    this.nfx[3] = 7714;
    this.nfy[3] = 160;
    this.nfwidth[3] = 178;
    this.nfheight[3] = 69;

    this.kdbx[0] = 783;
    this.kdby[0] = 527;
    this.kdbwidth[0] = 136;
    this.kdbheight[0] = 54;

    this.kdbx[1] = 2929;
    this.kdby[1] = 527;
    this.kdbwidth[1] = 136;
    this.kdbheight[1] = 54;

    this.kdbx[2] = 5046;
    this.kdby[2] = 527;
    this.kdbwidth[2] = 136;
    this.kdbheight[2] = 54;

    this.kdbx[3] = 7163;
    this.kdby[3] = 527;
    this.kdbwidth[3] = 136;
    this.kdbheight[3] = 54;

    this.kdbx[3] = 9319;
    this.kdby[3] = 527;
    this.kdbwidth[3] = 136;
    this.kdbheight[3] = 54;

    this.ndbx[0] = 116;
    this.ndby[0] = 504;
    this.ndbwidth[0] = 222;
    this.ndbheight[0] = 100;

    this.ndbx[1] = 4379;
    this.ndby[1] = 504;
    this.ndbwidth[1] = 222;
    this.ndbheight[1] = 100;

    this.ndbx[2] = 6496;
    this.ndby[2] = 504;
    this.ndbwidth[2] = 222;
    this.ndbheight[2] = 100;

    this.ndbx[3] = 8642;
    this.ndby[3] = 504;
    this.ndbwidth[3] = 222;
    this.ndbheight[3] = 100;

    this.ndbx[4] = 2262;
    this.ndby[4] = 531;
    this.ndbwidth[4] = 222;
    this.ndbheight[4] = 100;

    this.kbx[0] = 1102;
    this.kby[0] = 530;
    this.kbwidth[0] = 88;
    this.kbheight[0] = 45;

    this.kbx[1] = 3219;
    this.kby[1] = 530;
    this.kbwidth[1] = 88;
    this.kbheight[1] = 45;

    this.kbx[2] = 5365;
    this.kby[2] = 530;
    this.kbwidth[2] = 88;
    this.kbheight[2] = 45;

    this.kbx[3] = 7482;
    this.kby[3] = 530;
    this.kbwidth[3] = 88;
    this.kbheight[3] = 45;

    this.kozbx[0] = 1914;
    this.kozby[0] = 531;
    this.kozbwidth[0] = 133;
    this.kozbheight[0] = 46;

    this.kozbx[1] = 4031;
    this.kozby[1] = 531;
    this.kozbwidth[1] = 133;
    this.kozbheight[1] = 46;

    this.kozbx[2] = 6177;
    this.kozby[2] = 531;
    this.kozbwidth[2] = 133;
    this.kozbheight[2] = 46;

    this.nbx[0] = 609;
    this.nby[0] = 531;
    this.nbwidth[0] = 179;
    this.nbheight[0] = 46;

    this.nbx[1] = 2755;
    this.nby[1] = 531;
    this.nbwidth[1] = 179;
    this.nbheight[1] = 46;

    this.nbx[2] = 4872;
    this.nby[2] = 531;
    this.nbwidth[2] = 179;
    this.nbheight[2] = 46;



    this.render = function () {


        for (let i = 0; i <= this.kfx.length - 1; i++) {
            if (abs(this.kfx[i] - player.x) < 1200 && abs(this.kfy[i] - player.y) < 800) {
                image(this.cloud_1, this.kfx[i], this.kfy[i], this.kfwidth[i], this.kfheight[i]);
            }
        }

        for (let i = 0; i <= this.kozfx.length - 1; i++) {
            if (abs(this.kozfx[i] - player.x) < 1200 && abs(this.kozfy[i] - player.y) < 800) {
                image(this.cloud_2, this.kozfx[i], this.kozfy[i], this.kozfwidth[i], this.kozfheight[i]);
            }
        }

        for (let i = 0; i <= this.nfx.length - 1; i++) {
            if (abs(this.nfx[i] - player.x) < 1200 && abs(this.nfy[i] - player.y) < 800) {
                image(this.cloud_3, this.nfx[i], this.nfy[i], this.nfwidth[i], this.nfheight[i]);
            }
        }

        for (let i = 0; i <= this.kdbx.length - 1; i++) {
            if (abs(this.kdbx[i] - player.x) < 12000 && abs(this.kdby[i] - player.y) < 800) {
                image(this.hill_1, this.kdbx[i], this.kdby[i], this.kdbwidth[i], this.kdbheight[i]);
            }
        }

        for (let i = 0; i <= this.ndbx.length - 1; i++) {
            if (abs(this.ndbx[i] - player.x) < 1200 && abs(this.ndby[i] - player.y) < 800) {
                image(this.hill_2, this.ndbx[i], this.ndby[i], this.ndbwidth[i], this.ndbheight[i]);
            }
        }

        for (let i = 0; i <= this.kbx.length - 1; i++) {
            if (abs(this.kbx[i] - player.x) < 1200 && abs(this.kby[i] - player.y) < 800) {
                image(this.bush_1, this.kbx[i], this.kby[i], this.kbwidth[i], this.kbheight[i]);
            }
        }

        for (let i = 0; i <= this.kozbx.length - 1; i++) {
            if (abs(this.kozbx[i] - player.x) < 1200 && abs(this.kozby[i] - player.y) < 800) {
                image(this.bush_2, this.kozbx[i], this.kozby[i], this.kozbwidth[i], this.kozbheight[i]);
            }
        }

        for (let i = 0; i <= this.nbx.length - 1; i++) {
            if (abs(this.nbx[i] - player.x) < 1200 && abs(this.nby[i] - player.y) < 800) {
                image(this.bush_3, this.nbx[i], this.nby[i], this.nbwidth[i], this.nbheight[i]);
            }
        }

        textSize(36);
        fill(255);
        stroke(0);
        strokeWeight(2);

        text("MARIO", this.pontx - 20, 55);
        text(nf(this.point, 6, 0), this.pontx - 22, 80);

        image(this.money, this.coinsx, 68, 28, 37);
        text("x", this.coinsx + 11, 80);
        text(nf(this.coins, 2, 0), this.coinsx + 32, 80);

        text("WORLD", this.worldx - 20, 55);
        text(this.world, this.worldx, 80);

        text("TIME", this.timex - 20, 55);
        text(this.time, this.timex, 80);
        if (this.millis <= millis() && this.time > 0) {
            this.millis = this.millis + 1000;
            this.time -= 1;
        }
        if (this.time == 0) {
            // show game over with reason "time ran out"
        }
    }
}