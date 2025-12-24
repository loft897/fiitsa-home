"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEmbed = pathname.startsWith("/embed");

  return (
    <div className={isEmbed ? "bg-white" : "bg-aurora"}>
      {!isEmbed && <Header />}
      <main
        className={
          isEmbed
            ? "min-h-screen"
            : "mx-auto min-h-screen w-full max-w-6xl px-4 pb-20 pt-28 md:px-6"
        }
      >
        {children}
      </main>
      {!isEmbed && <Footer />}
    </div>
  );
}
