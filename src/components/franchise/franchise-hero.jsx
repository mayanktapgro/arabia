import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { franchiseExpansion, franchiseHighlights } from "@/data/franchise-content";
import { OpenFranchiseModal } from "./OpenFranchiseModal";

export function FranchiseHero() {
  return (
    <Reveal
      id="franchise-hero"
      className="mx-auto w-full max-w-[1440px] px-5 py-4 sm:px-8 lg:px-14"
    >
      <div className="overflow-hidden rounded-[32px] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.07)_100%)] p-5 shadow-[0_26px_70px_rgba(12,24,44,0.18)] backdrop-blur-md sm:p-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="px-2 py-4 sm:px-4">
            <p className="text-sm uppercase tracking-[0.28em] text-[#EAC27A]">
              Franchise Opportunities
            </p>
            <h1 className="font-display mt-5 max-w-lg text-5xl leading-[1.03] text-white sm:text-2xl">
              {franchiseExpansion.title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/78">
              {franchiseExpansion.description}
            </p>

            <OpenFranchiseModal>
              <button className="bg-[#C9A646] px-5 py-2 cursor-pointer hover:scale-105 mt-2 rounded-full text-white">
                Apply Now
              </button>
            </OpenFranchiseModal>

            {/* <Button
              href="#franchise-form"
              className="premium-button mt-8 hover:bg-[#B8962E]"
            >
              Apply Now
            </Button> */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {franchiseHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-[rgba(255,255,255,0.14)] bg-white/10 p-5 backdrop-blur-md"
                >
                  <p className="font-display text-2xl text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] h-[500px] border border-[rgba(255,255,255,0.12)] bg-white/10 p-3 backdrop-blur-md">
            <Image
              src="/arviaData/franchise.jpeg"
              alt="Premium skin clinic franchise visual"
              width={1100}
              height={1100}
              priority
              className="h-full w-full rounded-[22px] object-cover"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
