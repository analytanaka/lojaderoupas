const products = [
    { id: 1, name: 'Camiseta', price: 50.00 },
    { id: 2, name: 'Calça', price: 100.00 },
    { id: 3, name: 'Jaqueta', price: 150.00 }
];

// Carrinho de compras
let cart = [];

// Função para exibir a lista de produtos
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productList.appendChild(productItem);
    });
}

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

// Função para exibir o carrinho de compras
function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <h4>${product.name}</h4>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remover</button>
        `;
        cartList.appendChild(cartItem);
        total += product.price;
    });
    
    const totalItem = document.createElement('p');
    totalItem.innerHTML = `<strong>Total: R$ ${total.toFixed(2)}</strong>`;
    cartList.appendChild(totalItem);
}

// Função para remover um produto do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Função para processar o checkout
function checkout() {
    if (cart.length === 0) {
        alert('O carrinho está vazio. Adicione produtos antes de fazer o checkout.');
        return;
    }
    
    // Simulando o processamento do pedido
    alert('Pedido processado com sucesso!');
    cart = [];
    displayCart();
    document.getElementById('checkout-result').innerHTML = 'Pedido processado com sucesso!';
}

// Evento de clique para o botão de checkout
document.getElementById('checkout-btn').addEventListener('click', checkout);

// Inicializando a exibição dos produtos
displayProducts();