import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";

interface ServiceItem {
  title: string;
  oneLiner: string;
  image: string;
  details: string[];
}

interface ServiceCategory {
  number: string;
  heading: string;
  services: [ServiceItem, ServiceItem];
}

const categories: ServiceCategory[] = [
  {
    number: "01",
    heading: "Launch & GTM",
    services: [
      {
        title: "Game Wishlisting & Pre-Launch Campaigns",
        oneLiner: "Drive 100K+ wishlists before launch.",
        image: "/assets/generated/service-wishlisting-v3.jpg",
        details: [
          "Drive 100K+ wishlists before launch through targeted creator campaigns",
          "Build launch hype via community activations, giveaways, and exclusive early access",
          "Coordinate Discord & Reddit communities to generate organic buzz",
          "Run wishlist-focused paid campaigns on Steam and social platforms",
          "Campaigns and tactics that build launch momentum and Day-1 player volume",
        ],
      },
      {
        title: "Game Launch GTM Strategy",
        oneLiner: "Launch games that retain beyond Day 7.",
        image: "/assets/generated/service-launch-v2.dim_600x800.jpg",
        details: [
          "Execute alpha/beta tests using creators, streams, and communities",
          "Launch games that retain beyond Day 7 with structured onboarding funnels",
          "Helped scale 0 → 1M players across multiple game launches",
          "Define KPIs for beta (DAU, session length, churn) and optimize accordingly",
          "Coordinate simultaneous creator coverage to maximize launch-week visibility",
        ],
      },
    ],
  },
  {
    number: "02",
    heading: "Player Acquisition",
    services: [
      {
        title: "User Acquisition",
        oneLiner: "Scale CPI-efficient players, not installs.",
        image: "/assets/uploads/user-acquisition-2.png",
        details: [
          "Drive player growth through creator and community-led CPI/CPA campaigns",
          "Ensure users not only install the game but also engage through early gameplay (first matches & sessions)",
          "Scale 0 → 1M+ users",
          "Focus on quality installs — targeting high-LTV player profiles",
          "Track, report, and optimize across AppsFlyer, Branch, and Mixpanel",
        ],
      },
      {
        title: "Influencer Marketing & Global Activations",
        oneLiner: "Launch creator-led growth loops.",
        image: "/assets/generated/service-influencer.dim_600x800.jpg",
        details: [
          "Leverage 1000+ gaming creators for CPI/CPA campaigns globally",
          "Activate across India, SEA, Europe & USA with localized creator strategies",
          "Track creator performance down to D1/D7 retention & in-game action milestones",
          "Long-term creator partnerships with tiered commission and revenue-share models",
          "Scale branded community tournaments hosted by top creators",
        ],
      },
    ],
  },
  {
    number: "03",
    heading: "Retention & Engagement",
    services: [
      {
        title: "Grassroots Esports Development",
        oneLiner: "Grow core player communities.",
        image: "/assets/generated/service-esports-dev.dim_600x800.jpg",
        details: [
          "Custom scrim frameworks and tournament systems for competitive titles",
          "Engage 100+ teams per month through structured community leagues",
          "Leaderboard, ranking, and bracket automation via Discord bots",
          "Convert competitive players into passionate game evangelists",
          "Integrate live ops events with esports calendar to drive peak concurrency",
        ],
      },
      {
        title: "Live Ops & Player Retention Systems",
        oneLiner: "Improve D7/D14/D30 retention metrics.",
        image: "/assets/generated/service-retention-new.dim_600x800.jpg",
        details: [
          "Seasonal events and live ops calendar",
          "Push/notification and re-engagement campaigns",
          "Reward systems and loyalty loops",
          "Churn analysis and win-back flows",
        ],
      },
    ],
  },
  {
    number: "04",
    heading: "Player Insights & Optimization",
    services: [
      {
        title: "Playtesting, Stress Testing and Player Insights",
        oneLiner: "Convert feedback into optimization.",
        image: "/assets/generated/service-playtesting.dim_600x800.jpg",
        details: [
          "FTUE-focused playtests to identify onboarding friction points",
          "Translate player insights into actionable product improvements",
          "Pre-launch scrims and player insights for competitive titles",
          "Segment feedback by player archetype (casual, competitive, streamer)",
          "Deliver structured playtest reports with prioritized fixes",
        ],
      },
      {
        title: "Rewarded UA & Performance Marketing",
        oneLiner: "Maximize revenue per dollar spent.",
        image: "/assets/generated/service-rewarded-new.dim_600x800.jpg",
        details: [
          "Run high-performance digital campaigns across Google Ads, Unity Ads, and AppLovin",
          "Target genre-specific audiences by geo to drive high CTR and conversion rates",
          "Execute rewarded UA campaigns through offerwall partners: PubScale, AyetStudios, Torox, and RevU",
          "Optimize for ROAS, retention, and user quality — not just installs",
          "Test and scale incentivized funnels to identify high-performing acquisition channels",
        ],
      },
    ],
  },
];

