import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/ArticleContent";
import { getPostBySlug } from "@/lib/posts";

export const revalidate = 120;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  return {
    title: `Embed ${slug}`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function EmbedPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        {post.cover_url && (
          <div className="relative mt-6 h-64 w-full overflow-hidden rounded-2xl">
            <Image src={post.cover_url} alt={post.title} fill className="object-cover" />
          </div>
        )}
        <div className="mt-6">
          <ArticleContent content={post.content} />
        </div>
      </div>
    </div>
  );
}
