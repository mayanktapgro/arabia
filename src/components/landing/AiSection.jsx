'use client';

import { motion } from "framer-motion";
import { Sparkles, Zap, ShieldCheck, Brain } from "lucide-react";

export default function AiSkinAnalysisSection() {
    return (
        <section className="relative overflow-hidden] py-10 lg:py-20">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[13px] font-semibold uppercase tracking-  [0.3em] text-[var(--english-blue)]">
                            AI Technology
                        </span>

                        <h2 className="mt-4 font-title text-[38px] leading-tight text-[#2A2321] sm:text-[46px] lg:text-[54px]">
                            Intelligent Skin Analysis <br />
                            <span className="text-[var(--english-blue)]">Powered by AI</span>
                        </h2>

                        <p className="mt-6 max-w-[520px] text-[16px] leading-7 text-[#5A4F4A]">
                            At Ariva Wellness, we use advanced AI-powered skin analysis technology to
                            deeply understand your skin. Within seconds, our system evaluates
                            multiple parameters and delivers precise, data-driven insights —
                            enabling faster, more accurate, and personalized treatments.
                        </p>

                        {/* FEATURES */}
                        <div className="mt-8 space-y-5">
                            {[
                                {
                                    icon: Brain,
                                    text: "AI-driven diagnosis with multi-layer skin scanning",
                                },
                                {
                                    icon: Zap,
                                    text: "Instant analysis & faster treatment decisions",
                                },
                                {
                                    icon: ShieldCheck,
                                    text: "Highly accurate & clinically reliable results",
                                },
                                {
                                    icon: Sparkles,
                                    text: "Personalized skincare & treatment plans",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C2907B]/10 text-[var(--english-blue)]">
                                        <item.icon size={18} />
                                    </div>
                                    <p className="text-[15px] text-[#4a403b]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#C2907B]/20 blur-3xl"></div>

                        <div className="relative overflow-hidden rounded-[28px] bg-white/60 p-4 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                            <img
                                src='/ai-skin-machine.png'
                                alt="AI Skin Analysis Machine"
                                className="w-full h-full object-contain rounded-[20px]"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}