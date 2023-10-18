const WebSocket = require('ws');
const http = require('http');

const server = http.createServer((req, res) => {
    // Puedes configurar rutas HTTP aquí si es necesario
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    // Manejar conexiones de clientes WebSocket aquí

    // Por ejemplo, enviar un mensaje a un cliente cuando se conecta
    ws.send('Conexión exitosa');

    // Manejar mensajes del cliente
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);
        // Aquí puedes procesar el mensaje y enviarlo a otros clientes si es necesario
    });
});

server.listen(3000, () => {
    console.log('Servidor WebSocket escuchando en el puerto 3000');
});