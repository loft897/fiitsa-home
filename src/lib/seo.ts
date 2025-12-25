import type { Metadata } from "next";
import type { Post } from "@/lib/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fiitsa.com";

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function buildArticleMetadata(post: Post): Metadata {
  const canonical = absoluteUrl(`/articles/${post.slug}`);
  return {
    title: post.title,
    description: post.description || undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.description || undefined,
      images: post.cover_url ? [{ url: post.cover_url }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description || undefined,
      images: post.cover_url ? [post.cover_url] : undefined,
    },
  };
}

export function buildBreadcrumbs(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function buildArticleJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description || undefined,
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: {
      "@type": "Person",
      name: post.author_name || "Équipe Fiitsa",
    },
    image: post.cover_url ? [post.cover_url] : undefined,
    mainEntityOfPage: absoluteUrl(`/articles/${post.slug}`),
    publisher: {
      "@type": "Organization",
      name: "Fiitsa",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/fiitsa-logo.png"),
      },
    },
  };
}
