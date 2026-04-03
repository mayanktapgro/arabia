import { FloatingActionButton } from "@/components/shared/floating-action-button";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { FranchiseHero } from "@/components/franchise/franchise-hero";
import { WhyInvest } from "@/components/franchise/why-invest";
import { FranchiseBenefits } from "@/components/franchise/franchise-benefits";
import { InvestmentDetails } from "@/components/franchise/investment-details";
import { FranchiseProcess } from "@/components/franchise/franchise-process";
import { FranchiseSuccessStories } from "@/components/franchise/franchise-success-stories";
import { FranchiseStatsSection } from "@/components/franchise/franchise-stats-section";
import { FranchiseGlobalPresence } from "@/components/franchise/franchise-global-presence";
import { FranchiseLeadForm } from "@/components/franchise/franchise-lead-form";
import { FranchiseFaq } from "@/components/franchise/franchise-faq";

export default function FranchisePage() {
  return (
    <>

      <FloatingActionButton href="#franchise-form" label="Apply Now" />
      <main className="bg-[linear-gradient(180deg,#FFF7F5_0%,#FCEBE5_38%,#F8E2DB_100%)] text-[#2C2C2C]">
        <FranchiseHero />
        <WhyInvest />
        <FranchiseBenefits />
        <InvestmentDetails />
        <FranchiseStatsSection />
        <FranchiseProcess />
        <FranchiseSuccessStories />
        <FranchiseGlobalPresence />
        <FranchiseLeadForm />
        <FranchiseFaq />
      </main>

    </>
  );
}
