/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolioo',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 