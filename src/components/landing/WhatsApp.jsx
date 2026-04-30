"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
    const phoneNumber = "+917678115756";
    const cleanNumber = phoneNumber.replace("+", "");

    const message =
        "Hi, I want to inquire about your services at Arvia.";

    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[1000] flex flex-col items-center gap-4">

            {/* CALL BUTTON */}
            <a
                href={`tel:${phoneNumber}`}
                aria-label="Call Arvia Wellness"
                className="relative group"
            >
                <div className="relative flex items-center justify-center">

                    {/* Pulse */}
                    <span className="absolute h-full w-full rounded-full bg-[#C9A646]/60 animate-ping"></span>

                    {/* Button */}
                    <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#132855] text-white shadow-xl transition hover:scale-105">
                        <Phone size={22} className="sm:h-6 sm:w-6" />
                    </div>
                </div>
            </a>

            {/* WHATSAPP BUTTON */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="relative group"
            >
                <div className="relative flex items-center justify-center">

                    {/* Pulse */}
                    <span className="absolute h-full w-full rounded-full bg-green-400 opacity-70 animate-ping"></span>

                    {/* Button */}
                    <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-105">
                        <FaWhatsapp size={30} className="sm:text-[34px]" />
                    </div>
                </div>
            </a>

        </div>
    );
};

export default WhatsApp;