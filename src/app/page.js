import dynamic from "next/dynamic";
import { FloatingActionButton } from "@/components/shared/floating-action-button";
import { HeroSlider } from "@/components/hero/HeroSlider";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { HighDemandSection } from "@/components/landing/HighDemandSection";
import { HomeServicesBanner } from "@/components/landing/home-services-banner";
import { FinalCta } from "@/components/landing/final-cta";
import { SkeletonBlock } from "@/components/ui/skeleton-block";
import AboutSection from "@/components/landing/About"
import WhatsApp from "@/components/landing/WhatsApp";

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
      {/* <FloatingActionButton href="#book" label="Book Appointment" mode="modal" /> */}
      <main className="lux-bg text-[var(--text)]">
        <HeroSlider />
        <HomeServicesBanner />
        <ServicesSection />
        <AboutSection />
        <div className="lux-bg">
          <BeforeAfterShowcase />
        </div>
        <HighDemandSection />
        <Testimonials />
        <FinalCta />
        <WhatsApp />
      </main>
    </>
  );
}
