"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/data/franchise-content";

export function FranchiseFaq() {
  const [active, setActive] = useState(0);

  return (
    <Reveal className="section-shell pt-0">
      <SectionHeading
        eyebrow="FAQ"
        title="Answers to the questions that matter before someone applies"
        description="A clean accordion supports trust, reduces uncertainty, and keeps the page conversion-focused."
      />

      <div className="mt-10 space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = active === index;

          return (
            <article key={item.question} className="section-card rounded-[22px] p-5">
              <button
                type="button"
                onClick={() => setActive(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-lg font-semibold text-white">{item.question}</span>
                <span className="text-2xl text-[var(--gold)]">{isOpen ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden pr-10 pt-4 text-sm leading-7 text-[var(--muted)]"
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
