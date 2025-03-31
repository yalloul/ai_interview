import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      "child_process": require.resolve('child_process'),
      "fs": false,
      "net": false,
      "tls": false,
    };
    return config;
  },
};

export default nextConfig;
