import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { supportPillars } from "@/data/franchise-content";

export function FranchiseBenefits() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="End-to-End Support"
        title="A fully managed support system built for long-term clinic success"
        description="Every element—from branding and technology to marketing, hiring, and operations—is carefully structured to deliver a smooth, scalable, and high-performance business experience."
        tone="light"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {supportPillars.map((item, index) => (
          <article
            key={item.title}
            className="bg-[var(--gold)] rounded-[24px] p-6 transition duration-300 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(201,166,70,0.12)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,166,70,0.24)] bg-[#FFF] text-lg font-semibold text-[#132855]">
              0{index + 1}
            </div>
            <h3 className="font-display mt-5 text-2xl text-[#132855]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#fff]">{item.copy}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
