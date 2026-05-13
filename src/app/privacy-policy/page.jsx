export default function PrivacyPolicyPage() {
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
                        Privacy Policy
                    </h1>

                    <p className="mt-6 max-w-3xl text-sm leading-7 text-slate/70 sm:text-base">
                        Your privacy is important to us. This Privacy Policy explains how
                        Arvia Wellness and its associated brands collect and use your
                        information when you interact with our services, website, and
                        communication channels.
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:px-14">
                <div className="rounded-[28px] border border-[rgba(201,166,70,0.12)] bg-[rgba(19,40,85,0.45)] p-6 backdrop-blur-md sm:p-8 lg:p-10">

                    {/* SECTION */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            Information We Collect
                        </h2>

                        <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
                            We may collect personal details including your name, email
                            address, phone number, and other information voluntarily
                            submitted through consultation forms, franchise inquiries,
                            appointment requests, or communication channels connected to
                            our services.
                        </p>
                    </div>

                    {/* SECTION */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            Consent & Communication
                        </h2>

                        <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
                            By sharing your information, you authorize
                            <span className="font-semibold text-white">
                                {" "}
                                Arvia Biotech Pvt. Ltd., Nirog Care, Aayina, Arvia
                                Wellness, Thinkpure, Trishul, Dev, and VedicShakti
                            </span>{" "}
                            to contact you through SMS, RCS, WhatsApp, email, phone
                            calls, and other communication channels for consultation,
                            service updates, promotions, support, and related business
                            purposes.
                        </p>

                        <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
                            This authorization overrides any NDNC/DND registration in
                            accordance with applicable TRAI regulations.
                        </p>
                    </div>

                    {/* SECTION */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            Data Protection
                        </h2>

                        <p className="mt-4 text-sm leading-8 text-white/80 sm:text-base">
                            We take reasonable measures to protect your personal
                            information from unauthorized access, misuse, disclosure, or
                            alteration. Your information is used only for operational,
                            communication, and service-related purposes.
                        </p>
                    </div>

                    {/* CONTACT */}
                    <div className="mt-10 rounded-2xl border border-[rgba(201,166,70,0.16)] bg-[rgba(255,255,255,0.03)] p-5 sm:p-6">
                        <h2 className="text-2xl font-semibold text-[var(--gold)]">
                            Contact Information
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base">
                            For any privacy-related concerns or queries, please contact:
                        </p>

                        <div className="mt-5 space-y-3 text-sm text-white/90 sm:text-base">
                            <p>
                                <span className="font-semibold text-[var(--gold)]">
                                    Company:
                                </span>{" "}
                                Arvia Biotech Pvt. Ltd.
                            </p>

                            <p>
                                <span className="font-semibold text-[var(--gold)]">
                                    Phone:
                                </span>{" "}
                                7678115756
                            </p>

                            <p>
                                <span className="font-semibold text-[var(--gold)]">
                                    Email:
                                </span>{" "}
                                wellnessarvia@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}