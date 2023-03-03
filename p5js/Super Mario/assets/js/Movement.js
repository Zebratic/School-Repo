function Movement() {

    this.e = false;
    this.t = 400;
    this.update = function () {


        this.e = false

        if (player.x >= 300) {
            player.speed_v2 = 4;
            player.moveSpeed = 0;
        } else {
            player.speed_v2 = 0;
            if (player.moveRight == true && maploader.flipRight == false) {
                player.moveSpeed = 4;
            }
            if (player.x < player.player_width / 2) {
                maploader.flipLeft = true;
            }
            if (player.moveLeft == true && maploader.flipLeft == false) {
                player.moveSpeed = 0;
            }
        }

        for (let i = 0; i <= maploader.x.length - 1; i++) {
            if (i >= 0 && i <= 230 || i >= 1000 && i <= 1012 || i >= 1050 && i <= 1081 || i >= 1100 && i <= 1198 || i >= 1300 && i <= 1302 || i >= 1350 && i <= 1350 || i >= 1400 && i <= 1401) {
                if (player.moveRight == true && maploader.flipRight == false && player.dead == false) {
                    maploader.x[i] -= player.speed_v2;
                }
            }
        }

        if (player.moveRight == true && maploader.flipRight == false && player.dead == false) {
            for (let i = 0; i <= graphics.kfx.length - 1; i++)      graphics.kfx[i] -= player.speed_v2;
            for (let i = 0; i <= graphics.kozfx.length - 1; i++)    graphics.kozfx[i] -= player.speed_v2;
            for (let i = 0; i <= graphics.nfx.length - 1; i++)      graphics.nfx[i] -= player.speed_v2;
            for (let i = 0; i <= graphics.kdbx.length - 1; i++)     graphics.kdbx[i] -= player.speed_v2;
            for (let i = 0; i <= graphics.ndbx.length - 1; i++)     graphics.ndbx[i] -= player.speed_v2;
            for (let i = 0; i <= graphics.kbx.length - 1; i++)      graphics.kbx[i] -= player.speed_v2;
            for (let i = 0; i <= graphics.kozbx.length - 1; i++)    graphics.kozbx[i] -= player.speed_v2;
            for (let i = 0; i <= graphics.nbx.length - 1; i++)      graphics.nbx[i] -= player.speed_v2;

        }

        if (player.moveRight == true && maploader.flipRight == false) {
            maploader.speed_v2 = -player.speed_v2;
        } else {
            maploader.speed_v2 = 0;
        }

        if (player.moveRight == true && maploader.flipRight == false)
        {
            if (mushroom.moveLeft == true && mushroom.flipLeft == false)
                mushroom.speed_v2 = player.speed_v2 + 3;
            
            if (mushroom.moveRight == true && mushroom.flipRight == false)
                mushroom.speed_v2 = (player.speed_v2 - 3) * -1;

            if (mushroom.animation == true)
                mushroom.x -= player.speed_v2;
        }
        else 
            mushroom.speed_v2 = 3;

        if (player.moveRight == true && maploader.flipRight == false)
        {
            if (money.visible == true)
                money.speed_v2 = player.speed_v2;
        }
        else
            money.speed_v2 = 0;

        if (player.moveRight == true && maploader.flipRight == false && player.dead == false)
        {
            if (flower.visible == true || flower.animation == true)
                flower.speed_v2 = player.speed_v2;
            
        }
        else
            flower.speed_v2 = 0;

        if (player.moveRight == true && maploader.flipRight == false && player.dead == false) {
            castle.rx -= player.speed_v2;
            castle.zx -= player.speed_v2;
            castle.vx -= player.speed_v2;
        }

        for (var i = 1; i <= goomba.x.length - 1; i++) {
            if (player.moveRight == true && maploader.flipRight == false && goomba.start[i] == false && player.dead == false) {
                goomba.x[i] -= player.speed_v2;
                goomba.speed_v2[i] = 0;

                if (abs(player.x - goomba.x[1]) < 470) {
                    goomba.start[1] = true;
                }

                if (abs(player.x - goomba.x[2]) < 470) {
                    goomba.start[2] = true;
                }

                if (abs(player.x - goomba.x[3]) < 470) {
                    goomba.start[3] = true;
                    goomba.start[4] = true;
                }

                if (abs(player.x - goomba.x[5]) < 470) {
                    goomba.start[5] = true;
                    goomba.start[6] = true;
                }

                if (abs(player.x - goomba.x[7]) < 470) {
                    goomba.start[7] = true;
                    goomba.start[8] = true;
                }

                if (abs(player.x - goomba.x[9]) < 470) {
                    goomba.start[9] = true;
                    goomba.start[10] = true;
                }

                if (abs(player.x - goomba.x[11]) < 470) {
                    goomba.start[11] = true;
                    goomba.start[12] = true;
                }

                if (abs(player.x - goomba.x[13]) < 470) {
                    goomba.start[13] = true;
                    goomba.start[14] = true;
                }

                if (abs(player.x - goomba.x[15]) < 470) {
                    goomba.start[15] = true;
                    goomba.start[16] = true;
                }

            } else {
                if (goomba.x[i] > -400) {

                    if (player.moveRight == true && maploader.flipRight == false && player.dead == false) {

                        if (goomba.moveLeft[i] == true && goomba.flipLeft[i] == false && goomba.dead[i] == false) {
                            goomba.speed_v2[i] = player.speed_v2 + 2;
                        }
                        if (goomba.moveRight[i] == true && goomba.flipRight[i] == false && goomba.dead[i] == false) {
                            goomba.speed_v2[i] = (player.speed_v2 - 2) * -1;
                        }
                    } else {
                        goomba.speed_v2[i] = 2;
                    }
                } else {
                    goomba.dead[i] = true;
                    goomba.dead[i] = millis() - 1;

                }
            }
        }

        for (var i = 1; i <= koopa.x.length - 1; i++) {
            if (player.moveRight == true && maploader.flipRight == false && koopa.start[i] == false && player.dead == false) {
                koopa.x[i] -= player.speed_v2;
                koopa.speed_v2[i] = 0;

                if (abs(player.x - koopa.x[1]) < 470) {
                    koopa.start[1] = true;
                }

            } else {
                if (koopa.x[i] > -400) {

                    if (player.moveRight == true && maploader.flipRight == false && player.dead == false) {

                        if (koopa.vhmi[i] == "s") {
                            koopa.speed_v2[1] = 2;

                            if (koopa.moveLeft[i] == true && koopa.flipLeft[i] == false) {
                                koopa.speed_v2[i] = player.speed_v2 + 2;
                            }
                            if (koopa.moveRight[i] == true && koopa.flipRight[i] == false) {
                                koopa.speed_v2[i] = (player.speed_v2 - 2) * -1;
                            }
                        } else {
                            if (koopa.vhmi[i] == "b") {
                                koopa.speed_v2[i] = -4;
                            }
                            if (koopa.vhmi[i] == "j") {
                                koopa.speed_v2[i] = -4;
                            }
                        }

                    } else {
                        if (koopa.vhmi[i] == "b" || koopa.vhmi[i] == "j") {
                            koopa.speed_v2[i] = 0;
                        }
                        if (koopa.vhmi[i] == "s") {
                            koopa.speed_v2[1] = 2;
                        }
                    }
                } else {
                    koopa.dead[i] = true;
                    koopa.dead[i] = millis() - 1;

                }
            }
        }
    }
}