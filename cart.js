// Cart JavaScript

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    
    cartItems.innerHTML = '';
    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        updateSummary(0);
        return;
    }

    let subtotal = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image || 'https://img.icons8.com/color/96/box.png'}" alt="${item.name}" onerror="this.src='https://img.icons8.com/color/96/box.png'" />
            </div>
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>${item.specs || 'Custom PC Build'}</p>
            </div>
            <div class="item-price price-formatted">${formatPrice(item.price)}</div>
            <button class="remove-btn" onclick="removeFromCart(${index})">×</button>
        `;
        cartItems.appendChild(cartItem);
        subtotal += item.price;
    });

    updateSummary(subtotal);
}

function updateSummary(subtotal) {
    const tax = subtotal * 0.03; // 3% tax
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('tax').textContent = formatPrice(tax);
    document.getElementById('total').textContent = formatPrice(total);
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        localStorage.removeItem('cart');
        loadCart();
    }
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    generateReceipt();
    document.getElementById('checkout-modal').style.display = 'block';
}

function generateReceipt() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const receipt = document.getElementById('receipt-content');
    let subtotal = 0;

    // Get customer name from localStorage
    const customerName = localStorage.getItem('customerName') || 'Guest Customer';

    let receiptHTML = `
        <div class="receipt-header">
            <h3>SYNAPSE SPARKS</h3>
            <p>Order Date: ${new Date().toLocaleDateString()}</p>
            <p>Order Time: ${new Date().toLocaleTimeString()}</p>
            <p>Customer: <strong>${customerName}</strong></p>
        </div>
        <div class="receipt-items">
    `;

    cart.forEach(item => {
        receiptHTML += `
            <div class="receipt-item">
                <span>${item.name}</span>
                <span class="price-formatted">${formatPrice(item.price)}</span>
            </div>
        `;
        subtotal += item.price;
    });

    const tax = subtotal * 0.03; // 3% tax
    const total = subtotal + tax;

    receiptHTML += `
        </div>
        <div class="receipt-totals">
            <div class="receipt-line">
                <span>Subtotal:</span>
                <span class="price-formatted">${formatPrice(subtotal)}</span>
            </div>
            <div class="receipt-line">
                <span>Tax (3%):</span>
                <span class="price-formatted">${formatPrice(tax)}</span>
            </div>
            <div class="receipt-line total">
                <span>Total:</span>
                <span class="price-formatted">${formatPrice(total)}</span>
            </div>
        </div>
        <div class="customer-info">
            <p><strong>Thank you for your order, ${customerName}!</strong></p>
            <p>Please save or screenshot this receipt.</p>
            <p>Visit our Facebook page for inquiries: <a href="https://www.facebook.com/profile.php?id=61582661370168" target="_blank" style="color: var(--primary);">SynapseSparks Facebook</a></p>
        </div>
    `;

    receipt.innerHTML = receiptHTML;
}

function sendToFacebook() {
    const customerName = localStorage.getItem('customerName') || 'Guest Customer';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let itemsText = '';
    cart.forEach(item => {
        itemsText += `• ${item.name} - ${formatPrice(item.price)}\n`;
    });
    
    let subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let tax = subtotal * 0.03;
    let total = subtotal + tax;
    
    const message = `New Order from ${customerName}!\n\nItems:\n${itemsText}\nSubtotal: ${formatPrice(subtotal)}\nTax (3%): ${formatPrice(tax)}\nTotal: ${formatPrice(total)}`;
    
    // Open YOUR Facebook page
    const facebookUrl = `https://www.facebook.com/profile.php?id=61582661370168`;
    window.open(facebookUrl, '_blank');
    
    alert('Please send this order information through our Facebook page. The page has been opened for you.');
}

function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// PRICE FORMATTING FUNCTION
function formatPrice(price) {
    if (typeof price === 'number') {
        return '₱' + price.toLocaleString('en-PH');
    }
    return price;
}

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', loadCart);

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeModal();
    }
}
function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Calculate totals
    let subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    let tax = subtotal * 0.03;
    let total = subtotal + tax;
    let customerName = localStorage.getItem('customerName') || 'Guest Customer';
    
    // Capture order for admin panel
    if (typeof captureOrder === 'function') {
        captureOrder(cart, customerName, subtotal, tax, total);
    } else {
        // Fallback: Save to localStorage
        let orders = JSON.parse(localStorage.getItem('adminOrders')) || [];
        orders.push({
            date: new Date().toLocaleString(),
            customerName: customerName,
            items: cart,
            subtotal: subtotal,
            tax: tax,
            total: total
        });
        localStorage.setItem('adminOrders', JSON.stringify(orders));
    }
    
    generateReceipt();
    document.getElementById('checkout-modal').style.display = 'block';
}