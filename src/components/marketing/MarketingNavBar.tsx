"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLinkWithUTM } from "@/hooks/useLinkWithUTM";
import { useLanguage, t } from "@/hooks/useLanguage";

const FR_FLAG =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Flag_of_France.svg";
const US_FLAG =
  "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Flag_of_the_United_States_(DDD-F-416E_specifications).svg";

const navItems = [
  { label: { fr: "Accueil", en: "Home" }, href: "/" },
  { label: { fr: "Fonctionnalités", en: "Features" }, href: "/features" },
  { label: { fr: "Blog", en: "Blog" }, href: "/blog" },
  {
    label: { fr: "Shopping", en: "Shopping" },
    href: "https://app.fiitsa.com/shopping",
    external: true,
  },
  {
    label: { fr: "Partenaires", en: "Partners" },
    href: "/logistics-partners",
    disabled: true,
  },
  {
    label: { fr: "WhatsApp", en: "WhatsApp" },
    href: "/whatsapp-pricing",
  },
];

export function MarketingNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { createLink, createExternalLink } = useLinkWithUTM();
  const { language, toggleLanguage } = useLanguage();

  const isActive = (path: string) => {
    if (path === "/blog") {
      return pathname.startsWith("/blog") || pathname.startsWith("/articles");
    }
    return pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={createLink("/")} className="flex items-center space-x-3">
            <Image
              src="https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png"
              alt="Fiitsa"
              width={56}
              height={56}
              className="h-14 w-14 rounded-xl object-cover bg-gray-100"
              priority
            />
            <span className="text-xl font-bold text-fiitsa-dark">Fiitsa</span>
          </Link>

          <div className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={createExternalLink(item.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-fiitsa-purple"
                >
                  {t(item.label, language)}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.disabled ? "#" : createLink(item.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    item.disabled
                      ? "cursor-not-allowed text-gray-300 pointer-events-none"
                      : isActive(item.href)
                      ? "text-fiitsa-purple"
                      : "text-gray-600 hover:text-fiitsa-purple"
                  }`}
                >
                  {t(item.label, language)}
                </Link>
              )
            )}
          </div>

          <button
            onClick={toggleLanguage}
            className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-gray-200 transition-all duration-300 hover:border-fiitsa-purple md:hidden"
            aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
          >
            <Image
              src={language === "fr" ? US_FLAG : FR_FLAG}
              alt={language === "fr" ? "English" : "Français"}
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </button>

          <div className="hidden items-center space-x-4 md:flex">
            <a
              href={createExternalLink("https://app.fiitsa.com?utm_source=marketing_navbar")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-fiitsa-purple"
            >
              {language === "fr" ? "Se connecter" : "Sign in"}
            </a>
            <a
              href={createExternalLink("https://app.fiitsa.com/register?utm_source=marketing_navbar")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light text-base text-white hover:from-fiitsa-purple/90 hover:to-fiitsa-purple-light/90">
                {language === "fr" ? "Démarrer gratuitement" : "Start for free"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <button
              onClick={toggleLanguage}
              className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-gray-200 transition-all duration-300 hover:scale-110 hover:border-fiitsa-purple hover:shadow-lg"
              aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
            >
              <Image
                src={language === "fr" ? US_FLAG : FR_FLAG}
                alt={language === "fr" ? "English" : "Français"}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 transition-colors hover:text-fiitsa-purple"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 border-t border-gray-100 px-2 pb-3 pt-2">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={createExternalLink(item.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-base font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-50 hover:text-fiitsa-purple"
                  >
                    {t(item.label, language)}
                  </a>
                ) : (
                <Link
                  key={item.href}
                  href={item.disabled ? "#" : createLink(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    item.disabled
                      ? "cursor-not-allowed text-gray-300 pointer-events-none"
                      : isActive(item.href)
                      ? "bg-fiitsa-light text-fiitsa-purple"
                      : "text-gray-600 hover:bg-gray-50 hover:text-fiitsa-purple"
                  }`}
                >
                    {t(item.label, language)}
                  </Link>
                )
              )}
              <div className="space-y-2 pt-4 md:hidden">
                <button
                  onClick={toggleLanguage}
                  className="flex w-full items-center gap-2 px-3 py-2 text-base font-medium text-gray-600 hover:text-fiitsa-purple"
                >
                  <Image
                    src={language === "fr" ? US_FLAG : FR_FLAG}
                    alt={language === "fr" ? "English" : "Français"}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full border border-gray-200"
                  />
                  {language === "fr" ? "English" : "Français"}
                </button>
                <a
                  href={createExternalLink("https://app.fiitsa.com")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-fiitsa-purple"
                >
                  {language === "fr" ? "Se connecter" : "Sign in"}
                </a>
                <a
                  href={createExternalLink("https://app.fiitsa.com")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2"
                >
                  <Button className="w-full bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light text-base text-white">
                    {language === "fr" ? "Démarrer gratuitement" : "Start for free"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
