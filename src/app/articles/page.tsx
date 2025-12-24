import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticlesFilters } from "@/components/ArticlesFilters";
import { Pagination } from "@/components/Pagination";
import { getCategories, getTags, listPosts } from "@/lib/posts";

export const revalidate = 120;

export const metadata: Metadata = {
  title: "Articles",
  description: "Tous les articles Fiitsa pour booster la croissance des restaurants.",
  alternates: {
    canonical: "/articles",
  },
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    category?: string;
    tag?: string;
    sort?: "recent" | "popular";
    page?: string;
  };
}) {
  const page = Number(searchParams?.page || 1);
  const pageSize = 9;
  const [categories, tags, result] = await Promise.all([
    getCategories(),
    getTags(),
    listPosts({
      query: searchParams?.query,
      tag: searchParams?.tag,
      category: searchParams?.category,
      sort: searchParams?.sort || "recent",
      page,
      pageSize,
    }),
  ]);

  const totalPages = result.count ? Math.ceil(result.count / pageSize) : 1;

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold">Tous les articles</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Explorez des strategies actionnables pour vos restaurants.
        </p>
      </div>

      <ArticlesFilters categories={categories} tags={tags} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {result.data.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} basePath="/articles" />
    </div>
  );
}
