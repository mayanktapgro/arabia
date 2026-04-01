import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { supportPillars } from "@/data/franchise-content";

export function FranchiseBenefits() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="End-to-End Support"
        title="Displayed in the exact support format your franchise pitch needs"
        description="These are the core operating pillars behind the opportunity: theme, technology, marketing, location, customer support, and staffing systems."
        tone="dark"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {supportPillars.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[24px] border border-[rgba(201,166,70,0.16)] bg-[#FFF7F4] p-6 shadow-[0_14px_40px_rgba(145,103,85,0.08)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,166,70,0.24)] bg-[#FFFDF8] text-lg font-semibold text-[#A8821E]">
              0{index + 1}
            </div>
            <h3 className="font-display mt-5 text-2xl text-[#2C2C2C]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6A5B4A]">{item.copy}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
