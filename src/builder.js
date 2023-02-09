const shoes = [
    {
        id: "1",
        name: "Nike Airforce 1",
        quantity: 0,
        image: "./img/airforce-1.jpg",
        size: ["39","40","41","42"],
        price: 78,
        description: "Zapatico"       
    },
    {
        id: "2",
        name: "Nike Airforce 2",
        quantity: 0,
        image: "./img/airforce-1.jpg",
        size: ["39","40","41","42"],
        price: 120,
        description: "Zapatico"       
    },
    {
        id: "3",
        name: "Nike Airforce 3",
        quantity: 0,
        image: "./img/airforce-1.jpg",
        size: ["39","40","41","42"],
        price: 45,
        description: "Zapatico"       
    },
    {
        id: "4",
        name: "Nike Airforce 4",
        quantity: 0,
        image: "./img/airforce-1.jpg",
        size: ["39","40","41","42"],
        price: 60,
        description: "Zapatico"       
    }
];

let carrito = [];

var cartItems = localStorage.setItem("cartItems", 0);

function agregarProducto(id) {
    const parsedId = id.toString();
    const item = shoes.find(prod => prod.id === parsedId)
    if(item.quantity === 0) {
    item.quantity = 1;
    carrito.push(item);
    mostrarCarrito(); 
    } else {
        item.quantity = item.quantity + 1;
    }
    addItemsToCart();  
    console.log(carrito);
}

// Codigo del Span del icono de carrito
function addItemsToCart() {
    const cartItems = localStorage.getItem("cartItems");
    const cartIndicator = document.getElementById("cartIndicator");

    if (cartItems == null || cartItems == 0) {
        localStorage.setItem("cartItems", 1);
    } else {
        const itemsToNumber = parseInt(cartItems);
        localStorage.setItem("cartItems", itemsToNumber + 1);
    }
    cartIndicator.innerText = localStorage.getItem("cartItems");
}


document.addEventListener("DOMContentLoaded", function(event) {

    const container = document.getElementById("product-container");


    shoes.forEach(shoe => container.innerHTML += `
        <div class="productImg">
            <img width="70%" src=${shoe.image}>
            <p> ${shoe.name} </p>
            <p> $${shoe.price} </p>
            <button onclick="agregarProducto(${shoe.id})" class="btn btn-primary"> Agregar al carrito </button>
        </div>
    `)

    const cartIndicator = document.getElementById("cartIndicator");

    cartIndicator.innerText = localStorage.getItem("cartItems");
});


const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body')
    
    carrito.map(shoe => modalBody.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${shoe.image}" alt="Card image cap">
    <p> ${shoe.quantity} </p>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `)
}
