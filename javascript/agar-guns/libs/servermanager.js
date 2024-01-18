const { Player, Weapon, Projectile } = require('./player');
const { predefinedWeapons } = require('./weapons');

class ServerManager {
    constructor() {
        this.players = [];
        this.map = {
            width: 1000,
            height: 1000
        };
    }

    addPlayer(id, name, maxHealth, weapon) {
        // spawn random position
        const x = Math.random() * this.map.width;
        const y = Math.random() * this.map.height;

        const player = new Player(id, name, x, y, maxHealth, maxHealth, weapon);
        
        this.players.push(player);
    }

    removePlayer(id) {
        this.players = this.players.filter(player => player.id !== id);
    }

    getPlayer(id) {
        return this.players.find(player => player.id === id);
    }

    getAllPlayers(localplayer_id) {
        // return all players, but have a boolean to indicate if it's the local player
        return this.players.map(player => {
            return {
                id: player.id,
                name: player.name,
                x: player.x,
                y: player.y,
                health: player.health,
                maxHealth: player.maxHealth,
                weapon: player.weapon,
                localplayer: player.id === localplayer_id
            }
        });
    }

    handleJoin(ws, payload) {
        const { id, name } = payload;
        this.addPlayer(id, name, 100, predefinedWeapons[0]); // pistol as default weapon
        ws.send(
            JSON.stringify({
                type: 'welcome',
                players: this.getAllPlayers(id)
            })
        );
    }

    handleMove(ws, payload) {
        const { id, x, y } = payload;
        const player = this.getPlayer(id);
        if (player) {
            player.x = x;
            player.y = y;
        }
    }

    handleShoot(ws, payload) {
        const { id, x, y, angle } = payload;
        const player = this.getPlayer(id);
        if (player) {
            const projectile = new Projectile(id, x, y, angle);
            player.projectiles.push(projectile);
        }
    }

    handleDisconnect(ws) {
        this.removePlayer(ws.id);
    }

    update() {
        this.players.forEach(player => {
            player.projectiles.forEach(projectile => {
                projectile.x += projectile.speed * Math.cos(projectile.angle);
                projectile.y += projectile.speed * Math.sin(projectile.angle);
                projectile.range -= projectile.speed;
            });
            player.projectiles = player.projectiles.filter(projectile => projectile.range > 0);
        });
    }

    getState() {
        return this.players;
    }

    getUpdate() {
        return this.players.map(player => {
            return {
                id: player.id,
                projectiles: player.projectiles
            }
        });
    }

    getPlayers() {
        return this.players.map(player => {
            return {
                id: player.id,
                name: player.name,
                x: player.x,
                y: player.y,
                health: player.health,
                maxHealth: player.maxHealth,
                weapon: player.weapon
            }
        });
    }

    getProjectiles() {
        return this.players.map(player => {
            return {
                id: player.id,
                projectiles: player.projectiles
            }
        });
    }

    getProjectilesForPlayer(id) {
        const player = this.getPlayer(id);
        if (player) {
            return player.projectiles;
        }
        return [];
    }
}

module.exports = {
    ServerManager: ServerManager
};
