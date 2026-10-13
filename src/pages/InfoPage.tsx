/* Static info page (About / Privacy / Terms) — prose layout reusing
   the site header/footer, eyebrow + h1, sectioned content, optional FAQ. */
import type { InfoPageContent } from "../lib/content";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Faq } from "../components/Faq";
import { KineticHeadline, ScrollReveal } from "../components/motion";

export function InfoPage({ page, pageKey }: { page: InfoPageContent; pageKey: string }) {
  return (
    <>
      <Header currentPage={pageKey} />
      <main>
        <div className="mx-auto w-[min(760px,92vw)] pb-4 pt-10">
          <ScrollReveal>
            <p className="eyebrow text-stone-500 dark:text-ink-muted">{page.eyebrow}</p>
          </ScrollReveal>
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-bold tracking-tight">
            <KineticHeadline as="span" text={page.h1} />
          </h1>
          <ScrollReveal delay={0.35}>
            <p className="mt-3 max-w-[60ch] text-[1.12rem] text-stone-600 dark:text-ink-soft">
              {page.lead}
            </p>
          </ScrollReveal>
          {page.updated && (
            <p className="mt-4 text-[0.82rem] text-stone-400 dark:text-ink-muted/80">
              {page.updated}
            </p>
          )}
        </div>

        {page.sections.map((s, i) => (
          <section key={s.heading} className="py-6">
            <div className="mx-auto w-[min(760px,92vw)]">
              <ScrollReveal>
                <h2 className="font-display text-[clamp(1.4rem,2.8vw,1.9rem)] font-bold tracking-tight">
                  <span className="mr-3 font-display text-amber-deep dark:text-amber" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading}
                </h2>
              </ScrollReveal>
              {s.paras.map((p, j) => (
                <ScrollReveal key={j} delay={0.06 + j * 0.05}>
                  <p className="mt-4 max-w-[68ch] leading-relaxed text-stone-600 dark:text-ink-soft">
                    {p}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </section>
        ))}

        {page.faq && page.faq.length > 0 && (
          <Faq
            eyebrow="FAQ"
            heading={page.faqHeading ?? "Questions"}
            items={page.faq}
          />
        )}
      </main>
      <Footer disclaimer={page.disclaimer} />
    </>
  );
}
