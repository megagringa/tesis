document.addEventListener("DOMContentLoaded", function() {
    const notificationList = document.getElementById("notification-list");

    // Función para mostrar una notificación en la lista y eliminarla después de 5 segundos
    function showNotification(message) {
        const li = document.createElement("li");
        li.textContent = message;
        notificationList.appendChild(li);

        // Eliminar la notificación después de 5 segundos
        setTimeout(() => {
            notificationList.removeChild(li);
        }, 5000);
    }

    // Función para generar notificaciones aleatorias
    function generateRandomNotification() {
        const notifications = [
            "¡Llamado de cliente para el mesero!",
            "¡Pedido de bebida artesanal solicitado!",
            "¡Solicitud de la cuenta realizada!",
            "¡Pedido cancelado por el cliente!"
        ];

        const randomIndex = Math.floor(Math.random() * notifications.length);
        const randomNotification = notifications[randomIndex];
        showNotification(randomNotification);
    }

    // Generar notificaciones aleatorias cada 10 segundos
    setInterval(() => {
        generateRandomNotification();
    }, 10000);
});