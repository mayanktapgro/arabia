import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { operatorAdvantageCards } from "@/data/franchise-content";

export function FranchiseSuccessStories() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Operator Advantage"
        title="A stronger commercial system built for growth, marketing, training, and returns"
        description="This section now reflects the actual operator advantage: business support, marketing assistance, training programs, and a high-ROI model."
        tone="dark"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {operatorAdvantageCards.map((story) => (
          <article
            key={story.title}
            className="rounded-[24px] border border-[rgba(201,166,70,0.16)] bg-[linear-gradient(to_right,#F5F2EC,#FFF7F4)] p-7 shadow-[0_16px_45px_rgba(145,103,85,0.08)] transition duration-300 hover:scale-[1.02]"
          >
            <p className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,166,70,0.24)] bg-[#FFFDF8] text-xl font-semibold text-[#A8821E]">
              {story.icon}
            </p>
            <h3 className="font-display mt-5 text-3xl text-[#2C2C2C]">
              {story.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-[#6A5B4A]">{story.copy}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
