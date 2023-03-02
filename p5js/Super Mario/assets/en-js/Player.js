function Player() {
    this.x = 150;
    this.y = 269;
    this.width = 30;
    this.height = 41;

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

    this.sprite = [];
    this.sprite[0] = loadImage("assets/imgs/mario/mario_0.png");
    this.sprite[1] = loadImage("assets/imgs/mario/mario_1.png");
    this.sprite[2] = loadImage("assets/imgs/mario/mario_2.png");
    this.sprite[3] = loadImage("assets/imgs/mario/mario_3.png");
    this.sprite[4] = loadImage("assets/imgs/mario/mario_4.png");
    this.sprite[5] = loadImage("assets/imgs/mario/mario_5.png");
    this.sprite[6] = loadImage("assets/imgs/mario/fire_mario_0.png");
    this.sprite[7] = loadImage("assets/imgs/mario/fire_mario_1.png");
    this.sprite[8] = loadImage("assets/imgs/mario/fire_mario_2.png");
    this.sprite[9] = loadImage("assets/imgs/mario/fire_mario_3.png");
    this.sprite[10] = loadImage("assets/imgs/mario/fire_mario_4.png");
    this.sprite[11] = loadImage("assets/imgs/mario/fire_mario_5.png");
    this.sprite[12] = loadImage("assets/imgs/mario/fire_mario_6.png");
    this.sprite[13] = loadImage("assets/imgs/mario/mario_reversed_0.png");
    this.sprite[14] = loadImage("assets/imgs/mario/mario_reversed_1.png");
    this.sprite[15] = loadImage("assets/imgs/mario/mario_reversed_2.png");
    this.sprite[16] = loadImage("assets/imgs/mario/mario_reversed_3.png");
    this.sprite[17] = loadImage("assets/imgs/mario/mario_reversed_3.png");
    this.sprite[18] = loadImage("assets/imgs/mario/mario_reversed_5.png");
    this.sprite[19] = loadImage("assets/imgs/mario/fire_mario_reversed_0.png");
    this.sprite[20] = loadImage("assets/imgs/mario/fire_mario_reversed_1.png");
    this.sprite[21] = loadImage("assets/imgs/mario/fire_mario_reversed_2.png");
    this.sprite[22] = loadImage("assets/imgs/mario/fire_mario_reversed_3.png");
    this.sprite[23] = loadImage("assets/imgs/mario/fire_mario_reversed_4.png");
    this.sprite[24] = loadImage("assets/imgs/mario/fire_mario_reversed_5.png");
    this.sprite[25] = loadImage("assets/imgs/mario/fire_mario_reversed_6.png");
    this.sprite[26] = loadImage("assets/imgs/mario/mario_dead.png");

    this.elapsedMillis = 0;
    this.je = false;
    this.ji = 0;

    this.speed_v2 = 3;

    this.display = function () {
        //if (player.y > height) {
        //    this.dead = true;
        //}

        if (end_of_level.next_level == false || end_of_level.game_over == true) {
            if (this.move_left == true && ground_wall.obstacle_left == false) {
                if (
                    this.crouch == false ||
                    this.mushroom_ == 0 ||
                    this.falling == true
                ) {
                    this.x -= this.move_speed;
                    this.x -= 5;
                }
            }
            if (this.move_right == true && ground_wall.obstacle_right == false) {
                if (
                    this.crouch == false ||
                    this.mushroom_ == 0 ||
                    this.falling == true
                ) {
                    this.x += this.move_speed;
                    this.x += 5;
                }
            }

            if (this.move_right == true && ground_wall.obstacle_right == false) {
                if (
                    this.crouch == false ||
                    this.mushroom_ == 0 ||
                    this.falling == true
                ) {
                    this.x += this.move_speed;
                }
            }
            if (player.crouch == true) {
                if (this.mushroom_ > 0 && this.jump == false && this.falling == false) {
                    this.player_width = 39;
                    this.player_height = 55;
                }
            } else {
                if (ground_wall.standing == true) {
                    if (this.mushroom_ == 0) {
                        this.player_width = 30;
                        this.player_height = 41;
                    }
                    if (this.mushroom_ > 0 || flower.collected_flower == true) {
                        this.player_width = 41;
                        this.player_height = 75;
                    }
                }
            }

            if (this.jump == true) {
                this.jump_speed += this.jump_acceleration;
                this.move_speed = 6;
                this.y -= map(this.jump_speed, 1, this.max_jump, 20, 6);

                if (this.jump_speed >= this.max_jump) {
                    this.jump = false;
                    this.jump_speed = 0;
                    this.move_speed = 0;
                }
            }

            if (this.jump == false) {
                this.max_jump = 890;
            }

            if (this.y + this.fall_speed + player.player_height / 2 <= this.floor) {
                this.y += this.fall_speed;
                this.falling = true;
                this.move_speed = 0;
            }

            if (this.floor - this.y - this.player_height / 2 <= this.fall_speed) {
                if (this.jump == false) {
                    this.y = this.floor - this.player_height / 2;
                    this.falling = false;
                }
            }
            if (player.left == true || player.right == true) {
                if (this.elapsedMilliseconds <= millis()) {
                    this.elapsedMilliseconds = millis() + 70;
                    this.frame_index--;
                    if (this.frame_index <= 0) {
                        this.frame_index = 3;
                    }
                }
            }

            if (
                this.crouch == true &&
                this.jump == false &&
                (this.mushroom_count > 0 || flower.picked_up == true)
            ) {
                this.frame_index = 5;
            }

            if (this.jump == true || this.falling == true) {
                this.frame_index = 4;
            }

            if (
                key == "" &&
                this.falling == false &&
                this.left == false &&
                this.right == false &&
                this.crouch == false
            ) {
                this.frame_index = 0;
            }
        }
        if (flower.is_picked_up == true) {
            this.energy += 6;
        }

        if (
            love.e == true &&
            flower.is_picked_up == true &&
            this.squatting == false
        ) {
            this.energy = 12;
        }

        if (this.flashing == false && this.dead == false) {
            if (love.i == "j") {
                switch (this.energy) {
                    case 0:
                        image(this.image[0], this.x, this.y, this.width1, this.height1);
                        break;
                    case 1:
                        if (this.mushroom_ == 0 || flower.is_picked_up == false) {
                            this.width1 = 33;
                            this.height1 = 40;
                        }
                        if (this.mushroom_ > 0 || flower.is_picked_up == true) {
                            this.width1 = 39;
                            this.height1 = 75;
                        }
                        image(this.image[1], this.x, this.y, this.width1, this.height1);
                        break;
                    case 2:
                        if (this.mushroom_ == 0 || flower.is_picked_up == false) {
                            this.width1 = 28;
                            this.height1 = 40;
                        }
                        if (this.mushroom_ > 0 || flower.is_picked_up == true) {
                            this.width1 = 34;
                            this.height1 = 75;
                        }
                        image(this.image[2], this.x, this.y, this.width1, this.height1);
                        break;
                    case 3:
                        if (this.mushroom_ == 0 || flower.is_picked_up == false) {
                            this.width1 = 33;
                            this.height1 = 40;
                        }
                        if (this.mushroom_ > 0 || flower.is_picked_up == true) {
                            this.width1 = 39;
                            this.height1 = 75;
                        }
                        image(this.image[3], this.x, this.y, this.width1, this.height1);
                        break;
                    case 4:
                        image(this.image[4], this.x, this.y, this.width1, this.height1);
                        break;
                    case 5:
                        this.width1 = 39;
                        this.height1 = 55;
                        image(this.image[5], this.x, this.y, this.width1, this.height1);
                        break;
                    case 6:
                        image(this.image[6], this.x, this.y, this.width1, this.height1);
                        break;
                    case 7:
                        if (this.mushroom_ == 0 || flower.is_picked_up == false) {
                            this.width1 = 33;
                            this.height1 = 40;
                        }
                        if (this.mushroom_ > 0 || flower.is_picked_up == true) {
                            this.width1 = 39;
                            this.height1 = 75;
                        }
                        image(this.image[7], this.x, this.y, this.width1, this.height1);
                        break;
                    case 8:
                        if (this.mushroom_ == 0 || flower.is_picked_up == false) {
                            this.width1 = 28;
                            this.height1 = 40;
                        }
                        if (this.mushroom_ > 0 || flower.is_picked_up == true) {
                            this.width1 = 34;
                            this.height1 = 75;
                        }
                        image(this.image[8], this.x, this.y, this.width1, this.height1);
                        break;
                    case 9:
                        if (this.mushroomCount == 0 || flower.pickedUp == false) {
                            this.width1 = 33;
                            this.width2 = 40;
                        }
                        if (this.mushroomCount > 0 || flower.pickedUp == true) {
                            this.width1 = 39;
                            this.width2 = 75;
                        }
                        image(
                            this.imageArray[9],
                            this.xPos,
                            this.yPos,
                            this.width1,
                            this.width2
                        );
                        break;
                    case 10:
                        image(
                            this.imageArray[10],
                            this.xPos,
                            this.yPos,
                            this.width1,
                            this.width2
                        );
                        break;
                    case 11:
                        this.width1 = 39;
                        this.width2 = 55;
                        image(
                            this.imageArray[11],
                            this.xPos,
                            this.yPos,
                            this.width1,
                            this.width2
                        );
                        break;
                    case 12:
                        this.width1 = 39;
                        this.width2 = 75;
                        image(
                            this.imageArray[12],
                            this.xPos,
                            this.yPos,
                            this.width1,
                            this.width2
                        );
                        break;
                    default:
                        break;
                }
            } else {
                switch (this.state) {
                    case 0:
                        image(this.images[13], this.x, this.y, this.width1, this.height1);
                        break;
                    case 1:
                        if (this.mushroom == 0 || flower.hasFlower == false) {
                            this.width1 = 33;
                            this.height1 = 40;
                        }
                        if (this.mushroom > 0 || flower.hasFlower == true) {
                            this.width1 = 39;
                            this.height1 = 75;
                        }
                        image(this.images[14], this.x, this.y, this.width1, this.height1);
                        break;
                    case 2:
                        if (this.mushroom == 0 || flower.hasFlower == false) {
                            this.width1 = 28;
                            this.height1 = 40;
                        }
                        if (this.mushroom > 0 || flower.hasFlower == true) {
                            this.width1 = 34;
                            this.height1 = 75;
                        }
                        image(this.images[15], this.x, this.y, this.width1, this.height1);
                        break;
                    case 3:
                        if (this.mushroom == 0 || flower.hasFlower == false) {
                            this.width1 = 33;
                            this.height1 = 40;
                        }
                        if (this.mushroom > 0 || flower.hasFlower == true) {
                            this.width1 = 39;
                            this.height1 = 75;
                        }
                        image(this.images[16], this.x, this.y, this.width1, this.height1);
                        break;
                    case 4:
                        image(this.images[17], this.x, this.y, this.width1, this.height1);
                        break;
                    case 5:
                        this.width1 = 39;
                        this.height1 = 55;
                        image(this.images[18], this.x, this.y, this.width1, this.height1);
                        break;
                    case 6:
                        image(this.images[19], this.x, this.y, this.width1, this.height1);
                        break;
                    case 7:
                        if (this.mushroom == 0 || flower.hasFlower == false) {
                            this.width1 = 33;
                            this.height1 = 40;
                        }
                        if (this.mushroom > 0 || flower.hasFlower == true) {
                            this.width1 = 39;
                            this.height1 = 75;
                        }
                        image(this.images[20], this.x, this.y, this.width1, this.height1);
                        break;
                    case 8:
                        if (this.mushroom == 0 || flower.hasFlower == false) {
                            this.width1 = 28;
                            this.height1 = 40;
                        }
                        if (this.mushroom > 0 || flower.hasFlower == true) {
                            this.width1 = 34;
                            this.height1 = 75;
                        }
                        image(this.images[21], this.x, this.y, this.width1, this.height1);
                        break;
                    case 9:
                        if (this.mushroom == 0 || flower.hasFlower == false) {
                            this.width1 = 33;
                            this.height1 = 40;
                        }
                        if (this.mushroom > 0 || flower.hasFlower == true) {
                            this.width1 = 39;
                            this.height1 = 75;
                        }
                        image(this.images[22], this.x, this.y, this.width1, this.height1);
                        break;
                    case 10:
                        image(this.imageList[23], this.x, this.y, this.width1, this.width2);
                        break;
                    case 11:
                        this.width1 = 39;
                        this.width2 = 55;
                        image(this.imageList[24], this.x, this.y, this.width1, this.width2);
                        break;
                    case 12:
                        this.width1 = 39;
                        this.width2 = 75;
                        image(this.imageList[25], this.x, this.y, this.width1, this.width2);
                        break;
                }
            }

            if (flower.picked_flower == true) {
                this.ji -= 6;
            }
        }

        for (var j = 1; j <= enemy_mushroom.x.length - 1; j++) {
            if (
                enemy_mushroom.dead[j] == false &&
                this.invulnerable == false &&
                this.dead == false
            ) {
                if (
                    abs(this.x - enemy_mushroom.x[j]) < 20 &&
                    abs(this.y - enemy_mushroom.y[j]) < 20
                ) {
                    if (this.mushroom_ == 0 && flower.picked_up == false) {
                        this.dead = true;
                        this.dx = this.x;
                        this.dy = this.y;
                        this.dt = 0;
                    } else {
                        this.mushroom_ = 0;
                        flower.picked_up = false;
                        this.invulnerable = true;
                        this.fi = 0;
                    }
                }
            }
        }

        if (this.immortal == true) {
            if (this.millisCounter < millis()) {
                this.millisCounter = millis() + 100;
                this.count++;
                if (this.blink == false) {
                    this.blink = true;
                } else {
                    this.blink = false;
                }
            }

            if (this.count >= 30) {
                this.blink = false;
                this.immortal = false;
            }
        }

        this.die = function () {
            if (this.dead == true && this.invulnerable == false) {
                this.hurtTime += 0.2;
                this.accelerationX = this.dx + 40 * this.hurtTime * cos(-90);
                this.accelerationY = this.dy + 40 * this.hurtTime * sin(-90) + (9.81 / 2) * sq(this.hurtTime);
                image(this.image[26], this.accelerationX, this.accelerationY, 35, 37);
            }
        };
    };
}