export const COMPANY_INFO = {
  name: 'Derek Leider Masonry',
  phone: '801-656-7656',
  phoneDisplay: '(801) 656-7656',
  email: 'derekleider@ymail.com',
  address: {
    street: '510 Main Street',
    city: 'Wilmington',
    state: 'MA',
    zip: '01887',
    full: '510 Main Street, Wilmington, MA 01887',
  },
  hours: {
    weekday: 'Monday – Friday: 8:00 AM – 5:00 PM',
    weekend: 'Saturday – Sunday: By appointment',
  },
  serviceArea: 'Greater Boston',
}

export const SERVICES = [
  {
    slug: 'brickwork',
    name: 'Brickwork',
    shortDescription: 'New builds, repairs, and repointing that match your home\'s character.',
    icon: '🧱',
  },
  {
    slug: 'stonework',
    name: 'Stonework',
    shortDescription: 'Patios, steps, walls, and chimneys in natural or engineered stone.',
    icon: '🪨',
  },
  {
    slug: 'concrete-services',
    name: 'Concrete Services',
    shortDescription: 'Driveways, walkways, and retaining walls with proper base and drainage.',
    icon: '🏗️',
  },
  {
    slug: 'parging',
    name: 'Parging',
    shortDescription: 'Clean, protective finishes that seal foundation surfaces from the elements.',
    icon: '🛡️',
  },
  {
    slug: 'waterproofing',
    name: 'Waterproofing',
    shortDescription: 'Diagnose leaks and install long-lasting membranes and drains.',
    icon: '💧',
  },
  {
    slug: 'commercial-maintenance',
    name: 'Commercial Property Maintenance',
    shortDescription: 'Reliable grounds upkeep scheduled to avoid interruptions.',
    icon: '🌿',
  },
]

export const PAYMENT_METHODS = [
  'Cash',
  'Check',
  'Visa',
  'Mastercard',
  'Discover',
  'American Express',
  'PayPal',
]

export const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/contact', label: 'Contact' },
]
