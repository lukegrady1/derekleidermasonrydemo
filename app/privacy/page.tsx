import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Derek Leider Masonry website.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-stone-900 text-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-stone-200">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-stone max-w-none">
            <h2>Introduction</h2>
            <p>
              Derek Leider Masonry ("we," "our," or "us") respects your privacy
              and is committed to protecting your personal information. This
              Privacy Policy explains how we collect, use, and safeguard your
              information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>When you contact us or request a quote, we collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Project address (if provided)</li>
              <li>Project details and preferences</li>
              <li>Any other information you choose to share</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to your inquiries and provide estimates</li>
              <li>Schedule and coordinate service appointments</li>
              <li>Improve our website and services</li>
              <li>Send service updates and project communications</li>
              <li>Comply with legal obligations</li>
              <li>
                Analyze website traffic and user behavior (via Google Analytics)
              </li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing
              experience and gather analytics. You can control cookie preferences
              through our consent banner and your browser settings.
            </p>
            <h3>Types of Cookies We Use:</h3>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Necessary for website
                functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors use our site (Google Analytics)
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used for advertising purposes
                (Google Ads, Meta Pixel) – only with your consent
              </li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share information
              with:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Email services, analytics
                platforms, and hosting providers who help operate our website
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to
                protect our rights
              </li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>Our website uses:</p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> Website traffic analysis
              </li>
              <li>
                <strong>Google Ads:</strong> Advertising and conversion tracking
              </li>
              <li>
                <strong>Meta Pixel:</strong> Social media advertising (with your
                consent)
              </li>
            </ul>
            <p>
              These services have their own privacy policies. We encourage you to
              review them.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide
              services and comply with legal obligations. Contact information from
              quote requests is kept for up to 2 years unless you request deletion.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for cookies and tracking</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your
              information. However, no internet transmission is completely secure.
              We cannot guarantee absolute security but take appropriate
              precautions to safeguard your data.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not
              knowingly collect information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with an updated revision date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise
              your rights, contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:derekleider@ymail.com">derekleider@ymail.com</a>
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <a href="tel:801-656-7656">(801) 656-7656</a>
              </li>
              <li>
                <strong>Mail:</strong> 510 Main Street, Wilmington, MA 01887
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
