import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { franchiseHighlights } from "@/data/franchise-content";

export function WhyInvest() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Why Partner"
        title="A luxury-led clinic model built for scale, credibility, and sustained growth"
        description="For founders who value premium positioning, proven treatment systems, and ongoing strategic support to build a high-performing clinic business."
        tone="light"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {franchiseHighlights.map((stat) => (
          <article
            key={stat.label}
            className="bg-[var(--gold)] rounded-[24px] p-6 transition duration-300 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(201,166,70,0.12)]"
          >
            <p className="font-display text-4xl text-[#132855]">{stat.value}</p>
            <p className="mt-3 text-sm leading-7 text-[#fff]">{stat.label}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
