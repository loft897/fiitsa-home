import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { PostPreview } from "@/lib/types";

export function ArticleCard({ post }: { post: PostPreview }) {
  return (
    <Card className="group overflow-hidden border-border/60 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-card">
      <CardHeader className="p-0">
        <Link href={`/articles/${post.slug}`} className="block">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.cover_url || "/og-default.png"}
              alt={post.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="space-y-3 p-5">
        <div className="flex flex-wrap gap-2">
          {(post.tags || []).slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={`/articles/${post.slug}`}>
          <h3 className="text-lg font-semibold leading-snug transition group-hover:text-primary">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.description || "Un guide pratique pour accelerer votre croissance."}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between px-5 pb-5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {post.published_at ? new Date(post.published_at).toLocaleDateString("fr-FR") : ""}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {post.reading_time || 5} min
        </span>
      </CardFooter>
    </Card>
  );
}
