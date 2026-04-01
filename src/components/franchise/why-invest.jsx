import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { franchiseHighlights } from "@/data/franchise-content";

export function WhyInvest() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Why Partner"
        title="A business opportunity designed around premium positioning and operational support"
        description="This franchise model is built for operators who want luxury presentation, practical execution, and support that continues well beyond opening day."
        tone="dark"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {franchiseHighlights.map((stat) => (
          <article
            key={stat.label}
            className="rounded-[24px] border border-[rgba(201,166,70,0.16)] bg-[#FFF7F4] p-6 shadow-[0_16px_45px_rgba(145,103,85,0.08)]"
          >
            <p className="font-display text-4xl text-[#2C2C2C]">{stat.value}</p>
            <p className="mt-3 text-sm leading-7 text-[#6A5B4A]">{stat.label}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
