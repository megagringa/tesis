document.addEventListener("DOMContentLoaded", function() {
    const menuList = document.getElementById("menu-list");
    const cartList = document.getElementById("cart-list");
    const totalDisplay = document.getElementById("total-price");
    const clearCartButton = document.getElementById("clear-cart");

    // Array para almacenar los elementos del menú
    
    const menuItems = [
        {
            name: "Plato 1",
            price: 10.99,
            image: "img/fxs.jpg" // Agrega la URL de la imagen
        },
        {
            name: "Plato 2",
            price: 12.99,
            image: "url_de_la_imagen_2.jpg" // Agrega la URL de la imagen
        },
        // Otros elementos del menú con imágenes

        {
            name: "Plato 2",
            price: 2.99,
            image: "url_de_la_imagen_2.jpg" // Agrega la URL de la imagen
        },

        {
            name: "Plato 2",
            price: 3.99,
            image: "url_de_la_imagen_2.jpg" // Agrega la URL de la imagen
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
            li.textContent = `${item.name} - ${item.price} USD`;
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

    // Renderizar elementos del menú
    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}"> <!-- Mostrar imagen desde la carpeta "img" -->
                <h3>${item.name}</h3>
                <p>${item.price} USD</p>
                <button class="add-to-cart">Agregar</button>
            </div>
        `;
        menuList.appendChild(li);

        const addButton = li.querySelector(".add-to-cart");
        addButton.addEventListener("click", () => addToCart(item));
    });
});