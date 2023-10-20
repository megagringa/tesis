// client.js
const WebSocket = require('ws'); // Importar la biblioteca 'ws'

const clientWebSocket = new WebSocket('ws://localhost:8080'); // Establecer la URL del servidor WebSocket

clientWebSocket.onopen = () => {
  console.log('Conexión WebSocket establecida');
};

clientWebSocket.onmessage = (event) => {
  // Manejar mensajes recibidos del servidor (caja)
  console.log('Mensaje recibido del servidor: ' + event.data);
};

// Función para enviar mensajes al servidor cuando se presionan los botones
function sendButtonMessage(action) {
  const message = {
    action: action, // El nombre de la acción, por ejemplo, 'callWaiter'
    // Otros datos relacionados con la acción, si es necesario
  };
  clientWebSocket.send(JSON.stringify(message));
}

// Escuchar eventos de los botones y enviar mensajes al servidor
document.getElementById('call-waiter').addEventListener('click', () => {
  sendButtonMessage('callWaiter');
});

document.getElementById('order-drink').addEventListener('click', () => {
  sendButtonMessage('orderDrink');
});

document.getElementById('request-bill').addEventListener('click', () => {
  sendButtonMessage('requestBill');
});

document.getElementById('cancel-order').addEventListener('click', () => {
  sendButtonMessage('cancelOrder');
});