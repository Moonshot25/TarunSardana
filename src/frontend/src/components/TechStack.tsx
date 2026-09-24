import { useScrollReveal } from "@/hooks/useScrollReveal";

export function TechStack() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="techstack"
      className="py-12"
      style={{ background: "oklch(0.10 0.05 295)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className="scroll-reveal text-center mb-6"
        >
          <div className="inline-block text-xs font-medium uppercase tracking-widest text-accent mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
            Toolkit
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Tools <span className="text-gradient-purple">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto font-medium">
            The platforms and tools powering growth systems across analytics,
            UA, and execution
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/assets/generated/tools-stack-diagram-nobg.png"
            alt="Tools Stack Diagram"
            style={{
              display: "block",
              maxWidth: "min(100%, 600px)",
              width: "100%",
              maxHeight: "60vh",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}
