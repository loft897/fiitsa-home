"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { language } = useLanguage();

  const content =
    language === "fr"
      ? {
          title: "Page introuvable",
          description: "La page que vous cherchez n'existe pas ou a été déplacée.",
          cta: "Retour à l'accueil",
        }
      : {
          title: "Page not found",
          description: "The page you are looking for does not exist or has been moved.",
          cta: "Back to home",
        };

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-semibold">{content.title}</h1>
      <p className="text-sm text-muted-foreground">{content.description}</p>
      <Button asChild>
        <Link href="/">{content.cta}</Link>
      </Button>
    </div>
  );
}
