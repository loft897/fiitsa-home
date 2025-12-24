import { SearchClient } from "@/components/SearchClient";
import { listPosts } from "@/lib/posts";

export const revalidate = 120;

export default async function SearchPage() {
  const { data } = await listPosts({ pageSize: 200 });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Recherche</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Trouvez rapidement un sujet, un tag ou une categorie.
        </p>
      </div>
      <SearchClient posts={data} />
    </div>
  );
}
