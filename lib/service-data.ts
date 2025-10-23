export interface ServiceData {
  name: string
  slug: string
  hero: {
    title: string
    description: string
  }
  whatWeDo: string[]
  whatYouGet: string[]
  materials: string[]
  priceGuidance: string
  faqs: {
    question: string
    answer: string
  }[]
}

export const serviceData: Record<string, ServiceData> = {
  brickwork: {
    name: 'Brickwork',
    slug: 'brickwork',
    hero: {
      title: 'Expert Brickwork Services',
      description:
        'From historic restoration to new construction, our skilled masons deliver precise brickwork that enhances your property and stands the test of time.',
    },
    whatWeDo: [
      'New brick construction for homes and additions',
      'Brick repointing and tuckpointing to restore structural integrity',
      'Historic brick restoration matching original materials and patterns',
      'Chimney repair, rebuilding, and crown replacement',
      'Brick veneer installation for modern aesthetics',
      'Foundation and basement brick repair',
    ],
    whatYouGet: [
      'Detailed assessment of existing brickwork condition',
      'Color-matched mortar for seamless repairs',
      'Proper cleaning and preparation of joints',
      'Weather-resistant mortar mixes suitable for New England climate',
      'Tidy workspace with daily cleanup',
      'Final inspection and maintenance guidance',
    ],
    materials: [
      'Traditional clay bricks in various colors and textures',
      'Premium Type N and Type S mortar',
      'Lime-based mortar for historic restoration',
      'Weather-resistant sealers when appropriate',
      'Chimney caps and flashing materials',
    ],
    priceGuidance:
      'Brick repointing typically ranges from $8-15 per square foot depending on accessibility and joint depth. Full chimney rebuilds start around $3,500-7,000. New brick construction is priced per project based on scope and materials. All estimates include detailed breakdowns.',
    faqs: [
      {
        question: 'How long does brick repointing last?',
        answer:
          'Properly executed repointing with quality materials can last 25-50 years in our New England climate. The lifespan depends on exposure, original brick quality, and maintenance.',
      },
      {
        question: 'Can you match the color of my existing mortar?',
        answer:
          'Yes. We carefully analyze your existing mortar and create custom color matches using various sand types and pigments. We always test-patch first for your approval.',
      },
      {
        question: 'Why is my brick crumbling or flaking?',
        answer:
          'This is often called "spalling" and occurs when water enters the brick, freezes, and expands. We assess the cause (poor drainage, damaged mortar, or deteriorated brick) and recommend the appropriate repair.',
      },
      {
        question: 'Do you work on chimneys?',
        answer:
          'Yes. We handle chimney repointing, crown repair, rebuilding, and can install caps and flashing. We also coordinate with chimney sweep professionals when flue work is needed.',
      },
      {
        question: 'How long will my brickwork project take?',
        answer:
          'Timeline varies by scope. Simple repointing on a small wall might take 2-3 days. Larger projects like full chimney rebuilds or new construction can take 1-3 weeks. We provide clear timelines in every estimate.',
      },
    ],
  },
  stonework: {
    name: 'Stonework',
    slug: 'stonework',
    hero: {
      title: 'Custom Stonework & Masonry',
      description:
        'Transform your outdoor spaces with expertly crafted stone patios, walkways, walls, and steps that combine natural beauty with lasting durability.',
    },
    whatWeDo: [
      'Natural and engineered stone patios',
      'Stone steps and entryways',
      'Stone walls and retaining walls',
      'Stone veneers for homes and fireplaces',
      'Flagstone and slate walkways',
      'Stone pillar and post installations',
    ],
    whatYouGet: [
      'Site assessment including drainage and grading analysis',
      'Proper base preparation with compacted gravel',
      'Precision-cut and fitted stones',
      'Polymeric sand or mortar jointing',
      'Sealed surfaces for stain and weather protection',
      'Care and maintenance instructions',
    ],
    materials: [
      'Natural bluestone, granite, and limestone',
      'Engineered stone and pavers',
      'Flagstone in various colors',
      'Fieldstone for rustic walls',
      'Stone dust and polymeric sand',
      'Premium sealers and jointing compounds',
    ],
    priceGuidance:
      'Stone patios typically range from $18-35 per square foot depending on stone type and complexity. Front steps run $2,500-6,000 for most residential projects. Stone walls are priced by linear foot and height. Free estimates include material options and pricing tiers.',
    faqs: [
      {
        question: 'What stone is best for a New England patio?',
        answer:
          'Bluestone and granite are excellent choices for our climate. They resist freeze-thaw cycles, have low water absorption, and maintain their appearance for decades. We will discuss options based on your aesthetic and budget.',
      },
      {
        question: 'How long does it take to install a stone patio?',
        answer:
          'Most 300-400 square foot patios take 3-5 days including excavation, base prep, and stone installation. Larger or more complex designs may require additional time. We coordinate timeline with weather conditions.',
      },
      {
        question: 'Will my stone patio shift or settle over time?',
        answer:
          'Proper base preparation is key. We excavate to proper depth, install compacted gravel base, and ensure correct drainage slope. When done right, stone patios remain stable for many years.',
      },
      {
        question: 'Can stone steps be repaired or do they need replacement?',
        answer:
          'It depends on the damage. Loose stones can often be reset, and cracked treads can sometimes be replaced individually. We assess and recommend the most cost-effective solution.',
      },
      {
        question: 'Should stone surfaces be sealed?',
        answer:
          'Sealing is recommended for most stone surfaces. It protects against stains, reduces moss growth, and enhances color. We use breathable sealers that will not trap moisture. Resealing every 2-3 years maintains protection.',
      },
    ],
  },
  'concrete-services': {
    name: 'Concrete Services',
    slug: 'concrete-services',
    hero: {
      title: 'Professional Concrete Work',
      description:
        'Durable driveways, walkways, and foundations built with proper base preparation, drainage, and finishing techniques for long-lasting performance.',
    },
    whatWeDo: [
      'Concrete driveways and aprons',
      'Sidewalks and walkways',
      'Concrete patios and slabs',
      'Retaining walls and foundations',
      'Concrete steps and landings',
      'Repairs and resurfacing',
    ],
    whatYouGet: [
      'Engineered base with proper compaction',
      'Correct drainage grading to prevent pooling',
      'Steel reinforcement or fiber mesh as needed',
      'Control joints to manage cracking',
      'Smooth or broom-finished surfaces',
      'Proper curing for maximum strength',
    ],
    materials: [
      '3000-4000 PSI concrete mixes',
      'Steel rebar and wire mesh',
      'Fiber reinforcement additives',
      'Quality aggregate and Portland cement',
      'Vapor barriers and insulation when needed',
      'Sealers and curing compounds',
    ],
    priceGuidance:
      'Concrete driveways typically run $8-12 per square foot for standard 4-inch thickness. Walkways range from $6-10 per square foot. Decorative finishes or stamped concrete add $3-8 per square foot. Prices include all materials, labor, and standard finishes.',
    faqs: [
      {
        question: 'How long before I can drive on a new concrete driveway?',
        answer:
          'We recommend waiting 7 days before driving on new concrete. While it gains significant strength in 24-48 hours, full curing takes about 28 days. Light foot traffic is usually safe after 24 hours.',
      },
      {
        question: 'Why does concrete crack?',
        answer:
          'Some minor cracking is normal as concrete cures and responds to temperature changes. We minimize this with proper base prep, correct mix design, control joints, and reinforcement. Significant cracking often indicates base or drainage issues.',
      },
      {
        question: 'Can you pour concrete in winter?',
        answer:
          'Yes, with precautions. We use winter-mix concrete with accelerators and protect fresh concrete from freezing. However, extremely cold temperatures (below 20°F) may require postponing. Spring through fall is ideal.',
      },
      {
        question: 'Should I seal my concrete driveway?',
        answer:
          'Sealing is recommended, especially in New England. It protects against freeze-thaw damage, de-icing salts, and stains. Wait at least 28 days after pour, then seal. Reapply every 2-3 years.',
      },
      {
        question: 'How thick should my concrete driveway be?',
        answer:
          '4 inches is standard for most residential driveways. Heavy vehicles or poor soil conditions may require 5-6 inches. We assess your specific needs and recommend appropriate thickness and reinforcement.',
      },
    ],
  },
  parging: {
    name: 'Parging',
    slug: 'parging',
    hero: {
      title: 'Foundation Parging Services',
      description:
        'Protect and seal your foundation walls with professional parging—a durable cement coating that shields against moisture, weather, and deterioration.',
    },
    whatWeDo: [
      'Foundation wall parging and coating',
      'Basement exterior waterproofing prep',
      'Concrete block finishing and smoothing',
      'Damaged parging repair and restoration',
      'Decorative textured finishes',
      'Crawl space wall protection',
    ],
    whatYouGet: [
      'Thorough cleaning and preparation of surfaces',
      'Repair of underlying cracks or damage',
      'Multiple coats for proper thickness and adhesion',
      'Smooth or textured finish as preferred',
      'Weather-resistant cement formulations',
      'Proper curing for maximum durability',
    ],
    materials: [
      'Portland cement-based parging mix',
      'Acrylic fortified coatings',
      'Bonding agents for superior adhesion',
      'Waterproofing additives',
      'Reinforcing fibers when needed',
      'Breathable sealers and topcoats',
    ],
    priceGuidance:
      'Foundation parging typically costs $4-8 per square foot depending on wall condition and coating thickness. Full basement perimeter parging ranges from $2,000-5,000 for average homes. Repairs are priced based on area and prep work required.',
    faqs: [
      {
        question: 'What is parging and why do I need it?',
        answer:
          'Parging is a cement-based coating applied to foundation walls, concrete blocks, or brick. It seals porous surfaces, improves appearance, and provides weather protection. It is especially valuable before applying waterproofing membranes.',
      },
      {
        question: 'How long does parging last?',
        answer:
          'Quality parging can last 20-30 years when properly applied and maintained. Lifespan depends on exposure to freeze-thaw cycles, moisture levels, and foundation movement. Regular inspection helps catch issues early.',
      },
      {
        question: 'Can you parge over damaged or crumbling walls?',
        answer:
          'We first repair underlying damage, remove loose material, and ensure structural soundness. Parging over compromised surfaces leads to failure. We assess foundation condition and recommend necessary repairs before coating.',
      },
      {
        question: 'Is parging the same as stucco?',
        answer:
          'Similar materials, different applications. Parging is specifically for foundation walls and is typically thinner. Stucco is for above-grade surfaces and often includes decorative finishes. Both use cement-based coatings.',
      },
      {
        question: 'Can parging fix foundation cracks?',
        answer:
          'Parging can cover minor surface cracks, but it does not repair structural foundation issues. Significant cracks require proper repair first. We evaluate crack severity and recommend appropriate solutions.',
      },
    ],
  },
  waterproofing: {
    name: 'Waterproofing',
    slug: 'waterproofing',
    hero: {
      title: 'Basement & Foundation Waterproofing',
      description:
        'Protect your home from water damage with comprehensive waterproofing solutions—from diagnosis to installation of drainage systems and membranes.',
    },
    whatWeDo: [
      'Basement waterproofing system installation',
      'Exterior foundation waterproofing',
      'French drain and perimeter drain installation',
      'Sump pump installation and repair',
      'Crack injection and sealing',
      'Drainage system design and grading',
    ],
    whatYouGet: [
      'Comprehensive leak diagnosis and moisture assessment',
      'Customized waterproofing system design',
      'Excavation and access to foundation walls',
      'High-quality membranes and drainage materials',
      'Proper backfill and grading for surface drainage',
      'System testing and warranty documentation',
    ],
    materials: [
      'Rubberized asphalt membranes',
      'Bentonite clay waterproofing',
      'Drainage board and filter fabric',
      'Perforated drain pipe (4" and 6")',
      'Crushed stone and gravel',
      'Premium sump pumps and backup systems',
    ],
    priceGuidance:
      'Exterior waterproofing with drainage typically runs $80-150 per linear foot including excavation. Interior systems range from $3,000-8,000 for average basements. Sump pump installation is $800-2,500. Comprehensive estimates include system diagrams and material specifications.',
    faqs: [
      {
        question: 'Why is water coming into my basement?',
        answer:
          'Common causes include poor grading, clogged gutters, foundation cracks, high water table, or failed drainage systems. We perform thorough assessment to identify the source and recommend targeted solutions.',
      },
      {
        question: 'Is exterior or interior waterproofing better?',
        answer:
          'Exterior is most effective as it stops water before it reaches the foundation. However, it requires excavation and costs more. Interior systems manage water that has already entered. We recommend the approach that best fits your situation and budget.',
      },
      {
        question: 'How long does waterproofing last?',
        answer:
          'Quality exterior membranes and drainage systems can last 30-50 years. Interior systems with proper maintenance last 20-25 years. Regular inspection of gutters, grading, and sump pumps extends system life.',
      },
      {
        question: 'Can you waterproof in winter?',
        answer:
          'Exterior waterproofing requires excavation and is best done in warmer months when ground is not frozen. Interior work and emergency repairs can proceed year-round. We recommend addressing issues before winter if possible.',
      },
      {
        question: 'Do I need a sump pump?',
        answer:
          'If you have a below-grade basement and high water table, a sump pump is often essential. We assess groundwater levels, drainage patterns, and basement depth to determine if a sump pump should be part of your waterproofing system.',
      },
    ],
  },
  'commercial-maintenance': {
    name: 'Commercial Landscaping Maintenance',
    slug: 'commercial-maintenance',
    hero: {
      title: 'Commercial Property Maintenance',
      description:
        'Keep your commercial property looking professional year-round with reliable, scheduled grounds maintenance services designed to minimize disruptions.',
    },
    whatWeDo: [
      'Seasonal landscape maintenance programs',
      'Snow removal and ice management',
      'Parking lot and walkway maintenance',
      'Grounds cleanup and debris removal',
      'Planting and mulching services',
      'Hardscape repairs and touch-ups',
    ],
    whatYouGet: [
      'Customized maintenance schedule for your property',
      'Consistent crew assigned to your location',
      'Seasonal planning and proactive communication',
      'Emergency response for urgent issues',
      'Detailed service reports and documentation',
      'Flexible scheduling to avoid business interruptions',
    ],
    materials: [
      'Commercial-grade tools and equipment',
      'Premium mulch and landscaping materials',
      'Ice melt and snow management products',
      'Repair materials matching existing hardscapes',
      'Professional-grade sealers and coatings',
    ],
    priceGuidance:
      'Commercial maintenance is typically priced as monthly or seasonal contracts. Small properties start around $500-1,200/month depending on scope. Snow contracts are seasonal with per-event or seasonal rates. We provide custom quotes based on property size and services needed.',
    faqs: [
      {
        question: 'What is included in a maintenance contract?',
        answer:
          'Contracts are customized to your needs but typically include lawn care, seasonal cleanup, mulching, snow removal, and minor repairs. We create a scope of work specific to your property and adjust seasonally.',
      },
      {
        question: 'How quickly do you respond for snow removal?',
        answer:
          'We monitor weather forecasts and begin service based on your contract terms (typically 2" trigger). Priority customers get service first. We can provide 24-hour emergency coverage for essential facilities.',
      },
      {
        question: 'Can you work around our business hours?',
        answer:
          'Absolutely. We schedule regular maintenance during off-hours or low-traffic times. Emergency work is coordinated with your team to minimize disruption.',
      },
      {
        question: 'Do you provide one-time services or only contracts?',
        answer:
          'We offer both. While ongoing contracts ensure consistent care, we also handle one-time projects like spring cleanup, parking lot repairs, or special event preparation.',
      },
      {
        question: 'What areas do you serve for commercial work?',
        answer:
          'We serve commercial properties throughout Greater Boston and North Shore. For larger properties or those outside our typical area, we are happy to discuss custom arrangements.',
      },
    ],
  },
}
