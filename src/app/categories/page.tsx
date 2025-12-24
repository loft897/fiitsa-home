import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getCategories } from "@/lib/posts";

export const revalidate = 300;

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Categories</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Retrouvez tous nos sujets classes par categories.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge key={category} variant="secondary" className="text-sm">
            <Link href={`/categories/${category}`}>{category}</Link>
          </Badge>
        ))}
      </div>
    </div>
  );
}
