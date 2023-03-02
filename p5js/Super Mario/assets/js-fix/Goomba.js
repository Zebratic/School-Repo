function Goomba() {

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
    this.deadX = [];
    this.deadY = [];
    this.speed_v2 = [];
    //this.pa = false;
    //this.pax = 0;
    //this.pay = 0;
    //this.pai = 0;

    this.gba = -1;

    this.player_width = 40;
    this.player_height = 39;

    this.jumpSpeed = 5;

    this.elapsedMilliseconds = 0;

    this.ki = true;
    this.sprites = [];
    this.sprites[1] = loadImage("assets/imgs/enemies/ellenseg_1_bal.png");
    this.sprites[2] = loadImage("assets/imgs/enemies/ellenseg_1_jobb.png");
    this.sprites[3] = loadImage("assets/imgs/enemies/ellenseg_1_halott.png");
    this.sprites[0] = this.sprites[1];

    this.x[1] = 968;
    this.y[1] = 532;
    this.bottom[1] = 0;
    this.falling[1] = true;
    this.moveLeft[1] = true;
    this.moveRight[1] = false;
    this.flipLeft[1] = false;
    this.flipRight[1] = false;
    this.start[1] = false;
    this.dead[1] = false;

    this.x[2] = 2007;
    this.y[2] = 532;
    this.bottom[2] = 0;
    this.falling[2] = true;
    this.moveLeft[2] = true;
    this.moveRight[2] = false;
    this.flipLeft[2] = false;
    this.flipRight[2] = false;
    this.start[2] = false;
    this.dead[2] = false;

    this.x[3] = 2471;
    this.y[3] = 532;
    this.bottom[3] = 0;
    this.falling[3] = true;
    this.moveLeft[3] = true;
    this.moveRight[3] = false;
    this.flipLeft[3] = false;
    this.flipRight[3] = false;
    this.start[3] = false;
    this.dead[3] = false;

    this.x[4] = 2410;
    this.y[4] = 532;
    this.bottom[4] = 0;
    this.falling[4] = true;
    this.moveLeft[4] = true;
    this.moveRight[4] = false;
    this.flipLeft[4] = false;
    this.flipRight[4] = false;
    this.start[4] = false;
    this.dead[4] = false;

    this.x[5] = 3560;
    this.y[5] = 175;
    this.bottom[5] = 0;
    this.falling[5] = true;
    this.moveLeft[5] = true;
    this.moveRight[5] = false;
    this.flipLeft[5] = false;
    this.flipRight[5] = false;
    this.start[5] = false;
    this.dead[5] = false;

    this.x[6] = 3620;
    this.y[6] = 175;
    this.bottom[6] = 0;
    this.falling[6] = true;
    this.moveLeft[6] = true;
    this.moveRight[6] = false;
    this.flipLeft[6] = false;
    this.flipRight[6] = false;
    this.start[6] = false;
    this.dead[6] = false;

    this.x[7] = 4327;
    this.y[7] = 532;
    this.bottom[7] = 0;
    this.falling[7] = true;
    this.moveLeft[7] = true;
    this.moveRight[7] = false;
    this.flipLeft[7] = false;
    this.flipRight[7] = false;
    this.start[7] = false;
    this.dead[7] = false;

    this.x[8] = 4400;
    this.y[8] = 532;
    this.bottom[8] = 0;
    this.falling[8] = true;
    this.moveLeft[8] = true;
    this.moveRight[8] = false;
    this.flipLeft[8] = false;
    this.flipRight[8] = false;
    this.start[8] = false;
    this.dead[8] = false;
    this.dead[8] = 0;

    this.x[9] = 5066;
    this.y[9] = 532;
    this.bottom[9] = 0;
    this.falling[9] = true;
    this.moveLeft[9] = true;
    this.moveRight[9] = false;
    this.flipLeft[9] = false;
    this.flipRight[9] = false;
    this.start[9] = false;
    this.dead[9] = false;

    this.x[10] = 5130;
    this.y[10] = 532;
    this.bottom[10] = 0;
    this.falling[10] = true;
    this.moveLeft[10] = true;
    this.moveRight[10] = false;
    this.flipLeft[10] = false;
    this.flipRight[10] = false;
    this.start[10] = false;
    this.dead[10] = false;
    this.dead[10] = 0;

    this.x[11] = 5599;
    this.x[11] = 5479;
    this.y[11] = 532;
    this.bottom[11] = 0;
    this.falling[11] = true;
    this.moveLeft[11] = true;
    this.moveRight[11] = false;
    this.flipLeft[11] = false;
    this.flipRight[11] = false;
    this.start[11] = false;
    this.dead[11] = false;

    this.x[12] = 5533;
    this.y[12] = 532;
    this.bottom[12] = 0;
    this.falling[12] = true;
    this.moveLeft[12] = true;
    this.moveRight[12] = false;
    this.flipLeft[12] = false;
    this.flipRight[12] = false;
    this.start[12] = false;
    this.dead[12] = false;
    this.dead[12] = 0;

    this.x[13] = 5700;
    this.y[13] = 532;
    this.bottom[13] = 0;
    this.falling[13] = true;
    this.moveLeft[13] = true;
    this.moveRight[13] = false;
    this.flipLeft[13] = false;
    this.flipRight[13] = false;
    this.start[13] = false;
    this.dead[13] = false;

    this.x[14] = 5761;
    this.y[14] = 532;
    this.bottom[14] = 0;
    this.falling[14] = true;
    this.moveLeft[14] = true;
    this.moveRight[14] = false;
    this.flipLeft[14] = false;
    this.flipRight[14] = false;
    this.start[14] = false;
    this.dead[14] = false;
    this.dead[14] = 0;

    this.x[15] = 7743;
    this.y[15] = 532;
    this.bottom[15] = 0;
    this.falling[15] = true;
    this.moveLeft[15] = true;
    this.moveRight[15] = false;
    this.flipLeft[15] = false;
    this.flipRight[15] = false;
    this.start[15] = false;
    this.dead[15] = false;

    this.x[16] = 7798;
    this.y[16] = 532;
    this.bottom[16] = 0;
    this.falling[16] = true;
    this.moveLeft[16] = true;
    this.moveRight[16] = false;
    this.flipLeft[16] = false;
    this.flipRight[16] = false;
    this.start[16] = false;
    this.dead[16] = false;

    this.update = function () {

        if (this.elapsedMilliseconds <= millis()) {
            this.elapsedMilliseconds = millis() + 150;
            if (this.ki == true) {
                this.ki = false;
                this.sprites[0] = this.sprites[1];
            } else {
                this.ki = true;
                this.sprites[0] = this.sprites[2];
            }
        }


        for (var i = 1; i <= this.x.length - 1; i++) {
            if (abs(this.x[i] - player.x) < 1200 && abs(this.y[i] - player.y) < 800) {
                let agbo = this.x[i] - this.player_width / 2;
                let agjo = this.x[i] + this.player_width / 2;
                let agfo = this.y[i] - this.player_height / 2;
                let agao = this.y[i] + this.player_height / 2;


                for (var j = 1; j <= this.x.length - 1; j++) {

                    let ogbo = this.x[j] - this.player_width / 2;
                    let ogjo = this.x[j] + this.player_width / 2;
                    let ogfo = this.y[j] - this.player_height / 2;
                    let ogao = this.y[j] + this.player_height / 2;

                    if (j != i) {
                        if (agbo - this.speed_v2[i] < ogjo + this.speed_v2[i] && agjo + this.speed_v2[i] > ogbo - this.speed_v2[i]) {
                            if (this.start[i] == true && this.dead[i] == false && this.dead[j] == false) {
                                if (this.moveRight[i] == true) {
                                    this.flipRight[i] = true;
                                } else {
                                    this.flipLeft[i] = true
                                }
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

                    if (this.moveLeft[i] == true && this.flipLeft[i] == false && this.dead[i] == false) {
                        this.x[i] -= this.speed_v2[i];
                    }

                    if (this.moveRight[i] == true && this.flipRight[i] == false && this.dead[i] == false) {
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

                if (agbo < player.x + player.player_width / 2 && agjo > player.x - player.player_width / 2) {
                    if (player.y < agfo && player.y + player.player_height / 2 > agfo && player.jump == false) {
                        if (this.dead[i] == false) {
                            player.jump = true;
                            player.lastJump = 200;
                            this.dead[i] = true;
                            this.deadX[i] = this.x[i];
                            this.deadY[i] = this.y[i] + 13;
                            this.dead[i] = millis() + 1000;
                            points_animation.ai++;
                            points_animation.x[points_animation.ai] = this.x[i];
                            points_animation.y[points_animation.ai] = this.y[i];
                            points_animation.ye[points_animation.ai] = this.y[i];
                            points_animation.e[points_animation.ai] = 100;
                            points_animation.l[points_animation.ai] = true;
                            graphics.point += points_animation.e[points_animation.ai];
                        }
                    }
                }

                if (this.dead[i] == false) {
                    this.player_width = 40;
                    this.player_height = 39;
                    image(this.sprites[0], this.x[i], this.y[i], this.player_width, this.player_height);
                } else {
                    this.start[i] = false;
                    if (this.dead[i] > millis()) {
                        if (player.moveRight == true && maploader.flipRight == false && player.x >= 300) {
                            this.deadX[i] -= 4;
                        }
                        image(this.sprites[3], this.deadX[i], this.deadY[i], this.player_width, 15);
                    }
                }
            }
        }
    }
}