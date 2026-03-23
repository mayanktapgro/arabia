import Link from "next/link";

const footerLinks = {
  About: ["Our story", "Medical team", "Technology", "Reviews"],
  Treatments: ["Laser Hair Removal", "Hydrafacial", "Anti-Aging", "Acne Treatment"],
  Locations: ["Riyadh", "Dubai", "Jeddah", "Abu Dhabi"],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[var(--bg)]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_repeat(4,0.7fr)] lg:px-8">
        <div>
          <p className="font-display text-3xl text-white">Arabia Aesthetics</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
            Premium skincare, dermatology, and aesthetic experiences designed
            to feel clinical, luxurious, and deeply trustworthy.
          </p>
          <div className="mt-6 flex gap-3">
            {["IG", "FB", "YT"].map((item) => (
              <a
                key={item}
                href="#top"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-[var(--muted)] transition hover:border-[rgba(201,161,74,0.4)] hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="text-sm font-semibold text-white">{title}</p>
            <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {links.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-white">Franchise</p>
          <Link
            href="/franchise"
            className="mt-4 inline-flex rounded-full border border-[rgba(201,161,74,0.35)] bg-[rgba(201,161,74,0.1)] px-4 py-2 text-sm font-medium text-[var(--gold)]"
          >
            Franchise Opportunities
          </Link>
          <form className="mt-5 space-y-3">
            <input
              type="email"
              className="premium-input"
              placeholder="Enter your email"
            />
            <button
              type="button"
              className="w-full rounded-full bg-white/[0.08] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.12]"
            >
              Join newsletter
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
