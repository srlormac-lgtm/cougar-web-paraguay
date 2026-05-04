/**
 * CougarStore — Core Ecommerce Engine
 * Cougar Suspension Paraguay / Argentina / Brasil
 *
 * Global: window.CougarStore
 * Events: 'cart-updated' dispatched on document on every cart mutation
 */
;(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════════════════════
     1. PRODUCT CATALOG
     ═══════════════════════════════════════════════════════════════════════════ */

  var PRODUCTS = [

    // ── Bump Stops ──────────────────────────────────────────────────────────
    {
      id: 'bump-stop-c1',
      name: 'Cougar C1',
      category: 'Bump Stops',
      description: 'High-strength urethane bump stop. 5 years of reliable performance. Absorbs every impact without losing firmness. Precio por par.',
      image: 'assets/c1.jpg',
      badge: 'PAR',
      prices: { PYG: 350000, ARS: 45500, BRL: 244 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'bump-stop-c2',
      name: 'Cougar C2',
      category: 'Bump Stops',
      description: 'Complete high-performance suspension upgrade. Total control in curves, brakes, and rough terrain. Precio por par.',
      image: 'assets/c2.jpg',
      badge: 'PAR',
      prices: { PYG: 250000, ARS: 32500, BRL: 175 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'bump-stop-extreme',
      name: 'Cougar Extreme',
      category: 'Bump Stops',
      description: 'Supports up to 1,200 lbs. Eliminates rear sag and smooths out the roughest rides. Maximum performance. Precio por par.',
      image: 'assets/extreme.jpg',
      badge: 'PAR',
      prices: { PYG: 1800000, ARS: 234000, BRL: 1258 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'bump-stop-extreme-confort',
      name: 'Cougar Extreme Confort',
      category: 'Bump Stops',
      description: 'Built for everyday driving, engineered to handle up to 450 kg of extra load. Comfort meets capacity. Precio por par.',
      image: 'assets/extreme-confort.jpg',
      badge: 'BEST SELLER',
      prices: { PYG: 1800000, ARS: 234000, BRL: 1258 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },

    // ── Control Arms ────────────────────────────────────────────────────────
    {
      id: 'uca-steel',
      name: 'UCA Steel',
      category: 'Control Arms',
      description: 'Stamped steel upper control arm. Direct OE replacement with improved geometry for 2-3" lifts.',
      image: 'assets/products/uca-steel.png',
      badge: '',
      prices: { PYG: 2500000, ARS: 325000, BRL: 1747 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'uca-land-cruiser',
      name: 'UCA Land Cruiser',
      category: 'Control Arms',
      description: 'Tubular chromoly UCA engineered for Land Cruiser 200 series. Ball joint included.',
      image: 'assets/products/uca-landcruiser.png',
      badge: '',
      prices: { PYG: 4200000, ARS: 546000, BRL: 2935 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'forged-aluminum-uca',
      name: 'Forged Aluminum UCA',
      category: 'Control Arms',
      description: 'CNC-forged 6061 aluminum upper control arm. 40% lighter than steel. Race-spec uniball pivot.',
      image: 'assets/products/uca-forged-aluminum.png',
      badge: 'PREMIUM',
      prices: { PYG: 6800000, ARS: 884000, BRL: 4752 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'billet-delta',
      name: 'Billet Delta',
      category: 'Control Arms',
      description: 'Full-billet 7075 aluminum delta arm. Maximum caster correction for 4-6" lifts. PTFE bushings.',
      image: 'assets/products/uca-billet-delta.png',
      badge: 'FLAGSHIP',
      prices: { PYG: 8500000, ARS: 1105000, BRL: 5940 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },

    // ── Stabilizers ─────────────────────────────────────────────────────────
    {
      id: 'rear-sway-bar',
      name: 'Rear Sway Bar',
      category: 'Stabilizers',
      description: 'Solid chromoly rear sway bar with adjustable end links. Reduces body roll up to 45%.',
      image: 'assets/products/rear-sway-bar.png',
      badge: '',
      prices: { PYG: 1200000, ARS: 156000, BRL: 838 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'rear-balance-arm',
      name: 'Rear Balance Arm',
      category: 'Stabilizers',
      description: 'Rear anti-roll balance arm. Bolt-on installation with adjustable stiffness settings.',
      image: 'assets/products/rear-balance-arm.png',
      badge: '',
      prices: { PYG: 1850000, ARS: 240500, BRL: 1293 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'rear-twin-bar',
      name: 'Rear Twin Bar',
      category: 'Stabilizers',
      description: 'Dual hollow-tube rear stabilizer system. Independent tuning per side for asymmetric loads.',
      image: 'assets/products/rear-twin-bar.png',
      badge: 'PRO',
      prices: { PYG: 3500000, ARS: 455000, BRL: 2446 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'front-balance-arm',
      name: 'Front Balance Arm',
      category: 'Stabilizers',
      description: 'Front anti-roll balance arm with heavy-duty polyurethane bushings. Bolt-on fit.',
      image: 'assets/products/front-balance-arm.png',
      badge: '',
      prices: { PYG: 1650000, ARS: 214500, BRL: 1153 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },

    // ── Spacers ─────────────────────────────────────────────────────────────
    {
      id: 'aluminum-height-spacer',
      name: 'Aluminum Height Spacer',
      category: 'Spacers',
      description: '6061 aluminum strut-top spacer. Adds 25-50mm of front lift. Corrosion-resistant anodize.',
      image: 'assets/products/aluminum-height-spacer.png',
      badge: '',
      prices: { PYG: 450000, ARS: 58500, BRL: 314 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'front-coil-spacer',
      name: 'Front Coil Spacer',
      category: 'Spacers',
      description: 'Polyurethane front coil spacer. 30mm lift with OE ride quality. UV-stable compound.',
      image: 'assets/products/front-coil-spacer.png',
      badge: '',
      prices: { PYG: 350000, ARS: 45500, BRL: 244 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'wheel-spacers-25mm',
      name: 'Wheel Spacers 25mm',
      category: 'Spacers',
      description: '25mm hub-centric wheel spacers. T6 aluminum, thread-locking studs included. Pair.',
      image: 'assets/products/wheel-spacers-25mm.png',
      badge: '',
      prices: { PYG: 550000, ARS: 71500, BRL: 384 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'rear-coil-spacer',
      name: 'Rear Coil Spacer',
      category: 'Spacers',
      description: 'Polyurethane rear coil spacer. Restores ride height on loaded vehicles. 20-40mm options.',
      image: 'assets/products/rear-coil-spacer.png',
      badge: '',
      prices: { PYG: 250000, ARS: 32500, BRL: 174 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'wheel-spacers',
      name: 'Wheel Spacers',
      category: 'Spacers',
      description: '32mm bolt-on wheel spacers. Wider track for improved stability. Grade 10.9 hardware.',
      image: 'assets/wheel-spacers.jpg',
      badge: '',
      prices: { PYG: 1500000, ARS: 195000, BRL: 1048 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },

    // ── Shackles ────────────────────────────────────────────────────────────
    {
      id: 'shackle',
      name: 'Shackle',
      category: 'Shackles',
      description: 'Standard replacement shackle with greaseable bushings. 1" lift over stock.',
      image: 'assets/shackle.jpg',
      badge: '',
      prices: { PYG: 350000, ARS: 45500, BRL: 244 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'g-shackles-25',
      name: 'G-Shackles 2.5"',
      category: 'Shackles',
      description: '2.5" extended greaseable shackle. High-tensile steel with polyurethane bushings.',
      image: 'assets/products/g-shackles-25.png',
      badge: '',
      prices: { PYG: 650000, ARS: 84500, BRL: 454 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'g-shackles-2',
      name: 'G-Shackles 2"',
      category: 'Shackles',
      description: '2" extended greaseable shackle. Ideal balance of lift and ride quality.',
      image: 'assets/products/g-shackles-2.png',
      badge: '',
      prices: { PYG: 550000, ARS: 71500, BRL: 384 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'g-shackles-comfort',
      name: 'G-Shackles Comfort',
      category: 'Shackles',
      description: 'Comfort-tuned shackle with dual rubber bushings. Minimal NVH for daily drivers.',
      image: 'assets/products/g-shackles-comfort-color.png',
      badge: 'COMFORT',
      prices: { PYG: 750000, ARS: 97500, BRL: 524 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'g-shackles-silverado',
      name: 'G-Shackles Silverado',
      category: 'Shackles',
      description: 'Direct-fit shackle for Silverado/Sierra 1500-3500. Zinc-plated, 2" lift.',
      image: 'assets/products/g-shackles-silverado.png',
      badge: '',
      prices: { PYG: 900000, ARS: 117000, BRL: 629 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },

    // ── Lift Kits ───────────────────────────────────────────────────────────
    {
      id: 'leveling-lift-kit',
      name: 'Leveling Lift Kit',
      category: 'Lift Kits',
      description: 'Complete front/rear leveling kit with spacers, extended shackles and hardware. 2-3" front, 1-2" rear.',
      image: 'assets/products/leveling-lift-kit.png',
      badge: 'KIT',
      prices: { PYG: 2800000, ARS: 364000, BRL: 1957 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },

    // ── Leaf Springs ────────────────────────────────────────────────────────
    {
      id: 'helper-leaf',
      name: 'Helper Leaf Spring',
      category: 'Leaf Springs',
      description: 'Add-on helper leaf for rear leaf pack. Increases load capacity by ~300kg without stiffening ride.',
      image: 'assets/products/helper-leaf-spring.png',
      badge: '',
      prices: { PYG: 800000, ARS: 104000, BRL: 559 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'add-a-leaf',
      name: 'Add-A-Leaf',
      category: 'Leaf Springs',
      description: 'Progressive-rate add-a-leaf. Restores 25-40mm of rear ride height. Tapered ends.',
      image: 'assets/products/add-a-leaf.png',
      badge: '',
      prices: { PYG: 1200000, ARS: 156000, BRL: 838 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },

    // ── Truck Shocks (10) ───────────────────────────────────────────────────
    {
      id: 'truck-apex-hx',
      name: 'Apex HX — Truck Shock',
      category: 'Truck Shocks',
      description: 'High-performance monotube shock for Hilux/Tacoma. 10-stage adjustable compression and rebound.',
      image: 'assets/generated/truck-01-hilux.png',
      badge: 'BEST SELLER',
      prices: { PYG: 2200000, ARS: 286000, BRL: 1538 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'truck-titan-tc',
      name: 'Titan TC — Truck Shock',
      category: 'Truck Shocks',
      description: 'Twin-tube heavy-duty shock for Tacoma/Ranger. Oversized 46mm piston. Dust boot included.',
      image: 'assets/generated/truck-02-tacoma.png',
      badge: '',
      prices: { PYG: 1800000, ARS: 234000, BRL: 1258 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'truck-ironclad-f1',
      name: 'Ironclad F1 — Truck Shock',
      category: 'Truck Shocks',
      description: 'Remote-reservoir shock for F-150. 2.5" body with 8" reservoir. Race-proven valving.',
      image: 'assets/generated/truck-03-f150.png',
      badge: 'PRO',
      prices: { PYG: 4500000, ARS: 585000, BRL: 3144 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'truck-ranger-rl',
      name: 'Ranger RL — Truck Shock',
      category: 'Truck Shocks',
      description: 'Ride-leveling shock for Ford Ranger. Internal floating piston with nitrogen charge.',
      image: 'assets/generated/truck-04-ranger.png',
      badge: '',
      prices: { PYG: 1950000, ARS: 253500, BRL: 1362 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'truck-silverado-ss',
      name: 'Silverado SS — Truck Shock',
      category: 'Truck Shocks',
      description: 'Sport-series shock for Silverado 1500/2500. Velocity-sensitive valving. Zinc-coated body.',
      image: 'assets/generated/truck-05-silverado.png',
      badge: '',
      prices: { PYG: 2100000, ARS: 273000, BRL: 1468 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'truck-ram-hd',
      name: 'Ram HD — Truck Shock',
      category: 'Truck Shocks',
      description: 'Heavy-duty monotube for Ram 1500-3500. Extended travel for lifted applications up to 6".',
      image: 'assets/generated/truck-06-ram.png',
      badge: '',
      prices: { PYG: 2500000, ARS: 325000, BRL: 1747 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'truck-tundra-tx',
      name: 'Tundra TX — Truck Shock',
      category: 'Truck Shocks',
      description: 'Full-length monotube shock for Tundra. Heat-treated aluminum body. 36mm bore.',
      image: 'assets/generated/truck-07-tundra.png',
      badge: '',
      prices: { PYG: 2350000, ARS: 305500, BRL: 1642 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'truck-colorado-cx',
      name: 'Colorado CX — Truck Shock',
      category: 'Truck Shocks',
      description: 'Compact monotube for Colorado/Canyon. Perfect for urban + weekend trail duty.',
      image: 'assets/generated/truck-08-colorado.png',
      badge: '',
      prices: { PYG: 1500000, ARS: 195000, BRL: 1048 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'truck-navara-nx',
      name: 'Navara NX — Truck Shock',
      category: 'Truck Shocks',
      description: 'Nitrogen-charged shock for Nissan Navara. Progressive damping for loaded tray use.',
      image: 'assets/generated/truck-09-navara.png',
      badge: '',
      prices: { PYG: 1650000, ARS: 214500, BRL: 1153 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'truck-dmax-dx',
      name: 'D-Max DX — Truck Shock',
      category: 'Truck Shocks',
      description: 'Twin-tube shock for Isuzu D-Max. Hardened chrome rod, multi-lip seal. Pair.',
      image: 'assets/generated/truck-10-dmax.png',
      badge: '',
      prices: { PYG: 1750000, ARS: 227500, BRL: 1223 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },

    // ── Motorcycle Shocks (10) ──────────────────────────────────────────────
    {
      id: 'moto-razor-sp',
      name: 'Razor SP — Motorcycle Shock',
      category: 'Motorcycle Shocks',
      description: 'Sport-performance rear shock. Adjustable preload and rebound. CNC alloy body.',
      image: 'assets/generated/moto-01-sport.png',
      badge: 'SPORT',
      prices: { PYG: 1200000, ARS: 156000, BRL: 838 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'moto-expedition-adv',
      name: 'Expedition ADV — Motorcycle Shock',
      category: 'Motorcycle Shocks',
      description: 'Adventure-touring rear shock with piggyback reservoir. 60mm adjustable preload.',
      image: 'assets/generated/moto-02-adventure.png',
      badge: 'ADV',
      prices: { PYG: 2800000, ARS: 364000, BRL: 1957 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'moto-crossfire-mx',
      name: 'Crossfire MX — Motorcycle Shock',
      category: 'Motorcycle Shocks',
      description: 'Motocross-spec rear shock. High/low speed compression, rebound clickers. Kashima coat.',
      image: 'assets/generated/moto-03-mx.png',
      badge: 'RACE',
      prices: { PYG: 3500000, ARS: 455000, BRL: 2446 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'moto-cruiser-cl',
      name: 'Cruiser CL — Motorcycle Shock',
      category: 'Motorcycle Shocks',
      description: 'Chrome-bodied rear shock for cruiser bikes. Soft progressive spring. 320mm eye-to-eye.',
      image: 'assets/generated/moto-04-cruiser.png',
      badge: '',
      prices: { PYG: 800000, ARS: 104000, BRL: 559 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'moto-enduro-ex',
      name: 'Enduro EX — Motorcycle Shock',
      category: 'Motorcycle Shocks',
      description: 'Enduro-optimized rear shock with long travel. Sealed bearing mount. Mud-guard boot.',
      image: 'assets/generated/moto-05-enduro.png',
      badge: '',
      prices: { PYG: 2200000, ARS: 286000, BRL: 1538 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'moto-street-st',
      name: 'Street ST — Motorcycle Shock',
      category: 'Motorcycle Shocks',
      description: 'Urban street shock for naked and standard bikes. Compact 280mm length. Adjustable preload.',
      image: 'assets/generated/moto-06-street.png',
      badge: '',
      prices: { PYG: 950000, ARS: 123500, BRL: 663 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'moto-racing-rr',
      name: 'Racing RR — Motorcycle Shock',
      category: 'Motorcycle Shocks',
      description: 'Track-day rear shock. Full titanium spring, 4-way adjustable damping. Sub-1.8kg.',
      image: 'assets/generated/moto-07-racing.png',
      badge: 'RACE',
      prices: { PYG: 3200000, ARS: 416000, BRL: 2236 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'moto-trail-tr',
      name: 'Trail TR — Motorcycle Shock',
      category: 'Motorcycle Shocks',
      description: 'All-terrain trail shock. Dual-rate spring for light trail and fire roads.',
      image: 'assets/generated/moto-08-trail.png',
      badge: '',
      prices: { PYG: 1500000, ARS: 195000, BRL: 1048 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'moto-touring-gt',
      name: 'Touring GT — Motorcycle Shock',
      category: 'Motorcycle Shocks',
      description: 'Long-distance touring rear shock with hydraulic preload adjuster. Comfort-rated.',
      image: 'assets/generated/moto-09-touring.png',
      badge: 'TOURING',
      prices: { PYG: 1800000, ARS: 234000, BRL: 1258 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'moto-dual-ds',
      name: 'Dual DS — Motorcycle Shock',
      category: 'Motorcycle Shocks',
      description: 'Dual-sport rear shock. Street-legal with off-road capability. Adjustable ride height.',
      image: 'assets/generated/moto-10-dual.png',
      badge: '',
      prices: { PYG: 1650000, ARS: 214500, BRL: 1153 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },

    // ── Car / SUV Shocks (10) ───────────────────────────────────────────────
    {
      id: 'car-commute-cl',
      name: 'Commute CL — Car Shock',
      category: 'Car/SUV Shocks',
      description: 'Daily commuter shock for sedans. Twin-tube with OE-spec valving. Quiet operation.',
      image: 'assets/generated/car-01-corolla.png',
      badge: '',
      prices: { PYG: 600000, ARS: 78000, BRL: 419 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'car-sport-cv',
      name: 'Sport CV — Car Shock',
      category: 'Car/SUV Shocks',
      description: 'Sport-tuned shock for Civic/Corolla class. Lowered-ready with shorter stroke.',
      image: 'assets/generated/car-02-civic.png',
      badge: 'SPORT',
      prices: { PYG: 850000, ARS: 110500, BRL: 594 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'car-touring-cm',
      name: 'Touring CM — Car Shock',
      category: 'Car/SUV Shocks',
      description: 'Touring shock for mid-size sedans (Camry, Accord). Premium ride comfort.',
      image: 'assets/generated/car-03-camry.png',
      badge: '',
      prices: { PYG: 750000, ARS: 97500, BRL: 524 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'car-premium-ac',
      name: 'Premium AC — Car Shock',
      category: 'Car/SUV Shocks',
      description: 'Premium monotube for Accord/Mazda6. Reduced body roll with civilized ride.',
      image: 'assets/generated/car-04-accord.png',
      badge: '',
      prices: { PYG: 980000, ARS: 127400, BRL: 685 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'car-dynamic-mz',
      name: 'Dynamic MZ — Car Shock',
      category: 'Car/SUV Shocks',
      description: 'Dynamic-response shock for Mazda3/CX-5. Velocity-sensitive damping.',
      image: 'assets/generated/car-05-mazda3.png',
      badge: '',
      prices: { PYG: 820000, ARS: 106600, BRL: 573 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'car-eco-sn',
      name: 'Eco SN — Car Shock',
      category: 'Car/SUV Shocks',
      description: 'Economy-line shock for Sentra/Versa class. Reliable twin-tube at an entry price.',
      image: 'assets/generated/car-06-sentra.png',
      badge: 'VALUE',
      prices: { PYG: 650000, ARS: 84500, BRL: 454 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'car-rally-im',
      name: 'Rally IM — Car Shock',
      category: 'Car/SUV Shocks',
      description: 'Rally-grade inverted monotube for Impreza/WRX. Adjustable high/low speed compression.',
      image: 'assets/generated/car-07-impreza.png',
      badge: 'RACE',
      prices: { PYG: 3800000, ARS: 494000, BRL: 2655 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'car-evo-lc',
      name: 'Evo LC — Car Shock',
      category: 'Car/SUV Shocks',
      description: 'Track-focused coilover shock for Lancer Evo/STI. 32-click rebound adjustment.',
      image: 'assets/generated/car-08-lancer.png',
      badge: 'RACE',
      prices: { PYG: 5000000, ARS: 650000, BRL: 3493 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'car-offroad-4r',
      name: 'Offroad 4R — SUV Shock',
      category: 'Car/SUV Shocks',
      description: 'Long-travel monotube for 4Runner/Prado. 2.5" body, remote reservoir ready.',
      image: 'assets/generated/car-09-4runner.png',
      badge: 'OFF-ROAD',
      prices: { PYG: 3200000, ARS: 416000, BRL: 2236 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    },
    {
      id: 'car-expedition-lc',
      name: 'Expedition LC — SUV Shock',
      category: 'Car/SUV Shocks',
      description: 'Expedition-grade shock for Land Cruiser 200/300. Overland-spec with external reservoir.',
      image: 'assets/generated/car-10-landcruiser.png',
      badge: 'EXPEDITION',
      prices: { PYG: 4500000, ARS: 585000, BRL: 3144 },
      shipping: { PYG: 150000, ARS: 19500, BRL: 105 }
    }
  ];

  /* ═══════════════════════════════════════════════════════════════════════════
     2. COUNTRY / CURRENCY CONFIG
     ═══════════════════════════════════════════════════════════════════════════ */

  /* ── Exchange rates & flat shipping ──────────────────────────────────── */
  var USD_RATES = { ARS: 1200, BRL: 5.5 };  // 1 USD = X local
  var FLAT_SHIPPING_USD = 30;                // flat per-order shipping in USD

  var COUNTRY_CONFIG = {
    PY: {
      currency: 'PYG',
      commerceId: 789,
      flatShipping: 0,    // GRATIS en Paraguay
      dpago: {
        enabled: true,
        testMode: false,
        buttonColor: '#F07020',
        publicKey: 'pk_prod_9a02cd4b41c370fc4ac2ed29b6ca7f9005d63ac0',
        secretKey: 'sk_prod_6ac9ff72eaa3df1643b594e709befc9295845a8b',
        webhookUrl: ''
      },
      paymentMethods: [
        { id: 1,  name: 'Tigo Money',             icon: '📱', active: true },
        { id: 2,  name: 'Personal Pay',           icon: '📱', active: true },
        { id: 3,  name: 'Wally',                  icon: '💳', active: true },
        { id: 4,  name: 'Zimple',                 icon: '💳', active: true },
        { id: 6,  name: 'QR',                     icon: '📷', active: true },
        { id: 7,  name: 'Transferencia Bancaria',  icon: '🏦', active: true },
        { id: 13, name: 'Upay Credito',           icon: '💳', active: true },
        { id: 17, name: 'Upay Debito',            icon: '💳', active: true },
        { id: 18, name: 'QR Ueno',                icon: '📷', active: true }
      ]
    },
    AR: {
      currency: 'ARS',
      commerceId: null,
      flatShipping: Math.round(FLAT_SHIPPING_USD * USD_RATES.ARS),  // 30 USD → 36.000 ARS
      dpago: { enabled: false, testMode: false, buttonColor: '#F07020', apiKey: '', webhookUrl: '' },
      paymentMethods: [
        { id: 'mp',   name: 'Mercado Pago',  icon: '💳', active: true },
        { id: 'tf',   name: 'Transferencia',  icon: '🏦', active: true }
      ]
    },
    BR: {
      currency: 'BRL',
      commerceId: null,
      flatShipping: Math.round(FLAT_SHIPPING_USD * USD_RATES.BRL * 100) / 100,  // 30 USD → 165 BRL
      dpago: { enabled: false, testMode: false, buttonColor: '#F07020', apiKey: '', webhookUrl: '' },
      paymentMethods: [
        { id: 'pix',    name: 'PIX',    icon: '📷', active: true },
        { id: 'boleto', name: 'Boleto', icon: '🏦', active: true }
      ]
    }
  };

  var DEFAULT_COUNTRY = 'PY';

  /* ═══════════════════════════════════════════════════════════════════════════
     3. STATE MANAGEMENT — localStorage keys
     ═══════════════════════════════════════════════════════════════════════════ */

  var LS_COUNTRY  = 'cougar_country';
  var LS_CURRENCY = 'cougar_currency';
  var LS_CART     = 'cougar_cart';       // JSON array of { productId, qty }

  function _ls(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      if (val === null) { localStorage.removeItem(key); return; }
      localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
    } catch (e) { /* private mode / quota */ }
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     4. GEOLOCATION — detect country by IP
     ═══════════════════════════════════════════════════════════════════════════ */

  /**
   * Attempts detection via ipapi.co, falls back to ip-api.com, then defaults to PY.
   * Sets cougar_country and cougar_currency in localStorage.
   * Returns a Promise<{ country, currency, config }>.
   */
  function detectCountry() {
    // If already stored, reuse immediately
    var stored = _ls(LS_COUNTRY);
    if (stored && COUNTRY_CONFIG[stored]) {
      var cfg = COUNTRY_CONFIG[stored];
      _ls(LS_CURRENCY, cfg.currency);
      return Promise.resolve({ country: stored, currency: cfg.currency, config: cfg });
    }

    // Primary: ipapi.co
    return fetch('https://ipapi.co/json/', { timeout: 4000 })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var code = (data.country_code || '').toUpperCase();
        return code;
      })
      .catch(function () {
        // Fallback: ip-api.com
        return fetch('http://ip-api.com/json/?fields=countryCode', { timeout: 4000 })
          .then(function (r) { return r.json(); })
          .then(function (data) { return (data.countryCode || '').toUpperCase(); })
          .catch(function () { return ''; });
      })
      .then(function (countryCode) {
        var mapped = _mapCountry(countryCode);
        var cfg = COUNTRY_CONFIG[mapped];
        _ls(LS_COUNTRY, mapped);
        _ls(LS_CURRENCY, cfg.currency);
        return { country: mapped, currency: cfg.currency, config: cfg };
      });
  }

  function _mapCountry(code) {
    if (code === 'PY') return 'PY';
    if (code === 'AR') return 'AR';
    if (code === 'BR') return 'BR';
    return DEFAULT_COUNTRY;
  }

  function getCountry() {
    return _ls(LS_COUNTRY) || DEFAULT_COUNTRY;
  }

  function getCurrency() {
    return _ls(LS_CURRENCY) || COUNTRY_CONFIG[DEFAULT_COUNTRY].currency;
  }

  function getCountryConfig() {
    var c = getCountry();
    return COUNTRY_CONFIG[c] || COUNTRY_CONFIG[DEFAULT_COUNTRY];
  }

  function setCountry(code) {
    var mapped = _mapCountry(code);
    var cfg = COUNTRY_CONFIG[mapped];
    _ls(LS_COUNTRY, mapped);
    _ls(LS_CURRENCY, cfg.currency);
    _dispatch();
    try {
      document.dispatchEvent(new CustomEvent('country-changed', {
        detail: { country: mapped, currency: cfg.currency }
      }));
    } catch (e) {}
    return { country: mapped, currency: cfg.currency, config: cfg };
  }

  /**
   * getDpagoConfig(countryCode?)
   * Returns the Dpago config for the given country (or current country).
   * Merges admin overrides from localStorage if present.
   */
  function getDpagoConfig(countryCode) {
    var c = countryCode || getCountry();
    var base = COUNTRY_CONFIG[c] || COUNTRY_CONFIG[DEFAULT_COUNTRY];
    var result = {
      commerceId: base.commerceId,
      enabled: base.dpago ? base.dpago.enabled : false,
      testMode: base.dpago ? base.dpago.testMode : false,
      buttonColor: base.dpago ? base.dpago.buttonColor : '#F07020',
      publicKey: base.dpago ? base.dpago.publicKey : '',
      secretKey: base.dpago ? base.dpago.secretKey : '',
      webhookUrl: base.dpago ? base.dpago.webhookUrl : ''
    };
    // Merge admin overrides if present
    try {
      var adminCfg = JSON.parse(_ls('cougar_dpago_config') || '{}');
      if (adminCfg[c]) {
        var ov = adminCfg[c];
        if (ov.commerceId) result.commerceId = parseInt(ov.commerceId, 10) || result.commerceId;
        if (typeof ov.enabled === 'boolean') result.enabled = ov.enabled;
        if (typeof ov.testMode === 'boolean') result.testMode = ov.testMode;
        if (ov.buttonColor) result.buttonColor = ov.buttonColor;
        if (ov.publicKey) result.publicKey = ov.publicKey;
        if (ov.secretKey) result.secretKey = ov.secretKey;
        if (ov.webhookUrl) result.webhookUrl = ov.webhookUrl;
      }
    } catch (e) {}
    return result;
  }

  /**
   * getActivePaymentMethods(countryCode?)
   * Returns only the active payment methods for the given country.
   * Considers admin overrides from localStorage.
   */
  function getActivePaymentMethods(countryCode) {
    var c = countryCode || getCountry();
    var base = COUNTRY_CONFIG[c] || COUNTRY_CONFIG[DEFAULT_COUNTRY];
    var methods = base.paymentMethods || [];
    // Check admin overrides for disabled methods
    try {
      var adminCfg = JSON.parse(_ls('cougar_dpago_config') || '{}');
      if (adminCfg[c] && adminCfg[c].disabledMethods) {
        var disabled = adminCfg[c].disabledMethods;
        methods = methods.filter(function (m) {
          return disabled.indexOf(String(m.id)) === -1;
        });
      }
    } catch (e) {}
    return methods.filter(function (m) { return m.active !== false; });
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     5. CURRENCY FORMATTING
     ═══════════════════════════════════════════════════════════════════════════ */

  /**
   * formatPrice(amount, currency?)
   *   PYG → "Gs. 1.250.000"
   *   ARS → "$ 125.000"
   *   BRL → "R$ 1.250,00"
   */
  function formatPrice(amount, currency) {
    currency = currency || getCurrency();
    var n = Number(amount);
    if (isNaN(n)) return '—';

    switch (currency) {
      case 'PYG':
        return 'Gs. ' + _formatDotThousands(Math.round(n));
      case 'ARS':
        return '$ ' + _formatDotThousands(Math.round(n));
      case 'BRL':
        return 'R$ ' + _formatBRL(n);
      default:
        return String(n);
    }
  }

  /** 1250000 → "1.250.000" */
  function _formatDotThousands(n) {
    var s = String(Math.abs(n));
    var result = '';
    for (var i = s.length - 1, c = 0; i >= 0; i--, c++) {
      if (c > 0 && c % 3 === 0) result = '.' + result;
      result = s[i] + result;
    }
    return n < 0 ? '-' + result : result;
  }

  /** 1250.5 → "1.250,50" */
  function _formatBRL(n) {
    var fixed = Math.abs(n).toFixed(2);
    var parts = fixed.split('.');
    var intPart = _formatDotThousands(parseInt(parts[0], 10));
    return (n < 0 ? '-' : '') + intPart + ',' + parts[1];
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     6. PRODUCT HELPERS
     ═══════════════════════════════════════════════════════════════════════════ */

  function getAllProducts() {
    return PRODUCTS;
  }

  function getProduct(id) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].id === id) return PRODUCTS[i];
    }
    return null;
  }

  function getProductsByCategory(category) {
    return PRODUCTS.filter(function (p) {
      return p.category === category;
    });
  }

  function getCategories() {
    var seen = {};
    var cats = [];
    PRODUCTS.forEach(function (p) {
      if (!seen[p.category]) {
        seen[p.category] = true;
        cats.push(p.category);
      }
    });
    return cats;
  }

  function getProductPrice(product, currency) {
    currency = currency || getCurrency();
    var p = typeof product === 'string' ? getProduct(product) : product;
    return p ? (p.prices[currency] || 0) : 0;
  }

  function getProductShipping(product, currency) {
    currency = currency || getCurrency();
    var p = typeof product === 'string' ? getProduct(product) : product;
    return p ? (p.shipping[currency] || 0) : 0;
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     7. CART ENGINE
     ═══════════════════════════════════════════════════════════════════════════ */

  function _readCart() {
    try {
      var raw = _ls(LS_CART);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function _writeCart(items) {
    _ls(LS_CART, JSON.stringify(items));
    _dispatch();
  }

  function _dispatch() {
    try {
      document.dispatchEvent(new CustomEvent('cart-updated', {
        detail: { count: cartCount(), total: getCartTotal() }
      }));
    } catch (e) { /* old IE */ }
  }

  /**
   * addToCart(productId, qty)
   * If product is already in cart, increments qty.
   */
  function addToCart(productId, qty) {
    qty = Math.max(1, parseInt(qty, 10) || 1);
    if (!getProduct(productId)) return false;

    var items = _readCart();
    var found = false;
    for (var i = 0; i < items.length; i++) {
      if (items[i].productId === productId) {
        items[i].qty += qty;
        found = true;
        break;
      }
    }
    if (!found) items.push({ productId: productId, qty: qty });
    _writeCart(items);
    return true;
  }

  /**
   * removeFromCart(productId)
   */
  function removeFromCart(productId) {
    var items = _readCart().filter(function (i) { return i.productId !== productId; });
    _writeCart(items);
  }

  /**
   * updateQty(productId, qty)
   * If qty <= 0, removes the item.
   */
  function updateQty(productId, qty) {
    qty = parseInt(qty, 10);
    if (isNaN(qty) || qty <= 0) { removeFromCart(productId); return; }

    var items = _readCart();
    for (var i = 0; i < items.length; i++) {
      if (items[i].productId === productId) {
        items[i].qty = qty;
        break;
      }
    }
    _writeCart(items);
  }

  /**
   * getCart()
   * Returns array of { product, qty, subtotal }
   */
  function getCart() {
    var currency = getCurrency();
    return _readCart().map(function (item) {
      var product = getProduct(item.productId);
      if (!product) return null;
      return {
        product: product,
        qty: item.qty,
        subtotal: product.prices[currency] * item.qty
      };
    }).filter(Boolean);
  }

  /**
   * getCartTotal()
   * Returns { subtotal, shipping, total, itemCount, currency }
   */
  function getCartTotal() {
    var currency = getCurrency();
    var country = getCountry();
    var cfg = COUNTRY_CONFIG[country] || COUNTRY_CONFIG[DEFAULT_COUNTRY];
    var cart = getCart();
    var subtotal = 0;
    var itemCount = 0;

    cart.forEach(function (entry) {
      subtotal += entry.subtotal;
      itemCount += entry.qty;
    });

    // Flat shipping per order (0 for PY, 30 USD equivalent for AR/BR)
    var shipping = (itemCount > 0) ? (cfg.flatShipping || 0) : 0;

    return {
      subtotal: subtotal,
      shipping: shipping,
      total: subtotal + shipping,
      itemCount: itemCount,
      currency: currency
    };
  }

  function clearCart() {
    _writeCart([]);
  }

  function cartCount() {
    var items = _readCart();
    var count = 0;
    items.forEach(function (i) { count += i.qty; });
    return count;
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     8. SEARCH / FILTER UTILITY
     ═══════════════════════════════════════════════════════════════════════════ */

  function searchProducts(query) {
    var q = (query || '').toLowerCase().trim();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(function (p) {
      return p.name.toLowerCase().indexOf(q) !== -1 ||
             p.category.toLowerCase().indexOf(q) !== -1 ||
             p.description.toLowerCase().indexOf(q) !== -1 ||
             p.id.indexOf(q) !== -1;
    });
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     9. PUBLIC API — window.CougarStore
     ═══════════════════════════════════════════════════════════════════════════ */

  function init() {
    // Ensure country/currency defaults are set
    if (!_ls(LS_COUNTRY)) {
      _ls(LS_COUNTRY, DEFAULT_COUNTRY);
      _ls(LS_CURRENCY, COUNTRY_CONFIG[DEFAULT_COUNTRY].currency);
    }
  }

  window.CougarStore = {
    init:                 init,
    // Products
    products:             PRODUCTS,
    getAllProducts:        getAllProducts,
    getProduct:           getProduct,
    getProductsByCategory: getProductsByCategory,
    getCategories:        getCategories,
    getProductPrice:      getProductPrice,
    getProductShipping:   getProductShipping,
    searchProducts:       searchProducts,

    // Country / Currency
    detectCountry:        detectCountry,
    getCountry:           getCountry,
    getCurrency:          getCurrency,
    getCountryConfig:     getCountryConfig,
    setCountry:           setCountry,
    COUNTRY_CONFIG:       COUNTRY_CONFIG,

    // Dpago
    getDpagoConfig:       getDpagoConfig,
    getActivePaymentMethods: getActivePaymentMethods,

    // Formatting
    formatPrice:          formatPrice,

    // Cart
    addToCart:             addToCart,
    removeFromCart:        removeFromCart,
    updateQty:            updateQty,
    getCart:               getCart,
    getCartTotal:          getCartTotal,
    clearCart:             clearCart,
    cartCount:             cartCount
  };

  // Auto-detect country on first load (non-blocking)
  if (!_ls(LS_COUNTRY)) {
    detectCountry().catch(function () {
      // Silently default to PY
      _ls(LS_COUNTRY, DEFAULT_COUNTRY);
      _ls(LS_CURRENCY, COUNTRY_CONFIG[DEFAULT_COUNTRY].currency);
    });
  }

})();
