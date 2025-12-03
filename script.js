// Main JavaScript for SynapseSparks

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing app...');
    
    // Simulate loading screen
    setTimeout(() => {
        if (document.getElementById('loading-screen')) {
            document.getElementById('loading-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
            }, 500);
        }
    }, 1000);

    // Load featured products
    loadFeaturedProducts();
    
    // Initialize cart count
    updateCartCount();
    
    // Initialize category interactions
    initializeCategories();
    
    // Initialize navigation dropdown
    initializeNavigation();
    
    // Fix hero buttons immediately
    fixHeroButtons();
    
    console.log('SynapseSparks initialized successfully!');
}

// FIX HERO BUTTONS
function fixHeroButtons() {
    console.log('Fixing hero buttons...');
    
    // Fix Start Building button
    const startBuildingBtn = document.querySelector('.hero-buttons .btn-primary');
    if (startBuildingBtn && startBuildingBtn.tagName === 'A') {
        console.log('Found Start Building button');
        startBuildingBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Start Building clicked, redirecting to build-pc.html');
            window.location.href = 'build-pc.html';
        });
    }
    
    // Fix Explore Products button
    const exploreBtn = document.querySelector('.explore-products-btn');
    if (exploreBtn) {
        console.log('Found Explore Products button');
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Explore Products clicked');
            const categories = document.getElementById('categories');
            if (categories) {
                categories.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

function loadFeaturedProducts() {
    console.log('Loading featured products...');
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) {
        console.log('No featured products container found');
        return;
    }
    
    const featuredProducts = getFeaturedProducts();
    
    // Clear existing content
    featuredContainer.innerHTML = '';
    
    if (featuredProducts.length === 0) {
        featuredContainer.innerHTML = '<div class="no-products">No featured products available.</div>';
        return;
    }
    
    featuredProducts.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        featuredContainer.appendChild(productCard);
    });
}

// SIMPLIFIED: Just show image and name
function createProductCard(product, index) {
    console.log(`Creating product card: ${product.id} - ${product.name}`);
    
    const card = document.createElement('div');
    card.className = 'product-card fade-in-up';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image || 'https://img.icons8.com/color/96/box.png'}" alt="${product.name}" 
                 onerror="this.onerror=null; this.src='https://img.icons8.com/color/96/box.png'">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price price-formatted">${formatPrice(product.price)}</div>
            <button class="add-to-cart" onclick="window.addToCart('${product.id}')">Add to Cart</button>
        </div>
    `;
    
    return card;
}

function addToCart(productId) {
    console.log('addToCart called for:', productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Find product in all categories
    let product = null;
    for (const category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) {
            console.log('Found product:', product.name);
            break;
        }
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
        showCartNotification('Error: Product not found!', true);
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function showCartNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${isError ? '#ff4444' : 'var(--primary)'};
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
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

function initializeCategories() {
    console.log('Initializing categories...');
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            console.log('Category clicked:', category);
            
            if (category === 'builder') {
                window.location.href = 'build-pc.html';
            } else {
                openCategoryModal(category);
            }
        });
    });
}

function initializeNavigation() {
    console.log('Initializing navigation...');
    document.querySelectorAll('.dropdown-category').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.category;
            console.log('Nav category clicked:', category);
            openCategoryModal(category);
        });
    });
}

// Category Modal Functions
function openCategoryModal(category) {
    console.log('openCategoryModal called for:', category);
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
    
    // Load products
    loadCategoryProducts(category, grid);
}

function loadCategoryProducts(category, grid) {
    console.log('Loading products for category:', category);
    let categoryProducts = [];
    
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
            categoryProducts = [
                ...(products.cpus || []),
                ...(products.ram || []),
                ...(products.gpus || []),
                ...(products.storage || []),
                ...(products.psus || []),
                ...(products.cases || []),
                ...(products.cooling || [])
            ];
            break;
        case 'peripherals':
            categoryProducts = [
                ...(products.monitors || []),
                ...(products.peripherals || [])
            ];
            break;
        default:
            console.error('Unknown category:', category);
            categoryProducts = [];
    }
    
    console.log(`Found ${categoryProducts.length} products`);
    
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
    
    // Setup hover positioning
    setupHoverPositioning();
}

// Create product card with hover details panel
function createModalProductCard(product, index) {
    console.log(`Creating modal product card: ${product.id}`);
    
    const card = document.createElement('div');
    card.className = 'modal-product-card fade-in-up';
    card.style.animationDelay = `${index * 0.05}s`;
    
    // Check if product needs recommendations
    const needsRecommendations = !['prebuilts', 'laptops', 'peripherals', 'monitors'].some(cat => 
        products[cat]?.some(p => p.id === product.id)
    );
    
    // Get product recommendations only if needed
    const recommendations = needsRecommendations ? getProductRecommendations(product) : '';
    
    card.innerHTML = `
        <div class="modal-product-image">
            <img src="${product.image || 'https://img.icons8.com/color/96/box.png'}" alt="${product.name}" 
                 onerror="this.onerror=null; this.src='https://img.icons8.com/color/96/box.png'">
        </div>
        <div class="modal-product-info">
            <h4 class="modal-product-title">${product.name}</h4>
            <div class="modal-product-price price-formatted">${formatPrice(product.price)}</div>
        </div>
        
        <!-- Hover Details Panel - Data attribute for positioning -->
        <div class="hover-details-panel" data-position="auto">
            <div class="hover-details-content">
                <h3>${product.name}</h3>
                <div class="hover-price price-formatted">${formatPrice(product.price)}</div>
                
                <div class="hover-section">
                    <h4>Specifications</h4>
                    <div class="hover-specs-list">
                        ${formatSpecificationsForHover(product)}
                    </div>
                </div>
                
                ${needsRecommendations && recommendations ? `
                <div class="hover-section">
                    <h4>Recommended Partners</h4>
                    <div class="hover-recommendations">
                        ${recommendations}
                    </div>
                </div>
                ` : ''}
                
                <button class="btn btn-primary hover-add-to-cart" onclick="window.addToCart('${product.id}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    // Add mouseenter event to handle positioning
    card.addEventListener('mouseenter', function(e) {
        const panel = this.querySelector('.hover-details-panel');
        if (panel) {
            positionHoverPanel(this, panel);
        }
    });
    
    return card;
}

