import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { operatorStories } from "@/data/franchise-content";

export function FranchiseSuccessStories() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Operator Advantage"
        title="The support promise is as important as the business promise"
        description="This section now highlights the exact commercial tone you shared: opening momentum, customer ownership, and support that continues after launch."
        tone="dark"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {operatorStories.map((story) => (
          <article
            key={story.headline}
            className="rounded-[24px] border border-[rgba(201,166,70,0.16)] bg-[#FFF7F4] p-7 shadow-[0_16px_45px_rgba(145,103,85,0.08)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-[#A8821E]">
              {story.title}
            </p>
            <h3 className="font-display mt-4 text-3xl text-[#2C2C2C]">
              {story.headline}
            </h3>
            <p className="mt-4 text-base leading-8 text-[#6A5B4A]">{story.copy}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
