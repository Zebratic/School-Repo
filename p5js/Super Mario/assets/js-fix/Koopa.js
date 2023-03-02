function Koopa() {

    this.x = [];
    this.y = [];
    this.bottom = [];
    this.falling = [];
    this.moveLeft = [];
    this.moveRight = [];
    this.flipLeft = [];
    this.flipRight = [];
    this.start = [];
    this.dead = [];
    this.dead = [];
    this.ue = [];
    this.uei = [];
    this.vh = [];
    this.li = [];
    this.vhms = [];
    this.vhmi = [];
    this.kv = [];
    this.player_width = 39;
    this.player_height = 57;
    this.speed_v2 = [];

    this.moveSpeed = 1;
    this.jumpSpeed = 5;

    this.elapsedMilliseconds = 0;

    this.ki = true;
    this.sprites = [];
    this.sprites[1] = loadImage("assets/imgs/enemies/kacsa_teknos_1.png");
    this.sprites[2] = loadImage("assets/imgs/enemies/kacsa_teknos_2.png");
    this.sprites[3] = loadImage("assets/imgs/enemies/kacsa_teknos_3.png");
    this.sprites[4] = loadImage("assets/imgs/enemies/kacsa_teknos_4.png");
    this.sprites[5] = loadImage("assets/imgs/enemies/kacsa_teknos_5.png");
    this.sprites[0] = this.sprites[1];

    this.x[1] = 4770;
    this.y[1] = 520;
    this.bottom[1] = 0;
    this.falling[1] = true;
    this.moveLeft[1] = true;
    this.moveRight[1] = false;
    this.flipLeft[1] = false;
    this.flipRight[1] = false;
    this.start[1] = false;
    this.dead[1] = false;
    this.dead[1] = 0;
    this.ue[1] = false;
    this.uei[1] = 0;
    this.vh[1] = false;
    this.vhms[1] = 10;
    this.vhmi[1] = "s"
    this.kv[1] = false;

    this.update = function () {

        for (var i = 1; i <= this.x.length - 1; i++) {
            if (this.kv[i] == false) {
                if (this.elapsedMilliseconds <= millis()) {
                    this.elapsedMilliseconds = millis() + 150;
                    if (this.ki == true) {
                        this.ki = false;
                        if (this.moveLeft[i] == true) {
                            this.sprites[0] = this.sprites[1];
                        }
                        if (this.moveRight[i] == true) {
                            this.sprites[0] = this.sprites[4];
                        }
                    } else {
                        this.ki = true;
                        if (this.moveLeft[i] == true) {
                            this.sprites[0] = this.sprites[2];
                        }
                        if (this.moveRight[i] == true) {
                            this.sprites[0] = this.sprites[5];
                        }
                    }
                }


                if (abs(this.x[i] - player.x) < 3000 && abs(this.y[i] - player.y) < 800) {
                    let akbo = this.x[i] - this.player_width / 2;
                    let akjo = this.x[i] + this.player_width / 2;
                    let akfo = this.y[i] - this.player_height / 2;
                    let akao = this.y[i] + this.player_height / 2;

                    for (var j = 1; j <= goomba.x.length - 1; j++) {
                        if (abs(goomba.x[j] - this.x[i]) < 20 && abs(goomba.y[j] - this.y[i]) < 20) {
                            if (this.vh[i] == true && goomba.dead[j] == false) {

                                points_animation.ai++;
                                points_animation.x[points_animation.ai] = this.x[i];
                                points_animation.y[points_animation.ai] = this.y[i];
                                points_animation.ye[points_animation.ai] = this.y[i];
                                points_animation.e[points_animation.ai] = 100;
                                points_animation.l[points_animation.ai] = true;
                                graphics.point += points_animation.e[points_animation.ai];

                                squash_animation.i++;
                                squash_animation.xe[squash_animation.i] = goomba.x[j];
                                squash_animation.ye[squash_animation.i] = goomba.y[j];
                                squash_animation.l[squash_animation.i] = true;
                                squash_animation.kg[squash_animation.i] = "g";
                                squash_animation.t[squash_animation.i] = 0;
                                goomba.dead[j] = true;
                                goomba.dead[j] = millis() - 1;

                                if (this.x[i] < goomba.x[j]) {
                                    squash_animation.sz[squash_animation.i] = -60;
                                } else {
                                    squash_animation.sz[squash_animation.i] = 240;
                                }
                            }
                        }
                    }

                    for (var j = 1; j <= this.x.length - 1; j++) {

                        let okbo = this.x[j] - this.player_width / 2;
                        let okjo = this.x[j] + this.player_width / 2;
                        let okfo = this.y[j] - this.player_height / 2;
                        let okao = this.y[j] + this.player_height / 2;

                        if (j != i) {
                            if (akbo - this.moveSpeed < okjo + this.speed_v2[i] && akjo + this.moveSpeed > okbo - this.speed_v2[i]) {
                                if (this.moveRight[i] == true) {
                                    this.flipRight[i] = true;
                                } else {
                                    this.flipLeft[i] = true
                                }
                            }
                        }

                    }

                    if (this.start[i] == true) {
                        if (this.flipRight[i] == true) {
                            this.moveLeft[i] = true;
                            this.moveRight[i] = false;
                            this.flipRight[i] = false;
                        }

                        if (this.flipLeft[i] == true) {
                            this.moveLeft[i] = false;
                            this.moveRight[i] = true;
                            this.flipLeft[i] = false
                        }

                        if (this.moveLeft[i] == true && this.flipLeft[i] == false && this.vh[i] == false && this.dead[i] == false) {
                            this.x[i] -= this.speed_v2[i];
                        }

                        if (this.moveRight[i] == true && this.flipRight[i] == false && this.vh[i] == false && this.dead[i] == false) {
                            this.x[i] += this.speed_v2[i];
                        }

                        if (this.y[i] + this.jumpSpeed + this.player_height / 2 <= this.bottom[i]) {
                            this.y[i] += this.jumpSpeed
                            this.falling[i] = true;
                        }

                        if (this.bottom[i] - this.y[i] - this.player_height / 2 <= this.jumpSpeed) {
                            this.y[i] = this.bottom[i] - this.player_height / 2
                            this.falling[i] = false;
                        }
                    }

                    if (akbo < player.x + player.player_width / 2 && akjo > player.x - player.player_width / 2) {

                        if (abs(player.y - this.y[i]) < 20 && this.uei[i] == 1) {
                            this.vh[1] = true;
                            this.uei[i] = 2;
                        }

                        if (player.y < akfo && player.y + player.player_height / 2 > akfo && player.jump == false) {

                            if (this.uei[i] > 1) {
                                this.vhmi[i] = "s";
                                this.vh[i] = false
                                this.uei[i] = 0;
                                this.y[i] -= 11
                            }

                            if (this.dead[i] == false || this.ue[1] == false) {
                                player.jump = true;
                                player.lastJump = 200;
                                this.dead[i] = true;
                                if (this.uei[i] == 0) {
                                    this.y[i] += 11;
                                }
                                this.dead[i] = millis() + 4000;

                                if (this.uei[i] == 0) {
                                    points_animation.ai++;
                                    points_animation.x[points_animation.ai] = this.x[i];
                                    points_animation.y[points_animation.ai] = this.y[i];
                                    points_animation.ye[points_animation.ai] = this.y[i];
                                    points_animation.e[points_animation.ai] = 100;
                                    points_animation.l[points_animation.ai] = true;
                                    graphics.point += points_animation.e[points_animation.ai];
                                }

                                this.uei[i]++;

                            }
                        }
                    }

                    if (this.dead[i] == false) {
                        this.ue[1] = false;
                        this.player_width = 39;
                        this.player_height = 57;
                        image(this.sprites[0], this.x[i], this.y[i], this.player_width, this.player_height);
                    } else {
                        this.player_width = 39;
                        this.player_height = 34;
                        this.start[i] = false;
                        if (this.uei[i] > 1) {
                            this.start[i] = true;
                            this.vh[1] = true;

                            if (this.vhmi[i] == "s") {
                                points_animation.ai++;
                                points_animation.x[points_animation.ai] = this.x[i];
                                points_animation.y[points_animation.ai] = this.y[i];
                                points_animation.ye[points_animation.ai] = this.y[i];
                                points_animation.e[points_animation.ai] = 400;
                                points_animation.l[points_animation.ai] = true;
                                graphics.point += points_animation.e[points_animation.ai];
                                if (player.x < this.x[i]) {
                                    this.vhmi[i] = "b";
                                } else {
                                    this.vhmi[i] = "j"
                                }
                            }

                            if (this.vhmi[i] == "b") {
                                this.x[i] += this.vhms[i] + koopa.speed_v2[i];
                            }
                            if (this.vhmi[i] == "j") {
                                this.x[i] -= this.vhms[i] + koopa.speed_v2[i];
                            }

                        }
                        if (this.dead[i] > millis() || this.vh[i] == true) {
                            image(this.sprites[3], this.x[i], this.y[i], this.player_width, this.player_height);
                        } else {
                            this.start[i] = true;
                            if (this.vh[i] == false) {
                                this.dead[i] = false;
                            }
                            this.y[i] -= 21;
                            this.ue[i] = true;
                            this.uei[i] = 0;

                            if (this.moveLeft[i] == true) {
                                this.sprites[0] = this.sprites[4];
                                this.moveLeft[i] = false;
                                this.moveRight[i] = true;
                                this.flipRight[i] = false;
                                this.flipLeft[i] = false;
                            } else {
                                this.sprites[0] = this.sprites[1];
                                this.moveLeft[i] = true;
                                this.moveRight[i] = false;
                                this.flipRight[i] = false;
                                this.flipLeft[i] = false;
                            }
                        }
                    }
                }
            }
        }

    }
}