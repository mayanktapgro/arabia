import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FranchiseHero() {
  return (
    <Reveal className="section-shell">
      <div className="section-card animated-gradient overflow-hidden rounded-[28px] p-6 sm:p-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">
              Franchise Opportunities
            </p>
            <h1 className="font-display mt-5 max-w-3xl text-5xl leading-[1.03] text-white sm:text-6xl">
              Own a Premium Skincare Clinic Franchise
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Join a fast-growing dermatology brand with proven success, luxury
              positioning, and a premium operating model built for modern
              aesthetic markets.
            </p>
            <Button href="#franchise-form" className="mt-8">
              Apply for Franchise
            </Button>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-white/10">
            <Image
              src="/images/franchise.jpg"
              alt="Luxury franchise clinic visual"
              width={960}
              height={760}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
