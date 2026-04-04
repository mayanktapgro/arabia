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
        tone="light"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {operatorAdvantageCards.map((story) => (
          <article
            key={story.title}
            className="bg-[var(--gold)] rounded-[24px] p-7 transition duration-300 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(201,166,70,0.12)]"
          >
            <p className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,166,70,0.24)] bg-[#fff] text-xl font-semibold text-[#132855]">
              {story.icon}
            </p>
            <h3 className="font-display mt-5 text-3xl text-[#132855]">
              {story.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-[#fff]">{story.copy}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
