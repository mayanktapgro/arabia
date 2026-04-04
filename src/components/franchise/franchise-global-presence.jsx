import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { globalPresenceCards } from "@/data/franchise-content";

export function FranchiseGlobalPresence() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <SectionHeading
        eyebrow="Global Presence"
        title="Positioned for premium cities, regional growth, and master expansion"
        description="The page now closes with a stronger business-development frame: flagship city presence, regional credibility, and territory-scale ambition."
        tone="light"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {globalPresenceCards.map((item) => (
          <article
            key={item.title}
            className="bg-[var(--gold)] rounded-[26px] p-7"
          >
            <p className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,166,70,0.26)] bg-[#fff] text-xl text-[#132855]">
              {item.icon}
            </p>
            <h3 className="font-display mt-5 text-3xl text-[#132855]">{item.title}</h3>
            <p className="mt-4 text-base leading-8 text-[#fff]">{item.copy}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
