"use client";

import { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";
import { MarketingNavBar } from "@/components/marketing/MarketingNavBar";

const BLOG_PREFIXES = ["/articles", "/categories", "/tags", "/search", "/blog"];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEmbed = pathname.startsWith("/embed");
  const isBlog = BLOG_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  useEffect(() => {
    const root = document.documentElement;
    const previousPrimary = root.style.getPropertyValue("--primary");
    const previousPrimaryForeground = root.style.getPropertyValue("--primary-foreground");

    if (isBlog) {
      root.style.setProperty("--primary", "51 100% 50%");
      root.style.setProperty("--primary-foreground", "45 100% 10%");
    }

    return () => {
      if (previousPrimary) {
        root.style.setProperty("--primary", previousPrimary);
      } else {
        root.style.removeProperty("--primary");
      }

      if (previousPrimaryForeground) {
        root.style.setProperty("--primary-foreground", previousPrimaryForeground);
      } else {
        root.style.removeProperty("--primary-foreground");
      }
    };
  }, [isBlog]);

  return (
    <div className={isEmbed ? "bg-white" : "bg-white"}>
      {!isEmbed && (
        <Suspense fallback={null}>
          <MarketingNavBar />
        </Suspense>
      )}
      <main
        className={
          isEmbed
            ? "min-h-screen"
            : isBlog
            ? "mx-auto min-h-screen w-full max-w-6xl px-4 pb-20 pt-10 md:px-6"
            : "min-h-screen"
        }
      >
        {children}
      </main>
      {!isEmbed && <MarketingFooter />}
    </div>
  );
}
