// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

const getStoredTheme = () => localStorage.getItem("theme");
const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme) return storedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    const applyTheme = () => {
      if (theme === "auto") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.setAttribute("data-bs-theme", prefersDark ? "dark" : "light");
      } else {
        document.documentElement.setAttribute("data-bs-theme", theme);
      }
    };

    applyTheme();
    setStoredTheme(theme);

    const listener = (e) => {
      if (theme === "auto") applyTheme();
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
    };
  }, [theme]);

return (
  <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 z-3">
    <button
      className="btn btn-secondary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i
        className={
          theme === "dark"
            ? "bi bi-moon-stars-fill"
            : theme === "light"
            ? "bi bi-sun-fill"
            : "bi bi-circle-half"
        }
      ></i>
    </button>

    <ul className="dropdown-menu dropdown-menu-end">
      <li>
        <button
          className="dropdown-item d-flex align-items-center"
          onClick={() => setTheme("light")}
        >
          <i className="bi bi-sun-fill me-2"></i> Light
        </button>
      </li>

      <li>
        <button
          className="dropdown-item d-flex align-items-center"
          onClick={() => setTheme("dark")}
        >
          <i className="bi bi-moon-stars-fill me-2"></i> Dark
        </button>
      </li>

      <li>
        <button
          className="dropdown-item d-flex align-items-center"
          onClick={() => setTheme("auto")}
        >
          <i className="bi bi-circle-half me-2"></i> Auto
        </button>
      </li>
    </ul>
  </div>
);

}
