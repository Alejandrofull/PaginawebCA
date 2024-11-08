let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');
let listProduct = [];
let carts = [];

// Array de productos directamente en JavaScript
const toallas = [
    { "id": 1, "name": "TOALLA DELFIN", "price": 10, "imaget": "imaget/toalla1.jpg" },
    { "id": 2, "name": "TOALLA MARINERO", "price": 10, "imaget": "imaget/toalla2.jpg" },
    { "id": 3, "name": "TOALLA DOGS", "price": 10, "imaget": "imaget/toalla3.jpg" },
    { "id": 4, "name": "TOALLA ROSA COLOR ENTERO", "price": 15, "imaget": "imaget/toalla4.jpg" },
    { "id": 5, "name": "TOALLA VERDE COLOR ENTERO", "price": 15, "imaget": "imaget/toalla5.jpg" },
    { "id": 6, "name": "TOALLA AZULA COLOR ENTERO", "price": 15, "imaget": "imaget/toalla6.jpg" }
];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if (listProduct.length > 0) {
        listProduct.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `
                <img src="${product.imaget}" alt="">
                <h2>${product.name}</h2>
                <div class ="price">$${product.price}</div>
                <button class="addCart">
                    Añadir al carrito
                </button>
            `;
            listProductHTML.appendChild(newProduct);
        });
    }
};

listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        let product_id = positionClick.parentElement.dataset.id;
        addToCart(product_id);
    }
});

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

const addToCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(carts));
};

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
            <div class="imaget">
                    <img src="${info.imaget}" alt="">
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

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantity(product_id, type);
    }
});

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

const initApp = () => {
    listProduct = toallas; // Asigna directamente los datos de toallas
    addDataToHTML();

    const storedCart = localStorage.getItem('cart');
    carts = storedCart ? JSON.parse(storedCart) : [];
    addToCartHTML();
};

initApp();
