/* Motion primitives — Hisab's own implementations of the patterns
   shown in the Vengence UI / Skiper UI libraries (kinetic text,
   count-up numbers, marquee, tooltips, magnetic buttons), restyled
   to the Midnight Amber system. CSS + Framer Motion only.
   All honour prefers-reduced-motion. */
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  animate,
} from "framer-motion";
import { cn } from "../lib/utils";

/* ---------------- ScrollReveal: rise + fade on scroll into view -------- */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------- KineticHeadline: char-flip reveal (Vengence flip-text
   pattern). Plays once when scrolled into view. ------------------------- */
export function KineticHeadline({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    if (inView) setPlayed(true);
  }, [inView ]);

  if (reduce) {
    return (
      <Tag className={className}>
        <span ref={ref}>{text}</span>
      </Tag>
    );
  }

  const chars = text.split("");
  return (
    <Tag className={cn("inline-block", className)} style={{ perspective: 900 }}>
      <span ref={ref} className="inline-block" aria-label={text}>
        {chars.map((ch, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            className="flip-char inline-block"
            initial={{ opacity: 0, rotateX: -90, y: 12 }}
            animate={
              played
                ? { opacity: 1, rotateX: 0, y: 0 }
                : { opacity: 0, rotateX: -90, y: 12 }
            }
            transition={{
              duration: 0.55,
              delay: delay + i * 0.022,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}

/* ------------- WordCycle: rotating keyword (kinetic text variant) ------ */
const EASE = [0.22, 1, 0.36, 1] as const;

export function WordCycle({
  words,
  className,
  interval = 2600,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [reduce, words.length, interval]);

  if (reduce) return <span className={className}>{words[0]}</span>;

  return (
    <span className={cn("relative inline-block overflow-hidden align-bottom", className)}>
      <motion.span
        key={idx}
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-110%", opacity: 0 }}
        transition={{ duration: 0.5, ease: [...EASE] }}
        className="inline-block"
      >
        {words[idx]}
      </motion.span>
    </span>
  );
}

/* ------------- CountUp: animated number (Vengence animated-number
   pattern). Springs toward `value`; renders via `format`. -------------- */
export function CountUp({
  value,
  format,
  className,
  duration = 0.7,
}: {
  value: number | null;
  format: (v: number) => string;
  className?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState<string>(
    value === null ? "—" : format(value)
  );
  const prevRef = useRef<number | null>(value);

  useEffect(() => {
    if (value === null) {
      setDisplay("—");
      prevRef.current = null;
      return;
    }
    if (reduce) {
      setDisplay(format(value));
      prevRef.current = value;
      return;
    }
    const from = prevRef.current ?? 0;
    const controls = animate(from, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(format(v)),
    });
    prevRef.current = value;
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span className={className} aria-hidden="true">
      {display}
    </span>
  );
}

/* ------------- Marquee: infinite logo/text strip (Skiper marquee
   pattern — free tier component style). Pauses on hover. --------------- */
export function Marquee({
  children,
  className,
  speed = 32,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={cn("overflow-hidden", className)}>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="marquee-track flex w-max items-center gap-x-10 pr-10 animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

/* ------------- Tooltip: animated hover tooltip (Vengence animated-tooltip
   pattern, simplified + accessible). ------------------------------------ */
export function Tooltip({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      <motion.span
        role="tooltip"
        initial={false}
        animate={
          open
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 6, scale: 0.96 }
        }
        transition={{ duration: reduce ? 0 : 0.18, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-max max-w-[220px] -translate-x-1/2 rounded-xl border border-white/10 bg-night-800 px-3 py-1.5 text-xs font-medium text-ink-soft shadow-card-sm dark:border-white/10"
        style={{ visibility: open ? "visible" : "hidden" }}
      >
        {label}
      </motion.span>
    </span>
  );
}

/* ------------- MagneticButton: pointer-tracked magnetic hover
   (Skiper/Vengence magnetic pattern). ---------------------------------- */
export function MagneticButton({
  children,
  className,
  strength = 18,
  ...rest
}: Omit<React.ComponentProps<typeof motion.button>, "onDrag"> & {
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width - 0.5) * strength);
    y.set(((e.clientY - r.top) / r.height - 0.5) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
