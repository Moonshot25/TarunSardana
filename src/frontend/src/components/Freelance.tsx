import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    client: "Kix",
    project: "",
    role: "User Acquisition and Retention",
    period: "May 2026 – Aug 2026",
    image: "/assets/case-studies/kix.png",
    stats: [
      "100K+ Players Reached",
      "65K+ Multi-Game Players",
      "30%+ D1 Retention",
    ],
    bullets: [
      "Built a multi-channel acquisition engine through creators, gaming communities and rewarded acquisition.",
      "Acquired 100K+ players, with 65K+ going on to play 2 or more games.",
      "Achieved 30%+ D1 retention, doubling the client’s 15% soft-launch KPI.",
    ],
  },
  {
    client: "Xsquads Tech",
    project: "Scarfall 2.0",
    role: "Grassroots Esports",
    period: "Jan 2026 – Mar 2026",
    image: "/assets/case-studies/scarfall2.jpg",
    stats: [
      "5M+ Downloads",
      "200+ Scrims",
      "10+ Tournaments",
      "300+ Teams",
      "~60% D7 Retention",
    ],
    bullets: [
      "Scaled Scarfall 2.0 (5M+ First month downloads) via Discord-first esports ecosystem",
      "Executed 200+ scrims & 10+ tournaments → activated 300+ competitive teams through partner communities",
      "Built engagement loops driving ~60% Day 7 retention",
    ],
  },
  {
    client: "Bam Games",
    project: "Daily Rush",
    role: "Growth & Retention",
    period: "Jan 2026 – Mar 2026",
    image: "/assets/case-studies/daily-rush.png",
    stats: ["1,200+ Players Level 10", "25K+ Users", "₹100K+ Ad Spend"],
    bullets: [
      "Drove rewarded UA via partner communities → 1,200+ players reached Level 10",
      "Managed ₹100K+ ad spend → acquired 25K+ users while maintaining D7 retention KPIs",
    ],
  },
  {
    client: "Billions Quest",
    project: "",
    role: "Playtesting – Closed Beta",
    period: "June 2026 – July 2026",
    image: "/assets/case-studies/billions-quest.jpg",
    stats: ["50+ Players", "2 Cohorts", "7-Day Playtesting Study"],
    bullets: [
      "Recruited and coordinated 50+ players across 2 cohorts for a structured 7-day longitudinal playtesting study.",
      "Designed daily feedback loops covering onboarding, core gameplay, progression, feature experience, bugs and player sentiment.",
      "Translated player feedback into actionable product recommendations, helping the team identify friction points and validate improvements ahead of launch.",
    ],
  },
  {
    client: "Funwave Studio",
    project: "Raftaar Run",
    role: "UA & Retention",
    period: "Jan 2026 – Feb 2026",
    image: "/assets/case-studies/funwave-studios.png",
    stats: [
      "128-Player Tournament",
      "1,600+ Matches",
      "CPA Rev-Share",
      "Positive ROAS",
    ],
    bullets: [
      "For their game Raftaar Run, activated a gaming community to host a 128-player 1v1 tournament, generating 1,600+ matches and significantly boosting player engagement",
      "Onboarded a CPA partner (rev-share model), ensuring positive ROAS while driving 100+ players to actively grind daily over a month",
    ],
  },
  {
    client: "NODWIN Gaming",
    project: "",
    role: "League Operations",
    period: "Aug 2019 – Nov 2019",
    image:
      "/assets/uploads/nodwin_gaming_logo-019d2046-1a5c-702b-b235-1d9b96a72cb9-3.webp",
    stats: ["PMCO", "Dew Arena", "DreamHack LAN"],
    bullets: [
      "Executed tournament operations across PMCO, Dew Arena & DreamHack LAN",
      "Coordinated match flow, player ops, and live event execution",
      "Worked with top PUBG Mobile teams in high-stakes competitive environments",
    ],
  },
];

export function Freelance() {
  const ref = useScrollReveal();

  return (
    <section
      id="freelance"
      className="py-24"
      style={{ background: "oklch(0.10 0.05 295)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="scroll-reveal text-center mb-16"
        >
          <div className="inline-block text-xs font-medium uppercase tracking-widest text-accent mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
            Case Studies
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Growth <span className="text-gradient-purple">Case Studies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Growth systems executed across games and brands through consulting
            and operating roles
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="freelance.list"
        >
          {projects.map((p, i) => (
            <div
              key={`${p.client}-${p.project}`}
              className="rounded-xl flex flex-col group transition-all duration-300 overflow-hidden h-full"
              style={{
                background: "oklch(0.13 0.06 295)",
                border: "1px solid oklch(0.45 0.28 300 / 0.25)",
                transform: "translateY(0)",
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
                  "1px solid oklch(0.45 0.28 300 / 0.25)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
              data-ocid={`freelance.item.${i + 1}`}
            >
              {p.image && (
                <div className="w-full h-44 overflow-hidden relative bg-black/40">
                  <img
                    src={p.image}
                    alt={p.client}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground leading-tight">
                      {p.client}
                    </h3>
                    {p.project && (
                      <div className="font-display font-semibold text-sm text-white/90 mt-0.5">
                        {p.project}
                      </div>
                    )}
                    <div className="text-accent text-xs font-medium mt-1">
                      {p.role}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                    {p.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                    >
                      <span className="text-accent mt-0.5 flex-shrink-0">
                        ✦
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                  {p.stats.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 text-xs rounded-full"
                      style={{
                        background: "oklch(0.45 0.28 300 / 0.2)",
                        border: "1px solid oklch(0.65 0.28 300 / 0.5)",
                        color: "oklch(0.82 0.18 290)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
