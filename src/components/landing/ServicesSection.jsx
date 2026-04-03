"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { topServices } from "@/data/landing-content";

export function ServicesSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 3200,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [autoplay.current]
  );

  return (
    <Reveal
      id="services"
      className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14"
    >
      <SectionHeading
        eyebrow="Top Services"
        title="Signature treatments presented with clinical precision and luxury calm"
        description="The services carousel now uses one structured treatment dataset, so the homepage, mega menu, and dynamic service pages all stay aligned."
        tone="dark"
      />

      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="-ml-6 flex">
          {topServices.map((service, index) => (
            <div
              key={service.slug}
              className="min-w-0 flex-[0_0_86%] pl-6 sm:flex-[0_0_48%] lg:flex-[0_0_31%] xl:flex-[0_0_20%]"
            >
              <ServiceCard
                service={service} 
                index={index}
                showCategory={false}
                showDescription={false}
                ctaLabel="Explore Treatment"
              />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
