"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
    const faqs = [
        {
            question: "Are your treatments personalized for different skin types?",
            answer:
                "Yes. Every treatment begins with a consultation and skin assessment so protocols can be tailored based on skin type, concerns, and treatment goals.",
        },
        {
            question: "Do you use advanced or FDA-approved technologies?",
            answer:
                "Arvia Wellness uses advanced clinical technologies and treatment systems selected for safety, precision, and performance, including devices used in modern aesthetic practice.",
        },
        {
            question: "How do I know which treatment is right for me?",
            answer:
                "Our team can guide you through consultation, skin analysis, and treatment planning to help determine the most suitable option for your concerns.",
        },
        {
            question: "Is there downtime after aesthetic or laser treatments?",
            answer:
                "Downtime depends on the treatment. Many procedures have minimal downtime, while some advanced treatments may involve short recovery periods. Your protocol and aftercare are explained clearly before treatment.",
        },
        {
            question: "How can I book a consultation at Arvia Wellness?",
            answer:
                "You can book a consultation through our contact form, phone support, WhatsApp inquiry, or by visiting the clinic directly.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mx-auto max-w-5xl px-4 py-20">

            <div className="text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A646]">
                    FAQs
                </p>

                <h2 className="font-display mt-4 text-4xl sm:text-5xl text-[var(--text)]">
                    Frequently Asked Questions
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#ffffff]">
                    Find answers to common questions about consultations, treatments,
                    technology, and what to expect at Arvia Wellness.
                </p>
            </div>

            <div className="mt-12 space-y-5">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={faq.question}
                            className="overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.18)] bg-white shadow-sm"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="pr-4 text-base font-medium text-[var(--text)]">
                                    {faq.question}
                                </span>

                                <span className="shrink-0 text-[#C9A646]">
                                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ${isOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="border-t border-[rgba(212,175,55,0.12)] px-6 py-5 text-sm leading-7 text-[var(--muted)]">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}