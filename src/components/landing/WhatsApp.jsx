"use client";

import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
    const phoneNumber = "+917678115756";
    const message = "Hi, I want to inquire about your services at Arvia.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[1000]"
        >
            <div className="relative flex items-center justify-center">

                {/* Pulse Animation */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping"></span>

                {/* Main Button */}
                <div className="relative flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-xl hover:scale-105 transition">

                    {/* WhatsApp Icon */}
                    <FaWhatsapp size={30} />

                </div>
            </div>
        </a>
    );
};

export default WhatsApp;