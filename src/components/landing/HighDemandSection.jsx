"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { highDemandCards, highDemandFeature } from "@/data/landing-content";

export function HighDemandSection() {
  return (
    <Reveal
      id="high-demand"
      className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-14"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
        <div className="premium-card overflow-hidden rounded-[26px] p-3">
          <div className="relative overflow-hidden rounded-[26px]">
            <Image
              src={highDemandFeature.image}
              alt={highDemandFeature.title}
              width={920}
              height={980}
              className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[560px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(44,44,44,0.55)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
              <p className="text-sm uppercase tracking-[0.26em] font-semibold text-[#000000]/80">
                High Demand
              </p>
              <h2 className="font-display mt-4 max-w-lg text-xl leading-tight sm:text-2xl lg:text-3xl">
                {highDemandFeature.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">
                {highDemandFeature.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highDemandCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group bg-[var(--english-blue)] overflow-hidden rounded-[20px] transition duration-300 hover:border-[rgba(201,166,70,0.34)] hover:shadow-[0_18px_44px_rgba(201,166,70,0.16)]"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={560}
                  height={420}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-[var(--gold)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#fff]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
