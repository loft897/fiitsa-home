import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fiitsa.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/_next"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
