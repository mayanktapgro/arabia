import { Reveal } from "@/components/ui/reveal";
import { trustBadges } from "@/data/landing-content";

export function TrustBar() {
  return (
    <Reveal as="section" className="border-b border-white/[0.08] bg-[rgba(20,20,22,0.7)]">
      <div className="mx-auto flex w-full max-w-7xl gap-4 overflow-x-auto px-4 py-6 sm:px-6 lg:px-8">
        {trustBadges.map((badge) => (
          <div
            key={badge}
            className="min-w-max rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-[var(--muted)]"
          >
            {badge}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
