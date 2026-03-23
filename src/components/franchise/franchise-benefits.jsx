import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { benefits } from "@/data/franchise-content";

export function FranchiseBenefits() {
  return (
    <Reveal className="section-shell pt-0">
      <SectionHeading
        eyebrow="Franchise Benefits"
        title="The support system behind the brand"
        description="We present the franchise as a premium partnership model, not just a logo license. These cards help explain what partners actually gain."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((item) => (
          <article key={item.title} className="section-card rounded-[24px] p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(201,161,74,0.3)] bg-[rgba(201,161,74,0.1)] text-[var(--gold)]">
              ✦
            </div>
            <h3 className="font-display mt-5 text-2xl text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.copy}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
