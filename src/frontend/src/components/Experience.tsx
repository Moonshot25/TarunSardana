import { useEffect, useRef, useState } from "react";

const roles = [
  {
    company: "Playrift",
    logo: "/assets/community/playrift-logo.png",
    location: "Remote",
    tags: [
      "GTM Strategy",
      "Retention Systems",
      "Creator Ecosystems",
      "Growth Audits",
      "Community Building",
    ],
    positions: [
      {
        role: "Growth Lead",
        period: "Jan 2026 – Present",
        bullets: [
          "Generated $50K+ in revenue with 30%+ profit margins by delivering 10+ client campaigns over 6 months, driving scalable, performance-led growth solutions for gaming studios",
          "Designed and scaled a Discord-first competitive ecosystem for ScarFall 2.0 (5M+ first-month downloads), leveraging two of India's largest gaming communities to activate 300+ teams through structured scrims, tournaments, and engagement systems that drove 60% Day 7 retention",
          "Drove user acquisition for KiX (a casual PvP gaming app) through creators and communities, onboarding 50K+ users within a month while maintaining Day 1 retention above 30%",
          "Supported the soft launch of Daily Rush (Bam Games), onboarding 1,100+ highly engaged players through rewarded UA partner communities during closed beta and scaling to 30K+ users through ₹200K+ Google Ads spend while maintaining Day 7 retention above 18%",
          "Led community-driven engagement initiatives for Raftaar Run (Funwave Studio), generating 1,600+ matches through a 128-player competitive tournament and onboarding a CPA partner to drive positive-ROAS player acquisition",
          "Recruited and managed 50+ high-value playtesters across upcoming titles including Cricket All Stars (Krafton) and eCricket (LightFury), generating structured gameplay feedback to support onboarding, engagement, and retention optimization while consulting for Lysto",
        ],
      },
    ],
  },
  {
    company: "Glazer Games",
    logo: "/assets/company-logos/glazer-games.jpg",
    location: "Surat, India · Remote",
    tags: [
      "20k → 500k in 3 months",
      "75k DAU",
      "10+ Avg Session Time",
      "Growth Launchpad",
    ],
    positions: [
      {
        role: "Growth & Strategy Lead",
        period: "Jul 2025 – Dec 2025",
        bullets: [
          "Scaled the THRYL app to 500K users within 3 months, achieving 75K+ DAU and 10+ min avg session time through esports tournaments, leaderboard systems, and casual game loops",
          "Experimented with incentivized UA models (CPE / reward-based funnels), optimizing conversion flows and evaluating engagement quality across channels",
          "Launched a new revenue vertical, 'Growth Launchpad,' supporting early-stage games with GTM strategy, influencer marketing, and creator-led growth, converting 3 clients within the first month",
          "Strengthened in-app monetization by securing discounted gaming gift cards (Google Play, Steam, Amazon), enhancing the redemption catalog and improving player LTV",
        ],
      },
    ],
  },
  {
    company: "Lysto",
    logo: "/assets/company-logos/lysto.webp",
    location: "Bengaluru, India · Remote",
    period: "Jul 2023 – Jul 2025",
    tags: [
      "0 → 1M+ users",
      "$100k+ revenue",
      "15+ UA Campaigns",
      "37% margins",
      "20+ playtests",
    ],
    positions: [
      {
        role: "Growth Lead – UA, Insights & Monetization",
        period: "Sep 2024 – Jul 2025",
        bullets: [
          "Led growth across acquisition, playtesting, and monetization, translating player insights into product and growth decisions",
          "Delivered 15+ UA and engagement campaigns for early-stage games (Overknights, Anichess, Boinkers, UGW, SimDunk), generating $100K+ revenue within 6 months at ~37% margins",
          "Built a new incentivized UA channel, onboarding offerwall partners (TyrAds, AppsPrize, AyetStudios), driving 100K+ new users and improving existing user retention by 2x",
          "Led end-to-end playtesting analytics and B2B campaigns (Krafton, MPL), executing 20+ structured playtests to improve FTUE, onboarding, and early retention",
          "Delivered post-campaign and playtest reports, identifying drop-offs, behavioral patterns, and optimization opportunities",
        ],
      },
      {
        role: "Growth Manager – Gaming & Esports",
        period: "Jul 2023 – Sep 2024",
        note: "0 → 1M Users | Community-led & Creator-driven Growth",
        bullets: [
          "Scaled Lysto from 0 to 1M users within one year through creator-led acquisition and community-driven engagement systems",
          "Built and scaled a creator-led UA engine, onboarding 50+ creators to drive low-CPI acquisition via PlayWithCreator activations",
          "Built and executed Discord-led engagement systems (live events, scrims, creator interactions), driving a 65% lift in Day 7 retention",
          "Operated esports tournaments across 5+ titles and scaled recurring game nights via 20+ partnered Discord communities, increasing repeat participation",
          "Supported product strategy with gamification systems (level progression, game cards, team cards, digital trophies) to improve engagement and LTV",
        ],
      },
    ],
  },
  {
    company: "RUSH.GG",
    logo: "/assets/company-logos/rush-gg.jpg",
    location: "Zug, Switzerland · Remote",
    period: "Apr 2022 – Jul 2023",
    tags: [
      "$40k Saudi Esports Federation",
      "12k+ players",
      "$50k Supercell partnership",
      "30% Active users MoM",
      "CAC Reduced by 60%",
    ],
    positions: [
      {
        role: "Esports Lead – India",
        period: "Feb 2023 – Jul 2023",
        bullets: [
          "Led regional execution of Gamers Without Borders (Saudi Esports Federation) with a $40K budget, driving 12K+ registrations across 5 titles",
          "Partnered with Supercell for the Clash of Clans World Championship ($50K prize pool), leading marketing and tournament ops across India & South Asia, onboarding 500+ teams",
          "Hosted India's largest Pokémon Unite tournament (130+ teams), featuring 10+ creators and SEA pro teams, and launched a year-long tournament IP to drive sustained engagement",
        ],
      },
      {
        role: "Esports Project Manager",
        period: "Apr 2022 – Jun 2023",
        bullets: [
          "Owned end-to-end competitive player experience across India & SEA, optimizing game discovery, match flow, and leaderboard UX",
          "Partnered with product and engineering to improve progression systems, increasing active users by 30% MoM",
          "Designed and implemented gamification systems (badges, rankings, referral flows) to improve retention",
          "Onboarded 30+ tournament organizers, reducing CAC by 60% and scaling tournament supply",
        ],
      },
    ],
  },
  {
    company: "GMNG",
    logo: "/assets/company-logos/gmng.jpg",
    location: "Gurugram, India",
    period: "Sep 2021 – Apr 2022",
    tags: [
      "300% Business growth",
      "200K+ users Referral",
      "GTM for In House Games",
      "18k → 700k users in 6 months",
      "20+ Tournament partners",
    ],
    positions: [
      {
        role: "User Acquisition Lead",
        period: "Jan 2022 – Apr 2022",
        bullets: [
          "Contributed to 300% MoM business growth through performance-driven campaigns and creator partnerships",
          "Built a referral-led acquisition engine, driving 200K+ users within 2 months by activating 100+ esports and RMG creators",
          "Executed GTM campaigns for in-house titles (Mini Ludo, Carrom, Archery, Trivia)",
          "Designed a self-sustaining tournament model, gating entry via brand-led CPI tasks to enable scalable monetization",
        ],
      },
      {
        role: "Esports Operations Lead",
        period: "Sep 2021 – Jan 2022",
        bullets: [
          "Scaled platform from 18K to 700K users within 6 months through tournament-led growth and creator expansion",
          "Onboarded 20+ organizers and creators, increasing tournament supply",
          "Led tournament roadmap and league operations, managing a team of 6+ admins",
        ],
      },
    ],
  },
  {
    company: "Keywords Studios",
    logo: "/assets/company-logos/keywords-studios.jpg",
    location: "Dublin, Ireland · Remote",
    tags: ["AAA Games", "Cross Platform Testing", "JIRA"],
    positions: [
      {
        role: "Game Tester",
        period: "Oct 2020 – Sep 2021",
        bullets: [
          "Contributed to testing and QA for major titles including Fortnite, Fall Guys, Outriders, and Zombie Army 3",
          "Performed cross-platform testing across PC and PS4 ensuring gameplay stability and consistency",
          "Executed and validated test cases, including destructive testing, to identify edge-case issues and system vulnerabilities",
          "Logged and tracked bugs using JIRA, improving gameplay stability, UX, and overall product quality",
          "Recognized for highest bug reporting for two consecutive months",
        ],
      },
    ],
  },
];

