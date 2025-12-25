import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getAllPostSlugs, getCategories, getTags } from "@/lib/posts";

const staticRoutes = [
  "/",
  "/blog",
  "/articles",
  "/categories",
  "/tags",
  "/search",
  "/features",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/legal",
  "/whatsapp-pricing",
  "/logistics-partners",
  "/become-logistic-partner",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const items: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
  }));

  try {
    const [slugs, categories, tags] = await Promise.all([
      getAllPostSlugs(),
      getCategories(),
      getTags(),
    ]);

    slugs.forEach((slug) => {
      items.push({
        url: absoluteUrl(`/articles/${encodeURIComponent(slug)}`),
        lastModified: now,
      });
    });

    categories.forEach((slug) => {
      items.push({
        url: absoluteUrl(`/categories/${encodeURIComponent(slug)}`),
        lastModified: now,
      });
    });

    tags.forEach((tag) => {
      items.push({
        url: absoluteUrl(`/tags/${encodeURIComponent(tag)}`),
        lastModified: now,
      });
    });
  } catch {
    return items;
  }

  return items;
}
