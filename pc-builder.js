// PC Builder JavaScript

let currentBuild = {
    cpu: null,
    motherboard: null,
    ram: null,
    gpu: null,
    storage: null,
    psu: null,
    case: null
};

// Initialize the PC Builder
document.addEventListener('DOMContentLoaded', function() {
    populateComponentOptions();
});

function populateComponentOptions() {
    // Populate CPUs
    const cpuSelect = document.getElementById('cpu-select');
    products.cpus.forEach(cpu => {
        const option = document.createElement('option');
        option.value = cpu.id;
        option.textContent = `${cpu.name} - $${cpu.price}`;
        cpuSelect.appendChild(option);
    });

    // Populate Motherboards
    const mbSelect = document.getElementById('motherboard-select');
    products.motherboards.forEach(mb => {
        const option = document.createElement('option');
        option.value = mb.id;
        option.textContent = `${mb.name} - $${mb.price}`;
        mbSelect.appendChild(option);
    });

    // Populate RAM
    const ramSelect = document.getElementById('ram-select');
    products.ram.forEach(ram => {
        const option = document.createElement('option');
        option.value = ram.id;
        option.textContent = `${ram.name} - $${ram.price}`;
        ramSelect.appendChild(option);
    });

    // Populate GPUs
    const gpuSelect = document.getElementById('gpu-select');
    products.gpus.forEach(gpu => {
        const option = document.createElement('option');
        option.value = gpu.id;
        option.textContent = `${gpu.name} - $${gpu.price}`;
        gpuSelect.appendChild(option);
    });

    // Populate Storage
    const storageSelect = document.getElementById('storage-select');
    products.storage.forEach(storage => {
        const option = document.createElement('option');
        option.value = storage.id;
        option.textContent = `${storage.name} - $${storage.price}`;
        storageSelect.appendChild(option);
    });

    // Populate PSUs
    const psuSelect = document.getElementById('psu-select');
    products.psus.forEach(psu => {
        const option = document.createElement('option');
        option.value = psu.id;
        option.textContent = `${psu.name} - $${psu.price}`;
        psuSelect.appendChild(option);
    });

    // Populate Cases
    const caseSelect = document.getElementById('case-select');
    products.cases.forEach(caseItem => {
        const option = document.createElement('option');
        option.value = caseItem.id;
        option.textContent = `${caseItem.name} - $${caseItem.price}`;
        caseSelect.appendChild(option);
    });
}

function updateComponent(type, productId) {
    let product = null;
    switch (type) {
        case 'cpu':
            product = products.cpus.find(p => p.id === productId);
            break;
        case 'motherboard':
            product = products.motherboards.find(p => p.id === productId);
            break;
        case 'ram':
            product = products.ram.find(p => p.id === productId);
            break;
        case 'gpu':
            product = products.gpus.find(p => p.id === productId);
            break;
        case 'storage':
            product = products.storage.find(p => p.id === productId);
            break;
        case 'psu':
            product = products.psus.find(p => p.id === productId);
            break;
        case 'case':
            product = products.cases.find(p => p.id === productId);
            break;
    }

    if (product) {
        currentBuild[type] = product;
        updateSummary();
        updateTotalPrice();
    }
}

function updateSummary() {
    const summaryList = document.getElementById('summary-list');
    summaryList.innerHTML = '';

    for (const [type, product] of Object.entries(currentBuild)) {
        if (product) {
            const item = document.createElement('div');
            item.className = 'summary-item';
            item.innerHTML = `
                <strong>${type.toUpperCase()}:</strong> ${product.name} - $${product.price}
                <button onclick="removeComponent('${type}')" class="remove-btn">×</button>
            `;
            summaryList.appendChild(item);
        }
    }
}

function removeComponent(type) {
    currentBuild[type] = null;
    document.getElementById(`${type}-select`).value = '';
    updateSummary();
    updateTotalPrice();
}

function updateTotalPrice() {
    let total = 0;
    for (const product of Object.values(currentBuild)) {
        if (product) {
            total += product.price;
        }
    }
    document.getElementById('total-price').textContent = total.toFixed(2);
}

function checkCompatibility() {
    const results = document.getElementById('compatibility-results');
    results.innerHTML = '';

    let allCompatible = true;
    const issues = [];

    // Check CPU and Motherboard compatibility
    if (currentBuild.cpu && currentBuild.motherboard) {
        if (currentBuild.cpu.socket !== currentBuild.motherboard.socket) {
            allCompatible = false;
            issues.push('CPU and Motherboard sockets do not match.');
        }
    }

    // Check RAM and Motherboard compatibility
    if (currentBuild.ram && currentBuild.motherboard) {
        if (currentBuild.ram.type !== currentBuild.motherboard.ramType) {
            allCompatible = false;
            issues.push('RAM type is not compatible with the motherboard.');
        }
    }

    // Check case and motherboard form factor
    if (currentBuild.case && currentBuild.motherboard) {
        const caseFormFactors = compatibilityRules.formFactors[currentBuild.case.formFactor];
        if (!caseFormFactors.includes(currentBuild.motherboard.formFactor)) {
            allCompatible = false;
            issues.push('Motherboard form factor is not compatible with the case.');
        }
    }

    // Check if PSU wattage is sufficient
    if (currentBuild.psu) {
        let totalPower = 0;
        if (currentBuild.cpu) totalPower += currentBuild.cpu.tdp || 0;
        if (currentBuild.gpu) totalPower += currentBuild.gpu.power || 0;
        totalPower += 100; // Buffer for other components

        if (currentBuild.psu.wattage < totalPower) {
            allCompatible = false;
            issues.push(`Power supply wattage (${currentBuild.psu.wattage}W) may be insufficient. Estimated power draw: ${totalPower}W.`);
        }
    }

    // Display results
    if (allCompatible && Object.values(currentBuild).some(Boolean)) {
        results.innerHTML = '<div class="compatible">✓ All components are compatible!</div>';
    } else if (issues.length === 0) {
        results.innerHTML = '<div class="compatible">Select components to check compatibility.</div>';
    } else {
        issues.forEach(issue => {
            const issueElement = document.createElement('div');
            issueElement.className = 'not-compatible';
            issueElement.textContent = issue;
            results.appendChild(issueElement);
        });
    }
}

function addPcToCart() {
    if (!Object.values(currentBuild).some(Boolean)) {
        alert('Please select at least one component to add to cart.');
        return;
    }

    const pcBuild = {
        id: 'custom-pc-' + Date.now(),
        name: 'Custom PC Build',
        price: parseFloat(document.getElementById('total-price').textContent),
        specs: 'Custom built PC with selected components',
        components: { ...currentBuild }
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(pcBuild);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show confirmation
    showCartNotification('Your custom PC build has been added to the cart!');
    
    // Update cart count on all pages
    updateCartCount();
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