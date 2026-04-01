"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = {
  About: ["Our story", "Medical team", "Technology", "Reviews"],
  Treatments: ["Laser Hair Removal", "Hydrafacial", "Anti-Aging", "Acne Treatment"],
  Locations: ["Riyadh", "Dubai"],
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
  const pathname = usePathname();
  const isFranchise = pathname === "/franchise";
  const socials = [
    { label: "Instagram", icon: <InstagramIcon /> },
    { label: "Facebook", icon: <FacebookIcon /> },
    { label: "YouTube", icon: <YouTubeIcon /> },
  ];

  return (
    <footer
      className={`border-t border-[rgba(201,166,70,0.16)] ${
        isFranchise ? "bg-[#F7E4DE]" : "bg-[#F0E8DC]"
      }`}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_repeat(4,0.7fr)] lg:px-8">
        <div>
          <p className="font-display text-3xl text-[#2C2C2C]">Arbia Aesthetics</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#6B5A48]">
            Premium skincare, dermatology, and aesthetic experiences designed
            to feel elegant, warm, and deeply trustworthy under a modern Arabic luxury identity.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href="#top"
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(201,166,70,0.18)] bg-[#FAF5EC] text-[#A8821E] transition hover:border-[rgba(201,166,70,0.4)] hover:bg-[#FFF7E9] hover:text-[#8B6515]"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-semibold text-[#2C2C2C]">{title}</p>
            <div className="mt-4 space-y-3 text-sm text-[#6B5A48]">
              {links.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-[#2C2C2C]">Franchise</p>
          <Link
            href="/franchise"
            className="mt-4 inline-flex rounded-full border border-[rgba(201,166,70,0.28)] bg-[#FFF8EB] px-4 py-2 text-sm font-medium text-[#A8821E]"
          >
            Franchise Opportunities
          </Link>
          <form className="mt-5 space-y-3">
            <input
              type="email"
              className="premium-input border-[rgba(201,166,70,0.16)] bg-[#FAF5EC] text-[#2C2C2C]"
              placeholder="Enter your email"
            />
            <button
              type="button"
              className="w-full rounded-full bg-[#2C2C2C] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1E1E1E]"
            >
              Join newsletter
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
