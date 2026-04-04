"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  Treatments: [
    { label: "Carbon Facial", slug: "carbon-facial" },
    { label: "Medi Facial", slug: "medi-facial" },
    { label: "Laser Photofacial", slug: "laser-photofacial" },
    { label: "HIFU Body Tightening", slug: "hifu-body-tightening" },
    { label: "CO2 Fractional Laser", slug: "co2-fractional-laser" },
    { label: "RF Skin Tightening", slug: "rf-skin-tightening-therapy" },
  ],
  Locations: ["Delhi NCR", "Dubai", "Riyadh"],
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M13.4 21v-7.3h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.3 1.3-1.3h1.6V5.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v1.7H7.8v2.8h2.4V21h3.2Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M21.6 8.2c-.2-.9-.9-1.6-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9.8 2 12 2 12s0 2.2.4 3.8c.2.9.9 1.6 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-3.8.4-3.8s0-2.2-.4-3.8ZM10 14.8V9.2L15 12l-5 2.8Z" />
    </svg>
  );
}

export function SiteFooter() {
  const socials = [
    { label: "Instagram", icon: <InstagramIcon /> },
    { label: "Facebook", icon: <FacebookIcon /> },
    { label: "YouTube", icon: <YouTubeIcon /> },
  ];

  return (
    <footer className="border-t border-[rgba(212,175,55,0.18)] bg-[#132855]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_repeat(4,0.7fr)] lg:px-8">
        <div>
          <p className="font-display text-3xl text-white"> <img src="/arviaData/arvia-logo-new.png" alt="Arvia Wellness" className="h-12 w-12 inline-block mr-3" /> Arvia Wellness</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
            Premium skincare, dermatology, and aesthetic experiences shaped with
            elegant hospitality, trusted care, and a refined luxury presence.
          </p>
          {/* <div className="mt-6 flex w-max items-center gap-4 rounded-full border border-[rgba(212,175,55,0.22)] bg-white/8 px-4 py-2 text-sm text-white/75">
            <div className="flex gap-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href="#top"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,55,0.22)] bg-white/8 text-[#D4AF37] transition hover:border-[rgba(212,175,55,0.48)] hover:bg-[rgba(212,175,55,0.12)] hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <a href="tel:+917678115756" className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" />
              +91 7678115756
            </a>
          </div> */}
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-semibold text-white">{title}</p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              {title === "Company" &&
                links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block transition duration-200 hover:text-[#D4AF37] hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                ))}

              {title === "Treatments" &&
                links.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="block transition duration-200 hover:text-[#D4AF37] hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                ))}

              {title === "Locations" && links.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-white">Franchise</p>
          <Link
            href="/franchise"
            className="mt-4 inline-flex w-50 rounded-full border border-[rgba(212,175,55,0.32)] bg-white/8 px-4 py-2 text-sm font-medium text-[#D4AF37]"
          >
            <span className="text-white">
              Franchise Opportunities
            </span>
          </Link>
          <div className="mt-6 flex flex-col w-max items-start gap-8 rounded-full  border-[rgba(212,175,55,0.22)]  px-4 py-2 text-sm text-white/75">
            <a href="tel:+917678115756" className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" />
              <span className="border-b text-lg">+91 7678115756</span>
            </a>
            <div className="flex gap-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href="#top"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(212,175,55,0.22)] bg-white/8 text-[#D4AF37] transition hover:border-[rgba(212,175,55,0.48)] hover:bg-[rgba(212,175,55,0.12)] hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {/* <form className="mt-5 space-y-3">
            <input
              type="email"
              className="premium-input border-[rgba(212,175,55,0.2)] bg-white/90 text-[#0F172A]"
              placeholder="Enter your email"
            />
            <button
              type="button"
              className="w-full rounded-full bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#132855] transition hover:brightness-105"
            >
              Join newsletter
            </button>
          </form> */}
        </div>
      </div>
    </footer>
  );
}
