function renderCategory(category) {
    const container = document.getElementById('product-list');
    const filteredProducts = products.filter(p => p.category === category);
    
    container.innerHTML = filteredProducts.map(p => `
        <div class="product-card">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="product-details">
                <h3>${p.name}</h3>
                <p class="product-price">${p.price}</p>
                <a href="product-detail.html?id=${p.id}" class="btn" style="padding: 10px 25px;">查看詳情</a>
            </div>
        </div>
    `).join('');
}

function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === id);

    if (product) {
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-eng-name').innerText = product.englishName;
        document.getElementById('product-price').innerText = product.price;
        document.getElementById('product-desc').innerText = product.description;
        document.getElementById('product-img').src = product.image;
        document.title = `${product.name} | AURA Skincare`;
    }
}
