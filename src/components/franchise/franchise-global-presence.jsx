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
        tone="dark"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {globalPresenceCards.map((item) => (
          <article
            key={item.title}
            className="rounded-[26px] border border-[rgba(201,166,70,0.18)] bg-[linear-gradient(180deg,#FFF8F5,#F6E4DD)] p-7 shadow-[0_18px_50px_rgba(145,103,85,0.1)]"
          >
            <p className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,166,70,0.26)] bg-[#FFFDF8] text-xl text-[#A8821E]">
              {item.icon}
            </p>
            <h3 className="font-display mt-5 text-3xl text-[#2C2C2C]">{item.title}</h3>
            <p className="mt-4 text-base leading-8 text-[#6A5B4A]">{item.copy}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
