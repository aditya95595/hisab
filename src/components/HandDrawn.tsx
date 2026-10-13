/* Hand-drawn accents — the anti-AI kit.
   Slightly imperfect SVG strokes (wobbled paths, round caps) and
   taped-on sticker notes. All decorative: aria-hidden, and they
   respect reduced motion by simply not animating. */
import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../lib/utils";

const AMBER = "var(--amber)";

/** Marker underline for a key word — one wobbly stroke, drawn on scroll into view. */
export function ScribbleUnderline({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 16"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", className)}
    >
      {reduce ? (
        <path
          d="M5 10 C 45 5, 85 12, 125 8 S 190 6, 215 9"
          fill="none"
          stroke={AMBER}
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
        />
      ) : (
        <motion.path
          d="M5 10 C 45 5, 85 12, 125 8 S 190 6, 215 9"
          fill="none"
          stroke={AMBER}
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
        />
      )}
    </svg>
  );
}

/** Loose hand-drawn arrow, e.g. pointing at the primary CTA. */
export function HandArrow({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const shaft = "M10 8 C 28 22, 52 30, 66 54";
  const head = "M56 45 L 68 56 L 55 60";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 68"
      className={cn("pointer-events-none", className)}
    >
      {reduce ? (
        <g fill="none" stroke={AMBER} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          <path d={shaft} />
          <path d={head} />
        </g>
      ) : (
        <motion.g
          fill="none"
          stroke={AMBER}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
          initial={{ opacity: 0, rotate: -8 }}
          whileInView={{ opacity: 0.9, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.35 }}
        >
          <path d={shaft} />
          <path d={head} />
        </motion.g>
      )}
    </svg>
  );
}

/** Almost-closed hand-drawn circle for highlighting a stat. */
export function CircleHighlight({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const d =
    "M60 5 C 92 5, 113 14, 112 29 C 111 44, 88 55, 58 55 C 30 55, 8 46, 9 30 C 10 15, 34 6, 68 7";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 122 60"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", className)}
    >
      {reduce ? (
        <path d={d} fill="none" stroke={AMBER} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      ) : (
        <motion.path
          d={d}
          fill="none"
          stroke={AMBER}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        />
      )}
    </svg>
  );
}

/** A taped-on paper sticker note — like someone stuck it on the page. */
export function Sticker({
  children,
  rotate = -3,
  className,
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("sticker", className)}
      style={{ "--sticker-rotate": `${rotate}deg` } as CSSProperties}
    >
      {children}
    </span>
  );
}
