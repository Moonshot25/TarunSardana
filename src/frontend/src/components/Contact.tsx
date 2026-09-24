import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Linkedin, Mail } from "lucide-react";

export function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="scroll-reveal text-center mb-12"
        >
          <div className="inline-block text-xs font-medium uppercase tracking-widest text-accent mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/10">
            Get In Touch
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Let's <span className="text-gradient-purple">Work Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Book a 30-minute call to discuss your game's growth strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left: Info */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <a
              href="mailto:Tarun.GamingXP@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl group hover:scale-[1.02] transition-transform"
              style={{
                background: "oklch(0.13 0.06 295)",
                border: "1px solid oklch(0.45 0.28 300 / 0.3)",
              }}
              data-ocid="contact.link"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.45 0.28 300 / 0.2)" }}
              >
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  Tarun.GamingXP@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/tarunsardana25/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl group hover:scale-[1.02] transition-transform"
              style={{
                background: "oklch(0.13 0.06 295)",
                border: "1px solid oklch(0.45 0.28 300 / 0.3)",
              }}
              data-ocid="contact.link"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.45 0.28 300 / 0.2)" }}
              >
                <Linkedin size={18} className="text-accent" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  tarunsardana25
                </div>
              </div>
            </a>
          </div>

          {/* Right: Calendly Embed — compact height */}
          <div className="md:col-span-3">
            <iframe
              src="https://calendly.com/tarun-gamingxp/30min"
              width="100%"
              height="420"
              frameBorder={0}
              title="Book a Call"
              style={{ border: "none", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
