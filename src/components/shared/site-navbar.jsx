"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { OpenContactButton } from "@/components/contact/open-contact-button";

const navItems = [
  { label: "Treatments", href: "/#services" },
  { label: "Results", href: "/#results" },
  { label: "High Demand", href: "/#high-demand" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Franchise", href: "/franchise" },
];

export function SiteNavbar() {
  const pathname = usePathname();
  const [isOnHero, setIsOnHero] = useState(true);

  useEffect(() => {
    if (pathname !== "/") {
      return undefined;
    }

    const hero = document.getElementById("home-hero");

    if (!hero) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnHero(entry.isIntersecting);
      },
      {
        rootMargin: "-72px 0px 0px 0px",
        threshold: 0.12,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [pathname]);

  const transparentHome = pathname === "/" && isOnHero;
  const isFranchise = pathname === "/franchise";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${transparentHome
        ? "border-b border-transparent bg-transparent"
        : isFranchise
          ? "border-b border-[rgba(201,166,70,0.16)] bg-[rgba(255,242,239,0.88)] backdrop-blur-xl"
          : "border-b border-[rgba(201,166,70,0.16)] bg-[rgba(245,242,236,0.88)] backdrop-blur-xl"
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(201,166,70,0.3)] bg-[#FFF7E9] text-sm font-semibold text-[#A8821E]">
            AR
          </div>
          <div>
            <p className="font-display text-2xl text-[#2C2C2C]">Arvia Aesthetics</p>
            <p className="text-xs uppercase tracking-[0.24em] text-[#8C7760]">
              Dermatology and Arabic luxury care
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#7B6A57] lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === "/franchise" && item.href === "/franchise";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-[#2C2C2C] ${isActive ? "text-[#2C2C2C]" : ""}`}
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
