"use client";

import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required";

        if (!form.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^[0-9]{10}$/.test(form.phone)) {
            newErrors.phone = "Enter valid 10-digit phone";
        }

        if (!form.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const createWhatsAppMessage = () => {
        return `Hi Arvia Wellness 👋,

            I’m interested in your services.

            👤 Name: ${form.name}
            📞 Phone: ${form.phone}
            📝 Message: ${form.message}

            Please assist me with consultation.`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        const message = createWhatsAppMessage();
        const encodedMessage = encodeURIComponent(message);

        const phoneNumber = "917678115756"; // change if needed
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");

        // reset
        setForm({ name: "", phone: "", message: "" });
        setLoading(false);
    };

    return (
        <main className="lux-bg text-[var(--text)]">
            {/* HERO */}
            <section className="relative overflow-hidden py-10 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,194,122,0.12),transparent_30%)]" />
                <div className="relative mx-auto max-w-4xl px-4">
                    <p className="text-xs uppercase font-bold tracking-[0.3em] text-[var(--english-blue)]">
                        Contact Us
                    </p>
                    <h1 className="font-display mt-4 text-4xl sm:text-5xl">
                        Let&apos;s Connect & Plan Your Treatment
                    </h1>
                    <p className="mt-4 text-sm text-[var(--muted)]">
                        Speak with our experts and get personalized consultation.
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="mx-auto grid max-w-7xl gap-12 px-4 pt-2 pb-12 lg:grid-cols-2">
                {/* LEFT */}
                <div>
                    <h2 className="font-display text-2xl">Contact Information</h2>

                    <div className="mt-6 space-y-4 text-sm text-[var(--muted)]">
                        <p>
                            <strong className="text-[var(--text)]">Phone:</strong> +91 7678115756
                        </p>
                        <p>
                            <strong className="text-[var(--text)]">Location:</strong> Delhi NCR (Home & Clinic Services)
                        </p>
                        <p>
                            <strong className="text-[var(--text)]">Working Hours:</strong> 10:00 AM - 8:00 PM
                        </p>
                    </div>

                    <div className="bg-[var(--english-blue)] mt-10 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-[var(--gold)]">
                            Quick Insights
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-white">
                            <li>- Average response time: less than 10 minutes</li>
                            <li>- 90% queries resolved on first call</li>
                            <li>- Free initial consultation available</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="premium-card rounded-2xl p-6">
                    <h2 className="font-display mb-6 text-2xl">
                        Book Consultation
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* NAME */}
                        <div>
                            <input
                                type="text"
                                value={form.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                placeholder="Your Name*"
                                className="premium-input h-12"
                            />
                            {errors.name && (
                                <p className="text-xs mt-1 text-red-500">{errors.name}</p>
                            )}
                        </div>

                        {/* PHONE */}
                        <div>
                            <input
                                type="text"
                                value={form.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                placeholder="Phone Number*"
                                className="premium-input h-12"
                            />
                            {errors.phone && (
                                <p className="text-xs mt-1 text-red-500">{errors.phone}</p>
                            )}
                        </div>

                        {/* MESSAGE */}
                        <div>
                            <textarea
                                rows={4}
                                value={form.message}
                                onChange={(e) => handleChange("message", e.target.value)}
                                placeholder="Your Message"
                                className="premium-input p-4"
                            />
                            {errors.message && (
                                <p className="text-xs mt-1 text-red-500">{errors.message}</p>
                            )}
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="premium-button h-12 w-full rounded-full font-semibold transition hover:bg-[#B8962E] disabled:opacity-70"
                        >
                            {loading ? "Redirecting..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </section>

            {/* MAP */}
            <section className="px-4 pb-16">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[rgba(201,166,70,0.18)]">
                    <iframe
                        title="Delhi map"
                        src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="h-[400px] w-full"
                    />
                </div>
            </section>
        </main>
    );
}
