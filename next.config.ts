import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