function FlipServiceCard({
  service,
  index,
  isFlipped,
  onToggle,
  onReset,
}: {
  service: ServiceItem;
  index: number;
  isFlipped: boolean;
  onToggle: () => void;
  onReset: () => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      className={`flip-card h-[290px] w-full cursor-pointer select-none ${
        isFlipped ? "flipped" : ""
      }`}
      onClick={onToggle}
      onMouseLeave={onReset}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isFlipped}
      aria-label={`${service.title} - ${
        isFlipped ? "Flipped, showing details" : "Hover or tap to view details"
      }`}
      data-ocid={`services.item.${index + 1}`}
    >
      <div className="flip-card-inner h-full w-full">
        {/* ── Front Side ── */}
        <div
          className="flip-card-front rounded-2xl relative"
          style={{
            border: "1px solid rgba(182, 32, 245, 0.4)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(182, 32, 245, 0.12)",
            background: "#08091A",
          }}
        >
          {/* Card Artwork Image */}
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl transition-transform duration-700 hover:scale-105"
            style={{
              filter: "brightness(0.9) contrast(1.08)",
            }}
          />

          {/* Dark bottom gradient overlay for clear text readability */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background:
                "linear-gradient(to top, rgba(5,6,17,0.95) 0%, rgba(5,6,17,0.7) 40%, rgba(5,6,17,0.15) 75%, transparent 100%)",
            }}
          />

          {/* Text Container on Front */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <h4 className="font-display font-bold text-white text-[15px] leading-snug mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {service.title}
            </h4>
            <p className="text-xs leading-relaxed text-[#C5C3D0] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              {service.oneLiner}
            </p>
          </div>
        </div>

        {/* ── Reverse / Back Side ── */}
        <div
          className="flip-card-back p-5 flex flex-col justify-between rounded-2xl"
          style={{
            background:
              "linear-gradient(145deg, oklch(0.15 0.08 295), oklch(0.10 0.05 295))",
            border: "1px solid rgba(182, 32, 245, 0.65)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.7), 0 0 24px rgba(182, 32, 245, 0.25), inset 0 0 15px rgba(182, 32, 245, 0.06)",
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "#B620F5", boxShadow: "0 0 8px #B620F5" }}
              />
              <h4 className="font-display font-bold text-white text-sm leading-tight line-clamp-1">
                {service.title}
              </h4>
            </div>

            <div
              className="w-10 h-0.5 rounded-full mb-3"
              style={{ background: "#C026D3" }}
            />

            <ul className="space-y-2 overflow-y-auto max-h-[175px] pr-1">
              {service.details.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2 text-xs leading-relaxed text-[#C5C3D0]"
                >
                  <span className="text-[#C026D3] mt-0.5 shrink-0 text-[10px]">
                    ✦
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 text-[11px] text-[#A09EB5] text-right font-mono uppercase tracking-wider">
            Tap to flip back ↺
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const titleRef = useScrollReveal();
  const [activeCardKey, setActiveCardKey] = useState<string | null>(null);

  useEffect(() => {
    if (!activeCardKey) return;

    const handleOutsidePointer = (e: PointerEvent | MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest(".flip-card")) {
        setActiveCardKey(null);
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointer);
    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
    };
  }, [activeCardKey]);

  const handleToggleCard = (cardKey: string) => {
    setActiveCardKey((prev) => (prev === cardKey ? null : cardKey));
  };

  return (
    <section
      id="services"
      className="py-24 clip-diagonal relative overflow-hidden"
      style={{ background: "oklch(0.10 0.05 295)" }}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 20% 30%, rgba(182, 32, 245, 0.06), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(229, 45, 235, 0.05), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="scroll-reveal text-center mb-16"
        >
          <div className="inline-block text-xs font-medium uppercase tracking-widest text-accent mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
            What I Do
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Services & <span className="text-gradient-purple">Expertise</span>
          </h2>
          <p className="text-white/60 text-sm mt-3">
            Hover or tap any card to view detailed deliverables
          </p>
        </div>

        {/* 2 Rows x 2 Columns Grid of Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12" data-ocid="services.list">
          {categories.map((cat, catIdx) => (
            <div
              key={cat.number}
              className="flex flex-col gap-4 p-5 lg:p-6 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(13, 11, 31, 0.45)",
                border: "1px solid rgba(182, 32, 245, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Category Heading & Visual Connector */}
              <div className="flex flex-col gap-2 pb-2">
                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "#C026D3",
                    }}
                  >
                    {cat.number}
                  </span>
                  <span className="text-white/30 text-xs">/</span>
                  <h3 className="font-display font-bold text-xl text-white tracking-tight">
                    {cat.heading}
                  </h3>
                </div>

                {/* Subtle visual connector line */}
                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(192, 38, 211, 0.6) 0%, rgba(182, 32, 245, 0.25) 50%, transparent 100%)",
                  }}
                />
              </div>

              {/* Two Service Cards grouped under this category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.services.map((service, serviceIdx) => {
                  const cardKey = `${cat.number}-${serviceIdx}`;
                  return (
                    <FlipServiceCard
                      key={service.title}
                      service={service}
                      index={catIdx * 2 + serviceIdx}
                      isFlipped={activeCardKey === cardKey}
                      onToggle={() => handleToggleCard(cardKey)}
                      onReset={() => setActiveCardKey(null)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
