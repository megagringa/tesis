const WebSocket = require('ws');

class WebSocketServer {
  constructor(server, restaurantServer) {
    this.wss = new WebSocket.Server({ server });

    this.wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        restaurantServer.handleButtonPress(message);
      });
    });
  }
}

module.exports = WebSocketServer;