"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SlideOne } from "@/components/hero/SlideOne";
import { SlideTwo } from "@/components/hero/SlideTwo";
import { SlideThree } from "@/components/hero/SlideThree";
import { SlideFour } from "@/components/hero/SlideFour";

const slides = [
  {
    id: "reception-showcase",
    backgroundImage: "/arviaData/reception1.jpeg",
    overlay:
      "bg-[linear-gradient(10deg,rgba(19,40,85,0.92),rgba(19,40,85,0.75),rgba(19,40,85,0.45))]",
    component: SlideOne,
  },
  {
    id: "delhi-ncr-services",
    backgroundImage: "/arviaData/reception2.jpeg",
    overlay:
      "bg-[linear-gradient(90deg,rgba(19,40,85,0.9),rgba(19,40,85,0.72),rgba(19,40,85,0.4))]",
    component: SlideTwo,
  },
  {
    id: "franchise-opportunity",
    backgroundImage: "/arviaData/reception3.jpeg",
    overlay:
      "bg-[linear-gradient(90deg,rgba(19,40,85,0.92),rgba(19,40,85,0.68),rgba(19,40,85,0.42))]",
    component: SlideThree,
  },
  {
    id: "services-showcase",
    backgroundImage: "/arviaData/reception1.jpeg",
    overlay:
      "bg-[linear-gradient(90deg,rgba(19,40,85,0.92),rgba(19,40,85,0.7),rgba(19,40,85,0.52))]",
    component: SlideFour,
  },
];

export function HeroSlider() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="home-hero" className="relative overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => {
            const SlideComponent = slide.component;

            return (
              <div key={slide.id} className="relative min-w-0 flex-[0_0_100%]">
                <div className="absolute inset-0">
                  <Image
                    src={slide.backgroundImage}
                    alt={slide.id}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 ${slide.overlay}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.2),transparent_34%)]" />
                </div>
                <SlideComponent />
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-12 bg-[#C9A646]" : "w-6 bg-white/30"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
