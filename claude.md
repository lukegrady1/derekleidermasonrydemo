Project

Build a new, mobile-first marketing website for Derek Leider Masonry that outperforms the current site in design, speed, SEO, accessibility, and lead generation. Use the information on the existing site as factual input, but rewrite all copy in clear, professional, benefit-driven language. Do not copy text verbatim.

Tech & Delivery

Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS. No heavy UI kits; keep bundle lean.

Images: Next/Image, responsive sizes, AVIF/WebP with JPEG fallbacks; blur-up placeholders.

CMS (optional): Filesystem Markdown for FAQs & service pages; simple to edit.

Hosting: Vercel (or Netlify). Include preview env + production.

Analytics: GA4 + Google Ads (hook ready) + Meta Pixel (opt-in). Consent banner with localStorage.

Forms: Server Actions (Next) + SMTP (nodemailer) with file upload (images/PDF under 15MB), basic spam controls (honeypot + rate limit).

Telemetry: Vercel Speed Insights + Lighthouse CI GitHub Action.

Performance Targets (strict)

Lighthouse (Mobile): Performance ≥ 95, Accessibility ≥ 95, SEO ≥ 100, Best Practices ≥ 95.

Core Web Vitals: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 on a mid-tier phone (throttled).

Total JS < 120KB gz; no client JS on static sections (use server components).

Accessibility

Semantic landmarks (header/nav/main/footer, h1–h3 order), 4.5:1 color contrast, focus styles visible, skip-to-content, aria-labels on icons, form error summaries, captions/alt text on gallery.

Brand Voice & Positioning

Tone: Skilled, detail-obsessed, tidy job sites, clear timelines, transparent pricing ranges.

Promise: “Masonry that lasts decades, done neatly and on schedule.”

Proof: Before/after gallery, service-specific checklists, short testimonials, permits/insurance note.

Sitemap

Home (hero + primary CTAs)

Services (overview)

Brickwork

Stonework

Concrete Services

Parging

Waterproofing

Commercial Landscaping Maintenance

Gallery

About

Service Area

FAQs

Contact / Request a Quote

Create separate MDX pages for each service with unique FAQs and gallery subsets.

Global Header/Footer

Header: Logo (text lockup acceptable), tap-to-call button on mobile, “Request a Quote” button, sticky on scroll.

Footer: NAP (name, address, phone), email, hours, payment types, quick links, service area mini-map, license/insurance statement.

Primary CTAs

“Request a Quote” (modal form)

“Call Now” (mobile tel: link)

“Text Us a Photo” (mailto/upload alt; note: MMS number if provided later)

Contact Details (from source — rewrite labels only)

Phone: 801-656-7656 (tel link)

Email: derekleider@ymail.com
 (mailto link)

Address: 510 Main Street, Wilmington, MA 01887

Hours: Mon–Fri 8:00am–5:00pm; Sat–Sun by appointment

Service Area: Greater Boston (build a page + map with radius & towns list)

Use these as data points; rephrase surrounding copy. Add structured data (below).

Page-by-Page Requirements
1) Home

Hero: Crisp masonry shot, headline + subhead + two CTAs.

Example headline (rewriteable):
“Stone, brick, and concrete done right — built to last.”
Subhead: “Local masons delivering clean, durable work across Greater Boston.”

Trust Bar: “Insured • Free estimates • Clean worksites • 5-star local feedback”

Featured Services: 6 cards with short blurbs and “See work” links.

Process (4 steps): Site visit → Written estimate → Scheduled work → Final walkthrough.

Before/After slider: One marquee transformation.

Service Area: Small map + towns list.

Review snippet: 1–2 lines (placeholder; owner to provide).

CTA band: “Get a same-day call-back” + form.

2) Services (overview)

Grid of services with 1-paragraph summaries; links to detail pages.

“Not sure what you need?” mini-wizard: pick issue → suggested services.

3) Service Detail Templates (per service)

Hero with relevant photo.

What we do / What you get / Materials we recommend.

Price guidance: transparent ranges (e.g., “Most patio projects fall between $X–$Y depending on size/base/stone.”)

3–6 FAQs unique to service.

Mini gallery filtered for this service.

CTA: “Book a site visit.”

4) Gallery

Filterable by service; lazy-loaded masonry grid; lightbox with captions (work type, town, year).

5) About

Short origin story; craft ethos; safety/permit handling; insurance note; photo of team/lead mason.

6) Service Area

Map + list of towns/cities served (Greater Boston + North Shore; include Wilmington).

“Can we come to you?” prompt + contact CTA.

7) FAQs

12–18 common Qs (materials, timelines, winter work, drainage, warranty, permits).

Schema FAQPage.

8) Contact / Request a Quote

Form fields: name, email, phone, address, project type (multi-select), budget range, timeline, message, photo upload (jpg/png/pdf).

