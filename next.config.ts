import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
        port: '',
        protocol: 'https',
      }
    ]
  },
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      '*.css': {
        as: '*.css',
        loaders: ['@tailwindcss/turbopack']
      }
    }
  }
}

export default nextConfig
