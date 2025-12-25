import type { Metadata } from "next";
import { Suspense } from "react";
import HomeClient from "@/app/HomeClient";

const ogImage = "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png";

export const metadata: Metadata = {
  title: "Fiitsa - Ta boutique. Tes rиgles. Tes gains.",
  description:
    "Plateforme de vente en ligne adaptée au marché africain. Vends tes produits physiques et digitaux, et services avec seulement 7% de commission. Mobile Money intйgrй dans 13 pays.",
  alternates: {
    canonical: "https://fiitsa.com",
  },
  openGraph: {
    title: "Fiitsa - Ta boutique. Tes rиgles. Tes gains.",
    description:
      "Plateforme de vente en ligne adaptée au marché africain. Vends tes produits physiques et digitaux, et services avec seulement 7% de commission. Mobile Money intйgrй dans 13 pays.",
    url: "https://fiitsa.com",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Fiitsa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiitsa - Ta boutique. Tes rиgles. Tes gains.",
    description:
      "Plateforme de vente en ligne adaptйe au marchй africain. Vends tes produits physiques et digitaux, et services avec seulement 7% de commission. Mobile Money intйgrй dans 13 pays.",
    images: [ogImage],
  },
};

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeClient />
    </Suspense>
  );
}
