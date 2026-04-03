"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/landing-content";

export function Testimonials() {
  const autoplay = useRef(
    Autoplay({
      delay: 3600,
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
      id="testimonials"
      className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14"
    >
      <SectionHeading
        eyebrow="Testimonials"
        title="Guests from across the region and Europe return for visible, confidence-led results"
        description="The section is now a premium carousel with richer testimonial volume, stronger treatment context, and a more editorial card layout."
        tone="dark"
      />

      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="-ml-6 flex">
          {testimonials.map((item, index) => (
            <div
              key={`${item.name}-${item.treatment}`}
              className="min-w-0 flex-[0_0_92%] pl-6 sm:flex-[0_0_56%] lg:flex-[0_0_34%]"
            >
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                className="h-full rounded-[26px] border border-[rgba(201,166,70,0.18)] bg-[#EEE8DF] p-6 shadow-[0_18px_50px_rgba(122,98,57,0.1)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#C9A646,#EAC27A)] text-lg font-semibold text-white shadow-[0_12px_30px_rgba(201,166,70,0.22)]">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#2C2C2C]">{item.name}</p>
                    <p className="text-sm text-[#8C7760]">{item.country}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="rounded-full bg-[#F5F2EC] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#A8821E]">
                    {item.treatment}
                  </p>
                  <p className="text-sm font-semibold tracking-[0.12em] text-[#A8821E]">
                    {Array.from({ length: item.rating }, () => "\u2605").join("")}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-8 text-[#5F5142]">
                  &quot;{item.quote}&quot;
                </p>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
