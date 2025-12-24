"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Categories", href: "/categories" },
  { label: "Tags", href: "/tags" },
  { label: "A propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/fiitsa-logo.png"
            alt="Fiitsa"
            width={36}
            height={36}
            className="rounded-[10px]"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">Fiitsa Blog</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-foreground ${
                pathname === item.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link href="https://app.fiitsa.com" target="_blank" rel="noreferrer">
              Aller sur Fiitsa
            </Link>
          </Button>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/fiitsa-logo.png"
                  alt="Fiitsa"
                  width={36}
                  height={36}
                  className="rounded-[10px]"
                />
                <span className="text-lg font-semibold">Fiitsa Blog</span>
              </div>
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Button asChild className="w-full">
                <Link href="https://app.fiitsa.com" target="_blank" rel="noreferrer">
                  Aller sur Fiitsa
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
