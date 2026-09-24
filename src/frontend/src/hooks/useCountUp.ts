import { useEffect, useRef, useState } from "react";

function parseTarget(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d.,]+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return {
    num: Number.parseFloat(match[1].replace(/,/g, "")),
    suffix: match[2],
  };
}

export function useCountUp(
  target: string,
  duration = 1800,
  startCounting = false,
): string {
  const { num, suffix } = parseTarget(target);
  const [display, setDisplay] = useState(`0${suffix}`);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startCounting) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.floor(eased * num);

      if (num >= 1_000_000) {
        setDisplay(
          `${(current / 1_000_000).toFixed(1)}M${suffix.replace("M", "")}`,
        );
      } else if (num >= 1_000) {
        setDisplay(
          `${(current / 1_000).toFixed(0)}K${suffix.replace("K", "")}`,
        );
      } else {
        setDisplay(`${String(current)}${suffix}`);
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(target);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [startCounting, target, duration, num, suffix]);

  return display;
}
