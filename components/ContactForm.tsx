'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
  // Get it from https://formspree.io after creating an account
  const [state, handleSubmit] = useForm('YOUR_FORM_ID')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const services = [
    'Brickwork',
    'Stonework',
    'Concrete Services',
    'Parging',
    'Waterproofing',
    'Commercial Maintenance',
  ]

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  if (state.succeeded) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
        <svg
          className="w-16 h-16 text-green-600 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-stone-900 mb-2">
          Thank you for reaching out!
        </h3>
        <p className="text-stone-700 mb-6">
          We have received your request and will get back to you within 24 hours.
        </p>
        <p className="text-sm text-stone-600">
          In the meantime, feel free to call us at{' '}
          <a href="tel:801-656-7656" className="text-brand-600 font-medium">
            (801) 656-7656
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-stone-900 mb-2">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-brand-600 focus:ring-2 focus:ring-brand-600 focus:outline-none transition-colors"
          placeholder="John Smith"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-stone-900 mb-2">
          Email Address <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-brand-600 focus:ring-2 focus:ring-brand-600 focus:outline-none transition-colors"
          placeholder="john@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-stone-900 mb-2">
          Phone Number <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-brand-600 focus:ring-2 focus:ring-brand-600 focus:outline-none transition-colors"
          placeholder="(123) 456-7890"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-stone-900 mb-2">
          Project Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-brand-600 focus:ring-2 focus:ring-brand-600 focus:outline-none transition-colors"
          placeholder="123 Main St, Wilmington, MA"
        />
        <p className="text-sm text-stone-600 mt-1">Optional, but helpful for estimates</p>
      </div>

      {/* Project Type */}
      <div>
        <fieldset>
          <legend className="block text-sm font-semibold text-stone-900 mb-3">
            Project Type <span className="text-red-600">*</span>
          </legend>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <label
                key={service}
                className="flex items-center p-3 border-2 border-stone-300 rounded-lg cursor-pointer hover:border-brand-500 transition-colors"
              >
                <input
                  type="checkbox"
                  name="projectType[]"
                  value={service}
                  checked={selectedServices.includes(service)}
                  onChange={() => toggleService(service)}
                  className="w-4 h-4 text-brand-600 focus:ring-brand-500 rounded"
                />
                <span className="ml-2 text-sm text-stone-900">{service}</span>
              </label>
            ))}
          </div>
          <ValidationError prefix="Project Type" field="projectType" errors={state.errors} />
        </fieldset>
      </div>

      {/* Budget Range */}
      <div>
        <label htmlFor="budgetRange" className="block text-sm font-semibold text-stone-900 mb-2">
          Budget Range
        </label>
        <select
          id="budgetRange"
          name="budgetRange"
          className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-brand-600 focus:ring-2 focus:ring-brand-600 focus:outline-none transition-colors"
        >
          <option value="">Select a range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-20k">$10,000 - $20,000</option>
          <option value="20k-50k">$20,000 - $50,000</option>
          <option value="over-50k">Over $50,000</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-semibold text-stone-900 mb-2">
          When do you want to start?
        </label>
        <select
          id="timeline"
          name="timeline"
          className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-brand-600 focus:ring-2 focus:ring-brand-600 focus:outline-none transition-colors"
        >
          <option value="">Select a timeframe</option>
          <option value="asap">As soon as possible</option>
          <option value="1-2-months">1-2 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="planning">Just planning ahead</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-stone-900 mb-2">
          Project Details <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-brand-600 focus:ring-2 focus:ring-brand-600 focus:outline-none transition-colors"
          placeholder="Tell us about your project... What needs to be done? Any specific concerns or preferences?"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <p className="text-sm text-stone-600 mt-1">
          Tip: Include as many details as possible for a more accurate estimate.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          'Request Free Estimate'
        )}
      </button>

      <p className="text-xs text-stone-600 text-center">
        By submitting this form, you agree to be contacted about your project.
        We typically respond within 24 hours.
      </p>
    </form>
  )
}
