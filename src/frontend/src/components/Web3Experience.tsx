import { useScrollReveal } from "@/hooks/useScrollReveal";

const games = [
  {
    name: "Anichess",
    type: "Web Game",
    image: "/assets/web3/anichess.jpg",
    bullets: [
      "Acquired 40,000+ players, achieving 8+ minutes average session time",
      "Designed and executed weekly leaderboard campaigns, engaging 2,000+ active players",
      "Scaled engagement into a Top 128 playoff tournament with a $1,100 prize pool, driving strong retention and community excitement",
    ],
  },
  {
    name: "OverKnights",
    type: "PC Game",
    image: "/assets/web3/overknights.jpg",
    bullets: [
      "Delivered 1,000+ closed alpha players, ensuring game downloads and first-match completion",
      "Ran weekly tournaments and Discord Game Nights, engaging 100+ players with 5+ creators per session",
      "Onboarded 10+ creators, generating 20,000+ organic views through dedicated content",
    ],
  },
  {
    name: "Boinkers",
    type: "Telegram Game",
    image: "/assets/web3/boinkers.jpg",
    bullets: [
      "Acquired 5,000 high-intent players within one week via top Telegram creator networks",
      "Achieved 85% Day 2 activity rate, indicating strong early retention and engagement",
    ],
  },
  {
    name: "SimDunk",
    type: "Mobile Game",
    image: "/assets/web3/simdunk.jpg",
    bullets: [
      "Onboarded 3,000+ closed beta testers, each completing 2+ matches",
      "Designed leaderboard-driven retention campaigns, achieving 25% Day 7 retention",
      "Hosted Discord Game Nights (2+ sessions) with 150+ players and 5+ creators, boosting engagement",
    ],
  },
  {
    name: "One World Nation (OWN)",
    type: "Web3 RMG",
    image: "/assets/web3/one-world-nation.jpg",
    bullets: [
      "Scaled UA campaigns with $20K+ budget → acquired low-CAC, high-intent web3 gamers",
      "Leveraged influencer + Web3 channels to drive efficient user acquisition in RMG ecosystem",
    ],
  },
];

export function Web3Experience() {
  const ref = useScrollReveal();

  return (
    <section
      id="web3"
      className="py-24"
      style={{ background: "oklch(0.10 0.05 295)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="scroll-reveal text-center mb-16"
        >
          <div className="inline-block text-xs font-medium uppercase tracking-widest text-accent mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
            Web3 Gaming
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Web3 <span className="text-gradient-purple">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            As a Growth Lead at Lysto, I led multiple User Acquisition,
            Retention, and Engagement campaigns across a diverse portfolio of
            Web3 games. Over one year, I worked with 15+ Web3 gaming clients,
            managing end-to-end planning, execution, and delivery, while
            consistently maintaining ~37% profit margins.
          </p>
        </div>

        <div className="flex flex-col gap-6" data-ocid="web3.list">
          {games.map((g, i) => {
            const imageRight = i % 2 !== 0;
            return (
              <div
                key={g.name}
                className="rounded-xl overflow-hidden transition-all duration-300 flex flex-col md:flex-row"
                style={{
                  background: "oklch(0.13 0.06 295)",
                  border: "1px solid oklch(0.45 0.28 300 / 0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.border =
                    "1px solid oklch(0.65 0.28 300 / 0.7)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 0 20px oklch(0.55 0.28 300 / 0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.border =
                    "1px solid oklch(0.45 0.28 300 / 0.3)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
                data-ocid={`web3.item.${i + 1}`}
              >
                {/* Image */}
                <div
                  className={`flex-shrink-0 w-full md:w-72 lg:w-80 flex items-center justify-center overflow-hidden ${
                    imageRight ? "md:order-2" : "md:order-1"
                  }`}
                  style={{ background: "oklch(0.08 0.04 295)" }}
                >
                  <img
                    src={g.image}
                    alt={g.name}
                    className="w-full h-full object-contain max-h-56 md:max-h-full"
                  />
                </div>

                {/* Details */}
                <div
                  className={`p-6 flex flex-col justify-center flex-1 ${
                    imageRight ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-display font-bold text-xl">{g.name}</h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "oklch(0.65 0.28 320 / 0.15)",
                        color: "oklch(0.65 0.28 320)",
                        border: "1px solid oklch(0.65 0.28 320 / 0.3)",
                      }}
                    >
                      {g.type}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {g.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-muted-foreground flex gap-2 leading-relaxed"
                      >
                        <span className="text-accent flex-shrink-0 mt-0.5">
                          ✦
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
