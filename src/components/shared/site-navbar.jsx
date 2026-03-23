"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { OpenContactButton } from "@/components/contact/open-contact-button";

const navItems = [
  { label: "Treatments", href: "/#services" },
  { label: "Results", href: "/#results" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Franchise", href: "/franchise" },
];

export function SiteNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[rgba(11,11,12,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(201,161,74,0.35)] bg-[rgba(201,161,74,0.1)] text-sm font-semibold text-[var(--gold)]">
            AA
          </div>
          <div>
            <p className="font-display text-2xl text-white">Arabia Aesthetics</p>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Dermatology and luxury care
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === "/franchise" && item.href === "/franchise";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-white ${isActive ? "text-white" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {pathname === "/franchise" ? (
          <Button href="#franchise-form" className="hidden sm:inline-flex">
            Apply for Franchise
          </Button>
        ) : (
          <OpenContactButton className="hidden sm:inline-flex">
            Book Consultation
          </OpenContactButton>
        )}
      </div>
    </header>
  );
}
