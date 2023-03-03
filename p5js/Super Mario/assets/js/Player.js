function Player() {


    this.x = 150;
    this.y = 269;
    this.player_width = 30;
    this.player_height = 41;

    this.moveLeft = false;
    this.moveRight = false;
    this.crouch = false;
    this.jump = false;
    this.lastJump = 90;
    this.floor = 0;
    this.run = false;

    this.bottom = height;
    this.falling = false;

    this.moveSpeed = 3;
    this.jumpSpeed = 6;
    this.maxJumpSpeed = 30;
    this.jumpCounter = 0;
    this.mushroom = 0;
    this.isBig = true;
    this.dead = false;
    this.deadX = 0;
    this.deadY = 0;
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.hurtTime = 0;
    this.invulnerable = false;
    this.flashing = false;
    this.flashTime = 0;
    this.milliseconds = 0;

    this.sprites = [];
    this.sprites[0] = loadImage("assets/imgs/mario/mario_0.png");
    this.sprites[1] = loadImage("assets/imgs/mario/mario_1.png");
    this.sprites[2] = loadImage("assets/imgs/mario/mario_2.png");
    this.sprites[3] = loadImage("assets/imgs/mario/mario_3.png");
    this.sprites[4] = loadImage("assets/imgs/mario/mario_4.png");
    this.sprites[5] = loadImage("assets/imgs/mario/mario_5.png");
    this.sprites[6] = loadImage("assets/imgs/mario/fire_mario_0.png");
    this.sprites[7] = loadImage("assets/imgs/mario/fire_mario_1.png");
    this.sprites[8] = loadImage("assets/imgs/mario/fire_mario_2.png");
    this.sprites[9] = loadImage("assets/imgs/mario/fire_mario_3.png");
    this.sprites[10] = loadImage("assets/imgs/mario/fire_mario_4.png");
    this.sprites[11] = loadImage("assets/imgs/mario/fire_mario_5.png");
    this.sprites[12] = loadImage("assets/imgs/mario/fire_mario_6.png");
    this.sprites[13] = loadImage("assets/imgs/mario/mario_reversed_0.png");
    this.sprites[14] = loadImage("assets/imgs/mario/mario_reversed_1.png");
    this.sprites[15] = loadImage("assets/imgs/mario/mario_reversed_2.png");
    this.sprites[16] = loadImage("assets/imgs/mario/mario_reversed_3.png");
    this.sprites[17] = loadImage("assets/imgs/mario/mario_reversed_3.png");
    this.sprites[18] = loadImage("assets/imgs/mario/mario_reversed_5.png");
    this.sprites[19] = loadImage("assets/imgs/mario/fire_mario_reversed_0.png");
    this.sprites[20] = loadImage("assets/imgs/mario/fire_mario_reversed_1.png");
    this.sprites[21] = loadImage("assets/imgs/mario/fire_mario_reversed_2.png");
    this.sprites[22] = loadImage("assets/imgs/mario/fire_mario_reversed_3.png");
    this.sprites[23] = loadImage("assets/imgs/mario/fire_mario_reversed_4.png");
    this.sprites[24] = loadImage("assets/imgs/mario/fire_mario_reversed_5.png");
    this.sprites[25] = loadImage("assets/imgs/mario/fire_mario_reversed_6.png");
    this.sprites[26] = loadImage("assets/imgs/mario/mario_dead.png");

    this.elapsedMilliseconds = 0;
    this.je = false;
    this.ji = 0;

    this.speed_v2 = 3;

    this.update = function () {

        //if (player.y > height) {
        //    this.dead = true;
        //}

        if (castle.jv == false || castle.av == true) {
            if (this.moveLeft == true && maploader.flipLeft == false) {
                if (this.crouch == false || this.mushroom == 0 || this.falling == true) {
                    this.x -= this.moveSpeed;
                    this.x -= 5;
                }
            }

            if (this.moveRight == true && maploader.flipRight == false) {
                if (this.crouch == false || this.mushroom == 0 || this.falling == true) {
                    this.x += this.moveSpeed;
                }
            }

            if (player.crouch == true) {
                if (this.mushroom > 0 && this.jump == false && this.falling == false) {
                    this.player_width = 39;
                    this.player_height = 55;
                }
            } else {
                if (maploader.felallase == true) {
                    if (this.mushroom == 0) {
                        this.player_width = 30;
                        this.player_height = 41;
                    }
                    if (this.mushroom > 0 || flower.has_flower == true) {
                        this.player_width = 41;
                        this.player_height = 75;
                    }
                }
            }


            if (this.jump == true) {
                this.jumpCounter += this.maxJumpSpeed;
                this.moveSpeed = 6
                this.y -= map(this.jumpCounter, 1, this.lastJump, 20, 6);

                if (this.jumpCounter >= this.lastJump) {
                    this.jump = false;
                    this.jumpCounter = 0;
                    this.moveSpeed = 0;
                }
            }

            if (this.jump == false) {
                this.lastJump = 890;
            }

            if (this.y + this.jumpSpeed + player.player_height / 2 <= this.bottom) {
                this.y += this.jumpSpeed
                this.falling = true;
                this.moveSpeed = 0;
            }

            if (this.bottom - this.y - this.player_height / 2 <= this.jumpSpeed) {
                if (this.jump == false) {
                    this.y = this.bottom - this.player_height / 2
                    this.falling = false;
                }
            }
            if (player.moveLeft == true || player.moveRight == true) {
                if (this.elapsedMilliseconds <= millis()) {
                    this.elapsedMilliseconds = millis() + 70;
                    this.ji--;
                    if (this.ji <= 0) {
                        this.ji = 3;
                    }
                }
            }

            if (this.crouch == true && this.jump == false && (this.mushroom > 0 || flower.has_flower == true)) {
                this.ji = 5;
            }

            if (this.jump == true || this.falling == true) {
                this.ji = 4;
            }

            if (key == "" && this.falling == false && this.moveLeft == false && this.moveRight == false && this.crouch == false) {
                this.ji = 0;
            }
        }
        if (flower.has_flower == true) {
            this.ji += 6;
        }

        if (fireball.e == true && flower.has_flower == true && this.crouch == false) {
            this.ji = 12;
        }


        if (this.flashing == false && this.dead == false) {
            if (fireball.i == "j") {
                switch (this.ji) {
                    case 0:
                        image(this.sprites[0], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 1:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 33;
                            this.player_height = 40;
                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 39;
                            this.player_height = 75;
                        }
                        image(this.sprites[1], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 2:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 28;
                            this.player_height = 40;

                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 34;
                            this.player_height = 75;
                        }
                        image(this.sprites[2], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 3:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 33;
                            this.player_height = 40;
                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 39;
                            this.player_height = 75;
                        }
                        image(this.sprites[3], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 4:
                        image(this.sprites[4], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 5:
                        this.player_width = 39;
                        this.player_height = 55;
                        image(this.sprites[5], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 6:
                        image(this.sprites[6], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 7:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 33;
                            this.player_height = 40;
                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 39;
                            this.player_height = 75;
                        }
                        image(this.sprites[7], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 8:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 28;
                            this.player_height = 40;

                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 34;
                            this.player_height = 75;
                        }
                        image(this.sprites[8], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 9:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 33;
                            this.player_height = 40;
                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 39;
                            this.player_height = 75;
                        }
                        image(this.sprites[9], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 10:
                        image(this.sprites[10], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 11:
                        this.player_width = 39;
                        this.player_height = 55;
                        image(this.sprites[11], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 12:
                        this.player_width = 39;
                        this.player_height = 75;
                        image(this.sprites[12], this.x, this.y, this.player_width, this.player_height);
                        break;
                    default:

                        break;
                }
            } else {
                switch (this.ji) {
                    case 0:
                        image(this.sprites[13], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 1:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 33;
                            this.player_height = 40;
                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 39;
                            this.player_height = 75;
                        }
                        image(this.sprites[14], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 2:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 28;
                            this.player_height = 40;

                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 34;
                            this.player_height = 75;
                        }
                        image(this.sprites[15], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 3:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 33;
                            this.player_height = 40;
                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 39;
                            this.player_height = 75;
                        }
                        image(this.sprites[16], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 4:
                        image(this.sprites[17], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 5:
                        this.player_width = 39;
                        this.player_height = 55;
                        image(this.sprites[18], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 6:
                        image(this.sprites[19], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 7:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 33;
                            this.player_height = 40;
                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 39;
                            this.player_height = 75;
                        }
                        image(this.sprites[20], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 8:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 28;
                            this.player_height = 40;

                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 34;
                            this.player_height = 75;
                        }
                        image(this.sprites[21], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 9:
                        if (this.mushroom == 0 || flower.has_flower == false) {
                            this.player_width = 33;
                            this.player_height = 40;
                        }
                        if (this.mushroom > 0 || flower.has_flower == true) {
                            this.player_width = 39;
                            this.player_height = 75;
                        }
                        image(this.sprites[22], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 10:
                        image(this.sprites[23], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 11:
                        this.player_width = 39;
                        this.player_height = 55;
                        image(this.sprites[24], this.x, this.y, this.player_width, this.player_height);
                        break;
                    case 12:
                        this.player_width = 39;
                        this.player_height = 75;
                        image(this.sprites[25], this.x, this.y, this.player_width, this.player_height);
                        break;
                }
            }

            if (flower.has_flower == true) {
                this.ji -= 6;
            }

        }


        for (var j = 1; j <= goomba.x.length - 1; j++) {
            if (goomba.dead[j] == false && this.invulnerable == false && this.dead == false) {
                if (abs(this.x - goomba.x[j]) < 20 && abs(this.y - goomba.y[j]) < 20) {
                    if (this.mushroom == 0 && flower.has_flower == false) {
                        this.dead = true;
                        this.deadX = this.x;
                        this.deadY = this.y;
                        this.hurtTime = 0;
                    } else {
                        this.mushroom = 0;
                        flower.has_flower = false;
                        this.invulnerable = true;
                        this.flashTime = 0;
                    }
                }
            }
        }


        for (var j = 1; j <= koopa.x.length - 1; j++) {
            if (koopa.kv[j] == false && this.invulnerable == false && this.dead == false) {
                if (abs(this.x - koopa.x[j]) < 20 && abs(this.y - koopa.y[j]) < 20) {
                    if (this.mushroom == 0 && flower.has_flower == false) {
                        this.dead = true;
                        this.deadX = this.x;
                        this.deadY = this.y;
                    } else {
                        this.mushroom = 0;
                        flower.has_flower = false;
                        this.invulnerable = true;
                        this.flashTime = 0;
                    }
                }
            }
        }

        if (this.invulnerable == true) {
            if (this.milliseconds < millis()) {
                this.milliseconds = millis() + 100;
                this.flashTime++;
                if (this.flashing == false) {
                    this.flashing = true;
                } else {
                    this.flashing = false;
                }
            }

            if (this.flashTime >= 30) {
                this.flashing = false
                this.invulnerable = false;
            }
        }

        this.dies = function () {
            if (this.dead == true && this.invulnerable == false) {
                this.hurtTime += 0.2
                this.accelerationX = this.deadX + 40 * this.hurtTime * cos(-90);
                this.accelerationY = this.deadY + 40 * this.hurtTime * sin(-90) + 9.81 / 2 * sq(this.hurtTime);
                image(this.sprites[26], this.accelerationX, this.accelerationY, 35, 37);
            }
        }
    }
}