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
        tone="light"
      />

      <div className="mt-10 space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = active === index;

          return (
            <article
              key={item.question}
              className="bg-[var(--gold)] rounded-[22px] p-5"
            >
              <button
                type="button"
                onClick={() => setActive(isOpen ? -1 : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-semibold text-[#132855]">
                  {item.question}
                </span>
                <span className="text-2xl text-[#132855]">{isOpen ? "-" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden pr-10 pt-4 text-sm leading-7 text-[#fff]"
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
