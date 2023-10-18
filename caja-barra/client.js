document.addEventListener("DOMContentLoaded", function() {
    const notificationList = document.getElementById("notification-list");

    const socket = new WebSocket("ws://tu-servidor-websocket");

    socket.addEventListener("open", () => {
        console.log("Conectado al servidor WebSocket");
    });

    socket.addEventListener("message", (event) => {
        const message = JSON.parse(event.data);
        // Manejar el mensaje recibido desde el servidor y mostrarlo en notificaciones
        console.log("Mensaje recibido:", message);

        // Crear un elemento de lista para mostrar la notificación
        const li = document.createElement("li");
        li.textContent = message;

        // Agregar la notificación a la lista
        notificationList.appendChild(li);
    });
});