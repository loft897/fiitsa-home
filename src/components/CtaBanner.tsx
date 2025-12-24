import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="rounded-[32px] border border-border/60 bg-gradient-to-br from-white via-white to-emerald-50 p-8 shadow-sm dark:from-card dark:to-muted">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Fiitsa pour les restaurants
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Pilotez la croissance avec une plateforme complete.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Centralisez les operations, fidelisez vos clients et boostez vos revenus.
          </p>
        </div>
        <Button asChild size="lg" className="self-start md:self-auto">
          <Link href="https://app.fiitsa.com" target="_blank" rel="noreferrer">
            Decouvrir Fiitsa
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
