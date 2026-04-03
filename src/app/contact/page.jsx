"use client";

import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    return (
        <div className="bg-[#F5F2EC] text-[#2C2C2C]">

            {/* HERO */}
            <section className="py-20 text-center bg-gradient-to-br from-[#F5F2EC] via-[#F1E8DA] to-[#EAC27A]/30">
                <p className="text-xs tracking-[0.3em] text-[#C9A646] uppercase">
                    Contact Us
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl font-display">
                    Let’s Connect & Plan Your Treatment
                </h1>
                <p className="mt-4 text-sm text-[#6A5B4A]">
                    Speak with our experts and get personalized consultation.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">

                {/* CONTACT INFO */}
                <div>
                    <h2 className="text-2xl font-display">Contact Information</h2>

                    <div className="mt-6 space-y-4 text-sm text-[#6A5B4A]">
                        <p><strong>Phone:</strong> +91 93119 16330</p>
                        <p><strong>Email:</strong> contact@arviawellness.com</p>
                        <p><strong>Location:</strong> Delhi NCR (Home & Clinic Services)</p>
                        <p><strong>Working Hours:</strong> 10:00 AM – 8:00 PM</p>
                    </div>

                    {/* Insights */}
                    <div className="mt-10 p-6 bg-[#FFF8EB] rounded-xl border border-[rgba(201,166,70,0.2)]">
                        <h3 className="font-semibold text-lg">Quick Insights</h3>
                        <ul className="mt-4 text-sm space-y-2">
                            <li>• Average response time: &lt; 10 minutes</li>
                            <li>• 90% queries resolved on first call</li>
                            <li>• Free initial consultation available</li>
                        </ul>
                    </div>
                </div>

                {/* FORM */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-[rgba(201,166,70,0.2)]">
                    <h2 className="text-2xl font-display mb-6">
                        Book Consultation
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full h-12 px-4 rounded-lg border bg-[#FAF5EC]"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full h-12 px-4 rounded-lg border bg-[#FAF5EC]"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full h-12 px-4 rounded-lg border bg-[#FAF5EC]"
                        />
                        <textarea
                            rows={4}
                            placeholder="Your Message"
                            className="w-full p-4 rounded-lg border bg-[#FAF5EC]"
                        />

                        <button className="w-full h-12 bg-[#C9A646] rounded-full font-semibold">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* MAP / LOCATION */}
            <section className="px-4 pb-16">
                <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden">
                    <iframe
                        src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-[400px]"
                    />
                </div>
            </section>
        </div>
    );
}