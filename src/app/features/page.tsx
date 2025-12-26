import type { Metadata } from "next";
import { Suspense } from "react";
import FeaturesClient from "@/app/features/FeaturesClient";

export const metadata: Metadata = {
  title: "Fonctionnalites Fiitsa",
  description:
    "Découvrez les fonctionnalités Fiitsa pour vendre produits, services et formations en Afrique.",
  alternates: {
    canonical: "https://www.fiitsa.com/features",
  },
  openGraph: {
    title: "Fonctionnalites Fiitsa",
    description:
      "Découvrez les fonctionnalités Fiitsa pour vendre produits, services et formations en Afrique.",
    url: "https://www.fiitsa.com/features",
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
    title: "Fonctionnalites Fiitsa",
    description:
      "Découvrez les fonctionnalités Fiitsa pour vendre produits, services et formations en Afrique.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
};

export default function FeaturesPage() {
  return (
    <>
      <h1 className="sr-only">Fonctionnalites Fiitsa</h1>
      <Suspense fallback={null}>
        <FeaturesClient />
      </Suspense>
    </>
  );
}
