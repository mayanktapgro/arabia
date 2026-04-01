export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}) {
  const titleColor = tone === "dark" ? "text-[#2C2C2C]" : "text-white";
  const descriptionColor = tone === "dark" ? "text-[#6A5B4A]" : "text-[var(--muted)]";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--gold)]">
        {eyebrow}
      </p>
      <h2 className={`font-display mt-4 text-4xl leading-tight sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 ${descriptionColor}`}>{description}</p>
    </div>
  );
}
