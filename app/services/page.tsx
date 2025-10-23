'use client'

import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import ServiceWizard from '@/components/ServiceWizard'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Masonry Services
            </h1>
            <p className="text-xl text-stone-200">
              From historic brick restoration to modern stone installations, we
              deliver skilled craftsmanship on every project. Each service
              includes proper base preparation, quality materials, and a clean,
              professional finish.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <article
                key={service.slug}
                className="bg-white border-2 border-stone-200 rounded-lg hover:border-brand-500 hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <h2 className="text-lg font-bold text-stone-900 mb-3">
                    {service.name}
                  </h2>
                  <p className="text-stone-600 mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Service highlights based on type */}
                  <ul className="text-sm text-stone-600 space-y-1 mb-6">
                    {service.slug === 'brickwork' && (
                      <>
                        <li>• New brick construction & additions</li>
                        <li>• Brick repointing & tuckpointing</li>
                        <li>• Historic brick restoration</li>
                        <li>• Chimney repair & rebuilding</li>
                      </>
                    )}
                    {service.slug === 'stonework' && (
                      <>
                        <li>• Natural & engineered stone patios</li>
                        <li>• Stone steps & walkways</li>
                        <li>• Stone walls & veneers</li>
                        <li>• Stone fireplace surrounds</li>
                      </>
                    )}
                    {service.slug === 'concrete-services' && (
                      <>
                        <li>• Concrete driveways & aprons</li>
                        <li>• Sidewalks & walkways</li>
                        <li>• Retaining walls & foundations</li>
                        <li>• Proper drainage & base prep</li>
                      </>
                    )}
                    {service.slug === 'parging' && (
                      <>
                        <li>• Foundation parging & sealing</li>
                        <li>• Basement wall coating</li>
                        <li>• Concrete block finishing</li>
                        <li>• Weather protection coatings</li>
                      </>
                    )}
                    {service.slug === 'waterproofing' && (
                      <>
                        <li>• Basement waterproofing systems</li>
                        <li>• Exterior drainage solutions</li>
                        <li>• Membrane installations</li>
                        <li>• Leak diagnosis & repair</li>
                      </>
                    )}
                    {service.slug === 'commercial-maintenance' && (
                      <>
                        <li>• Scheduled grounds maintenance</li>
                        <li>• Snow & ice management</li>
                        <li>• Landscape upkeep</li>
                        <li>• Property improvements</li>
                      </>
                    )}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="btn btn-primary w-full"
                  >
                    Learn More & See Work
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Wizard */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Not sure what you need?
              </h2>
              <p className="text-lg text-stone-600">
                Answer a few quick questions and we'll recommend the right
                service for your project.
              </p>
            </div>
            <ServiceWizard />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              Why Derek Leider Masonry?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Quality Materials
                </h3>
                <p className="text-stone-600">
                  We source premium materials and follow manufacturer
                  specifications to ensure long-lasting results.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Proper Preparation
                </h3>
                <p className="text-stone-600">
                  Base prep and drainage aren't shortcuts – they're the
                  foundation of durability. We do it right.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Clean Work Sites
                </h3>
                <p className="text-stone-600">
                  Daily cleanup keeps your property safe and presentable.
                  You'll barely know we were there.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  Clear Communication
                </h3>
                <p className="text-stone-600">
                  Transparent pricing, realistic timelines, and regular updates
                  throughout your project.
                </p>
              </div>
            </div>
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
            Get a free, no-obligation estimate with transparent pricing and
            timeline expectations.
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
