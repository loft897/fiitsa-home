import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.fiitsa.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "img.freepik.com" },
    ],
  },
  poweredByHeader: false,
  async redirects() {
    return [];
  },
};

export default nextConfig;
