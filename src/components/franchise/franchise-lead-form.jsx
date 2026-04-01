import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FranchiseLeadForm() {
  return (
    <Reveal id="franchise-form" className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-14">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Apply Now"
            title="Share your details and our team will take the next step with you"
            description="The form is simplified exactly as requested. It now keeps only the essentials needed to begin the franchise conversation."
            tone="dark"
          />
        </div>

        <form className="rounded-[28px] border border-[rgba(201,166,70,0.16)] bg-[#FFF7F4] p-6 shadow-[0_18px_55px_rgba(145,103,85,0.1)] sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="premium-input border-[rgba(201,166,70,0.16)] bg-[#FFFDF8] text-[#2C2C2C]" placeholder="Name" />
            <input className="premium-input border-[rgba(201,166,70,0.16)] bg-[#FFFDF8] text-[#2C2C2C]" placeholder="Phone Number" />
            <input
              name="location"
              className="premium-input border-[rgba(201,166,70,0.16)] bg-[#FFFDF8] text-[#2C2C2C]"
              placeholder="City"
            />
            <input
              type="email"
              className="premium-input border-[rgba(201,166,70,0.16)] bg-[#FFFDF8] text-[#2C2C2C]"
              placeholder="Email"
            />
          </div>
          <Button
            as="button"
            type="button"
            className="mt-6 bg-[#C9A646] hover:bg-[#B8962E]"
          >
            Request Franchise Details
          </Button>
        </form>
      </div>
    </Reveal>
  );
}
