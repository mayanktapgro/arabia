import dynamic from "next/dynamic";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { FloatingActionButton } from "@/components/shared/floating-action-button";
import { HeroSlider } from "@/components/landing/HeroSlider";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { HighDemandSection } from "@/components/landing/HighDemandSection";
import { HomeServicesBanner } from "@/components/landing/home-services-banner";
import { FinalCta } from "@/components/landing/final-cta";
import { SkeletonBlock } from "@/components/ui/skeleton-block";
import AboutSection from "@/components/landing/About";

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

      <FloatingActionButton href="#book" label="Book Appointment" mode="modal" />
      <main className="bg-[#F5F2EC] text-[#2C2C2C]">
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <div className="bg-[#F5F2EC]">
          <BeforeAfterShowcase />
        </div>
        <HighDemandSection />
        <HomeServicesBanner />
        <Testimonials />
        <FinalCta />
      </main>

    </>
  );
}
