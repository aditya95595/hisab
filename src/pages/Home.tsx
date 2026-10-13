/* Homepage — premium rebuild.
   Animated amber aurora hero with kinetic headline, marquee strip,
   bento tool-card grid with hover physics, why + FAQ sections. */
import { motion, useReducedMotion } from "framer-motion";
import { HOME } from "../lib/content";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Faq } from "../components/Faq";
import {
  KineticHeadline,
  Marquee,
  ScrollReveal,
  WordCycle,
  MagneticButton,
} from "../components/motion";
import {
  ScribbleUnderline,
  HandArrow,
  CircleHighlight,
  Sticker,
} from "../components/HandDrawn";
import { TOOL_ICONS, ArrowRightIcon, CheckIcon } from "../components/icons";

function AuroraBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid-texture absolute inset-0" />
      {/* Amber aurora blobs */}
      <div
        className={
          "absolute -top-32 left-[8%] h-[420px] w-[560px] rounded-full bg-amber/[0.13] blur-[110px] dark:bg-amber/[0.10]" +
          (reduce ? "" : " animate-aurora-drift")
        }
      />
      <div
        className={
          "absolute -right-24 top-[10%] h-[380px] w-[480px] rounded-full bg-amber-deep/[0.12] blur-[120px] dark:bg-amber-deep/[0.08]" +
          (reduce ? "" : " animate-aurora-drift-2")
        }
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream-100 to-transparent dark:from-night-950" />
    </div>
  );
}

