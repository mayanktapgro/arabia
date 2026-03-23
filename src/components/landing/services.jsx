"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/landing-content";

export function Services() {
  return (
    <Reveal id="services" className="section-shell">
      <SectionHeading
        eyebrow="Treatments"
        title="Premium services designed to convert curiosity into bookings"
        description="Each treatment card highlights a high-intent service with clear value, polished imagery, and a visible call to action."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <motion.article
            key={service.title}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group section-card overflow-hidden rounded-[24px]"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={520}
                height={520}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {service.description}
              </p>
              <OpenContactButton
                variant="ghost"
                className="mt-6 opacity-85 transition group-hover:opacity-100"
              >
                Explore Treatment
              </OpenContactButton>
            </div>
          </motion.article>
        ))}
      </div>
    </Reveal>
  );
}
