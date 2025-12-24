import { Star } from "lucide-react";
import { ReviewForm } from "@/components/ReviewForm";
import { Pagination } from "@/components/Pagination";
import type { Review } from "@/lib/types";

export function Reviews({
  postId,
  postSlug,
  reviews,
  count,
  page,
  pageSize,
}: {
  postId: string;
  postSlug: string;
  reviews: Review[];
  count: number | null;
  page: number;
  pageSize: number;
}) {
  const totalPages = count ? Math.ceil(count / pageSize) : 1;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Avis des lecteurs</h2>
        <p className="text-sm text-muted-foreground">
          Partagez votre experience et aidez la communaute.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aucun avis approuve pour le moment.</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-border/60 bg-background/80 p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">
                  {review.name || "Lecteur anonyme"}
                </p>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{review.message}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                {new Date(review.created_at).toLocaleDateString("fr-FR")}
              </p>
            </div>
          ))
        )}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath={`/articles/${postSlug}`}
        pageParam="reviewsPage"
      />
      <div className="rounded-3xl border border-border/60 bg-background/80 p-6">
        <h3 className="text-lg font-semibold">Laisser un avis</h3>
        <p className="text-sm text-muted-foreground">
          Votre message sera verifie avant publication.
        </p>
        <div className="mt-4">
          <ReviewForm postId={postId} />
        </div>
      </div>
    </section>
  );
}
