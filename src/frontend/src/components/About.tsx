import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="scroll-reveal grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: image — large, world-spanning */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden w-full"
              style={{
                height: "580px",
                border: "1px solid oklch(0.45 0.28 300 / 0.4)",
                boxShadow: "0 0 60px oklch(0.45 0.28 300 / 0.3)",
              }}
            >
              <img
                src="/assets/uploads/ChatGPT-Image-Mar-23-2026-05_37_50-PM-1.png"
                alt="Gaming community illustration spanning India, Southeast Asia, Europe and USA"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Corner accent */}
            <div
              className="absolute -top-3 -right-3 w-20 h-20 rounded-full"
              style={{
                background: "oklch(0.65 0.28 320 / 0.25)",
                filter: "blur(16px)",
              }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full"
              style={{
                background: "oklch(0.45 0.28 300 / 0.4)",
                filter: "blur(10px)",
              }}
            />
          </div>

          {/* Right: text */}
          <div>
            <div className="inline-block text-xs font-medium uppercase tracking-widest text-accent mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
              About Me
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
              Scaling Games.
              <br />
              <span className="text-gradient-purple">
                Building Communities.
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              With 6+ years in gaming, I help studios acquire players, scale
              communities, and improve retention through creator-led campaigns,
              esports ecosystems, digital marketing, rewarded UA, and
              gamification systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I've pioneered engagement formats such as{" "}
              <span className="text-foreground font-medium">Game Nights</span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                PlayWithCreator activations
              </span>{" "}
              to drive deeper player engagement. I've also developed original
              tournament IPs across global markets and built strong
              relationships with gaming communities and creators across{" "}
              <span className="text-accent">
                India, Southeast Asia, Europe and USA
              </span>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              {["India", "SEA", "Europe", "USA", "Mobile", "PC", "Web3"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-primary/40 text-muted-foreground bg-surface-2"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
