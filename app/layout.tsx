import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ConsentBanner from '@/components/ConsentBanner'
import QuoteModal from '@/components/QuoteModal'
import { COMPANY_INFO } from '@/lib/constants'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://derekleidermasonry.com'),
  title: {
    default: 'Derek Leider Masonry | Masonry Contractor in Wilmington, MA',
    template: '%s | Derek Leider Masonry',
  },
  description:
    'Professional masonry services in Greater Boston. Brickwork, stonework, concrete, parging, and waterproofing. Licensed, insured, and dedicated to quality craftsmanship.',
  keywords: [
    'masonry contractor',
    'brickwork',
    'stonework',
    'concrete services',
    'parging',
    'waterproofing',
    'Wilmington MA',
    'Greater Boston',
    'masonry repair',
    'stone steps',
    'brick repointing',
  ],
  authors: [{ name: 'Derek Leider Masonry' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://derekleidermasonry.com',
    siteName: 'Derek Leider Masonry',
    title: 'Derek Leider Masonry | Masonry Contractor in Wilmington, MA',
    description:
      'Professional masonry services in Greater Boston. Licensed, insured, and dedicated to quality craftsmanship.',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Derek Leider Masonry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Derek Leider Masonry | Masonry Contractor in Wilmington, MA',
    description:
      'Professional masonry services in Greater Boston. Licensed, insured, and dedicated to quality craftsmanship.',
    images: ['/images/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Structured data for LocalBusiness
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    image: '/images/og.jpg',
    '@id': 'https://derekleidermasonry.com',
    url: 'https://derekleidermasonry.com',
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.5584,
      longitude: -71.1738,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 42.5584,
        longitude: -71.1738,
      },
      geoRadius: '40000',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
  }

  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ConsentBanner />
        <QuoteModal />
      </body>
    </html>
  )
}
