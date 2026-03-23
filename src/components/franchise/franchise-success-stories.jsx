import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ownerStories } from "@/data/franchise-content";

export function FranchiseSuccessStories() {
  return (
    <Reveal className="section-shell pt-0">
      <SectionHeading
        eyebrow="Success Stories"
        title="Partner stories that reinforce trust and momentum"
        description="Investor-facing proof works best when it balances emotional credibility with business performance indicators."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {ownerStories.map((story) => (
          <article key={story.name} className="section-card rounded-[24px] p-7">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold)]">
              {story.title}
            </p>
            <h3 className="font-display mt-4 text-3xl text-white">{story.name}</h3>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              “{story.quote}”
            </p>
            <div className="mt-6 inline-flex rounded-full border border-[rgba(201,161,74,0.3)] bg-[rgba(201,161,74,0.08)] px-4 py-2 text-sm text-[var(--gold)]">
              {story.metric}
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
