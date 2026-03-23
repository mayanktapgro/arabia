import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { investmentCards } from "@/data/franchise-content";

export function InvestmentDetails() {
  return (
    <Reveal className="section-shell pt-0">
      <SectionHeading
        eyebrow="Investment Details"
        title="Clear, premium framing for cost and growth expectations"
        description="Simple cards help potential partners scan important business details quickly without feeling overwhelmed."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {investmentCards.map((card) => (
          <article key={card.title} className="section-card rounded-[24px] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold)]">
              {card.title}
            </p>
            <p className="font-display mt-4 text-4xl text-white">{card.value}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.caption}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
