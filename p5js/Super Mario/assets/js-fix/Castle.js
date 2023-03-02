function Castle() {

    this.rx = 8828;
    this.ry = 343;
    this.zx = 8803;
    this.zy = 175;
    this.vx = 9182
    this.vy = 452.5
    this.sprites = [];
    this.sprites[0] = loadImage("assets/imgs/props/var.png");
    this.sprites[1] = loadImage("assets/imgs/props/zaszlo.png");
    this.sprites[2] = loadImage("assets/imgs/props/rud.png");
    this.jv = false;
    this.elapsedMilliseconds = 0;
    this.av = false;
    this.zi = false;
    this.mt = false

    this.update = function () {
        image(this.sprites[0], this.vx, this.vy, 196, 200);
        image(this.sprites[1], this.zx, this.zy, 40, 39);
        image(this.sprites[2], this.rx, this.ry, 39, 420);

        if (abs(player.x - this.rx) < 10 && this.jv == false && this.av == false) {
            this.jv = true;
            this.elapsedMilliseconds = millis() + 100;
            this.mt = true;
            player.moveRight = false;
            points_animation.ai++;
            points_animation.x[points_animation.ai] = player.x + 20;
            points_animation.y[points_animation.ai] = player.y;
            points_animation.ye[points_animation.ai] = player.y;

            if (player.y < 204) {
                points_animation.e[points_animation.ai] = 5000;
            }

            if (player.y < 264 && player.y > 204) {
                points_animation.e[points_animation.ai] = 2000;
            }

            if (player.y < 324 && player.y > 264) {
                points_animation.e[points_animation.ai] = 1000;
            }

            if (player.y < 384 && player.y > 324) {
                points_animation.e[points_animation.ai] = 500;
            }

            if (player.y > 444) {
                points_animation.e[points_animation.ai] = 100;
            }
            if (player.y < 444 && player.y > 384) {
                points_animation.e[points_animation.ai] = 200;
            }

            points_animation.l[points_animation.ai] = true;
            graphics.point += points_animation.e[points_animation.ai];
        }

        if (this.jv == true && this.elapsedMilliseconds < millis()) {
            if (player.y <= 460) {
                this.zi = true;
                player.y += 2;
            } else {
                this.jv = false
                this.av = true;
            }
        }

        if (this.av == true) {
            if (abs(this.vx - player.x) > 5) {
                player.moveRight = true;
            } else {
                player.moveRight = false;

            }
        }

        if (this.zi == true) {
            if (this.zy < 481) {
                this.zy += 2;
            }
        }

    }
}