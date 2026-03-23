"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { journeySteps } from "@/data/landing-content";

export function Journey() {
  return (
    <Reveal className="section-shell">
      <SectionHeading
        eyebrow="Treatment Journey"
        title="A reassuring flow that removes uncertainty from the first click"
        description="We use a simple step-based explanation to lower friction and make the path to results feel clear, premium, and credible."
      />

      <div className="relative mt-12">
        <motion.div
          className="absolute left-0 top-9 hidden h-[2px] w-full origin-left bg-gradient-to-r from-[rgba(201,161,74,0.7)] to-transparent lg:block"
          initial={{ scaleX: 0.1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
        />
        <div className="grid gap-6 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55 }}
              className="section-card relative rounded-[24px] p-6"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(201,161,74,0.35)] bg-[rgba(201,161,74,0.1)] text-2xl font-semibold text-[var(--gold)]">
                0{index + 1}
              </div>
              <h3 className="font-display mt-5 text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
