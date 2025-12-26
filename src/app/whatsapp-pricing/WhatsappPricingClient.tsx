"use client";

import MarketingLayout from "@/components/marketing/MarketingLayout";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  ShoppingBag,
  Shield,
  HeadphonesIcon,
  Clock,
  Gift,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Calculator,
  Phone,
} from "lucide-react";
import PricingSimulator from "@/components/whatsapp-pricing/PricingSimulator";
import CallingSimulator from "@/components/whatsapp-pricing/CallingSimulator";

const translations = {
  fr: {
    meta: {
      title: "Tarifs WhatsApp Business API Afrique 2025 - Simulateur de prix | Fiitsa",
      description:
        "Découvrez les tarifs WhatsApp Business API pour l'Afrique en 2025. Simulateur de prix interactif, exemples concrets et astuces pour économiser. Marketing, Utilitaire, Authentification.",
      canonical: "https://www.fiitsa.com/whatsapp-pricing",
    },
    hero: {
      badge: "Mis à jour : décembre 2025",
      title: "Tarifs WhatsApp Business API",
      subtitle: "pour l'Afrique",
      description: "Comprendre les tarifs simplement avec des exemples concrets, un simulateur interactif et des astuces pour économiser.",
      templateNote:
        "Ces tarifs s'appliquent uniquement aux messages « templates ». Les réponses libres dans la fenêtre de 24 h sont GRATUITES.",
    },
    importantBanner: {
      title: "Important à savoir",
      text: "Seuls les messages « templates » (modèles pré-approuvés par WhatsApp) sont facturés. Quand un client t'écrit, tu as 24 h pour lui répondre librement (free-form) sans frais.",
    },
    types: {
      title: "Les 4 types de template WhatsApp",
      subtitle: "Seuls les templates sont payants — les réponses libres dans la fenêtre de 24 h sont gratuites",
      marketing: {
        name: "Marketing",
        description: "Promotions, offres, publicités, newsletters",
        rate: "$0.0225",
        rateFCFA: "13.5 FCFA",
        note: "Toujours payant",
      },
      utility: {
        name: "Utilitaire",
        description: "Confirmations de commande, suivi de livraison, mises à jour",
        rate: "$0.0040",
        rateFCFA: "2.4 FCFA",
        note: "Gratuit si le client t'a écrit",
      },
      authentication: {
        name: "Authentification",
        description: "Codes de vérification, OTP, connexion sécurisée",
        rate: "$0.0040",
        rateFCFA: "2.4 FCFA",
        note: "Paliers de volume disponibles",
      },
      service: {
        name: "Service (réponse libre)",
        description: "Réponses aux questions, support client",
        rate: "Gratuit",
        rateFCFA: "0 FCFA",
        note: "Uniquement dans la fenêtre de 24 h",
      },
    },
    howItWorks: {
      title: "Comment ça fonctionne ?",
      subtitle: "3 règles simples à retenir",
      rule1: {
        title: "La fenêtre de 24 heures",
        description:
          "Quand un client t'envoie un message, une fenêtre de 24 h s'ouvre. Pendant ce temps, tu peux lui répondre avec des messages utilitaires ou libres GRATUITEMENT.",
      },
      rule2: {
        title: "La fenêtre de 72 h (Free Entry Point)",
        description:
          "Si le client vient d'une pub Facebook ou Instagram (Click-to-WhatsApp), TOUS les messages sont gratuits pendant 72 heures !",
      },
      rule3: {
        title: "Les templates (seuls payants)",
        description:
          "Pour écrire à quelqu'un EN PREMIER (hors fenêtre), tu dois utiliser un template pré-approuvé. Les tarifs que tu vois ici concernent UNIQUEMENT ces templates. Les messages free-form dans la fenêtre 24 h = 0 FCFA.",
      },
    },
    pricing: {
      title: "Tarifs détaillés pour l'Afrique",
      subtitle: "Paliers de volume = plus tu envoies, moins tu paies",
      utilityTab: "Utilitaire",
      authTab: "Authentification",
      marketingTab: "Marketing",
      tableHeaders: {
        messages: "Messages/mois",
        rateUSD: "Tarif USD",
        rateFCFA: "Tarif FCFA",
        discount: "Réduction",
      },
    },
    examples: {
      title: "Exemples concrets",
      subtitle: "Calculs réels pour ton business",
      example1: {
        title: "Campagne promo à 1 000 clients",
        description: "Tu veux annoncer ton Black Friday",
        calculation: "1 000 x $0.0225 = $22.50",
        result: "13 500 FCFA",
      },
      example2: {
        title: "500 confirmations de commande",
        description: "Tes clients ont passé commande sur ton site",
        calculation: "Si les clients écrivent d'abord -> GRATUIT",
        alternativeCalc: "Sinon : 500 x $0.0040 = $2.00",
        result: "1 200 FCFA max",
      },
      example3: {
        title: "10 000 codes OTP/mois",
        description: "Authentification pour ta plateforme",
        calculation: "10 000 x $0.0040 = $40",
        result: "24 000 FCFA",
      },
      example4: {
        title: "Support client (500 conversations)",
        description: "Répondre aux questions des clients",
        calculation: "Le client écrit -> tu réponds = GRATUIT",
        result: "0 FCFA",
      },
    },
    tips: {
      title: "Astuces pour économiser",
      subtitle: "Optimise tes coûts WhatsApp",
      tip1: {
        title: "Encourage les clients à t'écrire en premier",
        description:
          "Affiche ton WhatsApp partout (site, réseaux, emballages). Quand ils t'écrivent, les réponses utilitaires sont gratuites !",
      },
      tip2: {
        title: "Utilise les pubs Click-to-WhatsApp",
        description:
          "Les clients qui viennent de tes pubs Facebook/Instagram ouvrent une fenêtre gratuite de 72 h. Profite-en pour envoyer tous tes messages.",
      },
      tip3: {
        title: "Envoie les confirmations dans les 24 h",
        description:
          "Si un client a passé commande (et t'a écrit), envoie ta confirmation de commande dans les 24 h pour qu'elle soit gratuite.",
      },
      tip4: {
        title: "Atteins les paliers de volume",
        description:
          "Plus tu envoies de messages, plus tu économises. À partir de 100 000 messages utilitaires/mois, tu obtiens -5 %, puis -10 %, etc.",
      },
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          question: "Tous les messages WhatsApp Business sont-ils payants ?",
          answer:
            "Non ! Seuls les messages templates (modèles pré-approuvés) sont facturés. Quand un client t'écrit, tu as 24 h pour lui répondre avec des messages libres (free-form) GRATUITEMENT. Les tarifs affichés sur cette page concernent uniquement les templates.",
        },
        {
          question: "Qu'est-ce qu'un message template ?",
          answer:
            "Un template est un message pré-approuvé par WhatsApp que tu peux utiliser pour contacter quelqu'un EN PREMIER. C'est obligatoire pour initier une conversation ou envoyer des messages en dehors de la fenêtre de 24 h. Tu crées le template, WhatsApp le valide, et tu peux l'utiliser. C'est la seule catégorie de message payante.",
        },
        {
          question: "Comment savoir si ma fenêtre de 24 h est ouverte ?",
          answer:
            "La fenêtre s'ouvre quand le client t'envoie un message et reste ouverte pendant 24 h. Dans l'API WhatsApp, tu reçois un webhook qui t'indique quand un message client arrive. Sur Fiitsa, on gère ça automatiquement pour toi.",
        },
        {
          question: "Les messages WhatsApp « normaux » sont-ils facturés ?",
          answer:
            "L'API WhatsApp Business (pour les entreprises) a des tarifs pour les templates. WhatsApp Messenger (l'app classique sur ton téléphone) reste gratuit. Mais avec l'API, tu peux automatiser, envoyer en masse et intégrer à ton site — c'est pour ça qu'il y a des frais sur les templates.",
        },
        {
          question: "C'est quoi la différence avec WhatsApp Business classique ?",
          answer:
            "L'app WhatsApp Business (gratuite) est pour les petits volumes, gérée manuellement. L'API WhatsApp Business (payante) permet l'automatisation, les gros volumes, l'intégration à ton site, les chatbots, etc. Fiitsa utilise l'API pour te donner toutes ces fonctionnalités.",
        },
        {
          question: "Comment activer WhatsApp Business API sur Fiitsa ?",
          answer:
            "Dans ton tableau de bord Fiitsa, va dans Paramètres > Intégrations > WhatsApp. On te guide étape par étape pour connecter ton numéro WhatsApp Business. C'est simple et rapide !",
        },
        {
          question: "Les tarifs vont-ils augmenter ?",
          answer:
            "Meta (propriétaire de WhatsApp) peut ajuster les tarifs 4 fois par an (1er janvier, avril, juillet, octobre) avec un préavis d'au moins 1 mois. On te tiendra informé de tout changement.",
        },
        {
          question: "Comment fonctionnent les appels WhatsApp pour les entreprises ?",
          answer:
            "Les appels entrants (clients qui t'appellent) sont GRATUITS. Les appels sortants (tu appelles le client) sont facturés à la minute selon des paliers de volume. Un appel ouvre ou rafraîchit aussi la fenêtre de 24 h pour les messages. Les tarifs pour l'Afrique commencent à $0.0103/minute. Cette fonctionnalité est disponible depuis août 2025.",
        },
      ],
    },
    cta: {
      title: "Prêt à utiliser WhatsApp pour ton business ?",
      description:
        "Fiitsa intègre WhatsApp Business API nativement. Commence à envoyer des messages automatisés dès aujourd'hui.",
      button: "Démarrer gratuitement",
    },
  },
  en: {
    meta: {
      title: "WhatsApp Business API Pricing Africa 2025 - Price Simulator | Fiitsa",
      description:
        "Discover WhatsApp Business API pricing for Africa in 2025. Interactive price simulator, real examples and tips to save money. Marketing, Utility, Authentication.",
      canonical: "https://www.fiitsa.com/whatsapp-pricing",
    },
    hero: {
      badge: "Updated December 2025",
      title: "WhatsApp Business API Pricing",
      subtitle: "for Africa",
      description: "Understand pricing simply with real examples, an interactive simulator, and tips to save money.",
      templateNote:
        "These rates apply to template messages only. Free-form replies within the 24h window are FREE.",
    },
    importantBanner: {
      title: "Important to know",
      text: "Only template messages (pre-approved by WhatsApp) are charged. When a customer messages you, you have 24h to reply freely (free-form) at no cost!",
    },
    types: {
      title: "The 4 types of WhatsApp messages",
      subtitle: "Only templates are charged - free-form replies within the 24h window are free",
      marketing: {
        name: "Marketing",
        description: "Promotions, offers, ads, newsletters",
        rate: "$0.0225",
        rateFCFA: "13.5 FCFA",
        note: "Always charged",
      },
      utility: {
        name: "Utility",
        description: "Order confirmations, delivery tracking, updates",
        rate: "$0.0040",
        rateFCFA: "2.4 FCFA",
        note: "Free if customer messaged first",
      },
      authentication: {
        name: "Authentication",
        description: "Verification codes, OTP, secure login",
        rate: "$0.0040",
        rateFCFA: "2.4 FCFA",
        note: "Volume tiers available",
      },
      service: {
        name: "Service (free reply)",
        description: "Answering questions, customer support",
        rate: "Free",
        rateFCFA: "0 FCFA",
        note: "Only within 24h window",
      },
    },
    howItWorks: {
      title: "How does it work?",
      subtitle: "3 simple rules to remember",
      rule1: {
        title: "The 24-hour window",
        description:
          "When a customer sends you a message, a 24h window opens. During this time, you can reply with utility or free messages FOR FREE.",
      },
      rule2: {
        title: "The 72h window (Free Entry Point)",
        description:
          "If the customer comes from a Facebook or Instagram ad (Click-to-WhatsApp), ALL messages are free for 72 hours!",
      },
      rule3: {
        title: "Templates (only charged)",
        description:
          "To message someone FIRST (outside the window), you must use a pre-approved template. The rates shown here apply ONLY to these templates. Free-form messages within the 24h window = $0.",
      },
    },
    pricing: {
      title: "Detailed pricing for Africa",
      subtitle: "Volume tiers = the more you send, the less you pay",
      utilityTab: "Utility",
      authTab: "Authentication",
      marketingTab: "Marketing",
      tableHeaders: {
        messages: "Messages/month",
        rateUSD: "Rate USD",
        rateFCFA: "Rate FCFA",
        discount: "Discount",
      },
    },
    examples: {
      title: "Real examples",
      subtitle: "Actual calculations for your business",
      example1: {
        title: "Promo campaign to 1,000 customers",
        description: "You want to announce your Black Friday",
        calculation: "1,000 x $0.0225 = $22.50",
        result: "13,500 FCFA",
      },
      example2: {
        title: "500 order confirmations",
        description: "Your customers ordered on your website",
        calculation: "If customers message first -> FREE",
        alternativeCalc: "Otherwise: 500 x $0.0040 = $2.00",
        result: "1,200 FCFA max",
      },
      example3: {
        title: "10,000 OTP codes/month",
        description: "Authentication for your platform",
        calculation: "10,000 x $0.0040 = $40",
        result: "24,000 FCFA",
      },
      example4: {
        title: "Customer support (500 conversations)",
        description: "Answering customer questions",
        calculation: "Customer writes -> you reply = FREE",
        result: "0 FCFA",
      },
    },
    tips: {
      title: "Tips to save money",
      subtitle: "Optimize your WhatsApp costs",
      tip1: {
        title: "Encourage customers to message you first",
        description:
          "Display your WhatsApp everywhere (website, social media, packaging). When they message you, utility replies are free!",
      },
      tip2: {
        title: "Use Click-to-WhatsApp ads",
        description:
          "Customers from your Facebook/Instagram ads open a free 72h window. Use it to send all your messages.",
      },
      tip3: {
        title: "Send confirmations within 24h",
        description:
          "If a customer ordered (and messaged you), send your order confirmation within 24h to make it free.",
      },
      tip4: {
        title: "Reach volume tiers",
        description:
          "The more messages you send, the more you save. From 100,000 utility messages/month, you get -5% then -10%, etc.",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Are all WhatsApp Business messages charged?",
          answer:
            "No! Only template messages (pre-approved models) are charged. When a customer messages you, you have 24h to reply with free-form messages FOR FREE. The rates displayed on this page only apply to templates.",
        },
        {
          question: "What is a template message?",
          answer:
            "A template is a pre-approved message by WhatsApp that you can use to contact someone FIRST. It's mandatory to initiate a conversation or send messages outside the 24h window. You create the template, WhatsApp approves it, and you can use it. It's the only category of message that's charged.",
        },
        {
          question: "How do I know if my 24h window is open?",
          answer:
            "The window opens when the customer sends you a message and stays open for 24h. In the WhatsApp API, you receive a webhook indicating when a customer message arrives. On Fiitsa, we handle this automatically for you.",
        },
        {
          question: "Are 'normal' WhatsApp messages charged?",
          answer:
            "The WhatsApp Business API (for businesses) has rates for templates. WhatsApp Messenger (the classic app on your phone) remains free. But with the API, you can automate, send in bulk, and integrate with your website - that's why there are fees for templates.",
        },
        {
          question: "What's the difference with regular WhatsApp Business?",
          answer:
            "The WhatsApp Business app (free) is for small volumes, managed manually. The WhatsApp Business API (paid) allows automation, high volumes, website integration, chatbots, etc. Fiitsa uses the API to give you all these features.",
        },
        {
          question: "How to activate WhatsApp Business API on Fiitsa?",
          answer:
            "In your Fiitsa dashboard, go to Settings > Integrations > WhatsApp. We guide you step by step to connect your WhatsApp Business number. It's simple and fast!",
        },
        {
          question: "Will prices increase?",
          answer:
            "Meta (WhatsApp's owner) can adjust rates 4 times a year (January 1, April, July, October) with at least 1 month notice. We'll keep you informed of any changes.",
        },
        {
          question: "How do WhatsApp calls work for businesses?",
          answer:
            "Inbound calls (customers calling you) are FREE. Outbound calls (you calling customers) are charged per minute based on volume tiers. A call also opens or refreshes the 24h window for messages. Rates for Africa start at $0.0103/minute. This feature is available since August 2025.",
        },
      ],
    },
    cta: {
      title: "Ready to use WhatsApp for your business?",
      description: "Fiitsa integrates WhatsApp Business API natively. Start sending automated messages today.",
      button: "Start for free",
    },
  },
};

