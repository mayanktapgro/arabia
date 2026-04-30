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
      className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-14"
    >
      <SectionHeading
        eyebrow="Testimonials"
        title="Guests from across the region and Europe return for visible, confidence-led results"
        description="Hear from our clients who trust us for transformative results, expert care, and a truly luxurious treatment experience."
        // description="The section is now a premium carousel with richer testimonial volume, stronger treatment context, and a more editorial card layout."
        tone="dark"
      />

      <div className="mt-10 overflow-hidden" ref={emblaRef}>
        <div className=" px-8 flex">
          {testimonials.map((item, index) => (
            <div
              key={`${item.name}-${item.treatment}`}
              className="min-w-0 flex-[0_0_92%] pl-5 sm:flex-[0_0_54%] lg:flex-[0_0_34%]"
            >
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                className="premium-card h-full rounded-[22px] p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#D4AF37,#E7C968)] text-base font-semibold text-[var(--text)] shadow-[0_12px_30px_rgba(212,175,55,0.18)]">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[var(--text)]">{item.name}</p>
                    <p className="text-sm text-[var(--muted)]">{item.country}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="rounded-full border border-[rgba(201,166,70,0.18)] bg-[rgba(201,166,70,0.08)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
                    {item.treatment}
                  </p>
                  <p className="text-sm font-semibold tracking-[0.12em] text-[var(--gold)]">
                    {Array.from({ length: item.rating }, () => "\u2605").join("")}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
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
