"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ArticlesFilters({
  categories,
  tags,
}: {
  categories: string[];
  tags: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [tag, setTag] = useState(searchParams.get("tag") || "all");
  const [sort, setSort] = useState(searchParams.get("sort") || "recent");

  useEffect(() => {
    setQuery(searchParams.get("query") || "");
  }, [searchParams]);

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (query) params.set("query", query);
    if (category && category !== "all") params.set("category", category);
    if (tag && tag !== "all") params.set("tag", tag);
    if (sort) params.set("sort", sort);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-4 md:grid-cols-4">
      <div className="relative md:col-span-2">
        <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Rechercher un article"
          className="pl-9"
        />
      </div>
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger>
          <SelectValue placeholder="Categorie" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Toutes les categories</SelectItem>
          {categories.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={tag} onValueChange={setTag}>
        <SelectTrigger>
          <SelectValue placeholder="Tag" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tous les tags</SelectItem>
          {tags.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="md:col-span-3">
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger>
            <SelectValue placeholder="Trier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Plus recents</SelectItem>
            <SelectItem value="popular">Plus populaires</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={applyFilters}>Appliquer</Button>
    </div>
  );
}
