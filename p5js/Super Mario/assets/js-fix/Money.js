function Money() {

    this.x = 1061;
    this.y = 360;
    this.m1e = 28;
    this.m2e = 35;
    this.player_width = 28;
    this.player_height = 35;
    this.sprites = [];
    this.forgas = 1;
    this.zuhan = false;
    this.lathato = false;
    this.yelvartmin = 0;
    this.yelvartmax = 0;
    this.sprites[1] = loadImage("assets/imgs/items/money_1.png");
    this.sprites[2] = loadImage("assets/imgs/items/money_2.png");
    this.sprites[3] = loadImage("assets/imgs/items/money_3.png");

    this.sprites[0] = this.sprites[1];
    this.pl = false;
    this.px = 0;
    this.py = 0;

    this.speed_v2 = 0;

    this.update = function () {

        if (maploader.kerd == 1000 || maploader.kerd == 1001 || maploader.kerd == 1007 || maploader.kerd == 1009) {
            if (maploader.kerdi[maploader.kerd] == 1) {
                graphics.point += 200;
                graphics.erem += 1;
                this.lathato = true;
                this.zuhan = false;
            }
            maploader.kerd = 0;
        }

        if (maploader.kerd == 1002 || maploader.kerd == 1004 || maploader.kerd == 1005 || maploader.kerd == 1010) {
            if (maploader.kerdi[maploader.kerd] == 1) {
                graphics.point += 200;
                graphics.erem += 1;
                this.lathato = true;
                this.zuhan = false;
            }
            maploader.kerd = 0;
        }

        if (maploader.kerd == 1011 || maploader.kerd == 1012) {
            if (maploader.kerdi[maploader.kerd] == 1) {
                graphics.point += 200;
                graphics.erem += 1;
                this.lathato = true;
                this.zuhan = false;
            }
            maploader.kerd = 0;
        }


        if (this.lathato == true) {
            this.x -= this.speed_v2;
            image(this.sprites[0], this.x, this.y, this.player_width, this.player_height);
        }

        switch (this.forgas) {
            case 1:
                if (this.player_width >= this.m1e / 3) {
                    this.player_width -= 1.7;
                } else {
                    this.forgas = 2;
                    this.sprites[0] = this.sprites[3];
                }
                break;
            case 2:
                if (this.player_width <= this.m1e * 1.1) {
                    this.player_width += 1.7;
                } else {
                    this.forgas = 3;
                    this.sprites[0] = this.sprites[2];
                }
                break;
            case 3:
                if (this.player_width <= this.m1e * 1.6) {
                    this.player_width += 1.7;
                } else {
                    this.forgas = 1;
                    this.player_width = this.m1e * 0.9;
                    this.sprites[0] = this.sprites[1];
                }
                break;
            default:
        }

        if (this.lathato == true) {
            if (this.zuhan == false) {
                if (this.y >= this.yelvartmin) {
                    this.y -= 5;
                } else {
                    this.zuhan = true;
                }
            } else {
                if (this.y <= this.yelvartmax) {
                    this.y += 5;
                } else {
                    this.lathato = false;
                    this.zuhan = false
                    points_animation.ai++;
                    points_animation.x[points_animation.ai] = this.x;
                    points_animation.y[points_animation.ai] = this.y;
                    points_animation.ye[points_animation.ai] = this.y;
                    points_animation.e[points_animation.ai] = 200;
                    points_animation.l[points_animation.ai] = true;
                    graphics.point += points_animation.e[points_animation.ai];
                }
            }
        }

        if (this.pl == true) {
            if (this.py >= this.y - 50) {
                fill(255);
                textSize(25);
                text("200", this.px, this.py);
                this.py -= 2;
            } else {
                this.pl = false;
            }
        }


    }
}