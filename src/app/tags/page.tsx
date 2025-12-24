import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getTags } from "@/lib/posts";

export const revalidate = 300;

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Tags</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Explorez les articles par tags.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-sm">
            <Link href={`/tags/${tag}`}>{tag}</Link>
          </Badge>
        ))}
      </div>
    </div>
  );
}
