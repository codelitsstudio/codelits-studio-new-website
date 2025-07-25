import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'placehold.co',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'www.smashingmagazine.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'zapier.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'martinfowler.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'uxdesign.cc',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'techradar.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'infoq.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'atlassian.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'hbr.org',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'cisa.gov',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'www.smartsheet.com', // <<< ADD THIS
      port: '',
      pathname: '/**',
    },
  ],
},

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'async_hooks': false,
      };
    }
    return config;
  },
};

export default nextConfig;
