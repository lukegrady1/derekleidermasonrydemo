# Derek Leider Masonry Website

A modern, mobile-first marketing website built with Next.js 14, TypeScript, and Tailwind CSS. Optimized for performance, accessibility, and lead generation.

## Features

- ✅ Next.js 14 App Router with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Server Components for optimal performance
- ✅ Mobile-first responsive design
- ✅ SEO optimized with structured data (LocalBusiness, Service, FAQPage)
- ✅ Accessible (WCAG 2.1 AA compliant)
- ✅ Contact forms with Server Actions
- ✅ Analytics ready (GA4, Google Ads, Meta Pixel)
- ✅ Cookie consent banner
- ✅ Comprehensive service pages
- ✅ Gallery with filtering
- ✅ FAQ pages with schema markup
- ✅ Service area page

## Performance Targets

- Lighthouse Performance: ≥ 95
- Lighthouse Accessibility: ≥ 95
- Lighthouse SEO: ≥ 100
- Lighthouse Best Practices: ≥ 95
- LCP: ≤ 2.5s
- INP: ≤ 200ms
- CLS: ≤ 0.1

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── faqs/              # FAQs page
│   ├── gallery/           # Project gallery
│   ├── privacy/           # Privacy policy
│   ├── service-area/      # Service area page
│   ├── services/          # Services pages
│   │   └── [slug]/        # Dynamic service pages
│   ├── actions.ts         # Server Actions for forms
│   ├── error.tsx          # Error page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ConsentBanner.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── GalleryClient.tsx
│   ├── Header.tsx
│   ├── QuoteModal.tsx
│   └── ServiceWizard.tsx
├── lib/                   # Utilities and data
│   ├── constants.ts       # Company info and constants
│   └── service-data.ts    # Service page content
└── public/                # Static assets
    └── images/            # Image files

```

## Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# SMTP Configuration (for contact form emails)
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
SMTP_FROM=noreply@derekleidermasonry.com
CONTACT_EMAIL=derekleider@ymail.com

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
```

### Email Setup

The contact form uses Server Actions and requires SMTP configuration. To enable email sending:

1. Install nodemailer: `npm install nodemailer @types/nodemailer`
2. Configure SMTP settings in `.env.local`
3. Uncomment the nodemailer code in `app/actions.ts`

## Customization

### Company Information

Update company details in `lib/constants.ts`:
- Business name, phone, email
- Address and service area
- Hours of operation
- Services offered

### Service Pages

Modify service content in `lib/service-data.ts`. Each service includes:
- Hero content
- What we do / What you get
- Materials and pricing guidance
- FAQs

### Styling

Design tokens are in `tailwind.config.ts`:
- Brand colors
- Typography
- Spacing

Global styles are in `app/globals.css`.

## Image Optimization

### Adding Images

1. Place images in `public/images/`
2. Use Next.js `Image` component
3. Provide responsive sizes and alt text
4. Optimize with sharp: `npm install sharp`

### Recommended Image Sizes

- Hero images: 1600px, 1200px, 800px widths
- Service images: 1200px, 800px, 400px widths
- Gallery images: 1200px, 800px widths
- Format: AVIF/WebP with JPEG fallback

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Environment Variables on Vercel

Add the same environment variables from `.env.local` to your Vercel project settings.

## Analytics Setup

### Google Analytics 4

1. Create a GA4 property
2. Add measurement ID to `.env.local`
3. Update consent logic in `components/ConsentBanner.tsx`

### Google Ads

1. Set up Google Ads conversion tracking
2. Add conversion ID to environment variables
3. Implement conversion events (lead_submit, call_click)

### Meta Pixel

1. Create Meta Pixel
2. Add Pixel ID to environment variables
3. Configure events in consent banner

## Accessibility

This website follows WCAG 2.1 Level AA guidelines:

- Semantic HTML landmarks
- ARIA labels where needed
- Keyboard navigation support
- Focus visible styles
- 4.5:1 color contrast ratios
- Skip-to-content link
- Alt text on all images

## SEO

- Unique titles and meta descriptions per page
- Structured data (LocalBusiness, Service, FAQPage)
- Sitemap generation
- Internal linking
- Mobile-first responsive design
- Fast load times

## Performance Optimization

- Server Components (minimal client JS)
- Image optimization with Next/Image
- Code splitting
- CSS optimization with Tailwind
- Content Security Policy headers
- Prefetching for navigation

## Testing

### Lighthouse CI

Run Lighthouse tests:

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun
```

### Manual Testing

- Test all forms
- Verify responsive design on multiple devices
- Check accessibility with screen readers
- Test browser compatibility

## Support

For questions or issues, contact:
- Email: derekleider@ymail.com
- Phone: (801) 656-7656

## License

© 2025 Derek Leider Masonry. All rights reserved.
