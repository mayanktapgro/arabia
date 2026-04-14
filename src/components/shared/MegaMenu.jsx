"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { serviceCategories, servicesData } from "@/data/servicesData";

export function MegaMenu({ isOpen, handleClose, isScrolled, onMouseEnter, onMouseLeave }) {
  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        type="button"
        className={`flex items-center gap-2 brightness-135 cursor-pointer text-sm transition font-extrabold text-[var(--gold)]`}
      >
        Services
        <span className={`text-xs ${isScrolled ? "text-[#C9A646]" : "text-[#EAC27A]"}`}>+</span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.22 }}
            className="absolute left-1/2 top-full z-[80] mt-5 w-[min(78rem,calc(100vw-4rem))] -translate-x-1/2 rounded-[28px] border border-[rgba(201,166,70,0.15)] bg-[rgba(255,255,255,0.88)] p-6 shadow-[0_28px_80px_rgba(44,44,44,0.12)] backdrop-blur-xl"
          >
            <div className="grid gap-6 lg:grid-cols-4">
              {serviceCategories.map((group) => {
                const items = servicesData.filter((service) =>
                  group.slugs.includes(service.slug)
                );

                return (
                  <div key={group.title} className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[#C9A646]">
                        {group.title}
                      </p>
                      {/* <p className="mt-2 text-sm leading-6 text-[#6A5B4A]">
                        {group.description}
                      </p> */}
                    </div>

                    <div className="space-y-3">
                      {items.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={handleClose}
                          className="group flex items-center gap-3 rounded-[18px] border border-transparent bg-[#F7F3EE] p-3 transition hover:border-[rgba(201,166,70,0.26)] hover:bg-white"
                        >
                          <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                            <Image
                              src={service.cardImage}
                              alt={service.title}
                              fill
                              className="object-cover transition duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-[#2C2C2C]">{service.title}</p>
                            {/* <p className="mt-1 text-xs leading-5 text-[#6A5B4A]">
                              {service.menuDescription}
                            </p> */}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
