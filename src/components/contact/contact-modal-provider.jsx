"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const ContactModalContext = createContext(null);
const SUBMISSION_KEY = "hasSubmitted";
const SESSION_MODAL_KEY = "consultationModalShown";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
  category_name: "skin_care",
};

const categoryOptions = [
  { label: "Skin Care", value: "skin_care" },
  { label: "Laser Hair Removal", value: "laser_hair_removal" },
  { label: "Hydrafacial", value: "hydrafacial" },
  { label: "Anti-Aging", value: "anti_aging" },
  { label: "Hair Treatment", value: "hair_treatment" },
  { label: "Spa Therapy", value: "spa_therapy" },
  { label: "Others", value: "others" },
];

export function ContactModalProvider({ children }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState({});
  const idleTimerRef = useRef(null);
  const [hasSubmitted, setHasSubmitted] = useState(
    () =>
      typeof window !== "undefined" &&
      window.localStorage.getItem(SUBMISSION_KEY) === "true"
  );

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setStatus("idle");
    setFeedback("");
    setErrors({});
  }, []);

  useEffect(() => {
    const shouldAutoOpen = pathname === "/" || pathname === "/franchise";

    if (!shouldAutoOpen || hasSubmitted) {
      return undefined;
    }

    const hasShownThisSession =
      window.sessionStorage.getItem(SESSION_MODAL_KEY) === "true";

    if (hasShownThisSession) {
      return undefined;
    }

    const clearIdleTimer = () => {
      if (idleTimerRef?.current) {
        window.clearTimeout(idleTimerRef.current);
      }
    };

    const startIdleTimer = () => {
      clearIdleTimer();
      idleTimerRef.current = window.setTimeout(() => {
        if (window.sessionStorage.getItem(SESSION_MODAL_KEY) === "true") {
          return;
        }

        window.sessionStorage.setItem(SESSION_MODAL_KEY, "true");
        setIsOpen(true);
      }, 30000);
    };

    const resetIdleTimer = () => {
      startIdleTimer();
    };

    startIdleTimer();

    window.addEventListener("scroll", resetIdleTimer, { passive: true });
    window.addEventListener("wheel", resetIdleTimer, { passive: true });
    window.addEventListener("touchmove", resetIdleTimer, { passive: true });
    window.addEventListener("mousedown", resetIdleTimer);
    window.addEventListener("keydown", resetIdleTimer);

    return () => {
      clearIdleTimer();
      window.removeEventListener("scroll", resetIdleTimer);
      window.removeEventListener("wheel", resetIdleTimer);
      window.removeEventListener("touchmove", resetIdleTimer);
      window.removeEventListener("mousedown", resetIdleTimer);
      window.removeEventListener("keydown", resetIdleTimer);
    };
  }, [pathname, hasSubmitted]);

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit phone";
    }
    // if (!form.email.trim()) {
    //   newErrors.email = "Email is required";
    // } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    //   newErrors.email = "Enter valid email";
    // }
    // if (!form.message.trim()) newErrors.message = "Message is required";

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

  // const handleSubmit = async () => {
  //   setStatus("loading");
  //   setFeedback("");

  //   try {
  //     const res = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });

  //     if (!res.ok) {
  //       const data = await res.json().catch(() => ({}));
  //       throw new Error(data.error || "Unable to submit the consultation request.");
  //     }

  //     window.localStorage.setItem(SUBMISSION_KEY, "true");
  //     setHasSubmitted(true);
  //     setStatus("success");
  //     setFeedback("Your consultation request has been sent successfully.");
  //     setForm(initialForm);
  //   } catch (error) {
  //     setStatus("error");
  //     setFeedback(error.message || "Something went wrong while sending your request.");
  //   }
  // };

  const handleSubmit = async () => {
    console.log('triggering handle submit...')
    if (!validateForm()) return;

    setStatus("loading");
    setFeedback("");

    try {
      // ✅ Create WhatsApp message
      const message = createWhatsAppMessage();
      console.log('whatsapp message', message)
      // ✅ Encode message
      const encodedMessage = encodeURIComponent(message);

      // 🔥 Replace with your WhatsApp number
      const phoneNumber = "919368208014"; // format: countrycode + number

      // ✅ Open WhatsApp
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");

      // ✅ OPTIONAL: also save in backend
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(form),
      // });

      window.localStorage.setItem(SUBMISSION_KEY, "true");
      setHasSubmitted(true);

      setStatus("success");
      setFeedback("Redirecting to WhatsApp...");

      setForm(initialForm);

    } catch (error) {
      setStatus("error");
      setFeedback("Something went wrong. Please try again.");
    }
  };

  const value = useMemo(
    () => ({ isOpen, openModal, closeModal }),
    [closeModal, isOpen, openModal]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(44,44,44,0.18)] px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-[28px] border border-[rgba(201,166,70,0.15)] bg-[linear-gradient(180deg,#F7F3EE,#F1E8DA)] p-6 shadow-[0_28px_80px_rgba(44,44,44,0.1)] sm:p-8"
              initial={{ opacity: 0, y: 32, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full cursor-pointer border border-[rgba(212,175,55,0.18)] bg-white/80 text-lg text-[#475569] transition hover:border-[rgba(212,175,55,0.4)]"
              >
                x
              </button>

              <div className="pr-10">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">
                  Book Consultation
                </p>
                <h2 className="font-display mt-3 text-2xl text-[#132855] sm:text-3xl">
                  Let&apos;s plan your treatment journey
                </h2>
                <p className="mt-3 max-w-lg text-xs leading-6 text-[#475569]">
                  Fill in your details and our team will connect with you.
                </p>
              </div>

              {status === "success" ? (
                <div className="mt-8 rounded-[24px] border border-[rgba(212,175,55,0.18)] bg-white/70 p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#D4AF37,#E7C968)] text-base font-semibold text-[#132855] shadow-[0_16px_40px_rgba(212,175,55,0.18)]">
                    ✓
                  </div>
                  <h3 className="font-display mt-5 text-3xl text-[#132855]">
                    Request received
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#475569]">{feedback}</p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="premium-button mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition hover:bg-[#B8962E]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  className="mt-8 space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!validateForm()) return;
                    handleSubmit();
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(event) => handleChange("name", event.target.value)}
                        placeholder="Your Name*"
                        className="premium-input h-12 text-sm"
                      />
                      {errors.name ? (
                        <p className="mt-1 text-xs text-[#1F3A5F]">{errors.name}</p>
                      ) : null}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={(event) => handleChange("phone", event.target.value)}
                        placeholder="Your Phone*"
                        className="premium-input h-12 text-sm"
                      />
                      {errors.phone ? (
                        <p className="mt-1 text-xs text-[#1F3A5F]">{errors.phone}</p>
                      ) : null}
                    </div>
                  </div>

                  {/* <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(event) => handleChange("email", event.target.value)}
                        placeholder="Your Email*"
                        className="premium-input h-12 text-sm"
                      />
                      {errors.email ? (
                        <p className="mt-1 text-xs text-[#1F3A5F]">{errors.email}</p>
                      ) : null}
                    </div>
                    <select
                      name="category_name"
                      value={form.category_name}
                      onChange={(event) => handleChange("category_name", event.target.value)}
                      className="premium-input h-14 text-sm"
                    >
                      {categoryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div> */}

                  <div>
                    <textarea
                      rows={6}
                      name="message"
                      value={form.message}
                      onChange={(event) => handleChange("message", event.target.value)}
                      placeholder="Message"
                      className="premium-input min-h-[170px] text-sm"
                    />
                    {errors.message ? (
                      <p className="mt-1 text-xs text-[#1F3A5F]">{errors.message}</p>
                    ) : null}
                  </div>

                  {feedback ? (
                    <p className="text-sm text-[#1F3A5F]">
                      {feedback}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="premium-button inline-flex cursor-pointer h-14 w-full items-center justify-center rounded-full px-6 text-sm font-bold uppercase tracking-[0.16em] transition hover:bg-[#B8962E] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? "Submitting..." : "Send Message"}
                  </button>
                </form>
              )}
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
