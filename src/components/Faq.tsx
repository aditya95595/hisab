/* FAQ accordion — smooth height animation (Vengence faq-accordion
   pattern), semantic <details>-like behaviour with buttons. */
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { FaqItem } from "../lib/content";
import { ScrollReveal } from "./motion";
import { cn } from "../lib/utils";

function FaqRow({ item, open, onToggle, index }: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const reduce = useReducedMotion();
  const btnId = `faq-btn-${index}`;
  const panelId = `faq-panel-${index}`;
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white/60 transition-colors duration-300 dark:bg-white/[0.045]",
        open
          ? "border-amber/60 dark:border-amber/50"
          : "border-black/10 hover:border-black/25 dark:border-white/10 dark:hover:border-white/25"
      )}
    >
      <button
        type="button"
        id={btnId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-[1.02rem] font-semibold"
      >
        <span>{item.q}</span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: reduce ? 0 : 0.25 }}
          className="grid h-7 w-7 flex-none place-items-center rounded-full bg-amber/15 text-lg font-bold text-amber-deep dark:text-amber"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-stone-600 dark:text-ink-soft">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-10">
      <div className="mx-auto w-[min(760px,92vw)]">
        <ScrollReveal>
          <p className="eyebrow text-stone-500 dark:text-ink-muted">{eyebrow}</p>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold tracking-tight">
            {heading}
          </h2>
        </ScrollReveal>
        <div className="mt-6 space-y-3">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i * 0.06, 0.3)}>
              <FaqRow
                item={item}
                index={i}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
