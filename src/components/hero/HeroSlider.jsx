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
      delay: 6000,
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

      <div className="overflow-hidden lg:h-[90vh]" ref={emblaRef}>
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
              <div key={slide.id} className="relative flex-[0_0_100%]">
                <Image src={slide.bg} alt="" fill className="object-cover" />
                <div className={`absolute inset-0 ${slide.overlay}`} />
                <Comp isActive={selectedIndex === index} />
              </div>
            );
          })}

          {/* LAST 3 SLIDES (OLD HERO DESIGN) */}
          {heroSlides.slice(0, 3).map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%]">

              {/* Background */}
              <div className="absolute inset-0">
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,242,236,0.40),rgba(245,242,236,0.5))]" />
              </div>

              {/* Content */}
              <div className="relative z-20 mx-auto grid h-full max-w-[1300px] items-center gap-6 px-6 py-12 lg:grid-cols-2">

                {/* LEFT TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="max-w-lg"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-[#fff]">
                    {slide.eyebrow}
                  </p>

                  <h2 className="mt-3 text-2xl sm:text-3xl font-display text-[#2C2C2C] leading-tight">
                    {slide.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#000000]/80">
                    {slide.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <OpenContactButton className="bg-[#C9A646] hover:bg-[#132855] px-5 py-2 text-sm">
                      {slide.primaryCta}
                    </OpenContactButton>

                    <Button
                      href={slide?.secondaryHref || "#services"}
                      variant="secondary"
                      className="text-sm hover:scale-105"
                    >
                      {slide.secondaryCta}
                    </Button>
                  </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <div className="overflow-hidden rounded-2xl border border-[rgba(201,166,70,0.2)] shadow-md">
                    <Image
                      src={slide.foregroundImage}
                      alt={slide.title}
                      width={700}
                      height={800}
                      className="h-[420px] sm:h-[480px] w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ DOT NAVIGATION */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {[...Array(7)].map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all ${selectedIndex === index
              ? "w-12 bg-[#C9A646]"
              : "w-6 bg-white/30"
              }`}
          />
        ))}
      </div>
    </section>
  );
}




// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useRef, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { SlideOne } from "@/components/hero/SlideOne";
// import { SlideTwo } from "@/components/hero/SlideTwo";
// import { SlideThree } from "@/components/hero/SlideThree";
// import { SlideFour } from "@/components/hero/SlideFour";

// const slides = [
//   {
//     id: "reception-showcase",
//     backgroundImage: "/arviaData/reception1.jpeg",
//     overlay:
//       "bg-[linear-gradient(10deg,rgba(19,40,85,0.92),rgba(19,40,85,0.75),rgba(19,40,85,0.45))]",
//     component: SlideOne,
//   },
//   {
//     id: "delhi-ncr-services",
//     backgroundImage: "/arviaData/reception2.jpeg",
//     overlay:
//       "bg-[linear-gradient(90deg,rgba(19,40,85,0.9),rgba(19,40,85,0.72),rgba(19,40,85,0.4))]",
//     component: SlideTwo,
//   },
//   {
//     id: "franchise-opportunity",
//     backgroundImage: "/arviaData/reception3.jpeg",
//     overlay:
//       "bg-[linear-gradient(90deg,rgba(19,40,85,0.92),rgba(19,40,85,0.68),rgba(19,40,85,0.42))]",
//     component: SlideThree,
//   },
//   {
//     id: "services-showcase",
//     backgroundImage: "/arviaData/reception1.jpeg",
//     overlay:
//       "bg-[linear-gradient(90deg,rgba(19,40,85,0.92),rgba(19,40,85,0.7),rgba(19,40,85,0.52))]",
//     component: SlideFour,
//   },
// ];

// export function HeroSlider() {
//   const autoplay = useRef(
//     Autoplay({
//       delay: 4000,
//       stopOnInteraction: false,
//       stopOnMouseEnter: true,
//     })
//   );
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) {
//       return;
//     }
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) {
//       return;
//     }

//     onSelect();
//     emblaApi.on("select", onSelect);

//     return () => {
//       emblaApi.off("select", onSelect);
//     };
//   }, [emblaApi, onSelect]);

//   return (
//     <section id="home-hero" className="relative overflow-hidden">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {slides.map((slide) => {
//             const SlideComponent = slide.component;

//             return (
//               <div key={slide.id} className="relative min-w-0 flex-[0_0_100%]">
//                 <div className="absolute inset-0">
//                   <Image
//                     src={slide.backgroundImage}
//                     alt={slide.id}
//                     fill
//                     priority
//                     className="object-cover"
//                   />
//                   <div className={`absolute inset-0 ${slide.overlay}`} />
//                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.2),transparent_34%)]" />
//                 </div>
//                 <SlideComponent />
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
//         {slides.map((slide, index) => (
//           <button
//             key={slide.id}
//             type="button"
//             onClick={() => emblaApi?.scrollTo(index)}
//             className={`h-2.5 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-12 bg-[#C9A646]" : "w-6 bg-white/30"
//               }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
