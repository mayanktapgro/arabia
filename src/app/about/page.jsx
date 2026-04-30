"use client";

import Image from "next/image";

export default function AboutPage() {
    const stats = [
        { value: "15K+", label: "Clients Served" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "25+", label: "Advanced Treatments" },
        { value: "22+", label: "Years Experience" },
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
            <section className="relative overflow-hidden py-8 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,194,122,0.12),transparent_30%)]" />
                <div className="relative mx-auto max-w-4xl px-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--english-blue)]">About Arvia</p>
                    <h1 className="font-display mt-4 text-xl sm:text-3xl">
                        Where Aesthetics Meets Clinical Precision
                    </h1>
                    <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-[var(--muted)]">
                        Delivering advanced dermatology and aesthetic treatments through a luxury-led approach centered on safety, results, and personalized care.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-10 px-4 py-4 lg:grid-cols-2">
                <div>
                    <h2 className="font-display text-3xl">A Modern Approach to Skin & Wellness</h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                        Our brand Arvia Wellness has established itself as a trusted name in Dubai’s highly competitive beauty and wellness market. We specialize in laser hair removal, skin rejuvenation, and advanced aesthetic treatments using FDA-approved technologies and internationally trained professionals.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                        What sets us apart is our combination of medical-grade treatments, luxury client experience, and proven operational systems.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                        Dubai-based laser beauty clinic chain, known for advanced technology, luxury service standards.
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

            <section className="mx-auto max-w-7xl px-4 py-14">
                <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

                    {/* IMAGE */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="overflow-hidden rounded-[28px] border border-[var(--gold)]/20 bg-white p-3 shadow-xl">
                            <Image
                                src="/profile/founder-profile.png" // 👉 save image here
                                alt="Manoj Malhotra"
                                width={420}
                                height={520}
                                className="rounded-[22px] object-cover"
                            />
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--english-blue)]">
                            Founder & Expert
                        </p>

                        <h2 className="font-display mt-4 text-3xl sm:text-4xl">
                            Manoj Malhotra
                        </h2>

                        <p className="mt-3 text-sm font-medium text-[var(--english-blue)]">
                            Experienced Cosmetologist & Specialist Pharmacist
                        </p>

                        <p className="mt-5 text-sm leading-7 text-black">
                            With over 22 years of experience in cosmetology and pharmaceutical sciences,
                            Manoj Malhotra brings deep clinical expertise and a patient-first philosophy
                            to Arvia Wellness. His approach blends advanced technology with proven
                            treatment protocols to deliver safe, effective, and personalized results.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-black">
                            Under his leadership, Arvia Wellness has evolved into a premium destination
                            for aesthetic and skin treatments, focused on precision, innovation, and
                            long-term client satisfaction.
                        </p>

                        {/* Optional Highlight */}
                        <div className="mt-6 inline-block rounded-full bg-[var(--gold)]/10 px-5 py-2 text-xs font-semibold tracking-wide text-[var(--english-blue)]">
                            22+ Years of Clinical Experience
                        </div>
                    </div>

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
                        <div key={item} className="bg-[var(--english-blue)] rounded-xl p-5">
                            <p className="text-sm text-[#fff]">{item}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
