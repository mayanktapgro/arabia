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
        title="A structured path from first call to clinic launch"
        description="The timeline stays simple and premium: we help you move from enquiry to market mapping, setup, staffing, and launch."
        tone="dark"
      />

      <div className="relative mt-12">
        <motion.div
          className="absolute left-[10%] right-[10%] top-8 z-0 hidden h-[2px] bg-gradient-to-r from-[rgba(201,166,70,0.42)] via-[rgba(201,166,70,0.58)] to-[rgba(201,166,70,0.42)] lg:block"
          initial={{ scaleX: 0.15 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step}
              className="relative z-10 rounded-[24px] border border-[rgba(201,166,70,0.16)] bg-[#FFF7F4] p-6 shadow-[0_14px_40px_rgba(145,103,85,0.08)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(201,166,70,0.24)] bg-[#FFFDF8] text-xl font-semibold text-[#A8821E]">
                {index + 1}
              </div>
              <h3 className="font-display mt-5 text-2xl text-[#2C2C2C]">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
