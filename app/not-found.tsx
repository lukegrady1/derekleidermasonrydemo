import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-50 pt-20">
      <div className="container-custom text-center px-4">
        <h1 className="text-9xl font-bold text-brand-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-stone-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-primary">
            Go to Homepage
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
