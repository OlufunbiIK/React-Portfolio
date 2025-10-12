import React, { useState } from "react";

const FunbiDevLogo = ({ currentTheme = "dark", className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Theme colors
  const getThemeColors = () => {
    switch (currentTheme) {
      case "light":
        return {
          primary: "#1f2937",
          accent: "#6366f1",
          text: "#111827",
        };
      case "ocean":
        return {
          primary: "#ffffff",
          accent: "#06b6d4",
          text: "#ffffff",
        };
      case "forest":
        return {
          primary: "#ffffff",
          accent: "#10b981",
          text: "#ffffff",
        };
      case "galaxy":
        return {
          primary: "#ffffff",
          accent: "#8b5cf6",
          text: "#ffffff",
        };
      case "dark":
      default:
        return {
          primary: "#ffffff",
          accent: "#a855f7",
          text: "#ffffff",
        };
    }
  };

  const colors = getThemeColors();

  return (
    <div
      className={`relative flex items-center space-x-3 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label="Funbi.dev Logo"
    >
      {/* Text */}
      <div className="flex items-baseline relative">
        <span
          className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          style={{ color: colors.text }}
        >
          Olufunbi's
        </span>
        <span
          className="text-2xl font-light ml-1 bg-clip-text text-transparent transition-all duration-500"
          style={{
            backgroundImage: `linear-gradient(135deg, ${colors.accent}, ${
              currentTheme === "light" ? "#ec4899" : "#f472b6"
            })`,
          }}
        >
          Portfolio
        </span>

        {/* Underline animation */}
        <div
          className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-500 ${
            isHovered ? "w-full opacity-70" : "w-0 opacity-0"
          }`}
          style={{
            background: `linear-gradient(90deg, ${colors.accent}, transparent)`,
          }}
        />
      </div>
    </div>
  );
};

export default FunbiDevLogo;
