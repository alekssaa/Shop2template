import React, { useEffect, useState } from "react";
import darkPng from "../../assets/img/dark-mode-button.png";
import lightPng from "../../assets/img/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        alt="Light mode"
        src={lightPng}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]  transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        alt="Dark mode"
        src={darkPng}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]  transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
