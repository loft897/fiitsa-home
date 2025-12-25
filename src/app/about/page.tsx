import type { Metadata } from "next";
import AboutClient from "@/app/about/AboutClient";

export const metadata: Metadata = {
  title: "A propos de Fiitsa",
  description:
    "Decouvrez la mission de Fiitsa et notre engagement pour l'entrepreneuriat africain.",
  alternates: {
    canonical: "https://fiitsa.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
