function Flower() {

    this.x = 3495;
    this.y = 360;
    this.player_width = 39;
    this.player_height = 40;

    this.sprites = [];

    this.sprites[1] = loadImage("assets/imgs/items/flower_1.png");
    this.sprites[2] = loadImage("assets/imgs/items/flower_2.png");
    this.sprites[3] = loadImage("assets/imgs/items/flower_3.png");
    this.sprites[0] = this.sprites[1];
    this.elapsedMilliseconds = 0;
    this.i = 0;

    this.gba = -1;
    this.has_flower = false;
    this.bx = 0;
    this.by = 0;

    this.speed_v2 = 0;

    this.update = function () {

        if (this.gba != maploader.kerd && maploader.kerd != 0 && (maploader.kerd == 1003 || maploader.kerd == 1006 || maploader.kerd == 1008)) {
            this.gba = maploader.kerd;
            this.flipLeft = false;
            this.flipRight = false;
            this.visible = false;
            this.animation = false;

        }

        if (this.elapsedMilliseconds <= millis()) {
            this.elapsedMilliseconds = millis() + 20;

            switch (this.i) {
                case 0:
                    this.sprites[0] = this.sprites[1];
                    this.i = 1;
                    break;
                case 1:
                    this.sprites[0] = this.sprites[2];
                    this.i = 2;
                    break;
                case 2:
                    this.sprites[0] = this.sprites[3];
                    this.i = 0;
                    break;
            }
        }

        if (maploader.kerd == 1003 || maploader.kerd == 1006 || maploader.kerd == 1008) {
            if (maploader.kerdi[maploader.kerd] == 1) {
                if (this.animation == false) {
                    this.animation = true
                    this.x = maploader.x[maploader.kerd];
                    this.y = maploader.y[maploader.kerd] - 15;
                }
            }
        }

        if (this.animation == true) {
            this.x -= this.speed_v2;
            image(this.sprites[0], this.x, this.y, this.player_width, this.player_height);
            if (this.y >= maploader.y[maploader.kerd] - maploader.player_height[maploader.kerd] * 0.94) {
                this.y--;
            } else {
                this.animation = false;
                maploader.kerd = 0;
                this.visible = true;
            }
        }

        if (abs(this.x - player.x) < 30 && abs(this.y - player.y) < 40 && this.visible == true) {
            this.visible = false;
            this.has_flower = true;
            points_animation.ai++;
            points_animation.x[points_animation.ai] = this.x;
            points_animation.y[points_animation.ai] = this.y;
            points_animation.ye[points_animation.ai] = this.y;
            points_animation.e[points_animation.ai] = 1000;
            points_animation.l[points_animation.ai] = true;
            graphics.point += points_animation.e[points_animation.ai];
        }

        if (this.visible == true) {
            this.x -= this.speed_v2;
            image(this.sprites[0], this.x, this.y, this.player_width, this.player_height);
        }

    }
}