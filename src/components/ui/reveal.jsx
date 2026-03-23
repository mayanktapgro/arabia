"use client";

import { motion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0, as = "section", id }) {
  const Component = motion[as] || motion.section;

  return (
    <Component
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
