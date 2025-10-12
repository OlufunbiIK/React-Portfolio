import React, { createContext, useContext, useState, useEffect } from "react";

// Theme Context
const ThemeContext = createContext(undefined);

// Define theme modes
const THEME_MODES = {
  light: {
    name: "light",
    bg: "bg-gray-50",
    text: "text-black",
    pattern: "pattern-light",
  },
  dark: {
    name: "dark",
    bg: "bg-gray-900",
    text: "text-white",
    pattern: "pattern-dark",
  },
  // ocean: {
  //   name: "ocean",
  //   bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900",
  //   text: "text-white",
  //   pattern: "pattern-ocean",
  // },
  // forest: {
  //   name: "forest",
  //   bg: "bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900",
  //   text: "text-white",
  //   pattern: "pattern-forest",
  // },

  // galaxy: {
  //   name: "galaxy",
  //   bg: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
  //   text: "text-white",
  //   pattern: "pattern-galaxy",
  // },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("home");

  const toggleTheme = () => {
    const themes = Object.keys(THEME_MODES);
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  const setTheme = (themeName) => {
    if (THEME_MODES[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const theme = THEME_MODES[currentTheme];
  const isDarkTheme = currentTheme !== "light";

  // Apply theme class to document
  useEffect(() => {
    // Remove all theme classes
    Object.keys(THEME_MODES).forEach((themeName) => {
      document.documentElement.classList.remove(`theme-${themeName}`);
    });

    // Add current theme class
    document.documentElement.classList.add(`theme-${currentTheme}`);

    // Maintain dark class for compatibility
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentTheme, isDarkTheme]);

  // Scroll detection to update active section
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top + window.pageYOffset;

          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        theme,
        isDarkTheme,
        darkMode: isDarkTheme, // For backwards compatibility
        setTheme,
        toggleTheme,
        toggleDarkMode: toggleTheme, // For backwards compatibility
        activeSection,
        setActiveSection,
        availableThemes: THEME_MODES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
