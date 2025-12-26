import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Pagination } from "@/components/Pagination";
import { listPosts } from "@/lib/posts";
import { absoluteUrl, formatSlugTitle } from "@/lib/seo";

export const revalidate = 120;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const title = formatSlugTitle(slug);
  const description = `Articles Fiitsa avec le tag ${title}.`;
  const canonical = absoluteUrl(`/tags/${slug}`);

  return {
    title: `Tag ${title}`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `Tag ${title}`,
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
          width: 1200,
          height: 630,
          alt: "Fiitsa",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Tag ${title}`,
      description,
      images: [
        "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
      ],
    },
  };
}

export default async function TagPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { page?: string };
}) {
  const { slug } = params;
  const page = Number(searchParams?.page || 1);
  const pageSize = 9;
  const title = formatSlugTitle(slug);

  const result = await listPosts({ tag: slug, page, pageSize });
  const totalPages = result.count ? Math.ceil(result.count / pageSize) : 1;

  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tag</p>
        <h1 className="mt-2 text-3xl font-semibold">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Articles, ressources et exemples Fiitsa autour du tag {title}.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {result.data.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aucun article pour ce tag.</p>
        ) : (
          result.data.map((post) => <ArticleCard key={post.id} post={post} />)
        )}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} basePath={`/tags/${slug}`} />
      <div className="text-sm text-muted-foreground">
        Voir aussi toutes les catégories et tags.{" "}
        <a className="text-primary underline" href="/categories">
          Cat?gories
        </a>{" "}
        <span>·</span>{" "}
        <a className="text-primary underline" href="/tags">
          Tags
        </a>
      </div>
    </div>
  );
}
