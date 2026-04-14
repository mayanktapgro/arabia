// "use client";

// import { motion } from "framer-motion";

// export default function AboutSection() {
//     return (
//         <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F2EC] via-[#F1E8DA] to-[#EAC27A]/30 py-20">

//             {/* Soft Glow Background */}
//             <div className="pointer-events-none absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#EAC27A]/30 blur-3xl" />
//             <div className="pointer-events-none absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-[#C9A646]/20 blur-3xl" />

//             <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

//                 {/* 🎥 LEFT SIDE - VIDEO */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="relative"
//                 >
//                     <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[rgba(201,166,70,0.2)]">
//                         <video
//                             src="/arviaData/arvia-about.mp4"
//                             autoPlay
//                             muted
//                             loop
//                             playsInline
//                             className="h-full w-full object-cover"
//                         />
//                     </div>

//                     {/* Glow Effect */}
//                     <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#C9A646]/30 blur-2xl" />
//                 </motion.div>

//                 {/* 🧾 RIGHT SIDE - CONTENT */}
//                 <motion.div
//                     initial={{ opacity: 0, x: 40 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <p className="text-sm uppercase tracking-[0.3em] text-[#C9A646]">
//                         About Us
//                     </p>

//                     <h2 className="font-display mt-4 text-4xl leading-tight text-[#2C2C2C] sm:text-5xl">
//                         Redefining Aestheticn & Wellness Care with Luxury & Precision
//                     </h2>

//                     <p className="mt-6 text-sm leading-7 text-[#6A5B4A]">
//                         At Arvia Wellness, we bring together advanced dermatology,
//                         cutting-edge technology, and a luxury-driven client experience to
//                         create transformative skincare journeys. Our approach blends
//                         science with elegance, ensuring every treatment feels refined,
//                         personalized, and result-oriented.
//                     </p>

//                     <p className="mt-4 text-sm leading-7 text-[#6A5B4A]">
//                         From laser treatments to holistic skin rejuvenation, we focus on
//                         delivering visible results while maintaining the highest standards
//                         of comfort, safety, and care. Every client experience is designed
//                         to reflect warmth, trust, and sophistication.
//                     </p>

//                     {/* Highlights */}
//                     <div className="mt-8 grid grid-cols-2 gap-4">
//                         {[
//                             "Advanced Technology",
//                             "Certified Experts",
//                             "Luxury Experience",
//                             "Personalized Care",
//                         ].map((item, index) => (
//                             <div
//                                 key={item}
//                                 className="group relative cursor-pointer overflow-hidden rounded-xl border border-[rgba(201,166,70,0.2)] bg-[#FFF8EB] px-4 py-3 text-sm text-[#2C2C2C] shadow-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(201,166,70,0.25)] hover:-translate-y-1"
//                             >
//                                 {/* Gradient Hover Overlay */}
//                                 <div className="absolute inset-0 bg-gradient-to-r from-[#C9A646]/10 to-[#EAC27A]/20 opacity-0 transition duration-300 group-hover:opacity-100" />

//                                 {/* Content */}
//                                 <span className="relative z-10 transition duration-300 group-hover:text-[#A8821E]">
//                                     {item}
//                                 </span>

//                                 {/* Bottom Gold Line Animation */}
//                                 <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C9A646] transition-all duration-300 group-hover:w-full" />
//                             </div>
//                         ))}
//                     </div>

//                     {/* CTA */}
//                     <button className="mt-8 rounded-full bg-[#C9A646] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#B8962E]">
//                         Learn More
//                     </button>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }



"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function AboutSection() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const video = videoRef.current;

        if (!section || !video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Unmute when visible
                    video.muted = false;
                    video.play().catch(() => { }); // avoid autoplay issues
                } else {
                    // Mute when not visible
                    video.muted = true;
                }
            },
            {
                threshold: 0.6, // 60% visible triggers
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[linear-gradient(180deg,#F5F3EF_0%,#E8E2DA_100%)] py-10"
        >
            <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/12 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-[#132855]/10 blur-3xl" />

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

                {/* 🎥 VIDEO */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="overflow-hidden rounded-[28px] border border-[rgba(212,175,55,0.18)] bg-white/70 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                        <video
                            ref={videoRef}
                            src="/arviaData/hero-intro.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Glow */}
                    <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#D4AF37]/18 blur-2xl" />
                </motion.div>

                {/* CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                        About Us
                    </p>

                    <h2 className="font-display mt-4 text-4xl leading-tight text-[#132855] sm:text-5xl">
                        Redefining Aesthetics & Wellness Care with Luxury & Precision
                    </h2>

                    <p className="mt-6 text-sm leading-7 text-[#475569]">
                        At Arvia Wellness, we bring together advanced dermatology,
                        cutting-edge technology, and a luxury-driven client experience to
                        create transformative skincare journeys.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#475569]">
                        From laser treatments to holistic skin rejuvenation, we focus on
                        delivering visible results while maintaining the highest standards
                        of comfort and care.
                    </p>

                    {/* Highlights (unchanged) */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        {[
                            "Advanced Technology",
                            "Certified Experts",
                            "Luxury Experience",
                            "Personalized Care",
                        ].map((item) => (
                            <div
                                key={item}
                                className="group relative cursor-pointer overflow-hidden rounded-xl border border-[rgba(212,175,55,0.16)] bg-white/72 px-4 py-3 text-sm text-[#132855] shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.28)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.14)]"
                            >
                                <div className="absolute inset-0 bg-[var(--english-blue)]  transition duration-300 group-hover:opacity-100" />
                                <span className="relative z-10 transition duration-300 text-white ">
                                    {item}
                                </span>
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                            </div>
                        ))}
                    </div>

                    <Link href="/about" >

                        <button className="premium-button hover:scale-105 mt-6 rounded-full cursor-pointer px-6 py-2 text-sm font-semibold transition hover:bg-[#132855]">
                            Learn More
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