const utilityTiers = [
  { messages: "0 - 100 000", rateUSD: "$0.0040", rateFCFA: "2.4 FCFA", discount: "-" },
  { messages: "100 001 - 1 000 000", rateUSD: "$0.0038", rateFCFA: "2.28 FCFA", discount: "-5%" },
  { messages: "1 000 001 - 4 500 000", rateUSD: "$0.0036", rateFCFA: "2.16 FCFA", discount: "-10%" },
  { messages: "4 500 001 - 40 000 000", rateUSD: "$0.0034", rateFCFA: "2.04 FCFA", discount: "-15%" },
  { messages: "40 000 001 - 80 000 000", rateUSD: "$0.0032", rateFCFA: "1.92 FCFA", discount: "-20%" },
  { messages: "80 000 001+", rateUSD: "$0.0030", rateFCFA: "1.8 FCFA", discount: "-25%" },
];

const authTiers = [
  { messages: "0 - 300 000", rateUSD: "$0.0040", rateFCFA: "2.4 FCFA", discount: "-" },
  { messages: "300 001 - 2 000 000", rateUSD: "$0.0038", rateFCFA: "2.28 FCFA", discount: "-5%" },
  { messages: "2 000 001 - 10 000 000", rateUSD: "$0.0036", rateFCFA: "2.16 FCFA", discount: "-10%" },
  { messages: "10 000 001 - 20 000 000", rateUSD: "$0.0034", rateFCFA: "2.04 FCFA", discount: "-15%" },
  { messages: "20 000 001 - 40 000 000", rateUSD: "$0.0032", rateFCFA: "1.92 FCFA", discount: "-20%" },
  { messages: "40 000 001+", rateUSD: "$0.0030", rateFCFA: "1.8 FCFA", discount: "-25%" },
];

