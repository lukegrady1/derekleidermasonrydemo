/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/derekleidermasonrydemo',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Note: headers() is not supported in static export mode
  // Security headers should be configured in GitHub Pages or hosting provider
}

export default nextConfig
