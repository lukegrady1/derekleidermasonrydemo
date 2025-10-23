'use client'

import GalleryClient from '@/components/GalleryClient'

export default function GalleryPage() {
  // In production, this would come from a CMS or database
  const galleryItems = [
    {
      id: 1,
      src: '/images/gallery/brick-patio-1.jpg',
      alt: 'Brick patio installation in Wilmington, MA',
      category: 'brickwork',
      title: 'Brick Patio',
      location: 'Wilmington, MA',
      year: '2024',
    },
    {
      id: 2,
      src: '/images/gallery/stone-steps-1.jpg',
      alt: 'Granite front steps with bluestone treads in Reading, MA',
      category: 'stonework',
      title: 'Granite Front Steps',
      location: 'Reading, MA',
      year: '2024',
    },
    {
      id: 3,
      src: '/images/gallery/concrete-driveway-1.jpg',
      alt: 'Concrete driveway installation in Burlington, MA',
      category: 'concrete-services',
      title: 'Concrete Driveway',
      location: 'Burlington, MA',
      year: '2023',
    },
    {
      id: 4,
      src: '/images/gallery/stone-patio-1.jpg',
      alt: 'Bluestone patio with natural stone border in Woburn, MA',
      category: 'stonework',
      title: 'Bluestone Patio',
      location: 'Woburn, MA',
      year: '2024',
    },
    {
      id: 5,
      src: '/images/gallery/brick-repointing-1.jpg',
      alt: 'Historic brick restoration and repointing in Wilmington, MA',
      category: 'brickwork',
      title: 'Brick Repointing',
      location: 'Wilmington, MA',
      year: '2023',
    },
    {
      id: 6,
      src: '/images/gallery/stone-wall-1.jpg',
      alt: 'Natural stone retaining wall in Lynnfield, MA',
      category: 'stonework',
      title: 'Stone Retaining Wall',
      location: 'Lynnfield, MA',
      year: '2024',
    },
    {
      id: 7,
      src: '/images/gallery/concrete-walkway-1.jpg',
      alt: 'Stamped concrete walkway in Burlington, MA',
      category: 'concrete-services',
      title: 'Concrete Walkway',
      location: 'Burlington, MA',
      year: '2024',
    },
    {
      id: 8,
      src: '/images/gallery/chimney-repair-1.jpg',
      alt: 'Brick chimney rebuild and crown repair in Reading, MA',
      category: 'brickwork',
      title: 'Chimney Repair',
      location: 'Reading, MA',
      year: '2023',
    },
    {
      id: 9,
      src: '/images/gallery/stone-steps-2.jpg',
      alt: 'Custom granite steps with landing in Andover, MA',
      category: 'stonework',
      title: 'Granite Entry Steps',
      location: 'Andover, MA',
      year: '2024',
    },
    {
      id: 10,
      src: '/images/gallery/parging-foundation-1.jpg',
      alt: 'Foundation parging and waterproofing in Wilmington, MA',
      category: 'parging',
      title: 'Foundation Parging',
      location: 'Wilmington, MA',
      year: '2023',
    },
    {
      id: 11,
      src: '/images/gallery/concrete-patio-1.jpg',
      alt: 'Decorative concrete patio with border in Woburn, MA',
      category: 'concrete-services',
      title: 'Concrete Patio',
      location: 'Woburn, MA',
      year: '2024',
    },
    {
      id: 12,
      src: '/images/gallery/brick-steps-1.jpg',
      alt: 'Brick front steps restoration in Burlington, MA',
      category: 'brickwork',
      title: 'Brick Steps',
      location: 'Burlington, MA',
      year: '2023',
    },
    {
      id: 13,
      src: '/images/gallery/waterproofing-1.jpg',
      alt: 'Basement waterproofing and drainage system in Reading, MA',
      category: 'waterproofing',
      title: 'Basement Waterproofing',
      location: 'Reading, MA',
      year: '2024',
    },
    {
      id: 14,
      src: '/images/gallery/stone-fireplace-1.jpg',
      alt: 'Stone veneer fireplace installation in Lynnfield, MA',
      category: 'stonework',
      title: 'Stone Fireplace',
      location: 'Lynnfield, MA',
      year: '2024',
    },
    {
      id: 15,
      src: '/images/gallery/commercial-landscape-1.jpg',
      alt: 'Commercial property hardscape maintenance in Wilmington, MA',
      category: 'commercial-maintenance',
      title: 'Commercial Hardscape',
      location: 'Wilmington, MA',
      year: '2024',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-xl text-stone-200">
              Explore our portfolio of completed masonry projects throughout
              Greater Boston. Each project showcases our commitment to quality
              craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <GalleryClient items={galleryItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want results like these?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom plan that fits your
            vision and budget.
          </p>
          <button
            type="button"
            className="btn bg-white text-brand-600 hover:bg-brand-50 px-8 py-4 text-lg"
            onClick={() => {
              const event = new CustomEvent('openQuoteModal')
              window.dispatchEvent(event)
            }}
          >
            Request a Free Estimate
          </button>
        </div>
      </section>
    </>
  )
}
