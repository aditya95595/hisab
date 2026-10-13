/* Site header — sticky glass nav with animated link underlines
   (Vengence line-hover-link pattern) and the theme toggle. */
import { motion } from "framer-motion";
import { useTheme } from "../lib/theme";
import { MoonIcon, SunIcon } from "./icons";
import { MagneticButton } from "./motion";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { href: "index.html", label: "Home", page: "index" },
  { href: "emi-calculator.html", label: "EMI", page: "emi" },
  { href: "sip-calculator.html", label: "SIP", page: "sip" },
  { href: "percentage-calculator.html", label: "Percentage", page: "percentage" },
  { href: "about.html", label: "About", page: "about" },
];

export function Brand({ className }: { className?: string }) {
  return (
    <a
      href="index.html"
      className={cn(
        "group flex items-center gap-2.5 font-display text-[1.3rem] font-bold no-underline",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center rounded-[11px] bg-gradient-to-br from-amber to-amber-deep text-[1.15rem] font-bold text-white shadow-amber transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105"
      >
        हि
      </span>
      <span>Hisab</span>
    </a>
  );
}

export function Header({ currentPage }: { currentPage: string }) {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="site-header sticky top-0 z-50 border-b border-black/10 bg-cream-100/85 backdrop-blur-xl dark:border-white/[0.055] dark:bg-night-950/80"
    >
      <div className="mx-auto flex w-[min(1120px,92vw)] items-center gap-6 py-3.5">
        <Brand />
        <nav aria-label="Primary" className="ml-auto hidden items-center gap-5 sm:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.page}
              href={l.href}
              aria-current={currentPage === l.page ? "page" : undefined}
              className={cn(
                "link-line py-1.5 text-[0.95rem] font-medium no-underline",
                currentPage === l.page
                  ? "text-stone-900 dark:text-ink"
                  : "text-stone-500 hover:text-stone-900 dark:text-ink-muted dark:hover:text-ink"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <MagneticButton
          type="button"
          onClick={toggle}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          className="ml-auto flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3.5 py-2 text-[0.85rem] font-semibold text-stone-800 transition-colors hover:border-amber sm:ml-0 dark:border-white/10 dark:bg-white/[0.045] dark:text-ink"
        >
          <motion.span
            key={theme}
            initial={{ rotate: -60, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid place-items-center text-amber-deep dark:text-amber"
          >
            {dark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </motion.span>
          <span>{dark ? "Light" : "Dark"}</span>
        </MagneticButton>
      </div>
    </motion.header>
  );
}
