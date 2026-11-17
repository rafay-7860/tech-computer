"use client";

export function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1677FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <g className="animate-circuit" stroke="url(#circuitGrad)" strokeWidth="1" fill="none">
          <path d="M0 120 H180 V220 H360 V80 H540 V180 H720 V40 H900 V160 H1100 V90 H1400" />
          <path d="M0 280 H140 V360 H300 V240 H480 V400 H640 V300 H820 V420 H1000 V320 H1280" />
          <path d="M80 0 V140 H220 V60 H400 V200 H560 V100 H760 V260 H940 V160 H1200" />
        </g>
        <g fill="#22D3EE">
          <circle className="animate-circuit" cx="180" cy="120" r="3" />
          <circle className="animate-circuit" cx="360" cy="220" r="3" />
          <circle className="animate-circuit" cx="540" cy="80" r="3" />
          <circle className="animate-circuit" cx="300" cy="360" r="3" />
          <circle className="animate-circuit" cx="640" cy="300" r="3" />
          <circle className="animate-circuit" cx="400" cy="60" r="3" />
        </g>
      </svg>
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-electric/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-cyan/10 blur-3xl" />
    </div>
  );
}
