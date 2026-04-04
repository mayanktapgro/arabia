import { OpenContactButton } from "@/components/contact/open-contact-button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <Reveal id="contact" className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-14">
      <div className="overflow-hidden rounded-[28px] border border-[rgba(212,175,55,0.22)] bg-[linear-gradient(135deg,#132855,#1B376F,#132855)] px-6 py-12 shadow-[0_28px_80px_rgba(19,40,85,0.22)] sm:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#E7C968]">
          Premium Consultation
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-white sm:text-5xl">
          Begin your radiance journey in a space designed for calm and confidence
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
          Book a private appointment and let our specialists design the right
          facial, laser, or rejuvenation plan for your skin goals.
        </p>
        <OpenContactButton className="premium-button mt-8 hover:bg-[#B8962E]">
          Book Appointment
        </OpenContactButton>
      </div>
    </Reveal>
  );
}