// Function to position hover panel based on card position
function positionHoverPanel(card, panel) {
    const rect = card.getBoundingClientRect();
    const modalRect = card.closest('.category-modal-content')?.getBoundingClientRect() || 
                     document.body.getBoundingClientRect();
    
    // Check if card is on right side of modal
    const cardCenterX = rect.left + (rect.width / 2);
    const modalCenterX = modalRect.left + (modalRect.width / 2);
    
    // Remove all position classes
    panel.classList.remove('hover-left', 'hover-right');
    
    // If card is on right half, show panel on left
    if (cardCenterX > modalCenterX) {
        panel.classList.add('hover-left');
    } else {
        // Otherwise show on right (default)
        panel.classList.add('hover-right');
    }
}

function getProductRecommendations(product) {
    let recommendations = '<div class="recommendations-grid">';
    
    // Only show recommendations for components that need partners
    const componentTypes = ['cpus', 'motherboards', 'ram', 'gpus', 'storage', 'psus', 'cases', 'cooling'];
    const isComponent = componentTypes.some(type => 
        products[type]?.some(p => p.id === product.id)
    );
    
    if (!isComponent) {
        return ''; // No recommendations for non-components
    }
    
    // Motherboard recommendations
    if (product.chipset && product.socket) {
        // Find 2-3 compatible CPUs
        const compatibleCPUs = products.cpus?.filter(cpu => 
            cpu.socket === product.socket
        ).slice(0, 2) || [];
        
        if (compatibleCPUs.length > 0) {
            recommendations += `
                <div class="recommendation-category">
                    <strong>Best CPUs:</strong>
                    <ul>
                        ${compatibleCPUs.map(cpu => 
                            `<li>${cpu.name.split(' ').slice(0, 3).join(' ')} - ${formatPrice(cpu.price)}</li>`
                        ).join('')}
                    </ul>
                </div>
            `;
        }
    }
    
    // RAM recommendations for motherboards
    if (product.ramType) {
        const compatibleRAM = products.ram?.filter(ram => 
            ram.type === product.ramType
        ).slice(0, 2) || [];
        
        if (compatibleRAM.length > 0) {
            recommendations += `
                <div class="recommendation-category">
                    <strong>Best RAM:</strong>
                    <ul>
                        ${compatibleRAM.map(ram => 
                            `<li>${ram.name.split(' ').slice(0, 2).join(' ')} - ${formatPrice(ram.price)}</li>`
                        ).join('')}
                    </ul>
                </div>
            `;
        }
    }
    
    // GPU recommendations for CPUs
    if (product.socket && product.price > 15000) {
        recommendations += `
            <div class="recommendation-category">
                <strong>High-end GPU:</strong>
                <ul>
                    <li>RTX 4070 Ti or better</li>
                    <li>850W+ PSU recommended</li>
                </ul>
            </div>
        `;
    }
    
    // Case recommendations for motherboards
    if (product.formFactor) {
        recommendations += `
            <div class="recommendation-category">
                <strong>Case Compatibility:</strong>
                <ul>
                    <li>Fits ${product.formFactor} & larger cases</li>
                    <li>Check case specifications</li>
                </ul>
            </div>
        `;
    }
    
    if (recommendations === '<div class="recommendations-grid">') {
        return '';
    }
    
    recommendations += '</div>';
    return recommendations;
}

