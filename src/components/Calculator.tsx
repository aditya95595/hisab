/* Calculator workspace — form + live results.
   Mirrors the original calc.js data-calc behaviour: every keystroke
   recomputes through the exact same formulas. Results animate with
   a spring count-up (Vengence animated-number pattern); the region
   stays aria-live="polite" and the animated digits are aria-hidden
   with a visually-hidden plain-text mirror for screen readers. */
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  displayValue,
  formatValue,
  numericValue,
  runCalc,
} from "../lib/calc";
import type {
  FieldConfig,
  HeroPart,
  WorkspaceConfig,
} from "../lib/content";
import { CountUp, ScrollReveal, Tooltip } from "./motion";
import { InfoIcon } from "./icons";
import { cn } from "../lib/utils";

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: FieldConfig;
  value: string;
  onChange: (v: string) => void;
}) {
  const inputCls =
    "w-full rounded-xl border border-black/10 bg-cream-200/60 px-3.5 py-3 text-[1rem] text-stone-900 outline-none transition-all duration-200 placeholder:text-stone-400 focus:border-amber focus:bg-white focus:shadow-[0_0_0_3px_var(--amber-soft)] dark:border-white/10 dark:bg-night-900 dark:text-ink dark:focus:border-amber dark:focus:bg-night-800";

  if (field.type === "select") {
    return (
      <select
        id={field.id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputCls, "cursor-pointer appearance-none")}
      >
        {field.options?.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      id={field.id}
      type={field.type}
      value={value}
      min={field.min}
      max={field.dynamicMaxToday ? todayISO() : field.max}
      step={field.step}
      inputMode={field.inputmode as React.HTMLAttributes<HTMLInputElement>["inputMode"]}
      onChange={(e) => onChange(e.target.value)}
      className={inputCls}
    />
  );
}

function HeroValue({
  parts,
  values,
}: {
  parts: HeroPart[];
  values: { numeric: ReturnType<typeof runCalc>["numeric"]; strings: Record<string, string> };
}) {
  return (
    <strong className="font-display text-[clamp(2rem,4.6vw,2.9rem)] font-bold leading-none tracking-tight">
      {parts.map((p, i) => {
        const str = values.strings[p.key];
        if (str !== undefined) {
          return (
            <span key={i}>
              {str}
              {p.suffix}
            </span>
          );
        }
        const n = numericValue(values.numeric, p.key);
        if (n === null) {
          return (
            <span key={i}>
              —
              {p.suffix}
            </span>
          );
        }
        const kind = values.numeric![p.key][1];
        return (
          <span key={i}>
            <CountUp value={n} format={(v) => formatValue(v, kind)} />
            {p.suffix}
          </span>
        );
      })}
      {/* Screen-reader mirror of the final values */}
      <span className="sr-only">
        {parts
          .map((p) => displayValue(values.numeric, values.strings, p.key) + (p.suffix ?? ""))
          .join(" ")}
      </span>
    </strong>
  );
}

export function CalculatorWorkspace({ config }: { config: WorkspaceConfig }) {
  const initialVals = useMemo(() => {
    const m: Record<string, string> = {};
    for (const row of config.fieldRows)
      for (const f of row) m[f.field] = f.value;
    return m;
  }, [config]);

  const [vals, setVals] = useState<Record<string, string>>(initialVals);
  const result = useMemo(() => runCalc(config.calcName, vals), [config.calcName, vals]);

  return (
    <ScrollReveal className="my-8">
      <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
        {/* Form card */}
        <motion.form
          aria-label={config.formLabel}
          onSubmit={(e) => e.preventDefault()}
          className="rounded-card border border-black/10 bg-white/70 p-6 shadow-card-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.045] dark:shadow-card-sm sm:p-7"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          {config.formHeading && (
            <h3 className="mb-5 font-display text-[1.15rem] font-medium">
              {config.formHeading}
            </h3>
          )}
          {config.fieldRows.map((row, ri) => (
            <div
              key={ri}
              className={cn("mb-5 last:mb-0", row.length > 1 && "grid grid-cols-2 gap-4")}
            >
              {row.map((f) => (
                <div key={f.id} className={row.length > 1 ? "" : "mb-5 last:mb-0"}>
                  <label
                    htmlFor={f.id}
                    className="mb-1.5 flex items-center gap-1.5 text-[0.92rem] font-semibold"
                  >
                    {f.label}
                    {f.hint && (
                      <Tooltip label={f.hint}>
                        <span className="inline-grid cursor-help place-items-center text-stone-400 transition-colors hover:text-amber-deep dark:text-ink-muted dark:hover:text-amber">
                          <InfoIcon size={14} />
                        </span>
                      </Tooltip>
                    )}
                  </label>
                  <FieldInput
                    field={f}
                    value={vals[f.field] ?? ""}
                    onChange={(v) => setVals((s) => ({ ...s, [f.field]: v }))}
                  />
                  {f.hint && (
                    <span className="mt-1.5 block text-[0.8rem] font-normal text-stone-500 dark:text-ink-muted">
                      {f.hint}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.form>

        {/* Results card */}
        <motion.div
          aria-live="polite"
          className="relative overflow-hidden rounded-card border border-black/10 bg-white/70 p-6 shadow-card backdrop-blur-md dark:border-white/10 dark:bg-white/[0.045] sm:p-7"
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber/15 blur-3xl dark:bg-amber/10"
          />
          <div className="mb-4">
            <span className="mb-1 block text-[0.85rem] uppercase tracking-[0.08em] text-stone-500 dark:text-ink-muted">
              {config.heroLabel}
            </span>
            {/* NOTE: solid color here, not .grad-text — background-clip:text
                combined with the 60fps CountUp re-renders ghosts/smers on
                mobile GPUs. Static headlines can keep the gradient. */}
            <span className="text-amber-deep dark:text-amber">
              <HeroValue parts={config.heroParts} values={result} />
            </span>
          </div>
          {config.rows.length > 0 && (
            <dl className="grid">
              {config.rows.map((r) => (
                <div
                  key={r.key}
                  className="flex items-baseline justify-between gap-4 border-t border-dashed border-black/10 py-2.5 dark:border-white/[0.09]"
                >
                  <dt className="text-[0.92rem] text-stone-500 dark:text-ink-muted">
                    {r.label}
                  </dt>
                  <dd className="m-0 text-right font-display text-[1.05rem] font-semibold">
                    {displayValue(result.numeric, result.strings, r.key)}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {config.note && (
            <p className="mt-4 text-[0.82rem] text-stone-500 dark:text-ink-muted">
              {config.note}
            </p>
          )}
        </motion.div>
      </div>
    </ScrollReveal>
  );
}