function TimelineItem({
  item,
  index,
}: { item: (typeof roles)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;
    if (visible) line.classList.add("lit");
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 md:gap-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 0.08}s` }}
      data-ocid={`experience.item.${index + 1}`}
    >
      <div className="flex flex-col items-center pt-1">
        <div
          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 timeline-node-pulse ${
            visible
              ? "border-accent bg-accent/30"
              : "border-border bg-surface-2"
          }`}
          style={{ transition: "border-color 0.5s, background 0.5s" }}
        />
        {index < roles.length - 1 && (
          <div
            ref={lineRef}
            className="timeline-line-glow w-0.5 flex-1 mt-1"
            style={{ background: "oklch(0.22 0.06 290)", minHeight: "60px" }}
          />
        )}
      </div>

      <div
        className="flex-1 pb-10 rounded-xl p-5 mb-2"
        style={{
          background: visible ? "oklch(0.13 0.06 295 / 0.8)" : "transparent",
          border: visible
            ? "1px solid oklch(0.45 0.28 300 / 0.25)"
            : "1px solid transparent",
          transition: "background 0.6s, border 0.6s",
        }}
      >
        <div
          className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3"
          style={{ borderBottom: "1px solid oklch(0.45 0.28 300 / 0.2)" }}
        >
          <div className="flex items-center gap-3">
            {item.logo && (
              <img
                src={item.logo}
                alt={item.company}
                className="w-9 h-9 rounded-lg object-contain"
                style={{ background: "oklch(0.18 0.06 295)", padding: "4px" }}
              />
            )}
            <div className="text-accent font-bold text-lg font-display">
              {item.company}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground/60">
              {item.location}
            </div>
          </div>
        </div>

        {/* Positions/bullets */}
        <div className="space-y-6">
          {item.positions.map((pos, pi) => (
            <div
              key={pos.role}
              className={pi > 0 ? "pt-5" : ""}
              style={
                pi > 0
                  ? { borderTop: "1px dashed oklch(0.45 0.28 300 / 0.2)" }
                  : {}
              }
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-display font-bold text-base text-foreground">
                  {pos.role}
                </h3>
                <div className="text-xs text-muted-foreground">
                  {pos.period}
                </div>
              </div>
              {"note" in pos && pos.note && (
                <div
                  className="text-xs font-semibold mb-2 px-2 py-1 rounded inline-block"
                  style={{
                    background: "oklch(0.45 0.28 300 / 0.15)",
                    color: "oklch(0.75 0.15 290)",
                  }}
                >
                  {pos.note}
                </div>
              )}
              <ul className="space-y-1.5 mt-2">
                {pos.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-sm text-muted-foreground flex gap-2"
                  >
                    <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key tags — below positions */}
        {item.tags && item.tags.length > 0 && (
          <div
            className="flex flex-wrap gap-1.5 mt-5 pt-4"
            style={{ borderTop: "1px solid oklch(0.45 0.28 300 / 0.2)" }}
          >
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full"
                style={{
                  background: "oklch(0.45 0.28 300 / 0.2)",
                  border: "1px solid oklch(0.65 0.28 300 / 0.5)",
                  color: "oklch(0.82 0.18 290)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-medium uppercase tracking-widest text-accent mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
            Career
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Work <span className="text-gradient-purple">Experience</span>
          </h2>
        </div>
        <div>
          {roles.map((r, i) => (
            <TimelineItem key={r.company} item={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
