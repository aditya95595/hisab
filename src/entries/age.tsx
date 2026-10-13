import React from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import { ThemeProvider } from "../lib/theme";
import { PAGES } from "../lib/content";
import { CalcPage } from "../pages/CalcPage";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CalcPage page={PAGES["age"]} pageKey="age" />
    </ThemeProvider>
  </React.StrictMode>
);
