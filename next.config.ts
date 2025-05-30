import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow images from specific external paths and block all others.
  images: {
    remotePatterns: [
      new URL('https://placehold.co/**'),
      new URL('https://picsum.photos/**'),
    ],
  },
};

export default nextConfig;
