function Mushroom() {

    this.x = 219;
    this.y = 269;
    this.player_width = 43;
    this.player_height = 43;

    this.moveLeft = false;
    this.moveRight = true;

    this.falling = false;

    this.moveSpeed = 3;
    this.jumpSpeed = 5;
    this.maxJumpSpeed = 5;
    this.jumpCounter = 0;
    this.sprites = loadImage("assets/imgs/items/mushroom.png");

    this.flipLeft = false;
    this.flipRight = false;
    this.lathato = false;
    this.animation = false;
    this.gba = -1;
    this.gb = 0;

    this.speed_v2 = 0;

    this.update = function () {

        if (this.gba != maploader.kerd && maploader.kerd != 0 && (maploader.kerd == 1006 || maploader.kerd == 1008)) {
            this.gba = maploader.kerd;
            this.flipLeft = false;
            this.flipRight = false;
            this.lathato = false;
            this.animation = false;
            this.gb = maploader.kerd
        }

        if (maploader.kerd == 1003 || maploader.kerd == 1006 || maploader.kerd == 1008) {
            this.gb = maploader.kerd;
            if (maploader.kerdi[maploader.kerd] == 1) {
                if (this.animation == false) {
                    this.animation = true
                    this.x = maploader.x[maploader.kerd];
                    this.y = maploader.y[maploader.kerd] - 15;
                }
            }
        }

        if (this.animation == true) {
            image(this.sprites, this.x, this.y, this.player_width, this.player_height);
            if (this.y >= maploader.y[this.gb] - maploader.player_height[this.gb]) {
                this.y--;
            } else {

                this.animation = false;
                maploader.kerd = 0;
                this.lathato = true;

            }
        }

        if (abs(this.x - player.x) < 30 && abs(this.y - player.y) < 30 && this.lathato == true) {
            this.lathato = false;
            player.mushroom++;
            points_animation.ai++;
            points_animation.x[points_animation.ai] = this.x;
            points_animation.y[points_animation.ai] = this.y;
            points_animation.ye[points_animation.ai] = this.y;
            points_animation.e[points_animation.ai] = 1000;
            points_animation.l[points_animation.ai] = true;
            graphics.point += points_animation.e[points_animation.ai];
        }

        if (this.lathato == true) {
            if (this.flipRight == true) {
                this.moveLeft = true;
                this.moveRight = false;
                this.flipRight = false;
            }

            if (this.flipLeft == true) {
                this.moveLeft = false;
                this.moveRight = true;
                this.flipLeft = false;
            }

            if (this.moveLeft == true && this.flipLeft == false) {
                this.x -= this.speed_v2;
            }

            if (this.moveRight == true && this.flipRight == false) {
                this.x += this.speed_v2;
            }

            if (this.y + this.jumpSpeed + this.player_height / 2 <= this.bottom) {
                this.y += this.jumpSpeed
                this.falling = true;
                this.moveSpeed = this.speed_v2;
            }

            if (this.bottom - this.y - this.player_height / 2 <= this.jumpSpeed) {
                this.y = this.bottom - this.player_height / 2
                this.falling = false;
                this.moveSpeed = this.speed_v2;
            }

            image(this.sprites, this.x, this.y, this.player_width, this.player_height);

        }

    }
}