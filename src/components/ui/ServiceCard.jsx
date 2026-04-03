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
      whileHover={{ y: -6, scale: 1.05 }}
      className="group h-full overflow-hidden rounded-[24px] border border-[rgba(201,166,70,0.18)] bg-[#EEE8DF] shadow-[0_18px_50px_rgba(128,101,52,0.1)] transition duration-300 hover:shadow-[0_22px_60px_rgba(201,166,70,0.25)]"
    >
      <div className={`relative overflow-hidden ${compact ? "h-74" : "h-84"}`}>
        <Image
          src={service.image || service.cardImage}
          alt={service.title}
          width={720}
          height={720}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(44,44,44,0.14)_100%)]" />
      </div>

      <div className="p-5">
        {showCategory ? (
          <p className="text-[11px] uppercase tracking-[0.26em] text-[#A8821E]">
            {service.category}
          </p>
        ) : null}
        <h3
          className={`font-display text-xl line-clamp-1 text-[#2C2C2C] ${showCategory ? "mt-3" : ""
            }`}
        >
          {service.title}
        </h3>
        {showDescription && (
          <p className="mt-3 text-sm leading-7 text-[#6A5B4A]">
            {service.shortDescription || service.description}
          </p>
        )}
        <Link
          href={`/services/${service.slug}`}
          className="mt-5 inline-flex rounded-full border border-[rgba(201,166,70,0.26)] bg-[#F5F2EC] px-4 py-2 text-sm font-semibold text-[#2C2C2C] transition hover:bg-[#F1E8D8]"
        >
          {ctaLabel}
        </Link>
      </div>
    </motion.article>
  );
}
