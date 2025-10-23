'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-50 pt-20">
      <div className="container-custom text-center px-4">
        <h1 className="text-9xl font-bold text-brand-600 mb-4">500</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Something Went Wrong
        </h2>
        <p className="text-lg text-stone-600 mb-8 max-w-md mx-auto">
          We encountered an error while loading this page. Please try again or
          contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn btn-secondary">
            Go to Homepage
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