Copy: “Attach a photo of the area — we’ll reply within 24 hours.”

Success state with next steps.

Copy Prompts (for Claude to generate)

Write all sections in 6th–8th grade readability, scannable sentences, no fluff.

Emphasize durability, drainage, base prep, tidy cleanup, clear timelines.

Use local landmarks phrasing (“Greater Boston”, “Wilmington & nearby towns”).

On-Page SEO

Unique title/description for every page (“Masonry Contractor in Wilmington, MA | Brick • Stone • Concrete”).

H1 = page topic; H2s structured; keyword variants naturally (“brick repointing”, “stone steps”, “basement waterproofing”).

Internal links between related services.

Schema JSON-LD: LocalBusiness (NAP, hours, geo), Service for each service, FAQPage on FAQs, ImageObject for gallery images.

Structured Data (fill with actual values)
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Derek Leider Masonry",
  "image": "/images/og.jpg",
  "telephone": "801-656-7656",
  "email": "derekleider@ymail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "510 Main Street",
    "addressLocality": "Wilmington",
    "addressRegion": "MA",
    "postalCode": "01887",
    "addressCountry": "US"
  },
  "areaServed": "Greater Boston",
  "openingHours": "Mo-Fr 08:00-17:00",
  "url": "https://www.example.com"
}
</script>

Forms & Handling

Validate client-side + server-side; accessible error messages.

Rate-limit by IP; hidden honeypot field; block known disposable emails.

Store uploads to /tmp then forward via SMTP; delete after send. Return success within 2s.

Image Guidelines

Export hero images at 1600px, 1200px, 800px widths; AVIF/WebP + JPEG fallback.

Use alt text like “Granite front steps with bluestone treads in Wilmington, MA”.

Compress with sharp; target < 180KB for above-the-fold.

Payment Types & Badges

Show icons for cash, check, Visa, Mastercard, Discover, AmEx, PayPal.

Place in footer and on Contact page (small, no render-blocking SVGs).

Security & Privacy

Content Security Policy, no inline scripts; sanitize form inputs.

Cookie/consent banner for analytics/ads.

Simple privacy page: what’s collected, why, retention, opt-out.

Acceptance Criteria (must meet before “done”)

Lighthouse mobile ≥ targets, measured on a throttled Moto G profile.

No layout shift on hero load (pre-reserve image space).

Each service page passes Google’s “Rich Results Test” for Service schema.

Form successfully sends email with attachment; spam controls log to server console.

All images have descriptive alt text; keyboard navigation works end-to-end.

404 and 500 pages present with primary CTA to Home and Contact.

Example Content Seeds (rewrite/edit freely)

Home Hero Headline:
“Detail-driven masonry for homes and businesses in Greater Boston.”
Subhead:
“From stone steps and brickwork to concrete and waterproofing, we build clean, durable work that stands the test of time.”
CTA buttons: “Request a Quote” / “Call Now”

Service Card Blurbs (one-liners):

Brickwork: New builds, repairs, and repointing that match your home’s character.

Stonework: Patios, steps, walls, and chimneys in natural or engineered stone.

Concrete: Driveways, walkways, and retaining walls with proper base and drainage.

Parging: Clean, protective finishes that seal foundation surfaces from the elements.

Waterproofing: Diagnose leaks and install long-lasting membranes and drains.

Commercial Maintenance: Reliable grounds upkeep scheduled to avoid interruptions.

Process Steps:

Site Visit & Options → 2) Written Estimate → 3) Scheduled Work → 4) Final Walkthrough & Care Tips

FAQ Samples:

How long does a typical patio build take?
Most 300–400 sq ft patios complete in 3–5 days depending on excavation and base work.

Do you work in winter?
Yes, some projects proceed in cold weather if temperatures and materials allow; we’ll advise on timing.

Implementation Tasks (for Claude to execute)

Scaffold Next.js + Tailwind; set up layout, fonts, color tokens, and spacing scale.

Build pages per sitemap using server components; no client JS where not needed.

Implement header/footer, sticky mobile header, and global CTA components.

Create Service page template (props for FAQs, gallery tags, price ranges).

Build Gallery with filter and lightbox; lazy-load images with priority on first row.

Wire Request-a-Quote form with Server Actions + nodemailer + file upload.

Add structured data and meta tags per page.

Add Consent and GA4; create events: lead_submit, call_click, cta_click.

Optimize images and preload first hero image and critical font subset.

Add Lighthouse CI workflow; iterate until targets met.

Write all copy (unique, benefit-driven) based on the service list and local area.

What to Reuse vs. Replace from Source

Reuse as facts: company name, phone, email, address, hours, services, Greater Boston coverage.

Replace/upgrade: all copywriting, layout, performance, forms, gallery presentation, SEO, accessibility.