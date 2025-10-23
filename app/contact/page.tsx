'use client'

import { COMPANY_INFO } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-stone-200">
              Ready to start your project? Contact us for a free, no-obligation
              estimate. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-stone-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-brand-600 mr-2"
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
                    Phone
                  </h3>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-brand-600 hover:text-brand-700 text-lg font-medium"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-sm text-stone-600 mt-1">
                    Call for immediate assistance
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-brand-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-brand-600 hover:text-brand-700 font-medium break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-sm text-stone-600 mt-1">
                    We will respond within 24 hours
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-brand-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Address
                  </h3>
                  <address className="not-italic text-stone-700">
                    {COMPANY_INFO.address.street}
                    <br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}{' '}
                    {COMPANY_INFO.address.zip}
                  </address>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 text-brand-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Hours
                  </h3>
                  <p className="text-stone-700">{COMPANY_INFO.hours.weekday}</p>
                  <p className="text-stone-700">{COMPANY_INFO.hours.weekend}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Request a Quote
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
