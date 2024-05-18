const nameElement = document.querySelector("#name");
const searchInput = document.querySelector("#search");
const main = document.querySelector("#main");
const cartElement = document.getElementById("cartItems");
const totalPriceElement = document.getElementById("totalPrice");
let products;
let cart = [];

fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => {
        products = json;
        displayProducts(json);
    });

function displayProducts(products) {
    main.innerHTML = '';
    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card", "shadow", "d-flex", "flex-wrap", "overflow-hidden");
        card.style.width = "350px";
        card.style.height = "450px";
        card.style.border = "none";

        card.innerHTML = `
            <div class='flex-column'>
                <div class="w-50" style='height: 200px;'>
                    <img class="card-img-top w-100 h-100"  src="${product.image}" alt="Card image">
                </div>
                <div class="card-body">
                    <h4 class="card-title">${product.title}</h4>
                    <div class="overflow-hidden" style='height:70px;'>
                        <p class="card-text w-100 h-100 ">${product.description}</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <h4 class='mt-2'>Price: $${product.price}</h4>
                        <button class="btn btn-primary mt-2" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        main.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    cart.push(product);
    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    cartElement.innerHTML = "";
    let totalPrice = 0;
    cart.forEach((product, index) => {
        cartElement.innerHTML += `
            <div class="d-flex flex-column  justify-content-between mb-2">
                <div class="d-flex justify-content-center align-items-center" style='width:250px; height:150px''>
                    <img class="card-img-top w-100 h-100"  src="${product.image}" alt="Card image">
                </div>
                <p>${product.title}</p>
                <p>$${product.price}</p>
                <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Delete</button>
            </div>
        `;
        totalPrice += product.price;
    });
    totalPriceElement.innerHTML = `<strong>Hammasi: $${totalPrice}</strong>`;
}

function toggleCart() {
    const cartElement = document.getElementById("cart");
    const cartToggleBtn = document.getElementById("cartToggleBtn");

    if (cartElement.style.transform === "translateX(100%)") {
        cartElement.style.transform = "translateX(0)";
        cartToggleBtn.textContent = "Ortga qaytish";
    } else {
        cartElement.style.transform = "translateX(100%)";
        cartToggleBtn.textContent = "Shooping Haridlar";
    }
}

search.addEventListener("input", function () {
    const value = search.value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(value));
    displayProducts(filteredProducts);
});

let AuthName = localStorage.getItem("user");
nameElement.textContent = `Salom ${AuthName}`;


document.body.addEventListener('click', function(event) {
    const cartElement = document.getElementById("cart");
    const cartToggleBtn = document.getElementById("cartToggleBtn");


    if (!cartElement.contains(event.target) && cartElement.style.transform === "translateX(0)") {
        cartElement.style.transform = "translateX(100%)"; 
        cartToggleBtn.textContent = "Shooping Haridlar";
    }
});