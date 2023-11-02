/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        "source": "/index",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/home",
        "destination": "/",
        "permanent": true
      },
      {
        "source": "/homepage",
        "destination": "/",
        "permanent": true
      }
    ]
  }
}

module.exports = nextConfig
