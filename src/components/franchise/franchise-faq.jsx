"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/data/franchise-content";

export function FranchiseFaq() {
  const [active, setActive] = useState(0);

  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="FAQ"
        title="Key questions answered in a clean commercial format"
        description="These answers now reflect the updated business pitch, city focus, ROI target, support system, and clinic size range."
        tone="dark"
      />

      <div className="mt-10 space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = active === index;

          return (
            <article
              key={item.question}
              className="rounded-[22px] border border-[rgba(201,166,70,0.16)] bg-[#FFF7F4] p-5 shadow-[0_12px_35px_rgba(145,103,85,0.08)]"
            >
              <button
                type="button"
                onClick={() => setActive(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-semibold text-[#2C2C2C]">
                  {item.question}
                </span>
                <span className="text-2xl text-[#A8821E]">{isOpen ? "-" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden pr-10 pt-4 text-sm leading-7 text-[#6A5B4A]"
                  >
                    {item.answer}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </Reveal>
  );
}
