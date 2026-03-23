"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/landing-content";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <Reveal id="testimonials" className="section-shell">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our clients say"
        description="Auto-rotating reviews keep the page moving and help reinforce social proof without adding clutter."
        align="center"
      />

      <div className="testimonial-mask mx-auto mt-12 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.article
            key={active.name}
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -12 }}
            transition={{ duration: 0.5 }}
            className="section-card rounded-[28px] p-8 sm:p-10"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(201,161,74,0.3)] bg-[rgba(201,161,74,0.1)] text-xl font-semibold text-[var(--gold)]">
                  {active.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{active.name}</p>
                  <p className="text-sm text-[var(--muted)]">{active.role}</p>
                </div>
              </div>
              <div className="text-[var(--gold)]">{"*".repeat(active.rating)}</div>
            </div>

            <p className="font-display mt-8 text-3xl leading-relaxed text-white">
              &quot;{active.quote}&quot;
            </p>
          </motion.article>
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
