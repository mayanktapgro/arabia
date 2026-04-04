"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { franchiseStats } from "@/data/franchise-content";

function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    let frameId;
    const duration = 1200;
    const start = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setDisplay(Math.round(value * progress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function FranchiseStatsSection() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="ROI Highlights"
        title="Built to create early momentum with premium operational support"
        description="These numbers frame the opportunity like a polished business proposition: fast-launch energy, targeted ROI, and structured support from day one."
        tone="light"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {franchiseStats.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.07, duration: 0.4 }}
            className="bg-[var(--gold)]  rounded-[24px] p-6"
          >
            <p className="text-xs uppercase tracking-[0.26em] text-[#fff]">
              {item.kicker}
            </p>
            <p className="font-display mt-4 text-5xl text-[#132855]">
              <CountUp value={item.value} suffix={item.suffix} />
            </p>
            <p className="mt-3 text-base text-[#fff]">{item.label}</p>
            <p className="mt-3 text-sm leading-7 text-[#fff]">{item.copy}</p>
          </motion.article>
        ))}
      </div>
    </Reveal>
  );
}
