import Link from "next/link";

export type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && <span className="text-muted-foreground">/</span>}
            <Link href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
