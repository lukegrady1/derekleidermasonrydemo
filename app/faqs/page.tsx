'use client'

import { COMPANY_INFO } from '@/lib/constants'

export default function FAQsPage() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'Do you provide free estimates?',
          a: 'Yes. We offer free, no-obligation on-site estimates. We will assess your project, discuss options, and provide a detailed written estimate with transparent pricing and timeline.',
        },
        {
          q: 'What areas do you serve?',
          a: 'We are based in Wilmington, MA and serve all of Greater Boston and the North Shore. This includes communities like Reading, Burlington, Woburn, Lynnfield, Andover, and many others. Contact us if you are unsure - we often travel for the right project.',
        },
        {
          q: 'Are you licensed and insured?',
          a: 'Yes. We carry full general liability insurance and workers compensation coverage. We are licensed to work in Massachusetts and handle all necessary permits for your project.',
        },
        {
          q: 'How long will my project take?',
          a: 'Timeline varies by project scope. Small repairs might take 1-2 days, while larger installations like patios or driveways can take 1-2 weeks. We provide clear timelines in every estimate and keep you updated throughout.',
        },
      ],
    },
    {
      category: 'Materials & Methods',
      questions: [
        {
          q: 'What materials do you recommend?',
          a: 'We source quality materials suitable for New England climate. For stone, we often recommend bluestone or granite for durability. For brick, we match existing materials or suggest options based on your aesthetic. We will discuss material options and pricing tiers during your estimate.',
        },
        {
          q: 'Why is base preparation so important?',
          a: 'Proper base preparation is the foundation of lasting masonry work. Inadequate base causes settling, cracking, and drainage issues. We excavate to proper depth, use quality aggregates, compact thoroughly, and ensure correct drainage slope.',
        },
        {
          q: 'Do you seal surfaces after installation?',
          a: 'For most stone and concrete surfaces, yes. Sealing protects against stains, reduces moss growth, and enhances appearance. We use breathable sealers that will not trap moisture. Resealing every 2-3 years maintains protection.',
        },
      ],
    },
    {
      category: 'Timing & Weather',
      questions: [
        {
          q: 'Do you work in winter?',
          a: 'Some projects can proceed in cold weather with proper precautions. Concrete work requires temperatures above freezing, though we can use winter-mix concrete with additives. Brickwork and stonework are more flexible. We will advise on timing for your specific project.',
        },
        {
          q: 'What happens if it rains during my project?',
          a: 'We monitor forecasts and protect work in progress. Fresh concrete and mortar need protection from heavy rain. For multi-day projects, we will pause during severe weather and resume when conditions allow. Timeline estimates account for typical New England weather.',
        },
        {
          q: 'When is the best time to schedule masonry work?',
          a: 'Spring through fall (April-November) offers the most consistent working conditions. However, we work year-round and can advise on timing based on your project type and urgency.',
        },
      ],
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          q: 'How do you price projects?',
          a: 'We provide detailed written estimates with itemized costs. Pricing depends on project scope, materials selected, site accessibility, and labor requirements. We offer transparent pricing - no hidden fees or surprises.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept cash, checks, and major credit cards (Visa, Mastercard, Discover, American Express), as well as PayPal. Payment terms are outlined in your contract, typically with a deposit and final payment upon completion.',
        },
        {
          q: 'Do you offer financing?',
          a: 'For larger projects, we can discuss payment plans. Contact us to explore options that fit your budget.',
        },
      ],
    },
    {
      category: 'Warranties & Maintenance',
      questions: [
        {
          q: 'Do you warranty your work?',
          a: 'Yes. We stand behind our craftsmanship. Warranty terms vary by project type and materials but are clearly outlined in your contract. Quality materials and proper installation mean most work lasts decades with minimal maintenance.',
        },
        {
          q: 'How do I maintain my masonry work?',
          a: 'Most masonry requires minimal maintenance. We provide care instructions at project completion. Generally: keep gutters clean, maintain proper grading, reseal surfaces every few years, and address small cracks promptly to prevent larger issues.',
        },
        {
          q: 'What if I have an issue after completion?',
          a: 'Contact us. We are local and available for follow-up. If an issue arises related to our work, we will assess and address it promptly. Your satisfaction and the longevity of the work are important to us.',
        },
      ],
    },
    {
      category: 'Process & Logistics',
      questions: [
        {
          q: 'Will you keep the work site clean?',
          a: 'Yes. Daily cleanup is standard. We protect landscaping, minimize dust and debris, and leave your property tidy at the end of each day. Final cleanup includes debris removal and site restoration.',
        },
        {
          q: 'Do I need to be home during the work?',
          a: 'Not necessarily. After the initial walkthrough and approval to start, many clients leave us to work. We will communicate if decisions or access are needed. A final walkthrough together ensures everything meets expectations.',
        },
        {
          q: 'Do you handle permits and inspections?',
          a: 'Yes. For projects requiring permits, we prepare applications, submit to local building departments, and coordinate inspections. Permit costs are outlined in your estimate.',
        },
      ],
    },
  ]

  // Structured data for FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      }))
    ),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-stone-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-stone-200">
              Find answers to common questions about our masonry services,
              materials, timelines, and process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="py-16 lg:py-24">
        <div className="container-custom max-w-4xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <details
                    key={qIndex}
                    className="bg-white border-2 border-stone-200 rounded-lg p-6 hover:border-brand-500 transition-colors group"
                  >
                    <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex items-center justify-between">
                      {faq.q}
                      <svg
                        className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
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
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-stone-50">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            We're happy to answer any questions about your specific project. Give
            us a call or request a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="btn btn-primary px-8 py-4 text-lg"
              onClick={() => {
                const event = new CustomEvent('openQuoteModal')
                window.dispatchEvent(event)
              }}
            >
              Request a Free Estimate
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn btn-secondary px-8 py-4 text-lg"
            >
              Call {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
