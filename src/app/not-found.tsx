import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-semibold">Page introuvable</h1>
      <p className="text-sm text-muted-foreground">
        La page que vous cherchez nexiste pas ou a ete deplacee.
      </p>
      <Button asChild>
        <Link href="/">Retour a laccueil</Link>
      </Button>
    </div>
  );
}
