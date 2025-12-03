
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing app...');
    

    setTimeout(() => {
        showCustomerModal();
        updateCurrentNameDisplay();
    }, 500);
    

    setTimeout(() => {
        if (document.getElementById('loading-screen')) {
            document.getElementById('loading-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
            }, 500);
        }
    }, 1000);


    loadFeaturedProducts();
    

    updateCartCount();
    

    initializeCategories();
    

    initializeNavigation();
    

    fixHeroButtons();
    
    console.log('SynapseSparks initialized successfully!');
}


function showCustomerModal() {

    const existingName = localStorage.getItem('customerName');
    if (!existingName) {
        const modal = document.getElementById('customer-modal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }
}

function saveCustomerName() {
    const nameInput = document.getElementById('customer-name');
    const name = nameInput.value.trim();
    
    if (name) {
        localStorage.setItem('customerName', name);
        closeCustomerModal();
        updateCurrentNameDisplay();
    } else {
        alert('Please enter your name to continue.');
    }
}

function closeCustomerModal() {
    const modal = document.getElementById('customer-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function getCustomerName() {
    return localStorage.getItem('customerName') || 'Guest Customer';
}

function changeCustomerName() {
    const newName = prompt('Enter your new name:', getCustomerName());
    if (newName && newName.trim()) {
        localStorage.setItem('customerName', newName.trim());
        alert('Name updated successfully!');
        updateCurrentNameDisplay();
    }
}

function updateCurrentNameDisplay() {
    const currentNameElement = document.getElementById('current-name');
    if (currentNameElement) {
        currentNameElement.textContent = getCustomerName();
    }
}


function fixHeroButtons() {
    console.log('Fixing hero buttons...');
    
  
    setTimeout(() => {
  
        const startBuildingBtn = document.querySelector('.hero-buttons .btn-primary');
        const exploreBtn = document.querySelector('.hero-buttons .btn-secondary');
        
        if (startBuildingBtn) {
            console.log('Fixing Start Building button');
       
            startBuildingBtn.href = 'javascript:void(0)';
            startBuildingBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Start Building clicked');
                window.location.href = 'build-pc.html';
            });
            startBuildingBtn.style.cursor = 'pointer';
        }
        
        if (exploreBtn) {
            console.log('Fixing Explore Products button');

            exploreBtn.href = 'javascript:void(0)';
            exploreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Explore Products clicked');
                const categoriesSection = document.querySelector('.categories');
                if (categoriesSection) {
                    categoriesSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
            exploreBtn.style.cursor = 'pointer';
        }
        
        console.log('Hero buttons fixed');
    }, 100);
}

function loadFeaturedProducts() {
    console.log('Loading featured products...');
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) {
        console.log('No featured products container found');
        return;
    }
    
    const featuredProducts = getFeaturedProducts();
    

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


function openCategoryModal(category) {
    console.log('openCategoryModal called for:', category);
    const modal = document.getElementById('category-modal');
    const title = document.getElementById('modal-category-title');
    const grid = document.getElementById('category-products-grid');
    
    if (!modal || !title || !grid) {
        console.error('Modal elements not found!');
        return;
    }

    const categoryNames = {
        'motherboards': 'Motherboards',
        'prebuilts': 'Prebuilt Systems', 
        'laptops': 'Laptops',
        'components': 'PC Components',
        'peripherals': 'Gaming Peripherals'
    };
    
    title.textContent = categoryNames[category] || category;

    grid.innerHTML = '<div class="loading-message">Loading products...</div>';
    

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    

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

    grid.innerHTML = '';
    
    if (categoryProducts.length === 0) {
        grid.innerHTML = '<div class="no-products">No products found in this category.</div>';
        return;
    }

    categoryProducts.forEach((product, index) => {
        const productCard = createModalProductCard(product, index);
        grid.appendChild(productCard);
    });
    

    setupHoverPositioning();
}


function createModalProductCard(product, index) {
    console.log(`Creating modal product card: ${product.id}`);
    
    const card = document.createElement('div');
    card.className = 'modal-product-card fade-in-up';
    card.style.animationDelay = `${index * 0.05}s`;
    

    const needsRecommendations = !['prebuilts', 'laptops', 'peripherals', 'monitors'].some(cat => 
        products[cat]?.some(p => p.id === product.id)
    );

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
    

    card.addEventListener('mouseenter', function(e) {
        const panel = this.querySelector('.hover-details-panel');
        if (panel) {
            positionHoverPanel(this, panel);
        }
    });
    
    return card;
}


function positionHoverPanel(card, panel) {
    const rect = card.getBoundingClientRect();
    const modalRect = card.closest('.category-modal-content')?.getBoundingClientRect() || 
                     document.body.getBoundingClientRect();
    

    const cardCenterX = rect.left + (rect.width / 2);
    const modalCenterX = modalRect.left + (modalRect.width / 2);
    

    panel.classList.remove('hover-left', 'hover-right');
    

    if (cardCenterX > modalCenterX) {
        panel.classList.add('hover-left');
    } else {

        panel.classList.add('hover-right');
    }
}

function getProductRecommendations(product) {
    let recommendations = '<div class="recommendations-grid">';
    
s
    const componentTypes = ['cpus', 'motherboards', 'ram', 'gpus', 'storage', 'psus', 'cases', 'cooling'];
    const isComponent = componentTypes.some(type => 
        products[type]?.some(p => p.id === product.id)
    );
    
    if (!isComponent) {
        return ''; 
    }
    

    if (product.chipset && product.socket) {

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
    

    if (product.specs.includes(',')) {
        const specItems = product.specs.split(',').map(item => item.trim());
        return `<ul>${specItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
    }
    return `<p>${product.specs}</p>`;
}

function setupHoverPositioning() {

    window.addEventListener('resize', function() {
        document.querySelectorAll('.modal-product-card').forEach(card => {
            const panel = card.querySelector('.hover-details-panel');
            if (panel && card.matches(':hover')) {
                positionHoverPanel(card, panel);
            }
        });
    });
    

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


function truncateText(text, length) {
    if (!text) return 'No description';
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
}

function formatSpecifications(specs) {
    if (!specs) return '<div class="spec-item">No specifications available</div>';
    

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


document.addEventListener('click', function(event) {
    const categoryModal = document.getElementById('category-modal');
    const customerModal = document.getElementById('customer-modal');
    
    if (event.target === categoryModal) {
        closeCategoryModal();
    }
    
    if (event.target === customerModal) {
        closeCustomerModal();
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const categoryModal = document.getElementById('category-modal');
        const customerModal = document.getElementById('customer-modal');
        
        if (categoryModal && categoryModal.style.display === 'block') {
            closeCategoryModal();
        }
        
        if (customerModal && customerModal.style.display === 'block') {
            closeCustomerModal();
        }
    }
});


function emergencyButtonFix() {
    console.log('Running emergency button fix...');
    
    const startBtn = document.querySelector('.hero-buttons .btn-primary');
    const exploreBtn = document.querySelector('.hero-buttons .btn-secondary');
    
    if (startBtn) {
        console.log('Emergency fixing Start Building button');

        const newStartBtn = document.createElement('button');
        newStartBtn.className = startBtn.className;
        newStartBtn.textContent = startBtn.textContent;
        newStartBtn.style.cssText = startBtn.style.cssText;
        newStartBtn.onclick = function() {
            window.location.href = 'build-pc.html';
        };
        startBtn.parentNode.replaceChild(newStartBtn, startBtn);
    }
    
    if (exploreBtn) {
        console.log('Emergency fixing Explore Products button');
        
        const newExploreBtn = document.createElement('button');
        newExploreBtn.className = exploreBtn.className;
        newExploreBtn.textContent = exploreBtn.textContent;
        newExploreBtn.style.cssText = exploreBtn.style.cssText;
        newExploreBtn.onclick = function() {
            const categoriesSection = document.querySelector('.categories');
            if (categoriesSection) {
                categoriesSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };
        exploreBtn.parentNode.replaceChild(newExploreBtn, exploreBtn);
    }
}


setTimeout(emergencyButtonFix, 1500);


window.addToCart = addToCart;
window.closeCategoryModal = closeCategoryModal;
window.changeCustomerName = changeCustomerName;
window.emergencyButtonFix = emergencyButtonFix;

console.log('Functions exported to window');
console.log('Script.js loaded successfully');