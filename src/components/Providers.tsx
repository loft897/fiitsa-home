"use client";

import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/hooks/useLanguage";
import { GlobalTracker } from "@/components/GlobalTracker";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LanguageProvider>
        <Suspense fallback={null}>
          <GlobalTracker />
        </Suspense>
        {children}
        <Toaster richColors position="top-right" />
      </LanguageProvider>
    </ThemeProvider>
  );
}
