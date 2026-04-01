"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ContactModalContext = createContext(null);

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
  category_name: "skin_care",
};

const categoryOptions = [
  { label: "Skin Care", value: "skin_care" },
  { label: "Body Massage", value: "body_massage" },
  { label: "Spa Therapy", value: "spa_therapy" },
  { label: "Hydrafacial", value: "hydrafacial" },
  { label: "Anti-Aging", value: "anti_aging" },
  { label: "Acne Treatment", value: "acne_treatment" },
  { label: "Laser Hair Removal", value: "laser_hair_removal" },
  { label: "Others", value: "others" },
];

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setStatus("idle");
    setFeedback("");
  };

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Unable to submit the consultation request.");
      }

      setStatus("success");
      setFeedback("Your consultation request has been sent successfully.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong while sending your request.");
    }
  };

  const value = useMemo(
    () => ({
      isOpen,
      openModal,
      closeModal,
    }),
    [isOpen]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(92,74,38,0.22)] px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-[28px] border border-[rgba(201,166,70,0.2)] bg-[linear-gradient(180deg,#FBF7F0,#F1E8DA)] p-6 shadow-[0_28px_80px_rgba(117,91,47,0.18)] sm:p-8"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.28 }}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,166,70,0.18)] bg-[#FFF8EB] text-lg text-[#7B6447] transition hover:border-[rgba(201,166,70,0.4)]"
              >
                x
              </button>

              <div className="pr-10">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">
                  Book Consultation
                </p>
                <h2 className="font-display mt-4 text-4xl text-[#2C2C2C] sm:text-5xl">
                  Let&apos;s plan your treatment journey
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#6A5B4A]">
                  Fill in your details and our team will get in touch to recommend
                  the right skincare, spa, or aesthetic service for you.
                </p>
              </div>

              <form
                className="mt-8 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    placeholder="Your Name*"
                    className="premium-input border-[rgba(201,166,70,0.16)] bg-[#FAF5EC] text-[#2C2C2C]"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={(event) => handleChange("phone", event.target.value)}
                    placeholder="Your Phone*"
                    className="premium-input border-[rgba(201,166,70,0.16)] bg-[#FAF5EC] text-[#2C2C2C]"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    placeholder="Your Email*"
                    className="premium-input border-[rgba(201,166,70,0.16)] bg-[#FAF5EC] text-[#2C2C2C]"
                  />
                  <select
                    name="category_name"
                    value={form.category_name}
                    onChange={(event) =>
                      handleChange("category_name", event.target.value)
                    }
                    className="premium-input border-[rgba(201,166,70,0.16)] bg-[#FAF5EC] text-[#2C2C2C]"
                  >
                    {categoryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  placeholder="Message*"
                  className="premium-input min-h-[170px] resize-none border-[rgba(201,166,70,0.16)] bg-[#FAF5EC] py-4 text-[#2C2C2C]"
                />

                {feedback ? (
                  <p
                    className={`text-sm ${
                      status === "error" ? "text-[#A0222B]" : "text-[#3E7A44]"
                    }`}
                  >
                    {feedback}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#C9A646] px-6 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#B8962E] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? "Submitting..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }

  return context;
}
