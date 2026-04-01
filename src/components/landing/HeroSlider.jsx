"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/data/landing-content";

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[activeIndex];

  return (
    <section
      id="home-hero"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F8F5EF_0%,#F5F2EC_48%,#EFE7DB_100%)]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeSlide.id}-background`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={activeSlide.backgroundImage}
            alt={`${activeSlide.title} background`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,242,236,0.74)_5%,rgba(245,242,236,0.56)_34%,rgba(245,242,236,0.18)_60%,rgba(245,242,236,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,194,122,0.12),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(245,242,236,0.06),rgba(239,231,219,0.32))]" />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(234,194,122,0.45),transparent_68%)]"
        animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.75, 0.55] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(201,166,70,0.2),transparent_70%)]"
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* <motion.div
        className="pointer-events-none absolute left-4 top-0 z-10 md:left-12"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 0 20px #EAC27A)" }}
      >
        <Image
          src="/images/light1.jpg"
          alt="Decorative lantern"
          width={150}
          height={260}
          className="h-28 w-auto object-contain md:h-44 rounded-2xl"
          priority
        />
      </motion.div> */}

      {/* <motion.div
        className="pointer-events-none absolute right-4 top-0 z-10 md:right-12"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 0 20px #EAC27A)" }}
      >
        <Image
          src="/images/light2.jpg"
          alt="Decorative lantern"
          width={150}
          height={260}
          className="h-28 w-auto object-contain md:h-44 rounded-2xl"
          priority
        />
      </motion.div> */}

      <div className="mx-auto grid min-h-[92vh] w-full max-w-[1440px] items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:px-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 18 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20"
          >
            <p className="inline-flex rounded-full border border-[rgba(201,166,70,0.25)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#A8821E] shadow-[0_10px_30px_rgba(201,166,70,0.12)]">
              {activeSlide.eyebrow}
            </p>
            <h1 className="font-display mt-6 max-w-2xl text-5xl leading-[1.02] text-[#2C2C2C] sm:text-6xl lg:text-7xl">
              {activeSlide.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6A5B4A]">
              {activeSlide.description}
            </p>

            <div id="book" className="mt-8 flex flex-col gap-4 sm:flex-row">
              <OpenContactButton className="bg-[#C9A646] hover:bg-[#B8962E]">
                {activeSlide.primaryCta}
              </OpenContactButton>
              <Button
                href="#services"
                variant="secondary"
                className="border-[#C9A646]/40 bg-[#F8F2E7] text-[#2C2C2C] hover:bg-[#F1E9DD]"
              >
                {activeSlide.secondaryCta}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                    ? "w-12 bg-[#C9A646]"
                    : "w-6 bg-[#D8C3A5]"
                    }`}
                  aria-label={`Go to ${slide.title}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSlide.id}-image`}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-[rgba(201,166,70,0.18)] bg-[rgba(255,248,235,0.44)] p-3 shadow-[0_30px_90px_rgba(110,87,42,0.12)] backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(234,194,122,0.08),transparent_32%,rgba(201,166,70,0.04))]" />
              <div className="relative overflow-hidden rounded-[26px]">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  width={920}
                  height={980}
                  priority
                  className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[640px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_35%,rgba(80,58,25,0.16))]" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
