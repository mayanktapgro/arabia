"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { OpenContactButton } from "@/components/contact/open-contact-button";

const points = [
  "Laser Hair Removal at Home",
  "Hydrafacial & Skin Treatments",
  "Anti-aging & Skin Tightening",
  "Dermatologist Consultation",
];

export function SlideTwo() {
  return (
    <div className="grid min-h-[calc(100svh-5rem)] items-center gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.32em] text-[#ffffff]">
          Delhi NCR
        </p>
        <h2 className="font-display mt-4 text-4xl leading-tight text-[#fff] sm:text-5xl lg:text-[3.35rem]">
          At-Home & Clinic Services in Delhi NCR
        </h2>
        <div className="grid lg:grid-cols-2 gap-2 mt-6 space-y-3">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-2xl border border-[rgba(201,166,70,0.22)] bg-[var(--english-blue)] px-4 py-3 text-white backdrop-blur-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(201,166,70,0.18)] text-sm font-semibold text-[#EAC27A]">
                +
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>
        <OpenContactButton className="premium-button mt-7 hover:bg-[#B8962E]">
          Book Consultation
        </OpenContactButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="overflow-hidden rounded-[34px] border border-white/18 bg-white/12 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.22)] backdrop-blur-md">
          <div className="relative overflow-hidden rounded-[28px]">
            <Image
              src="/profile/intro-pics/arvia-van.png"
              alt="At-home and clinic service visual"
              width={1200}
              height={900}
              priority
              className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[480px]"
            />
            {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.24))]" /> */}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
