// COMPREHENSIVE PRODUCTS DATABASE - PHILIPPINE PRICES & REAL PRODUCTS
const products = {
    motherboards: [
        {
            id: 'mb-1',
            name: 'ASUS ROG Maximus Z790 Hero',
            price: 35999,
            image: 'https://dlcdnwebimgs.asus.com/files/media/29C004F7-7B1F-4EBF-9099-7168B520A0EE/v1/img/kv/pd.png',
            specs: 'Intel Z790, LGA 1700, DDR5 7200MHz+, 4x M.2, Wi-Fi 6E, 2.5G LAN, 20+1 power stages',
            socket: 'LGA1700',
            chipset: 'Z790',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-2',
            name: 'MSI MPG B650 Edge WiFi',
            price: 14999,
            image: 'https://storage-asset.msi.com/global/picture/image/feature/mb/B650/MPG-B650-EDGE-WIFI/gen4-new.png',
            specs: 'AMD B650, AM5, DDR5 6400MHz+, 4x M.2, Wi-Fi 6E, 2.5G LAN, 14+2+1 Duet Rail',
            socket: 'AM5',
            chipset: 'B650',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-3',
            name: 'Gigabyte B550 AORUS Elite',
            price: 8499,
            image: 'https://selling-tech.com/wp-content/uploads/2025/08/GIGABYTE-B550-AORUS-ELITE-AX-V2-WIFI-AM4-A-V-R-RYZEN-3RA.png',
            specs: 'AMD B550, AM4, DDR4 4733MHz, 2x M.2, 2.5G LAN, PCIe 4.0, RGB Fusion 2.0',
            socket: 'AM4',
            chipset: 'B550',
            ramType: 'DDR4',
            formFactor: 'ATX'
        },
        {
            id: 'mb-4',
            name: 'ASUS TUF Gaming B660M-Plus WiFi',
            price: 9999,
            image: 'https://dlcdnwebimgs.asus.com/files/media/3b34b07b-8a77-4ef8-ba26-63430024371c/img/component_product.png',
            specs: 'Intel B660, LGA 1700, DDR5 6000MHz, 2x M.2, Wi-Fi 6, Military-grade components',
            socket: 'LGA1700',
            chipset: 'B660',
            ramType: 'DDR5',
            formFactor: 'Micro-ATX'
        },
        {
            id: 'mb-5',
            name: 'MSI MAG B550M Mortar WiFi',
            price: 8999,
            image: 'https://asset.msi.com/resize/image/global/product/product_4_20200520154848_5ec4e0e017f7e.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
            specs: 'AMD B550, AM4, DDR4 4400MHz, 2x M.2, Wi-Fi 6, 2.5G LAN, Extended heatsink',
            socket: 'AM4',
            chipset: 'B550',
            ramType: 'DDR4',
            formFactor: 'Micro-ATX'
        },
        {
            id: 'mb-6',
            name: 'ASRock B660M Pro RS',
            price: 6499,
            image: 'https://www.asrock.com/mb/photo/B660M%20Pro%20RS(L1).png',
            specs: 'Intel B660, LGA 1700, DDR4 4800MHz, 2x M.2, PCIe 4.0, Polychrome RGB',
            socket: 'LGA1700',
            chipset: 'B660',
            ramType: 'DDR4',
            formFactor: 'Micro-ATX'
        },
        {
            id: 'mb-7',
            name: 'Gigabyte X570S AORUS Elite AX',
            price: 12999,
            image: 'https://static.gigabyte.com/StaticFile/Image/Global/536935f8473f4298b50c87ffb1f3ab35/Product/28897',
            specs: 'AMD X570, AM4, DDR4 4733MHz, 3x M.2, Wi-Fi 6, 2.5G LAN, Passive chipset cooling',
            socket: 'AM4',
            chipset: 'X570',
            ramType: 'DDR4',
            formFactor: 'ATX'
        },
        {
            id: 'mb-8',
            name: 'ASUS Prime Z690-P WiFi',
            price: 11999,
            image: 'https://dlcdnwebimgs.asus.com/files/media/1934a4d8-6761-4a0d-a091-f383e9ba1c45/img/core/fan/fan.png',
            specs: 'Intel Z690, LGA 1700, DDR5 6000MHz, 3x M.2, Wi-Fi 6, PCIe 5.0, AI Cooling',
            socket: 'LGA1700',
            chipset: 'Z690',
            ramType: 'DDR5',
            formFactor: 'ATX'
        },
        {
            id: 'mb-9',
            name: 'MSI PRO B760M-A WiFi',
            price: 8499,
            image: 'https://storage-asset.msi.com/global/picture/image/feature/mb/Pro_B760M/PRO_B760M-A-Wifi/msi-pro-b760m-a-wifi-main.png',
            specs: 'Intel B760, LGA 1700, DDR5 7000MHz, 2x M.2, Wi-Fi 6E, Core Boost technology',
            socket: 'LGA1700',
            chipset: 'B760',
            ramType: 'DDR5',
            formFactor: 'Micro-ATX'
        },
        {
            id: 'mb-10',
            name: 'ASRock B450M Steel Legend',
            price: 5499,
            image: 'https://www.asrock.com/mb/photo/B450M%20Steel%20Legend(L1).png',
            specs: 'AMD B450, AM4, DDR4 3533MHz, 2x M.2, Polychrome RGB, Steel armor design',
            socket: 'AM4',
            chipset: 'B450',
            ramType: 'DDR4',
            formFactor: 'Micro-ATX'
        }
    ],

    prebuilts: [
        {
            id: 'prebuilt-1',
            name: 'ACER Predator Orion 3000',
            price: 79999,
            image: 'https://www.unison.com.ph/wp-content/uploads/2022/09/Predator-Orion-3000-PO3-640-light-Blue-iron-gallery-06.png',
            specs: 'Intel Core i7-13700F, RTX 4070 12GB, 16GB DDR5, 1TB NVMe SSD, Windows 11 Home',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-2',
            name: 'HP Omen 45L',
            price: 129999,
            image: 'https://www.hp.com/content/dam/sites/omen/worldwide/desktops/omen-40l-amd/Hero_Banner_Image-mb_45l-v2.png',
            specs: 'Intel Core i9-13900K, RTX 4090 24GB, 32GB DDR5, 2TB NVMe + 2TB HDD, Cryo Chamber cooling',
            category: 'Premium Gaming'
        },
        {
            id: 'prebuilt-3',
            name: 'Lenovo Legion Tower 5i',
            price: 64999,
            image: 'https://p2-ofp.static.pub//fes/cms/2024/11/26/y9rs9btlfdkpf29hq4ifpc53obql36803169.png',
            specs: 'Intel Core i5-13400F, RTX 4060 8GB, 16GB DDR5, 512GB NVMe SSD, 650W 80+ Gold PSU',
            category: 'Mid-range Gaming'
        },
        {
            id: 'prebuilt-4',
            name: 'Dell Alienware Aurora R15',
            price: 149999,
            image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r15-intel/media-gallery/dark-side-of-the-moon-liquid-clear-panel/desktop-alienware-aurora-r15-black-liquid-clear-panel-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=360&qlt=100,1&resMode=sharp2&size=360,402&chrss=full',
            specs: 'AMD Ryzen 9 7900X, RTX 4090 24GB, 64GB DDR5, 4TB NVMe SSD, Alienware Cryo-tech cooling',
            category: 'Premium Gaming'
        },
        {
            id: 'prebuilt-5',
            name: 'ASUS ROG Strix G15',
            price: 89999,
            image: 'https://dlcdnwebimgs.asus.com/gain/DD0F9C21-6645-45D5-B36A-8D1E3F0C0516',
            specs: 'Intel Core i7-13700F, RTX 4070 Ti 12GB, 32GB DDR5, 1TB NVMe + 2TB HDD, ROG AI cooling',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-6',
            name: 'MSI Infinite RS 13th',
            price: 159999,
            image: 'https://asset.msi.com/resize/image/global/product/product_1667931061ef6b32e5c00a50ca85d6e2f7cee5420e.png62405b38c58fe0f07fcef2367d8a9ba1/400.png',
            specs: 'Intel Core i9-13900KS, RTX 4090 24GB, 64GB DDR5, 2TB NVMe + 4TB HDD, Silent Storm cooling',
            category: 'Premium Gaming'
        },
        {
            id: 'prebuilt-7',
            name: 'Skytech Chronos Mini',
            price: 54999,
            image: 'https://c1.neweggimages.com/BizIntell/item/Desktop%20PC/Gaming%20Desktop/83-289-121/ch1.png',
            specs: 'AMD Ryzen 5 7600X, RX 6700 XT 12GB, 16GB DDR5, 1TB NVMe SSD, 650W Gold PSU',
            category: 'Budget Gaming'
        },
        {
            id: 'prebuilt-8',
            name: 'CyberPowerPC Gamer Xtreme',
            price: 49999,
            image: 'https://c1.neweggimages.com/BizIntell/item/83/230/83-230-372/add.png',
            specs: 'Intel Core i5-12400F, RTX 3060 12GB, 16GB DDR4, 500GB NVMe SSD, 600W PSU',
            category: 'Entry Gaming'
        },
        {
            id: 'prebuilt-9',
            name: 'iBUYPOWER SlateMesh',
            price: 74999,
            image: 'https://content.ibuypower.com/Images/Components/28399/gaming-pc-01-Slate8Mesh-main-2400-CaseOnly.png',
            specs: 'Intel Core i7-13700KF, RTX 4070 12GB, 32GB DDR5, 2TB NVMe SSD, 850W Gold PSU',
            category: 'Gaming'
        },
        {
            id: 'prebuilt-10',
            name: 'Maingear Vybe Stage 4',
            price: 109999,
            image: 'https://maingear.com/cdn/shop/files/custom-mg-1-962160.webp?v=1725171843',
            specs: 'AMD Ryzen 7 7800X3D, RTX 4080 16GB, 32GB DDR5, 2TB NVMe SSD, Custom liquid cooling',
            category: 'Premium Gaming'
        }
    ],

    laptops: [
        {
            id: 'laptop-1',
            name: 'ASUS ROG Zephyrus G14',
            price: 99999,
            image: 'https://dlcdnwebimgs.asus.com/gain/A1433BAB-3BC8-40BF-965C-B3E95E59BC61/w1000/h732',
            specs: 'AMD Ryzen 9 7940HS, RTX 4060 8GB, 16GB DDR5, 1TB NVMe, 14" QHD+ 165Hz, AniMe Matrix',
            category: 'Premium Gaming'
        },
        {
            id: 'laptop-2',
            name: 'Lenovo Legion Pro 7i',
            price: 149999,
            image: 'https://p3-ofp.static.pub/fes/cms/2023/03/06/ffbeevxj0xpbedc7x2tvr8qblpd7bd631388.png',
            specs: 'Intel Core i9-13900HX, RTX 4090 16GB, 32GB DDR5, 2TB NVMe, 16" QHD+ 240Hz, ColdFront 5.0',
            category: 'Premium Gaming'
        },
        {
            id: 'laptop-3',
            name: 'MSI Stealth 17 Studio',
            price: 179999,
            image: 'https://asset.msi.com/resize/image/global/product/product_168263539518beeb08bf4a7653aca93f1a6d5d8399.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
            specs: 'Intel Core i9-13900H, RTX 4090 16GB, 64GB DDR5, 4TB NVMe, 17" UHD 144Hz Mini-LED',
            category: 'Premium Gaming'
        },
        {
            id: 'laptop-4',
            name: 'Acer Predator Helios 16',
            price: 119999,
            image: 'https://netcodex.ph/wp-content/uploads/2023/09/download-12-1.png',
            specs: 'Intel Core i9-13900HX, RTX 4080 12GB, 32GB DDR5, 2TB NVMe, 16" QHD+ 240Hz, 5th Gen AeroBlade',
            category: 'Premium Gaming'
        },
        {
            id: 'laptop-5',
            name: 'Razer Blade 15',
            price: 129999,
            image: 'https://assets.razerzone.com/eeimages/support/products/1517/1517_blade15_mid2019.png',
            specs: 'Intel Core i7-12800H, RTX 3070 Ti 8GB, 16GB DDR5, 1TB NVMe, 15.6" QHD 240Hz, CNC aluminum',
            category: 'Premium Gaming'
        },
        {
            id: 'laptop-6',
            name: 'ASUS TUF Gaming A15',
            price: 64999,
            image: 'https://dlcdnwebimgs.asus.com/gain/3166c96d-5c61-4ae7-9d62-d272df1fe385/',
            specs: 'AMD Ryzen 7 7735HS, RTX 4060 8GB, 16GB DDR5, 1TB NVMe, 15.6" FHD 144Hz, Military-grade durability',
            category: 'Gaming'
        },
        {
            id: 'laptop-7',
            name: 'HP Victus 16',
            price: 54999,
            image: 'https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/gaming/laptops/2021-victus-16-1-amd/s1-hero-banner-image-mb.png',
            specs: 'Intel Core i5-13420H, RTX 4050 6GB, 16GB DDR5, 512GB NVMe, 16.1" FHD 144Hz, OMEN Gaming Hub',
            category: 'Budget Gaming'
        },
        {
            id: 'laptop-8',
            name: 'Lenovo LOQ 15',
            price: 49999,
            image: 'https://p1-ofp.static.pub//fes/cms/2024/05/20/izeyebel86t3indfczvo76fruum7hk728628.png',
            specs: 'Intel Core i5-12450H, RTX 3050 6GB, 8GB DDR4, 512GB SSD, 15.6" FHD 144Hz, Legion Spectrum RGB',
            category: 'Entry Gaming'
        },
        {
            id: 'laptop-9',
            name: 'MSI Katana 15',
            price: 59999,
            image: 'https://asset.msi.com/resize/image/global/product/product_1750749196231f1e6ad409be93186eb125dc516f46.png62405b38c58fe0f07fcef2367d8a9ba1/400',
            specs: 'Intel Core i7-13620H, RTX 4060 8GB, 16GB DDR5, 1TB NVMe, 15.6" FHD 144Hz, Cooler Boost 5',
            category: 'Gaming'
        },
        {
            id: 'laptop-10',
            name: 'Dell G15 5530',
            price: 69999,
            image: 'https://i.dell.com/sites/csimages/Product_Imagery/all/prod-271500-notebook-g15-5530-front-dark-gray-800x550.png',
            specs: 'Intel Core i7-13650HX, RTX 4060 8GB, 16GB DDR5, 1TB NVMe, 15.6" QHD 165Hz, Alienware Command Center',
            category: 'Gaming'
        }
    ],

    cpus: [
        {
            id: 'cpu-1',
            name: 'AMD Ryzen 9 7950X3D',
            price: 35999,
            image: 'https://bermorzone.com.ph/wp-content/uploads/2022/09/AMD-Ryzen-7-7950X-PH.webp',
            specs: '16 Core, 32 Thread, 4.2GHz Base, 5.7GHz Boost, 144MB Cache, AM5, 3D V-Cache technology',
            socket: 'AM5',
            tdp: 120,
            integratedGraphics: true
        },
        {
            id: 'cpu-2',
            name: 'Intel Core i9-14900K',
            price: 32999,
            image: 'https://img.lazcdn.com/g/p/4f638cf911721ec0a3235dbe8c1d96db.png_720x720q80.png',
            specs: '24 Core (8P+16E), 32 Thread, 3.2GHz Base, 6.0GHz Boost, 36MB Cache, LGA1700, Thermal Velocity Boost',
            socket: 'LGA1700',
            tdp: 253,
            integratedGraphics: true
        },
        {
            id: 'cpu-3',
            name: 'AMD Ryzen 7 7800X3D',
            price: 22999,
            image: 'https://cdn.pcworth.com/products/cpu/details/2655/image/thumbnail/amd-ryzen-7-7800x3d-mpk-am5-without-cooler-tray-type-1762244055.jpg',
            specs: '8 Core, 16 Thread, 4.2GHz Base, 5.0GHz Boost, 104MB Cache, AM5, Gaming optimized 3D V-Cache',
            socket: 'AM5',
            tdp: 120,
            integratedGraphics: true
        },
        {
            id: 'cpu-4',
            name: 'Intel Core i7-14700K',
            price: 24999,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0afwKlnikaU4C6puUP-t1McugZFPd2kAzaw&s',
            specs: '20 Core (8P+12E), 28 Thread, 3.4GHz Base, 5.6GHz Boost, 33MB Cache, LGA1700, Intel UHD Graphics 770',
            socket: 'LGA1700',
            tdp: 253,
            integratedGraphics: true
        },
        {
            id: 'cpu-5',
            name: 'AMD Ryzen 5 7600X',
            price: 12999,
            image: 'https://mail.mtech.am/assets/images/d5/d5e6a1_Ryzen-5-7600x-2.png',
            specs: '6 Core, 12 Thread, 4.7GHz Base, 5.3GHz Boost, 38MB Cache, AM5, Radeon Graphics',
            socket: 'AM5',
            tdp: 105,
            integratedGraphics: true
        },
        {
            id: 'cpu-6',
            name: 'Intel Core i5-14600K',
            price: 17999,
            image: 'https://esgaming.co.ke/wp-content/uploads/2024/04/Intel-Core-i5-14600K-Desktop-Processor.png',
            specs: '14 Core (6P+8E), 20 Thread, 3.5GHz Base, 5.3GHz Boost, 24MB Cache, LGA1700, Intel UHD Graphics 770',
            socket: 'LGA1700',
            tdp: 181,
            integratedGraphics: true
        },
        {
            id: 'cpu-7',
            name: 'AMD Ryzen 9 7900X',
            price: 22999,
            image: 'https://bermorzone.com.ph/wp-content/uploads/2022/09/AMD-Ryzen-7-7900X-PH.webp',
            specs: '12 Core, 24 Thread, 4.7GHz Base, 5.6GHz Boost, 76MB Cache, AM5, Radeon Graphics',
            socket: 'AM5',
            tdp: 170,
            integratedGraphics: true
        },
        {
            id: 'cpu-8',
            name: 'Intel Core i3-14100',
            price: 8499,
            image: 'https://pinklehub.com/cdn/shop/files/INTEL-BX8071514100-99CG5H.png?v=1705130713',
            specs: '4 Core, 8 Thread, 3.5GHz Base, 4.7GHz Boost, 12MB Cache, LGA1700, Intel UHD Graphics 730',
            socket: 'LGA1700',
            tdp: 60,
            integratedGraphics: true
        },
        {
            id: 'cpu-9',
            name: 'AMD Ryzen 7 5700X',
            price: 10999,
            image: 'https://www.amd.com/system/files/2022-04/616656-ryzen-7-5700x-pib-left-facing-1260x709.png',
            specs: '8 Core, 16 Thread, 3.4GHz Base, 4.6GHz Boost, 36MB Cache, AM4, No integrated graphics',
            socket: 'AM4',
            tdp: 65,
            integratedGraphics: false
        },
        {
            id: 'cpu-10',
            name: 'Intel Core i9-13900KS',
            price: 34999,
            image: 'https://www.intel.com/content/dam/www/global/ark/badges/232184_128.gif',
            specs: '24 Core (8P+16E), 32 Thread, 3.2GHz Base, 6.0GHz Boost, 36MB Cache, LGA1700, Special Edition',
            socket: 'LGA1700',
            tdp: 253,
            integratedGraphics: true
        }
    ],

    ram: [
        {
            id: 'ram-1',
            name: 'Corsair Dominator Platinum RGB 32GB',
            price: 8999,
            image: 'https://www.corsair.com/medias/sys_master/images/images/h07/hd9/10103416127518/-CMT32GX5M2B6000C30-Dominator-Platinum-RGB-White-Gallery-01.png',
            specs: 'DDR5 6000MHz, CL30, 2x16GB, RGB, Intel XMP/AMD EXPO, DHX cooling',
            type: 'DDR5',
            speed: 6000,
            capacity: 32,
            latency: 'CL30'
        },
        {
            id: 'ram-2',
            name: 'G.Skill Trident Z5 RGB 64GB',
            price: 15999,
            image: 'https://www.gskill.com/_upload/images/20221227112732.png',
            specs: 'DDR5 6400MHz, CL32, 2x32GB, RGB, Intel XMP 3.0, Polished aluminum heatspreader',
            type: 'DDR5',
            speed: 6400,
            capacity: 64,
            latency: 'CL32'
        },
        {
            id: 'ram-3',
            name: 'Kingston Fury Beast 16GB',
            price: 3999,
            image: 'https://media.kingston.com/kingston/hero/ktc-hero-fury-beast-ddr4-rgb-memory-2module-kit-1.jpg',
            specs: 'DDR4 3200MHz, CL16, 2x8GB, Black, Plug and Play, Low-profile design',
            type: 'DDR4',
            speed: 3200,
            capacity: 16,
            latency: 'CL16'
        },
        {
            id: 'ram-4',
            name: 'Team Group T-Force Delta RGB 32GB',
            price: 6999,
            image: 'https://www.teamgroupinc.com/en/upload/product_color_specification_memory_images/20221129101117.jpg',
            specs: 'DDR5 5600MHz, CL36, 2x16GB, RGB, AMD EXPO Ready, Full-height light bar',
            type: 'DDR5',
            speed: 5600,
            capacity: 32,
            latency: 'CL36'
        },
        {
            id: 'ram-5',
            name: 'Corsair Vengeance LPX 64GB',
            price: 11999,
            image: 'https://www.corsair.com/medias/sys_master/images/images/h0c/h1f/10103374594078/-CMK64GX5M2B5200C40-Vengeance-LPX-Gallery-01.png',
            specs: 'DDR4 3600MHz, CL18, 2x32GB, Black, Low Profile, Aluminum heatspreader',
            type: 'DDR4',
            speed: 3600,
            capacity: 64,
            latency: 'CL18'
        },
        {
            id: 'ram-6',
            name: 'G.Skill Ripjaws V 16GB',
            price: 3499,
            image: 'https://www.gskill.com/_upload/images/20200519022009.png',
            specs: 'DDR4 3600MHz, CL16, 2x8GB, Black, Intel XMP 2.0, High-performance heatspreader',
            type: 'DDR4',
            speed: 3600,
            capacity: 16,
            latency: 'CL16'
        },
        {
            id: 'ram-7',
            name: 'Crucial Pro 32GB',
            price: 5499,
            image: 'https://www.crucial.com/content/dam/crucial/products/memory/crucial-pro/images/product/crucial-pro-ddr5-udimm-32gb-2pk-front-ku.psd.transform/small-jpg/img.jpg',
            specs: 'DDR5 5600MHz, CL46, 2x16GB, Green, JEDEC Standard, Single-rank',
            type: 'DDR5',
            speed: 5600,
            capacity: 32,
            latency: 'CL46'
        },
        {
            id: 'ram-8',
            name: 'OLOy Blade RGB 64GB',
            price: 12999,
            image: 'https://www.oloymemory.com/wp-content/uploads/2023/01/OLOy-Blade-RGB-DDR5.png',
            specs: 'DDR5 6000MHz, CL30, 2x32GB, RGB, Intel/AMD Compatible, Aluminum heatsink',
            type: 'DDR5',
            speed: 6000,
            capacity: 64,
            latency: 'CL30'
        },
        {
            id: 'ram-9',
            name: 'Patriot Viper Steel 32GB',
            price: 5999,
            image: 'https://www.patriotmemory.com/product_images/viper/viper-steel-ddr4-4400mhz-pvsw432g440c9k/2pack-fan.png',
            specs: 'DDR4 4400MHz, CL19, 2x16GB, Silver, Performance Gaming, Aluminum spreader',
            type: 'DDR4',
            speed: 4400,
            capacity: 32,
            latency: 'CL19'
        },
        {
            id: 'ram-10',
            name: 'ADATA XPG Lancer RGB 32GB',
            price: 7999,
            image: 'https://www.xpg.com/us/features/646/1.png',
            specs: 'DDR5 6000MHz, CL30, 2x16GB, RGB, On-Die ECC, Asymmetric light bar',
            type: 'DDR5',
            speed: 6000,
            capacity: 32,
            latency: 'CL30'
        }
    ],

    gpus: [
        {
            id: 'gpu-1',
            name: 'NVIDIA GeForce RTX 4090',
            price: 119999,
            image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg',
            specs: '24GB GDDR6X, 16384 CUDA Cores, 2.52GHz Boost, DLSS 3, Ada Lovelace, 450W TDP',
            vram: 24,
            power: 450
        },
        {
            id: 'gpu-2',
            name: 'AMD Radeon RX 7900 XTX',
            price: 79999,
            image: 'https://www.amd.com/system/files/2022-11/2163211-amd-radeon-rx-7900-xtx-gpu-1260x709_0.png',
            specs: '24GB GDDR6, 6144 Stream Processors, 2.3GHz Game Clock, FSR 3, RDNA 3, 355W TDP',
            vram: 24,
            power: 355
        },
        {
            id: 'gpu-3',
            name: 'NVIDIA GeForce RTX 4080',
            price: 89999,
            image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4080/geforce-ada-4080-web-og-1200x630.jpg',
            specs: '16GB GDDR6X, 9728 CUDA Cores, 2.51GHz Boost, DLSS 3, Ada Lovelace, 320W TDP',
            vram: 16,
            power: 320
        },
        {
            id: 'gpu-4',
            name: 'AMD Radeon RX 7800 XT',
            price: 44999,
            image: 'https://www.amd.com/system/files/2023-09/2173788-radeon-rx-7800xt-gpu-1260x709_0.png',
            specs: '16GB GDDR6, 3840 Stream Processors, 2.43GHz Game Clock, FSR 3, RDNA 3, 263W TDP',
            vram: 16,
            power: 263
        },
        {
            id: 'gpu-5',
            name: 'NVIDIA GeForce RTX 4070 Ti',
            price: 64999,
            image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4070-ti/geforce-ada-4070ti-web-og-1200x630.jpg',
            specs: '12GB GDDR6X, 7680 CUDA Cores, 2.61GHz Boost, DLSS 3, Ada Lovelace, 285W TDP',
            vram: 12,
            power: 285
        },
        {
            id: 'gpu-6',
            name: 'AMD Radeon RX 7700 XT',
            price: 37999,
            image: 'https://www.amd.com/system/files/2023-09/2173789-radeon-rx-7700xt-gpu-1260x709_0.png',
            specs: '12GB GDDR6, 3456 Stream Processors, 2.54GHz Game Clock, FSR 3, RDNA 3, 245W TDP',
            vram: 12,
            power: 245
        },
        {
            id: 'gpu-7',
            name: 'NVIDIA GeForce RTX 4070',
            price: 49999,
            image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4070/geforce-ada-4070-web-og-1200x630.jpg',
            specs: '12GB GDDR6X, 5888 CUDA Cores, 2.48GHz Boost, DLSS 3, Ada Lovelace, 200W TDP',
            vram: 12,
            power: 200
        },
        {
            id: 'gpu-8',
            name: 'AMD Radeon RX 7600',
            price: 22999,
            image: 'https://www.amd.com/system/files/2023-05/2173098-radeon-rx-7600-gpu-1260x709_0.png',
            specs: '8GB GDDR6, 2048 Stream Processors, 2.66GHz Game Clock, FSR 3, RDNA 3, 165W TDP',
            vram: 8,
            power: 165
        },
        {
            id: 'gpu-9',
            name: 'NVIDIA GeForce RTX 4060 Ti',
            price: 32999,
            image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4060-ti/geforce-ada-4060ti-web-og-1200x630.jpg',
            specs: '8GB GDDR6, 4352 CUDA Cores, 2.54GHz Boost, DLSS 3, Ada Lovelace, 160W TDP',
            vram: 8,
            power: 160
        },
        {
            id: 'gpu-10',
            name: 'NVIDIA GeForce RTX 4060',
            price: 24999,
            image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4060/geforce-ada-4060-web-og-1200x630.jpg',
            specs: '8GB GDDR6, 3072 CUDA Cores, 2.46GHz Boost, DLSS 3, Ada Lovelace, 115W TDP',
            vram: 8,
            power: 115
        }
    ],

    storage: [
        {
            id: 'ssd-1',
            name: 'Samsung 990 Pro 2TB NVMe',
            price: 11999,
            image: 'https://images.samsung.com/is/image/samsung/p6pim/ph/ssd-990-pro-mz-v9p2t0bw/gallery/ph-ssd-990-pro-mz-v9p2t0bw-532033677?$650_519_PNG$',
            specs: 'PCIe 4.0, 7450MB/s Read, 6900MB/s Write, 2TB, M.2 2280, Samsung V-NAND 3-bit MLC',
            type: 'NVMe',
            capacity: 2000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-2',
            name: 'WD Black SN850X 4TB',
            price: 24999,
            image: 'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-drives/wd-black-sn850x-nvme-ssd/gallery/wd-black-sn850x-1tb-left.png',
            specs: 'PCIe 4.0, 7300MB/s Read, 6600MB/s Write, 4TB, M.2 2280, WD_BLACK G2 controller',
            type: 'NVMe',
            capacity: 4000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-3',
            name: 'Crucial P5 Plus 1TB',
            price: 5999,
            image: 'https://www.crucial.com/content/dam/crucial/products/ssd/crucial-p5-plus/images/product/crucial-p5-plus-ssd-1tb-front-ku.psd.transform/small-jpg/img.jpg',
            specs: 'PCIe 4.0, 6600MB/s Read, 5000MB/s Write, 1TB, M.2 2280, Micron 176-layer NAND',
            type: 'NVMe',
            capacity: 1000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-4',
            name: 'Seagate FireCuda 530 2TB',
            price: 13999,
            image: 'https://www.seagate.com/content/dam/seagate/migrated-assets/consumer-retail/en-us/images/products/gaming-ssd/firecuda-530-ssd/firecuda-530-hero.png',
            specs: 'PCIe 4.0, 7300MB/s Read, 6900MB/s Write, 2TB, M.2 2280, Phison E18 controller',
            type: 'NVMe',
            capacity: 2000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-5',
            name: 'Samsung 870 EVO 4TB SATA',
            price: 19999,
            image: 'https://images.samsung.com/is/image/samsung/p6pim/ph/ssd-870-evo-mz-77e4t0bw/gallery/ph-ssd-870-evo-mz-77e4t0bw-400956584?$650_519_PNG$',
            specs: 'SATA III, 560MB/s Read, 530MB/s Write, 4TB, 2.5" SSD, Samsung V-NAND 3-bit MLC',
            type: 'SATA',
            capacity: 4000,
            interface: 'SATA III'
        },
        {
            id: 'ssd-6',
            name: 'Kingston NV2 2TB',
            price: 7499,
            image: 'https://www.kingston.com/datasheets/NV2-front-left-2tb-en.png',
            specs: 'PCIe 4.0, 3500MB/s Read, 2800MB/s Write, 2TB, M.2 2280, DRAM-less design',
            type: 'NVMe',
            capacity: 2000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-7',
            name: 'Sabrent Rocket 4 Plus 8TB',
            price: 59999,
            image: 'https://sabrent.com/cdn/shop/products/SB-RKT4P-8TB_1024x1024.png?v=1642787224',
            specs: 'PCIe 4.0, 7000MB/s Read, 6600MB/s Write, 8TB, M.2 2280, Phison E18 controller',
            type: 'NVMe',
            capacity: 8000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-8',
            name: 'WD Blue SN580 1TB',
            price: 4499,
            image: 'https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-drives/wd-blue-sn580-nvme-ssd/gallery/wd-blue-sn580-1tb-left.png',
            specs: 'PCIe 4.0, 4150MB/s Read, 4150MB/s Write, 1TB, M.2 2280, Single-sided design',
            type: 'NVMe',
            capacity: 1000,
            interface: 'PCIe 4.0'
        },
        {
            id: 'ssd-9',
            name: 'Crucial MX500 2TB',
            price: 8999,
            image: 'https://www.crucial.com/content/dam/crucial/products/ssd/crucial-mx500/images/product/crucial-mx500-ssd-2tb-front-ku.psd.transform/small-jpg/img.jpg',
            specs: 'SATA III, 560MB/s Read, 510MB/s Write, 2TB, 2.5" SSD, Micron 3D NAND',
            type: 'SATA',
            capacity: 2000,
            interface: 'SATA III'
        },
        {
            id: 'ssd-10',
            name: 'Team Group MP44L 2TB',
            price: 7999,
            image: 'https://www.teamgroupinc.com/en/upload/product_color_specification_ssd_images/20230824152153.jpg',
            specs: 'PCIe 4.0, 5000MB/s Read, 4500MB/s Write, 2TB, M.2 2280, SLC Caching algorithm',
            type: 'NVMe',
            capacity: 2000,
            interface: 'PCIe 4.0'
        }
    ],

    psus: [
        {
            id: 'psu-1',
            name: 'Corsair RM1000x Shift',
            price: 12999,
            image: 'https://www.corsair.com/medias/sys_master/images/images/h84/hd0/10103385686046/-CP-9020254-NA-RM1000x-SHIFT-Gallery-01.png',
            specs: '1000W, 80+ Gold, Fully Modular, ATX 3.0, PCIe 5.0, 140mm fan, 10-year warranty',
            wattage: 1000,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-2',
            name: 'Seasonic Prime TX-1000',
            price: 17999,
            image: 'https://seasonic.com/pub/media/catalog/product/cache/ba4d58bc689b6c01ee93c71b50ed8c30/p/r/prime_tx_1000_1.png',
            specs: '1000W, 80+ Titanium, Fully Modular, ATX 3.0, 12-year warranty, Hybrid fan control',
            wattage: 1000,
            rating: '80+ Titanium',
            modular: 'Full'
        },
        {
            id: 'psu-3',
            name: 'EVGA SuperNOVA 850 G6',
            price: 9999,
            image: 'https://www.evga.com/products/images/gallery/220-G6-0850-X1_XL_1.jpg',
            specs: '850W, 80+ Gold, Fully Modular, ATX 3.0, Eco Mode, 140mm fan, 10-year warranty',
            wattage: 850,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-4',
            name: 'be quiet! Straight Power 11 750W',
            price: 8999,
            image: 'https://www.bequiet.com/en/images/cache/1200/1200/1000/1000/png/power-supplies/straight-power-11/straight-power-11-750w-gold/154.png',
            specs: '750W, 80+ Platinum, Fully Modular, Silent Wings Fan, 135mm fan, 5-year warranty',
            wattage: 750,
            rating: '80+ Platinum',
            modular: 'Full'
        },
        {
            id: 'psu-5',
            name: 'Thermaltake Toughpower GF3 1200W',
            price: 14999,
            image: 'https://www.thermaltake.com/media/catalog/product/cache/9d26a6b83e6d427bc63a6b2b02295d9e/t/o/toughpower_gf3_1200w_1.png',
            specs: '1200W, 80+ Gold, Fully Modular, ATX 3.0, PCIe 5.0 Ready, 140mm fan, 10-year warranty',
            wattage: 1200,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-6',
            name: 'Cooler Master MWE Gold 850 V2',
            price: 7999,
            image: 'https://www.coolermaster.com/catalog/legacy-minisites/mwegoldv2/images/popup/mwe-gold-850-v2-full-modular-black.png',
            specs: '850W, 80+ Gold, Fully Modular, Japanese Capacitors, 120mm fan, 5-year warranty',
            wattage: 850,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-7',
            name: 'ASUS ROG Thor 1200P2',
            price: 24999,
            image: 'https://dlcdnwebimgs.asus.com/gain/677BE5D0-7A67-4B6A-AA4E-60EED9EE0770/w1000/h732',
            specs: '1200W, 80+ Platinum, Fully Modular, OLED Display, RGB, 135mm fan, 10-year warranty',
            wattage: 1200,
            rating: '80+ Platinum',
            modular: 'Full'
        },
        {
            id: 'psu-8',
            name: 'FSP Hydro G Pro 1000W',
            price: 11999,
            image: 'https://www.fsplifestyle.com/upload/prod/5dfc6185ae4e5.png',
            specs: '1000W, 80+ Gold, Fully Modular, ATX 3.0, 140mm Fan, Japanese capacitors, 10-year warranty',
            wattage: 1000,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-9',
            name: 'NZXT C1200 Gold',
            price: 13999,
            image: 'https://cdn.nzxt.com/assets/products/32527/gallery/C1200_Gold_Black_0108_1c22aa0f3fa7f59fd2b3.jpg',
            specs: '1200W, 80+ Gold, Fully Modular, ATX 3.0, Zero RPM Mode, 135mm fan, 10-year warranty',
            wattage: 1200,
            rating: '80+ Gold',
            modular: 'Full'
        },
        {
            id: 'psu-10',
            name: 'Super Flower Leadex VII 1300W',
            price: 16999,
            image: 'https://www.super-flower.com.tw/images/products/Leadex_VII_Gold_1300W_01.png',
            specs: '1300W, 80+ Gold, Fully Modular, ATX 3.0, 135mm fan, Japanese capacitors, 12-year warranty',
            wattage: 1300,
            rating: '80+ Gold',
            modular: 'Full'
        }
    ],

    cases: [
        {
            id: 'case-1',
            name: 'Lian Li O11 Dynamic EVO',
            price: 10999,
            image: 'https://lian-li.com/wp-content/uploads/2022/10/o11d-evo-white-front.png',
            specs: 'Mid Tower, Dual Chamber, Tempered Glass, White, E-ATX Support, 9 fan positions',
            formFactor: 'Mid Tower',
            color: 'White'
        },
        {
            id: 'case-2',
            name: 'Fractal Design North',
            price: 9999,
            image: 'https://www.fractal-design.com/wp-content/uploads/2022/11/North-Black-TG-side-new.png',
            specs: 'Mid Tower, Wood Front Panel, Tempered Glass, Black, ATX Support, 7 fan positions',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-3',
            name: 'Corsair 4000D Airflow',
            price: 6999,
            image: 'https://www.corsair.com/medias/sys_master/images/images/h52/h31/9732682694686/-CC-9011200-WW-4000D-Airflow-Gallery-01.png',
            specs: 'Mid Tower, Mesh Front Panel, Tempered Glass, Black, ATX Support, 6 fan positions',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-4',
            name: 'NZXT H9 Flow',
            price: 10999,
            image: 'https://cdn.nzxt.com/assets/products/32590/gallery/H9_Flow_White_0108_3f8285396e3e6da291b5.jpg',
            specs: 'Mid Tower, Dual Chamber, Tempered Glass, White, E-ATX Support, 10 fan positions',
            formFactor: 'Mid Tower',
            color: 'White'
        },
        {
            id: 'case-5',
            name: 'Phanteks Eclipse P600S',
            price: 11999,
            image: 'https://www.phanteks.com/assets/images/products/PH-EC600PSTG_BK01/PH-EC600PSTG_BK01-5.png',
            specs: 'Mid Tower, Sound Dampening, Tempered Glass, Black, E-ATX Support, Modular panels',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-6',
            name: 'be quiet! Silent Base 802',
            price: 11999,
            image: 'https://www.bequiet.com/en/images/cache/1200/1200/1000/1000/png/pc-cases/silent-base-802/silent-base-802-window-black/6.png',
            specs: 'Mid Tower, Modular, Sound Dampening, Tempered Glass, Black, 7 fan positions',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-7',
            name: 'Cooler Master MasterBox TD500',
            price: 7999,
            image: 'https://www.coolermaster.com/catalog/legacy-minisites/td500-mesh/images/popup/td500-mesh-white-with-fans.png',
            specs: 'Mid Tower, Mesh Front, ARGB Fans, Tempered Glass, White, 7 fan positions',
            formFactor: 'Mid Tower',
            color: 'White'
        },
        {
            id: 'case-8',
            name: 'HYTE Y60',
            price: 13999,
            image: 'https://hyte.com/cdn/shop/files/y60-black_a5d0ce99-39af-414e-b278-b2883583a3c2.png?v=1683160414',
            specs: 'Mid Tower, Panoramic Glass, Dual Chamber, Black, ATX Support, 8 fan positions',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-9',
            name: 'Lian Li Lancool 216',
            price: 7499,
            image: 'https://lian-li.com/wp-content/uploads/2022/10/lancool-216-black-front-1.png',
            specs: 'Mid Tower, Mesh Front, 160mm Fans, Tempered Glass, Black, 8 fan positions',
            formFactor: 'Mid Tower',
            color: 'Black'
        },
        {
            id: 'case-10',
            name: 'Fractal Design Pop Air',
            price: 5999,
            image: 'https://www.fractal-design.com/wp-content/uploads/2022/01/Pop-Air-Black-TG-side.png',
            specs: 'Mid Tower, Mesh Front, RGB Fans, Tempered Glass, White, 7 fan positions',
            formFactor: 'Mid Tower',
            color: 'White'
        }
    ],

    cooling: [
        {
            id: 'cool-1',
            name: 'Noctua NH-D15 chromax.black',
            price: 6999,
            image: 'https://noctua.at/media/catalog/product/cache/6/image/650x/040ec09b1e35df139433887a97daa66f/n/h/nh-d15-chromax-black_1.png',
            specs: 'Dual Tower, 140mm Fans, 165mm Height, 6 Heatpipes, LGA1700/AM5, Black',
            type: 'Air Cooler',
            compatibility: 'All Sockets'
        },
        {
            id: 'cool-2',
            name: 'Corsair iCUE H150i ELITE LCD',
            price: 14999,
            image: 'https://www.corsair.com/medias/sys_master/images/images/h00/h13/9771160133662/-CW-9060061-WW-iCUE-H150i-ELITE-LCD-Gallery-01.png',
            specs: '360mm AIO, LCD Display, 3x120mm RGB Fans, LGA1700/AM5, Commander Core',
            type: 'Liquid Cooler',
            compatibility: 'All Sockets'
        },
        {
            id: 'cool-3',
            name: 'ARCTIC Liquid Freezer II 420',
            price: 8999,
            image: 'https://www.arctic.de/media/5c/c6/0b/1644325655/Liquid%20Freezer%20II%20420%20A-RGB%203d.png',
            specs: '420mm AIO, 3x140mm PWM Fans, VRM Fan, LGA1700/AM5, Thick Radiator',
            type: 'Liquid Cooler',
            compatibility: 'All Sockets'
        },
        {
            id: 'cool-4',
            name: 'be quiet! Dark Rock Pro 4',
            price: 5999,
            image: 'https://www.bequiet.com/en/images/cache/1200/1200/1000/1000/png/cpu-cooler/dark-rock-pro-4/dark-rock-pro-4/16.png',
            specs: 'Dual Tower, 135mm/120mm Fans, 163mm Height, 7 Heatpipes, Silent Wings',
            type: 'Air Cooler',
            compatibility: 'All Sockets'
        },
        {
            id: 'cool-5',
            name: 'NZXT Kraken Z73 RGB',
            price: 13999,
            image: 'https://cdn.nzxt.com/assets/products/32053/gallery/kraken-z73-rgb-white-0117-65dbf6fd7536e077db0e.jpg',
            specs: '360mm AIO, LCD Display, 3x120mm RGB Fans, CAM Software, White',
            type: 'Liquid Cooler',
            compatibility: 'All Sockets'
        },
        {
            id: 'cool-6',
            name: 'Deepcool AK620',
            price: 3999,
            image: 'https://www.deepcool.com/product/cooler/2021-08-17/1405.shtml?pic=/uploads/images/202108/1629205942456082.png',
            specs: 'Dual Tower, 2x120mm Fans, 160mm Height, 6 Heatpipes, All Black',
            type: 'Air Cooler',
            compatibility: 'All Sockets'
        },
        {
            id: 'cool-7',
            name: 'Lian Li Galahad AIO 360',
            price: 9999,
            image: 'https://lian-li.com/wp-content/uploads/2020/08/Galahad-360-Black-01.png',
            specs: '360mm AIO, 3x120mm ARGB Fans, Asetek Pump, LGA1700/AM5, Black',
            type: 'Liquid Cooler',
            compatibility: 'All Sockets'
        },
        {
            id: 'cool-8',
            name: 'Scythe Fuma 2 Rev.B',
            price: 4499,
            image: 'https://www.scythe.com.tw/images/products/SCFM-2100/main.png',
            specs: 'Dual Tower, 2x120mm Fans, 154.5mm Height, 6 Heatpipes, Low Profile',
            type: 'Air Cooler',
            compatibility: 'All Sockets'
        },
        {
            id: 'cool-9',
            name: 'Thermalright Peerless Assassin 120',
            price: 3499,
            image: 'https://thermalright.com/wp-content/uploads/2022/06/PA120-BLACK.png',
            specs: 'Dual Tower, 2x120mm Fans, 157mm Height, 6 Heatpipes, ARGB Version',
            type: 'Air Cooler',
            compatibility: 'All Sockets'
        },
        {
            id: 'cool-10',
            name: 'Cooler Master MasterLiquid ML360L',
            price: 6999,
            image: 'https://www.coolermaster.com/catalog/legacy-minisites/masterliquid-ml240l-v2-rgb/images/popup/masterliquid-ml360l-v2-rgb-white.png',
            specs: '360mm AIO, 3x120mm ARGB Fans, Dual Chamber Pump, Addressable RGB',
            type: 'Liquid Cooler',
            compatibility: 'All Sockets'
        }
    ],

    monitors: [
        {
            id: 'monitor-1',
            name: 'Samsung Odyssey G9 49"',
            price: 69999,
            image: 'https://images.samsung.com/is/image/samsung/ph-odyssey-g9-lc49g95tssexxp-frontwhite-thumb-307878032',
            specs: '49" Dual QHD, 5120x1440, 240Hz, 1ms, 1000R Curved, QLED, G-Sync/FreeSync',
            size: 49,
            resolution: '5120x1440',
            refreshRate: 240
        },
        {
            id: 'monitor-2',
            name: 'LG UltraGear 48" OLED',
            price: 79999,
            image: 'https://cdn.pcworth.com/products/monitor/ecomm/3095/images/lg-ultragear-48gq900-b-48-120hz-uhd-4k-oled-monitor-174053368467BE6FB4EFF1E.jpg',
            specs: '48" 4K OLED, 3840x2160, 120Hz, 0.1ms, G-Sync/FreeSync, HDMI 2.1',
            size: 48,
            resolution: '3840x2160',
            refreshRate: 120
        },
        {
            id: 'monitor-3',
            name: 'ASUS ROG Swift PG279QM',
            price: 44999,
            image: 'https://dlcdnwebimgs.asus.com/gain/72C16A36-4EE3-4AC4-A58A-35F6B8A2FB6F',
            specs: '27" QHD, 2560x1440, 240Hz, 1ms, IPS, G-Sync, ELMB Sync, HDR',
            size: 27,
            resolution: '2560x1440',
            refreshRate: 240
        },
        {
            id: 'monitor-4',
            name: 'Alienware AW3423DW',
            price: 59999,
            image: 'https://cdn.arstechnica.net/wp-content/uploads/2022/09/aw3423dwf-xfp-01-bk-rgb.png',
            specs: '34" QD-OLED, 3440x1440, 175Hz, 0.1ms, Curved, G-Sync Ultimate',
            size: 34,
            resolution: '3440x1440',
            refreshRate: 175
        },
        {
            id: 'monitor-5',
            name: 'Gigabyte M32UC',
            price: 32999,
            image: 'https://static.gigabyte.com/StaticFile/Image/Global/dd44a6d8a512c10ce335f275b35d9671/Product/45076/Png',
            specs: '32" 4K, 3840x2160, 144Hz, 1ms, SS IPS, KVM, USB-C 90W',
            size: 32,
            resolution: '3840x2160',
            refreshRate: 144
        },
        {
            id: 'monitor-6',
            name: 'MSI MPG ARTYMIS 343CQR',
            price: 37999,
            image: 'https://asset.msi.com/resize/image/global/product/product_16124051569e081e5e34bcacbe3dd6dc2589b81d60.png62405b38c58fe0f07fcef2367d8a9ba1/380.png',
            specs: '34" UWQHD, 3440x1440, 165Hz, 1ms, 1000R Curved, VA, HDR400',
            size: 34,
            resolution: '3440x1440',
            refreshRate: 165
        },
        {
            id: 'monitor-7',
            name: 'ViewSonic Elite XG271QG',
            price: 41999,
            image: 'https://www.viewsonic.com/media/catalog/product/cache/b1231e477ffebecb36748a51c37e27d3/x/g/xg271qg_front_hires_1.png',
            specs: '27" QHD, 2560x1440, 270Hz, 1ms, Fast IPS, G-Sync, ColorPro',
            size: 27,
            resolution: '2560x1440',
            refreshRate: 270
        },
        {
            id: 'monitor-8',
            name: 'Acer Predator X38 S',
            price: 69999,
            image: 'https://assets-prd.ignimgs.com/2022/04/26/object-1651017451799.png?width=348&format=jpg&auto=webp&quality=80',
            specs: '38" UWQHD+, 3840x1600, 175Hz, 0.3ms, IPS, G-Sync Ultimate, HDR600',
            size: 38,
            resolution: '3840x1600',
            refreshRate: 175
        },
        {
            id: 'monitor-9',
            name: 'Dell S2721DGF',
            price: 24999,
            image: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/peripherals/output-devices/dell/monitors/s2721dgf/general/update-image-screenfill-monitor-s2721dgf-2000x1500-v1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=427&qlt=100,1&resMode=sharp2&size=427,320&chrss=full',
            specs: '27" QHD, 2560x1440, 165Hz, 1ms, IPS, FreeSync Premium Pro, HDR400',
            size: 27,
            resolution: '2560x1440',
            refreshRate: 165
        },
        {
            id: 'monitor-10',
            name: 'ASUS TUF Gaming VG27AQ',
            price: 19999,
            image: 'https://ecommerce.datablitz.com.ph/cdn/shop/products/85ssljuw0k4w2hbp_setting_xxx_0_90_end_1000_800x.png?v=1691140544',
            specs: '27" QHD, 2560x1440, 165Hz, 1ms, IPS, ELMB Sync, Shadow Boost',
            size: 27,
            resolution: '2560x1440',
            refreshRate: 165
        }
    ],

    peripherals: [
        {
            id: 'peripheral-1',
            name: 'Logitech G Pro X Superlight',
            price: 7999,
            image: 'https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Components/29028/LOGITECH-PRO-X-SUPERLIGHT-Wireless-BLK-2400-01.png?v=2ce3b59e0e04f6801c9f80471aae45b6bad3438b',
            specs: 'Wireless, 63g, HERO 25K Sensor, 5 Programmable Buttons, 70h Battery',
            type: 'Mouse',
            connectivity: 'Wireless'
        },
        {
            id: 'peripheral-2',
            name: 'Razer Huntsman V2 Analog',
            price: 9999,
            image: 'https://dl.razerzone.com/src/4024-1-EN-v1.png',
            specs: 'Analog Optical Switches, Doubleshot PBT Keycaps, RGB, Wrist Rest',
            type: 'Keyboard',
            connectivity: 'Wired'
        },
        {
            id: 'peripheral-3',
            name: 'SteelSeries Arctis Nova Pro',
            price: 14999,
            image: 'https://images.ctfassets.net/hmm5mo4qf4mf/i5ccdags5WckwDfYUVk7W/03a59ccd1a3f7fc5931624aedbaf7a2e/imgbuy_arctis_nova_pro_black_3_v2.png__1920x1080_crop-fit_optimize_subsampling-2-260.png',
            specs: 'Wireless, Active Noise Cancellation, 360° Spatial Audio, Dual Battery',
            type: 'Headset',
            connectivity: 'Wireless'
        },
        {
            id: 'peripheral-4',
            name: 'Corsair K100 RGB',
            price: 12999,
            image: 'https://www.corsair.com/wp-content/uploads/2022/01/press_k100_1.png',
            specs: 'OPX Optical Switches, 4000Hz Polling, iCUE Control Wheel, 44-Zone RGB',
            type: 'Keyboard',
            connectivity: 'Wired'
        },
        {
            id: 'peripheral-5',
            name: 'HyperX Pulsefire Haste Wireless',
            price: 4999,
            image: 'https://cdn11.bigcommerce.com/s-alitpcfiof/products/23139/images/23849/840104369777__19612.1692773234.386.513.png?c=1',
            specs: 'Wireless, 59g, TTC Golden Switches, HyperFlex Cable Option, 100h Battery',
            type: 'Mouse',
            connectivity: 'Wireless'
        },
        {
            id: 'peripheral-6',
            name: 'ASUS ROG Claymore II',
            price: 11999,
            image: 'https://dlcdnwebimgs.asus.com/gain/53E8ADAF-5742-4BD1-889B-EF09D91D4329/w1000/h732',
            specs: 'Hot-swappable Switches, Detachable Numpad, Aura Sync RGB, 2.4GHz/Bluetooth',
            type: 'Keyboard',
            connectivity: 'Wireless'
        },
        {
            id: 'peripheral-7',
            name: 'Logitech G Pro X Wireless Headset',
            price: 9999,
            image: 'https://www.logitechg.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png',
            type: 'Headset',
            connectivity: 'Wireless'
        },
        {
            id: 'peripheral-8',
            name: 'Razer Viper V2 Pro',
            price: 8999,
            image: 'https://dl.razerzone.com/src/6048-1-en-v10.png',
            specs: 'Wireless, 58g, Focus Pro 30K Sensor, Optical Switches, 80h Battery',
            type: 'Mouse',
            connectivity: 'Wireless'
        },
        {
            id: 'peripheral-9',
            name: 'SteelSeries Apex Pro TKL',
            price: 10999,
            image: 'https://hubecomputer.com/cdn/shop/products/buyimg_apexprotkl_006_us.png__1850x800_q100_crop-scale_optimize_subsampling-2_1000x1000.png?v=1705308041',
            specs: 'OmniPoint 2.0 Adjustable Switches, OLED Smart Display, RGB',
            type: 'Keyboard',
            connectivity: 'Wired'
        },
        {
            id: 'peripheral-10',
            name: 'Corsair Dark Core RGB Pro',
            price: 6999,
            image: 'https://ecommerce.datablitz.com.ph/cdn/shop/products/CH-9315511-NA-Gallery-DARK-CORE-RGB-PRO-SE-01_32e25757-6187-4c62-9f3b-0dfc5bbc343a_800x.png?v=1676804575',
            specs: 'Wireless, 18900 DPI, 50h Battery, Qi Wireless Charging, 8 Programmable Buttons',
            type: 'Mouse',
            connectivity: 'Wireless'
        }
    ]
};

// COMPATIBILITY RULES
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

// GET FEATURED PRODUCTS FOR HOMEPAGE
function getFeaturedProducts() {
    const featured = [];
    // Take 3 prebuilts and 3 laptops
    featured.push(...products.prebuilts.slice(0, 3));
    featured.push(...products.laptops.slice(0, 3));
    return featured;
}