import type { Metadata } from "next";
import { Fira_Code, Space_Grotesk, Source_Sans_3 } from "next/font/google";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { Shell } from "@/components/Shell";
import { Providers } from "@/components/Providers";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.fiitsa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fiitsa - Boutique en ligne africaine, Mobile Money & IA",
    template: "%s | Fiitsa",
  },
  description:
    "Fiitsa est une plateforme e-commerce africaine pour vendre produits et services, encaisser via Mobile Money, WhatsApp et carte, avec 7% de commission.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Fiitsa - Boutique en ligne africaine, Mobile Money & IA",
    description:
      "Fiitsa est une plateforme e-commerce africaine pour vendre produits et services, encaisser via Mobile Money, WhatsApp et carte, avec 7% de commission.",
    siteName: "Fiitsa",
    locale: "fr_FR",
    images: [
      {
        url: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
        width: 1200,
        height: 630,
        alt: "Fiitsa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiitsa - Boutique en ligne africaine, Mobile Money & IA",
    description:
      "Fiitsa est une plateforme e-commerce africaine pour vendre produits et services, encaisser via Mobile Money, WhatsApp et carte, avec 7% de commission.",
    images: [
      "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
    ],
  },
  icons: {
    icon: "/icon.png",
    apple: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
      >
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
        <SEOJsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fiitsa",
            url: siteUrl,
            logo: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png",
            sameAs: [
              "https://fiitsa.com",
              "https://web.facebook.com/fiitsa",
              "https://www.instagram.com/fiitsa_officiel/",
              "https://www.tiktok.com/@fiitsa_off",
              "https://www.youtube.com/@Fiitsa",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+33 7 63 47 79 07",
                contactType: "customer support",
                areaServed: "FR",
                availableLanguage: ["French", "English"],
              },
            ],
          }}
        />
        <SEOJsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Fiitsa",
            url: siteUrl,
            image:
              "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Fiitsa%20arrondi%20sans%20bg%20(1200%20x%20630%20px).png",
            telephone: "+33 7 63 47 79 07",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1704 LLANO ST STE B-1430",
              addressLocality: "SANTA FE",
              addressRegion: "NM",
              postalCode: "87505",
              addressCountry: "US",
            },
          }}
        />
        <SEOJsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Fiitsa",
            url: siteUrl,
            potentialAction: {
              "@type": "SearchAction",
              target: `${siteUrl}/blog?query={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }}
        />
      </body>
    </html>
  );
}
