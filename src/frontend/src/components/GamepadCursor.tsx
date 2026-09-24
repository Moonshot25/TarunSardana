import { useEffect, useRef, useState } from "react";

export function GamepadCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches) {
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, [role="button"], input, textarea, select, .cursor-pointer, .flip-card, [data-ocid]'
        );
        setIsHovering(Boolean(interactive));
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsClicking(false);
      setIsHovering(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth animation loop using requestAnimationFrame
    const updatePosition = () => {
      if (!reducedMotion.matches) {
        // Smooth lerp interpolation for silky movement
        const ease = 0.22;
        currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
        currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;
      } else {
        currentPos.current = { ...mousePos.current };
      }

      if (cursorRef.current) {
        // Offset so top-left tip or center of gamepad aligns with click point
        const x = currentPos.current.x;
        const y = currentPos.current.y;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(updatePosition);
    };

    rafId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <>
      {/* Hide native cursor on devices with mouse pointer */}
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          body, a, button, [role="button"], input, select, textarea, .cursor-pointer, .flip-card {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Custom Game Controller Cursor Container */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none transition-opacity duration-200 select-none will-change-transform"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        {/* Cute Miniature Game Controller Body */}
        <div
          className="relative transition-transform duration-150 origin-top-left"
          style={{
            transform: isClicking
              ? "scale(0.85) translate(0px, 0px) rotate(4deg)"
              : isHovering
              ? "scale(1.15) translate(0px, 0px) rotate(-6deg)"
              : "scale(1) translate(0px, 0px) rotate(0deg)",
            filter: isClicking
              ? "drop-shadow(0 0 12px rgba(229, 45, 235, 0.9)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.8))"
              : isHovering
              ? "drop-shadow(0 0 10px rgba(182, 32, 245, 0.8)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.7))"
              : "drop-shadow(0 0 6px rgba(182, 32, 245, 0.45)) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6))",
          }}
        >
          <svg
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            <defs>
              {/* Controller Body Shell Gradient */}
              <linearGradient id="controllerShell" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E1642" />
                <stop offset="50%" stopColor="#130D2E" />
                <stop offset="100%" stopColor="#0B0720" />
              </linearGradient>

              {/* Purple Neon Stroke Gradient */}
              <linearGradient id="neonBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E52DEB" />
                <stop offset="100%" stopColor="#7928CA" />
              </linearGradient>

              {/* Grip Accent Highlight */}
              <linearGradient id="gripHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#B620F5" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#B620F5" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Left & Right Top Bumpers */}
            <path
              d="M5 5.5C5 3.5 7 2 9.5 2H12L11 6H5V5.5Z"
              fill="#2E1A5E"
              stroke="#B620F5"
              strokeWidth="0.75"
            />
            <path
              d="M27 5.5C27 3.5 25 2 22.5 2H20L21 6H27V5.5Z"
              fill="#2E1A5E"
              stroke="#B620F5"
              strokeWidth="0.75"
            />

            {/* Main Controller Ergonomic Body Shell */}
            <path
              d="M7 4C11 3.5 21 3.5 25 4C29 4.5 31 8 30.5 13C30 18 28.5 23.5 25 24C22.5 24.3 21 21 19.5 18.5C18.5 17 13.5 17 12.5 18.5C11 21 9.5 24.3 7 24C3.5 23.5 2 18 1.5 13C1 8 3 4.5 7 4Z"
              fill="url(#controllerShell)"
              stroke="url(#neonBorder)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Inner Grip Depth Curves */}
            <path
              d="M4.5 10C5.5 16 7 20 8.5 21"
              stroke="url(#gripHighlight)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M27.5 10C26.5 16 25 20 23.5 21"
              stroke="url(#gripHighlight)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* Left Side: D-Pad Cross */}
            <g transform="translate(6.5, 9)">
              {/* D-Pad Horizontal */}
              <rect x="0" y="2.2" width="6.6" height="2.2" rx="0.8" fill="#3B2668" stroke="#A855F7" strokeWidth="0.5" />
              {/* D-Pad Vertical */}
              <rect x="2.2" y="0" width="2.2" height="6.6" rx="0.8" fill="#3B2668" stroke="#A855F7" strokeWidth="0.5" />
              {/* D-Pad Center dot */}
              <circle cx="3.3" cy="3.3" r="0.6" fill="#C084FC" />
            </g>

            {/* Center Area: Glowing Power Logo & Option buttons */}
            <g transform="translate(14, 8)">
              {/* Central Glowing Orb */}
              <circle
                cx="2"
                cy="2"
                r="1.8"
                fill={isClicking ? "#E52DEB" : isHovering ? "#C026D3" : "#7C3AED"}
                stroke="#F472B6"
                strokeWidth="0.5"
              />
              <path d="M1.3 2H2.7M2 1.3V2.7" stroke="#FFFFFF" strokeWidth="0.5" strokeLinecap="round" />
            </g>

            {/* Center Tiny Menu / Select Buttons */}
            <rect x="12" y="12" width="1.8" height="0.9" rx="0.4" fill="#9333EA" />
            <rect x="18.2" y="12" width="1.8" height="0.9" rx="0.4" fill="#9333EA" />

            {/* Right Side: 4 Action Buttons (X, Y, A, B diamond layout) */}
            <g transform="translate(20.5, 8.5)">
              {/* Top Button (Y - Magenta/Pink) */}
              <circle
                cx="3.5"
                cy="1"
                r="1.1"
                fill={isClicking || isHovering ? "#F43F5E" : "#E11D48"}
                stroke="#FECDD3"
                strokeWidth="0.4"
              />
              {/* Bottom Button (A - Cyan/Blue) */}
              <circle
                cx="3.5"
                cy="6"
                r="1.1"
                fill={isClicking || isHovering ? "#38BDF8" : "#0284C7"}
                stroke="#BAE6FD"
                strokeWidth="0.4"
              />
              {/* Left Button (X - Violet) */}
              <circle
                cx="1"
                cy="3.5"
                r="1.1"
                fill={isClicking || isHovering ? "#A855F7" : "#7E22CE"}
                stroke="#E9D5FF"
                strokeWidth="0.4"
              />
              {/* Right Button (B - Purple Accent) */}
              <circle
                cx="6"
                cy="3.5"
                r="1.1"
                fill={isClicking || isHovering ? "#E52DEB" : "#C026D3"}
                stroke="#F5D0FE"
                strokeWidth="0.4"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
