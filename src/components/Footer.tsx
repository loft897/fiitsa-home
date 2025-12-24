import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/fiitsa-logo.png"
              alt="Fiitsa"
              width={40}
              height={40}
              className="rounded-[10px]"
            />
            <div>
              <p className="text-base font-semibold">Fiitsa Blog</p>
              <p className="text-sm text-muted-foreground">
                Strategie, croissance et operations pour restaurants.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Fiitsa. Tous droits reserves.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Navigation</p>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <Link href="/articles">Articles</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/tags">Tags</Link>
            <Link href="/about">A propos</Link>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Fiitsa</p>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <Link href="https://fiitsa.com" target="_blank" rel="noreferrer">
              Site principal
            </Link>
            <Link href="https://app.fiitsa.com" target="_blank" rel="noreferrer">
              Aller sur Fiitsa
            </Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
