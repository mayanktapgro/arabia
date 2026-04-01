"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/landing-content";

export function Testimonials() {
  return (
    <Reveal id="testimonials" className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by guests from across the region and beyond"
        description="International clients return for the calm atmosphere, thoughtful care, and visible results delivered with a refined Arabic luxury sensibility."
        tone="dark"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="rounded-[24px] border border-[rgba(201,166,70,0.18)] bg-[#EEE8DF] p-6 shadow-[0_18px_50px_rgba(122,98,57,0.1)]"
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

            <div className="mt-5 flex items-center justify-between gap-4">
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
        ))}
      </div>
    </Reveal>
  );
}
