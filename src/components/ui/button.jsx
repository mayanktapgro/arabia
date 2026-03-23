import Link from "next/link";

const styles = {
  primary:
    "bg-[var(--gold)] text-black shadow-[0_14px_40px_rgba(201,161,74,0.25)] hover:-translate-y-0.5 hover:brightness-105",
  secondary:
    "border border-[var(--line)] bg-white/[0.04] text-[var(--text)] hover:border-[rgba(201,161,74,0.5)] hover:bg-white/[0.07]",
  ghost:
    "border border-[rgba(201,161,74,0.3)] bg-[rgba(201,161,74,0.08)] text-[var(--text)] hover:bg-[rgba(201,161,74,0.14)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  as = "link",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200";
  const classes = `${base} ${styles[variant]} ${className}`;

  if (as === "button") {
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
