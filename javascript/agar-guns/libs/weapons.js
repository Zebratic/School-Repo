const { Weapon } = require('./player');

const predefinedWeapons = [
    new Weapon("Pistol", damage=10, range=100, firingRate=1, maxAmmo=10),
    new Weapon("Shotgun", damage=20, range=50, firingRate=0.5, maxAmmo=5),
    new Weapon("Machine Gun", damage=5, range=200, firingRate=2, maxAmmo=30),
    new Weapon("Sniper", damage=50, range=500, firingRate=0.5, maxAmmo=5),
];

module.exports = {
    predefinedWeapons: predefinedWeapons
};