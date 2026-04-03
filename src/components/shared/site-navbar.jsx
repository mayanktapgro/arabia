"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { MegaMenu } from "@/components/shared/MegaMenu";
import Image from "next/image";

const navItems = [
  { label: "Results", href: "/#results" },
  { label: "High Demand", href: "/#high-demand" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Franchise", href: "/franchise" },
];

export function SiteNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(
    pathname !== "/" && pathname !== "/franchise"
  );
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const heroId = useMemo(() => {
    if (pathname === "/") {
      return "home-hero";
    }

    if (pathname === "/franchise") {
      return "franchise-hero";
    }

    return null;
  }, [pathname]);

  useEffect(() => {
    const syncScrollState = () => {
      if (!heroId) {
        setIsScrolled(true);
        return;
      }

      const hero = document.getElementById(heroId);

      if (!hero) {
        setIsScrolled(false);
        return;
      }

      const threshold = Math.max(hero.offsetHeight - 96, 40);
      setIsScrolled(window.scrollY > threshold);
    };

    const frameId = window.requestAnimationFrame(syncScrollState);
    window.addEventListener("scroll", syncScrollState, { passive: true });
    window.addEventListener("resize", syncScrollState);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", syncScrollState);
      window.removeEventListener("resize", syncScrollState);
    };
  }, [heroId]);

  const isFranchise = pathname === "/franchise";

  return (
    <header
      className={`sticky top-0 z-[90] transition-all duration-300 ${isScrolled
        ? isFranchise
          ? "border-b border-[rgba(201,166,70,0.2)] bg-white/60 shadow-sm backdrop-blur-md"
          : "border-b border-[rgba(201,166,70,0.2)] bg-white/60 shadow-sm backdrop-blur-md"
        : "border-b border-transparent bg-transparent shadow-none"
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src='/arviaData/arvia-logo.jpeg'
            alt="Arvia Wellness Logo"
            width={40}
            height={40}
          />
          {/* <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(201,166,70,0.3)] bg-[#FFF7E9] text-sm font-semibold text-[#A8821E]">
            AR
          </div> */}
          <div>
            <p className="font-display text-2xl text-[#2C2C2C]">Arvia Wellness</p>
            <p className="text-xs uppercase tracking-[0.24em] text-[#8C7760]">
              Dermatology and Arabic luxury care
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <MegaMenu
            isOpen={isMegaMenuOpen}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          />

          {navItems.map((item) => {
            const isActive = pathname === "/franchise" && item.href === "/franchise";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm text-[#7B6A57] transition hover:text-[#2C2C2C] ${isActive ? "text-[#2C2C2C]" : ""
                  }`}
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
