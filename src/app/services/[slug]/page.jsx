import Image from "next/image";
import { notFound } from "next/navigation";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getServiceBySlug, servicesData } from "@/data/servicesData";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="bg-[#F5F2EC] text-[#2C2C2C]">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,242,236,0.92),rgba(245,242,236,0.48))]" />
          </div>

          <div className="relative mx-auto grid min-h-[70vh] w-full max-w-[1440px] items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-14">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[#A8821E]">
                {service.category}
              </p>
              <h1 className="font-display mt-5 text-5xl leading-[1.04] sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6A5B4A]">
                {service.description}
              </p>
              <OpenContactButton className="mt-8 bg-[#C9A646] hover:bg-[#B8962E]">
                Book Consultation
              </OpenContactButton>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[rgba(201,166,70,0.18)] bg-[rgba(255,248,235,0.55)] p-3 shadow-[0_26px_80px_rgba(104,83,51,0.14)] backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={920}
                  height={980}
                  loading="lazy"
                  className="h-[380px] w-full object-cover sm:h-[520px]"
                />
              </div>
            </div>
          </div>
        </section>

        <Reveal className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Benefits"
                title="Why guests choose this treatment"
                description="Each service page follows the same refined structure so visitors can quickly understand value, comfort, and expected outcomes."
                tone="dark"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <article
                  key={benefit}
                  className="rounded-[22px] border border-[rgba(201,166,70,0.16)] bg-[#EEE8DF] p-5 shadow-[0_16px_45px_rgba(121,95,49,0.08)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF8EB] text-sm font-semibold text-[#A8821E]">
                    +
                  </div>
                  <p className="mt-4 text-base leading-8 text-[#5F5142]">{benefit}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
          <SectionHeading
            eyebrow="Procedure"
            title="A clear premium treatment journey"
            description="We break the procedure into a calm, digestible flow that feels high-end, reassuring, and easy to understand."
            tone="dark"
          />

          <div className="relative mt-12">
            <div className="absolute left-[10%] right-[10%] top-8 z-0 hidden h-[2px] bg-gradient-to-r from-[rgba(201,166,70,0.42)] via-[rgba(201,166,70,0.58)] to-[rgba(201,166,70,0.42)] lg:block" />
            <div className="grid gap-6 lg:grid-cols-4">
              {service.steps.map((step, index) => (
                <article
                  key={step}
                  className="relative z-10 rounded-[24px] border border-[rgba(201,166,70,0.16)] bg-[#EEE8DF] p-6 shadow-[0_14px_40px_rgba(117,91,47,0.08)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(201,166,70,0.24)] bg-[#FFFDF8] text-xl font-semibold text-[#A8821E]">
                    {index + 1}
                  </div>
                  <h3 className="font-display mt-5 text-2xl text-[#2C2C2C]">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[30px] border border-[rgba(201,166,70,0.18)] bg-[#EEE8DF] p-3 shadow-[0_24px_70px_rgba(121,95,49,0.12)]">
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src="/images/before-after1.jpeg"
                  alt={`${service.title} transformation example`}
                  width={1200}
                  height={900}
                  className="h-[400px] w-full object-cover sm:h-[520px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,rgba(44,44,44,0.52)_100%)]" />
                <div className="absolute bottom-0 left-0 p-7 text-white">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#EAC27A]">
                    Before / After
                  </p>
                  <p className="mt-3 max-w-md text-base leading-7 text-white/86">
                    Representative treatment results help clients understand the
                    kind of texture, tone, and confidence improvements this
                    service is designed to support.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-[rgba(201,166,70,0.18)] bg-[#EEE8DF] p-7 shadow-[0_24px_70px_rgba(121,95,49,0.1)]">
              <SectionHeading
                eyebrow="Expected Outcome"
                title="What this treatment is designed to improve"
                description={service.results}
                tone="dark"
              />
              <OpenContactButton className="mt-8 bg-[#C9A646] hover:bg-[#B8962E]">
                Book Consultation
              </OpenContactButton>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
