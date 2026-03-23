"use client";

import { useEffect, useState } from "react";
import { socialProofItems } from "@/data/landing-content";
import { Reveal } from "@/components/ui/reveal";

export function LiveSocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % socialProofItems.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <Reveal className="section-shell pt-0">
      <div className="section-card rounded-[24px] px-6 py-5 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">
          Live Social Proof
        </p>
        <p className="font-display mt-3 text-3xl text-white sm:text-4xl">
          {socialProofItems[activeIndex]}
        </p>
      </div>
    </Reveal>
  );
}
