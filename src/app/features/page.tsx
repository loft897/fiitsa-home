import type { Metadata } from "next";
import { Suspense } from "react";
import FeaturesClient from "@/app/features/FeaturesClient";

export const metadata: Metadata = {
  title: "Fonctionnalites Fiitsa",
  description:
    "Découvrez les fonctionnalites Fiitsa pour vendre produits, services et formations en Afrique.",
  alternates: {
    canonical: "https://fiitsa.com/features",
  },
};

export default function FeaturesPage() {
  return (
    <Suspense fallback={null}>
      <FeaturesClient />
    </Suspense>
  );
}
