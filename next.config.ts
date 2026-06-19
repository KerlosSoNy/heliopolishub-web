import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // removeConsole: process.env.NODE_ENV === 'production'
    removeConsole:
       { exclude: ['error', 'warn'] }
      // : false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
