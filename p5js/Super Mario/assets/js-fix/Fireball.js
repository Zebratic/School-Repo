function Fireball() {

    this.x = [];
    this.y = [];
    this.player_width = [];
    this.player_height = [];
    this.sz = [];
    this.xe = [];
    this.ye = [];
    this.t = [];
    this.lat = [];
    this.animation = [];
    this.vx = [];
    this.vy = [];
    this.vm1 = [];
    this.vm2 = [];
    this.te = [];
    this.elapsedMilliseconds = 0;
    this.e = false;

    this.sprites = [];

    this.sprites[1] = loadImage("assets/imgs/props/fireball_1.png");
    this.sprites[2] = loadImage("assets/imgs/props/fireball_2.png");
    this.l = -1;
    this.i = "j";
    this.te[1] = false;
    this.te[2] = false;

    this.elapsedMilliseconds = 0;
    this.i = 0;

    this.update = function () {

        if (this.e == true && this.elapsedMilliseconds <= millis() && player.crouch == false) {

            if (this.elapsedMilliseconds <= millis()) {
                if (this.l == 10) {
                    this.l = -1;
                }
                this.l += 2;
                this.elapsedMilliseconds = millis() + 500;
            }

            this.player_width[this.l] = 19;
            this.player_height[this.l] = 19;
            this.player_width[this.l + 1] = 19;
            this.player_height[this.l + 1] = 19;

            this.te[this.l] = false;
            this.te[this.l + 1] = false;

            this.x[this.l] = player.x
            this.y[this.l] = player.y
            this.x[this.l + 1] = player.x
            this.y[this.l + 1] = player.y
            this.t[this.l] = 0;
            this.t[this.l + 1] = 0;

            this.lat[this.l] = true;
            this.lat[this.l + 1] = true;

            this.animation[this.l] = false;
            this.animation[this.l + 1] = false;

            if (this.i == "j") {
                this.sz[this.l] = 15;
                this.sz[this.l + 1] = 15;

                this.xe[this.l] = player.x - 15;
                this.xe[this.l + 1] = player.x + 19;

                this.ye[this.l] = player.y - 13
                this.ye[this.l + 1] = player.y - 12

                if (squash_animation.i == 6) {
                    squash_animation.i = 0;
                }

                squash_animation.sz[squash_animation.i + 1] = -60;
                squash_animation.sz[squash_animation.i + 2] = -60;

            } else {
                this.sz[this.l] = 165;
                this.sz[this.l + 1] = 165;

                this.xe[this.l] = player.x + 19;
                this.xe[this.l + 1] = player.x - 19;

                this.ye[this.l] = player.y - 15
                this.ye[this.l + 1] = player.y - 12

                squash_animation.sz[squash_animation.i + 1] = 240;
                squash_animation.sz[squash_animation.i + 2] = 240;
            }
        }

        for (var i = 1; i <= this.l + 1; i++) {
            if (this.lat[i] == true) {
                this.t[i] += 0.2;
                this.x[i] = this.xe[i] + 60 * this.t[i] * cos(this.sz[i]);
                this.y[i] = this.ye[i] + 60 * this.t[i] * sin(this.sz[i]) + 9.81 / 2 * sq(this.t[i]);

                image(this.sprites[1], this.x[i], this.y[i], this.player_width[i], this.player_height[i]);

                if (abs(player.x - this.x[i]) > 1500) {
                    this.lat[i] = false;
                }

                if (this.x[i] < 0 || this.x[i] > width) {
                    this.lat[i] = false;
                }

                for (var j = 1; j <= goomba.x.length - 1; j++) {
                    if (goomba.dead[j] == false && this.lat[i] == true) {
                        if (abs(this.x[i] - goomba.x[j]) < 20 && abs(this.y[i] - goomba.y[j]) < 20) {
                            this.lat[i] = false;
                            goomba.dead[j] = millis() - 1;
                            goomba.dead[j] = true;

                            points_animation.ai++;
                            points_animation.x[points_animation.ai] = goomba.x[j];
                            points_animation.y[points_animation.ai] = goomba.y[j];
                            points_animation.ye[points_animation.ai] = goomba.y[j];
                            points_animation.e[points_animation.ai] = 100;
                            points_animation.l[points_animation.ai] = true;
                            graphics.point += points_animation.e[points_animation.ai];
                            this.animation[i] = true;
                            this.vx[i] = this.x[i];
                            this.vy[i] = this.y[i];
                            this.vm1[i] = 38 * 0.25;
                            this.vm2[i] = 43 * 0.25;
                            squash_animation.i++;
                            squash_animation.xe[squash_animation.i] = goomba.x[j];
                            squash_animation.ye[squash_animation.i] = goomba.y[j];
                            squash_animation.l[squash_animation.i] = true;
                            squash_animation.kg[squash_animation.i] = "g";
                            squash_animation.t[squash_animation.i] = 0;
                        }
                    }
                }

                for (var j = 1; j <= koopa.x.length - 1; j++) {
                    if (koopa.kv[j] == false && this.lat[i] == true) {
                        if (abs(this.x[i] - koopa.x[j]) < 20 && abs(this.y[i] - koopa.y[j]) < 20) {
                            this.lat[i] = false;
                            koopa.kv = true;
                            points_animation.ai++;
                            points_animation.x[points_animation.ai] = koopa.x[j];
                            points_animation.y[points_animation.ai] = koopa.y[j];
                            points_animation.ye[points_animation.ai] = koopa.y[j];
                            points_animation.e[points_animation.ai] = 100;
                            points_animation.l[points_animation.ai] = true;
                            graphics.point += points_animation.e[points_animation.ai];
                            this.animation[i] = true;
                            this.vx[i] = this.x[i];
                            this.vy[i] = this.y[i];
                            this.vm1[i] = 38 * 0.25;
                            this.vm2[i] = 43 * 0.25;
                            squash_animation.i++;
                            squash_animation.xe[squash_animation.i] = koopa.x[j];
                            squash_animation.ye[squash_animation.i] = koopa.y[j];
                            squash_animation.l[squash_animation.i] = true;
                            squash_animation.kg[squash_animation.i] = "k";
                            squash_animation.t[squash_animation.i] = 0;
                        }
                    }
                }


            } else {
                if (this.animation[i] == true) {
                    image(this.sprites[2], this.vx[i], this.vy[i], this.vm1[i], this.vm2[i]);
                    this.vm1[i] *= 1.2;
                    this.vm2[i] *= 1.2;
                    if (this.vm1[i] >= 38) {
                        this.animation[i] = false;
                    }
                }
            }
        }


    }
}
