import { useCountUp } from "@/hooks/useCountUp";
import { Gamepad2, Megaphone, TrendingUp, Trophy, Users } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const statsData = [
  {
    icon: Gamepad2,
    value: "25+",
    heading: "Games Scaled",
    description: "Worked across mobile, web & PC titles globally",
    bgImage: "/assets/impact/impact-games-scaled.jpg",
    delay: 0,
  },
  {
    icon: Users,
    value: "10M+",
    heading: "Players Acquired & Engaged",
    description: "Across UA, live ops & creator-led campaigns",
    bgImage: "/assets/impact/impact-players-acquired.jpg",
    delay: 0.1,
  },
  {
    icon: TrendingUp,
    value: "6+",
    heading: "Years in Growth & Live Ops",
    description: "UA, retention systems & esports ecosystems",
    bgImage: "/assets/impact/impact-years-growth.jpg",
    delay: 0.2,
  },
  {
    icon: Megaphone,
    value: "1000+",
    heading: "Creators Activated",
    description: "Across India, SEA, EU & US markets",
    bgImage: "/assets/impact/impact-creators-activated.jpg",
    delay: 0.3,
  },
];

function StatCard({
  icon: Icon,
  value,
  heading,
  description,
  bgImage,
  delay,
  inView,
}: (typeof statsData)[0] & { inView: boolean }) {
  const display = useCountUp(value, 1800, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="group relative rounded-2xl p-6 flex flex-col justify-between overflow-hidden min-h-[230px] lg:min-h-[250px] transition-all duration-300 hover:scale-[1.02]"
      style={{
        border: "1px solid rgba(182, 32, 245, 0.4)",
        boxShadow:
          "0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(182, 32, 245, 0.14), inset 0 0 15px rgba(182, 32, 245, 0.05)",
      }}
    >
      {/* Background custom artwork: scaled past baked-in border to eliminate misalignment */}
      <img
        src={bgImage}
        alt=""
        className="absolute inset-[-10%] w-[120%] h-[120%] max-w-none object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-105"
        style={{
          filter: "brightness(0.85) contrast(1.1)",
        }}
      />

      {/* Subtle bottom-to-top gradient overlay to ensure text readability without hiding artwork */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(5,6,17,0.86) 0%, rgba(5,6,17,0.42) 50%, rgba(5,6,17,0.12) 100%)",
        }}
      />

      {/* Top row: Icon box */}
      <div className="relative z-10 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center relative"
          style={{
            background: "rgba(182, 32, 245, 0.22)",
            border: "1px solid rgba(182, 32, 245, 0.7)",
            boxShadow: "0 0 16px rgba(182, 32, 245, 0.35)",
          }}
        >
          <Icon size={22} className="text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Metric details */}
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        {/* Bold number */}
        <div
          className="font-display font-extrabold text-3xl lg:text-[34px] leading-tight mb-2 tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          {display}
        </div>

        {/* Heading */}
        <h3
          className="font-display font-bold text-[15px] lg:text-[16px] mb-1.5 leading-snug text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
        >
          {heading}
        </h3>

        {/* Description */}
        <p
          className="text-xs lg:text-[13px] leading-relaxed mb-3 text-[#C5C3D0] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
        >
          {description}
        </p>

        {/* Bottom accent line */}
        <div
          className="w-10 h-[2.5px] rounded-full"
          style={{
            background: "linear-gradient(90deg, #B620F5, rgba(182, 32, 245, 0.1))",
          }}
        />
      </div>
    </motion.div>
  );
}

export function KeyStats() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      id="keystats"
      className="relative py-20 px-6 lg:px-12 overflow-hidden bg-background"
    >
      {/* Ambient background glows matching portfolio theme */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(182, 32, 245, 0.08), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(229, 45, 235, 0.05), transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Section Header matching site-wide typography and visual hierarchy */}
        <div ref={ref} className="text-center mb-12 lg:mb-14">
          <div className="inline-block text-xs font-medium uppercase tracking-widest text-accent mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
            Track Record
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-3">
            Impact at <span className="text-gradient-purple">Scale</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Driving player growth, retention, and competitive ecosystems across
            global gaming titles.
          </p>
        </div>

        {/* Four Main Metric Cards in horizontal row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-5">
          {statsData.map((s) => (
            <StatCard key={s.value} {...s} inView={inView} />
          ))}
        </div>

        {/* Featured Milestone Card (0 → 1M+) with Custom Mountain Background */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative rounded-2xl p-6 lg:p-7 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:scale-[1.01]"
          style={{
            border: "1px solid rgba(182, 32, 245, 0.45)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.6), 0 0 24px rgba(182, 32, 245, 0.16), inset 0 0 15px rgba(182, 32, 245, 0.05)",
          }}
        >
          {/* Custom Mountain Banner Background: scaled past baked-in border to eliminate misalignment */}
          <img
            src="/assets/impact/impact-milestone-fastest.png"
            alt=""
            className="absolute inset-[-8%] w-[116%] h-[116%] max-w-none object-cover object-right pointer-events-none transition-transform duration-500 group-hover:scale-105"
            style={{
              filter: "brightness(0.92) contrast(1.12)",
            }}
          />

          {/* Left-to-right gradient overlay for text readability while letting the mountain summit shine */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(5,6,17,0.92) 0%, rgba(5,6,17,0.7) 42%, rgba(5,6,17,0.08) 85%, transparent 100%)",
            }}
          />

          {/* Left section: Trophy icon + Featured Milestone + 0 -> 1M+ */}
          <div className="relative z-10 flex items-center gap-5 lg:gap-6 flex-shrink-0">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(182, 32, 245, 0.24)",
                border: "1px solid rgba(182, 32, 245, 0.75)",
                boxShadow: "0 0 24px rgba(182, 32, 245, 0.45)",
              }}
            >
              <Trophy size={28} className="text-white" strokeWidth={2} />
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  color: "#E879F9",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Featured Milestone
              </div>
              <div
                className="font-display font-extrabold text-3xl lg:text-4xl tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              >
                0 → 1M+
              </div>
            </div>
          </div>

          {/* Middle vertical divider (desktop only) */}
          <div
            className="relative z-10 hidden md:block w-px h-12 flex-shrink-0"
            style={{ background: "rgba(182, 32, 245, 0.35)" }}
          />

          {/* Middle section: Title & Description */}
          <div className="relative z-10 flex-1 text-center md:text-left">
            <h4
              className="font-display font-bold text-base lg:text-lg mb-1 text-[#E879F9] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            >
              Fastest Scale Achieved
            </h4>
            <p
              className="text-sm text-[#C5C3D0] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            >
              User growth driven within 6 months
            </p>
          </div>

          {/* Right spacer to let the glowing summit artwork shine through */}
          <div className="hidden md:block w-36 lg:w-48 flex-shrink-0 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
