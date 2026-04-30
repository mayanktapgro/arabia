"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function FranchiseModal({ isOpen, onClose }) {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        location: "",
    });

    const handleChange = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const validateForm = () => {
        if (!form.name.trim()) return alert("Name is required");
        if (!/^[0-9]{10}$/.test(form.phone)) return alert("Enter valid phone");
        if (!form.location.trim()) return alert("City is required");
        return true;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        const message = `Hi Arvia Wellness 👋,

I'm interested in Franchise Opportunity.

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📍 City: ${form.location}

Please share complete franchise details.`;

        const url = `https://wa.me/917678115756?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

        setForm({ name: "", phone: "", location: "" });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

            {/* Modal Box */}
            <div className="w-full max-w-xl rounded-[28px] bg-[linear-gradient(120deg,#000,#1A1A1A,#C9A646,#000)] p-6 sm:p-8 relative">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-white cursor-pointer text-xl"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-semibold text-white mb-6">
                    Apply for Franchise
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                    <input
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="premium-input"
                        placeholder="Name"
                    />

                    <input
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="premium-input"
                        placeholder="Phone Number"
                    />

                    <input
                        value={form.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                        className="premium-input md:col-span-2"
                        placeholder="City"
                    />
                </div>

                <Button
                    onClick={handleSubmit}
                    className="premium-button mt-6 w-full hover:bg-[#B8962E]"
                >
                    Request Franchise Details
                </Button>
            </div>
        </div>
    );
}