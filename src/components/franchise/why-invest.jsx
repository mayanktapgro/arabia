import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { investStats } from "@/data/franchise-content";

export function WhyInvest() {
  return (
    <Reveal className="section-shell">
      <SectionHeading
        eyebrow="Why Invest With Us"
        title="A business model shaped around premium demand and long-term trust"
        description="The franchise story is structured to give investors clarity fast: traction, scale, and a luxury category with enduring demand."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {investStats.map((stat) => (
          <article key={stat.label} className="section-card rounded-[24px] p-6">
            <p className="font-display text-4xl text-white">{stat.value}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{stat.label}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
