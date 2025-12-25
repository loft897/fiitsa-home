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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fiitsa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fiitsa - Crée ta boutique en ligne en 3 minutes",
    template: "%s | Fiitsa",
  },
  description:
    "Fiitsa aide les entrepreneurs africains à créer leur boutique en ligne, vendre et encaisser avec mobile money.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Fiitsa - Crée ta boutique en ligne en 3 minutes",
    description:
      "Fiitsa aide les entrepreneurs africains à créer leur boutique en ligne, vendre et encaisser avec mobile money.",
    siteName: "Fiitsa",
    locale: "fr_FR",
    images: [
      {
        url: "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png",
        width: 1200,
        height: 630,
        alt: "Fiitsa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiitsa - Crée ta boutique en ligne en 3 minutes",
    description:
      "Fiitsa aide les entrepreneurs africains à créer leur boutique en ligne, vendre et encaisser avec mobile money.",
    images: ["https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/fiitsa-logo.png",
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
            logo: `${siteUrl}/fiitsa-logo.png`,
            sameAs: ["https://fiitsa.com"],
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
