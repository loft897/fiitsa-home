"use client";

import { ArrowRight, Play, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLinkWithUTM } from "@/hooks/useLinkWithUTM";
import { motion, AnimatePresence } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { useMemo, useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/hooks/useLanguage";

export default function HeroSection() {
  const { createExternalLink } = useLinkWithUTM();
  const { preloadImage } = useImagePreloader();
  const [logoLoaded, setLogoLoaded] = useState(false);
  const { language } = useLanguage();
  const logoUrl = "https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/Logo%20Fiitsa.png";

  useEffect(() => {
    preloadImage(logoUrl, true).then(() => {
      setLogoLoaded(true);
    });
  }, [preloadImage, logoUrl]);

  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        left: `${(i * 73) % 100}%`,
        top: `${(i * 41) % 100}%`,
        drift: (i % 5) - 2,
      })),
    []
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fiitsa-light via-white to-fiitsa-purple/10">
      <div className="absolute inset-0 opacity-50 md:opacity-100">
        <div className="absolute left-5 top-10 h-48 w-48 rounded-full bg-fiitsa-purple/10 blur-3xl md:h-96 md:w-96 animate-pulse"></div>
        <div className="absolute bottom-10 right-5 h-36 w-36 rounded-full bg-fiitsa-gold/20 blur-3xl md:h-72 md:w-72 animate-pulse delay-1000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          <div className="mx-auto max-w-4xl space-y-4 text-center animate-fade-in md:space-y-6">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl font-black leading-tight text-fiitsa-dark sm:text-4xl md:text-5xl lg:text-6xl">
                {language === "fr"
                  ? "Crée ta boutique en 3 minutes et commence à vendre aujourd'hui 🚀"
                  : "Create your store in 3 minutes and start selling today 🚀"}
              </h2>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
                {language === "fr"
                  ? "Gratuit • Sans compétences techniques • Encaissement dans le monde entier"
                  : "Free • No technical skills required • Get paid worldwide"}
              </p>
            </div>

            <div className="text-center">
              <motion.h2
                className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl"
                initial="hidden"
                animate="visible"
              >
                {(language === "fr"
                  ? ["Ta boutique.", "Tes règles.", "Tes gains."]
                  : ["Your store.", "Your rules.", "Your profits."]).map((word, index) => (
                  <motion.span
                    key={word}
                    className="mr-2 inline-block bg-gradient-to-r from-fiitsa-purple via-fiitsa-purple-light to-fiitsa-gold bg-clip-text text-transparent"
                    variants={{
                      hidden: { opacity: 0, y: 20, rotateX: -90, filter: "blur(10px)" },
                      visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.8, delay: index * 0.4, ease: "easeOut" }}
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(123, 44, 191, 0.5)",
                      filter: "blur(0px) drop-shadow(0 0 10px rgba(255, 215, 0, 0.6))",
                    }}
                    style={{ transformStyle: "preserve-3d", willChange: "transform, filter" }}
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.4 + charIndex * 0.05,
                          ease: "easeOut",
                        }}
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        style={{ marginRight: char === " " ? "0.25rem" : "0" }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-slide-in-right lg:max-w-full">
            <div className="relative">
              <motion.div
                className="relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white p-6 shadow-xl transition-transform duration-500 md:h-96 md:rounded-3xl md:p-8 md:shadow-2xl sm:h-80"
                style={{
                  background:
                    "linear-gradient(135deg, #7B2CBF 0%, #A855F7 25%, #D946EF 50%, #F59E0B 75%, #FCD34D 100%)",
                  backgroundSize: "400% 400%",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  opacity: { duration: 0.8, ease: "easeOut" },
                  scale: { duration: 0.8, ease: "easeOut" },
                  backgroundPosition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(251, 191, 36, 0.6) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)",
                  }}
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{ background: "conic-gradient(from 0deg at 50% 50%, #7B2CBF, #F59E0B, #7B2CBF)" }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 mb-4 md:mb-6">
                  <AnimatePresence mode="wait">
                    {!logoLoaded ? (
                      <Skeleton className="h-14 w-14 rounded-2xl md:h-20 md:w-20" />
                    ) : (
                      <motion.div
                        className="relative"
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.6 } }}
                        style={{ willChange: "transform" }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fiitsa-purple to-fiitsa-gold blur-md opacity-0"
                          animate={{ opacity: [0, 0.6, 0], scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <motion.img
                          src={logoUrl}
                          alt="Fiitsa Logo"
                          loading="eager"
                          className="relative z-10 h-14 w-14 rounded-xl border-2 border-white bg-white/90 object-contain p-1.5 shadow-lg md:h-20 md:w-20 md:rounded-2xl md:border-4 md:p-2"
                          animate={{ y: [0, -3, 0], rotate: [0, 1, -1, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {Array.from({ length: 3 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute h-2 w-2 rounded-full bg-fiitsa-gold"
                            style={{
                              top: "50%",
                              left: "50%",
                              transformOrigin: `${30 + i * 10}px 0px`,
                            }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-1 md:space-y-2">
                  {(language === "fr"
                    ? ["Ta boutique.", "Tes règles.", "Tes gains."]
                    : ["Your store.", "Your rules.", "Your profits."]).map((text, index) => (
                    <motion.div
                      key={text}
                      initial={{ scale: 0, opacity: 0, y: 30, rotateX: -90, filter: "blur(20px)" }}
                      animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                      transition={{
                        delay: 1 + index * 0.6,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        textShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
                        filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))",
                      }}
                      className="relative z-10 cursor-pointer text-center text-base font-bold tracking-wide text-white drop-shadow-2xl sm:text-lg md:text-xl"
                      style={{
                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                        transformStyle: "preserve-3d",
                        willChange: "transform, filter",
                      }}
                    >
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        transition={{
                          delay: 1 + index * 0.6 + 0.3,
                          duration: text.length * 0.05,
                          ease: "easeInOut",
                        }}
                        className="inline-block overflow-hidden"
                      >
                        {text.split("").map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            className="inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 + index * 0.6 + 0.3 + charIndex * 0.05, duration: 0.1 }}
                            whileHover={{ color: "#FFD700", transition: { duration: 0.2 } }}
                            style={{ marginRight: char === " " ? "0.25rem" : "0" }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.span>

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 mix-blend-overlay"
                        animate={{ opacity: [0, 0.5, 0], x: ["-100%", "200%"] }}
                        transition={{ delay: 1 + index * 0.6 + 1, duration: 1.5, ease: "easeInOut" }}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {particles.map((particle, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-2 w-2 rounded-full bg-white/40"
                      style={{ left: particle.left, top: particle.top }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, particle.drift * 4, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-fiitsa-purple shadow-lg backdrop-blur-sm md:left-4 md:top-4 md:px-4 md:py-2 md:text-xs"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, y: [0, -5, 0] }}
                  transition={{
                    x: { duration: 0.8, ease: "easeOut" },
                    opacity: { duration: 0.8 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  Mobile Money
                </motion.div>

                <motion.div
                  className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-fiitsa-purple shadow-lg backdrop-blur-sm md:right-4 md:top-4 md:px-4 md:py-2 md:text-xs"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, y: [0, -5, 0] }}
                  transition={{
                    x: { duration: 0.8, ease: "easeOut", delay: 0.2 },
                    opacity: { duration: 0.8, delay: 0.2 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  }}
                >
                  {language === "fr" ? "IA Intégrée" : "Built-in AI"}
                </motion.div>

                <motion.div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-fiitsa-gold/90 px-2 py-1 text-[10px] font-semibold text-fiitsa-dark shadow-lg backdrop-blur-sm md:px-4 md:py-2 md:text-xs"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, x: [0, -3, 3, 0] }}
                  transition={{
                    y: { duration: 0.8, ease: "easeOut", delay: 0.4 },
                    opacity: { duration: 0.8, delay: 0.4 },
                    x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  {language === "fr" ? "Paiement instantané" : "Instant payment"}
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 space-y-4 text-center md:mt-12 md:space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm font-medium text-gray-700 md:text-base">
                Fiitsa est membre de H7 et de la FrenchTech Saint-Etienne Lyon
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                <motion.img
                  src="https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/H7-Logo%20noir.png"
                  alt="H7 Logo"
                  className="h-16 w-auto object-contain md:h-24"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.img
                  src="https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/LogoFrenchTech.png"
                  alt="French Tech Logo"
                  className="h-16 w-auto object-contain md:h-24"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.img
                  src="https://api.fiitsa.com/storage/v1/object/public/fiitsa-files/MacaronAdherentFrenchTech.png"
                  alt="Macaron Adherent French Tech"
                  className="h-16 w-auto object-contain md:h-24"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl space-y-6 text-center md:mt-12 md:space-y-8 lg:mt-20 lg:space-y-12">
          <div className="inline-flex items-center space-x-2 rounded-full border border-fiitsa-purple/20 bg-gradient-to-r from-fiitsa-purple/10 to-fiitsa-gold/10 px-3 py-2 backdrop-blur-sm md:space-x-3 md:px-6 md:py-3">
            <Star className="h-4 w-4 text-fiitsa-gold md:h-5 md:w-5" />
            <span className="text-xs font-semibold text-fiitsa-dark md:text-sm">
              {language === "fr" ? "Solution N°1 pour entrepreneurs africains" : "#1 Solution for African entrepreneurs"}
            </span>
            <Shield className="h-3 w-3 text-fiitsa-purple md:h-4 md:w-4" />
          </div>

          <div className="flex w-full flex-col flex-wrap justify-center gap-2 text-xs sm:flex-row md:gap-4 md:text-sm">
            <div className="flex items-center justify-center space-x-2 rounded-full bg-white/60 px-3 py-2 backdrop-blur-sm md:px-4">
              <span className="text-base md:text-xl">💰</span>
              <span className="font-medium text-gray-700">
                {language === "fr" ? "7 ? 12% de commission max" : "7 to 12% max commission"}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 rounded-full bg-white/60 px-3 py-2 backdrop-blur-sm md:px-4">
              <span className="text-base md:text-xl">⚡</span>
              <span className="font-medium text-gray-700">
                {language === "fr" ? "Retraits en 72h" : "Withdrawals in 72h"}
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 rounded-full bg-white/60 px-3 py-2 backdrop-blur-sm md:px-4">
              <span className="text-base md:text-xl">💬</span>
              <span className="font-medium text-gray-700">
                {language === "fr" ? "Intégration WhatsApp Business + IA" : "WhatsApp Business + AI integration"}
              </span>
            </div>
          </div>

          <div className="flex w-full justify-center px-4">
            <a href="https://www.youtube.com/@Fiitsa" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-fiitsa-purple px-4 py-2 text-sm font-semibold text-fiitsa-purple transition-all duration-300 hover:bg-fiitsa-purple hover:text-white md:px-6 md:py-3 md:text-base sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {language === "fr" ? "Voir comment utiliser Fiitsa" : "See how to use Fiitsa"}
              </Button>
            </a>
          </div>

          <div className="flex w-full justify-center px-4">
            <a
              href={createExternalLink("https://app.fiitsa.com/register")}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto"
              onClick={() => (window as any).fbq?.("track", "Lead")}
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-fiitsa-purple via-fiitsa-purple-light to-fiitsa-purple px-6 py-3 text-base font-semibold text-white shadow-2xl transition-all duration-500 group-hover:scale-105 md:px-8 md:py-4 md:text-lg sm:w-auto"
              >
                <Zap className="mr-2 h-5 w-5 md:mr-3 md:h-6 md:w-6 group-hover:animate-pulse" />
                <span className="text-sm md:text-base">
                  {language === "fr" ? "CR?ER MA CR?ER MA BOUTIQUE GRATUITEMENT" : "CREATE MY FREE STORE"}
                </span>
                <ArrowRight className="ml-2 h-5 w-5 md:ml-3 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="flex flex-col flex-wrap items-center justify-center gap-4 text-xs sm:flex-row md:gap-8 md:text-sm">
            <div className="flex flex-col items-center space-y-2 text-center sm:flex-row sm:space-x-2 sm:space-y-0">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-fiitsa-purple to-fiitsa-gold text-[10px] font-bold text-white md:h-8 md:w-8 md:text-xs"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-600 text-xs md:text-sm">
                {language === "fr" ? "Déjà" : "Already"}{" "}
                <span className="font-bold text-fiitsa-purple">250+</span>{" "}
                {language === "fr" ? "entrepreneurs africains" : "African entrepreneurs"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex text-fiitsa-gold">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-current md:h-4 md:w-4" />
                ))}
              </div>
              <span className="text-gray-600 text-xs md:text-sm">
                4,9/5 ({language === "fr" ? "18+ avis" : "18+ reviews"})
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
