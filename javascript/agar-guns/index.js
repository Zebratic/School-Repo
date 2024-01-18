const express = require('express');
const http = require('http');
const expressWs = require('express-ws');
const { ServerManager } = require('./libs/servermanager');
const dotenv = require('dotenv');
const ejs = require('ejs'); // Import ejs renderer
dotenv.config();

const app = express();
const server = http.createServer(app);
const { app: wsApp } = expressWs(app, server);

// Set ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', './pages');

// Game state
const players = [];
const serverManager = new ServerManager(players); // Create an instance of ServerManager

wsApp.ws('/ws', (ws) => {
    // WebSocket connection established
    ws.on('message', (message) => {
        // Handle incoming WebSocket messages
        console.log('Received message:', message);

        const data = JSON.parse(message);
        const { type, payload } = data;

        switch (type) {
            case 'join':
                serverManager.handleJoin(ws, payload); // Use ServerManager to handle join
                break;
            case 'move':
                serverManager.handleMove(ws, payload); // Use ServerManager to handle move
                break;
            case 'shoot':
                serverManager.handleShoot(ws, payload); // Use ServerManager to handle shoot
                break;
            default:
                console.log('Unknown message type:', type);
        }
    });

    ws.on('close', () => {
        // WebSocket connection closed
        console.log('WebSocket connection closed');
        serverManager.handleDisconnect(ws); // Use ServerManager to handle disconnect
    });

    ws.on('error', (err) => {
        // Error occurred
        console.log('Error occurred:', err);
        serverManager.handleDisconnect(ws); // Use ServerManager to handle disconnect
    });

    // setup player into the game
    serverManager.handleJoin(ws, { id: ws.id, name: 'Player' });
});

// Render game.ejs for GET /
app.get('/', (req, res) => {
    res.render('game');
});

server.listen(process.env.PORT, () => {
    console.log('Gameserver listening on http://localhost:' + process.env.PORT);
});
