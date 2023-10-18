const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const app = express();

// Configurar el servidor HTTP y WebSocket en el mismo puerto
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    // Manejar conexiones de clientes WebSocket aquí

    ws.on('message', (message) => {
        // Cuando se recibe un mensaje de la primera parte, procesarlo y reenviarlo a otros clientes
        console.log(`Mensaje recibido de la primera parte: ${message}`);
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

app.use(express.static('public')); // Sirve los archivos HTML y JavaScript de la segunda parte desde la carpeta 'public'

server.listen(3000, () => {
    console.log('Servidor WebSocket escuchando en el puerto 3000');
});