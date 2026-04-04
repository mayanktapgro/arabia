"use client";

import Image from "next/image";

export default function AboutPage() {
    const stats = [
        { value: "15K+", label: "Clients Served" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "25+", label: "Advanced Treatments" },
        { value: "8+", label: "Years Experience" },
    ];

    const trustPoints = [
        "Dermatologist-led treatments",
        "FDA-approved technologies",
        "Personalized skin analysis",
        "Luxury clinical environment",
        "Minimal downtime procedures",
        "Result-driven protocols",
    ];

    return (
        <main className="lux-bg text-[var(--text)]">
            <section className="relative overflow-hidden py-12 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,194,122,0.12),transparent_30%)]" />
                <div className="relative mx-auto max-w-4xl px-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#C9A646]">About Arvia</p>
                    <h1 className="font-display mt-4 text-4xl sm:text-5xl">
                        Where Aesthetics Meets Clinical Precision
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                        Delivering advanced dermatology and aesthetic treatments with a
                        luxury-first approach focused on results, safety, and personalization.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-10 px-4 py-4 lg:grid-cols-2">
                <div>
                    <h2 className="font-display text-3xl">A Modern Approach to Skin & Wellness</h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                        Arvia Wellness is built on a foundation of clinical expertise and
                        aesthetic excellence. Our treatments combine dermatologist-led protocols
                        with globally trusted technologies to ensure visible, consistent results.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                        From laser procedures to advanced facials and anti-aging therapies, each
                        experience is tailored to individual skin concerns, ensuring
                        precision-driven outcomes without compromising comfort.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                        Our philosophy is simple: elevate skincare into a refined, luxurious
                        experience while maintaining clinical integrity.
                    </p>
                </div>

                <div className="premium-card overflow-hidden rounded-[28px] h-[300px] p-3">
                    {/* <Image
            src="/images/about/about.jpg"
            alt="Clinic interior"
            width={1200}
            height={900}
            className="h-full w-full rounded-[22px] object-cover"
          /> */}
                    <video
                        src="/arviaData/about2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full rounded-[22px] object-cover"
                    />
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 py-10">
                <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
                    {stats.map((item) => (
                        <div key={item.label} className="bg-[var(--english-blue)] rounded-xl p-6">
                            <h3 className="text-3xl font-bold text-[#C9A646]">{item.value}</h3>
                            <p className="mt-2 text-sm text-[#fff]">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10">
                <h2 className="font-display text-center text-3xl">Why Clients Trust Us</h2>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {trustPoints.map((item) => (
                        <div key={item} className="bg-[var(--gold)] rounded-xl p-5">
                            <p className="text-sm text-[#fff]">{item}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
