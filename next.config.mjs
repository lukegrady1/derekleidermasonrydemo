/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/derekleidermasonrydemo',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com *.googleapis.com maps.googleapis.com; style-src 'self' 'unsafe-inline' *.googleapis.com; img-src 'self' data: blob: *.googletagmanager.com *.google-analytics.com *.googleapis.com *.gstatic.com maps.googleapis.com maps.gstatic.com; font-src 'self' data: *.googleapis.com *.gstatic.com; connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com *.googleapis.com maps.googleapis.com; frame-src 'self' *.google.com;",
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ],
}

export default nextConfig
