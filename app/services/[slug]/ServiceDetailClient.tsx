'use client'

import Link from 'next/link'
import type { ServiceData } from '@/lib/service-data'
import { COMPANY_INFO } from '@/lib/constants'

type Props = {
  service: ServiceData
}

export default function ServiceDetailClient({ service }: Props) {
  // Structured data for Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.address.street,
        addressLocality: COMPANY_INFO.address.city,
        addressRegion: COMPANY_INFO.address.state,
        postalCode: COMPANY_INFO.address.zip,
      },
    },
    areaServed: COMPANY_INFO.serviceArea,
    description: service.hero.description,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-stone-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center text-brand-400 hover:text-brand-300 mb-4"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.hero.title}
            </h1>
            <p className="text-xl text-stone-200">{service.hero.description}</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                What We Do
              </h2>
              <ul className="space-y-3">
                {service.whatWeDo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                What You Get
              </h2>
              <ul className="space-y-3">
                {service.whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Pricing */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                Materials We Use
              </h2>
              <p className="text-stone-600 mb-4">
                We source quality materials from trusted suppliers and follow
                manufacturer specifications to ensure lasting results.
              </p>
              <ul className="space-y-2">
                {service.materials.map((item, index) => (
                  <li key={index} className="flex items-start text-stone-700">
                    <span className="text-brand-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                Pricing Guidance
              </h2>
              <div className="bg-white border-2 border-brand-200 rounded-lg p-6">
                <p className="text-stone-700 leading-relaxed">
                  {service.priceGuidance}
                </p>
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <p className="text-sm text-stone-600 mb-4">
                    Every project is unique. Contact us for a free, detailed
                    estimate tailored to your specific needs.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary w-full"
                    onClick={() => {
                      const event = new CustomEvent('openQuoteModal')
                      window.dispatchEvent(event)
                    }}
                  >
                    Get a Free Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white border-2 border-stone-200 rounded-lg p-6 hover:border-brand-500 transition-colors group"
              >
                <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-stone-700 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-stone-600 mb-4">
              Have more questions? We're here to help.
            </p>
            <Link href="/faqs" className="text-brand-600 hover:text-brand-700 font-medium">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            See Our Work
          </h2>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Browse our gallery to see examples of completed {service.name.toLowerCase()}{' '}
            projects throughout Greater Boston.
          </p>
          <Link
            href={`/gallery?filter=${service.slug}`}
            className="btn btn-secondary text-lg"
          >
            View {service.name} Gallery
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to book a site visit?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            We'll assess your project, discuss options, and provide a detailed
            written estimate—all at no cost.
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
