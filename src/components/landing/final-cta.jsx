import { OpenContactButton } from "@/components/contact/open-contact-button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <Reveal id="contact" className="section-shell">
      <div className="section-card overflow-hidden rounded-[28px] border border-[rgba(201,161,74,0.25)] bg-[linear-gradient(135deg,#0b0b0c,rgba(201,161,74,0.18),#0b0b0c)] px-6 py-12 sm:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">
          High-conversion CTA
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-white sm:text-5xl">
          Start Your Skin Transformation Today
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
          Book a free consultation and let our specialists create a premium,
          science-backed treatment pathway for your goals.
        </p>
        <OpenContactButton className="mt-8">Book Free Consultation</OpenContactButton>
      </div>
    </Reveal>
  );
}
