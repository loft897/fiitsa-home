import type { Metadata } from "next";
import { Fira_Code, Space_Grotesk, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { Shell } from "@/components/Shell";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://blog.fiitsa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fiitsa Blog - Strategies pour booster votre restau",
    template: "%s | Fiitsa Blog",
  },
  description:
    "Le blog Fiitsa partage des strategies, outils et retours terrain pour accelerer la croissance des restaurants.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Fiitsa Blog - Strategies pour booster votre restau",
    description:
      "Le blog Fiitsa partage des strategies, outils et retours terrain pour accelerer la croissance des restaurants.",
    siteName: "Fiitsa Blog",
    locale: "fr_FR",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Fiitsa Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiitsa Blog - Strategies pour booster votre restau",
    description:
      "Le blog Fiitsa partage des strategies, outils et retours terrain pour accelerer la croissance des restaurants.",
    images: ["/og-default.png"],
  },
  icons: {
    icon: "/icon.png",
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
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Shell>{children}</Shell>
          <Toaster richColors position="top-right" />
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
              name: "Fiitsa Blog",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/articles?query={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
