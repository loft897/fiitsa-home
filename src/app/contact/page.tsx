import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Une question ou une proposition ? Ecrivez-nous.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <form className="space-y-4 rounded-[28px] border border-border/60 bg-background/80 p-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nom</label>
            <Input placeholder="Votre nom" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="vous@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea rows={4} placeholder="Votre message" />
          </div>
          <Button type="submit">Envoyer</Button>
        </form>
        <div className="space-y-4 rounded-[28px] border border-border/60 bg-background/80 p-6">
          <p className="text-sm font-semibold">Autres contacts</p>
          <p className="text-sm text-muted-foreground">
            Vous pouvez egalement nous joindre sur notre site principal.
          </p>
          <Button asChild variant="outline">
            <Link href="https://fiitsa.com" target="_blank" rel="noreferrer">
              Visiter fiitsa.com
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
