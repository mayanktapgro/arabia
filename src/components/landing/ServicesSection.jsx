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
      className=" w-full max-w-full bg-gradient-to-br from-[#FFF8EB] via-[#F5EAD7] to-[#EAC27A]/30 rounded px-5 py-8 sm:px-8 lg:px-14"
    >
      <SectionHeading
        eyebrow="Top Services"
        title="Clinically precise, luxuriously calm signature treatments."
        description="The services carousel now uses one structured treatment dataset, so the homepage, mega menu, and dynamic service pages all stay aligned."
        tone="dark"
      />

      <div className="mt-10 overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex">
          {topServices.map((service, index) => (
            <div
              key={service.slug}
              className="min-w-0 flex-[0_0_84%] pl-5 sm:flex-[0_0_48%] lg:flex-[0_0_31%] xl:flex-[0_0_20%]"
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