function formatSpecificationsForHover(product) {
    if (!product.specs) return '<p>No specifications available</p>';
    
    // If specs are comma-separated, convert to list
    if (product.specs.includes(',')) {
        const specItems = product.specs.split(',').map(item => item.trim());
        return `<ul>${specItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
    }
    return `<p>${product.specs}</p>`;
}

function setupHoverPositioning() {
    // Reposition panels on window resize
    window.addEventListener('resize', function() {
        document.querySelectorAll('.modal-product-card').forEach(card => {
            const panel = card.querySelector('.hover-details-panel');
            if (panel && card.matches(':hover')) {
                positionHoverPanel(card, panel);
            }
        });
    });
    
    // Also reposition when modal is scrolled
    const modalContent = document.querySelector('.category-modal-content');
    if (modalContent) {
        modalContent.addEventListener('scroll', function() {
            document.querySelectorAll('.modal-product-card').forEach(card => {
                const panel = card.querySelector('.hover-details-panel');
                if (panel && card.matches(':hover')) {
                    positionHoverPanel(card, panel);
                }
            });
        });
    }
}

function closeCategoryModal() {
    console.log('Closing category modal');
    const modal = document.getElementById('category-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Utility functions
function truncateText(text, length) {
    if (!text) return 'No description';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
}

function formatSpecifications(specs) {
    if (!specs) return '<div class="spec-item">No specifications available</div>';
    
    // If specs are comma-separated, convert to list
    if (specs.includes(',')) {
        const specItems = specs.split(',').map(item => item.trim());
        return specItems.map(item => `<div class="spec-item">${item}</div>`).join('');
    }
    return `<div class="spec-item">${specs}</div>`;
}

function getProductById(productId) {
    console.log('getProductById searching for:', productId);
    for (const category in products) {
        const product = products[category].find(p => p.id === productId);
        if (product) {
            console.log('Found in category:', category);
            return product;
        }
    }
    console.log('Product not found in any category');
    return null;
}

function formatPrice(price) {
    if (typeof price === 'number') {
        return '₱' + price.toLocaleString('en-PH');
    }
    return '₱0.00';
}

function getFeaturedProducts() {
    const featured = [];
    if (products.prebuilts) featured.push(...products.prebuilts.slice(0, 3));
    if (products.laptops) featured.push(...products.laptops.slice(0, 3));
    return featured;
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const categoryModal = document.getElementById('category-modal');
    if (event.target === categoryModal) {
        closeCategoryModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCategoryModal();
    }
});

// Export functions to global scope
window.addToCart = addToCart;
window.closeCategoryModal = closeCategoryModal;

console.log('Functions exported to window');
console.log('Script.js loaded successfully');
console.log('Available window functions:');
console.log('- window.addToCart:', typeof window.addToCart);
console.log('- window.closeCategoryModal:', typeof window.closeCategoryModal);