function ToolCard({ tool, index }: { tool: (typeof HOME.tools)[number]; index: number }) {
  const reduce = useReducedMotion();
  const Icon = TOOL_ICONS[tool.icon] ?? TOOL_ICONS.rupee;
  return (
    <motion.a
      href={tool.href}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.4), ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6, scale: 1.015 }}
      className="group relative block overflow-hidden rounded-card border border-black/10 bg-white/70 p-6 no-underline backdrop-blur-md transition-colors duration-300 hover:border-amber/70 hover:shadow-card-sm dark:border-white/10 dark:bg-white/[0.045] dark:hover:border-amber/50"
    >
      {/* hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber/0 blur-2xl transition-all duration-500 group-hover:bg-amber/20"
      />
      <span className="grid h-[46px] w-[46px] place-items-center rounded-[14px] bg-amber/15 font-display text-[1.35rem] font-bold text-amber-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:text-amber">
        <Icon size={22} />
      </span>
      <h3 className="mb-1.5 mt-4 font-display text-[1.15rem] font-medium">{tool.title}</h3>
      <p className="m-0 flex items-center justify-between gap-2 text-[0.92rem] text-stone-500 dark:text-ink-muted">
        <span>{tool.blurb}</span>
        <ArrowRightIcon
          size={16}
          className="flex-none text-amber-deep opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 dark:text-amber"
        />
      </p>
    </motion.a>
  );
}

export function HomePage() {
  return (
    <>
      <Header currentPage="index" />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AuroraBackground />
          <div className="relative mx-auto w-[min(1120px,92vw)] pb-16 pt-16 sm:pt-20">
            <ScrollReveal>
              <p className="eyebrow text-stone-500 dark:text-ink-muted">{HOME.eyebrow}</p>
            </ScrollReveal>
            <h1 className="max-w-[16ch] font-display text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              <KineticHeadline as="span" text={HOME.h1a} className="block" />
              <span className="relative inline-block">
                <KineticHeadline
                  as="span"
                  text={HOME.h1b}
                  delay={0.55}
                  className="grad-text block"
                />
                {/* hand-drawn marker underline under "seconds." */}
                <ScribbleUnderline className="absolute -bottom-1 left-0 h-[0.32em] w-full" />
              </span>
            </h1>
            <ScrollReveal delay={0.9}>
              <p className="mt-5 max-w-[52ch] text-[1.1rem] text-stone-600 dark:text-ink-soft">
                {HOME.heroCopy}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1.05}>
              <div className="relative mt-7 flex flex-wrap items-center gap-3">
                {/* hand-drawn arrow nudging the primary CTA (desktop only) */}
                <HandArrow
                  className="absolute -left-20 top-1/2 hidden w-16 -translate-y-1/2 rotate-[24deg] lg:block"
                />
                <MagneticButton
                  type="button"
                  onClick={() =>
                    document.getElementById("calculators")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-amber to-amber-deep px-6 py-3.5 font-display text-[1rem] font-bold text-white shadow-amber transition-shadow hover:shadow-card"
                >
                  Browse calculators
                  <ArrowRightIcon size={18} />
                </MagneticButton>
                <a
                  href="emi-calculator.html"
                  className="link-line inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/60 px-6 py-3.5 font-display text-[1rem] font-semibold no-underline backdrop-blur-md transition-colors hover:border-amber/60 dark:border-white/10 dark:bg-white/[0.045]"
                >
                  Try the EMI calculator
                </a>
                <Sticker rotate={-3} className="ml-1 mt-2 sm:mt-0">
                  {HOME.sticker}
                </Sticker>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1.2}>
              <ul className="mt-8 flex flex-wrap gap-2.5 p-0">
                {HOME.badges.map((b) => (
                  <li
                    key={b}
                    className="flex list-none items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-3.5 py-1.5 text-[0.85rem] text-stone-600 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.045] dark:text-ink-soft"
                  >
                    <CheckIcon size={14} className="text-amber-deep dark:text-amber" />
                    {b}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Live stat strip */}
            <ScrollReveal delay={1.3}>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 rounded-card border border-black/10 bg-white/50 p-5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03]">
                {[
                  ["10", "calculators, zero sign-up"],
                  ["100%", "free, forever"],
                  ["0", "bytes of your data uploaded", true],
                ].map(([n, l, circled]) => (
                  <div key={l as string} className="flex items-baseline gap-2.5">
                    <span className="relative inline-block">
                      <span className="tnum grad-text font-display text-[1.6rem] font-bold">{n}</span>
                      {circled ? (
                        <CircleHighlight className="absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)]" />
                      ) : null}
                    </span>
                    <span className="text-[0.9rem] text-stone-500 dark:text-ink-muted">{l}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Marquee strip */}
        <div className="border-y border-black/10 bg-cream-200/50 py-4 dark:border-white/[0.06] dark:bg-night-900/60">
          <Marquee speed={36}>
            {HOME.tools.map((t) => {
              const Icon = TOOL_ICONS[t.icon] ?? TOOL_ICONS.rupee;
              return (
                <span
                  key={t.href}
                  className="flex items-center gap-2 font-display text-[0.95rem] font-medium uppercase tracking-[0.14em] text-stone-500 dark:text-ink-muted"
                >
                  <Icon size={16} className="text-amber-deep dark:text-amber" />
                  {t.title.replace(" Calculator", "")}
                </span>
              );
            })}
          </Marquee>
        </div>

        {/* Tool grid */}
        <section id="calculators" className="scroll-mt-24 py-14">
          <div className="mx-auto w-[min(1120px,92vw)]">
            <ScrollReveal>
              <p className="eyebrow text-stone-500 dark:text-ink-muted">{HOME.toolsEyebrow}</p>
              <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-bold tracking-tight">
                {HOME.toolsHeading} —{" "}
                <WordCycle
                  words={["EMI", "SIP", "FD", "PPF", "BMI", "CGPA"]}
                  className="grad-text font-bold"
                />
              </h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HOME.tools.map((t, i) => (
                <ToolCard key={t.href} tool={t} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Hisab */}
        <section className="py-10">
          <div className="mx-auto w-[min(760px,92vw)]">
            <ScrollReveal>
              <p className="eyebrow text-stone-500 dark:text-ink-muted">{HOME.whyEyebrow}</p>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold tracking-tight">
                {HOME.whyHeading}
              </h2>
            </ScrollReveal>
            {HOME.why.map((p, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.08}>
                <p className="mt-4 max-w-[68ch] text-stone-600 dark:text-ink-soft">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Author note — deliberately off-grid: pushed right, slight tilt,
            like a margin note someone actually wrote. */}
        <section className="py-10">
          <div className="mx-auto w-[min(1120px,92vw)]">
            <ScrollReveal>
              <figure className="relative ml-auto max-w-[600px] rotate-[-1.4deg] rounded-card border border-amber/30 bg-white/70 p-6 shadow-card-sm backdrop-blur-md sm:p-8 dark:border-amber/25 dark:bg-white/[0.045]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-7 left-5 select-none font-display text-[4.5rem] font-bold leading-none text-amber/70"
                >
                  &ldquo;
                </span>
                <p className="eyebrow text-stone-500 dark:text-ink-muted">
                  {HOME.authorEyebrow}
                </p>
                <blockquote className="mt-3 font-serif text-[1.12rem] italic leading-relaxed text-stone-700 dark:text-ink-soft">
                  {HOME.authorQuote}
                </blockquote>
                <figcaption className="mt-4 font-serif text-[0.95rem] italic text-amber-deep dark:text-amber">
                  {HOME.authorSign}
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>
        </section>

        <Faq eyebrow={HOME.faqEyebrow} heading={HOME.faqHeading} items={HOME.faq} />
      </main>
      <Footer disclaimer={HOME.disclaimer} />
    </>
  );
}
