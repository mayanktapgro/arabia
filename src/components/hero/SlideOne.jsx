"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { OpenContactButton } from "../contact/open-contact-button";

export function SlideOne() {
  return (
    <div className="relative grid min-h-[calc(100svh-5rem)] items-center gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-3xl"
      >
        <p className="text-sm uppercase tracking-[0.34em] text-[#EAC27A]">
          Luxury Wellness Clinic
        </p>
        <h1 className="font-display mt-5 text-4xl leading-[1.03] text-white sm:text-5xl lg:text-6xl">
          Luxury Aesthetic &{" "}
          <span className="text-[#EAC27A]">Wellness Experience</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
          Where advanced dermatology meets refined care in a serene,
          hospitality-led clinic environment.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <OpenContactButton > Book Consulation </OpenContactButton>
          {/* <Button href="#contact">Book Consultation</Button> */}
          {/* <Button href="/services" variant="secondary" className="text-white">
            Explore Treatments
          </Button> */}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.06 }}
        className="relative z-10"
      >
        <div className="overflow-hidden rounded-[32px] border border-white/18 bg-white/10 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.25)] backdrop-blur-md">
          <video
            src="/arviaData/arvia-about.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-[300px] w-full rounded-[24px] object-cover sm:h-[380px] lg:h-[430px]"
          />

          {/* <Image
            src="/arviaData/reception2.jpeg"
            alt="Luxury clinic reception"
            width={1200}
            height={900}
            priority
            className="h-[300px] w-full rounded-[24px] object-cover sm:h-[380px] lg:h-[430px]"
          /> */}
        </div>
      </motion.div>
    </div>
  );
}
