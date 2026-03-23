"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { reasons } from "@/data/landing-content";

const iconGlyphs = ["✦", "◌", "✳", "◇"];

export function WhyChooseUs() {
  return (
    <Reveal id="why-us" className="section-shell">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Designed to increase trust before your visitors ever speak to a doctor"
        description="This section combines premium presentation and practical proof points so the page feels credible, safe, and worth acting on."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason, index) => (
          <motion.article
            key={reason.title}
            whileHover={{ y: -6 }}
            className="section-card rounded-[24px] p-6"
          >
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,161,74,0.35)] bg-[rgba(201,161,74,0.1)] text-2xl text-[var(--gold)]"
              animate={{ rotate: [0, 4, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, delay: index * 0.2 }}
            >
              {iconGlyphs[index]}
            </motion.div>
            <h3 className="font-display mt-5 text-2xl text-white">{reason.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{reason.copy}</p>
          </motion.article>
        ))}
      </div>
    </Reveal>
  );
}
