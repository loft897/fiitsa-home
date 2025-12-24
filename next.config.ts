import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.fiitsa.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  poweredByHeader: false,
  async redirects() {
    return [];
  },
};

export default nextConfig;
