/** Lightweight, CSS-only animated data backdrop: grid lines + floating data points + sparkline. */
const points = [
  { left: "12%", top: "28%", delay: "0s" },
  { left: "22%", top: "62%", delay: "1.1s" },
  { left: "38%", top: "18%", delay: "2.2s" },
  { left: "54%", top: "48%", delay: "0.6s" },
  { left: "68%", top: "24%", delay: "1.8s" },
  { left: "78%", top: "66%", delay: "2.8s" },
  { left: "88%", top: "38%", delay: "0.3s" },
];

export function DataBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 grid-lines opacity-70" />

      {points.map((p) => (
        <span
          key={p.left + p.top}
          className="absolute size-1.5 rounded-full bg-primary shadow-[var(--shadow-glow)] animate-pulse-dot"
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
        />
      ))}

      <svg
        className="absolute inset-x-0 bottom-0 h-48 w-full opacity-30"
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
      >
        <path
          d="M0 200 L120 168 L240 182 L360 120 L480 148 L600 92 L720 118 L840 62 L960 96 L1080 48 L1200 74"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M0 200 L120 168 L240 182 L360 120 L480 148 L600 92 L720 118 L840 62 L960 96 L1080 48 L1200 74 L1200 240 L0 240 Z"
          fill="var(--primary)"
          opacity="0.08"
        />
      </svg>
    </div>
  );
}
