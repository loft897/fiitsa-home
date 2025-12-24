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
      <Button asChild variant="outline" disabled={currentPage <= 1}>
        <Link href={buildHref(Math.max(1, currentPage - 1))}>Precedent</Link>
      </Button>
      <span className="text-sm text-muted-foreground">
        Page {currentPage} sur {totalPages}
      </span>
      <Button asChild variant="outline" disabled={currentPage >= totalPages}>
        <Link href={buildHref(Math.min(totalPages, currentPage + 1))}>Suivant</Link>
      </Button>
    </div>
  );
}
