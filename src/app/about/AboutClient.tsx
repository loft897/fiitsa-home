"use client";

import { useEffect } from "react";
import MarketingLayout from "@/components/marketing/MarketingLayout";
import { Target, Users, Lightbulb, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

export default function AboutClient() {
  const { language } = useLanguage();

  const values = [
    {
      icon: Users,
      title: language === "fr" ? "Communauté" : "Community",
      description:
        language === "fr"
          ? "Nous croyons en la force de l'entrepreneuriat africain et construisons une communauté¸ solidaire."
          : "We believe in the power of African entrepreneurship and build a supportive community.",
    },
    {
      icon: Lightbulb,
      title: language === "fr" ? "Simplicité" : "Simplicity",
      description:
        language === "fr"
          ? "Nous rendons la technologie accessible à tous, sans compromis sur la puissance."
          : "We make technology accessible to everyone, without compromising on power.",
    },
    {
      icon: Target,
      title: language === "fr" ? "Innovation" : "Innovation",
      description:
        language === "fr"
          ? "Nous développons des solutions uniques adaptées aux réalités du marché africain."
          : "We develop unique solutions adapted to the realities of the African market.",
    },
    {
      icon: Heart,
      title: language === "fr" ? "Impact" : "Impact",
      description:
        language === "fr"
          ? "Nous mesurons notre succès par celui de nos utilisateurs et l'impact économique créé."
          : "We measure our success by that of our users and the economic impact created.",
    },
  ];

  useEffect(() => {
    document.title = language === "fr" ? "À propos de Fiitsa" : "About Fiitsa";
    const description =
      document.querySelector('meta[name="description"]') || document.createElement("meta");
    description.setAttribute("name", "description");
    description.setAttribute(
      "content",
      language === "fr"
        ? "Découvrez la mission de Fiitsa et notre engagement pour l'entrepreneuriat africain."
        : "Discover Fiitsa's mission and our commitment to African entrepreneurship."
    );
    if (!description.parentNode) {
      document.head.appendChild(description);
    }
  }, [language]);

  return (
    <MarketingLayout>
      <section className="bg-gradient-to-br from-fiitsa-light via-white to-fiitsa-light py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-fiitsa-dark md:text-5xl">
            {language === "fr" ? "Notre mission :" : "Our mission:"}
            <span className="bg-gradient-to-r from-fiitsa-purple to-fiitsa-purple-light bg-clip-text text-transparent">
              {language === "fr" ? " démocratiser le digital" : " democratize digital"}
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl">
            {language === "fr"
              ? "Fiitsa est née d'une conviction : chaque créateur africain mérite les meilleurs outils pour réussir en ligne, sans les barrières traditionnelles."
              : "Fiitsa was born from a conviction: every African creator deserves the best tools to succeed online, without traditional barriers."}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-fiitsa-dark">
                {language === "fr" ? "L'histoire de Fiitsa" : "Fiitsa's story"}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {language === "fr"
                    ? "En 2024, nous avons observé un problème récurrent : les entrepreneurs africains utilisaient des plateformes qui ne comprenaient pas leurs besoins. Commissions exorbitantes, absence de Mobile Money, support inexistant, recours & plusieurs plateformes pour la gestion de leur business..."
                    : "In 2024, we observed a recurring problem: African entrepreneurs were using platforms that didn't understand their needs. Exorbitant commissions, no Mobile Money, non-existent support, reliance on multiple platforms to manage their business..."}
                </p>
                <p>
                  {language === "fr"
                    ? "C'est ainsi qu'est née Fiitsa - littéralement 'vends ici' en langue Nguemba, langue locale parlée dans le département de la Mifi et plusieurs autres départements de la région de l'Ouest Cameroun. Notre objectif était simple : créer la première plateforme e-business couplée & l'IA vraiment adaptée au marché africain."
                    : "This is how Fiitsa was born - literally 'sell here' in Nguemba language, a local language spoken in the Mifi department and several other departments in the West region of Cameroon. Our goal was simple: to create the first AI-powered e-business platform truly adapted to the African market."}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-fiitsa-purple/10 to-fiitsa-gold/10 p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-fiitsa-purple">25+</div>
                    <div className="text-sm text-gray-600">
                      {language === "fr" ? "Créateurs actifs" : "Active creators"}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-fiitsa-purple">FCFA 10M+</div>
                    <div className="text-sm text-gray-600">
                      {language === "fr" ? "Revenus générés" : "Revenue generated"}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-fiitsa-purple">15</div>
                    <div className="text-sm text-gray-600">
                      {language === "fr" ? "Pays couverts" : "Countries covered"}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-fiitsa-purple">4.9/5</div>
                    <div className="text-sm text-gray-600">
                      {language === "fr" ? "Sur 18+ avis" : "On 18+ reviews"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-fiitsa-dark">
              {language === "fr" ? "Nos valeurs" : "Our values"}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {language === "fr"
                ? "Ce qui nous guide chaque jour dans la construction de Fiitsa"
                : "What guides us every day in building Fiitsa"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center transition-all duration-300 hover:shadow-lg">
                <CardContent className="space-y-4 p-6">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-fiitsa-purple to-fiitsa-purple-light">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-fiitsa-dark">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fiitsa-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {language === "fr" ? "Notre vision pour 2026" : "Our vision for 2026"}
          </h2>
          <p className="mb-8 text-lg text-gray-300 leading-relaxed">
            {language === "fr"
              ? "Devenir la plateforme de référence pour l'entrepreneuriat digital en Afrique, en aidant 10 000 créateurs & générer plus de 1 millions de dollars de revenus collectifs."
              : "Become the reference platform for digital entrepreneurship in Africa, helping 10,000 creators generate over 100 million dollars in collective revenue."}
          </p>
          <a href="https://app.fiitsa.com/register" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-fiitsa-gold font-semibold text-fiitsa-dark hover:bg-fiitsa-gold/90">
              {language === "fr" ? "Rejoindre l'aventure" : "Join the adventure"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </MarketingLayout>
  );
}