const callingTiers = [
  { minutes: "0 - 50 000", rateUSD: "$0.0103", rateFCFA: "6.18 FCFA", discount: "-" },
  { minutes: "50 001 - 250 000", rateUSD: "$0.0084", rateFCFA: "5.04 FCFA", discount: "-18%" },
  { minutes: "250 001 - 1 000 000", rateUSD: "$0.0074", rateFCFA: "4.44 FCFA", discount: "-28%" },
  { minutes: "1 000 001 - 2 500 000", rateUSD: "$0.0062", rateFCFA: "3.72 FCFA", discount: "-40%" },
  { minutes: "2 500 001 - 5 000 000", rateUSD: "$0.0047", rateFCFA: "2.82 FCFA", discount: "-54%" },
  { minutes: "5 000 001+", rateUSD: "$0.0042", rateFCFA: "2.52 FCFA", discount: "-59%" },
];

const callingTranslations = {
  fr: {
    title: "Tarifs des appels WhatsApp API",
    badge: "Effectif août 2025",
    subtitle: "Paliers de volume = plus tu appelles, moins tu paies",
    inbound: "Appels entrants (client -> vous)",
    inboundRate: "GRATUIT",
    inboundNote: "Le client t'appelle, tu ne paies rien",
    outbound: "Appels sortants (vous -> client)",
    outboundRate: "À partir de $0.0103/min",
    outboundNote: "Tu appelles le client, facturé à la minute",
    pulseNote: "Facturation par pulse de 6 secondes. Un appel de 56 secondes = 10 pulses facturés.",
    tableHeaders: {
      minutes: "Minutes/mois",
      rateUSD: "Tarif USD/min",
      rateFCFA: "Tarif FCFA/min",
      discount: "Réduction",
    },
    windowNote: "Un appel (entrant ou sortant accepté) ouvre ou rafraîchit aussi la fenêtre de 24 h pour les messages.",
  },
  en: {
    title: "WhatsApp API Calling Rates",
    badge: "Effective August 2025",
    subtitle: "Volume tiers = the more you call, the less you pay",
    inbound: "Inbound calls (customer -> you)",
    inboundRate: "FREE",
    inboundNote: "Customer calls you, you pay nothing",
    outbound: "Outbound calls (you -> customer)",
    outboundRate: "Starting at $0.0103/min",
    outboundNote: "You call the customer, charged per minute",
    pulseNote: "Billing per 6-second pulse. A 56-second call = 10 pulses billed.",
    tableHeaders: {
      minutes: "Minutes/month",
      rateUSD: "Rate USD/min",
      rateFCFA: "Rate FCFA/min",
      discount: "Discount",
    },
    windowNote: "A call (inbound or accepted outbound) also opens or refreshes the 24h window for messages.",
  },
};

