const products = [
    { id: 1, name: 'NIKE', price: 100, img: 'data:image/jpeg;base64,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' },
    { id: 2, name: 'ADIDAS', price: 250, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_5vt8YEDPEABDRrwwJYvvOZakicDNrsMNw&s' },
    { id: 3, name: 'SHOE SNEKERS', price: 100, img: 'https://www.pinkvilla.com/images/2023-02/1676613712_screenshot_20230217-112835_instagram.jpg' },
    { id: 4, name: 'AIR JORDAN', price: 270, img: 'https://images-cdn.ubuy.co.in/6537fa249d790340f86e4cd7-nike-men-39-s-lunar-mvp-pregame.jpg' },
    { id: 5, name: 'AIR JORDAN 1', price: 350, img: 'https://www.mensjournal.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM3MjQyMzI2NjA3MzY1/mj-618_348_michael-air-jordans-tktktktk.jpg' },
    { id: 6, name: 'BATA', price: 550, img: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/J7kANKsGXo1RhQgpS7pBJLow' },
    { id: 7, name: 'MULES', price: 300, img: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/j85k9Q4RzyAh6G3fKriTEEpw' },
    { id: 8, name: 'OXFORD', price: 250, img: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/kRbAKkejA5gk9NBoSudQX13T' },
    { id: 9, name: 'PUMPS', price: 450, img: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/joFU1hxwmD6zrVFdVqE2bcv6' },
    { id: 10, name: 'COMBAT BOOTS', price: 350, img: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/e4sp3y14BrnM6XJJyVzG2kUE' },
    { id: 11, name: 'CLOGS', price: 650, img: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/7c8ofv2BUf5SmVNsT1XCKei7' },
    { id: 12, name: 'WEDGES', price: 120, img: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/KmpuGkhLPNvPxyKJ7qrLWUUJ' },
    { id: 13, name: 'CHUKKA BOOTS', price: 750, img: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/b4UikitivJDmkc71hex3uMH7' },
    { id: 14, name: 'BATA 1', price: 850, img: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/5U4dajyeWAuQXQxUNVXPUaJU' },
    { id: 15, name: 'JOGGING SHOE', price: 150, img: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//cultgear-content/MdMJY3ARwEbq9U2ExTDPfGUv' },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];


const productList = document.getElementById('product-list');
if (productList) {
    displayProducts(products);

    document.getElementById('sort').addEventListener('change', (e) => {
        const sortBy = e.target.value;
        let sortedProducts = [...products];
        if (sortBy === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        displayProducts(sortedProducts);
    });
}

function displayProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'product';
        productEl.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="viewProduct(${product.id})">View</button>
        `;
        productList.appendChild(productEl);
    });
}

function viewProduct(id) {
    localStorage.setItem('selectedProduct', id);
    window.location.href = 'product.html';
}


const productDetail = document.getElementById('product-detail');
if (productDetail) {
    const productId = localStorage.getItem('selectedProduct');
    const product = products.find(p => p.id == productId);
    if (product) {
        productDetail.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
        `;
        document.getElementById('addToCartBtn').onclick = () => addToCart(product.id);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
}


const cartItems = document.getElementById('cart-items');
if (cartItems) {
    displayCartItems();

    document.getElementById('checkoutBtn').onclick = () => {
        alert('Checkout not implemented in this demo');
    };
}

function displayCartItems() {
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <h4>${item.name}</h4>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItemEl);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}