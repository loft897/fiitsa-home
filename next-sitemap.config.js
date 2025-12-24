/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://blog.fiitsa.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  sitemapSize: 7000,
  exclude: ["/api/*", "/embed/*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
