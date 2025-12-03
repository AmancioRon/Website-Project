

const ADMIN_PASSWORD = "admin123"; 
let orders = JSON.parse(localStorage.getItem('adminOrders')) || [];

function login() {
    const password = document.getElementById('admin-password').value;
    const error = document.getElementById('login-error');

    if (password === ADMIN_PASSWORD) {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        loadInventory();
        loadOrders();
        loadStatistics();
    } else {
        error.textContent = 'Invalid password!';
    }
}

function logout() {
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('admin-login').style.display = 'flex';
    document.getElementById('admin-password').value = '';
    document.getElementById('login-error').textContent = '';
}

function openTab(tabName) {

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });


    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

  
    document.getElementById(tabName).classList.add('active');
    
  
    event.currentTarget.classList.add('active');
}

function loadInventory() {
    const inventoryGrid = document.getElementById('inventory-grid');
    inventoryGrid.innerHTML = '';

    let totalProducts = 0;
    let totalValue = 0;
    const categories = new Set();

    for (const [category, items] of Object.entries(products)) {
        items.forEach(item => {
            totalProducts++;
            totalValue += item.price;
            categories.add(category);
            
            const inventoryItem = document.createElement('div');
            inventoryItem.className = 'inventory-item';
            inventoryItem.setAttribute('data-category', category);
            inventoryItem.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}" 
                         onerror="this.src='https://img.icons8.com/color/96/box.png'"
                         onclick="previewImage('${item.image}', '${item.name}')">
                    <div class="image-overlay">Click to preview</div>
                </div>
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p class="item-specs">${truncateText(item.specs, 80)}</p>
                    <div class="item-meta">
                        <div class="item-price price-formatted">${formatPrice(item.price)}</div>
                        <div class="item-category">${category}</div>
                        <div class="item-id">ID: ${item.id}</div>
                    </div>
                </div>
                <div class="item-actions">
                    <button onclick="editProduct('${category}', '${item.id}')" class="btn btn-small">
                        <span class="action-icon">✏️</span> Edit
                    </button>
                    <button onclick="deleteProduct('${category}', '${item.id}')" class="btn btn-small btn-danger">
                        <span class="action-icon">🗑️</span> Delete
                    </button>
                </div>
            `;
            inventoryGrid.appendChild(inventoryItem);
        });
    }


    document.getElementById('total-products').textContent = totalProducts;
    document.getElementById('total-value').textContent = formatPrice(totalValue);
    document.getElementById('total-categories').textContent = categories.size;
}

function searchInventory() {
    const searchTerm = document.getElementById('search-inventory').value.toLowerCase();
    const items = document.querySelectorAll('.inventory-item');
    
    items.forEach(item => {
        const name = item.querySelector('h4').textContent.toLowerCase();
        const specs = item.querySelector('.item-specs').textContent.toLowerCase();
        const category = item.getAttribute('data-category').toLowerCase();
        
        if (name.includes(searchTerm) || specs.includes(searchTerm) || category.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function filterInventory() {
    const filterCategory = document.getElementById('filter-category').value;
    const items = document.querySelectorAll('.inventory-item');
    
    items.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (!filterCategory || category === filterCategory) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function previewImage(imageUrl, productName) {
    const modal = document.createElement('div');
    modal.className = 'modal image-preview-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h3>${productName}</h3>
            <img src="${imageUrl}" alt="${productName}" 
                 onerror="this.src='https://img.icons8.com/color/96/box.png'">
            <p>Image URL: <code>${imageUrl}</code></p>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateSpecFields() {
    const category = document.getElementById('product-category').value;
    const specFields = document.getElementById('spec-fields');
    specFields.innerHTML = '';

    if (category === 'motherboards') {
        specFields.innerHTML = `
            <div class="form-row">
                <input type="text" id="spec-socket" placeholder="Socket (e.g., AM5, LGA1700)">
                <input type="text" id="spec-chipset" placeholder="Chipset (e.g., B650, Z790)">
            </div>
            <div class="form-row">
                <input type="text" id="spec-ramType" placeholder="RAM Type (e.g., DDR5)">
                <input type="text" id="spec-formFactor" placeholder="Form Factor (e.g., ATX)">
            </div>
        `;
    } else if (category === 'cpus') {
        specFields.innerHTML = `
            <div class="form-row">
                <input type="text" id="spec-socket" placeholder="Socket (e.g., AM5, LGA1700)">
                <input type="text" id="spec-tdp" placeholder="TDP (e.g., 120W)">
            </div>
            <div class="form-row">
                <input type="checkbox" id="spec-integratedGraphics"> Integrated Graphics
            </div>
        `;
    } else if (category === 'gpus') {
        specFields.innerHTML = `
            <div class="form-row">
                <input type="number" id="spec-vram" placeholder="VRAM (GB)">
                <input type="number" id="spec-power" placeholder="Power Draw (W)">
            </div>
        `;
    } else if (category === 'ram') {
        specFields.innerHTML = `
            <div class="form-row">
                <input type="text" id="spec-type" placeholder="Type (e.g., DDR5)">
                <input type="number" id="spec-speed" placeholder="Speed (MHz)">
            </div>
            <div class="form-row">
                <input type="number" id="spec-capacity" placeholder="Capacity (GB)">
                <input type="text" id="spec-latency" placeholder="Latency (e.g., CL30)">
            </div>
        `;
    } else if (category === 'psus') {
        specFields.innerHTML = `
            <div class="form-row">
                <input type="number" id="spec-wattage" placeholder="Wattage (W)">
                <input type="text" id="spec-rating" placeholder="Rating (e.g., 80+ Gold)">
            </div>
            <div class="form-row">
                <input type="text" id="spec-modular" placeholder="Modular (Full/Semi)">
            </div>
        `;
    } else if (category === 'monitors') {
        specFields.innerHTML = `
            <div class="form-row">
                <input type="number" id="spec-size" placeholder="Size (inches)">
                <input type="text" id="spec-resolution" placeholder="Resolution">
            </div>
            <div class="form-row">
                <input type="number" id="spec-refreshRate" placeholder="Refresh Rate (Hz)">
            </div>
        `;
    }
}

function testImage() {
    const imageUrl = document.getElementById('product-image').value;
    if (!imageUrl) {
        alert('Please enter an image URL first');
        return;
    }

    const testWindow = window.open('', '_blank');
    testWindow.document.write(`
        <html>
            <head><title>Image Test</title></head>
            <body style="margin: 0; padding: 20px; background: #f0f0f0;">
                <h2>Testing Image URL</h2>
                <p>URL: ${imageUrl}</p>
                <img src="${imageUrl}" style="max-width: 100%; max-height: 400px; border: 2px solid #333;" 
                     onerror="alert('Image failed to load! Check the URL.'); this.style.border='2px solid red'"
                     onload="alert('Image loaded successfully!'); this.style.border='2px solid green'">
                <p>If image doesn't appear, the URL may be invalid or blocked.</p>
                <button onclick="window.close()">Close</button>
            </body>
        </html>
    `);
}

function addProduct(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const category = document.getElementById('product-category').value;
    const specs = document.getElementById('product-specs').value;
    const image = document.getElementById('product-image').value;


    const productId = `${category}-${Date.now()}`;
    

    const newProduct = {
        id: productId,
        name: name,
        price: price,
        specs: specs,
        image: image || 'https://img.icons8.com/color/96/box.png',
        category: category.charAt(0).toUpperCase() + category.slice(1).replace('s', '') + (category !== 'prebuilts' && category !== 'laptops' ? 's' : '')
    };


    switch(category) {
        case 'motherboards':
            newProduct.socket = document.getElementById('spec-socket')?.value || '';
            newProduct.chipset = document.getElementById('spec-chipset')?.value || '';
            newProduct.ramType = document.getElementById('spec-ramType')?.value || '';
            newProduct.formFactor = document.getElementById('spec-formFactor')?.value || '';
            break;
        case 'cpus':
            newProduct.socket = document.getElementById('spec-socket')?.value || '';
            newProduct.tdp = parseInt(document.getElementById('spec-tdp')?.value) || 0;
            newProduct.integratedGraphics = document.getElementById('spec-integratedGraphics')?.checked || false;
            break;
        case 'gpus':
            newProduct.vram = parseInt(document.getElementById('spec-vram')?.value) || 0;
            newProduct.power = parseInt(document.getElementById('spec-power')?.value) || 0;
            break;
        case 'ram':
            newProduct.type = document.getElementById('spec-type')?.value || '';
            newProduct.speed = parseInt(document.getElementById('spec-speed')?.value) || 0;
            newProduct.capacity = parseInt(document.getElementById('spec-capacity')?.value) || 0;
            newProduct.latency = document.getElementById('spec-latency')?.value || '';
            break;
        case 'psus':
            newProduct.wattage = parseInt(document.getElementById('spec-wattage')?.value) || 0;
            newProduct.rating = document.getElementById('spec-rating')?.value || '';
            newProduct.modular = document.getElementById('spec-modular')?.value || '';
            break;
        case 'monitors':
            newProduct.size = parseInt(document.getElementById('spec-size')?.value) || 0;
            newProduct.resolution = document.getElementById('spec-resolution')?.value || '';
            newProduct.refreshRate = parseInt(document.getElementById('spec-refreshRate')?.value) || 0;
            break;
    }


    if (!products[category]) {
        products[category] = [];
    }
    products[category].push(newProduct);


    alert('Product added successfully!');
    

    event.target.reset();
    document.getElementById('spec-fields').innerHTML = '';

    loadInventory();
    loadStatistics();
}

function editProduct(category, productId) {
    const product = products[category].find(p => p.id === productId);
    if (product) {
 
        document.getElementById('product-name').value = product.name;
        document.getElementById('product-price').value = product.price;
        document.getElementById('product-category').value = category;
        document.getElementById('product-image').value = product.image;
        document.getElementById('product-specs').value = product.specs;
        

        updateSpecFields();
        

        setTimeout(() => {
            if (product.socket) document.getElementById('spec-socket').value = product.socket;
            if (product.chipset) document.getElementById('spec-chipset').value = product.chipset;
            if (product.ramType) document.getElementById('spec-ramType').value = product.ramType;
            if (product.formFactor) document.getElementById('spec-formFactor').value = product.formFactor;
            if (product.tdp) document.getElementById('spec-tdp').value = product.tdp;
            if (product.vram) document.getElementById('spec-vram').value = product.vram;
            if (product.power) document.getElementById('spec-power').value = product.power;
            if (product.type) document.getElementById('spec-type').value = product.type;
            if (product.speed) document.getElementById('spec-speed').value = product.speed;
            if (product.capacity) document.getElementById('spec-capacity').value = product.capacity;
            if (product.latency) document.getElementById('spec-latency').value = product.latency;
            if (product.wattage) document.getElementById('spec-wattage').value = product.wattage;
            if (product.rating) document.getElementById('spec-rating').value = product.rating;
            if (product.modular) document.getElementById('spec-modular').value = product.modular;
            if (product.size) document.getElementById('spec-size').value = product.size;
            if (product.resolution) document.getElementById('spec-resolution').value = product.resolution;
            if (product.refreshRate) document.getElementById('spec-refreshRate').value = product.refreshRate;
            if (product.integratedGraphics) document.getElementById('spec-integratedGraphics').checked = product.integratedGraphics;
        }, 100);
        

        deleteProduct(category, productId, false);
        

        openTab('add-product');
        alert('Product loaded into edit form. Make changes and click "Add Product" to update.');
    }
}

function deleteProduct(category, productId, showAlert = true) {
    if (!showAlert || confirm('Are you sure you want to delete this product?')) {
        products[category] = products[category].filter(p => p.id !== productId);
        loadInventory();
        loadStatistics();
        if (showAlert) {
            alert('Product deleted!');
        }
    }
}

function loadOrders() {
    const ordersList = document.getElementById('orders-list');
    

    orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<div class="no-orders"><p>No orders yet. Orders will appear here when customers checkout.</p></div>';
        return;
    }
    
    ordersList.innerHTML = '';
    
    orders.forEach((order, index) => {
        const orderElement = document.createElement('div');
        orderElement.className = 'order-item';
        orderElement.innerHTML = `
            <div class="order-header">
                <h4>Order #${index + 1}</h4>
                <span class="order-date">${order.date || new Date().toLocaleDateString()}</span>
            </div>
            <div class="order-details">
                <p><strong>Customer:</strong> ${order.customerName || 'Guest Customer'}</p>
                <p><strong>Items:</strong> ${order.items?.length || 0} items</p>
                <p><strong>Total:</strong> ${formatPrice(order.total || 0)}</p>
            </div>
            <div class="order-actions">
                <button onclick="viewOrderDetails(${index})" class="btn btn-small">View Details</button>
                <button onclick="markAsCompleted(${index})" class="btn btn-small btn-success">Mark Complete</button>
            </div>
        `;
        ordersList.appendChild(orderElement);
    });
}

function clearOrders() {
    if (confirm('Are you sure you want to clear all orders? This cannot be undone.')) {
        localStorage.removeItem('adminOrders');
        orders = [];
        loadOrders();
        alert('All orders cleared!');
    }
}

function viewOrderDetails(orderIndex) {
    const order = orders[orderIndex];
    if (!order) return;
    
    let itemsHTML = '';
    if (order.items && order.items.length > 0) {
        itemsHTML = '<ul class="order-items-list">';
        order.items.forEach(item => {
            itemsHTML += `<li>${item.name} - ${formatPrice(item.price)}</li>`;
        });
        itemsHTML += '</ul>';
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal order-details-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h3>Order Details #${orderIndex + 1}</h3>
            <div class="order-info">
                <p><strong>Date:</strong> ${order.date || 'Unknown'}</p>
                <p><strong>Customer:</strong> ${order.customerName || 'Guest Customer'}</p>
                <p><strong>Total:</strong> ${formatPrice(order.total || 0)}</p>
                <p><strong>Tax (3%):</strong> ${formatPrice(order.tax || 0)}</p>
                <p><strong>Subtotal:</strong> ${formatPrice(order.subtotal || 0)}</p>
            </div>
            <div class="order-items">
                <h4>Items:</h4>
                ${itemsHTML || '<p>No item details available</p>'}
            </div>
            <button onclick="printOrder(${orderIndex})" class="btn btn-primary">Print Receipt</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function markAsCompleted(orderIndex) {
    orders.splice(orderIndex, 1);
    localStorage.setItem('adminOrders', JSON.stringify(orders));
    loadOrders();
    alert('Order marked as completed!');
}

function printOrder(orderIndex) {
    const order = orders[orderIndex];
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Order Receipt #${orderIndex + 1}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .receipt { max-width: 400px; margin: 0 auto; }
                    .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; }
                    .item { display: flex; justify-content: space-between; margin: 5px 0; }
                    .total { font-weight: bold; font-size: 1.2em; border-top: 2px solid #000; padding-top: 10px; }
                </style>
            </head>
            <body>
                <div class="receipt">
                    <div class="header">
                        <h2>SYNAPSE SPARKS</h2>
                        <p>Order #${orderIndex + 1}</p>
                        <p>Date: ${order.date || new Date().toLocaleDateString()}</p>
                    </div>
                    <p><strong>Customer:</strong> ${order.customerName || 'Guest Customer'}</p>
                    <div class="items">
                        ${order.items ? order.items.map(item => 
                            `<div class="item">
                                <span>${item.name}</span>
                                <span>${formatPrice(item.price)}</span>
                            </div>`
                        ).join('') : ''}
                    </div>
                    <div class="total">
                        <div class="item"><span>Subtotal:</span><span>${formatPrice(order.subtotal || 0)}</span></div>
                        <div class="item"><span>Tax (3%):</span><span>${formatPrice(order.tax || 0)}</span></div>
                        <div class="item"><span>Total:</span><span>${formatPrice(order.total || 0)}</span></div>
                    </div>
                </div>
                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(() => window.close(), 1000);
                    }
                </script>
            </body>
        </html>
    `);
}

function loadStatistics() {

    const categoryBreakdown = document.getElementById('category-breakdown');
    let breakdownHTML = '';
    for (const [category, items] of Object.entries(products)) {
        if (items.length > 0) {
            const categoryTotal = items.reduce((sum, item) => sum + item.price, 0);
            breakdownHTML += `
                <div class="category-item">
                    <span>${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    <span>${items.length} items</span>
                    <span>${formatPrice(categoryTotal)}</span>
                </div>
            `;
        }
    }
    categoryBreakdown.innerHTML = breakdownHTML || '<p>No products yet</p>';


    const topProductsDiv = document.getElementById('top-products');
    let allProducts = [];
    for (const [category, items] of Object.entries(products)) {
        items.forEach(item => {
            allProducts.push({...item, category});
        });
    }
    

    allProducts.sort((a, b) => b.price - a.price);
    
    let topProductsHTML = '';
    allProducts.slice(0, 5).forEach((product, index) => {
        topProductsHTML += `
            <div class="top-product-item">
                <span>${index + 1}. ${product.name}</span>
                <span>${formatPrice(product.price)}</span>
                <span class="product-category">${product.category}</span>
            </div>
        `;
    });
    topProductsDiv.innerHTML = topProductsHTML || '<p>No products yet</p>';
}


function captureOrder(cart, customerName, subtotal, tax, total) {
    const newOrder = {
        date: new Date().toLocaleString(),
        customerName: customerName,
        items: cart,
        subtotal: subtotal,
        tax: tax,
        total: total
    };
    
    orders.push(newOrder);
    localStorage.setItem('adminOrders', JSON.stringify(orders));
}

// PRICE FORMATTING FUNCTION
function formatPrice(price) {
    if (typeof price === 'number') {
        return '₱' + price.toLocaleString('en-PH');
    }
    return price;
}

function truncateText(text, length) {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if already logged in
    const adminPanel = document.getElementById('admin-panel');
    if (adminPanel && adminPanel.style.display === 'block') {
        loadInventory();
        loadOrders();
        loadStatistics();
    }
});