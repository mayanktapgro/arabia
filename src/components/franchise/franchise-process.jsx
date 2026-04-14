"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/data/franchise-content";

export function FranchiseProcess() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Process"
        title="A refined journey from consultation to successful clinic launch"
        description="From your first discussion to location setup, training, and launch, we guide you through every step with a structured, premium, and fully supported process."
        tone="light"
      />

      <div className="relative mt-10">
        <motion.div
          className="absolute left-[10%] right-[10%] top-8 z-0 hidden h-[2px] bg-[#fff] to-[rgba(201,166,70,0.42)] lg:block"
          initial={{ scaleX: 0.15 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step}
              className="bg-[var(--gold)] relative z-10 rounded-[24px] p-6"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(212,175,55,0.24)] bg-[#fff] text-xl font-semibold text-[#132855]">
                {index + 1}
              </div>
              <h3 className="font-display mt-5 text-2xl text-[#132855]">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
