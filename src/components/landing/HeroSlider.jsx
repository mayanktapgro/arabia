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
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[activeIndex];

  return (
    <section
      id="home-hero"
      className="relative min-h-[100svh] overflow-hidden bg-[#F5F2EC]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeSlide.id}-background`}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={activeSlide.backgroundImage}
            alt={`${activeSlide.title} background`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,242,236,0.9),rgba(245,242,236,0.4))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(234,194,122,0.22),transparent_38%)]" />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="pointer-events-none absolute left-0 top-24 z-10 hidden xl:block"
        animate={{ y: [0, -10, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* <Image
          src="/profile/palm-trees/palm-left.svg"
          alt="Palm decoration"
          width={250}
          height={380}
          className="h-auto w-[190px] opacity-75"
          priority
        /> */}
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 z-10 hidden xl:block"
        animate={{ y: [0, 12, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* <Image
          src="/profile/palm-trees/palm-right.svg"
          alt="Palm decoration"
          width={250}
          height={360}
          className="h-auto w-[190px] opacity-75"
          priority
        /> */}
      </motion.div>

      <div className="mx-auto grid min-h-[100svh] w-full max-w-[1440px] items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 max-w-2xl"
          >
            <p className="inline-flex rounded-full border border-[rgba(201,166,70,0.25)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#A8821E] shadow-[0_10px_30px_rgba(201,166,70,0.12)]">
              {activeSlide.eyebrow}
            </p>
            <h1 className="font-display mt-6 text-3xl leading-[1.02] text-[#2C2C2C] sm:text-6xl lg:text-5xl line-clamp-2">
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
                className="border-[#C9A646]/40 bg-[#F8F2E7] text-[#ffffff] hover:bg-[#B8962E]"
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
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-12 bg-[#C9A646]" : "w-6 bg-[#D8C3A5]"
                    }`}
                  aria-label={`Go to ${slide.title}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSlide.id}-foreground`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative ml-auto overflow-hidden rounded-[34px] border border-[rgba(201,166,70,0.2)] bg-[rgba(255,249,239,0.48)] p-3 shadow-[0_26px_80px_rgba(104,83,51,0.16)] backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(234,194,122,0.14),transparent_40%,rgba(201,166,70,0.04))]" />
              <div className="relative overflow-hidden rounded-[28px]">
                <Image
                  src={activeSlide.foregroundImage}
                  alt={activeSlide.title}
                  width={920}
                  height={980}
                  priority
                  className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[660px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),transparent_32%,rgba(80,58,25,0.18))]" />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
