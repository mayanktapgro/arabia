import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { franchiseHighlights } from "@/data/franchise-content";

export function WhyInvest() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Why Partner"
        title="A premium clinic model built around luxury care, scalable systems, and regional demand"
        description="The opportunity is framed for founders who want brand-led presentation, strong treatment credibility, and a support structure that continues well after launch."
        tone="dark"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {franchiseHighlights.map((stat) => (
          <article
            key={stat.label}
            className="rounded-[24px] border border-[rgba(201,166,70,0.16)] bg-[linear-gradient(to_right,#F5F2EC,#FFF7F4)] p-6 shadow-[0_16px_45px_rgba(145,103,85,0.08)] transition duration-300 hover:scale-[1.01]"
          >
            <p className="font-display text-4xl text-[#2C2C2C]">{stat.value}</p>
            <p className="mt-3 text-sm leading-7 text-[#6A5B4A]">{stat.label}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
