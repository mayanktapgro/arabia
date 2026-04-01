import { OpenContactButton } from "@/components/contact/open-contact-button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <Reveal id="contact" className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14">
      <div className="overflow-hidden rounded-[32px] border border-[rgba(201,166,70,0.2)] bg-[linear-gradient(135deg,#2C2C2C,#473824,#2C2C2C)] px-6 py-14 shadow-[0_28px_80px_rgba(68,53,24,0.25)] sm:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#EAC27A]">
          Premium Consultation
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-[#FFF8EE] sm:text-5xl">
          Begin your radiance journey in a space designed for calm and confidence
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#F1E5D0]">
          Book a private appointment and let our specialists design the right
          facial, laser, or rejuvenation plan for your skin goals.
        </p>
        <OpenContactButton className="mt-8 bg-[#C9A646] hover:bg-[#B8962E]">
          Book Appointment
        </OpenContactButton>
      </div>
    </Reveal>
  );
}
