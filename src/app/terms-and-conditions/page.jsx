"use client"
import React from 'react'

export default function TermsConditionsPage() {
    return (
        <main className="lux-bg min-h-screen text-[var(--text)]">
            {/* HERO */}
            <section className="relative overflow-hidden border-b border-[rgba(201,166,70,0.12)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,166,70,0.12),transparent_34%)]" />

                <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:px-14">
                    <p className="text-xs uppercase tracking-[0.34em] text-[var(--gold)]">
                        Legal Information
                    </p>

                    <h1 className="font-display mt-5 text-4xl text-[var(--english-blue)] sm:text-5xl lg:text-6xl">
                        Terms & Conditions
                    </h1>

                    <p className="mt-4 text-sm text-white/70">
                        Last Updated: May 18, 2026
                    </p>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-slate/70 sm:text-base">
                        By accessing or using Arvia Wellness services, you agree to comply
                        with and be bound by the following Terms & Conditions. If you do
                        not agree, please do not use our services.
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:px-14">
                <div className="rounded-[28px] border border-[rgba(201,166,70,0.12)] bg-[rgba(19,40,85,0.45)] p-6 backdrop-blur-md sm:p-8 lg:p-10 space-y-10">

                    {/* Intro */}
                    <div>
                        <p className="text-sm leading-8 text-white/80 sm:text-base">
                            We collect personal details like your name, email, and phone number. 
                            By sharing your information, you authorize Arvia Wellness and its associated 
                            brands (Nirog Care, Aayina, Thinkpure, Trishul, Dev, VedicShakti) to contact 
                            you via SMS, RCS, WhatsApp, Email, and other communication channels. This 
                            consent overrides NDNC/DND registration under TRAI regulations.
                        </p>
                    </div>

                    {/* 1 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            1. About Arvia Wellness
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            Arvia Wellness provides wellness-related products, services,
                            consultations, and programs. Information provided is for general
                            wellness purposes and not medical advice.
                        </p>
                    </div>

                    {/* 2 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            2. Eligibility
                        </h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 text-white/80">
                            <li>You are at least 18 years old or under supervision.</li>
                            <li>You can enter a legally binding agreement.</li>
                            <li>You provide accurate information.</li>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            3. Use of Website
                        </h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 text-white/80">
                            <li>No illegal or fraudulent use.</li>
                            <li>No unauthorized system access.</li>
                            <li>No malware or harmful content.</li>
                            <li>No misuse of communication channels.</li>
                        </ul>
                    </div>

                    {/* 4 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            4. Products & Services
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            Services are subject to availability. We may modify pricing,
                            discontinue services, or cancel orders if necessary.
                        </p>
                    </div>

                    {/* 5 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            5. Wellness Disclaimer
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            We do not guarantee results. Consult a healthcare professional
                            before starting any wellness program. Use services at your own risk.
                        </p>
                    </div>

                    {/* 6 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            6. Orders, Payments & Subscriptions
                        </h2>
                        <ul className="mt-4 list-disc pl-6 space-y-2 text-white/80">
                            <li>Accurate billing info required.</li>
                            <li>Secure payment processing.</li>
                            <li>Subscriptions may auto-renew.</li>
                            <li>Orders may be canceled if suspicious.</li>
                        </ul>
                    </div>

                    {/* 7 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            7. Communication Consent
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            You agree to receive SMS, WhatsApp, email, calls, and notifications
                            including promotions, updates, and support messages. You may opt out anytime.
                        </p>
                    </div>

                    {/* 8 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            8. Intellectual Property
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            All content is owned by Arvia Wellness and protected by copyright laws.
                            Unauthorized use is prohibited.
                        </p>
                    </div>

                    {/* 9 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            9. Third-Party Services
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            We are not responsible for third-party platforms or services linked to our website.
                        </p>
                    </div>

                    {/* 10 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            10. Limitation of Liability
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            We are not liable for indirect damages, health outcomes, or service interruptions.
                        </p>
                    </div>

                    {/* 11 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            11. Privacy
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            Your use of our services is also governed by our Privacy Policy.
                        </p>
                    </div>

                    {/* 12 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            12. Account Responsibility
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            You are responsible for maintaining account confidentiality and all activities under your account.
                        </p>
                    </div>

                    {/* 13 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            13. Modifications to Terms
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            Terms may be updated anytime. Continued use means acceptance.
                        </p>
                    </div>

                    {/* 14 */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            14. Governing Law
                        </h2>
                        <p className="mt-4 text-white/80 leading-8">
                            These Terms are governed by the laws of India.
                        </p>
                    </div>

                    {/* CONTACT */}
                    <div className="rounded-2xl border border-[rgba(201,166,70,0.16)] bg-[rgba(255,255,255,0.03)] p-5 sm:p-6">
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            Contact Us
                        </h2>

                        <p className="mt-4 text-white/80">
                            For any questions, please contact Arvia Wellness.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}