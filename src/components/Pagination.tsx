import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  queryString,
  pageParam = "page",
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
  queryString?: string;
  pageParam?: string;
}) {
  if (totalPages <= 1) return null;

  const buildHref = (page: number) => {
    const params = new URLSearchParams(queryString || "");
    params.set(pageParam, String(page));
    return `${basePath}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-between">
      {currentPage <= 1 ? (
        <Button variant="outline" disabled>
          Precedent
        </Button>
      ) : (
        <Button asChild variant="outline">
          <Link href={buildHref(currentPage - 1)}>Precedent</Link>
        </Button>
      )}
      <span className="text-sm text-muted-foreground">
        Page {currentPage} sur {totalPages}
      </span>
      {currentPage >= totalPages ? (
        <Button variant="outline" disabled>
          Suivant
        </Button>
      ) : (
        <Button asChild variant="outline">
          <Link href={buildHref(currentPage + 1)}>Suivant</Link>
        </Button>
      )}
    </div>
  );
}
