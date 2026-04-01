"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
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
      dragFree: false,
    },
    [autoplay.current]
  );

  return (
    <Reveal id="services" className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Top Services"
        title="Refined skin clinic treatments under warm Arabian light"
        description="Each service card is designed to feel calm, premium, and clinically trustworthy, with gold accents, soft cream surfaces, and graceful hover motion."
        tone="dark"
      />

      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="-ml-6 flex">
          {topServices.map((service, index) => (
            <div
              key={service.title}
              className="min-w-0 flex-[0_0_86%] pl-6 sm:flex-[0_0_48%] lg:flex-[0_0_31%] xl:flex-[0_0_20%]"
            >
              <motion.article
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group h-full overflow-hidden rounded-[24px] border border-[rgba(201,166,70,0.18)] bg-[#EEE8DF] shadow-[0_18px_50px_rgba(128,101,52,0.1)] transition duration-300 hover:shadow-[0_22px_60px_rgba(201,166,70,0.22)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={640}
                    height={640}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_15%,rgba(44,44,44,0.12)_100%)]" />
                </div>

                <div className="p-5">
                  <h3 className="font-display text-2xl text-[#2C2C2C]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6A5B4A]">
                    {service.description}
                  </p>
                  <OpenContactButton
                    variant="ghost"
                    className="mt-5 border-[rgba(201,166,70,0.26)] bg-[#F5F2EC] text-[#2C2C2C] hover:bg-[#F1E8D8]"
                  >
                    Book Appointment
                  </OpenContactButton>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
