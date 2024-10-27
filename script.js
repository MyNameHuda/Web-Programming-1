let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ name: item, price: price });
    total += price;
    updateCart();
    alert(item + ' telah ditambahkan ke keranjang!');
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.onclick = () => removeFromCart(index);
        
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    totalPrice.textContent = 'Total: Rp ' + total.toLocaleString();
}

function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    total -= removedItem.price;
    updateCart();
    alert(removedItem.name + ' telah dihapus dari keranjang!');
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang Anda kosong!');
    } else {
        alert('Terima kasih! Pembayaran berhasil dilakukan.');
        cart = [];
        total = 0;
        updateCart();
    }
}

function clearCart() {
    if (cart.length === 0) {
        alert('Keranjang Anda kosong!');
    } else {
        cart = []; // Kosongkan keranjang
        total = 0; // Reset total
        updateCart(); // Perbarui tampilan keranjang
        alert('Semua item telah dihapus dari keranjang!');
    }
}

function filterProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const productGrid = document.getElementById('productGrid');
    const products = productGrid.getElementsByClassName('product-card');

    for (let i = 0; i < products.length; i++) {
        const productName = products[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (productName.includes(input)) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}
