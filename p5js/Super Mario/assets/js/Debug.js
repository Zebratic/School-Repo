function Debug() {
    this.enabled = false;
    this.shown_type = "player"; // player, map, misc, enemies
    this.y_pos = 110;

    this.update = function () {
        if (this.enabled) {
            textSize(20);
            this.y_pos = 110;

            switch (this.shown_type) {
                case "player": ShowPlayerInfo(); break;
                case "enemies": ShowEnemiesInfo(); break;
                case "map": ShowMapInfo(); break;
                case "misc": ShowMiscInfo(); break;
            }

            // reset color
            fill(255);
        }
    };

    this.RenderValue = function (name, value) {
        if (value != undefined)
        {
            // if value is true or false, render it in green or red
            if (value == true) fill(0, 255, 0);
            else if (value == false) fill(255, 0, 0);
            else fill(255);

            text(name + ": " + value, 10, this.y_pos);
        }
        
        this.y_pos += 20;
    };
}

function ShowPlayerInfo() {
    debug.RenderValue("player.x", player.x);
    debug.RenderValue("player.y", player.y);
    debug.RenderValue("player.crouch", player.crouch);
    debug.RenderValue("player.jump", player.jump);
    debug.RenderValue("player.lastJump", player.lastJump);
    debug.RenderValue("player.run", player.run);
    debug.RenderValue("player.bottom", player.bottom);
    debug.RenderValue("player.falling", player.falling);
    debug.RenderValue("player.hurtTime", player.hurtTime);
    debug.RenderValue("player.invulnerable", player.invulnerable);
    debug.RenderValue("player.dead", player.dead);
}

function ShowEnemiesInfo() {
    debug.RenderValue("goomba.x", goomba.x);
    debug.RenderValue("goomba.y", goomba.y);
    debug.RenderValue("goomba.dead", goomba.dead);
    debug.RenderValue();
    debug.RenderValue("koopa.x", koopa.x);
    debug.RenderValue("koopa.y", koopa.y);
    debug.RenderValue("koopa.dead", koopa.dead);
}

function ShowMapInfo() {
    debug.RenderValue("castle.vx", castle.vx);
    debug.RenderValue("castle.end", castle.end);
    debug.RenderValue();
    debug.RenderValue("maploader.x", maploader.x);
    debug.RenderValue("maploader.y", maploader.y);
}

function ShowMiscInfo() {
    debug.RenderValue("money.x", money.x);
    debug.RenderValue("money.y", money.y);
    debug.RenderValue("money.rotation", money.rotation);
    debug.RenderValue();
    debug.RenderValue("mushroom.x", mushroom.x);
    debug.RenderValue("mushroom.y", mushroom.y);
    debug.RenderValue();
    debug.RenderValue("flower.x", flower.x);
    debug.RenderValue("flower.y", flower.y);
    debug.RenderValue();
    debug.RenderValue("fireball.x", fireball.x);
    debug.RenderValue("fireball.y", fireball.y);
    debug.RenderValue("fireball.vx", fireball.vx);
    debug.RenderValue("fireball.vy", fireball.vy);
    debug.RenderValue();
    debug.RenderValue("points_animation.x", points_animation.x);
    debug.RenderValue("points_animation.y", points_animation.y);
}