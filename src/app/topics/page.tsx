import type { Metadata } from "next";
import Link from "next/link";
import { topics } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Topics",
  description: "Pages piliers pour explorer les sujets e-commerce et IA en Afrique.",
  alternates: {
    canonical: "https://www.fiitsa.com/topics",
  },
  openGraph: {
    title: "Topics",
    description: "Pages piliers pour explorer les sujets e-commerce et IA en Afrique.",
    url: "https://www.fiitsa.com/topics",
    type: "website",
    images: [
      {
        url: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
        width: 1200,
        height: 630,
        alt: "Fiitsa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Topics",
    description: "Pages piliers pour explorer les sujets e-commerce et IA en Afrique.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
};

export default function TopicsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Topics</h1>
      <p className="text-sm text-muted-foreground">
        Explore les pages piliers et les articles associ?s.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/topics/${topic.slug}`}
            className="rounded-2xl border border-border/60 bg-background/80 p-4 hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold">{topic.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{topic.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
