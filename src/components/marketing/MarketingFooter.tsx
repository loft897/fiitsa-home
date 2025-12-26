"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Music, Phone } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function MarketingFooter() {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#2D0A49] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png"
                alt="Fiitsa"
                className="h-14 w-14 rounded-xl object-cover"
              />
              <span className="text-xl font-bold">Fiitsa</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              {language === "fr" ? "Ta boutique. Tes règles. Tes gains." : "Your store. Your rules. Your profits."}
            </p>
            <p className="text-xs text-gray-400">
              {language === "fr"
                ? "Plateforme de vente en ligne adaptée au marché africain"
                : "Online sales platform adapted to the African market"}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">{language === "fr" ? "Navigation" : "Navigation"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 transition-colors hover:text-fiitsa-gold">
                  {language === "fr" ? "Accueil" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-300 transition-colors hover:text-fiitsa-gold">
                  {language === "fr" ? "Fonctionnalités" : "Features"}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 transition-colors hover:text-fiitsa-gold">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://app.fiitsa.com/shopping?utm_source=home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-fiitsa-gold"
                >
                  Shopping
                </a>
              </li>
              <li>
                <Link
                  href="/logistics-partners"
                  className="text-gray-300 transition-colors hover:text-fiitsa-gold"
                >
                  {language === "fr" ? "Partenaires Logistiques" : "Logistics Partners"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 transition-colors hover:text-fiitsa-gold">
                  {language === "fr" ? "? propos" : "About"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 transition-colors hover:text-fiitsa-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">{language === "fr" ? "Légal" : "Légal"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-300 transition-colors hover:text-fiitsa-gold">
                  {language === "fr" ? "Confidentialité" : "Privacy"}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 transition-colors hover:text-fiitsa-gold">
                  {language === "fr" ? "Conditions d'utilisation" : "Terms of use"}
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-300 transition-colors hover:text-fiitsa-gold">
                  {language === "fr" ? "Mentions légales" : "Legal notice"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-fiitsa-gold" />
                <a
                  href="mailto:hello@fiitsa.com"
                  className="text-gray-300 transition-colors hover:text-fiitsa-gold"
                >
                  hello@fiitsa.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-fiitsa-gold" />
                <a
                  href="https://wa.me/33763477907"
                  className="text-gray-300 transition-colors hover:text-fiitsa-gold"
                >
                  +33 7 63 47 79 07
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 text-fiitsa-gold" />
                <span className="text-gray-300">
                  {language === "fr"
                    ? "1704 LLANO ST STE B-1430, SANTA FE, Nouveau-Mexique, 87505, États-Unis"
                    : "1704 LLANO ST STE B-1430, SANTA FE, New Mexico, 87505, USA"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row">
          <div className="mb-4 flex space-x-4 md:mb-0">
            <a href="https://web.facebook.com/fiitsa" className="text-gray-400 transition-colors hover:text-fiitsa-gold">
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/fiitsa_officiel/"
              className="text-gray-400 transition-colors hover:text-fiitsa-gold"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@fiitsa_off"
              className="text-gray-400 transition-colors hover:text-fiitsa-gold"
            >
              <Music className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            {new Date().getFullYear()} Fiitsa. {language === "fr" ? "Tous droits reservés." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