export default function WhatsAppPricing() {
  const { language: lang } = useLanguage();
  const t = translations[lang];


  const messageTypeCards = [
    {
      icon: ShoppingBag,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      ...t.types.marketing,
    },
    {
      icon: MessageSquare,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      ...t.types.utility,
    },
    {
      icon: Shield,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      ...t.types.authentication,
    },
    {
      icon: HeadphonesIcon,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      ...t.types.service,
    },
  ];

  return (
    <MarketingLayout>
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-green-500/10" />
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-4 bg-green-500/20 text-green-700 border-green-500/30">{t.hero.badge}</Badge>
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">{t.hero.title}</h1>
          <p className="mb-6 text-2xl font-semibold text-primary md:text-3xl">{t.hero.subtitle}</p>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground">{t.hero.description}</p>
          <p className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm text-primary/80">{t.hero.templateNote}</p>
        </div>
      </section>

      <section className="relative z-20 -mt-8 px-4">
        <div className="container mx-auto">
          <Card className="mx-auto max-w-4xl border-amber-500/30 bg-amber-500/10">
            <CardContent className="py-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500/20">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-amber-700">{t.importantBanner.title}</p>
                  <p className="text-sm text-amber-800/80">{t.importantBanner.text}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">{t.types.title}</h2>
            <p className="text-muted-foreground">{t.types.subtitle}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {messageTypeCards.map((card, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className={`absolute right-0 top-0 h-24 w-24 ${card.bgColor} rounded-bl-full opacity-50`} />
                <CardHeader className="pb-2">
                  <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${card.bgColor}`}>
                    <card.icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                  <CardTitle className="text-lg">{card.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{card.description}</p>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">{card.rate}</p>
                    <p className="text-sm text-muted-foreground">({card.rateFCFA})</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {card.note}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">{t.howItWorks.title}</h2>
            <p className="text-muted-foreground">{t.howItWorks.subtitle}</p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{t.howItWorks.rule1.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.howItWorks.rule1.description}</p>
              </CardContent>
            </Card>

            <Card className="border-green-500/20 bg-green-500/5">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                  <Gift className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle className="text-lg">{t.howItWorks.rule2.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.howItWorks.rule2.description}</p>
              </CardContent>
            </Card>

            <Card className="border-amber-500/20">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
                  <MessageSquare className="h-6 w-6 text-amber-500" />
                </div>
                <CardTitle className="text-lg">{t.howItWorks.rule3.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.howItWorks.rule3.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">{t.pricing.title}</h2>
            <p className="text-muted-foreground">{t.pricing.subtitle}</p>
          </div>

          <Tabs defaultValue="utility" className="mx-auto max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="utility">{t.pricing.utilityTab}</TabsTrigger>
              <TabsTrigger value="auth">{t.pricing.authTab}</TabsTrigger>
              <TabsTrigger value="marketing">{t.pricing.marketingTab}</TabsTrigger>
            </TabsList>

            <TabsContent value="utility">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium">{t.pricing.tableHeaders.messages}</th>
                          <th className="px-4 py-3 text-left text-sm font-medium">{t.pricing.tableHeaders.rateUSD}</th>
                          <th className="px-4 py-3 text-left text-sm font-medium">{t.pricing.tableHeaders.rateFCFA}</th>
                          <th className="px-4 py-3 text-left text-sm font-medium">{t.pricing.tableHeaders.discount}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {utilityTiers.map((tier, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                            <td className="px-4 py-3 text-sm">{tier.messages}</td>
                            <td className="px-4 py-3 text-sm font-medium">{tier.rateUSD}</td>
                            <td className="px-4 py-3 text-sm text-muted-foreground">{tier.rateFCFA}</td>
                            <td className="px-4 py-3 text-sm">
                              {tier.discount !== "-" ? (
                                <Badge variant="secondary" className="bg-green-500/20 text-green-700">
                                  {tier.discount}
                                </Badge>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="auth">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium">{t.pricing.tableHeaders.messages}</th>
                          <th className="px-4 py-3 text-left text-sm font-medium">{t.pricing.tableHeaders.rateUSD}</th>
                          <th className="px-4 py-3 text-left text-sm font-medium">{t.pricing.tableHeaders.rateFCFA}</th>
                          <th className="px-4 py-3 text-left text-sm font-medium">{t.pricing.tableHeaders.discount}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {authTiers.map((tier, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                            <td className="px-4 py-3 text-sm">{tier.messages}</td>
                            <td className="px-4 py-3 text-sm font-medium">{tier.rateUSD}</td>
                            <td className="px-4 py-3 text-sm text-muted-foreground">{tier.rateFCFA}</td>
                            <td className="px-4 py-3 text-sm">
                              {tier.discount !== "-" ? (
                                <Badge variant="secondary" className="bg-green-500/20 text-green-700">
                                  {tier.discount}
                                </Badge>
                              ) : (
                                <span className="text-muted-foreground">-</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="marketing">
              <Card>
                <CardContent className="p-6 text-center">
                  <ShoppingBag className="mx-auto mb-4 h-12 w-12 text-purple-500" />
                  <p className="mb-2 text-2xl font-bold">$0.0225 / message</p>
                  <p className="mb-4 text-lg text-muted-foreground">(13.5 FCFA / message)</p>
                  <p className="mx-auto max-w-md text-sm text-muted-foreground">
                    {lang === "fr"
                      ? "Les messages marketing ont un tarif unique, sans paliers de volume. Ils sont toujours facturés, même si le client t'a écrit en premier."
                      : "Marketing messages have a single rate without volume tiers. They are always charged, even if the customer messaged you first."}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mx-auto mt-12 max-w-2xl">
            <PricingSimulator lang={lang} />
          </div>
        </div>
      </section>

      <section className="bg-cyan-500/5 py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-6 text-center">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-700 border-cyan-500/30">
              {callingTranslations[lang].badge}
            </Badge>
            <h2 className="mb-2 flex items-center justify-center gap-3 text-3xl font-bold">
              <Phone className="h-8 w-8 text-cyan-500" />
              {callingTranslations[lang].title}
            </h2>
            <p className="mb-4 text-muted-foreground">{callingTranslations[lang].subtitle}</p>

            <div className="mx-auto max-w-4xl rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                {callingTranslations[lang].windowNote}
              </p>
            </div>
          </div>

          <div className="mx-auto mb-10 grid max-w-4xl gap-6 md:grid-cols-2">
            <Card className="border-green-500/30 bg-green-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-green-500" />
                  {callingTranslations[lang].inbound}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-3xl font-bold text-green-600">{callingTranslations[lang].inboundRate}</p>
                <p className="text-sm text-muted-foreground">{callingTranslations[lang].inboundNote}</p>
              </CardContent>
            </Card>

            <Card className="border-cyan-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-cyan-500" />
                  {callingTranslations[lang].outbound}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-3xl font-bold text-cyan-600">{callingTranslations[lang].outboundRate}</p>
                <p className="text-sm text-muted-foreground">{callingTranslations[lang].outboundNote}</p>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto mb-10 max-w-4xl rounded-lg bg-muted/50 p-4 text-center">
            <p className="text-sm text-muted-foreground">{callingTranslations[lang].pulseNote}</p>
          </div>

          <Card className="mx-auto mb-10 max-w-4xl">
            <CardHeader>
              <CardTitle className="text-lg">
                {lang === "fr" ? "Paliers de volume — Rest of Africa" : "Volume Tiers - Rest of Africa"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        {callingTranslations[lang].tableHeaders.minutes}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        {callingTranslations[lang].tableHeaders.rateUSD}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        {callingTranslations[lang].tableHeaders.rateFCFA}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium">
                        {callingTranslations[lang].tableHeaders.discount}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {callingTiers.map((tier, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                        <td className="px-4 py-3 text-sm">{tier.minutes}</td>
                        <td className="px-4 py-3 text-sm font-medium">{tier.rateUSD}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{tier.rateFCFA}</td>
                        <td className="px-4 py-3 text-sm">
                          {tier.discount !== "-" ? (
                            <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-700">
                              {tier.discount}
                            </Badge>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mx-auto max-w-2xl">
            <CallingSimulator lang={lang} />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">{t.examples.title}</h2>
            <p className="text-muted-foreground">{t.examples.subtitle}</p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {[t.examples.example1, t.examples.example2, t.examples.example3, t.examples.example4].map(
              (example, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Calculator className="h-5 w-5 text-primary" />
                      {example.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{example.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2 rounded-lg bg-muted/50 p-3 font-mono text-sm">
                      {example.calculation}
                      {"alternativeCalc" in example && example.alternativeCalc ? (
                        <>
                          <br />
                          {example.alternativeCalc}
                        </>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{lang === "fr" ? "Résultat" : "Result"}:</span>
                      <Badge variant="outline" className="text-lg font-bold">
                        {example.result}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 flex items-center justify-center gap-2 text-3xl font-bold">
              <Lightbulb className="h-8 w-8 text-amber-500" />
              {t.tips.title}
            </h2>
            <p className="text-muted-foreground">{t.tips.subtitle}</p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {[t.tips.tip1, t.tips.tip2, t.tips.tip3, t.tips.tip4].map((tip, index) => (
              <Card key={index} className="border-amber-500/20">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">{t.faq.title}</h2>

          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border bg-background px-4">
                <AccordionTrigger className="text-left hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="mx-auto max-w-2xl border-primary/30 bg-gradient-to-br from-primary/5 to-green-500/5">
            <CardContent className="py-12">
              <MessageSquare className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">{t.cta.title}</h2>
              <p className="mx-auto mb-8 max-w-md text-muted-foreground">{t.cta.description}</p>
              <Button size="lg" asChild>
                <a href="https://app.fiitsa.com/register" className="gap-2">
                  {t.cta.button}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </MarketingLayout>
  );
}
