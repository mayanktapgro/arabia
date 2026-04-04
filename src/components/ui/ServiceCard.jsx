"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function ServiceCard({
  service,
  index = 0,
  compact = false,
  showCategory = true,
  showDescription = false,
  ctaLabel = "Explore Service",
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-[#132855]/90 group h-full overflow-hidden rounded-[18px] transition duration-300 hover:border-[rgba(201,166,70,0.3)] hover:shadow-[0_20px_48px_rgba(201,166,70,0.18)]"
    >
      <div className={`relative overflow-hidden ${compact ? "h-[15rem]" : "h-[18rem]"}`}>
        <Image
          src={service.image || service.cardImage}
          alt={service.title}
          width={720}
          height={720}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(0,0,0,0.48)_100%)]" />
      </div>

      <div className="p-5">
        {showCategory ? (
          <p className="text-[11px] uppercase tracking-[0.26em] text-[#fff]">
            {service.category}
          </p>
        ) : null}
        <h3
          className={`font-display line-clamp-1 text-xl text-[#fff] ${showCategory ? "mt-3" : ""
            }`}
        >
          {service.title}
        </h3>
        {showDescription && (
          <p className="mt-3 text-sm leading-7 text-[#fff]">
            {service.shortDescription || service.description}
          </p>
        )}
        <Link
          href={`/services/${service.slug}`}
        >
          <button 
          className="mt-5 inline-flex cursor-pointer rounded-full border border-[rgba(201,166,70,0.24)] bg-[#C9A646] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#C9A646]/90 hover:scale-105 hover:text-white/90"
          >
            {ctaLabel}
          </button>
        </Link>
      </div>
    </motion.article>
  );
}
