"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-[#F5F2EC] text-[#2C2C2C]">

      {/* HERO */}
      <section className="py-20 text-center bg-gradient-to-br from-[#F5F2EC] via-[#F1E8DA] to-[#EAC27A]/30">
        <p className="text-xs tracking-[0.3em] text-[#C9A646] uppercase">
          About Arvia
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-display">
          Where Aesthetics Meets Clinical Precision
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm text-[#6A5B4A]">
          Delivering advanced dermatology and aesthetic treatments with a
          luxury-first approach focused on results, safety, and personalization.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-display">
            A Modern Approach to Skin & Wellness
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#6A5B4A]">
            Arvia Wellness is built on a foundation of clinical expertise and
            aesthetic excellence. Our treatments combine dermatologist-led
            protocols with globally trusted technologies to ensure visible,
            consistent results.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#6A5B4A]">
            From laser procedures to advanced facials and anti-aging therapies,
            each experience is tailored to individual skin concerns, ensuring
            precision-driven outcomes without compromising comfort.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#6A5B4A]">
            Our philosophy is simple: elevate skincare into a refined, luxurious
            experience while maintaining clinical integrity.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/about/about.jpg"
            alt="clinic"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* DATA INSIGHTS / STATS */}
      <section className="bg-[#FFF8EB] py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "15K+", label: "Clients Served" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "25+", label: "Advanced Treatments" },
            { value: "8+", label: "Years Experience" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-6 rounded-xl border border-[rgba(201,166,70,0.2)] bg-white"
            >
              <h3 className="text-2xl font-bold text-[#C9A646]">
                {item.value}
              </h3>
              <p className="text-sm mt-2 text-[#6A5B4A]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-display text-center">
          Why Clients Trust Us
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Dermatologist-led treatments",
            "FDA-approved technologies",
            "Personalized skin analysis",
            "Luxury clinical environment",
            "Minimal downtime procedures",
            "Result-driven protocols",
          ].map((item) => (
            <div
              key={item}
              className="p-5 rounded-xl bg-[#FFF8EB] border border-[rgba(201,166,70,0.2)]"
            >
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}