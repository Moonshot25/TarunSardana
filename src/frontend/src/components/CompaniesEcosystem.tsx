import { useScrollReveal } from "@/hooks/useScrollReveal";

import kraftonLogo from "@/assets/ecosystem/krafton.webp";
import supercellLogo from "@/assets/ecosystem/supercell.webp";
import nodwinLogo from "@/assets/ecosystem/nodwin-gaming.webp";
import saudiEsportsLogo from "@/assets/ecosystem/saudi-esports-fed.webp";
import mayhemLogo from "@/assets/ecosystem/mayhem-studios.webp";
import lystoLogo from "@/assets/ecosystem/lysto.webp";

import scarfallLogo from "@/assets/ecosystem/scarfall.png";
import kixLogo from "@/assets/ecosystem/kix.webp";
import dailyRushLogo from "@/assets/ecosystem/daily-rush.webp";
import anichessLogo from "@/assets/ecosystem/anichess.png";
import funwaveLogo from "@/assets/ecosystem/funwave-studios.webp";
import lightfuryLogo from "@/assets/ecosystem/lightfury-games.webp";

import illavathLogo from "@/assets/ecosystem/illavath-games.webp";
import galfiLogo from "@/assets/ecosystem/galfi.webp";
import obitusLogo from "@/assets/ecosystem/obitus.webp";
import thrylLogo from "@/assets/ecosystem/thryl.webp";
import miviLogo from "@/assets/ecosystem/mivi.png";
import rushGgLogo from "@/assets/ecosystem/rush-gg.webp";

interface CompanyLogo {
  name: string;
  logo: string;
}

const row1: CompanyLogo[] = [
  { name: "Krafton", logo: kraftonLogo },
  { name: "Supercell", logo: supercellLogo },
  { name: "NODWIN Gaming", logo: nodwinLogo },
  { name: "Saudi Esports Federation", logo: saudiEsportsLogo },
  { name: "Mayhem Studios", logo: mayhemLogo },
  { name: "Lysto", logo: lystoLogo },
];

const row2: CompanyLogo[] = [
  { name: "ScarFall 2.0", logo: scarfallLogo },
  { name: "Kix", logo: kixLogo },
  { name: "Daily Rush", logo: dailyRushLogo },
  { name: "Anichess", logo: anichessLogo },
  { name: "Funwave Studios", logo: funwaveLogo },
  { name: "Lightfury Games", logo: lightfuryLogo },
];

const row3: CompanyLogo[] = [
  { name: "Illavath Games", logo: illavathLogo },
  { name: "Galfi", logo: galfiLogo },
  { name: "Obitus", logo: obitusLogo },
  { name: "Thryl", logo: thrylLogo },
  { name: "Mivi", logo: miviLogo },
  { name: "Rush.gg", logo: rushGgLogo },
];

interface MarqueeRowProps {
  logos: CompanyLogo[];
  direction: "left" | "right";
  duration: number;
}

function MarqueeRow({ logos, direction, duration }: MarqueeRowProps) {
  // Render 4 sets of the 6 logos so wide screens have zero gap
  const repeated = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden py-1.5 sm:py-2">
      <div
        className="flex w-max gap-4 sm:gap-5"
        style={{
          animationName: direction === "left" ? "rowScrollLeft" : "rowScrollRight",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          willChange: "transform",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = "running";
        }}
      >
        {repeated.map((item, idx) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: cloned elements for infinite seamless CSS scrolling
            key={`${item.name}-${idx}`}
            aria-hidden={idx >= logos.length ? "true" : undefined}
            className="flex-shrink-0 w-[150px] sm:w-[170px] md:w-[185px] h-[74px] sm:h-[80px] rounded-2xl flex items-center justify-center px-4 py-2.5 transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_24px_rgba(182,32,245,0.45)] cursor-pointer group"
            style={{
              background: "rgba(13, 11, 31, 0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(182, 32, 245, 0.28)",
              boxShadow:
                "0 8px 24px rgba(0, 0, 0, 0.4), 0 0 16px rgba(182, 32, 245, 0.08), inset 0 0 12px rgba(182, 32, 245, 0.03)",
            }}
            title={item.name}
          >
            <img
              src={item.logo}
              alt={item.name}
              className="max-h-[42px] sm:max-h-[48px] max-w-[120px] sm:max-w-[135px] w-auto h-auto object-contain transition-all duration-300 group-hover:brightness-110 select-none pointer-events-none"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CompaniesEcosystem() {
  const ref = useScrollReveal();

  return (
    <section
      id="companies-ecosystem"
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, #0c0a20 0%, #050611 100%)",
      }}
    >
      {/* Embedded keyframe styles to guarantee animation execution */}
      <style>{`
        @keyframes rowScrollLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes rowScrollRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>

      {/* Background space / orbital glow effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(182, 32, 245, 0.08), transparent 70%), radial-gradient(ellipse 40% 30% at 80% 20%, rgba(229, 45, 235, 0.04), transparent 60%)",
        }}
      />

      {/* Subtle orbital concentric lines in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div
          className="w-[850px] h-[480px] rounded-[50%] border border-purple-500/30"
          style={{ transform: "rotate(-12deg)" }}
        />
        <div
          className="absolute w-[1100px] h-[620px] rounded-[50%] border border-purple-500/20"
          style={{ transform: "rotate(-12deg)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 mb-12 md:mb-14">
        {/* Section Header with exact copy */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="scroll-reveal text-center"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 text-white">
            Trusted by leading <span className="text-gradient-purple">gaming companies</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            I've had the opportunity to work with teams across the gaming industry.
          </p>
        </div>
      </div>

      {/* Marquee tracks container with gradient edge fades */}
      <div className="relative w-full overflow-hidden flex flex-col gap-3 sm:gap-4">
        {/* Left & Right gradient fades for smooth screen-edge fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #050611, rgba(5, 6, 17, 0))",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 z-20 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #050611, rgba(5, 6, 17, 0))",
          }}
        />

        {/* Row 1: Right to Left (6 logos) */}
        <MarqueeRow logos={row1} direction="left" duration={32} />

        {/* Row 2: Left to Right (6 logos) */}
        <MarqueeRow logos={row2} direction="right" duration={28} />

        {/* Row 3: Right to Left (6 logos) */}
        <MarqueeRow logos={row3} direction="left" duration={35} />
      </div>
    </section>
  );
}
