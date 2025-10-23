'use client'

import Link from 'next/link'
import { COMPANY_INFO, SERVICES } from '@/lib/constants'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-stone-900 text-white pt-16 lg:pt-20">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-stone-900/70 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-masonry.png)',
          }}
        />

        <div className="container-custom relative z-20 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Detail-driven masonry for homes and businesses in Greater Boston
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-8">
              From stone steps and brickwork to concrete and waterproofing, we
              build clean, durable work that stands the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                className="btn btn-primary text-lg px-8 py-4"
                onClick={() => {
                  const event = new CustomEvent('openQuoteModal')
                  window.dispatchEvent(event)
                }}
              >
                Request a Quote
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn btn-secondary text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-brand-600"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-50 border-y border-brand-100">
        <div className="container-custom py-6">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base text-stone-700">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <span className="hidden md:inline text-stone-400">•</span>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Free Estimates</span>
            </div>
            <span className="hidden md:inline text-stone-400">•</span>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Clean Worksites</span>
            </div>
            <span className="hidden md:inline text-stone-400">•</span>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-brand-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">5-Star Local Feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Comprehensive masonry solutions for residential and commercial
              properties throughout Greater Boston.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border-2 border-stone-200 rounded-lg p-6 hover:border-brand-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-stone-600 mb-4">
                  {service.shortDescription}
                </p>
                <span className="text-brand-600 font-medium inline-flex items-center">
                  See work
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-secondary text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              A straightforward process designed to deliver exceptional results
              on time and on budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Site Visit & Options',
                description:
                  'We visit your property to assess the project and discuss your goals and material preferences.',
              },
              {
                step: '02',
                title: 'Written Estimate',
                description:
                  'You receive a detailed written estimate with transparent pricing and timeline expectations.',
              },
              {
                step: '03',
                title: 'Scheduled Work',
                description:
                  'Our crew arrives on time, works efficiently, and keeps the site clean throughout the project.',
              },
              {
                step: '04',
                title: 'Final Walkthrough & Care Tips',
                description:
                  'We walk you through the completed work and provide guidance on maintenance and care.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-600 text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Serving Greater Boston
              </h2>
              <p className="text-lg text-stone-600 mb-6">
                Based in Wilmington, MA, we proudly serve homeowners and
                businesses throughout the Greater Boston area and North Shore.
                From small repairs to large-scale projects, we bring the same
                level of craftsmanship to every job.
              </p>
              <p className="text-stone-600 mb-8">
                Not sure if we service your area? Give us a call – we often
                travel for the right project.
              </p>
              <Link
                href="/service-area"
                className="btn btn-secondary inline-flex"
              >
                View Full Service Area
              </Link>
            </div>
            <div className="bg-stone-200 rounded-lg aspect-video overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5879.073509702674!2d-71.17295182320211!3d42.54389427117639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e30a94e1f6f3b9%3A0x3156dd4d0ff5f8e8!2sDerek%20Leider%20Masonry%20LLC!5e0!3m2!1sen!2sus!4v1761226695021!5m2!1sen!2sus" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Derek Leider Masonry Location - 510 Main Street, Wilmington, MA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-brand-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            Get a same-day call-back from our team. We'll discuss your project,
            answer questions, and schedule a free on-site estimate.
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
              Request a Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn bg-brand-700 text-white hover:bg-brand-800 px-8 py-4 text-lg border-0"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
