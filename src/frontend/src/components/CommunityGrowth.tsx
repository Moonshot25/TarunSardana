import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCallback, useEffect, useRef, useState } from "react";

const carouselImages = [
  {
    src: "/assets/community/play-with-creators-1.png",
    alt: "Play with Creators – Session 1",
  },
  {
    src: "/assets/community/play-with-creators-2.png",
    alt: "Play with Creators – Session 2",
  },
  {
    src: "/assets/community/play-with-creators-3.png",
    alt: "Play with Creators – Session 3",
  },
];

function ImageCarousel() {
  const [active, setActive] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement;
    if (child)
      container.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    setActive(index);
  }, []);

  const advance = useCallback(() => {
    if (userInteracted) return;
    setActive((prev) => {
      const next = (prev + 1) % carouselImages.length;
      scrollTo(next);
      return next;
    });
  }, [userInteracted, scrollTo]);

  useEffect(() => {
    if (userInteracted) return;
    timerRef.current = setTimeout(advance, 3500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [userInteracted, advance]);

  const handleScroll = () => {
    setUserInteracted(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    const container = scrollRef.current;
    if (!container) return;
    const idx = Math.round(container.scrollLeft / container.offsetWidth);
    setActive(Math.max(0, Math.min(idx, carouselImages.length - 1)));
    timerRef.current = setTimeout(() => setUserInteracted(false), 5000);
  };

  return (
    <div className="relative select-none">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onTouchStart={() => {
          setUserInteracted(true);
          if (timerRef.current) clearTimeout(timerRef.current);
        }}
        className="flex overflow-x-auto"
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {carouselImages.map((img, i) => (
          <div
            key={img.src}
            className="flex-shrink-0 w-full overflow-hidden"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto block"
              style={{
                objectFit: "contain",
                maxHeight: "210px",
                border:
                  i === active
                    ? "1.5px solid oklch(0.65 0.28 300 / 0.7)"
                    : "1.5px solid oklch(0.45 0.28 300 / 0.2)",
                boxShadow:
                  i === active
                    ? "0 0 20px oklch(0.55 0.28 300 / 0.25)"
                    : "none",
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div
        className="absolute right-0 top-0 bottom-0 w-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, oklch(0.13 0.07 300 / 0.85), transparent)",
        }}
      />
      <div className="flex justify-center gap-2 mt-2.5">
        {carouselImages.map((img2, i) => (
          <button
            type="button"
            key={img2.src}
            onClick={() => {
              setUserInteracted(true);
              scrollTo(i);
            }}
            aria-label={`Go to image ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? 20 : 7,
              height: 7,
              background:
                i === active
                  ? "oklch(0.65 0.28 300)"
                  : "oklch(0.45 0.15 300 / 0.5)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function KeyInsight({ text }: { text: string }) {
  return (
    <div
      className="rounded-xl px-4 py-3 h-full"
      style={{
        background: "oklch(0.65 0.28 300 / 0.08)",
        border: "1px solid oklch(0.65 0.28 300 / 0.30)",
        borderLeft: "3px solid oklch(0.65 0.28 300 / 0.7)",
      }}
    >
      <p
        className="text-sm leading-relaxed italic"
        style={{ color: "oklch(0.80 0.12 300)" }}
      >
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
}

function MetricBox({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="rounded-xl p-3 flex flex-col items-center justify-center gap-1 relative overflow-hidden group"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.14 0.08 295 / 0.8), oklch(0.11 0.05 290 / 0.6))",
        border: "1px solid oklch(0.55 0.28 295 / 0.35)",
        boxShadow: "inset 0 1px 0 oklch(0.75 0.20 295 / 0.08)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.55 0.28 295 / 0.12), transparent 70%)",
        }}
      />
      <div
        className="font-display font-bold text-xl leading-none text-center relative z-10"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.88 0.26 290), oklch(0.75 0.30 300))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {value}
      </div>
      <div
        className="text-xs font-medium leading-tight text-center relative z-10"
        style={{ color: "oklch(0.68 0.08 285)" }}
      >
        {label}
      </div>
    </div>
  );
}

function ImpactLabel() {
  return (
    <div className="mb-2 text-center">
      <span
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: "oklch(0.65 0.28 300)" }}
      >
        Impact
      </span>
    </div>
  );
}

function MetricRow({ items }: { items: [string, string][] }) {
  const filtered = items.filter(([v]) => v !== "");
  return (
    <div>
      <ImpactLabel />
      <div className="grid grid-cols-2 gap-3">
        {filtered.map(([val, lbl]) => (
          <MetricBox key={lbl} value={val} label={lbl} />
        ))}
      </div>
    </div>
  );
}

const cardBase = {
  background:
    "linear-gradient(145deg, oklch(0.13 0.07 300 / 0.90), oklch(0.11 0.055 295 / 0.95))",
  border: "1px solid oklch(0.45 0.28 300 / 0.30)",
  boxShadow: "0 4px 28px oklch(0.45 0.28 300 / 0.07)",
  backdropFilter: "blur(14px)",
} as React.CSSProperties;

const cardHoverEnter = (el: HTMLDivElement) => {
  el.style.transform = "translateY(-6px)";
  el.style.border = "1px solid oklch(0.65 0.28 300 / 0.55)";
  el.style.boxShadow = "0 10px 40px oklch(0.55 0.28 300 / 0.22)";
};
const cardHoverLeave = (el: HTMLDivElement) => {
  el.style.transform = "translateY(0)";
  el.style.border = "1px solid oklch(0.45 0.28 300 / 0.30)";
  el.style.boxShadow = "0 4px 28px oklch(0.45 0.28 300 / 0.07)";
};

export function CommunityGrowth() {
  const ref = useScrollReveal();

  return (
    <section
      id="community"
      className="py-24 relative overflow-hidden"
      style={{ background: "oklch(0.09 0.05 295)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, oklch(0.45 0.28 300 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="scroll-reveal text-center mb-14"
        >
          <div
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{
              border: "1px solid oklch(0.65 0.28 300 / 0.4)",
              background: "oklch(0.65 0.28 300 / 0.08)",
              color: "oklch(0.75 0.20 310)",
            }}
          >
            Growth Systems
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Player Growth &amp;{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.72 0.28 300), oklch(0.72 0.28 340))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Retention Systems
            </span>
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
            style={{ color: "oklch(0.72 0.05 280 / 0.75)" }}
          >
            Community-led growth loops and creator-driven acquisition strategies
            across PC and mobile games.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6" data-ocid="community.list">
          {/* Row 1: Cards 1 & 2 side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* CARD 1 – Game Nights */}
            <div
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
              style={cardBase}
              onMouseEnter={(e) =>
                cardHoverEnter(e.currentTarget as HTMLDivElement)
              }
              onMouseLeave={(e) =>
                cardHoverLeave(e.currentTarget as HTMLDivElement)
              }
              data-ocid="community.item.1"
            >
              <div
                className="w-full flex items-center justify-center"
                style={{
                  background: "oklch(0.08 0.04 295)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/assets/community/game-nights.png"
                  alt="Game Nights"
                  className="w-full h-auto object-contain block"
                />
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div>
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "oklch(0.65 0.28 300)" }}
                  >
                    Community-Driven Retention Engine
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Game Nights
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed font-medium"
                  style={{ color: "oklch(0.72 0.05 280)" }}
                >
                  Designed and scaled Discord-based live ops events to drive
                  player re-engagement, session frequency, and community
                  stickiness through creator-led game nights.
                </p>
                <p
                  className="text-xs leading-relaxed font-bold"
                  style={{ color: "oklch(0.75 0.15 300)" }}
                >
                  Community → Live Event → Social Engagement → Re-engagement
                </p>
                <MetricRow
                  items={[
                    ["5+", "Creator Collaborations"],
                    ["200+", "Active Participants"],
                    ["5,000+", "Cross-Platform Reach"],
                    ["2+ hrs", "Avg Session Duration"],
                  ]}
                />
                <KeyInsight text="Semi-competitive formats drive higher repeat participation and deeper engagement compared to casual sessions." />
              </div>
            </div>

            {/* CARD 2 – Wishlisting Campaigns */}
            <div
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
              style={cardBase}
              onMouseEnter={(e) =>
                cardHoverEnter(e.currentTarget as HTMLDivElement)
              }
              onMouseLeave={(e) =>
                cardHoverLeave(e.currentTarget as HTMLDivElement)
              }
              data-ocid="community.item.2"
            >
              <div
                className="w-full flex items-center justify-center"
                style={{
                  background: "oklch(0.08 0.04 295)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/assets/community/wishlisting-campaigns.png"
                  alt="Wishlisting Campaigns"
                  className="w-full h-auto object-contain block"
                />
              </div>
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div>
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "oklch(0.65 0.28 300)" }}
                  >
                    Pre-Launch Acquisition Funnel
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Wishlisting Campaigns
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed font-medium"
                  style={{ color: "oklch(0.72 0.05 280)" }}
                >
                  Built and executed creator-led acquisition funnels for PC game
                  launches across Steam and Epic Games, focusing on high-intent
                  user acquisition and cost efficiency.
                </p>
                <p
                  className="text-xs leading-relaxed font-bold"
                  style={{ color: "oklch(0.75 0.15 300)" }}
                >
                  Creator Content → Community Push → Wishlist Conversion
                </p>
                <MetricRow
                  items={[
                    ["5", "Games Scaled"],
                    ["100K+", "Users / Month"],
                    ["India + SEA", "Focus Region"],
                    ["$0.25–$0.40", "Cost per Wishlist"],
                  ]}
                />
                <KeyInsight text="Creator-led distribution combined with community activation drives significantly higher intent than paid-only acquisition." />
              </div>
            </div>
          </div>

          {/* CARD 3 – Play with Creators (horizontal) */}
          <div
            className="rounded-2xl overflow-hidden transition-all duration-300"
            style={cardBase}
            onMouseEnter={(e) =>
              cardHoverEnter(e.currentTarget as HTMLDivElement)
            }
            onMouseLeave={(e) =>
              cardHoverLeave(e.currentTarget as HTMLDivElement)
            }
            data-ocid="community.item.3"
          >
            <div className="flex flex-col md:flex-row">
              {/* LEFT: carousel + key insight below — fills full height */}
              <div
                className="md:w-[42%] flex-shrink-0 flex flex-col"
                style={{ borderRight: "1px solid oklch(0.45 0.28 300 / 0.2)" }}
              >
                <ImageCarousel />
                {/* Key insight sits flush below the images, no gap */}
                <div
                  className="flex-1 p-4"
                  style={{ borderTop: "1px solid oklch(0.45 0.28 300 / 0.15)" }}
                >
                  <KeyInsight text="Direct interaction with creators significantly increases player conversion and session engagement." />
                </div>
              </div>

              {/* RIGHT: title, description, flow, impact */}
              <div className="md:w-[58%] p-5 flex flex-col gap-4 justify-between">
                <div>
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "oklch(0.65 0.28 300)" }}
                  >
                    Acquisition &amp; Engagement
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Play with Creators
                  </h3>
                </div>

                <p
                  className="text-sm leading-relaxed font-medium"
                  style={{ color: "oklch(0.72 0.05 280)" }}
                >
                  Executed &ldquo;Play with Creators&rdquo; experiences to
                  bridge content consumption with gameplay
                  participation—enabling players to directly engage with
                  creators inside the game environment.
                </p>

                <p
                  className="text-xs leading-relaxed font-bold"
                  style={{ color: "oklch(0.75 0.15 300)" }}
                >
                  Creator Influence → Player Participation → Social
                  Amplification
                </p>

                <div>
                  <ImpactLabel />
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <MetricBox value="60+" label="Creator Sessions Hosted" />
                    <MetricBox value="100K+" label="Players Engaged" />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-1/2">
                      <MetricBox value="75%" label="Participation Rate" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
