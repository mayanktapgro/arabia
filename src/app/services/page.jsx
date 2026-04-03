import { SiteFooter } from "@/components/shared/site-footer";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesData } from "@/data/servicesData";

export default function ServicesPage() {
  return (
    <>

      <main className="bg-[#F5F2EC] text-[#2C2C2C]">
        <Reveal className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14">
          <SectionHeading
            eyebrow="All Services"
            title="Explore the clinic's full treatment portfolio"
            description="Browse every service in one place, with direct routing into dedicated detail pages for consultation-ready information."
            tone="dark"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                compact
                showCategory={false}
                showDescription={true}
                ctaLabel="View Details"
              />
            ))}
          </div>
        </Reveal>
      </main>

    </>
  );
}
