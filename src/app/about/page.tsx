import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">A propos de Fiitsa</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Fiitsa accompagne les restaurateurs avec une plateforme moderne pour accelerer la croissance.
        </p>
      </div>
      <div className="space-y-4 rounded-[28px] border border-border/60 bg-background/80 p-6">
        <p className="text-base text-muted-foreground">
          Notre mission est de simplifier les operations et dactiver des leviers concrets pour augmenter les revenus.
          Le blog Fiitsa partage les meilleures pratiques, des analyses et des retours terrain.
        </p>
        <Button asChild>
          <Link href="https://fiitsa.com" target="_blank" rel="noreferrer">
            En savoir plus sur Fiitsa
          </Link>
        </Button>
      </div>
    </div>
  );
}
