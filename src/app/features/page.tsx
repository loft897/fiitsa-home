import type { Metadata } from "next";
import { Suspense } from "react";
import FeaturesClient from "@/app/features/FeaturesClient";

export const metadata: Metadata = {
  title: "Fonctionnalités Fiitsa",
  description:
    "Découvrez les fonctionnalités Fiitsa pour vendre produits, services et formations en Afrique.",
  alternates: {
    canonical: "https://www.fiitsa.com/features",
  },
  openGraph: {
    title: "Fonctionnalités Fiitsa",
    description:
      "Découvrez les fonctionnalit?s Fiitsa pour vendre produits, services et formations en Afrique.",
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
    title: "Fonctionnalit?s Fiitsa",
    description:
      "Découvrez les fonctionnalit?s Fiitsa pour vendre produits, services et formations en Afrique.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
};

export default function FeaturesPage() {
  return (
    <>
      <h1 className="sr-only">Fonctionnalités Fiitsa</h1>
      <section className="sr-only">
        <h2>Fonctionnalités clés</h2>
        <p>
          Fiitsa permet de créer une boutique en ligne, vendre des produits physiques ou digitaux,
          accepter le Mobile Money et les cartes, et gérer le marketing et les conversions.
        </p>
        <ul>
          <li>Gestion produits et variantes, pages optimiées et catalogue.</li>
          <li>Paiements Mobile Money, cartes bancaires et récupération paniers.</li>
          <li>Automatisation WhatsApp Business, campagnes et affiliation.</li>
          <li>Statistiques et suivi des conversions pour piloter la croissance.</li>
        </ul>
      </section>
      <Suspense fallback={null}>
        <FeaturesClient />
      </Suspense>
    </>
  );
}
