import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.strapiapp.com',
      },
      {
        protocol: 'https',
        hostname: '*.media.strapiapp.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.loom.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/signal-to', destination: '/agent-assembly', permanent: true },
      { source: '/signal-to/:path*', destination: '/agent-assembly/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
