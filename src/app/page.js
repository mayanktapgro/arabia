import dynamic from "next/dynamic";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { FloatingActionButton } from "@/components/shared/floating-action-button";
import { Hero } from "@/components/landing/hero";
import { TrustBar } from "@/components/landing/trust-bar";
import { Services } from "@/components/landing/services";
import { Journey } from "@/components/landing/journey";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { LiveSocialProof } from "@/components/landing/live-social-proof";
import { FinalCta } from "@/components/landing/final-cta";
import { SkeletonBlock } from "@/components/ui/skeleton-block";

const BeforeAfterShowcase = dynamic(
  () =>
    import("@/components/landing/before-after-showcase").then(
      (mod) => mod.BeforeAfterShowcase
    ),
  {
    loading: () => (
      <section className="section-shell">
        <SkeletonBlock className="h-[28rem] rounded-[24px]" />
      </section>
    ),
  }
);

const Testimonials = dynamic(
  () => import("@/components/landing/testimonials").then((mod) => mod.Testimonials),
  {
    loading: () => (
      <section className="section-shell">
        <SkeletonBlock className="h-80 rounded-[24px]" />
      </section>
    ),
  }
);

export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <FloatingActionButton href="#book" label="Book Consultation" mode="modal" />
      <main>
        <Hero />
        <TrustBar />
        <BeforeAfterShowcase />
        <Services />
        <Journey />
        <WhyChooseUs />
        <Testimonials />
        <LiveSocialProof />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
