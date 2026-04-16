
import Image from "next/image";
import { notFound } from "next/navigation";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getServiceBySlug, servicesData } from "@/data/servicesData";

// ...generateStaticParams remains the same
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notfound();
  }

  return (
    // Changed lux-bg to a cleaner white-ish bg
    <main className="bg-white text-[var(--text)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
          {/* CHANGED: Swapped beige overlays for a very light English Blue/white gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.96),rgba(240,245,250,0.85),rgba(255,255,255,0.2))]" />
        </div>

        <div className="relative mx-auto grid min-h-[62vh] w-full max-w-[1440px] items-center gap-12 px-5 pb-14 pt-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
          <div className="max-w-2xl">
            {/* Category: Uses the brighter Gold */}
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">
              {service.category}
            </p>
            {/* Title: Dark Grey/Black */}
            <h1 className="font-display mt-5 text-5xl leading-[1.04] text-[#111111] sm:text-6xl">
              {service.title}
            </h1>
            {/* Description: Muted Blue-Grey */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              {service.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Primary Button: Bright Gold */}
              <OpenContactButton className="bg-[var(--gold)] hover:bg-[#132855] text-white">
                Book Consultation
              </OpenContactButton>

              {/* CHANGED: Secondary Button is now English Blue */}
              {/* <OpenContactButton className="bg-[var(--english-blue)] hover:bg-[#152F47] text-white">
                Learn More
              </OpenContactButton> */}
            </div>
          </div>

          {/* CHANGED: Main Image Card: Swapped dark bg for White with English Blue border */}
          <div className="overflow-hidden rounded-[24px] border border-[var(--english-blue)]/20 bg-white p-3 shadow-2xl shadow-[var(--english-blue)]/5">
            <div className="relative overflow-hidden rounded-[20px]">
              <Image
                src={service.image}
                alt={service.title}
                width={920}
                height={980}
                priority
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- ADDED: Popular Points List (Left Side Below Hero) --- */}
      {service.extraInfo?.popularDrips?.length ? (
        <Reveal className="mx-auto w-full max-w-[1440px] px-5 pt-10 sm:px-8 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Popular Options"
                title="Featured Wellness Formulations"
                tone="dark"
              />
            </div>

            {/* Bright, colorful cards for the points */}
            <div className="grid gap-3 sm:grid-cols-2">
              {service.extraInfo.popularDrips.map((drip) => (
                <div
                  key={drip}
                  className="rounded-[16px] border border-[var(--gold)]/25 bg-[var(--gold)] px-5 py-4 text-sm leading-7 text-[#fff]"
                >
                  {drip}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      {/* Home Service Banner: Kept as is, already uses the right colors */}
      {service.homeServiceAvailable ? (
        <Reveal className="mx-auto w-full max-w-[1440px] px-5 pt-16 sm:px-8 lg:px-14">
          <div className="overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#1F3A5F,#284B76)] p-[1px] shadow-[0_20px_60px_rgba(31,58,95,0.16)]">
            <div className="grid gap-5 rounded-[23px] bg-[linear-gradient(135deg,rgba(31,58,95,0.96),rgba(31,58,95,0.88))] px-6 py-7 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[#EAC27A]">
                  Home Service Availability
                </p>
                <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">
                  Home service available in Delhi NCR
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
                  This treatment can be planned for select doorstep appointments with the same consultation-led care, comfort, and premium coordination.
                </p>
              </div>
              {/* Changed secondary button in this context to keep it readable */}
              <OpenContactButton className="premium-button whitespace-nowrap bg-[var(--gold)] hover:bg-[#B8962E] text-white">
                Book Home Service
              </OpenContactButton>
            </div>
          </div>
        </Reveal>
      ) : null}

      {/* Highlights: White cards with bright gold borders */}
      {service.keyHighlights?.length ? (
        <Reveal className="mx-auto w-full max-w-[1440px] px-5 pt-12 sm:px-8 lg:px-14">
          <div className="rounded-[24px] border border-[var(--english-blue)]/10 bg-white p-6 sm:p-8 shadow-xl shadow-[var(--english-blue)]/5">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">
              Key Highlights
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {service.keyHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[18px] border border-[var(--gold)]/30 bg-[var(--gold)] px-4 py-4 text-sm leading-7 text-[#fff]"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      {/* Benefits: White cards, English Blue Icon, Muted Text */}
      <Reveal className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Benefits"
              title="Why guests choose this treatment"
              description="Higher absorption, instant revitalization, and faster nutrient delivery compared to standard oral supplements."
              tone="dark"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-4">
            {service.benefits.map((benefit) => (
              <article
                key={benefit}
                className="rounded-[18px]  bg-[var(--english-blue)]/90  p-5 shadow-lg shadow-[var(--english-blue)]/5"
              >
                {/* CHANGED: Benefits icon uses English Blue and Gold */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)] text-sm font-semibold text-white">
                  +
                </div>
                <p className="mt-4 text-base leading-8 text-[#fff]">{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Procedure: Swapped dark bg context for White and Bright Gold accents */}
      <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-18 sm:px-8 lg:px-14">
        <SectionHeading
          eyebrow="Procedure"
          title="A clear premium treatment journey"
          description="We break the procedure into a calm, digestible flow that feels high-end, reassuring, and easy to understand."
          tone="dark"
        />

        <div className="relative mt-8">

          <div className="relative max-w-6xl mx-auto">

            {/* ✅ LINE aligned to cards width */}
            <div className="absolute inset-x-0 top-8 z-0 hidden h-[2px] bg-gradient-to-r from-[var(--gold)]/40 via-[var(--gold)] to-[var(--gold)]/40 lg:block" />

            {/* ✅ CARDS */}
            <div className={`grid gap-6 lg:grid-cols-${service.steps.length}`}>
              {service.steps.map((step, index) => (
                <article
                  key={step}
                  className="relative z-10 rounded-[20px] bg-[var(--english-blue)] p-6 shadow-xl shadow-[var(--english-blue)]/5"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)] bg-white text-xl font-semibold text-[var(--gold)]">
                    {index + 1}
                  </div>

                  <h4 className="font-display mt-5 text-lg text-[#fff]">
                    {step}
                  </h4>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Outcome: Swapped dark context for White and English Blue accents */}
      <Reveal className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr]">
          {/* Before After Card: Re-styled frame */}
          <div className="overflow-hidden rounded-[24px] border border-[var(--english-blue)]/20 bg-white p-3 shadow-2xl shadow-[var(--english-blue)]/5">
            <div className="relative h-[600px] overflow-hidden rounded-[20px]">
              <Image
                src="/images/before-after1.jpeg" // generic placeholder used
                alt={`${service.title} transformation example`}
                width={1200}
                height={900}
                className="h-[400px] w-full object-cover sm:h-[360px] lg:h-[400px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_28%,rgba(17,17,17,0.72)_100%)]" />
              <div className="absolute bottom-0 left-0 p-5 text-white sm:p-7">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold)]">
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

          {/* Outcome Info: White card with English Blue and Gold elements */}
          <div className="rounded-[24px] border border-[var(--english-blue)]/10 bg-white p-6 sm:p-7 shadow-xl shadow-[var(--english-blue)]/5">
            <SectionHeading
              eyebrow="Expected Outcome"
              title="What this treatment improves"
              description={
                service.results ||
                "This treatment is designed to improve visible skin quality, comfort, and confidence through a structured plan tailored to your goals."
              }
              tone="dark"
            />
            <div className="mt-6 space-y-3">
              {service.benefits.slice(0, 3).map((item) => (
                <div
                  key={item}
                  className="rounded-[16px] border border-[var(--gold)]/30 bg-[var(--gold)]/90 px-4 py-3 text-sm leading-7 text-[#fff]"
                >
                  {item}
                </div>
              ))}
            </div>
            <OpenContactButton className="mt-8 bg-[var(--gold)] hover:bg-[#132855] text-white">
              Book Consultation
            </OpenContactButton>
          </div>
        </div>
      </Reveal>
    </main>
  );
}



