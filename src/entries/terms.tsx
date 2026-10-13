import React from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import { ThemeProvider } from "../lib/theme";
import { INFO_PAGES } from "../lib/content";
import { InfoPage } from "../pages/InfoPage";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <InfoPage page={INFO_PAGES["terms"]} pageKey="terms" />
    </ThemeProvider>
  </React.StrictMode>
);
