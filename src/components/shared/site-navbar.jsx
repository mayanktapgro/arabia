"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { OpenContactButton } from "@/components/contact/open-contact-button";
import { MegaMenu } from "@/components/shared/MegaMenu";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { OpenFranchiseModal } from "../franchise/OpenFranchiseModal";

const navItems = [
  // { label: "Home", href: "/" },
  // { label: "About Us", href: "/about" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(
    pathname !== "/" && pathname !== "/franchise"
  );
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // ✅ MOBILE MENU STATE
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const heroId = useMemo(() => {
    if (pathname === "/") return "home-hero";
    if (pathname === "/franchise") return "franchise-hero";
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

  const navLinkClass = (href) =>
    `relative text-lg font-bold text-[var(--gold)] transition hover:scale-105
   after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[var(--gold)]
   after:transition-all after:duration-300
   ${isActive(href) ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <header className="sticky top-0 z-[90] bg-[var(--english-blue)] shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/arviaData/arvia-golden-logo.jpeg"
            alt="Arvia Wellness Logo"
            width={55}
            height={55}
            className="rounded-xl border border-[rgba(201,166,70,0.2)]"
          />
          <div>
            <p className={`font-bold text-2xl brightness-120 text-[var(--gold)]`}>
              Arvia Wellness
            </p>
            <p className={`text-xs hidden md:block uppercase brightness-125 tracking-[0.24em] font-semibold text-2xl text-[var(--gold-soft)]`}>
              Luxury dermatology and wellness care
            </p>
          </div>
        </Link>


        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            href={'/'}
          >
            <span
              className={navLinkClass("/")}
            // className={`text-lg hover:scale-105 transition brightness-115 font-bold text-[var(--gold)]`}
            >
              Home
            </span>
          </Link>
          <Link
            href={'/about'}
          >
            <span
              className={navLinkClass("/about")}
            // className={`text-lg hover:scale-105 transition brightness-115 font-bold text-[var(--gold)]`}
            >
              About Us
            </span>
          </Link>
          <MegaMenu
            isOpen={isMegaMenuOpen}
            handleClose={() => setIsMegaMenuOpen(false)}
            isScrolled={isScrolled}
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
            isActive={pathname.startsWith("/services")}
          />

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              <span
                className={navLinkClass(item.href)}
              // className={`text-lg hover:scale-105 transition brightness-115 font-bold text-[var(--gold)]`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          {pathname === "/franchise" ? (
            <OpenFranchiseModal>
              <Button  className="hidden sm:inline-flex">
                Apply for Franchise
              </Button>
            </OpenFranchiseModal>
          ) : (
            <OpenContactButton className="hidden sm:inline-flex">
              Book Consultation
            </OpenContactButton>
          )}
        </div>

        {/* ✅ MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-[#C9A646]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[rgba(201,166,70,0.2)] px-6 py-6 space-y-5">

          <Link href="/" onClick={() => setIsMobileOpen(false)} className="block text-lg font-medium text-[#2C2C2C]">
            Home
          </Link>

          <Link href="/services" onClick={() => setIsMobileOpen(false)} className="block text-lg font-medium text-[#2C2C2C]">
            Services
          </Link>

          <Link href="/about" onClick={() => setIsMobileOpen(false)} className="block text-lg font-medium text-[#2C2C2C]">
            About
          </Link>

          <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="block text-lg font-medium text-[#2C2C2C]">
            Contact
          </Link>

          <OpenContactButton
            className="mt-4 w-full justify-center"
            onClick={() => setIsMobileOpen(false)}
          >
            Book Consultation
          </OpenContactButton>
        </div>
      )}
    </header>
  );
}





// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useMemo, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { OpenContactButton } from "@/components/contact/open-contact-button";
// import { MegaMenu } from "@/components/shared/MegaMenu";
// import Image from "next/image";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Contact", href: "/contact" },
//   { label: "Franchise", href: "/franchise" },
// ];

// export function SiteNavbar() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(
//     pathname !== "/" && pathname !== "/franchise"
//   );
//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

//   const heroId = useMemo(() => {
//     if (pathname === "/") {
//       return "home-hero";
//     }

//     if (pathname === "/franchise") {
//       return "franchise-hero";
//     }

//     return null;
//   }, [pathname]);

//   useEffect(() => {
//     const syncScrollState = () => {
//       if (!heroId) {
//         setIsScrolled(true);
//         return;
//       }

//       const hero = document.getElementById(heroId);

//       if (!hero) {
//         setIsScrolled(false);
//         return;
//       }

//       const threshold = Math.max(hero.offsetHeight - 96, 40);
//       setIsScrolled(window.scrollY > threshold);
//     };

//     const frameId = window.requestAnimationFrame(syncScrollState);
//     window.addEventListener("scroll", syncScrollState, { passive: true });
//     window.addEventListener("resize", syncScrollState);

//     return () => {
//       window.cancelAnimationFrame(frameId);
//       window.removeEventListener("scroll", syncScrollState);
//       window.removeEventListener("resize", syncScrollState);
//     };
//   }, [heroId]);

//   const isFranchise = pathname === "/franchise";

//   return (
//     <header
//       className={`sticky top-0 z-[90] transition-all duration-300 border-b border-transparent bg-transparent shadow-none ${isFranchise
//         ? "glass-navbar shadow-sm"
//         : "glass-navbar shadow-sm"

//         }`}
//     >
//       <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//         <Link href="/" className="flex items-center gap-3">
//           <Image
//             src='/arviaData/arvia-logo-new.png'
//             alt="Arvia Wellness Logo"
//             width={55}
//             height={55}
//             className="rounded-xl border border-[rgba(201,166,70,0.2)]"
//           />
//           {/* <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(201,166,70,0.3)] bg-[#FFF7E9] text-sm font-semibold text-[#A8821E]">
//             AR
//           </div> */}
//           <div>
//             <p className={`font-display text-2xl ${isScrolled ? "text-[#2C2C2C]" : "text-black/90"}`}>Arvia Wellness</p>
//             <p className={`text-xs uppercase hidden md:block tracking-[0.24em] ${isScrolled ? "text-[#6A5B4A]" : "text-black/80"}`}>
//               Luxury dermatology and wellness care
//             </p>
//           </div>
//         </Link>

//         <nav className="hidden items-center gap-6 lg:flex">
//           <MegaMenu
//             isOpen={isMegaMenuOpen}
//             handleClose={() => setIsMegaMenuOpen(false)}
//             isScrolled={isScrolled}
//             onMouseEnter={() => setIsMegaMenuOpen(true)}
//             onMouseLeave={() => setIsMegaMenuOpen(false)}
//           />

//           {navItems.map((item) => {
//             const isActive = pathname === "/franchise" && item.href === "/franchise";
//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`text-sm transition ${isScrolled ? "text-[#2C2C2C] hover:text-[#C9A646]" : "text-white/82 hover:text-white"} ${isActive ? isScrolled ? "text-[#C9A646]" : "text-white" : ""
//                   }`}
//               >
//                 {item.label}
//               </Link>
//             );
//           })}
//         </nav>

//         {pathname === "/franchise" ? (
//           <Button href="#franchise-form" className="hidden sm:inline-flex">
//             Apply for Franchise
//           </Button>
//         ) : (
//           <OpenContactButton className="hidden hover:bg-[var(--english-blue)] sm:inline-flex">
//             Book Consultation
//           </OpenContactButton>
//         )}
//       </div>
//     </header>
//   );
// }
