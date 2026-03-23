"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkeletonBlock } from "@/components/ui/skeleton-block";

export function BeforeAfterShowcase() {
  const [position, setPosition] = useState(58);
  const [loaded, setLoaded] = useState(false);

  return (
    <Reveal id="results" className="section-shell">
      <SectionHeading
        eyebrow="Transformation"
        title="Real Results. Real People."
        description="An interactive before-and-after slider gives your visitors instant confidence and visually proves that the treatment journey works."
        align="center"
      />

      <div className="section-card relative mt-12 overflow-hidden rounded-[24px] p-4 sm:p-6">
        {!loaded && <SkeletonBlock className="absolute inset-4 z-10 rounded-[20px]" />}

        <div className="relative overflow-hidden rounded-[20px]">
          <Image
            src="/images/before-after2.jpeg"
            alt="Before skincare treatment"
            width={1200}
            height={720}
            className="h-[26rem] w-full object-cover"
            onLoad={() => setLoaded(true)}
          />

          <div
            className="absolute inset-y-0 right-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/before-after2.jpeg"
                alt="After skincare treatment"
                width={1200}
                height={720}
                className="h-[26rem] w-full object-cover"
              />
            </div>
          </div>

          <div
            className="absolute inset-y-0 z-20 w-1 bg-white/[0.9]"
            style={{ right: `${position}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.35] bg-[var(--gold)] text-black shadow-xl">
              <span className="text-xs font-bold">&lt;&gt;</span>
            </div>
          </div>

          <div className="absolute left-5 top-5 rounded-full bg-black/45 px-4 py-2 text-sm text-white">
            Before
          </div>
          <div className="absolute right-5 top-5 rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-semibold text-black">
            After
          </div>
        </div>

        <input
          aria-label="Before and after comparison"
          type="range"
          min="20"
          max="80"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="mt-6 w-full accent-[var(--gold)]"
        />
      </div>
    </Reveal>
  );
}
