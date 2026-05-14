"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";

import { SlideOne } from "@/components/hero/SlideOne";
import { SlideTwo } from "@/components/hero/SlideTwo";
import { SlideThree } from "@/components/hero/SlideThree";
import { SlideFour } from "@/components/hero/SlideFour";

import { heroSlides } from "@/data/landing-content";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { Button } from "@/components/ui/button";

export function HeroSlider() {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="home-hero" className="relative overflow-hidden">
      <div className="overflow-hidden min-h-[100svh] lg:h-[90vh]" ref={emblaRef}>
        <div className="flex">

          {/* FIRST 4 SLIDES (NEW DESIGN) */}
          {[
            {
              id: "reception",
              bg: "/arviaData/reception1.jpeg",
              overlay:
                "bg-[linear-gradient(90deg,rgba(19,40,85,0.9),rgba(19,40,85,0.6),transparent)]",
              Component: SlideOne,
            },
            {
              id: "delhi-services",
              bg: "/arviaData/reception5.jpeg",
              overlay:
                "bg-[linear-gradient(90deg,rgba(19,40,85,0.9),rgba(19,40,85,0.6),transparent)]",
              Component: SlideTwo,
            },
            {
              id: "franchise",
              bg: "/arviaData/reception5.jpeg",
              overlay:
                "bg-[linear-gradient(90deg,rgba(19,40,85,0.9),rgba(19,40,85,0.6),transparent)]",
              Component: SlideThree,
            },
            {
              id: "services",
              bg: "/arviaData/reception5.jpeg",
              overlay:
                "bg-[linear-gradient(90deg,rgba(19,40,85,0.9),rgba(19,40,85,0.6),transparent)]",
              Component: SlideFour,
            },
          ].map((slide, index) => {
            const Comp = slide.Component;
            return (
              <div key={slide.id} className="relative flex-[0_0_100%] min-h-[100svh] lg:min-h-[90vh]">
                <Image
                  src={slide.bg}
                  alt=""
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
                <div className={`absolute inset-0 ${slide.overlay}`} />
                <Comp isActive={selectedIndex === index} />
              </div>
            );
          })}

          {/* LAST 3 SLIDES (OLD HERO DESIGN) */}
          {heroSlides.slice(0, 3).map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-h-[100svh] lg:min-h-[90vh]">

              {/* Background */}
              <div className="absolute inset-0">
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,40,85,0.9),rgba(19,40,85,0.6),transparent)]" />
              </div>

              {/* Content */}
              <div className="relative z-20 mx-auto flex h-full min-h-[100svh] lg:min-h-[90vh] w-full max-w-7xl flex-col items-center justify-center gap-6 px-4 py-12 sm:px-6 md:px-8 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:py-0">

                {/* LEFT TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="w-full max-w-lg text-center lg:text-left"
                >
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#fff]">
                    {slide.eyebrow}
                  </p>

                  <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-[#fff] leading-tight">
                    {slide.title}
                  </h2>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#fff]/90 px-2 sm:px-0">
                    {slide.description}
                  </p>

                  <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
                    <OpenContactButton className="bg-[#C9A646] hover:bg-[#132855] px-4 sm:px-5 py-2 text-xs sm:text-sm">
                      {slide.primaryCta}
                    </OpenContactButton>
                  </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative w-full max-w-2xl lg:max-w-none"
                >
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-[rgba(201,166,70,0.2)] shadow-md">
                    <Image
                      src={slide.foregroundImage}
                      alt={slide.title}
                      width={900}
                      height={800}
                      className="h-[280px] sm:h-[380px] md:h-[420px] lg:h-[480px] w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ DOT NAVIGATION - Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2 sm:gap-3">
        {[...Array(7)].map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${selectedIndex === index
              ? "w-8 sm:w-10 md:w-12 bg-[#C9A646]"
              : "w-4 sm:w-5 md:w-6 bg-white/30"
              }`}
          />
        ))}
      </div>
    </section>
  );
}