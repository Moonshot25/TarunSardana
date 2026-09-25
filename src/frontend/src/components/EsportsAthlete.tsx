import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    image: "/assets/generated/athlete-trophy.dim_600x340.jpg",
    title: "ESL India Featured Athlete",
    desc: "Recognized during Dew Arena LAN Championship 2019, earning a featured spot on ESL India's official Instagram—highlighting top-tier performance and visibility within the national esports ecosystem.",
  },
  {
    image: "/assets/generated/athlete-esports.dim_600x340.jpg",
    title: "University Esports Captain",
    desc: "Led CS:GO & PUBG Mobile teams (2017–2019), competing across national tournaments and winning multiple titles—driving strategy, coordination, and team performance under pressure.",
  },
  {
    image: "/assets/generated/athlete-games.dim_600x340.jpg",
    title: "Top-Tier Competitive Rankings",
    desc: "Achieved highest ranks across Pokémon UNITE, PUBG Mobile, and Call of Duty Mobile—demonstrating elite game sense, adaptability, and cross-genre mastery.",
  },
];

export function EsportsAthlete() {
  const ref = useScrollReveal();

  return (
    <section
      id="athlete"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.10 0.05 295)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, oklch(0.45 0.28 300 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="scroll-reveal text-center mb-14"
        >
          <div
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "oklch(0.14 0.07 300 / 0.8)",
              border: "1px solid transparent",
              backgroundClip: "padding-box",
              boxShadow:
                "0 0 0 1px oklch(0.65 0.28 320 / 0.5), 0 0 16px oklch(0.65 0.28 300 / 0.25)",
              color: "oklch(0.85 0.18 310)",
              letterSpacing: "0.18em",
            }}
          >
            FROM PLAYER → OPERATOR
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-3">
            Competitive gaming gave me a{" "}
            <span
              className="italic"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.28 300), oklch(0.72 0.28 340))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              player's
            </span>{" "}
            lens.
          </h2>

          {/* Full image, no cropping, reduced to max-w-xs */}
          <div className="flex justify-center mt-6 mb-6">
            <img
              src="/assets/uploads/competitive-gaming-edge.jpg"
              alt="Competitive Gaming Edge"
              className="rounded-2xl w-full max-w-xs"
              style={{
                objectFit: "contain",
                height: "auto",
                display: "block",
                border: "1px solid oklch(0.50 0.28 300 / 0.3)",
                boxShadow: "0 0 32px oklch(0.55 0.28 300 / 0.15)",
              }}
            />
          </div>

          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "oklch(0.75 0.05 280 / 0.7)" }}
          >
            Before building growth systems, I competed in them. That experience informs how I think about game sense, ranked ecosystems, community status and the moments that keep players playing.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6" data-ocid="athlete.list">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="rounded-2xl overflow-hidden flex flex-col cursor-default transition-all duration-300"
              style={{
                background:
                  "linear-gradient(145deg, oklch(0.14 0.07 300 / 0.85), oklch(0.12 0.055 295 / 0.9))",
                border: "1px solid oklch(0.45 0.28 300 / 0.3)",
                boxShadow: "0 4px 24px oklch(0.45 0.28 300 / 0.07)",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px)";
                el.style.border = "1px solid oklch(0.65 0.28 300 / 0.6)";
                el.style.boxShadow = "0 8px 36px oklch(0.55 0.28 300 / 0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.border = "1px solid oklch(0.45 0.28 300 / 0.3)";
                el.style.boxShadow = "0 4px 24px oklch(0.45 0.28 300 / 0.07)";
              }}
              data-ocid={`athlete.item.${i + 1}`}
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="font-display font-bold text-base text-foreground leading-snug">
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.70 0.05 280)" }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
