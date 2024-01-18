class Player {
    constructor(id, name, x, y, health, maxHealth, weapon) {
        this.id = id;
        this.name = name;
        this.speed = 
        this.x = x;
        this.y = y;
        this.health = health;
        this.maxHealth = maxHealth;
        this.weapon = weapon;

        this.projectiles = [];
    }
}

class Weapon {
    constructor(name, damage = 10, range = 100, firingRate = 1, maxAmmo = 10) {
        this.name = name;
        this.damage = damage;
        this.range = range;
        this.firingRate = firingRate;
        this.ammo = maxAmmo;
        this.maxAmmo = maxAmmo;
    }
}

class Projectile {
    constructor(id, x, y, angle, speed, damage, range) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = speed;
        this.damage = damage;
        this.range = range;
    }
}

module.exports = {
    Player: Player,
    Weapon: Weapon,
    Projectile: Projectile
}