import Link from 'next/link'
import { COMPANY_INFO, SERVICES, PAYMENT_METHODS, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              {COMPANY_INFO.name}
            </h3>
            <address className="not-italic space-y-2 text-sm">
              <p>{COMPANY_INFO.address.street}</p>
              <p>
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}{' '}
                {COMPANY_INFO.address.zip}
              </p>
              <p className="pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-brand-400 transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-brand-400 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Hours</h3>
            <div className="space-y-2 text-sm">
              <p>{COMPANY_INFO.hours.weekday}</p>
              <p>{COMPANY_INFO.hours.weekend}</p>
            </div>
            <div className="mt-6">
              <h4 className="text-white text-sm font-semibold mb-2">
                Service Area
              </h4>
              <p className="text-sm">{COMPANY_INFO.serviceArea}</p>
              <Link
                href="/service-area"
                className="text-brand-400 hover:text-brand-300 text-sm mt-1 inline-block"
              >
                View coverage map →
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm mb-6">
              {NAV_LINKS.filter((link) => link.href !== '/').map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-brand-400 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-brand-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>

            {/* Payment Methods */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-2">
                Payment Methods
              </h4>
              <p className="text-xs text-stone-400">
                {PAYMENT_METHODS.join(' • ')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
            <p>
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-xs">
              Licensed & Insured • Free Estimates • Clean Worksites
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
