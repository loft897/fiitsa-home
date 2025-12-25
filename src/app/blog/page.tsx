import type { Metadata } from "next";

export { default } from "../articles/page";

export const metadata: Metadata = {
  title: "Blog",
  description: "Retrouvez les articles Fiitsa sur l'e-commerce, l'IA et la business en ligne en Afrique.",
  alternates: {
    canonical: "https://fiitsa.com/blog",
  },
};

export const revalidate = 120;
