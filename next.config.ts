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
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "fiitsa.com" }],
        destination: "https://www.fiitsa.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
