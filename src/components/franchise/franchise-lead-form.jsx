import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FranchiseLeadForm() {
  return (
    <Reveal id="franchise-form" className="section-shell pt-0">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Request Details"
            title="Start the conversation with a high-visibility lead form"
            description="The form is intentionally prominent and simplified so potential partners can express interest quickly from any device."
          />
        </div>

        <form className="section-card rounded-[28px] p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="premium-input" placeholder="Name" />
            <input className="premium-input" placeholder="Phone" />
            <input className="premium-input" placeholder="City" />
            <select className="premium-input" defaultValue="">
              <option value="" disabled>
                Investment budget
              </option>
              <option>$150K - $250K</option>
              <option>$250K - $400K</option>
              <option>$400K+</option>
            </select>
          </div>
          <textarea
            className="premium-input mt-4 min-h-32"
            placeholder="Tell us about your experience, market, or goals"
          />
          <Button as="button" type="button" className="mt-6">
            Request Franchise Details
          </Button>
        </form>
      </div>
    </Reveal>
  );
}
