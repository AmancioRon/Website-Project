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
    const tax = subtotal * 0.08; // 8% tax
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

    let receiptHTML = `
        <div class="receipt-header">
            <h3>SYNAPSE SPARKS</h3>
            <p>Order Date: ${new Date().toLocaleDateString()}</p>
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

    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    receiptHTML += `
        </div>
        <div class="receipt-totals">
            <div class="receipt-line">
                <span>Subtotal:</span>
                <span class="price-formatted">${formatPrice(subtotal)}</span>
            </div>
            <div class="receipt-line">
                <span>Tax (8%):</span>
                <span class="price-formatted">${formatPrice(tax)}</span>
            </div>
            <div class="receipt-line total">
                <span>Total:</span>
                <span class="price-formatted">${formatPrice(total)}</span>
            </div>
        </div>
        <div class="customer-info">
            <p><strong>Customer Name:</strong> <span contenteditable="true">Guest Customer</span></p>
            <p><strong>Contact Info:</strong> <span contenteditable="true">Email or Phone</span></p>
        </div>
    `;

    receipt.innerHTML = receiptHTML;
}

function sendToFacebook() {
    const customerName = document.querySelector('.customer-info span:nth-child(1)').textContent;
    const contactInfo = document.querySelector('.customer-info span:nth-child(2)').textContent;
    const total = document.querySelector('.receipt-totals .total span:last-child').textContent;

    const message = `New Order from ${customerName}!\nContact: ${contactInfo}\nTotal: ${total}\n\nPlease check the full order details.`;
    
    // Open Facebook page with pre-filled message
    const facebookUrl = `https://www.facebook.com/profile.php?id=61582661370168`;
    window.open(facebookUrl, '_blank');
    
    alert('Please send this order information through our Facebook page. The page has been opened for you.');
}

function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target === modal) {
        closeModal();
    }
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