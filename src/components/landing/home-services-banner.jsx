import { OpenContactButton } from "@/components/contact/open-contact-button";
import { Reveal } from "@/components/ui/reveal";
import { homeServiceContent } from "@/data/landing-content";

export function HomeServicesBanner() {
  return (
    <Reveal className="mx-auto w-full max-w-[1440px] px-5 pt-14  pb-10 sm:px-8 lg:px-14">
      <div className="lux-glow overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#1F3A5F,#284B76)] p-[1px]">
        <div className="rounded-[31px] bg-[linear-gradient(135deg,rgba(31,58,95,0.96),rgba(31,58,95,0.88))] px-6 py-8 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#EAC27A]">
                Home Care Experience
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-white sm:text-5xl">
                {homeServiceContent.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
                {homeServiceContent.description}
              </p>
            </div>

            <div className="rounded-[26px] border border-white/18 bg-white/12 p-6 backdrop-blur-md">
              <div className="space-y-3">
                {homeServiceContent.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-2xl border border-[rgba(201,166,70,0.18)] bg-white/10 px-4 py-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(201,166,70,0.18)] text-sm font-semibold text-[#EAC27A]">
                      +
                    </span>
                    <span className="text-sm font-medium text-white">{service}</span>
                  </div>
                ))}
              </div>

              <OpenContactButton className="premium-button mt-6 w-full hover:bg-[#B8962E]">
                {homeServiceContent.cta}
              </OpenContactButton>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
