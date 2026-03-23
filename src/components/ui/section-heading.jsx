export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--gold)]">
        {eyebrow}
      </p>
      <h2 className="font-display mt-4 text-4xl leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--muted)]">{description}</p>
    </div>
  );
}
