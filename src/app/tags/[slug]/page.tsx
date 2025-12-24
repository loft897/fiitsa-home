import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Pagination } from "@/components/Pagination";
import { listPosts } from "@/lib/posts";

export const revalidate = 120;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  return {
    title: `Tag ${slug}`,
    description: `Articles Fiitsa avec le tag ${slug}.`,
    alternates: {
      canonical: `/tags/${slug}`,
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

  const result = await listPosts({ tag: slug, page, pageSize });
  const totalPages = result.count ? Math.ceil(result.count / pageSize) : 1;

  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tag</p>
        <h1 className="mt-2 text-3xl font-semibold">{slug}</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {result.data.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Aucun article pour ce tag.
          </p>
        ) : (
          result.data.map((post) => <ArticleCard key={post.id} post={post} />)
        )}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} basePath={`/tags/${slug}`} />
    </div>
  );
}
