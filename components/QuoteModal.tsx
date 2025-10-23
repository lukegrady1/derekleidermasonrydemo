'use client'

import { useEffect, useState } from 'react'
import ContactForm from './ContactForm'

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true)
      document.body.style.overflow = 'hidden'
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal()
      }
    }

    window.addEventListener('openQuoteModal', handleOpenModal)
    document.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('openQuoteModal', handleOpenModal)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
          <h2 id="quote-modal-title" className="text-2xl font-bold text-stone-900">
            Request a Free Estimate
          </h2>
          <button
            onClick={closeModal}
            className="text-stone-400 hover:text-stone-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <p className="text-stone-600 mb-6">
            Fill out the form below and we'll get back to you within 24 hours with
            a detailed estimate for your project.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
