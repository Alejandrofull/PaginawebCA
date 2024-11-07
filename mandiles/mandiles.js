let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');

let listProduct = [];
let carts = [];

// Datos de los productos directamente en JavaScript
const mandiles = [
    { "id": 1, "name": "Mandil 1", "price": 200, "imagem": "imagem/mandil1.jpg" },
    { "id": 2, "name": "Mandil 2", "price": 200, "imagem": "imagem/mandil2.jpg" },
    { "id": 3, "name": "Mandil 3", "price": 200, "imagem": "imagem/mandil3.jpg" },
    { "id": 4, "name": "Mandil 4", "price": 200, "imagem": "imagem/mandil4.jpg" },
    { "id": 5, "name": "Mandil 5", "price": 200, "imagem": "imagem/mandil5.jpg" },
    { "id": 6, "name": "Mandil 6", "price": 200, "imagem": "imagem/mandil6.jpg" },
    { "id": 7, "name": "Mandil 7", "price": 200, "imagem": "imagem/mandil7.jpg" },
    { "id": 8, "name": "Mandil 8", "price": 200, "imagem": "imagem/mandil8.jpg" },
    { "id": 9, "name": "Mandil 9", "price": 200, "imagem": "imagem/mandil9.jpg" },
    { "id": 10, "name": "Mandil 10", "price": 200, "imagem": "imagem/mandil10.jpg" }
];

// Evento para abrir el carrito
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// Evento para cerrar el carrito
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

// Función para agregar los datos de los productos al HTML
const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if (listProduct.length > 0) {
        listProduct.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.imagem}" alt="">
                <h2>${product.name}</h2>
                <div class ="price">$${product.price}</div>
                <button class="addCart">
                    Add To Cart
                </button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }
};

// Evento para agregar productos al carrito al hacer clic en "Add To Cart"
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
});

// Función para agregar productos al carrito
const addToCart = (product_id) => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
    if (positionThisProductInCart < 0) {
        carts.push({
            product_id: product_id,
            quantity: 1
        });
    } else {
        carts[positionThisProductInCart].quantity += 1;
    }
    addToCartHTML();
    addToCartToMemory();
};

// Guarda el carrito en localStorage
const addToCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts)); // Guardamos `carts` como JSON
};

// Muestra los productos del carrito en el HTML
const addToCartHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            totalQuantity += cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            let positionProduct = listProduct.findIndex((value) => value.id == cart.product_id);
            let info = listProduct[positionProduct];
            newCart.innerHTML = `        
                <div class="imagem">
                    <img src="${info.imagem}" alt="">
                </div>
                <div class="name">
                    ${info.name}
                </div>
                <div class="totalprice">
                    $${info.price * cart.quantity}
                </div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
            listCartHTML.appendChild(newCart);
        });
    }
    iconCartSpan.innerText = totalQuantity;
};

// Evento para cambiar la cantidad de productos en el carrito
listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantity(product_id, type);
    }
});

// Función para aumentar o reducir la cantidad de un producto en el carrito
const changeQuantity = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if (positionItemInCart >= 0) {
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity += 1;
                break;
            case 'minus':
                let valueChange = carts[positionItemInCart].quantity - 1;
                if (valueChange > 0) {
                    carts[positionItemInCart].quantity = valueChange;
                } else {
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addToCartToMemory();
    addToCartHTML();
};

// Inicializa la aplicación
const initApp = () => {
    listProduct = mandiles; // Asigna directamente los datos de mandiles
    addDataToHTML();

    const storedCart = localStorage.getItem('cart');
    carts = storedCart ? JSON.parse(storedCart) : [];
    addToCartHTML();
};

initApp();
