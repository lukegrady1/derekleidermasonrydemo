'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('analytics-consent')
    if (!consent) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      // Initialize analytics here when consent is given
      initAnalytics()
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('analytics-consent', 'accepted')
    setShowBanner(false)
    initAnalytics()
  }

  const handleDecline = () => {
    localStorage.setItem('analytics-consent', 'declined')
    setShowBanner(false)
  }

  const initAnalytics = () => {
    // GA4 will be initialized here
    // Google Ads tracking will be initialized here
    // Meta Pixel will be initialized here
    console.log('Analytics initialized')
  }

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900 text-white shadow-2xl"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container-custom py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              We use cookies and similar technologies to improve your experience,
              analyze site traffic, and personalize content. By clicking
              &quot;Accept&quot;, you consent to our use of cookies.{' '}
              <Link
                href="/privacy"
                className="underline hover:text-brand-400"
              >
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-stone-300 hover:text-white transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium bg-brand-600 text-white rounded-md hover:bg-brand-700 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
