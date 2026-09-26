import { useId } from "react";

export function LogoMark({ className = "h-10 w-auto" }: { className?: string }) {
  const id = useId();
  const g1 = `${id}-g1`;
  const g2 = `${id}-g2`;
  return (
    <svg viewBox="0 0 132 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={g1} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38aaff" />
          <stop offset="100%" stopColor="#0b5fd0" />
        </linearGradient>
        <linearGradient id={g2} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1da1ff" />
          <stop offset="100%" stopColor="#0a3f9a" />
        </linearGradient>
      </defs>
      {/* pixels */}
      <rect x="18" y="26" width="10" height="10" rx="2" fill="#38aaff" />
      <rect x="4" y="38" width="7" height="7" rx="1.5" fill="#38aaff" />
      <rect x="14" y="44" width="10" height="10" rx="2" fill="#1a8cff" />
      <rect x="28" y="38" width="12" height="12" rx="2" fill="#1a8cff" />
      {/* D */}
      <path
        d="M36 4 H84 A46 46 0 0 1 84 96 H52 L64 80 H84 A30 30 0 0 0 84 20 H52 Z"
        fill={`url(#${g1})`}
      />
      {/* delta */}
      <path d="M66 22 L98 82 H80 L66 54 L48 96 H30 Z" fill={`url(#${g2})`} />
    </svg>
  );
}

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3" dir="ltr">
      <LogoMark className="h-10 w-auto shrink-0" />
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-lg font-bold tracking-tight ${light ? "text-white" : "text-navy-900"}`}
        >
          Delta Smart System
        </span>
        <span
          className={`font-display text-[10px] tracking-wide ${light ? "text-brand-300/80" : "text-slate-500"}`}
        >
          IT Services &amp; Digital Solutions
        </span>
      </span>
    </span>
  );
}
