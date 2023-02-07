const cardsContainer = document.getElementById('product-container')

const shoesDos = [];
shoesDos.push({
  name: "Nike Airforce 1",
  image: "./img/airforce-1.jpg",
  size: ["39", "40", "41", "42"],
  price: 78,
  description: "Zapatico",
});
shoesDos.push({
  name: "Nike Airforce 2",
  image: "./img/airforce-1.jpg",
  size: ["39", "40", "41", "42"],
  price: 120,
  description: "Zapatico",
});
shoesDos.push({
  name: "Nike Airforce 3",
  image: "./img/airforce-1.jpg",
  size: ["39", "40", "41", "42"],
  price: 45,
  description: "Zapatico",
});
shoesDos.push({
  name: "Nike Airforce 4",
  image: "./img/airforce-1.jpg",
  size: ["39", "40", "41", "42"],
  price: 60,
  description: "Zapatico",
});

function renderProducts(array) {
  for (product of shoesDos) {
    const productCard = document.createElement("div");
    //    agregamos clase
    productCard.classList.add("claseCss");
    // agregamos img
    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.classList.add("productImg")
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement("div");
  
    const productPrice = document.createElement("p");
    productPrice.innerText = product.name;
  
    const productName = document.createElement("p");
    productName.innerText = "$" + product.price;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure')
  
    const productImgCart = document.createElement('img');
    img.setAttribute('src','./img/airforce-1.jpg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
  
}
renderProducts()