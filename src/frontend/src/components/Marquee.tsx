const ITEMS = [
  "PLAYER ACQUISITION",
  "ESPORTS ECOSYSTEMS",
  "COMMUNITY GROWTH",
  "CREATOR CAMPAIGNS",
  "USER RETENTION",
  "GAME LAUNCHES",
  "DISCORD STRATEGY",
  "INFLUENCER NETWORKS",
  "REWARDED UA",
  "TOURNAMENT IPS",
];

const text = `${ITEMS.join(" · ")} · `;

export function Marquee() {
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{ background: "oklch(0.12 0.08 300)" }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, oklch(0.12 0.08 300), transparent)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, oklch(0.12 0.08 300), transparent)",
        }}
      />

      <div className="flex whitespace-nowrap animate-marquee">
        <span
          className="inline-block font-display font-bold text-sm tracking-[0.15em] uppercase pr-8"
          style={{ color: "oklch(0.65 0.28 320)" }}
        >
          {text}
          {text}
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}
