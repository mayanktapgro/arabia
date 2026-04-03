import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { franchiseExpansion, franchiseHighlights } from "@/data/franchise-content";

export function FranchiseHero() {
  return (
    <Reveal
      id="franchise-hero"
      className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14"
    >
      <div className="overflow-hidden rounded-[32px] border border-[rgba(201,166,70,0.18)] bg-[linear-gradient(180deg,#FFF7F4_0%,#F9E8E0_55%,#F3DDD5_100%)] p-5 shadow-[0_24px_70px_rgba(145,103,85,0.12)] sm:p-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="px-2 py-4 sm:px-4">
            <p className="text-sm uppercase tracking-[0.28em] text-[#A8821E]">
              Franchise Opportunities
            </p>
            <h1 className="font-display mt-5 max-w-3xl text-5xl leading-[1.03] text-[#2C2C2C] sm:text-6xl">
              {franchiseExpansion.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6A5B4A]">
              {franchiseExpansion.description}
            </p>
            <Button
              href="#franchise-form"
              className="mt-8 bg-[#C9A646] hover:bg-[#B8962E]"
            >
              Apply Now
            </Button>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {franchiseHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-[rgba(201,166,70,0.16)] bg-[#FFF8F5] p-5 shadow-[0_12px_30px_rgba(145,103,85,0.08)]"
                >
                  <p className="font-display text-2xl text-[#2C2C2C]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#7B6A57]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[rgba(201,166,70,0.16)] bg-[linear-gradient(to_right,#F5F2EC,#EAC27A)] p-3 shadow-[0_20px_60px_rgba(145,103,85,0.12)]">
            <Image
              src="/images/franchise.jpg"
              alt="Premium skin clinic franchise visual"
              width={1100}
              height={900}
              priority
              className="h-full w-full rounded-[22px] object-cover"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
