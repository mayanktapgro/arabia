import { FloatingActionButton } from "@/components/shared/floating-action-button";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { FranchiseHero } from "@/components/franchise/franchise-hero";
import { WhyInvest } from "@/components/franchise/why-invest";
import { FranchiseBenefits } from "@/components/franchise/franchise-benefits";
import { InvestmentDetails } from "@/components/franchise/investment-details";
import { FranchiseProcess } from "@/components/franchise/franchise-process";
import { FranchiseSuccessStories } from "@/components/franchise/franchise-success-stories";
import { FranchiseLeadForm } from "@/components/franchise/franchise-lead-form";
import { FranchiseFaq } from "@/components/franchise/franchise-faq";

export default function FranchisePage() {
  return (
    <>
      <SiteNavbar />
      <FloatingActionButton href="#franchise-form" label="Apply Now" />
      <main>
        <FranchiseHero />
        <WhyInvest />
        <FranchiseBenefits />
        <InvestmentDetails />
        <FranchiseProcess />
        <FranchiseSuccessStories />
        <FranchiseLeadForm />
        <FranchiseFaq />
      </main>
      <SiteFooter />
    </>
  );
}
