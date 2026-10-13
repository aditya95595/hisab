import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// Multi-page app: one real static HTML file per calculator page.
// Entry HTML files live at the project root and keep the exact
// original URLs (index.html, emi-calculator.html, ...).
const pages = [
  "index",
  "emi-calculator",
  "sip-calculator",
  "fd-calculator",
  "rd-calculator",
  "ppf-calculator",
  "percentage-calculator",
  "age-calculator",
  "cgpa-calculator",
  "bmi-calculator",
  "discount-calculator",
];

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((p) => [p, resolve(__dirname, `${p}.html`)])
      ),
    },
  },
});
