// export function SectionHeading({
//   eyebrow,
//   title,
//   description,
//   align = "left",
//   tone = "light",
// }) {
//   const titleColor = tone === "light" ? "text-white" : "text-[var(--text)]";
//   const descriptionColor =
//     tone === "light" ? "text-white/78" : "text-[var(--muted)]";
//   const eyebrowColor = tone === "light" ? "text-[#EAC27A]" : "text-[var(--gold)]";

//   return (
//     <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
//       <p className={`text-sm font-medium uppercase tracking-[0.28em] ${eyebrowColor}`}>
//         {eyebrow}
//       </p>
//       <h2 className={`font-display mt-4 text-4xl leading-tight sm:text-5xl ${titleColor}`}>
//         {title}
//       </h2>
//       <p className={`mt-5 text-base leading-8 ${descriptionColor}`}>{description}</p>
//     </div>
//   );
// }



// @/components/ui/section-heading.tsx

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}) {
  const titleColor = tone === "light" ? "text-white" : "text-[var(--text)]";
  const descriptionColor =
    tone === "light" ? "text-white/78" : "text-[var(--muted)]";

  // CHANGED: eyebrowColor uses English Blue when tone is dark
  const eyebrowColor = tone === "light" ? "text-[#EAC27A]" : "text-[var(--english-blue)]";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-5xl"}>
      <p className={`text-sm font-medium uppercase tracking-[0.28em] ${eyebrowColor}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display mt-4 text-xl leading-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base text-sm md:text-lg leading-8 ${descriptionColor}`}>{description}</p>
    </div>
  );
}