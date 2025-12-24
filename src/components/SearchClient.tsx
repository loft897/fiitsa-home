"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { PostPreview } from "@/lib/types";

export function SearchClient({ posts }: { posts: PostPreview[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query) return posts.slice(0, 12);
    const lower = query.toLowerCase();
    return posts.filter((post) =>
      [post.title, post.description, ...(post.tags || [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(lower)
    );
  }, [posts, query]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Rechercher un article"
          className="pl-9"
        />
      </div>
      <div className="grid gap-4">
        {results.map((post) => (
          <Link
            key={post.id}
            href={`/articles/${post.slug}`}
            className="rounded-2xl border border-border/60 bg-background/80 p-4 transition hover:border-primary/60"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-base font-semibold">{post.title}</p>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(post.tags || []).slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
