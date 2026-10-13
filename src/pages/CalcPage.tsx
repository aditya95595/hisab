/* Generic calculator page — renders any PageContent:
   eyebrow + h1, lead, workspaces, explainer, FAQ, related links. */
import type { PageContent } from "../lib/content";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Faq } from "../components/Faq";
import { CalculatorWorkspace } from "../components/Calculator";
import { KineticHeadline, ScrollReveal } from "../components/motion";

export function CalcPage({ page, pageKey }: { page: PageContent; pageKey: string }) {
  return (
    <>
      <Header currentPage={pageKey} />
      <main>
        <div className="mx-auto w-[min(1120px,92vw)] pt-10">
          <ScrollReveal>
            <p className="eyebrow text-stone-500 dark:text-ink-muted">{page.eyebrow}</p>
          </ScrollReveal>
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-bold tracking-tight">
            <KineticHeadline as="span" text={page.h1} />
          </h1>
          <ScrollReveal delay={0.35}>
            <p className="page-lead mt-3 max-w-[60ch] text-[1.12rem] text-stone-600 dark:text-ink-soft">
              {page.lead}
            </p>
          </ScrollReveal>

          {page.workspaces.map((ws, i) => (
            <CalculatorWorkspace key={ws.calcName} config={ws} />
          ))}
        </div>

        {/* Explainer */}
        <section className="py-8">
          <div className="mx-auto w-[min(760px,92vw)]">
            <ScrollReveal>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] font-bold tracking-tight">
                {page.explainHeading}
              </h2>
            </ScrollReveal>
            {page.explain.map((p, i) => (
              <ScrollReveal key={i} delay={0.08 + i * 0.06}>
                <p className="mt-4 max-w-[68ch] text-stone-600 dark:text-ink-soft">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <Faq eyebrow="FAQ" heading={page.faqHeading} items={page.faq} />

        {/* Related calculators */}
        <div className="mx-auto w-[min(1120px,92vw)] pb-4">
          <ScrollReveal>
            <nav aria-label="Related calculators" className="flex flex-wrap gap-2.5">
              {page.related.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-[0.88rem] text-stone-600 no-underline backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/60 hover:text-stone-900 dark:border-white/10 dark:bg-white/[0.045] dark:text-ink-soft dark:hover:text-ink"
                >
                  {r.label}
                </a>
              ))}
            </nav>
          </ScrollReveal>
        </div>
      </main>
      <Footer disclaimer={page.disclaimer} />
    </>
  );
}
