/* Site footer — Vengence animated-footer pattern adapted to Hisab:
   oversized wordmark reveal, link grid, disclaimer, live year. */
import { FOOTER_LINKS, COPYRIGHT_LINE } from "../lib/content";
import { useYear } from "../lib/theme";
import { Brand } from "./Header";
import { ScrollReveal } from "./motion";

export function Footer({ disclaimer }: { disclaimer: string }) {
  const year = useYear();
  return (
    <footer className="site-footer relative mt-12 overflow-hidden border-t border-black/10 pt-10 dark:border-white/[0.055]">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-[70ch] text-[0.8rem] leading-relaxed text-stone-500 dark:text-ink-muted">
              {disclaimer}
            </p>
          </div>
          <nav aria-label="Calculators">
            <ul className="grid grid-cols-2 gap-x-5 gap-y-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-line text-[0.9rem] text-stone-500 no-underline transition-colors hover:text-amber-deep dark:text-ink-muted dark:hover:text-amber"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-3 text-[0.82rem] text-stone-500 dark:text-ink-muted">
          © {year} Hisab. {COPYRIGHT_LINE}
        </p>
        <p className="mt-1.5 text-[0.78rem] text-stone-400 dark:text-ink-muted/80">
          Set in Space Grotesk &amp; Inter · No cookies, no trackers — there&rsquo;s nothing here to track.
        </p>

        {/* Oversized wordmark — scroll-reveal brand moment */}
        <ScrollReveal y={60}>
          <div
            aria-hidden="true"
            className="pointer-events-none mt-6 select-none overflow-hidden font-display text-[clamp(4rem,17vw,13rem)] font-bold leading-[0.9] tracking-tight text-stone-900/[0.05] dark:text-white/[0.045]"
          >
            हिसाब
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
