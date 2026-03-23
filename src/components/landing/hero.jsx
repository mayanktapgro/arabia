"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { heroStats } from "@/data/landing-content";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -60]);

  return (
    <section className="relative overflow-hidden border-b border-white/[0.08]">
      <div className="animated-gradient luxury-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.16),transparent_38%)]" />
      <div className="section-shell relative grid min-h-[calc(100vh-72px)] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y }} className="relative z-10">
          <p className="inline-flex rounded-full border border-[rgba(201,161,74,0.3)] bg-[rgba(201,161,74,0.08)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            Science-led luxury dermatology
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Transform Your Skin.
            <span className="block text-[var(--gold)]">Elevate Your Confidence.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Advanced dermatology treatments powered by science, premium care,
            and a modern luxury experience designed to build trust at every step.
          </p>
          <div id="book" className="mt-9 flex flex-col gap-4 sm:flex-row">
            <OpenContactButton>Book Consultation</OpenContactButton>
            <Button href="#results" variant="secondary">
              View Results
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="section-card rounded-[22px] p-5"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.55 }}
              >
                <p className="font-display text-3xl text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute -left-4 top-10 hidden rounded-full border border-[rgba(201,161,74,0.25)] bg-black/[0.25] px-4 py-2 text-sm text-[var(--muted)] shadow-[var(--shadow)] md:block"
            animate={{ y: [-5, 8, -5] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            96% satisfaction rate
          </motion.div>
          <motion.div
            className="absolute -right-4 bottom-16 hidden rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-[var(--muted)] shadow-[var(--shadow)] md:block"
            animate={{ y: [8, -5, 8] }}
            transition={{ duration: 5.5, repeat: Infinity }}
          >
            Bookings up 31% this month
          </motion.div>

          <motion.div
            className="section-card relative overflow-hidden rounded-[28px] p-4"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-4 sm:grid-cols-[1.25fr_0.75fr]">
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="/images/hero1.jpeg"
                  alt="Luxury clinic hero visual"
                  width={820}
                  height={920}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="section-card rounded-[22px] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)]">
                    Signature Care
                  </p>
                  <p className="font-display mt-3 text-3xl text-white">
                    Personalized treatment pathways
                  </p>
                </div>
                <div className="overflow-hidden rounded-[22px] border border-white/10">
                  <Image
                    src="/images/hero2.jpeg"
                    alt="Hydration ritual visual"
                    width={420}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
