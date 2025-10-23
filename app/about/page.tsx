'use client'

import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_INFO } from '@/lib/constants'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Derek Leider Masonry
            </h1>
            <p className="text-xl text-stone-200">
              Built on a foundation of skilled craftsmanship, honest communication,
              and respect for your property.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Derek Leider Masonry was founded on a simple principle: masonry
                  work should be done right the first time, with materials and
                  methods that ensure it lasts for decades.
                </p>
                <p>
                  Based in Wilmington, MA, we've built our reputation serving
                  homeowners and businesses throughout Greater Boston and the North
                  Shore. From small brick repairs to complete patio installations,
                  every project receives the same level of attention and
                  craftsmanship.
                </p>
                <p>
                  What sets us apart is our commitment to the details others might
                  overlook—proper base preparation, correct drainage, quality
                  materials, and a clean work site. We believe in transparent
                  pricing, realistic timelines, and clear communication from
                  estimate to completion.
                </p>
                <p>
                  Whether you're restoring a historic brick façade or building a
                  new stone patio, you'll work with experienced masons who take
                  pride in their craft and stand behind their work.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg aspect-[4/3] overflow-hidden shadow-lg">
              <Image
                src="/images/team-photo.png"
                alt="Derek Leider Masonry team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-stone-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Quality First
              </h3>
              <p className="text-stone-600">
                We don't cut corners on materials or methods. Proper base
                preparation, quality aggregates, and correct technique ensure
                work that lasts.
              </p>
            </div>

            <div className="bg-white border-2 border-stone-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Clear Communication
              </h3>
              <p className="text-stone-600">
                You'll know exactly what to expect—transparent pricing, realistic
                timelines, and regular updates throughout your project.
              </p>
            </div>

            <div className="bg-white border-2 border-stone-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Respect Your Property
              </h3>
              <p className="text-stone-600">
                Daily cleanup, protected landscaping, and tidy work sites. We
                treat your property as if it were our own.
              </p>
            </div>

            <div className="bg-white border-2 border-stone-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                On Time, On Budget
              </h3>
              <p className="text-stone-600">
                We plan realistically and stick to our commitments. No surprises,
                no hidden fees—just honest work at the price we quoted.
              </p>
            </div>

            <div className="bg-white border-2 border-stone-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Licensed & Insured
              </h3>
              <p className="text-stone-600">
                Full liability insurance and workers' compensation coverage
                protect you and our crew. We handle all necessary permits.
              </p>
            </div>

            <div className="bg-white border-2 border-stone-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Local & Available
              </h3>
              <p className="text-stone-600">
                We're based in Wilmington and serve the local area. You'll reach
                real people, not a call center, and we're here for follow-up
                questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Permits */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 text-center">
              Safety, Permits & Insurance
            </h2>
            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p>
                We take safety seriously—for our crew, your family, and your
                property. Our team follows OSHA guidelines, uses proper safety
                equipment, and maintains a clean, organized work site to minimize
                hazards.
              </p>
              <p>
                All necessary permits are handled by us. For projects requiring
                local building department approval, we prepare and submit permit
                applications, coordinate inspections, and ensure work meets code
                requirements.
              </p>
              <p>
                We carry comprehensive general liability insurance and workers'
                compensation coverage. You'll never be held liable for on-site
                injuries or property damage caused during our work. Documentation
                is available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to work with us?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project. We'll provide honest advice, transparent
            pricing, and a clear plan to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn bg-brand-700 text-white hover:bg-brand-800 px-8 py-4 text-lg border-0"
            >
              Call {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
