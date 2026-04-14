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
        description="Explore real transformations that showcase visible results, personalized care, and the confidence our treatments bring to every client."
        // description="An interactive before-and-after slider gives your visitors instant confidence and visually proves that the treatment journey works."
        align="center"
        tone="dark"
      />

      <div className="premium-card relative mt-4 overflow-hidden rounded-[22px] p-4 sm:p-5">
        {!loaded && <SkeletonBlock className="absolute inset-4 z-10 rounded-[20px]" />}

        <div className="relative overflow-hidden rounded-[20px]">
          <Image
            src="/images/before-after2.jpeg"
            alt="Before skincare treatment"
            width={1200}
            height={720}
            className="h-[20rem] w-full object-cover sm:h-[22rem]"
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
                className="h-[20rem] w-full object-cover sm:h-[22rem]"
              />
            </div>
          </div>

          <div
            className="absolute inset-y-0 z-20 w-1 bg-white"
            style={{ right: `${position}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.35] bg-[var(--gold)] text-black shadow-xl">
              <span className="text-xs font-bold">&lt;&gt;</span>
            </div>
          </div>

          <div className="absolute left-4 top-4 rounded-full bg-[rgba(44,44,44,0.78)] px-3 py-1.5 text-xs font-medium text-white sm:left-5 sm:top-5 sm:px-4 sm:py-2 sm:text-sm">
            Before
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-[var(--gold)] px-3 py-1.5 text-xs font-semibold text-black sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-sm">
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
          className="mt-4 w-full accent-[var(--gold)]"
        />
      </div>
    </Reveal>
  );
}
