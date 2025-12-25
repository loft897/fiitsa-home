import { Suspense } from "react";
import FeaturesClient from "@/app/features/FeaturesClient";

export default function FeaturesPage() {
  return (
    <Suspense fallback={null}>
      <FeaturesClient />
    </Suspense>
  );
}
