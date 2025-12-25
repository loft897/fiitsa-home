"use client";

import { useEffect } from "react";
import {
  ShoppingBag,
  CreditCard,
  BarChart3,
  Megaphone,
  MessageSquare,
  Smartphone,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useLinkWithUTM } from "@/hooks/useLinkWithUTM";
import { useLanguage } from "@/hooks/useLanguage";

export default function FeaturesClient() {
  const { createExternalLink, createLink } = useLinkWithUTM();
  const { language } = useLanguage();
  const registerUrl = createExternalLink("https://app.fiitsa.com/register");
  const premiumUrl = createExternalLink("https://app.fiitsa.com/register?plan=premium");
  const betaUrl = createLink("/beta-testing-program");

  useEffect(() => {
    document.title =
      language === "fr"
        ? "FonctionnalitÇ¸s Fiitsa - Vendre en ligne en Afrique"
        : "Fiitsa Features - Sell online in Africa";
    const description =
      document.querySelector('meta[name="description"]') || document.createElement("meta");
    description.setAttribute("name", "description");
    description.setAttribute(
      "content",
      language === "fr"
        ? "DÇ¸couvre les fonctionnalitÇ¸s Fiitsa pour vendre produits, services et formations. Paiements Mobile Money, IA, marketing, et plus."
        : "Discover Fiitsa features to sell products, services and training. Mobile Money payments, AI, marketing, and more."
    );
    if (!description.parentNode) {
      document.head.appendChild(description);
    }
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", "https://fiitsa.com/features");
    if (!canonical.parentNode) {
      document.head.appendChild(canonical);
    }
  }, [language]);

  const steps = [
    {
      icon: Smartphone,
      title: language === "fr" ? "Inscris-toi gratuitement (30 sec)" : "Sign up for free (30 sec)",
      desc:
        language === "fr"
          ? "CrÇ¸e ton compte en quelques clics et accÇùde Çÿ ton tableau de bord."
          : "Create your account in a few clicks and access your dashboard.",
    },
    {
      icon: ShoppingBag,
      title:
        language === "fr" ? "Ajoute ton produit ou service (2 min)" : "Add your product or service (2 min)",
      desc:
        language === "fr"
          ? "Produits physiques, numÇ¸riques, services, formations - tout est prÇ¦t."
          : "Physical products, digital, services, training - everything is ready.",
    },
    {
      icon: CreditCard,
      title:
        language === "fr"
          ? "Encaisse avec Mobile Money (+13 pays africains) ou carte bancaire"
          : "Collect with Mobile Money (+13 African countries) or bank card",
      desc:
        language === "fr"
          ? "Active les paiements et reÇõois tes fonds sous 48h."
          : "Activate payments and receive your funds within 48h.",
    },
  ];

  const categories = [
    {
      icon: ShoppingBag,
      title: language === "fr" ? "Produits & Services" : "Products & Services",
      bullets:
        language === "fr"
          ? ["Vends physique, digital, services, formations", "Gestion des variantes et stocks", "Pages produit optimisÇ¸es"]
          : ["Sell physical, digital, services, training", "Manage variants and inventory", "Optimized product pages"],
    },
    {
      icon: CreditCard,
      title: language === "fr" ? "Vente & Paiement" : "Sales & Payment",
      bullets:
        language === "fr"
          ? ["Mobile Money natif, cartes bancaires", "RÇ¸cupÇ¸ration paniers abandonnÇ¸s", "Upsell et coupons"]
          : ["Native Mobile Money, bank cards", "Abandoned cart recovery", "Upsell and coupons"],
    },
    {
      icon: BarChart3,
      title: language === "fr" ? "Analytiques & Suivi" : "Analytics & Tracking",
      bullets:
        language === "fr"
          ? ["Statistiques en temps rÇ¸el", "Suivi des conversions", "PrÇ¸dictions pilotÇ¸es par IA"]
          : ["Real-time statistics", "Conversion tracking", "AI-powered predictions"],
    },
    {
      icon: Megaphone,
      title: language === "fr" ? "Marketing & Automation" : "Marketing & Automation",
      bullets:
        language === "fr"
          ? ["Workflows automatisÇ¸s", "Programme d'affiliation", "A/B testing des pages"]
          : ["Automated workflows", "Affiliate program", "Page A/B testing"],
    },
    {
      icon: MessageSquare,
      title: language === "fr" ? "Communication Client" : "Customer Communication",
      bullets:
        language === "fr"
          ? ["WhatsApp Business intÇ¸grÇ¸", "Support omnicanal", "Templates de messages"]
          : ["Integrated WhatsApp Business", "Omnichannel support", "Message templates"],
    },
    {
      icon: Smartphone,
      title: language === "fr" ? "FonctionnalitÇ¸s avancÇ¸es" : "Advanced Features",
      bullets:
        language === "fr"
          ? ["Multi-boutiques", "API et intÇ¸grations", "Application mobile"]
          : ["Multi-stores", "API and integrations", "Mobile application"],
    },
  ];

  const advantages = [
    { label: language === "fr" ? "Commission Çÿ partir de 7%" : "Commission from 7%", fiitsa: true, competitor: false },
    { label: language === "fr" ? "Retraits en 48h" : "Withdrawals in 48h", fiitsa: true, competitor: false },
    { label: language === "fr" ? "Mobile Money natif" : "Native Mobile Money", fiitsa: true, competitor: false },
    { label: language === "fr" ? "IA intÇ¸grÇ¸e" : "Integrated AI", fiitsa: true, competitor: false },
  ];

  const stats = [
    { label: language === "fr" ? "Entrepreneurs actifs" : "Active entrepreneurs", value: "250+" },
    { label: language === "fr" ? "Revenus gÇ¸nÇ¸rÇ¸s en 2025" : "Revenue generated in 2025", value: "30M+ FCFA" },
    { label: language === "fr" ? "Pays africains" : "African countries", value: "13+" },
  ];

  return (
    <MarketingLayout>
      <header className="relative w-full overflow-hidden border-b bg-gradient-to-br from-fiitsa-purple via-fiitsa-purple-light to-fiitsa-gold/20">
        <div className="container mx-auto relative z-10 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
              {language === "fr"
                ? "La seule plateforme de vente en ligne pensÇ¸e pour les entrepreneurs africains"
                : "The only online sales platform designed for African entrepreneurs"}
            </h1>
            <p className="text-base font-medium text-white/90 md:text-lg">
              {language === "fr"
                ? "Vends produits physiques, numÇ¸riques, services et formations... tout en un seul endroit."
                : "Sell physical products, digital, services and training... all in one place."}
            </p>
            <div className="pt-2">
              <a href={registerUrl}>
                <Button size="lg" className="bg-fiitsa-gold font-bold text-fiitsa-dark shadow-xl hover:bg-fiitsa-gold/90">
                  {language === "fr" ? "CRÇ%ER MA BOUTIQUE GRATUITEMENT" : "CREATE MY FREE STORE"}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {language === "fr" ? "Comment Çõa marche" : "How it works"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {language === "fr" ? "3 Ç¸tapes simples pour te lancer" : "3 simple steps to get started"}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, desc }) => (
              <Card
                key={title}
                className="h-full border-fiitsa-purple/20 transition-all duration-300 hover:bg-gradient-to-br hover:from-fiitsa-purple/10 hover:to-fiitsa-gold/10 hover:shadow-lg hover:shadow-fiitsa-purple/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-fiitsa-purple" />
                    <CardTitle className="text-base md:text-lg">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={registerUrl}>
              <Button size="lg" className="bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light font-bold text-white shadow-lg">
                {language === "fr" ? "JE COMMENCE MA BOUTIQUE" : "I START MY STORE"}
              </Button>
            </a>
          </div>
        </section>

        <section className="border-t bg-gradient-to-br from-fiitsa-light via-fiitsa-purple/5 to-fiitsa-gold/10">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="text-2xl font-semibold md:text-3xl">
                {language === "fr" ? "6 catÇ¸gories puissantes" : "6 powerful categories"}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {language === "fr"
                  ? "Chaque outil au bon endroit, pour convertir plus"
                  : "Every tool in the right place, to convert more"}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.map(({ icon: Icon, title, bullets }) => (
                <Card
                  key={title}
                  className="h-full border-fiitsa-purple/20 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-fiitsa-purple/10 hover:to-fiitsa-gold/10 hover:shadow-xl hover:shadow-fiitsa-purple/10"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-fiitsa-purple" />
                      <CardTitle className="text-base md:text-lg">{title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-fiitsa-gold" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={registerUrl}>
                <Button size="lg" className="bg-fiitsa-gold font-bold text-fiitsa-dark shadow-xl hover:bg-fiitsa-gold/90">
                  {language === "fr" ? "DÇ%MARRER GRATUITEMENT" : "START FREE"}
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">{language === "fr" ? "Option Premium" : "Premium Option"}</h2>
            <p className="mt-2 font-semibold text-fiitsa-purple-light">
              {language === "fr"
                ? "IA + Meta Ads Automation - 49 900 FCFA/mois"
                : "AI + Meta Ads Automation - 49,900 FCFA/month"}
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <Card className="border-fiitsa-purple/20 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">{language === "fr" ? "Ce que tu obtiens" : "What you get"}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-fiitsa-gold" />
                    <span>
                      {language === "fr"
                        ? "Agent IA personnalisÇ¸ (rÇ¸ponses automatiques, relances)"
                        : "Personalized AI agent (automatic responses, follow-ups)"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-fiitsa-gold" />
                    <span>
                      {language === "fr" ? "Automatisation WhatsApp Business" : "WhatsApp Business automation"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-fiitsa-gold" />
                    <span>
                      {language === "fr"
                        ? "Lancement auto de campagnes Meta Ads"
                        : "Auto launch of Meta Ads campaigns"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-fiitsa-gold" />
                    <span>
                      {language === "fr" ? "Gestion rÇ¸seaux sociaux complÇùte" : "Complete social media management"}
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-fiitsa-gold/40 bg-gradient-to-br from-fiitsa-gold/10 to-fiitsa-purple/10 shadow-xl shadow-fiitsa-gold/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">{language === "fr" ? "Passe en Premium" : "Go Premium"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {language === "fr"
                    ? "Boost tes ventes grÇ½ce Çÿ l'automatisation IA et des publicitÇ¸s intelligentes."
                    : "Boost your sales with AI automation and smart advertising."}
                </p>
                <a href={premiumUrl}>
                  <Button size="lg" className="w-full">
                    {language === "fr" ? "ACTIVER L'OPTION PREMIUM" : "ACTIVATE PREMIUM OPTION"}
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-t bg-gradient-to-br from-fiitsa-purple/10 via-fiitsa-light to-fiitsa-gold/10">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="text-2xl font-semibold md:text-3xl">
                {language === "fr" ? "Fiitsa vs Concurrence" : "Fiitsa vs Competition"}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {language === "fr" ? "Ce qui fait la diffÇ¸rence" : "What makes the difference"}
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="grid grid-cols-3 rounded-md bg-gradient-to-r from-fiitsa-purple/10 to-fiitsa-gold/10 py-3 text-sm font-medium">
                <div></div>
                <div className="text-center">Fiitsa</div>
                <div className="text-center">{language === "fr" ? "Concurrence" : "Competition"}</div>
              </div>
              <div className="mt-4 space-y-3">
                {advantages.map((row) => (
                  <div key={row.label} className="grid grid-cols-3 items-center rounded-md border bg-background px-3 py-3">
                    <div className="font-medium">{row.label}</div>
                    <div className="flex justify-center">
                      {row.fiitsa ? (
                        <CheckCircle2 className="h-5 w-5 text-fiitsa-gold" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {row.competitor ? (
                        <CheckCircle2 className="h-5 w-5 text-fiitsa-gold" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto bg-gradient-to-br from-fiitsa-light to-fiitsa-purple/5 px-4 py-12 md:py-16">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {language === "fr" ? "Preuves sociales & chiffres clÇ¸s" : "Social proof & key figures"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {language === "fr"
                ? "Des rÇ¸sultats concrets, une communautÇ¸ engagÇ¸e"
                : "Concrete results, an engaged community"}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((s) => (
              <Card
                key={s.label}
                className="border-fiitsa-purple/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-fiitsa-purple/10 hover:to-fiitsa-gold/10 hover:shadow-xl hover:shadow-fiitsa-purple/20"
              >
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-fiitsa-purple to-fiitsa-gold bg-clip-text text-2xl font-bold text-transparent">
                    {s.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-fiitsa-purple-light to-fiitsa-purple font-bold text-white shadow-lg">
              <Link href="/contact">
                {language === "fr" ? "REJOINDRE LA COMMUNAUTÇ%" : "JOIN THE COMMUNITY"}
              </Link>
            </Button>
          </div>
        </section>

        <section className="relative overflow-hidden border-t bg-gradient-to-r from-fiitsa-purple via-fiitsa-gold/30 to-fiitsa-purple-light">
          <div className="container mx-auto relative z-10 px-4 py-12 text-center md:py-16">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-2xl font-semibold text-white drop-shadow-lg md:text-3xl">
                {language === "fr"
                  ? "Offre de lancement : 90 jours sans commission, sans engagement"
                  : "Launch offer: 90 days without commission, no commitment"}
              </h2>
              <p className="text-muted-foreground">
                {language === "fr"
                  ? "Profite de l'offre maintenant, crÇ¸e ta boutique en moins de 3 minutes."
                  : "Take advantage of the offer now, create your store in less than 3 minutes."}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gray-300 font-bold text-gray-500 shadow-2xl hover:bg-gray-300"
              >
                <Link href={betaUrl} className="pointer-events-none cursor-not-allowed">
                  {language === "fr"
                    ? "VENDRE SANS COMMISSION PENDANT 3 MOIS"
                    : "SELL WITHOUT COMMISSION FOR 3 MONTHS"}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
