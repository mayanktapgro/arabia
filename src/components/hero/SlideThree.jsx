"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const requirements = [
  "Space: 800-1500 sq.ft",
  "Investment: Rs 15-25 Lakhs",
  "ROI: 6-12 months",
];

export function SlideThree() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1440px] items-center gap-10 px-4 py-10 sm:px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-14 lg:py-14">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 order-2 lg:order-1"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#EAC27A]">
            Franchise Opportunity
          </p>

          <h2 className="font-display mt-4 text-3xl leading-tight text-[#F5F2EC] sm:text-4xl md:text-5xl lg:text-[3.2rem]">
            Start Your Own
            <span className="block text-[#EAC27A]">
              Aesthetic Clinic
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base lg:text-lg">
            Join Arvia Wellness Franchise Network with complete business,
            operational, and marketing support for rapid growth.
          </p>

          {/* REQUIREMENTS */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {requirements.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[rgba(201,166,70,0.2)] bg-[rgba(19,40,85,0.92)] p-4 backdrop-blur-md"
              >
                <p className="text-sm leading-6 text-white sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* DESCRIPTION BOX */}
          <div className="mt-5 rounded-2xl border border-[rgba(201,166,70,0.18)] bg-[rgba(19,40,85,0.9)] px-5 py-4 text-sm leading-7 text-white/85 backdrop-blur-md">
            End-to-end support, staff training, launch planning, branding,
            AI-led marketing systems, and operational guidance are included in
            the franchise model.
          </div>

          {/* BUTTON */}
          <div className="mt-7 flex flex-wrap gap-4">
            <Button
              href="/franchise#franchise-form"
              className="premium-button w-full sm:w-auto hover:bg-[#B8962E]"
            >
              Apply for Franchise
            </Button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative hidden lg:block order-1 lg:order-2"
        >
          <div className="lux-card lux-glow overflow-hidden rounded-[26px] p-2 sm:p-3">
            <div className="relative overflow-hidden rounded-[22px]">
              <Image
                src="/arviaData/reception5.jpeg"
                alt="Franchise clinic interior"
                width={1200}
                height={900}
                priority
                className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px] lg:h-[560px]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.18))]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}












// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// const requirements = [
//   "Space: 800-1500 sq.ft",
//   "Investment: Rs 15-25 Lakhs",
//   "ROI: 6-12 months",
// ];

// export function SlideThree() {
//   return (
//     <div className="grid min-h-[calc(100svh-5rem)] items-center gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">
//       <motion.div
//         initial={{ opacity: 0, x: -28 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-10"
//       >
//         <p className="text-sm uppercase tracking-[0.32em] text-[#EAC27A]">
//           Franchise Opportunity
//         </p>
//         <h2 className="font-display mt-4 text-4xl leading-tight text-[#F5F2EC] sm:text-5xl lg:text-[3.35rem]">
//           Start Your Own Aesthetic Clinic
//         </h2>
//         <p className="mt-4 text-lg leading-7 text-[#fff]">
//           Join Arvia Wellness Franchise Network
//         </p>
//         <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
//           {requirements.map((item) => (
//             <div key={item} className="rounded-[22px] border border-[rgba(201,166,70,0.2)] bg-[var(--english-blue)] p-5 backdrop-blur-md">
//               <p className="text-base leading-7 text-white">{item}</p>
//             </div>
//           ))}
//         </div>
//         <div className="mt-4 rounded-[20px] border border-[rgba(201,166,70,0.18)] bg-[var(--english-blue)] px-5 py-4 text-sm leading-7 text-white/82 backdrop-blur-md">
//           End-to-end support, staff training, launch planning, and AI-led marketing systems are built into the model.
//         </div>
//         <Button href="/franchise#franchise-form" className="premium-button mt-6 hover:bg-[#B8962E]">
//           Apply for Franchise
//         </Button>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 28 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative"
//       >
//         <div className="lux-card lux-glow overflow-hidden rounded-[34px] p-3">
//           <div className="relative overflow-hidden rounded-[28px]">
//             <Image
//               src="/arviaData/reception5.jpeg"
//               alt="Franchise clinic interior"
//               width={1200}
//               height={900}
//               priority
//               className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
//             />
//             <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.2))]" />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
