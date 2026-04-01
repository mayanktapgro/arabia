"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { highDemandCards, highDemandFeature } from "@/data/landing-content";

export function HighDemandSection() {
  return (
    <Reveal
      id="high-demand"
      className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[32px] border border-[rgba(201,166,70,0.18)] bg-[#EEE8DF] p-3 shadow-[0_24px_70px_rgba(121,95,49,0.12)]">
          <div className="relative overflow-hidden rounded-[26px]">
            <Image
              src={highDemandFeature.image}
              alt={highDemandFeature.title}
              width={920}
              height={980}
              className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[660px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(44,44,44,0.55)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
              <p className="text-sm uppercase tracking-[0.26em] text-[#EAC27A]">
                High Demand
              </p>
              <h2 className="font-display mt-4 max-w-lg text-4xl leading-tight sm:text-5xl">
                {highDemandFeature.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85">
                {highDemandFeature.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {highDemandCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-[24px] border border-[rgba(201,166,70,0.16)] bg-[#EEE8DF] shadow-[0_14px_40px_rgba(117,91,47,0.08)] transition duration-300 hover:border-[rgba(201,166,70,0.38)]"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={560}
                  height={420}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-[#2C2C2C]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6A5B4A]">
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
