class RestaurantServer {
    constructor() {
      this.clients = [];
    }
  
    handleButtonPress(message) {
      // Procesar el mensaje recibido (mensaje de botón) desde el cliente
      console.log(`Mensaje recibido en la caja: ${message}`);
    }
  }
  
  module.exports = RestaurantServer;