document.addEventListener("DOMContentLoaded", function() {
    const menuList = document.getElementById("menu-list");
    const cartList = document.getElementById("cart-list");
    const totalDisplay = document.getElementById("total-price");
    const clearCartButton = document.getElementById("clear-cart");
    const callWaiterButton = document.getElementById("call-waiter");
    const orderDrinkButton = document.getElementById("order-drink");
    const requestBillButton = document.getElementById("request-bill");
    const cancelOrderButton = document.getElementById("cancel-order");

    // Array para almacenar los elementos del menú
    
    const menuItems = [
        {
            name: "Fideos con Salsa",
            price: 1200,
            image: "cliente/img/fxs.jpg" // Agrega la URL de la imagen
        },
        {
            name: "Ñoquis con Salsa",
            price: 1500,
            image: "cliente/img/nxs.jpeg" // Agrega la URL de la imagen
        },
        // Otros elementos del menú con imágenes

        {
            name: "Ravioles con Salsa",
            price: 1350,
            image: "cliente/img/rxs.jpg" // Agrega la URL de la imagen
        },

        {
            name: "Canelones con Salsa",
            price: 1425,
            image: "cliente/img/cxs.jpg" // Agrega la URL de la imagen
        },
    ];

    // Inicializar el carrito como un array vacío
    const cart = [];

    // Función para agregar elementos al carrito
    function addToCart(item) {
        cart.push(item);
        renderCart();
    }

    // Función para renderizar el carrito
    function renderCart() {
        cartList.innerHTML = "";
        let totalPrice = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price} $`;
            cartList.appendChild(li);
            totalPrice += item.price;
        });

        totalDisplay.textContent = totalPrice.toFixed(2);
    }

    // Función para limpiar el carrito
    clearCartButton.addEventListener("click", function() {
        cart.length = 0;
        renderCart();
    });

    // Funciones para mostrar alertas cuando se presionan los botones
    callWaiterButton.addEventListener("click", function() {
        alert("¡Llamando al mesero!");
    });

    orderDrinkButton.addEventListener("click", function() {
        alert("¡Pedido de bebida artesanal realizado!");
    });

    requestBillButton.addEventListener("click", function() {
        alert("¡Solicitando la cuenta!");
    });

    cancelOrderButton.addEventListener("click", function() {
        alert("¡Pedido cancelado!");
    });

    // Renderizar elementos del menú
    menuItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;

        const h3 = document.createElement("h3");
        h3.textContent = item.name;

        const p = document.createElement("p");
        p.textContent = `${item.price} $`;

        const addButton = document.createElement("button");
        addButton.textContent = "Agregar";
        addButton.classList.add("add-to-cart");

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(addButton);

        menuList.appendChild(div);

        addButton.addEventListener("click", () => addToCart(item));
    });
});