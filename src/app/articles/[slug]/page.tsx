import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleContent } from "@/components/ArticleContent";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmbedCode } from "@/components/EmbedCode";
import { Reviews } from "@/components/Reviews";
import { ShareBar } from "@/components/ShareBar";
import { TOC } from "@/components/TOC";
import { ViewTracker } from "@/components/ViewTracker";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { getAllPostSlugs, getPostBySlug, getSimilarPosts, listApprovedReviews } from "@/lib/posts";
import { buildArticleJsonLd, buildArticleMetadata, buildBreadcrumbs } from "@/lib/seo";
import { estimateReadingTime } from "@/lib/content";

export const revalidate = 120;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  return buildArticleMetadata(post);
}

export default async function ArticlePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { reviewsPage?: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const reviewsPage = Number(searchParams?.reviewsPage || 1);
  const pageSize = 6;
  const [reviewsResult, similarPosts] = await Promise.all([
    listApprovedReviews(slug, reviewsPage, pageSize),
    getSimilarPosts(post),
  ]);

  const articleUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://blog.fiitsa.com"}/articles/${post.slug}`;
  const readingTime = post.reading_time || estimateReadingTime(post.content);

  return (
    <div className="space-y-12">
      <ViewTracker slug={post.slug} />
      <Breadcrumbs
        items={[
          { label: "Accueil", href: "/" },
          { label: "Articles", href: "/articles" },
          { label: post.title, href: `/articles/${post.slug}` },
        ]}
      />

      <section className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold md:text-4xl">{post.title}</h1>
            <p className="text-lg text-muted-foreground">
              {post.description || "Un guide complet pour accelerer la croissance de votre restaurant."}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author_name || "Equipe Fiitsa"}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.published_at ? new Date(post.published_at).toLocaleDateString("fr-FR") : ""}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {readingTime} min
              </span>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-[28px] border border-border/60">
            <Image
              src={post.cover_url || "/og-default.png"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <ShareBar url={articleUrl} title={post.title} />
          <ArticleContent content={post.content} />
          <div className="grid gap-4 md:grid-cols-2">
            <EmbedCode slug={post.slug} />
            <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
              <p className="text-sm font-semibold">Tags et categories</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
                {post.category_slug && (
                  <Link href={`/categories/${post.category_slug}`}>#{post.category_slug}</Link>
                )}
                {(post.tags || []).map((tag) => (
                  <Link key={tag} href={`/tags/${tag}`}>
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <TOC content={post.content} />
          <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
            <p className="text-sm font-semibold">Partager</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Partagez cet article avec votre equipe.
            </p>
            <div className="mt-3">
              <ShareBar url={articleUrl} title={post.title} />
            </div>
          </div>
        </div>
      </section>

      <Reviews
        postSlug={post.slug}
        reviews={reviewsResult.data}
        count={reviewsResult.count}
        page={reviewsPage}
        pageSize={pageSize}
      />

      {similarPosts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Articles similaires</h2>
            <Link href="/articles" className="text-sm text-muted-foreground">
              Voir tous les articles
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {similarPosts.map((item) => (
              <ArticleCard key={item.id} post={item} />
            ))}
          </div>
        </section>
      )}

      <SEOJsonLd data={buildArticleJsonLd(post)} />
      <SEOJsonLd
        data={buildBreadcrumbs([
          { name: "Accueil", url: "/" },
          { name: "Articles", url: "/articles" },
          { name: post.title, url: `/articles/${post.slug}` },
        ])}
      />
    </div>
  );
}
