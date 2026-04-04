import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { businessModelCards } from "@/data/franchise-content";

export function InvestmentDetails() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Business Format"
        title="Clear positioning for cities, territory, and clinic size"
        description="The page now presents the business model more like a premium commercial pitch deck, while still keeping the softer homepage aesthetic."
        tone="light"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {businessModelCards.map((card) => (
          <article
            key={card.title}
            className="bg-[var(--gold)] rounded-[24px] p-6 transition duration-300 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(201,166,70,0.12)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-[#fff]">
              {card.title}
            </p>
            <p className="font-display mt-4 text-4xl text-[#132855]">{card.value}</p>
            <p className="mt-3 text-sm leading-7 text-[#fff]">{card.caption}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
