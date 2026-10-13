import React from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import { ThemeProvider } from "../lib/theme";
import { HomePage } from "../pages/Home";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>
);
