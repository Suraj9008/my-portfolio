import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Theme init (runs once before app renders)
const saved = localStorage.getItem("theme"); // "light" | "dark" | null
const systemPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const theme = saved ?? (systemPrefersDark ? "dark" : "light");
document.documentElement.classList.toggle("dark", theme === "dark");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
