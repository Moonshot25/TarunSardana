import { useScrollReveal } from "@/hooks/useScrollReveal";

const early = [
  {
    company: "Keywords Studios",
    role: "Game Tester",
    desc: "Worked on Fortnite, Fall Guys, Outriders. Cross-platform QA (PC, Xbox, Mobile, Switch). Recognized for top bug reporting performance.",
  },
  {
    company: "Symbiosis",
    role: "Head of Gaming",
    desc: "Led esports program + events (500+ teams). Represented in national tournaments (CSGO, PUBG).",
  },
  {
    company: "NODWIN Gaming",
    role: "League Ops",
    desc: "Worked on PMCO, DreamHack. Managed match flow + tournament execution.",
  },
];

export function EarlyExperience() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="scroll-reveal text-center mb-10">
          <span className="text-neon-blue text-xs font-semibold tracking-[0.2em] uppercase">
            Foundation
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mt-2">
            Early Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {early.map((item, i) => (
            <div
              key={item.company}
              className="scroll-reveal glass-card rounded-2xl p-6 border border-border hover:border-neon-blue/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-ocid={`early.item.${i + 1}`}
            >
              <div className="font-display font-bold text-sm text-neon-blue mb-0.5">
                {item.company}
              </div>
              <div className="text-foreground text-xs font-semibold mb-3">
                {item.role}
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
