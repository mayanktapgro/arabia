"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/franchise-content";

export function FranchiseProcess() {
  return (
    <Reveal className="section-shell pt-0">
      <SectionHeading
        eyebrow="Process"
        title="A clear step flow from first application to launch"
        description="This timeline turns a complex franchise journey into a simple high-conviction path."
      />

      <div className="relative mt-12">
        <motion.div
          className="absolute left-0 top-9 hidden h-[2px] w-full bg-gradient-to-r from-[rgba(201,161,74,0.8)] to-transparent lg:block"
          initial={{ scaleX: 0.15 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article key={step} className="section-card rounded-[24px] p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(201,161,74,0.35)] bg-[rgba(201,161,74,0.1)] text-xl font-semibold text-[var(--gold)]">
                {index + 1}
              </div>
              <h3 className="font-display mt-5 text-2xl text-white">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
