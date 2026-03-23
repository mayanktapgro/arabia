export function SkeletonBlock({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-[22px] border border-white/[0.08] bg-white/[0.04] ${className}`}
    />
  );
}
