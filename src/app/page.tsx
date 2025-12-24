import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/CtaBanner";
import { getCategories, getTags, listPosts } from "@/lib/posts";

export const revalidate = 120;

export default async function HomePage() {
  const [{ data: posts }, categories, tags] = await Promise.all([
    listPosts({ pageSize: 6 }),
    getCategories(),
    getTags(),
  ]);

  return (
    <div className="space-y-20">
      <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Insights restaurants
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Le blog Fiitsa pour accelerer la croissance de votre restaurant.
          </h1>
          <p className="text-lg text-muted-foreground">
            Tendances, operations, marketing et retours terrain pour piloter un resto moderne.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/articles">
                Decouvrir les articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/search">Rechercher un sujet</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-[32px] border border-border/60 bg-white/70 p-6 shadow-sm dark:bg-card">
          <p className="text-sm font-semibold">Themes populaires</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 10).map((tag) => (
              <Badge key={tag} variant="secondary">
                <Link href={`/tags/${tag}`}>{tag}</Link>
              </Badge>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            <p className="text-sm font-semibold">Categories</p>
            <div className="grid gap-2">
              {categories.slice(0, 6).map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category}`}
                  className="rounded-2xl border border-border/60 bg-background px-4 py-2 text-sm transition hover:border-primary/60"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Derniers articles</h2>
          <Button asChild variant="ghost">
            <Link href="/articles">
              Voir tout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] border border-border/60 bg-white/80 p-6 shadow-sm dark:bg-card">
          <h3 className="text-xl font-semibold">Newsletter Fiitsa</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Recevez un resume hebdo des meilleures strategies.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Votre email"
              className="h-11 flex-1 rounded-full border border-border bg-background px-4 text-sm"
            />
            <Button size="lg" className="rounded-full">
              Sinscrire
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Pas de spam. Vous pouvez vous desinscrire a tout moment.
          </p>
        </div>
        <CtaBanner />
      </section>
    </div>
  );
}
