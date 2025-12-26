import type { Metadata } from "next";
import { Suspense } from "react";
import HomeClient from "@/app/HomeClient";

const ogImage =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png";

export const metadata: Metadata = {
  title: "Fiitsa - Ta boutique en ligne africaine, Mobile Money & IA",
  description:
    "Fiitsa est une plateforme e-commerce africaine pour vendre produits et services, encaisser via Mobile Money, WhatsApp et carte, avec 7% de commission.",
  alternates: {
    canonical: "https://www.fiitsa.com",
  },
  openGraph: {
    title: "Fiitsa - Ta boutique en ligne africaine, Mobile Money & IA",
    description:
      "Fiitsa est une plateforme e-commerce africaine pour vendre produits et services, encaisser via Mobile Money, WhatsApp et carte, avec 7% de commission.",
    url: "https://www.fiitsa.com",
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
    title: "Fiitsa - Ta boutique en ligne africaine, Mobile Money & IA",
    description:
      "Fiitsa est une plateforme e-commerce africaine pour vendre produits et services, encaisser via Mobile Money, WhatsApp et carte, avec 7% de commission.",
    images: [ogImage],
  },
};

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">Fiitsa - Ta boutique en ligne africaine</h1>
      <Suspense fallback={null}>
        <HomeClient />
      </Suspense>
    </>
  );
}
