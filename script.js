// Main JavaScript for SynapseSparks

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Simulate loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 3000);

    // Load featured products
    loadFeaturedProducts();
    
    // Initialize cart count
    updateCartCount();
    
    // Initialize category interactions
    initializeCategories();
    
    // Initialize navigation dropdown
    initializeNavigation();
    
    console.log('SynapseSparks initialized successfully!');
}

function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    const featuredProducts = getFeaturedProducts();
    
    // Clear existing content
    featuredContainer.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in-up';
    card.innerHTML = `
        <div class="product-image">
            ${product.image}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">$${product.price}</div>
            <div class="product-specs">${product.specs}</div>
            <button class="add-to-cart" onclick="addToCart('${product.id}')">
                Add to Cart
            </button>
        </div>
    `;
    return card;
}

function createFeaturedProductCard(product, index) {
    const card = document.createElement('div');
    card.className = `product-card featured-product-card fade-in-up`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="holographic-effect">
            <div class="featured-badge">FEATURED</div>
            <div class="product-category-tag">${product.category || 'PREMIUM'}</div>
            <div class="product-image">
                ${product.image}
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">$${product.price}</div>
            <div class="product-specs">${product.specs}</div>
            <button class="add-to-cart" onclick="addToCart('${product.id}')">
                Add to Cart
            </button>
        </div>
        <div class="floating-label">Limited Stock!</div>
    `;
    return card;
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Find product in all categories
    let product = null;
    for (const category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }
    
    if (product) {
        cart.push({
            ...product,
            cartId: Date.now().toString()
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Show added to cart animation
        showCartNotification('Product added to cart!');
    } else {
        console.error('Product not found:', productId);
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function showCartNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary);
        color: var(--dark);
        padding: 1rem 2rem;
        border-radius: 5px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

function initializeCategories() {
    console.log('Initializing categories...');
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            console.log('Category card clicked:', category);
            
            if (category === 'builder') {
                window.location.href = 'build-pc.html';
            } else {
                // Open category modal
                openCategoryModal(category);
            }
        });
    });

    // Add smooth scroll for explore products button
    const exploreBtn = document.querySelector('.explore-products-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('categories').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    console.log('Categories initialized successfully');
}

function initializeNavigation() {
    console.log('Initializing navigation...');
    
    // Add click events to dropdown categories
    document.querySelectorAll('.dropdown-category').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            console.log('Navigation category clicked:', category);
            openCategoryModal(category);
        });
    });

    console.log('Navigation initialized successfully');
}

// Category Modal Functions
function openCategoryModal(category) {
    console.log('Opening category modal for:', category);
    
    const modal = document.getElementById('category-modal');
    const title = document.getElementById('modal-category-title');
    const grid = document.getElementById('category-products-grid');
    
    if (!modal || !title || !grid) {
        console.error('Modal elements not found!');
        return;
    }
    
    // Set category title
    const categoryNames = {
        'motherboards': 'Motherboards',
        'prebuilts': 'Prebuilt Systems', 
        'laptops': 'Laptops',
        'components': 'PC Components',
        'peripherals': 'Gaming Peripherals'
    };
    
    title.textContent = categoryNames[category] || category;
    
    // Clear previous products and show loading
    grid.innerHTML = '<div class="loading-message">Loading products...</div>';
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Load products immediately (no artificial delay)
    loadCategoryProducts(category, grid);
}

function loadCategoryProducts(category, grid) {
    let categoryProducts = [];
    
    console.log('Loading products for category:', category);
    
    switch(category) {
        case 'motherboards':
            categoryProducts = products.motherboards || [];
            break;
        case 'prebuilts':
            categoryProducts = products.prebuilts || [];
            break;
        case 'laptops':
            categoryProducts = products.laptops || [];
            break;
        case 'components':
            // Combine all component categories
            categoryProducts = [
                ...(products.cpus || []),
                ...(products.ram || []),
                ...(products.gpus || []),
                ...(products.storage || []),
                ...(products.psus || []),
                ...(products.cases || [])
            ];
            break;
        case 'peripherals':
            // Combine all peripheral categories
            categoryProducts = [
                ...(products.monitors || []),
                ...(products.mice || []),
                ...(products.keyboards || []),
                ...(products.headsets || []),
                ...(products.mousepads || []),
                ...(products.webcams || []),
                ...(products.microphones || [])
            ];
            break;
        default:
            console.error('Unknown category:', category);
            categoryProducts = [];
    }
    
    console.log(`Found ${categoryProducts.length} products for ${category}`);
    
    // Clear loading message
    grid.innerHTML = '';
    
    if (categoryProducts.length === 0) {
        grid.innerHTML = '<div class="no-products">No products found in this category.</div>';
        return;
    }
    
    // Add products to modal
    categoryProducts.forEach((product, index) => {
        const productCard = createModalProductCard(product, index);
        grid.appendChild(productCard);
    });
}

function createModalProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'modal-product-card fade-in-up';
    card.style.animationDelay = `${index * 0.05}s`;
    
    card.innerHTML = `
        <div class="modal-product-image">
            ${product.image || '📦'}
        </div>
        <div class="modal-product-info">
            <h4 class="modal-product-title">${product.name}</h4>
            <div class="modal-product-price">$${product.price}</div>
            <div class="modal-product-specs">${product.specs}</div>
            <button class="add-to-cart modal-add-to-cart" onclick="addToCart('${product.id}')">
                Add to Cart
            </button>
        </div>
    `;
    return card;
}

function closeCategoryModal() {
    console.log('Closing category modal');
    const modal = document.getElementById('category-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('category-modal');
    if (event.target === modal) {
        closeCategoryModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCategoryModal();
    }
});

// Utility function to get product by ID
function getProductById(productId) {
    for (const category in products) {
        const product = products[category].find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

// Get featured products for homepage
function getFeaturedProducts() {
    const featured = [];
    // Take 3 prebuilts and 3 laptops
    if (products.prebuilts) featured.push(...products.prebuilts.slice(0, 3));
    if (products.laptops) featured.push(...products.laptops.slice(0, 3));
    return featured;
}
// Debug function to show what's happening
function showDebugInfo(message) {
    const debugEl = document.getElementById('debug-info');
    if (debugEl) {
        debugEl.style.display = 'block';
        debugEl.innerHTML = message + '<br>' + new Date().toLocaleTimeString();
    }
    console.log('DEBUG:', message);
}

// Update the initializeApp to show debug info
function initializeApp() {
    showDebugInfo('App Initializing...');
    
    // Simulate loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            showDebugInfo('Loading Complete - App Ready');
        }, 500);
    }, 3000);

    // Load featured products
    loadFeaturedProducts();
    
    // Initialize cart count
    updateCartCount();
    
    // Initialize category interactions
    initializeCategories();
    
    // Initialize navigation dropdown
    initializeNavigation();
    
    // Test if products are loaded
    showDebugInfo(`Products Loaded: ${Object.keys(products).length} categories`);
}
