import Link from "next/link";
import { extractToc } from "@/lib/content";

export function TOC({ content }: { content: string }) {
  const items = extractToc(content);
  if (items.length === 0) return null;

  return (
    <aside className="rounded-2xl border border-border/60 bg-background/80 p-4">
      <p className="text-sm font-semibold">Sommaire</p>
      <div className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`block transition hover:text-foreground ${
              item.level === 3 ? "pl-4" : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}
