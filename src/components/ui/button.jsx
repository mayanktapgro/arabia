import Link from "next/link";

const styles = {
  primary:
    "bg-[var(--gold)] text-[#ffffff] shadow-[0_14px_40px_rgba(212,175,55,0.22)] hover:-translate-y-0.5 hover:brightness-105",
  secondary:
    "border border-[var(--gold)] bg-transparent text-[#ffffff] hover:bg-[rgba(212,175,55,0.08)]",
  ghost:
    "border border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.08)] text-[#ffffff] hover:bg-[rgba(212,175,55,0.14)]",
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
    "inline-flex items-center justify-center rounded-full px-5 py-3 cursor-pointer text-sm font-semibold transition duration-200";
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
