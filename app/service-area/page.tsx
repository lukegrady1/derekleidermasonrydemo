'use client'

import { COMPANY_INFO } from '@/lib/constants'
import ServiceAreaMap from '@/components/ServiceAreaMap'

export default function ServiceAreaPage() {
  const towns = [
    'Wilmington', 'Reading', 'North Reading', 'Burlington', 'Woburn',
    'Winchester', 'Stoneham', 'Wakefield', 'Lynnfield', 'Andover',
    'North Andover', 'Tewksbury', 'Billerica', 'Bedford', 'Lexington',
    'Arlington', 'Medford', 'Melrose', 'Malden', 'Saugus',
    'Peabody', 'Danvers', 'Beverly', 'Salem', 'Marblehead',
    'Swampscott', 'Lynn', 'Nahant', 'Revere', 'Chelsea',
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Service Area
            </h1>
            <p className="text-xl text-stone-200">
              Proudly serving homeowners and businesses throughout Greater Boston
              and the North Shore with professional masonry services.
            </p>
          </div>
        </div>
      </section>

      {/* Map & Coverage */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Towns List - Shows first on mobile */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                Cities & Towns We Serve
              </h2>
              <p className="text-stone-700 mb-6 leading-relaxed">
                We regularly serve the communities listed below. Our service area
                covers approximately 25 miles from Wilmington, including all of
                Greater Boston, the North Shore, and parts of the Merrimack Valley.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {towns.map((town) => (
                  <div
                    key={town}
                    className="flex items-center p-3 bg-white border border-stone-200 rounded-lg"
                  >
                    <svg
                      className="w-4 h-4 text-brand-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-stone-700">{town}</span>
                  </div>
                ))}
              </div>

              <div className="bg-stone-50 border-2 border-stone-200 rounded-lg p-6">
                <h3 className="font-bold text-stone-900 mb-3">
                  Don't see your town?
                </h3>
                <p className="text-stone-700 mb-4">
                  The list above includes our most frequent service areas, but
                  we're happy to travel for the right project. If you're located
                  nearby or have a larger project, give us a call to discuss.
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="btn btn-primary inline-flex"
                >
                  Call {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Interactive Map - Shows second on mobile, sticky on desktop */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-24">
              <ServiceAreaMap />
              <div className="mt-6 bg-brand-50 border-2 border-brand-200 rounded-lg p-6">
                <h3 className="font-bold text-stone-900 mb-2">
                  Based in Wilmington, MA
                </h3>
                <address className="not-italic text-stone-700 text-sm">
                  {COMPANY_INFO.address.full}
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Serve This Area */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 text-center">
            Local Knowledge, Local Service
          </h2>
          <div className="space-y-4 text-stone-700 leading-relaxed">
            <p>
              Based in Wilmington and serving the local area for years, we
              understand New England's unique challenges—freeze-thaw cycles, clay
              soils, high water tables, and the importance of proper drainage.
            </p>
            <p>
              Our proximity means faster response times, lower travel costs, and
              the ability to easily return for follow-up or seasonal maintenance.
              We're part of the community we serve, and we take pride in the
              lasting relationships we build with local homeowners and businesses.
            </p>
            <p>
              We're familiar with local building codes, permitting requirements,
              and architectural styles common to historic New England homes. This
              knowledge ensures your project not only meets code but complements
              your property's character.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to discuss your project?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Whether you're in Wilmington or a surrounding community, we'd love to
            help with your masonry needs.
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
