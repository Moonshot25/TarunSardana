import { useEffect, useRef } from "react";

/* ── Particle field — subtle ambient gaming particles ── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 24 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0.6 + Math.random() * 0.6,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: 0.15 + Math.random() * 0.25,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(182, 32, 245, ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.65 }}
    />
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#050611", paddingTop: "80px" }}
    >
      <ParticleField />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#343044 1px, transparent 1px), linear-gradient(90deg, #343044 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.05,
        }}
      />

      {/* Ambient background glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "65%",
          height: "75%",
          top: "10%",
          right: "0%",
          background:
            "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(182, 32, 245, 0.12), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "45%",
          height: "50%",
          bottom: "5%",
          left: "5%",
          background:
            "radial-gradient(ellipse at center, rgba(229, 45, 235, 0.05), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Main two-column layout ── */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 w-full py-8 lg:py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-100px)] gap-10 lg:gap-8 xl:gap-14">

          {/* ══════ Left column: Content ══════ */}
          <div className="w-full lg:w-[47%] xl:w-[45%] lg:max-w-[560px] text-center lg:text-left z-10 py-6 lg:py-12 flex flex-col justify-center flex-shrink-0">

            {/* Personal Identity Block */}
            <div className="mb-4 lg:mb-6 animate-fade-up" style={{ animationDelay: "0s" }}>
              <div
                className="font-display font-extrabold text-2xl lg:text-[26px] text-white tracking-tight mb-1.5"
                style={{
                  fontFamily: "'Space Grotesk', 'Bricolage Grotesque', sans-serif",
                }}
              >
                Tarun Sardana
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#B620F5", boxShadow: "0 0 10px #B620F5" }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    color: "#E879F9",
                    textTransform: "uppercase",
                  }}
                >
                  Gaming Growth &amp; GTM
                </span>
              </div>
            </div>

            {/* Mobile-only Hero Image (inserted between identity label and headline) */}
            <div
              className="block lg:hidden relative my-4 sm:my-5 w-full animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              {/* Ambient behind-artwork purple glow */}
              <div
                className="absolute inset-0 pointer-events-none flex items-center justify-center"
                style={{ zIndex: 0 }}
              >
                <div
                  className="w-[85%] h-[85%] rounded-full"
                  style={{
                    background:
                      "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(182, 32, 245, 0.28), transparent 70%)",
                    filter: "blur(28px)",
                  }}
                />
              </div>
              <div className="relative z-10 w-full flex justify-center">
                <img
                  src="/assets/uploads/hero-collage.jpg"
                  alt="Tarun Sardana — Gaming Growth Lead"
                  className="w-full max-w-[270px] sm:max-w-[320px] max-h-[220px] sm:max-h-[250px] h-auto object-contain pointer-events-none"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse 92% 90% at 50% 50%, black 60%, transparent 98%)",
                    maskImage:
                      "radial-gradient(ellipse 92% 90% at 50% 50%, black 60%, transparent 98%)",
                  }}
                />
              </div>
            </div>

            {/* Tagline / Headline — 50% scale for comfortable column fit */}
            <h1
              className="mb-6 animate-fade-up"
              style={{
                animationDelay: "0.1s",
                fontFamily: "'Space Grotesk', 'Bricolage Grotesque', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.4rem, 2.1vw, 2.25rem)",
                lineHeight: 1.25,
                color: "#F5F4FA",
                letterSpacing: "-0.015em",
              }}
            >
              <span className="block lg:whitespace-nowrap">
                Getting{" "}
                <span
                  style={{
                    fontFamily: "'DM Serif Display', 'Georgia', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#C026D3",
                    fontSize: "1.1em",
                    marginRight: "0.1em",
                  }}
                >
                  players
                </span>{" "}
                is growth.
              </span>
              <span className="block lg:whitespace-nowrap">
                Keeping them is the{" "}
                <span
                  style={{
                    fontFamily: "'DM Serif Display', 'Georgia', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "#C026D3",
                    fontSize: "1.1em",
                  }}
                >
                  game
                </span>
                .
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p
              className="mb-8 animate-fade-up max-w-[490px] mx-auto lg:mx-0"
              style={{
                animationDelay: "0.2s",
                fontFamily: "'Satoshi', 'Inter', sans-serif",
                fontSize: "clamp(16px, 1.15vw, 18.5px)",
                lineHeight: 1.65,
                color: "#C5C3D0",
              }}
            >
              I turn game launches into growth engines, connecting acquisition,
              creators, communities and live ops to build lasting player engagement.
            </p>

            {/* Metrics side-by-side with purple numbers */}
            <div
              className="flex items-start justify-center lg:justify-start gap-8 mb-9 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', 'Bricolage Grotesque', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(34px, 2.9vw, 44px)",
                    color: "#C026D3",
                    lineHeight: 1.1,
                  }}
                >
                  10M+
                </div>
                <div
                  style={{
                    fontFamily: "'Satoshi', 'Inter', sans-serif",
                    fontSize: "clamp(14px, 1vw, 16px)",
                    color: "#C5C3D0",
                    marginTop: "6px",
                    lineHeight: 1.4,
                  }}
                >
                  players acquired &amp;
                  <br />
                  engaged
                </div>
              </div>

              {/* Vertical divider */}
              <div
                style={{
                  width: "1px",
                  alignSelf: "stretch",
                  background: "#343044",
                }}
              />

              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', 'Bricolage Grotesque', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(34px, 2.9vw, 44px)",
                    color: "#C026D3",
                    lineHeight: 1.1,
                  }}
                >
                  1000+
                </div>
                <div
                  style={{
                    fontFamily: "'Satoshi', 'Inter', sans-serif",
                    fontSize: "clamp(14px, 1vw, 16px)",
                    color: "#C5C3D0",
                    marginTop: "6px",
                    lineHeight: 1.4,
                  }}
                >
                  Creators onboarded
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full hero-btn-primary"
                style={{
                  background: "linear-gradient(135deg, #9333EA, #C026D3)",
                  boxShadow: "0 0 24px rgba(192, 38, 211, 0.35)",
                  color: "#FFFFFF",
                  fontFamily: "'Space Grotesk', 'Satoshi', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "14px 28px",
                  letterSpacing: "0.01em",
                }}
                data-ocid="hero.primary_button"
              >
                See how I scale games&nbsp;↓
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full hero-btn-secondary"
                style={{
                  border: "1px solid #343044",
                  color: "#F5F4FA",
                  fontFamily: "'Space Grotesk', 'Satoshi', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "14px 28px",
                  letterSpacing: "0.01em",
                }}
                data-ocid="hero.secondary_button"
              >
                Grow your game&nbsp;↗
              </a>
            </div>
          </div>

          {/* ══════ Right column: Integrated Portrait Artwork & Collage (Desktop only) ══════ */}
          <div
            className="hidden lg:flex w-full lg:w-[53%] xl:w-[55%] relative items-center justify-center animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            {/* Ambient behind-artwork purple glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "95%",
                height: "90%",
                background:
                  "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(182, 32, 245, 0.22), transparent 70%)",
                filter: "blur(45px)",
                zIndex: 0,
              }}
            />

            {/* Main Portrait Artwork with soft seamless edge blending */}
            <div className="relative z-10 w-full flex justify-center lg:justify-end">
              <img
                src="/assets/uploads/hero-collage.jpg"
                alt="Tarun Sardana — Gaming Growth Lead"
                className="w-full h-auto object-contain pointer-events-none"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                style={{
                  maxWidth: "720px",
                  maxHeight: "82vh",
                  /* Soft radial edge fade to eliminate any card borders or hard rectangular image seams */
                  WebkitMaskImage:
                    "radial-gradient(ellipse 92% 90% at 50% 50%, black 60%, transparent 98%)",
                  maskImage:
                    "radial-gradient(ellipse 92% 90% at 50% 50%, black 60%, transparent 98%)",
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to blend with next section */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to top, oklch(0.08 0.04 290), transparent)",
        }}
      />
    </section>
  );
}
