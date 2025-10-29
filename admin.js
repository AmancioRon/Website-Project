// Admin Panel JavaScript

const ADMIN_PASSWORD = "admin123"; // Simple password for demo

function login() {
    const password = document.getElementById('admin-password').value;
    const error = document.getElementById('login-error');

    if (password === ADMIN_PASSWORD) {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'block';
        loadInventory();
        loadOrders();
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
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the specific tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to the button that opened the tab
    event.currentTarget.classList.add('active');
}

function loadInventory() {
    const inventoryGrid = document.getElementById('inventory-grid');
    inventoryGrid.innerHTML = '';

    for (const [category, items] of Object.entries(products)) {
        items.forEach(item => {
            const inventoryItem = document.createElement('div');
            inventoryItem.className = 'inventory-item';
            inventoryItem.innerHTML = `
                <div class="item-image">${item.image}</div>
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>${item.specs}</p>
                    <div class="item-price">$${item.price}</div>
                    <div class="item-category">${category}</div>
                </div>
                <div class="item-actions">
                    <button onclick="editProduct('${category}', '${item.id}')" class="btn btn-small">Edit</button>
                    <button onclick="deleteProduct('${category}', '${item.id}')" class="btn btn-small btn-danger">Delete</button>
                </div>
            `;
            inventoryGrid.appendChild(inventoryItem);
        });
    }
}

function loadOrders() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '<p>No orders yet. Orders will appear here when customers checkout.</p>';
}

function addProduct(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const category = document.getElementById('product-category').value;
    const specs = document.getElementById('product-specs').value;
    const image = document.getElementById('product-image').value;

    const newProduct = {
        id: `${category}-${Date.now()}`,
        name: name,
        price: price,
        specs: specs,
        image: image
    };

    // Add to products object
    if (!products[category]) {
        products[category] = [];
    }
    products[category].push(newProduct);

    // Save to localStorage (in a real app, this would be a server call)
    alert('Product added successfully!');
    
    // Reset form
    event.target.reset();
    
    // Reload inventory
    loadInventory();
}

function editProduct(category, productId) {
    const product = products[category].find(p => p.id === productId);
    if (product) {
        const newName = prompt('Enter new name:', product.name);
        const newPrice = prompt('Enter new price:', product.price);
        const newSpecs = prompt('Enter new specs:', product.specs);

        if (newName) product.name = newName;
        if (newPrice) product.price = parseFloat(newPrice);
        if (newSpecs) product.specs = newSpecs;

        loadInventory();
        alert('Product updated!');
    }
}

function deleteProduct(category, productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        products[category] = products[category].filter(p => p.id !== productId);
        loadInventory();
        alert('Product deleted!');
    }
}