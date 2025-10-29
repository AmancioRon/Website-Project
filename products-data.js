// Comprehensive Products Database
const products = {
    motherboards: [
        {
            id: 'mb-1',
            name: 'ASUS ROG Maximus Z790 Hero',
            price: 599.99,
            image: '🔌',
            specs: 'Intel Z790, LGA 1700, DDR5 6400MHz, 4x M.2, Wi-Fi 6E, 2.5G LAN',
            socket: 'LGA1700',
            chipset: 'Z790',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-2',
            name: 'Gigabyte X670E AORUS Master',
            price: 499.99,
            image: '🔌',
            specs: 'AMD X670E, AM5, DDR5 6200MHz, 4x M.2, PCIe 5.0, Wi-Fi 6E',
            socket: 'AM5',
            chipset: 'X670E',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-3',
            name: 'MSI MPG B550 Gaming Plus',
            price: 159.99,
            image: '🔌',
            specs: 'AMD B550, AM4, DDR4 4400MHz, 2x M.2, 2.5G LAN, RGB Fusion',
            socket: 'AM4',
            chipset: 'B550',
            ramType: 'DDR4',
            formFactor: 'ATX'
        },
        {
            id: 'mb-4',
            name: 'ASRock B760M Steel Legend',
            price: 189.99,
            image: '🔌',
            specs: 'Intel B760, LGA 1700, DDR5 6800MHz, 3x M.2, 2.5G LAN, ARGB',
            socket: 'LGA1700',
            chipset: 'B760',
            ramType: 'DDR5',
            formFactor: 'Micro-ATX'
        },
        {
            id: 'mb-5',
            name: 'ASUS TUF Gaming B650-PLUS',
            price: 229.99,
            image: '🔌',
            specs: 'AMD B650, AM5, DDR5 6000MHz, 3x M.2, Wi-Fi 6, 2.5G LAN',
            socket: 'AM5',
            chipset: 'B650',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-6',
            name: 'Gigabyte B550I AORUS Pro AX',
            price: 179.99,
            image: '🔌',
            specs: 'AMD B550, AM4, DDR4 4733MHz, 2x M.2, Wi-Fi 6, Mini-ITX',
            socket: 'AM4',
            chipset: 'B550',
            ramType: 'DDR4',
            formFactor: 'Mini-ITX'
        },
        {
            id: 'mb-7',
            name: 'MSI MAG Z790 Tomahawk WiFi',
            price: 289.99,
            image: '🔌',
            specs: 'Intel Z790, LGA 1700, DDR5 7200MHz, 4x M.2, Wi-Fi 6E, 2.5G LAN',
            socket: 'LGA1700',
            chipset: 'Z790',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-8',
            name: 'ASUS ROG Strix X570-E Gaming',
            price: 329.99,
            image: '🔌',
            specs: 'AMD X570, AM4, DDR4 4400MHz, 2x M.2, Wi-Fi 6, 2.5G LAN',
            socket: 'AM4',
            chipset: 'X570',
            ramType: 'DDR4',
            formFactor: 'ATX'
        },
        {
            id: 'mb-9',
            name: 'ASRock Z690 Taichi',
            price: 349.99,
            image: '🔌',
            specs: 'Intel Z690, LGA 1700, DDR5 6400MHz, 4x M.2, Wi-Fi 6E, Thunderbolt 4',
            socket: 'LGA1700',
            chipset: 'Z690',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-10',
            name: 'Gigabyte B660M DS3H AX',
            price: 129.99,
            image: '🔌',
            specs: 'Intel B660, LGA 1700, DDR4 3200MHz, 2x M.2, Wi-Fi, Micro-ATX',
            socket: 'LGA1700',
            chipset: 'B660',
            ramType: 'DDR4',
            formFactor: 'Micro-ATX'
        },
        {
            id: 'mb-11',
            name: 'MSI MEG X670E ACE',
            price: 699.99,
            image: '🔌',
            specs: 'AMD X670E, AM5, DDR5 6600MHz, 5x M.2, Wi-Fi 6E, 10G LAN',
            socket: 'AM5',
            chipset: 'X670E',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-12',
            name: 'ASUS Prime Z790-A WiFi',
            price: 299.99,
            image: '🔌',
            specs: 'Intel Z790, LGA 1700, DDR5 7200MHz, 4x M.2, Wi-Fi 6, 2.5G LAN',
            socket: 'LGA1700',
            chipset: 'Z790',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-13',
            name: 'Gigabyte X570 AORUS Elite',
            price: 199.99,
            image: '🔌',
            specs: 'AMD X570, AM4, DDR4 4400MHz, 2x M.2, 2.5G LAN, RGB Fusion',
            socket: 'AM4',
            chipset: 'X570',
            ramType: 'DDR4',
            formFactor: 'ATX'
        },
        {
            id: 'mb-14',
            name: 'ASRock B450M-HDV R4.0',
            price: 69.99,
            image: '🔌',
            specs: 'AMD B450, AM4, DDR4 3200MHz, 1x M.2, Realtek LAN, Micro-ATX',
            socket: 'AM4',
            chipset: 'B450',
            ramType: 'DDR4',
            formFactor: 'Micro-ATX'
        },
        {
            id: 'mb-15',
            name: 'MSI PRO Z690-A WiFi',
            price: 219.99,
            image: '🔌',
            specs: 'Intel Z690, LGA 1700, DDR5 6400MHz, 4x M.2, Wi-Fi 6, 2.5G LAN',
            socket: 'LGA1700',
            chipset: 'Z690',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-16',
            name: 'ASUS ROG Crosshair X670E Hero',
            price: 699.99,
            image: '🔌',
            specs: 'AMD X670E, AM5, DDR5 6400MHz, 5x M.2, Wi-Fi 6E, 10G LAN',
            socket: 'AM5',
            chipset: 'X670E',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-17',
            name: 'Gigabyte Z790 AORUS Elite AX',
            price: 259.99,
            image: '🔌',
            specs: 'Intel Z790, LGA 1700, DDR5 7600MHz, 4x M.2, Wi-Fi 6E, 2.5G LAN',
            socket: 'LGA1700',
            chipset: 'Z790',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-18',
            name: 'ASRock B550 Phantom Gaming 4',
            price: 129.99,
            image: '🔌',
            specs: 'AMD B550, AM4, DDR4 4733MHz, 2x M.2, 2.5G LAN, ARGB',
            socket: 'AM4',
            chipset: 'B550',
            ramType: 'DDR4',
            formFactor: 'ATX'
        },
        {
            id: 'mb-19',
            name: 'MSI MAG B660M Mortar WiFi',
            price: 159.99,
            image: '🔌',
            specs: 'Intel B660, LGA 1700, DDR5 6200MHz, 2x M.2, Wi-Fi 6, 2.5G LAN',
            socket: 'LGA1700',
            chipset: 'B660',
            ramType: 'DDR5',
            formFactor: 'Micro-ATX'
        },
        {
            id: 'mb-20',
            name: 'ASUS Prime B450M-A II',
            price: 79.99,
            image: '🔌',
            specs: 'AMD B450, AM4, DDR4 3533MHz, 1x M.2, Realtek LAN, Micro-ATX',
            socket: 'AM4',
            chipset: 'B450',
            ramType: 'DDR4',
            formFactor: 'Micro-ATX'
        }
    ],

    prebuilts: [
        {
            id: 'prebuilt-1',
            name: 'Alienware Aurora R15 Gaming Desktop',
            price: 2499.99,
            image: '💻',
            specs: 'Intel i9-13900KF, RTX 4090 24GB, 32GB DDR5, 2TB NVMe, 1000W PSU',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-2',
            name: 'Corsair Vengeance i7400',
            price: 1999.99,
            image: '💻',
            specs: 'Intel i7-13700K, RTX 4070 Ti 12GB, 32GB DDR5, 1TB NVMe + 2TB HDD',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-3',
            name: 'HP Omen 45L Gaming Desktop',
            price: 1799.99,
            image: '💻',
            specs: 'AMD Ryzen 7 7700X, RTX 4060 Ti 16GB, 16GB DDR5, 1TB NVMe',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-4',
            name: 'Lenovo Legion Tower 7i',
            price: 2199.99,
            image: '💻',
            specs: 'Intel i9-13900F, RTX 4080 16GB, 32GB DDR5, 2TB NVMe, AIO Cooler',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-5',
            name: 'Skytech Chronos Gaming PC',
            price: 1499.99,
            image: '💻',
            specs: 'AMD Ryzen 5 7600X, RTX 4060 8GB, 16GB DDR5, 1TB NVMe',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-6',
            name: 'iBUYPOWER SlateMesh',
            price: 1299.99,
            image: '💻',
            specs: 'Intel i5-13600KF, RTX 4060 8GB, 16GB DDR5, 1TB NVMe',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-7',
            name: 'CyberPowerPC Gamer Xtreme',
            price: 1099.99,
            image: '💻',
            specs: 'Intel i5-13400F, RTX 3060 12GB, 16GB DDR4, 500GB NVMe',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-8',
            name: 'MSI MEG Aegis Ti5',
            price: 3299.99,
            image: '💻',
            specs: 'Intel i9-14900K, RTX 4090 24GB, 64GB DDR5, 4TB NVMe, 1200W PSU',
            category: 'Extreme'
        },
        {
            id: 'prebuilt-9',
            name: 'ASUS ROG Strix GA35',
            price: 1899.99,
            image: '💻',
            specs: 'AMD Ryzen 7 5800X3D, RTX 4070 12GB, 32GB DDR4, 1TB NVMe + 2TB HDD',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-10',
            name: 'Dell XPS Desktop',
            price: 1399.99,
            image: '💻',
            specs: 'Intel i7-13700, RTX 3060 12GB, 16GB DDR5, 1TB NVMe + 1TB HDD',
            category: 'Workstation'
        },
        {
            id: 'prebuilt-11',
            name: 'Origin PC Neuron',
            price: 2799.99,
            image: '💻',
            specs: 'AMD Ryzen 9 7950X3D, RTX 4080 16GB, 64GB DDR5, 2TB NVMe, Custom Loop',
            category: 'Extreme'
        },
        {
            id: 'prebuilt-12',
            name: 'Maingear Vybe Stage 4',
            price: 1599.99,
            image: '💻',
            specs: 'Intel i7-13700F, RTX 4070 12GB, 32GB DDR5, 2TB NVMe',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-13',
            name: 'ABS Gladiator',
            price: 1199.99,
            image: '💻',
            specs: 'AMD Ryzen 5 7600, RX 7700 XT 12GB, 16GB DDR5, 1TB NVMe',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-14',
            name: 'Velocity Micro Raptor Z55',
            price: 1999.99,
            image: '💻',
            specs: 'Intel i7-14700K, RTX 4070 Ti 12GB, 32GB DDR5, 2TB NVMe',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-15',
            name: 'CLX Ra Gaming Desktop',
            price: 1699.99,
            image: '💻',
            specs: 'AMD Ryzen 7 7800X3D, RX 7800 XT 16GB, 32GB DDR5, 2TB NVMe',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-16',
            name: 'Digital Storm Lynx',
            price: 1399.99,
            image: '💻',
            specs: 'Intel i5-14600K, RTX 4060 Ti 16GB, 16GB DDR5, 1TB NVMe',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-17',
            name: 'HP Pavilion Gaming Desktop',
            price: 899.99,
            image: '💻',
            specs: 'AMD Ryzen 5 5600G, RTX 3050 8GB, 16GB DDR4, 512GB NVMe',
            category: 'Entry'
        },
        {
            id: 'prebuilt-18',
            name: 'Acer Predator Orion 3000',
            price: 1299.99,
            image: '💻',
            specs: 'Intel i7-13700F, RTX 4060 8GB, 16GB DDR5, 1TB NVMe',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-19',
            name: 'Lenovo IdeaCentre Gaming 5i',
            price: 999.99,
            image: '💻',
            specs: 'Intel i5-13400F, GTX 1660 Super 6GB, 16GB DDR4, 512GB NVMe',
            category: 'Entry'
        },
        {
            id: 'prebuilt-20',
            name: 'ASUS ROG Strix GT15',
            price: 1499.99,
            image: '💻',
            specs: 'AMD Ryzen 7 7700X, RTX 4060 Ti 8GB, 16GB DDR5, 1TB NVMe',
            category: 'Gaming'
        }
    ],

    laptops: [
        {
            id: 'laptop-1',
            name: 'ASUS ROG Zephyrus G16',
            price: 1899.99,
            image: '💻',
            specs: 'Intel i9-13900H, RTX 4070 8GB, 16GB DDR5, 1TB NVMe, 16" QHD+ 240Hz',
            category: 'Gaming'
        },
        {
            id: 'laptop-2',
            name: 'Razer Blade 15',
            price: 2499.99,
            image: '💻',
            specs: 'Intel i7-13800H, RTX 4070 8GB, 16GB DDR5, 1TB NVMe, 15.6" QHD 240Hz',
            category: 'Premium'
        },
        {
            id: 'laptop-3',
            name: 'Lenovo Legion Pro 7i',
            price: 2199.99,
            image: '💻',
            specs: 'Intel i9-13900HX, RTX 4090 16GB, 32GB DDR5, 2TB NVMe, 16" QHD+ 240Hz',
            category: 'Gaming'
        },
        {
            id: 'laptop-4',
            name: 'Dell XPS 15',
            price: 1699.99,
            image: '💻',
            specs: 'Intel i7-13700H, RTX 4050 6GB, 16GB DDR5, 1TB NVMe, 15.6" OLED 3.5K',
            category: 'Creative'
        },
        {
            id: 'laptop-5',
            name: 'MSI Stealth 17 Studio',
            price: 2999.99,
            image: '💻',
            specs: 'Intel i9-13900H, RTX 4090 16GB, 64GB DDR5, 2TB NVMe, 17" UHD 144Hz',
            category: 'Extreme'
        },
        {
            id: 'laptop-6',
            name: 'Apple MacBook Pro 16"',
            price: 2499.99,
            image: '💻',
            specs: 'M3 Pro, 18GB RAM, 512GB SSD, 16.2" Liquid Retina XDR',
            category: 'Creative'
        },
        {
            id: 'laptop-7',
            name: 'Acer Predator Helios 16',
            price: 1799.99,
            image: '💻',
            specs: 'Intel i9-13900HX, RTX 4070 8GB, 16GB DDR5, 1TB NVMe, 16" QHD+ 165Hz',
            category: 'Gaming'
        },
        {
            id: 'laptop-8',
            name: 'ASUS TUF Gaming A16',
            price: 1199.99,
            image: '💻',
            specs: 'AMD Ryzen 7 7735HS, RX 7600S 8GB, 16GB DDR5, 1TB NVMe, 16" QHD 165Hz',
            category: 'Gaming'
        },
        {
            id: 'laptop-9',
            name: 'HP Omen 16',
            price: 1499.99,
            image: '💻',
            specs: 'AMD Ryzen 7 7840HS, RTX 4060 8GB, 16GB DDR5, 1TB NVMe, 16" QHD 165Hz',
            category: 'Gaming'
        },
        {
            id: 'laptop-10',
            name: 'Lenovo ThinkPad X1 Carbon',
            price: 1899.99,
            image: '💻',
            specs: 'Intel i7-1365U, Iris Xe, 16GB LPDDR5, 1TB NVMe, 14" WUXGA',
            category: 'Business'
        },
        {
            id: 'laptop-11',
            name: 'Alienware m18',
            price: 3299.99,
            image: '💻',
            specs: 'AMD Ryzen 9 7845HX, RTX 4090 16GB, 64GB DDR5, 4TB NVMe, 18" QHD+ 165Hz',
            category: 'Extreme'
        },
        {
            id: 'laptop-12',
            name: 'MSI Katana 15',
            price: 999.99,
            image: '💻',
            specs: 'Intel i7-13620H, RTX 4060 8GB, 16GB DDR5, 1TB NVMe, 15.6" FHD 144Hz',
            category: 'Gaming'
        },
        {
            id: 'laptop-13',
            name: 'Dell G15 Gaming Laptop',
            price: 899.99,
            image: '💻',
            specs: 'AMD Ryzen 5 7640HS, RTX 4050 6GB, 16GB DDR5, 512GB NVMe, 15.6" FHD 120Hz',
            category: 'Entry'
        },
        {
            id: 'laptop-14',
            name: 'ASUS ROG Strix SCAR 18',
            price: 3499.99,
            image: '💻',
            specs: 'Intel i9-14900HX, RTX 4090 16GB, 64GB DDR5, 2TB NVMe, 18" QHD+ 240Hz',
            category: 'Extreme'
        },
        {
            id: 'laptop-15',
            name: 'Apple MacBook Air 15"',
            price: 1299.99,
            image: '💻',
            specs: 'M2 Chip, 8GB RAM, 256GB SSD, 15.3" Liquid Retina',
            category: 'Ultrabook'
        },
        {
            id: 'laptop-16',
            name: 'Razer Blade 14',
            price: 2299.99,
            image: '💻',
            specs: 'AMD Ryzen 9 7940HS, RTX 4070 8GB, 16GB DDR5, 1TB NVMe, 14" QHD 165Hz',
            category: 'Premium'
        },
        {
            id: 'laptop-17',
            name: 'Acer Swift X',
            price: 1099.99,
            image: '💻',
            specs: 'AMD Ryzen 7 7840U, RTX 3050 6GB, 16GB LPDDR5, 1TB NVMe, 14" 2.8K OLED',
            category: 'Creative'
        },
        {
            id: 'laptop-18',
            name: 'HP Victus 16',
            price: 849.99,
            image: '💻',
            specs: 'Intel i5-13420H, RTX 3050 6GB, 8GB DDR5, 512GB NVMe, 16.1" FHD 144Hz',
            category: 'Entry'
        },
        {
            id: 'laptop-19',
            name: 'Lenovo Yoga 9i',
            price: 1499.99,
            image: '💻',
            specs: 'Intel i7-1360P, Iris Xe, 16GB LPDDR5, 1TB NVMe, 14" OLED 4K Touch',
            category: '2-in-1'
        },
        {
            id: 'laptop-20',
            name: 'MSI Creator Z17 HX Studio',
            price: 2999.99,
            image: '💻',
            specs: 'Intel i9-13950HX, RTX 4070 8GB, 64GB DDR5, 2TB NVMe, 17" QHD+ Touch',
            category: 'Creative'
        }
    ],

    cpus: [
        {
            id: 'cpu-1',
            name: 'AMD Ryzen 9 7950X3D',
            price: 699.99,
            image: '💠',
            specs: '16 Core, 32 Thread, 4.2GHz Base, 5.7GHz Boost, 144MB Cache, AM5',
            socket: 'AM5',
            tdp: 120,
            integratedGraphics: true
        },
        {
            id: 'cpu-2',
            name: 'Intel Core i9-14900K',
            price: 589.99,
            image: '💠',
            specs: '24 Core, 32 Thread, 3.2GHz Base, 6.0GHz Boost, 36MB Cache, LGA1700',
            socket: 'LGA1700',
            tdp: 253,
            integratedGraphics: true
        },
        {
            id: 'cpu-3',
            name: 'AMD Ryzen 7 7800X3D',
            price: 449.99,
            image: '💠',
            specs: '8 Core, 16 Thread, 4.2GHz Base, 5.0GHz Boost, 104MB Cache, AM5',
            socket: 'AM5',
            tdp: 120,
            integratedGraphics: true
        },
        {
            id: 'cpu-4',
            name: 'Intel Core i7-14700K',
            price: 419.99,
            image: '💠',
            specs: '20 Core, 28 Thread, 3.4GHz Base, 5.6GHz Boost, 33MB Cache, LGA1700',
            socket: 'LGA1700',
            tdp: 253,
            integratedGraphics: true
        },
        {
            id: 'cpu-5',
            name: 'AMD Ryzen 5 7600X',
            price: 249.99,
            image: '💠',
            specs: '6 Core, 12 Thread, 4.7GHz Base, 5.3GHz Boost, 38MB Cache, AM5',
            socket: 'AM5',
            tdp: 105,
            integratedGraphics: true
        },
        {
            id: 'cpu-6',
            name: 'Intel Core i5-14600K',
            price: 319.99,
            image: '💠',
            specs: '14 Core, 20 Thread, 3.5GHz Base, 5.3GHz Boost, 24MB Cache, LGA1700',
            socket: 'LGA1700',
            tdp: 181,
            integratedGraphics: true
        },
        {
            id: 'cpu-7',
            name: 'AMD Ryzen 9 7900X',
            price: 429.99,
            image: '💠',
            specs: '12 Core, 24 Thread, 4.7GHz Base, 5.6GHz Boost, 76MB Cache, AM5',
            socket: 'AM5',
            tdp: 170,
            integratedGraphics: true
        },
        {
            id: 'cpu-8',
            name: 'Intel Core i3-14100',
            price: 149.99,
            image: '💠',
            specs: '4 Core, 8 Thread, 3.5GHz Base, 4.7GHz Boost, 12MB Cache, LGA1700',
            socket: 'LGA1700',
            tdp: 60,
            integratedGraphics: true
        },
        {
            id: 'cpu-9',
            name: 'AMD Ryzen 7 5700X',
            price: 199.99,
            image: '💠',
            specs: '8 Core, 16 Thread, 3.4GHz Base, 4.6GHz Boost, 36MB Cache, AM4',
            socket: 'AM4',
            tdp: 65,
            integratedGraphics: false
        },
        {
            id: 'cpu-10',
            name: 'Intel Core i9-13900KS',
            price: 699.99,
            image: '💠',
            specs: '24 Core, 32 Thread, 3.2GHz Base, 6.0GHz Boost, 36MB Cache, LGA1700',
            socket: 'LGA1700',
            tdp: 253,
            integratedGraphics: true
        },
        {
            id: 'cpu-11',
            name: 'AMD Ryzen 5 5600X',
            price: 179.99,
            image: '💠',
            specs: '6 Core, 12 Thread, 3.7GHz Base, 4.6GHz Boost, 35MB Cache, AM4',
            socket: 'AM4',
            tdp: 65,
            integratedGraphics: false
        },
        {
            id: 'cpu-12',
            name: 'Intel Core i7-13700K',
            price: 409.99,
            image: '💠',
            specs: '16 Core, 24 Thread, 3.4GHz Base, 5.4GHz Boost, 30MB Cache, LGA1700',
            socket: 'LGA1700',
            tdp: 253,
            integratedGraphics: true
        },
        {
            id: 'cpu-13',
            name: 'AMD Ryzen 9 5950X',
            price: 549.99,
            image: '💠',
            specs: '16 Core, 32 Thread, 3.4GHz Base, 4.9GHz Boost, 72MB Cache, AM4',
            socket: 'AM4',
            tdp: 105,
            integratedGraphics: false
        },
        {
            id: 'cpu-14',
            name: 'Intel Core i5-13600K',
            price: 319.99,
            image: '💠',
            specs: '14 Core, 20 Thread, 3.5GHz Base, 5.1GHz Boost, 24MB Cache, LGA1700',
            socket: 'LGA1700',
            tdp: 181,
            integratedGraphics: true
        },
        {
            id: 'cpu-15',
            name: 'AMD Ryzen 3 4100',
            price: 99.99,
            image: '💠',
            specs: '4 Core, 8 Thread, 3.8GHz Base, 4.0GHz Boost, 6MB Cache, AM4',
            socket: 'AM4',
            tdp: 65,
            integratedGraphics: false
        },
        {
            id: 'cpu-16',
            name: 'Intel Core i9-12900K',
            price: 399.99,
            image: '💠',
            specs: '16 Core, 24 Thread, 3.2GHz Base, 5.2GHz Boost, 30MB Cache, LGA1700',
            socket: 'LGA1700',
            tdp: 241,
            integratedGraphics: true
        },
        {
            id: 'cpu-17',
            name: 'AMD Ryzen 7 7700X',
            price: 349.99,
            image: '💠',
            specs: '8 Core, 16 Thread, 4.5GHz Base, 5.4GHz Boost, 40MB Cache, AM5',
            socket: 'AM5',
            tdp: 105,
            integratedGraphics: true
        },
        {
            id: 'cpu-18',
            name: 'Intel Core i5-12400',
            price: 192.99,
            image: '💠',
            specs: '6 Core, 12 Thread, 2.5GHz Base, 4.4GHz Boost, 18MB Cache, LGA1700',
            socket: 'LGA1700',
            tdp: 117,
            integratedGraphics: true
        },
        {
            id: 'cpu-19',
            name: 'AMD Ryzen 9 7900X3D',
            price: 599.99,
            image: '💠',
            specs: '12 Core, 24 Thread, 4.4GHz Base, 5.6GHz Boost, 140MB Cache, AM5',
            socket: 'AM5',
            tdp: 120,
            integratedGraphics: true
        },
        {
            id: 'cpu-20',
            name: 'Intel Core i3-13100',
            price: 134.99,
            image: '💠',
            specs: '4 Core, 8 Thread, 3.4GHz Base, 4.5GHz Boost, 12MB Cache, LGA1700',
            socket: 'LGA1700',
            tdp: 89,
            integratedGraphics: true
        }
    ],

    ram: [
        {
            id: 'ram-1',
            name: 'Corsair Dominator Platinum RGB 32GB',
            price: 149.99,
            image: '💾',
            specs: 'DDR5 6000MHz, CL30, 2x16GB, RGB, Intel XMP/AMD EXPO',
            type: 'DDR5',
            speed: 6000,
            capacity: 32,
            latency: 'CL30'
        },
        {
            id: 'ram-2',
            name: 'G.Skill Trident Z5 RGB 64GB',
            price: 249.99,
            image: '💾',
            specs: 'DDR5 6400MHz, CL32, 2x32GB, RGB, Intel XMP 3.0',
            type: 'DDR5',
            speed: 6400,
            capacity: 64,
            latency: 'CL32'
        },
        {
            id: 'ram-3',
            name: 'Kingston Fury Beast 16GB',
            price: 79.99,
            image: '💾',
            specs: 'DDR4 3200MHz, CL16, 2x8GB, Black, Plug and Play',
            type: 'DDR4',
            speed: 3200,
            capacity: 16,
            latency: 'CL16'
        },
        {
            id: 'ram-4',
            name: 'Team Group T-Force Delta RGB 32GB',
            price: 119.99,
            image: '💾',
            specs: 'DDR5 5600MHz, CL36, 2x16GB, RGB, AMD EXPO Ready',
            type: 'DDR5',
            speed: 5600,
            capacity: 32,
            latency: 'CL36'
        },
        {
            id: 'ram-5',
            name: 'Corsair Vengeance LPX 64GB',
            price: 189.99,
            image: '💾',
            specs: 'DDR4 3600MHz, CL18, 2x32GB, Black, Low Profile',
            type: 'DDR4',
            speed: 3600,
            capacity: 64,
            latency: 'CL18'
        },
        {
            id: 'ram-6',
            name: 'G.Skill Ripjaws V 16GB',
            price: 69.99,
            image: '💾',
            specs: 'DDR4 3600MHz, CL16, 2x8GB, Black, Intel XMP 2.0',
            type: 'DDR4',
            speed: 3600,
            capacity: 16,
            latency: 'CL16'
        },
        {
            id: 'ram-7',
            name: 'Crucial Pro 32GB',
            price: 89.99,
            image: '💾',
            specs: 'DDR5 5600MHz, CL46, 2x16GB, Green, JEDEC Standard',
            type: 'DDR5',
            speed: 5600,
            capacity: 32,
            latency: 'CL46'
        },
        {
            id: 'ram-8',
            name: 'OLOy Blade RGB 64GB',
            price: 199.99,
            image: '💾',
            specs: 'DDR5 6000MHz, CL30, 2x32GB, RGB, Intel/AMD Compatible',
            type: 'DDR5',
            speed: 6000,
            capacity: 64,
            latency: 'CL30'
        },
        {
            id: 'ram-9',
            name: 'Patriot Viper Steel 32GB',
            price: 99.99,
            image: '💾',
            specs: 'DDR4 4400MHz, CL19, 2x16GB, Silver, Performance Gaming',
            type: 'DDR4',
            speed: 4400,
            capacity: 32,
            latency: 'CL19'
        },
        {
            id: 'ram-10',
            name: 'ADATA XPG Lancer RGB 32GB',
            price: 129.99,
            image: '💾',
            specs: 'DDR5 6000MHz, CL30, 2x16GB, RGB, On-Die ECC',
            type: 'DDR5',
            speed: 6000,
            capacity: 32,
            latency: 'CL30'
        },
        {
            id: 'ram-11',
            name: 'Silicon Power XPOWER Turbine 16GB',
            price: 59.99,
            image: '💾',
            specs: 'DDR4 3200MHz, CL16, 2x8GB, Black, Gaming Optimized',
            type: 'DDR4',
            speed: 3200,
            capacity: 16,
            latency: 'CL16'
        },
        {
            id: 'ram-12',
            name: 'Team Group T-Create Expert 64GB',
            price: 229.99,
            image: '💾',
            specs: 'DDR5 6000MHz, CL30, 2x32GB, Black, Content Creation',
            type: 'DDR5',
            speed: 6000,
            capacity: 64,
            latency: 'CL30'
        },
        {
            id: 'ram-13',
            name: 'Corsair Vengeance RGB Pro SL 32GB',
            price: 139.99,
            image: '💾',
            specs: 'DDR4 3600MHz, CL18, 2x16GB, RGB, Slim Profile',
            type: 'DDR4',
            speed: 3600,
            capacity: 32,
            latency: 'CL18'
        },
        {
            id: 'ram-14',
            name: 'G.Skill Flare X5 32GB',
            price: 119.99,
            image: '💾',
            specs: 'DDR5 6000MHz, CL36, 2x16GB, Black, AMD EXPO Optimized',
            type: 'DDR5',
            speed: 6000,
            capacity: 32,
            latency: 'CL36'
        },
        {
            id: 'ram-15',
            name: 'Kingston ValueRAM 8GB',
            price: 34.99,
            image: '💾',
            specs: 'DDR4 2666MHz, CL19, 1x8GB, Green, Basic Computing',
            type: 'DDR4',
            speed: 2666,
            capacity: 8,
            latency: 'CL19'
        },
        {
            id: 'ram-16',
            name: 'Team Group Zeus 16GB',
            price: 54.99,
            image: '💾',
            specs: 'DDR4 3200MHz, CL16, 1x16GB, Black, Single Rank',
            type: 'DDR4',
            speed: 3200,
            capacity: 16,
            latency: 'CL16'
        },
        {
            id: 'ram-17',
            name: 'Patriot Signature Line 8GB',
            price: 29.99,
            image: '💾',
            specs: 'DDR4 2666MHz, CL19, 1x8GB, Green, Budget Friendly',
            type: 'DDR4',
            speed: 2666,
            capacity: 8,
            latency: 'CL19'
        },
        {
            id: 'ram-18',
            name: 'OLOy WarHawk RGB 32GB',
            price: 109.99,
            image: '💾',
            specs: 'DDR4 3600MHz, CL18, 2x16GB, RGB, Aggressive Styling',
            type: 'DDR4',
            speed: 3600,
            capacity: 32,
            latency: 'CL18'
        },
        {
            id: 'ram-19',
            name: 'ADATA Spectrix D50 16GB',
            price: 79.99,
            image: '💾',
            specs: 'DDR4 3600MHz, CL18, 2x8GB, RGB, XMP 2.0 Ready',
            type: 'DDR4',
            speed: 3600,
            capacity: 16,
            latency: 'CL18'
        },
        {
            id: 'ram-20',
            name: 'Crucial Ballistix 32GB',
            price: 129.99,
            image: '💾',
            specs: 'DDR4 3200MHz, CL16, 2x16GB, Black, Micron E-Die',
            type: 'DDR4',
            speed: 3200,
            capacity: 32,
            latency: 'CL16'
        }
    ],

    gpus: [
        {
            id: 'gpu-1',
            name: 'NVIDIA GeForce RTX 4090',
            price: 1599.99,
            image: '🔷',
            specs: '24GB GDDR6X, 16384 Cores, 2.52GHz Boost, DLSS 3, Ada Lovelace',
            vram: 24,
            power: 450
        },
        {
            id: 'gpu-2',
            name: 'AMD Radeon RX 7900 XTX',
            price: 999.99,
            image: '🔷',
            specs: '24GB GDDR6, 6144 Cores, 2.3GHz Game Clock, FSR 3, RDNA 3',
            vram: 24,
            power: 355
        },
        {
            id: 'gpu-3',
            name: 'NVIDIA GeForce RTX 4080',
            price: 1199.99,
            image: '🔷',
            specs: '16GB GDDR6X, 9728 Cores, 2.51GHz Boost, DLSS 3, Ada Lovelace',
            vram: 16,
            power: 320
        },
        {
            id: 'gpu-4',
            name: 'AMD Radeon RX 7800 XT',
            price: 499.99,
            image: '🔷',
            specs: '16GB GDDR6, 3840 Cores, 2.43GHz Game Clock, FSR 3, RDNA 3',
            vram: 16,
            power: 263
        },
        {
            id: 'gpu-5',
            name: 'NVIDIA GeForce RTX 4070 Ti',
            price: 799.99,
            image: '🔷',
            specs: '12GB GDDR6X, 7680 Cores, 2.61GHz Boost, DLSS 3, Ada Lovelace',
            vram: 12,
            power: 285
        },
        {
            id: 'gpu-6',
            name: 'AMD Radeon RX 7700 XT',
            price: 449.99,
            image: '🔷',
            specs: '12GB GDDR6, 3456 Cores, 2.54GHz Game Clock, FSR 3, RDNA 3',
            vram: 12,
            power: 245
        },
        {
            id: 'gpu-7',
            name: 'NVIDIA GeForce RTX 4070',
            price: 599.99,
            image: '🔷',
            specs: '12GB GDDR6X, 5888 Cores, 2.48GHz Boost, DLSS 3, Ada Lovelace',
            vram: 12,
            power: 200
        },
        {
            id: 'gpu-8',
            name: 'AMD Radeon RX 7600',
            price: 269.99,
            image: '🔷',
            specs: '8GB GDDR6, 2048 Cores, 2.66GHz Game Clock, FSR 3, RDNA 3',
            vram: 8,
            power: 165
        },
        {
            id: 'gpu-9',
            name: 'NVIDIA GeForce RTX 4060 Ti',
            price: 399.99,
            image: '🔷',
            specs: '8GB GDDR6, 4352 Cores, 2.54GHz Boost, DLSS 3, Ada Lovelace',
            vram: 8,
            power: 160
        },
        {
            id: 'gpu-10',
            name: 'NVIDIA GeForce RTX 4060',
            price: 299.99,
            image: '🔷',
            specs: '8GB GDDR6, 3072 Cores, 2.46GHz Boost, DLSS 3, Ada Lovelace',
            vram: 8,
            power: 115
        },
        {
            id: 'gpu-11',
            name: 'AMD Radeon RX 6750 XT',
            price: 349.99,
            image: '🔷',
            specs: '12GB GDDR6, 2560 Cores, 2.6GHz Game Clock, FSR, RDNA 2',
            vram: 12,
            power: 250
        },
        {
            id: 'gpu-12',
            name: 'NVIDIA GeForce RTX 3060 Ti',
            price: 399.99,
            image: '🔷',
            specs: '8GB GDDR6, 4864 Cores, 1.67GHz Boost, DLSS, Ampere',
            vram: 8,
            power: 200
        },
        {
            id: 'gpu-13',
            name: 'AMD Radeon RX 6600 XT',
            price: 249.99,
            image: '🔷',
            specs: '8GB GDDR6, 2048 Cores, 2.59GHz Game Clock, FSR, RDNA 2',
            vram: 8,
            power: 160
        },
        {
            id: 'gpu-14',
            name: 'NVIDIA GeForce RTX 3050',
            price: 249.99,
            image: '🔷',
            specs: '8GB GDDR6, 2560 Cores, 1.78GHz Boost, DLSS, Ampere',
            vram: 8,
            power: 130
        },
        {
            id: 'gpu-15',
            name: 'AMD Radeon RX 6500 XT',
            price: 199.99,
            image: '🔷',
            specs: '4GB GDDR6, 1024 Cores, 2.8GHz Game Clock, FSR, RDNA 2',
            vram: 4,
            power: 107
        },
        {
            id: 'gpu-16',
            name: 'NVIDIA GeForce GTX 1660 Super',
            price: 229.99,
            image: '🔷',
            specs: '6GB GDDR6, 1408 Cores, 1.78GHz Boost, Turing Architecture',
            vram: 6,
            power: 125
        },
        {
            id: 'gpu-17',
            name: 'AMD Radeon RX 6400',
            price: 159.99,
            image: '🔷',
            specs: '4GB GDDR6, 768 Cores, 2.32GHz Game Clock, FSR, RDNA 2',
            vram: 4,
            power: 53
        },
        {
            id: 'gpu-18',
            name: 'NVIDIA GeForce RTX 3090 Ti',
            price: 1499.99,
            image: '🔷',
            specs: '24GB GDDR6X, 10752 Cores, 1.86GHz Boost, DLSS, Ampere',
            vram: 24,
            power: 450
        },
        {
            id: 'gpu-19',
            name: 'AMD Radeon RX 6900 XT',
            price: 699.99,
            image: '🔷',
            specs: '16GB GDDR6, 5120 Cores, 2.25GHz Game Clock, FSR, RDNA 2',
            vram: 16,
            power: 300
        },
        {
            id: 'gpu-20',
            name: 'NVIDIA GeForce GTX 1650',
            price: 169.99,
            image: '🔷',
            specs: '4GB GDDR6, 896 Cores, 1.59GHz Boost, Turing Architecture',
            vram: 4,
            power: 75
        }
    ],

    storage: [
        {
            id: 'ssd-1',
            name: 'Samsung 990 Pro 2TB NVMe',
            price: 179.99,
            image: '💿',
            specs: 'PCIe 4.0, 7450MB/s Read, 6900MB/s Write, 2TB, M.2 2280',
            type: 'NVMe',
            capacity: 2000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-2',
            name: 'WD Black SN850X 4TB',
            price: 349.99,
            image: '💿',
            specs: 'PCIe 4.0, 7300MB/s Read, 6600MB/s Write, 4TB, M.2 2280',
            type: 'NVMe',
            capacity: 4000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-3',
            name: 'Crucial P5 Plus 1TB',
            price: 89.99,
            image: '💿',
            specs: 'PCIe 4.0, 6600MB/s Read, 5000MB/s Write, 1TB, M.2 2280',
            type: 'NVMe',
            capacity: 1000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-4',
            name: 'Seagate FireCuda 530 2TB',
            price: 199.99,
            image: '💿',
            specs: 'PCIe 4.0, 7300MB/s Read, 6900MB/s Write, 2TB, M.2 2280',
            type: 'NVMe',
            capacity: 2000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-5',
            name: 'Samsung 870 EVO 4TB SATA',
            price: 299.99,
            image: '💿',
            specs: 'SATA III, 560MB/s Read, 530MB/s Write, 4TB, 2.5" SSD',
            type: 'SATA',
            capacity: 4000,
            interface: 'SATA III'
        },
        {
            id: 'ssd-6',
            name: 'Kingston NV2 2TB',
            price: 109.99,
            image: '💿',
            specs: 'PCIe 4.0, 3500MB/s Read, 2800MB/s Write, 2TB, M.2 2280',
            type: 'NVMe',
            capacity: 2000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-7',
            name: 'Sabrent Rocket 4 Plus 8TB',
            price: 899.99,
            image: '💿',
            specs: 'PCIe 4.0, 7000MB/s Read, 6600MB/s Write, 8TB, M.2 2280',
            type: 'NVMe',
            capacity: 8000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-8',
            name: 'WD Blue SN580 1TB',
            price: 69.99,
            image: '💿',
            specs: 'PCIe 4.0, 4150MB/s Read, 4150MB/s Write, 1TB, M.2 2280',
            type: 'NVMe',
            capacity: 1000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-9',
            name: 'Crucial MX500 2TB',
            price: 129.99,
            image: '💿',
            specs: 'SATA III, 560MB/s Read, 510MB/s Write, 2TB, 2.5" SSD',
            type: 'SATA',
            capacity: 2000,
            interface: 'SATA III'
        },
        {
            id: 'ssd-10',
            name: 'Team Group MP44L 2TB',
            price: 119.99,
            image: '💿',
            specs: 'PCIe 4.0, 5000MB/s Read, 4500MB/s Write, 2TB, M.2 2280',
            type: 'NVMe',
            capacity: 2000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-11',
            name: 'Seagate Barracuda 4TB HDD',
            price: 79.99,
            image: '💿',
            specs: 'SATA III, 190MB/s Read, 4TB, 7200RPM, 3.5" HDD',
            type: 'HDD',
            capacity: 4000,
            interface: 'SATA III'
        },
        {
            id: 'ssd-12',
            name: 'WD Black AN1500 2TB',
            price: 299.99,
            image: '💿',
            specs: 'PCIe 4.0, 6500MB/s Read, 4100MB/s Write, 2TB, Add-in Card',
            type: 'AIC',
            capacity: 2000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-13',
            name: 'Samsung 980 Pro 1TB',
            price: 99.99,
            image: '💿',
            specs: 'PCIe 4.0, 7000MB/s Read, 5000MB/s Write, 1TB, M.2 2280',
            type: 'NVMe',
            capacity: 1000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-14',
            name: 'ADATA XPG SX8200 Pro 2TB',
            price: 129.99,
            image: '💿',
            specs: 'PCIe 3.0, 3500MB/s Read, 3000MB/s Write, 2TB, M.2 2280',
            type: 'NVMe',
            capacity: 2000,
            interface: 'PCIe 3.0'
        },
        {
            id: 'ssd-15',
            name: 'Crucial P3 4TB',
            price: 199.99,
            image: '💿',
            specs: 'PCIe 3.0, 3500MB/s Read, 3000MB/s Write, 4TB, M.2 2280',
            type: 'NVMe',
            capacity: 4000,
            interface: 'PCIe 3.0'
        },
        {
            id: 'ssd-16',
            name: 'WD Red Plus 8TB HDD',
            price: 169.99,
            image: '💿',
            specs: 'SATA III, 210MB/s Read, 8TB, 7200RPM, 3.5" NAS HDD',
            type: 'HDD',
            capacity: 8000,
            interface: 'SATA III'
        },
        {
            id: 'ssd-17',
            name: 'SK Hynix Platinum P41 2TB',
            price: 169.99,
            image: '💿',
            specs: 'PCIe 4.0, 7000MB/s Read, 6500MB/s Write, 2TB, M.2 2280',
            type: 'NVMe',
            capacity: 2000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-18',
            name: 'Seagate IronWolf 12TB HDD',
            price: 249.99,
            image: '💿',
            specs: 'SATA III, 210MB/s Read, 12TB, 7200RPM, 3.5" NAS HDD',
            type: 'HDD',
            capacity: 12000,
            interface: 'SATA III'
        },
        {
            id: 'ssd-19',
            name: 'Kingston A400 480GB',
            price: 34.99,
            image: '💿',
            specs: 'SATA III, 500MB/s Read, 450MB/s Write, 480GB, 2.5" SSD',
            type: 'SATA',
            capacity: 480,
            interface: 'SATA III'
        },
        {
            id: 'ssd-20',
            name: 'Sabrent Rocket Q 8TB',
            price: 699.99,
            image: '💿',
            specs: 'PCIe 4.0, 4700MB/s Read, 4700MB/s Write, 8TB, M.2 2280',
            type: 'NVMe',
            capacity: 8000,
            interface: 'PCIe 4.0'
        }
    ],

    psus: [
        {
            id: 'psu-1',
            name: 'Corsair RM1000x Shift',
            price: 189.99,
            image: '⚡',
            specs: '1000W, 80+ Gold, Fully Modular, ATX 3.0, PCIe 5.0',
            wattage: 1000,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-2',
            name: 'Seasonic Prime TX-1000',
            price: 259.99,
            image: '⚡',
            specs: '1000W, 80+ Titanium, Fully Modular, ATX 3.0, 12-year Warranty',
            wattage: 1000,
            rating: '80+ Titanium',
            modular: 'Full'
        },
        {
            id: 'psu-3',
            name: 'EVGA SuperNOVA 850 G6',
            price: 149.99,
            image: '⚡',
            specs: '850W, 80+ Gold, Fully Modular, ATX 3.0, Eco Mode',
            wattage: 850,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-4',
            name: 'be quiet! Straight Power 11 750W',
            price: 129.99,
            image: '⚡',
            specs: '750W, 80+ Platinum, Fully Modular, Silent Wings Fan',
            wattage: 750,
            rating: '80+ Platinum',
            modular: 'Full'
        },
        {
            id: 'psu-5',
            name: 'Thermaltake Toughpower GF3 1200W',
            price: 219.99,
            image: '⚡',
            specs: '1200W, 80+ Gold, Fully Modular, ATX 3.0, PCIe 5.0 Ready',
            wattage: 1200,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-6',
            name: 'Cooler Master MWE Gold 850 V2',
            price: 119.99,
            image: '⚡',
            specs: '850W, 80+ Gold, Fully Modular, Japanese Capacitors',
            wattage: 850,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-7',
            name: 'ASUS ROG Thor 1200P2',
            price: 349.99,
            image: '⚡',
            specs: '1200W, 80+ Platinum, Fully Modular, OLED Display, RGB',
            wattage: 1200,
            rating: '80+ Platinum',
            modular: 'Full'
        },
        {
            id: 'psu-8',
            name: 'FSP Hydro G Pro 1000W',
            price: 169.99,
            image: '⚡',
            specs: '1000W, 80+ Gold, Fully Modular, ATX 3.0, 140mm Fan',
            wattage: 1000,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-9',
            name: 'NZXT C1200 Gold',
            price: 199.99,
            image: '⚡',
            specs: '1200W, 80+ Gold, Fully Modular, ATX 3.0, Zero RPM Mode',
            wattage: 1200,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-10',
            name: 'Super Flower Leadex VII 1300W',
            price: 249.99,
            image: '⚡',
            specs: '1300W, 80+ Gold, Fully Modular, ATX 3.0, 135mm Fan',
            wattage: 1300,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-11',
            name: 'Corsair CX650M',
            price: 79.99,
            image: '⚡',
            specs: '650W, 80+ Bronze, Semi-Modular, 120mm Fan, Budget Option',
            wattage: 650,
            rating: '80+ Bronze',
            modular: 'Semi'
        },
        {
            id: 'psu-12',
            name: 'EVGA 600 BR',
            price: 59.99,
            image: '⚡',
            specs: '600W, 80+ Bronze, Non-Modular, 120mm Fan, Basic Builds',
            wattage: 600,
            rating: '80+ Bronze',
            modular: 'None'
        },
        {
            id: 'psu-13',
            name: 'Seasonic Focus GX-750',
            price: 129.99,
            image: '⚡',
            specs: '750W, 80+ Gold, Fully Modular, Hybrid Silent Fan Control',
            wattage: 750,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-14',
            name: 'be quiet! System Power 10 650W',
            price: 69.99,
            image: '⚡',
            specs: '650W, 80+ Bronze, Non-Modular, Silent Operation',
            wattage: 650,
            rating: '80+ Bronze',
            modular: 'None'
        },
        {
            id: 'psu-15',
            name: 'Thermaltake Smart 700W',
            price: 64.99,
            image: '⚡',
            specs: '700W, 80+ White, Non-Modular, 120mm Fan, Entry Level',
            wattage: 700,
            rating: '80+ White',
            modular: 'None'
        },
        {
            id: 'psu-16',
            name: 'Cooler Master V850 Gold V2',
            price: 139.99,
            image: '⚡',
            specs: '850W, 80+ Gold, Fully Modular, Japanese Capacitors',
            wattage: 850,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-17',
            name: 'ASUS TUF Gaming 750W',
            price: 119.99,
            image: '⚡',
            specs: '750W, 80+ Bronze, Semi-Modular, Military-grade Components',
            wattage: 750,
            rating: '80+ Bronze',
            modular: 'Semi'
        },
        {
            id: 'psu-18',
            name: 'FSP Dagger Pro 850W',
            price: 149.99,
            image: '⚡',
            specs: '850W, 80+ Gold, Fully Modular, SFX Form Factor',
            wattage: 850,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-19',
            name: 'SilverStone Essential ET650-H',
            price: 74.99,
            image: '⚡',
            specs: '650W, 80+ Bronze, Non-Modular, 120mm Silent Fan',
            wattage: 650,
            rating: '80+ Bronze',
            modular: 'None'
        },
        {
            id: 'psu-20',
            name: 'Phanteks AMP 1000W',
            price: 169.99,
            image: '⚡',
            specs: '1000W, 80+ Gold, Fully Modular, ATX 3.0, 10-year Warranty',
            wattage: 1000,
            rating: '80+ Gold',
            modular: 'Full'
        }
    ],

    cases: [
        {
            id: 'case-1',
            name: 'Lian Li O11 Dynamic EVO',
            price: 159.99,
            image: '📦',
            specs: 'Mid Tower, Dual Chamber, Tempered Glass, White, E-ATX Support',
            formFactor: 'Mid Tower',
            color: 'White'
        },
        {
            id: 'case-2',
            name: 'Fractal Design North',
            price: 149.99,
            image: '📦',
            specs: 'Mid Tower, Wood Front Panel, Tempered Glass, Black, ATX Support',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-3',
            name: 'Corsair 4000D Airflow',
            price: 104.99,
            image: '📦',
            specs: 'Mid Tower, Mesh Front Panel, Tempered Glass, Black, ATX Support',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-4',
            name: 'NZXT H9 Flow',
            price: 159.99,
            image: '📦',
            specs: 'Mid Tower, Dual Chamber, Tempered Glass, White, E-ATX Support',
            formFactor: 'Mid Tower',
            color: 'White'
        },
        {
            id: 'case-5',
            name: 'Phanteks Eclipse P600S',
            price: 169.99,
            image: '📦',
            specs: 'Mid Tower, Sound Dampening, Tempered Glass, Black, E-ATX Support',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-6',
            name: 'be quiet! Silent Base 802',
            price: 179.99,
            image: '📦',
            specs: 'Mid Tower, Modular, Sound Dampening, Tempered Glass, Black',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-7',
            name: 'Cooler Master MasterBox TD500',
            price: 119.99,
            image: '📦',
            specs: 'Mid Tower, Mesh Front, ARGB Fans, Tempered Glass, White',
            formFactor: 'Mid Tower',
            color: 'White'
        },
        {
            id: 'case-8',
            name: 'HYTE Y60',
            price: 199.99,
            image: '📦',
            specs: 'Mid Tower, Panoramic Glass, Dual Chamber, Black, ATX Support',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-9',
            name: 'Lian Li Lancool 216',
            price: 109.99,
            image: '📦',
            specs: 'Mid Tower, Mesh Front, 160mm Fans, Tempered Glass, Black',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-10',
            name: 'Fractal Design Pop Air',
            price: 89.99,
            image: '📦',
            specs: 'Mid Tower, Mesh Front, RGB Fans, Tempered Glass, White',
            formFactor: 'Mid Tower',
            color: 'White'
        },
        {
            id: 'case-11',
            name: 'Corsair 5000D Airflow',
            price: 174.99,
            image: '📦',
            specs: 'Mid Tower, Dual Chamber, Tempered Glass, Black, E-ATX Support',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-12',
            name: 'NZXT H7 Flow',
            price: 129.99,
            image: '📦',
            specs: 'Mid Tower, Mesh Front, Tempered Glass, Black, ATX Support',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-13',
            name: 'Phanteks Evolv X',
            price: 199.99,
            image: '📦',
            specs: 'Mid Tower, Aluminum, Tempered Glass, Gray, E-ATX Support',
            formFactor: 'Mid Tower',
            color: 'Gray'
        },
        {
            id: 'case-14',
            name: 'be quiet! Pure Base 500DX',
            price: 109.99,
            image: '📦',
            specs: 'Mid Tower, Mesh Front, RGB Strip, Tempered Glass, Black',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-15',
            name: 'Cooler Master HAF 700 EVO',
            price: 349.99,
            image: '📦',
            specs: 'Full Tower, Extreme Airflow, Dual Chamber, Black, E-ATX Support',
            formFactor: 'Full Tower',
            color: 'Black'
        },
        {
            id: 'case-16',
            name: 'Lian Li PC-O11 Dynamic',
            price: 149.99,
            image: '📦',
            specs: 'Mid Tower, Dual Chamber, Tempered Glass, Black, E-ATX Support',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-17',
            name: 'Fractal Design Meshify 2',
            price: 159.99,
            image: '📦',
            specs: 'Mid Tower, Mesh Front, Tempered Glass, Black, ATX Support',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-18',
            name: 'Corsair iCUE 4000X RGB',
            price: 144.99,
            image: '📦',
            specs: 'Mid Tower, Tempered Glass, 3x RGB Fans, Black, ATX Support',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-19',
            name: 'NZXT H510 Flow',
            price: 89.99,
            image: '📦',
            specs: 'Mid Tower, Mesh Front, Tempered Glass, Black, ATX Support',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-20',
            name: 'Phanteks Eclipse G360A',
            price: 109.99,
            image: '📦',
            specs: 'Mid Tower, Mesh Front, 3x ARGB Fans, Tempered Glass, White',
            formFactor: 'Mid Tower',
            color: 'White'
        }
    ],

    monitors: [
        {
            id: 'monitor-1',
            name: 'Samsung Odyssey G9',
            price: 1199.99,
            image: '🖥️',
            specs: '49" Curved, 5120x1440, 240Hz, QLED, 1ms, G-Sync Compatible'
        },
        {
            id: 'monitor-2',
            name: 'LG UltraGear 48GQ900-B',
            price: 1299.99,
            image: '🖥️',
            specs: '48" OLED, 3840x2160, 120Hz, 0.1ms, G-Sync, Anti-Glare'
        },
        {
            id: 'monitor-3',
            name: 'ASUS ROG Swift PG32UQX',
            price: 2999.99,
            image: '🖥️',
            specs: '32" 4K, 144Hz, Mini-LED, G-Sync Ultimate, 1152-zone Local Dimming'
        },
        {
            id: 'monitor-4',
            name: 'Alienware AW3423DW',
            price: 1299.99,
            image: '🖥️',
            specs: '34" QD-OLED, 3440x1440, 175Hz, 0.1ms, G-Sync Ultimate'
        },
        {
            id: 'monitor-5',
            name: 'MSI MPG ARTYMIS 343CQR',
            price: 799.99,
            image: '🖥️',
            specs: '34" Curved, 3440x1440, 165Hz, 1ms, RGB, USB-C'
        },
        {
            id: 'monitor-6',
            name: 'Acer Predator X38 S',
            price: 1499.99,
            image: '🖥️',
            specs: '38" Curved, 3840x1600, 175Hz, G-Sync, RGB Lighting'
        },
        {
            id: 'monitor-7',
            name: 'Gigabyte M32U',
            price: 749.99,
            image: '🖥️',
            specs: '32" 4K, 144Hz, 1ms, SS IPS, KVM, 90W USB-C'
        },
        {
            id: 'monitor-8',
            name: 'Dell S2721DGF',
            price: 449.99,
            image: '🖥️',
            specs: '27" QHD, 165Hz, 1ms, IPS, AMD FreeSync Premium Pro'
        },
        {
            id: 'monitor-9',
            name: 'ViewSonic XG270QG',
            price: 599.99,
            image: '🖥️',
            specs: '27" QHD, 165Hz, 1ms, Nano IPS, G-Sync, RGB Base'
        },
        {
            id: 'monitor-10',
            name: 'Samsung Odyssey Neo G8',
            price: 1499.99,
            image: '🖥️',
            specs: '32" 4K, 240Hz, Quantum Mini-LED, 1ms, G-Sync Compatible'
        },
        {
            id: 'monitor-11',
            name: 'LG 27GP950-B',
            price: 899.99,
            image: '🖥️',
            specs: '27" 4K, 160Hz, 1ms, Nano IPS, G-Sync Compatible, HDMI 2.1'
        },
        {
            id: 'monitor-12',
            name: 'ASUS TUF Gaming VG289Q',
            price: 329.99,
            image: '🖥️',
            specs: '28" 4K, 60Hz, 5ms, IPS, FreeSync, Shadow Boost'
        },
        {
            id: 'monitor-13',
            name: 'AOC CQ32G2SE',
            price: 349.99,
            image: '🖥️',
            specs: '32" QHD, 165Hz, 1ms, VA, Curved, FreeSync Premium'
        },
        {
            id: 'monitor-14',
            name: 'HP Omen 27i',
            price: 499.99,
            image: '🖥️',
            specs: '27" QHD, 165Hz, 1ms, Nano IPS, G-Sync Compatible'
        },
        {
            id: 'monitor-15',
            name: 'BenQ EX2780Q',
            price: 499.99,
            image: '🖥️',
            specs: '27" QHD, 144Hz, 5ms, IPS, FreeSync, HDRi'
        },
        {
            id: 'monitor-16',
            name: 'MSI Optix MAG274QRF-QD',
            price: 549.99,
            image: '🖥️',
            specs: '27" QHD, 165Hz, 1ms, IPS, Quantum Dot, RGB'
        },
        {
            id: 'monitor-17',
            name: 'ViewSonic ELITE XG270',
            price: 399.99,
            image: '🖥️',
            specs: '27" FHD, 240Hz, 1ms, IPS, FreeSync, RGB Lighting'
        },
        {
            id: 'monitor-18',
            name: 'Acer Nitro XV282K',
            price: 799.99,
            image: '🖥️',
            specs: '28" 4K, 144Hz, 1ms, IPS, FreeSync, HDMI 2.1'
        },
        {
            id: 'monitor-19',
            name: 'Gigabyte AORUS FI32U',
            price: 899.99,
            image: '🖥️',
            specs: '32" 4K, 144Hz, 1ms, SS IPS, KVM, 90W USB-C'
        },
        {
            id: 'monitor-20',
            name: 'Dell Alienware AW2523HF',
            price: 449.99,
            image: '🖥️',
            specs: '24.5" FHD, 360Hz, 1ms, IPS, G-Sync Compatible'
        }
    ],

    mice: [
        {
            id: 'mouse-1',
            name: 'Razer Viper V2 Pro',
            price: 149.99,
            image: '🖱️',
            specs: 'Wireless, 30K DPI, 80g, Optical Switches, HyperSpeed'
        },
        {
            id: 'mouse-2',
            name: 'Logitech G Pro X Superlight',
            price: 159.99,
            image: '🖱️',
            specs: 'Wireless, 25K DPI, 63g, HERO Sensor, LIGHTSYNC RGB'
        },
        {
            id: 'mouse-3',
            name: 'SteelSeries Aerox 9 Wireless',
            price: 149.99,
            image: '🖱️',
            specs: 'Wireless, 18K DPI, 89g, 12 Side Buttons, Quantum 2.0'
        },
        {
            id: 'mouse-4',
            name: 'Corsair Dark Core RGB Pro',
            price: 89.99,
            image: '🖱️',
            specs: 'Wireless, 18K DPI, 12g, 8 Buttons, SLIPSTREAM'
        },
        {
            id: 'mouse-5',
            name: 'Razer DeathAdder V3 Pro',
            price: 149.99,
            image: '🖱️',
            specs: 'Wireless, 30K DPI, 64g, Focus Pro 30K, 90Hr Battery'
        },
        {
            id: 'mouse-6',
            name: 'Logitech G502 X Plus',
            price: 159.99,
            image: '🖱️',
            specs: 'Wireless, 25K DPI, 106g, LIGHTFORCE, LIGHTSYNC RGB'
        },
        {
            id: 'mouse-7',
            name: 'Glorious Model O Wireless',
            price: 79.99,
            image: '🖱️',
            specs: 'Wireless, 19K DPI, 69g, Honeycomb Shell, BAMF Sensor'
        },
        {
            id: 'mouse-8',
            name: 'Razer Basilisk V3 Pro',
            price: 159.99,
            image: '🖱️',
            specs: 'Wireless, 30K DPI, 112g, 11 Buttons, HyperScroll'
        },
        {
            id: 'mouse-9',
            name: 'SteelSeries Rival 650 Wireless',
            price: 119.99,
            image: '🖱️',
            specs: 'Wireless, 12K DPI, 121g, 7 Buttons, Quantum Wireless'
        },
        {
            id: 'mouse-10',
            name: 'Corsair M65 Ultra Wireless',
            price: 99.99,
            image: '🖱️',
            specs: 'Wireless, 26K DPI, 97g, Aluminum Frame, SLIPSTREAM'
        },
        {
            id: 'mouse-11',
            name: 'Logitech G903 LIGHTSPEED',
            price: 129.99,
            image: '🖱️',
            specs: 'Wireless, 25K DPI, 110g, Ambidextrous, POWERPLAY'
        },
        {
            id: 'mouse-12',
            name: 'Razer Naga Pro',
            price: 149.99,
            image: '🖱️',
            specs: 'Wireless, 20K DPI, 117g, Interchangeable Side Plates'
        },
        {
            id: 'mouse-13',
            name: 'SteelSeries Prime Wireless',
            price: 129.99,
            image: '🖱️',
            specs: 'Wireless, 18K DPI, 80g, Prestige OM Switches'
        },
        {
            id: 'mouse-14',
            name: 'Corsair Sabre RGB Pro',
            price: 59.99,
            image: '🖱️',
            specs: 'Wired, 18K DPI, 74g, 8 Buttons, QUICKSTRIKE'
        },
        {
            id: 'mouse-15',
            name: 'Logitech G305 LIGHTSPEED',
            price: 49.99,
            image: '🖱️',
            specs: 'Wireless, 12K DPI, 99g, HERO Sensor, 250Hr Battery'
        },
        {
            id: 'mouse-16',
            name: 'Razer Viper Mini',
            price: 39.99,
            image: '🖱️',
            specs: 'Wired, 8.5K DPI, 61g, Optical Switches, Speedflex Cable'
        },
        {
            id: 'mouse-17',
            name: 'Glorious Model D Wireless',
            price: 79.99,
            image: '🖱️',
            specs: 'Wireless, 19K DPI, 69g, Ergonomic, BAMF Sensor'
        },
        {
            id: 'mouse-18',
            name: 'SteelSeries Sensei Ten',
            price: 69.99,
            image: '🖱️',
            specs: 'Wired, 18K DPI, 92g, Ambidextrous, TrueMove Pro'
        },
        {
            id: 'mouse-19',
            name: 'Corsair Katar Pro Wireless',
            price: 49.99,
            image: '🖱️',
            specs: 'Wireless, 10K DPI, 96g, SLIPSTREAM, 135Hr Battery'
        },
        {
            id: 'mouse-20',
            name: 'Logitech MX Master 3S',
            price: 99.99,
            image: '🖱️',
            specs: 'Wireless, 8K DPI, 141g, MagSpeed, Multi-Device'
        }
    ],

    keyboards: [
        {
            id: 'keyboard-1',
            name: 'Corsair K100 RGB',
            price: 229.99,
            image: '⌨️',
            specs: 'Mechanical, OPX Optical Switches, 4000Hz Polling, RGB'
        },
        {
            id: 'keyboard-2',
            name: 'Razer BlackWidow V4 Pro',
            price: 229.99,
            image: '⌨️',
            specs: 'Mechanical, Green Switches, 8000Hz Polling, RGB, Media Dock'
        },
        {
            id: 'keyboard-3',
            name: 'SteelSeries Apex Pro TKL',
            price: 179.99,
            image: '⌨️',
            specs: 'Mechanical, OmniPoint 2.0, Adjustable Actuation, OLED Screen'
        },
        {
            id: 'keyboard-4',
            name: 'Logitech G915 TKL',
            price: 229.99,
            image: '⌨️',
            specs: 'Wireless, GL Tactile, LIGHTSYNC RGB, 1ms Response, 40Hr Battery'
        },
        {
            id: 'keyboard-5',
            name: 'Keychron Q6 Pro',
            price: 215.99,
            image: '⌨️',
            specs: 'Custom Mechanical, Gateron Pro Switches, QMK/VIA, Aluminum'
        },
        {
            id: 'keyboard-6',
            name: 'ASUS ROG Strix Scope II 96',
            price: 179.99,
            image: '⌨️',
            specs: 'Wireless, ROG NX Snow, 3-mode, 1600Hr Battery, Hot-swap'
        },
        {
            id: 'keyboard-7',
            name: 'Corsair K70 RGB TKL',
            price: 129.99,
            image: '⌨️',
            specs: 'Mechanical, Cherry MX Red, 8000Hz Polling, PBT Keycaps'
        },
        {
            id: 'keyboard-8',
            name: 'Razer Huntsman V2 TKL',
            price: 149.99,
            image: '⌨️',
            specs: 'Optical, Linear Optical Switches, 8000Hz Polling, Doubleshot PBT'
        },
        {
            id: 'keyboard-9',
            name: 'SteelSeries Apex 7 TKL',
            price: 119.99,
            image: '⌨️',
            specs: 'Mechanical, Red Switches, OLED Smart Display, Aircraft Aluminum'
        },
        {
            id: 'keyboard-10',
            name: 'Logitech G PRO X TKL',
            price: 129.99,
            image: '⌨️',
            specs: 'Mechanical, GX Blue Clicky, LIGHTSYNC RGB, Detachable Cable'
        },
        {
            id: 'keyboard-11',
            name: 'Ducky One 3 SF',
            price: 109.99,
            image: '⌨️',
            specs: 'Mechanical, Cherry MX Brown, 65% Layout, PBT Keycaps'
        },
        {
            id: 'keyboard-12',
            name: 'Glorious GMMK 2 96%',
            price: 119.99,
            image: '⌨️',
            specs: 'Mechanical, Gateron Brown, 96% Layout, RGB, Hot-swap'
        },
        {
            id: 'keyboard-13',
            name: 'HyperX Alloy Origins 65',
            price: 89.99,
            image: '⌨️',
            specs: 'Mechanical, Red Linear, 65% Layout, Aircraft-grade Aluminum'
        },
        {
            id: 'keyboard-14',
            name: 'Roccat Vulcan II Max',
            price: 199.99,
            image: '⌨️',
            specs: 'Optical-mechanical, Titan II Optical, 4D Wheel, OLED Screen'
        },
        {
            id: 'keyboard-15',
            name: 'Cooler Master SK622',
            price: 79.99,
            image: '⌨️',
            specs: 'Wireless, Low Profile, 3-device Bluetooth, 45Hr Battery'
        },
        {
            id: 'keyboard-16',
            name: 'ASUS ROG Azoth',
            price: 249.99,
            image: '⌨️',
            specs: 'Custom Mechanical, ROG NX Red, OLED Screen, Gasket Mount'
        },
        {
            id: 'keyboard-17',
            name: 'Wooting 60HE',
            price: 174.99,
            image: '⌨️',
            specs: 'Analog Optical, Lekker Switches, Rapid Trigger, 60% Layout'
        },
        {
            id: 'keyboard-18',
            name: 'Epomaker TH80 Pro',
            price: 89.99,
            image: '⌨️',
            specs: 'Wireless, Gateron Pro Yellow, 75% Layout, 4000mAh Battery'
        },
        {
            id: 'keyboard-19',
            name: 'Akko 5075B Plus',
            price: 79.99,
            image: '⌨️',
            specs: 'Wireless, Akko CS Silver, 75% Layout, Gasket Mount, PBT'
        },
        {
            id: 'keyboard-20',
            name: 'NuPhy Halo75',
            price: 129.99,
            image: '⌨️',
            specs: 'Wireless, Gateron Baby Raccoon, 75% Layout, Gasket Mount'
        }
    ],

    headsets: [
        {
            id: 'headset-1',
            name: 'SteelSeries Arctis Nova Pro Wireless',
            price: 349.99,
            image: '🎧',
            specs: 'Wireless, Active Noise Cancellation, 360° Spatial Audio, Dual Battery'
        },
        {
            id: 'headset-2',
            name: 'Razer BlackShark V2 Pro',
            price: 179.99,
            image: '🎧',
            specs: 'Wireless, THX Spatial Audio, 50mm Drivers, 30Hr Battery'
        },
        {
            id: 'headset-3',
            name: 'Logitech G Pro X Wireless',
            price: 199.99,
            image: '🎧',
            specs: 'Wireless, Blue VO!CE, DTS Headphone:X 2.0, 20Hr Battery'
        },
        {
            id: 'headset-4',
            name: 'HyperX Cloud III Wireless',
            price: 169.99,
            image: '🎧',
            specs: 'Wireless, DTS Headphone:X, 120Hr Battery, Memory Foam'
        },
        {
            id: 'headset-5',
            name: 'Corsair Virtuoso RGB Wireless XT',
            price: 269.99,
            image: '🎧',
            specs: 'Wireless, High-fidelity, 20Hr Battery, Broadcast-grade Mic'
        },
        {
            id: 'headset-6',
            name: 'ASUS ROG Delta S Wireless',
            price: 229.99,
            specs: 'Wireless, AI Beamforming Mic, 25Hr Battery, USB-C Fast Charge'
        },
        {
            id: 'headset-7',
            name: 'EPOS H3Pro Hybrid',
            price: 249.99,
            image: '🎧',
            specs: 'Wireless, Active Noise Cancellation, 30Hr Battery, Broadcast Mic'
        },
        {
            id: 'headset-8',
            name: 'JBL Quantum 910 Wireless',
            price: 229.99,
            image: '🎧',
            specs: 'Wireless, Head Tracking, Active Noise Cancellation, 39Hr Battery'
        },
        {
            id: 'headset-9',
            name: 'Turtle Beach Stealth Pro',
            price: 329.99,
            image: '🎧',
            specs: 'Wireless, Active Noise Cancellation, 50mm Nanoclear, 40Hr Battery'
        },
        {
            id: 'headset-10',
            name: 'Razer Barracuda Pro',
            price: 249.99,
            image: '🎧',
            specs: 'Wireless, Hybrid ANC, 40Hr Battery, SmartSwitch Dual Wireless'
        },
        {
            id: 'headset-11',
            name: 'SteelSeries Arctis 7P+',
            price: 169.99,
            image: '🎧',
            specs: 'Wireless, USB-C, 30Hr Battery, PlayStation Optimized'
        },
        {
            id: 'headset-12',
            name: 'Logitech G735 Wireless',
            price: 229.99,
            image: '🎧',
            specs: 'Wireless, LIGHTSYNC RGB, 56Hr Battery, Lightweight Design'
        },
        {
            id: 'headset-13',
            name: 'HyperX Cloud Alpha Wireless',
            price: 199.99,
            image: '🎧',
            specs: 'Wireless, 300Hr Battery, Dual Chamber Drivers, Memory Foam'
        },
        {
            id: 'headset-14',
            name: 'Corsair HS80 MAX Wireless',
            price: 179.99,
            image: '🎧',
            specs: 'Wireless, 65Hr Battery, Broadcast-grade Mic, Dolby Audio'
        },
        {
            id: 'headset-15',
            name: 'ASUS ROG Cetra True Wireless',
            price: 129.99,
            image: '🎧',
            specs: 'True Wireless, Active Noise Cancellation, 27Hr Battery, AI Beamforming'
        },
        {
            id: 'headset-16',
            name: 'Razer Kaira Pro for PlayStation',
            price: 199.99,
            image: '🎧',
            specs: 'Wireless, HyperSense Haptics, 20Hr Battery, TriForce 50mm'
        },
        {
            id: 'headset-17',
            name: 'SteelSeries Arctis 1 Wireless',
            price: 99.99,
            image: '🎧',
            specs: 'Wireless, USB-C, 20Hr Battery, Cross-platform Compatibility'
        },
        {
            id: 'headset-18',
            name: 'Logitech G435 Lightspeed',
            price: 79.99,
            image: '🎧',
            specs: 'Wireless, 18Hr Battery, Lightweight, Built-in MEMS Mics'
        },
        {
            id: 'headset-19',
            name: 'HyperX Cloud Stinger 2',
            price: 49.99,
            image: '🎧',
            specs: 'Wired, 50mm Drivers, Lightweight, Swivel-to-mute'
        },
        {
            id: 'headset-20',
            name: 'Corsair HS65 Surround',
            price: 69.99,
            image: '🎧',
            specs: 'Wired, 7.1 Surround Sound, Memory Foam, Discord Certified'
        }
    ],

    mousepads: [
        {
            id: 'mousepad-1',
            name: 'SteelSeries QcK Heavy XXL',
            price: 39.99,
            image: '🖱️',
            specs: 'XXL Size, 6mm Thick, Cloth Surface, Non-slip Rubber Base'
        },
        {
            id: 'mousepad-2',
            name: 'Razer Strider Chroma',
            price: 59.99,
            image: '🖱️',
            specs: 'Hybrid Surface, RGB Lighting, Water-resistant, Non-slip Base'
        },
        {
            id: 'mousepad-3',
            name: 'Corsair MM700 RGB',
            price: 49.99,
            image: '🖱️',
            specs: 'Cloth Surface, RGB Lighting, 3-zone, Microfiber Bottom'
        },
        {
            id: 'mousepad-4',
            name: 'Logitech G840 XL',
            price: 49.99,
            image: '🖱️',
            specs: 'XL Size, 3mm Thick, Low-friction Cloth, Consistent Surface'
        },
        {
            id: 'mousepad-5',
            name: 'HyperX Fury S Pro',
            price: 19.99,
            image: '🖱️',
            specs: 'Large Size, Stitched Edges, Anti-fray, Natural Rubber Base'
        },
        {
            id: 'mousepad-6',
            name: 'Glorious Elements Ice',
            price: 29.99,
            image: '🖱️',
            specs: 'Hard Surface, Cordura Fabric, Water-resistant, XXL Size'
        },
        {
            id: 'mousepad-7',
            name: 'Razer Gigantus V2 XXL',
            price: 34.99,
            image: '🖱️',
            specs: 'XXL Size, Micro-textured Cloth, Optimized Tracking'
        },
        {
            id: 'mousepad-8',
            name: 'SteelSeries QcK Prism XL',
            price: 59.99,
            image: '🖱️',
            specs: 'RGB Lighting, 3-zone, PrismSync, Non-slip Rubber Base'
        },
        {
            id: 'mousepad-9',
            name: 'Corsair MM800 RGB POLARIS',
            price: 49.99,
            image: '🖱️',
            specs: 'Hard Surface, RGB Lighting, USB Passthrough, Anti-slip'
        },
        {
            id: 'mousepad-10',
            name: 'ASUS ROG Sheath BLK LTD',
            price: 29.99,
            image: '🖱️',
            specs: 'XXL Size, 6mm Thick, Water-resistant, Non-slip Rubber'
        },
        {
            id: 'mousepad-11',
            name: 'LTT Northern Lights Deskpad',
            price: 29.99,
            image: '🖱️',
            specs: '900x400mm, Stitched Edges, Water-resistant, Smooth Surface'
        },
        {
            id: 'mousepad-12',
            name: 'Glorious Gaming Mousepad XL',
            price: 24.99,
            image: '🖱️',
            specs: 'XL Size, Stitched Edges, Water-resistant, Smooth Surface'
        },
        {
            id: 'mousepad-13',
            name: 'Razer Goliathus Chroma',
            price: 59.99,
            image: '🖱️',
            specs: 'Cloth Surface, RGB Lighting, 3-zone, Razer Chroma'
        },
        {
            id: 'mousepad-14',
            name: 'SteelSeries QcK Edge Large',
            price: 24.99,
            image: '🖱️',
            specs: 'Large Size, Stitched Edges, Cloth Surface, Optimized Gaming'
        },
        {
            id: 'mousepad-15',
            name: 'HyperX Pulsefire Mat',
            price: 29.99,
            image: '🖱️',
            specs: 'XXL Size, Water-resistant, Stitched Edges, Non-slip Base'
        },
        {
            id: 'mousepad-16',
            name: 'Corsair MM300 Extended',
            price: 24.99,
            image: '🖱️',
            specs: 'Extended Size, Anti-fray, Micro-textured, Non-slip Rubber'
        },
        {
            id: 'mousepad-17',
            name: 'Logitech G740',
            price: 34.99,
            image: '🖱️',
            specs: 'Large Size, Low-friction, Consistent Surface, Durable'
        },
        {
            id: 'mousepad-18',
            name: 'Razer Sphex V3',
            price: 19.99,
            image: '🖱️',
            specs: 'Hard Surface, Ultra-thin, Adhesive Backing, Precision Tracking'
        },
        {
            id: 'mousepad-19',
            name: 'SteelSeries Dex',
            price: 29.99,
            image: '🖱️',
            specs: 'Hybrid Surface, Micro-textured, Water-resistant, Durable'
        },
        {
            id: 'mousepad-20',
            name: 'Glorious 3XL Extended',
            price: 39.99,
            image: '🖱️',
            specs: '3XL Size, Stitched Edges, Water-resistant, Smooth Control'
        }
    ],

    webcams: [
        {
            id: 'webcam-1',
            name: 'Logitech Brio 4K Ultra HD',
            price: 199.99,
            image: '📹',
            specs: '4K Ultra HD, HDR, RightLight 3, Windows Hello, 5x Zoom'
        },
        {
            id: 'webcam-2',
            name: 'Razer Kiyo Pro Ultra',
            price: 299.99,
            image: '📹',
            specs: '4K 30fps, Adaptive Light Sensor, HDR, USB-C, AI-powered'
        },
        {
            id: 'webcam-3',
            name: 'Elgato Facecam',
            price: 199.99,
            image: '📹',
            specs: '1080p 60fps, Fixed Focus, Sony STARVIS CMOS, 82° FOV'
        },
        {
            id: 'webcam-4',
            name: 'Insta360 Link',
            price: 299.99,
            image: '📹',
            specs: '4K, AI Tracking, Gesture Control, Whiteboard Mode, PTZ'
        },
        {
            id: 'webcam-5',
            name: 'Logitech C922 Pro Stream',
            price: 99.99,
            image: '📹',
            specs: '1080p 30fps/720p 60fps, Background Replacement, Stereo Audio'
        },
        {
            id: 'webcam-6',
            name: 'Razer Kiyo X',
            price: 49.99,
            image: '📹',
            specs: '1080p 30fps, Built-in Ring Light, Fixed Focus, USB 2.0'
        },
        {
            id: 'webcam-7',
            name: 'Anker PowerConf C200',
            price: 69.99,
            image: '📹',
            specs: '2K QHD, AI Noise Cancellation, Low-light Correction, Privacy Cover'
        },
        {
            id: 'webcam-8',
            name: 'Logitech StreamCam',
            price: 169.99,
            image: '📹',
            specs: '1080p 60fps, USB-C, Smart Auto-Focus, Vertical Video'
        },
        {
            id: 'webcam-9',
            name: 'Dell UltraSharp Webcam',
            price: 199.99,
            image: '📹',
            specs: '4K, HDR, AI Auto-Framing, Noise-canceling Mics, USB-C'
        },
        {
            id: 'webcam-10',
            name: 'Microsoft LifeCam Studio',
            price: 89.99,
            image: '📹',
            specs: '1080p HD, TrueColor Technology, High-fidelity Microphone'
        },
        {
            id: 'webcam-11',
            name: 'AverMedia PW513',
            price: 129.99,
            image: '📹',
            specs: '1080p 60fps, Auto-focus, Low-light Enhancement, Privacy Cover'
        },
        {
            id: 'webcam-12',
            name: 'Logitech C920S HD Pro',
            price: 69.99,
            image: '📹',
            specs: '1080p 30fps, HD Auto Light Correction, Stereo Mics, Privacy Shutter'
        },
        {
            id: 'webcam-13',
            name: 'Razer Kiyo',
            price: 99.99,
            image: '📹',
            specs: '1080p 30fps/720p 60fps, Built-in Ring Light, Adjustable Brightness'
        },
        {
            id: 'webcam-14',
            name: 'Creative Live! Cam Sync 1080p',
            price: 39.99,
            image: '📹',
            specs: '1080p, Noise-canceling Mic, Fixed Focus, Universal Clip'
        },
        {
            id: 'webcam-15',
            name: 'HP 960 4K Streaming Webcam',
            price: 129.99,
            image: '📹',
            specs: '4K, Auto-framing, Dual Omni-directional Mics, HDR'
        },
        {
            id: 'webcam-16',
            name: 'Logitech C310 HD',
            price: 39.99,
            image: '📹',
            specs: '720p HD, Auto Light Correction, Noise-reducing Mic'
        },
        {
            id: 'webcam-17',
            name: 'Microsoft Modern Webcam',
            price: 69.99,
            image: '📹',
            specs: '1080p, HDR, True Color, Integrated Privacy Shutter'
        },
        {
            id: 'webcam-18',
            name: 'AUSDOM AF633',
            price: 45.99,
            image: '📹',
            specs: '1080p, Built-in Dual Mics, Plug and Play, Privacy Cover'
        },
        {
            id: 'webcam-19',
            name: 'NexiGo N60',
            price: 49.99,
            image: '📹',
            specs: '1080p 60fps, Built-in Privacy Cover, Dual Noise-canceling Mics'
        },
        {
            id: 'webcam-20',
            name: 'Vitade 960A',
            price: 29.99,
            image: '📹',
            specs: '1080p, Plug and Play, Built-in Mic, Universal Clip'
        }
    ],

    microphones: [
        {
            id: 'mic-1',
            name: 'Blue Yeti X',
            price: 169.99,
            image: '🎤',
            specs: 'USB Condenser, 4 Capsules, Blue VO!CE, RGB Metering'
        },
        {
            id: 'mic-2',
            name: 'Razer Seiren V2 Pro',
            price: 249.99,
            image: '🎤',
            specs: 'USB Condenser, Built-in Shock Mount, Multi-function Knob'
        },
        {
            id: 'mic-3',
            name: 'HyperX QuadCast S',
            price: 159.99,
            image: '🎤',
            specs: 'USB Condenser, 4 Polar Patterns, RGB Lighting, Anti-vibration'
        },
        {
            id: 'mic-4',
            name: 'Elgato Wave:3',
            price: 159.99,
            image: '🎤',
            specs: 'USB Condenser, Clipguard, 24-bit/96kHz, Multi-device'
        },
        {
            id: 'mic-5',
            name: 'Audio-Technica AT2020USB+',
            price: 149.99,
            image: '🎤',
            specs: 'USB Condenser, Cardioid Pattern, Headphone Output, Mix Control'
        },
        {
            id: 'mic-6',
            name: 'Rode NT-USB+',
            price: 199.99,
            image: '🎤',
            specs: 'USB Condenser, APHEX Audio, On-board Controls, Studio Stand'
        },
        {
            id: 'mic-7',
            name: 'Shure MV7',
            price: 249.99,
            image: '🎤',
            specs: 'Dynamic, USB/XLR Hybrid, Voice Isolation, Auto Level Mode'
        },
        {
            id: 'mic-8',
            name: 'Blue Yeti Nano',
            price: 99.99,
            image: '🎤',
            specs: 'USB Condenser, 2 Patterns, Blue VO!CE, Compact Design'
        },
        {
            id: 'mic-9',
            name: 'Fifine K669B',
            price: 39.99,
            image: '🎤',
            specs: 'USB Condenser, Plug and Play, Volume Control, Tripod Stand'
        },
        {
            id: 'mic-10',
            name: 'Razer Seiren Mini',
            price: 49.99,
            image: '🎤',
            specs: 'USB Condenser, Supercardioid, Ultra-compact, Studio-quality'
        },
        {
            id: 'mic-11',
            name: 'Samson Q2U',
            price: 69.99,
            image: '🎤',
            specs: 'Dynamic, USB/XLR, Podcasting Bundle, Headphone Output'
        },
        {
            id: 'mic-12',
            name: 'Audio-Technica AT2005USB',
            price: 79.99,
            image: '🎤',
            specs: 'Dynamic, USB/XLR, Cardioid Pattern, Headphone Monitor'
        },
        {
            id: 'mic-13',
            name: 'Blue Snowball Ice',
            price: 49.99,
            image: '🎤',
            specs: 'USB Condenser, Cardioid Pattern, Plug and Play, Custom Stand'
        },
        {
            id: 'mic-14',
            name: 'HyperX SoloCast',
            price: 59.99,
            image: '🎤',
            specs: 'USB Condenser, Tap-to-mute, Compact, Anti-vibration'
        },
        {
            id: 'mic-15',
            name: 'Elgato Wave DX',
            price: 99.99,
            image: '🎤',
            specs: 'XLR Dynamic, Broadcast-quality, Requires Audio Interface'
        },
        {
            id: 'mic-16',
            name: 'Rode VideoMic Pro+',
            price: 349.99,
            image: '🎤',
            specs: 'Shotgun, Supercardioid, Rechargeable, Rycote Lyre Shock Mount'
        },
        {
            id: 'mic-17',
            name: 'Audio-Technica AT2020',
            price: 99.99,
            image: '🎤',
            specs: 'XLR Condenser, Cardioid, Requires Audio Interface'
        },
        {
            id: 'mic-18',
            name: 'Blue Ember',
            price: 299.99,
            image: '🎤',
            specs: 'XLR Condenser, RF Condenser, Requires Audio Interface'
        },
        {
            id: 'mic-19',
            name: 'Shure SM7B',
            price: 399.99,
            image: '🎤',
            specs: 'Dynamic, XLR, Professional Broadcast, Requires Audio Interface'
        },
        {
            id: 'mic-20',
            name: 'Rode PodMic',
            price: 99.99,
            image: '🎤',
            specs: 'Dynamic, XLR, Cardioid, Internal Pop Filter, Broadcast Quality'
        }
    ]
};

// Compatibility Rules
const compatibilityRules = {
    sockets: {
        'AM5': ['AM5'],
        'AM4': ['AM4'],
        'LGA1700': ['LGA1700'],
        'LGA1200': ['LGA1200']
    },
    ram: {
        'DDR5': ['DDR5'],
        'DDR4': ['DDR4']
    },
    formFactors: {
        'ATX': ['ATX', 'Micro-ATX', 'Mini-ITX'],
        'Micro-ATX': ['Micro-ATX', 'Mini-ITX'],
        'Mini-ITX': ['Mini-ITX'],
        'Full Tower': ['ATX', 'Micro-ATX', 'Mini-ITX', 'E-ATX'],
        'Mid Tower': ['ATX', 'Micro-ATX', 'Mini-ITX', 'E-ATX']
    }
};

// Get featured products for homepage - Now showing prebuilts and laptops
function getFeaturedProducts() {
    const featured = [];
    // Take 3 prebuilts and 3 laptops
    featured.push(...products.prebuilts.slice(0, 3));
    featured.push(...products.laptops.slice(0, 3));
    return featured;
}