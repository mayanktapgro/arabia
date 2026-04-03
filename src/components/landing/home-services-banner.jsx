import { OpenContactButton } from "@/components/contact/open-contact-button";
import { Reveal } from "@/components/ui/reveal";
import { homeServiceContent } from "@/data/landing-content";

export function HomeServicesBanner() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#C9A646,#EAC27A)] p-[1px] shadow-[0_24px_70px_rgba(201,166,70,0.22)]">
        <div className="rounded-[31px] bg-[linear-gradient(135deg,rgba(255,248,235,0.22),rgba(255,255,255,0.12))] px-6 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#FFF8EB]">
                Home Care Experience
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-[#2C2C2C] sm:text-5xl">
                {homeServiceContent.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#473A2A]">
                {homeServiceContent.description}
              </p>
            </div>

            <div className="rounded-[26px] bg-[rgba(255,248,235,0.44)] p-6 backdrop-blur-sm">
              <div className="space-y-3">
                {homeServiceContent.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-2xl bg-[rgba(255,255,255,0.28)] px-4 py-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF8EB] text-sm font-semibold text-[#A8821E]">
                      +
                    </span>
                    <span className="text-sm font-medium text-[#2C2C2C]">{service}</span>
                  </div>
                ))}
              </div>

              <OpenContactButton className="mt-6 w-full bg-[#2C2C2C] text-white hover:bg-[#1F1F1F]">
                {homeServiceContent.cta}
              </OpenContactButton>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
