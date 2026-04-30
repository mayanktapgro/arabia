"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getServiceBySlug } from "@/data/servicesData";

const capitalize = (str) =>
    str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function Breadcrumb() {
    const pathname = usePathname();

    // ❌ Hide on Home
    if (pathname === "/") return null;

    const pathSegments = pathname.split("/").filter(Boolean);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");

        let label = capitalize(segment);

        // ✅ Replace slug with actual service title
        if (pathSegments[0] === "services" && index === 1) {
            const service = getServiceBySlug(segment);
            if (service) label = service.title;
        }

        return { label, href };
    });

    return (
        <div className="w-full bg-[#C9A646]/90 border-b border-gray-200">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 py-2">
                <nav className="flex items-center text-sm text-[var(--english-blue)]">

                    {/* Home */}
                    <Link href="/" className="hover:text-black transition">
                        Home
                    </Link>

                    {breadcrumbs.map((item, index) => (
                        <span key={item.href} className="flex items-center">
                            <span className="mx-2">/</span>

                            {index === breadcrumbs.length - 1 ? (
                                <span className="font-medium text-black">
                                    {item.label}
                                </span>
                            ) : (
                                <Link href={item.href} className="hover:text-black transition">
                                    {item.label}
                                </Link>
                            )}
                        </span>
                    ))}
                </nav>
            </div>
        </div>
    );
}