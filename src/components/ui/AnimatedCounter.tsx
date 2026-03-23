import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  direction = "up",
  className = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    mass: 1,
    duration,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, value, direction]);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion && ref.current) {
        ref.current.textContent = Intl.NumberFormat("pt-BR").format(value);
        return;
    }

    return springValue.on("change", (latest) => {
      if (ref.current && !isReducedMotion) {
        ref.current.textContent = Intl.NumberFormat("pt-BR").format(Math.floor(latest));
      }
    });
  }, [springValue, value]);

  return <span ref={ref} className={className} />;
}
