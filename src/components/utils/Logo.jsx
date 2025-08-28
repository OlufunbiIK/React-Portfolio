// import React, { useState, useEffect } from "react";

// const FunbiDevLogo = ({ currentTheme = "dark", className = "" }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Get theme-specific colors
//   const getThemeColors = () => {
//     switch (currentTheme) {
//       case "light":
//         return {
//           primary: "from-purple-600 via-pink-600 to-red-500",
//           secondary: "from-blue-500 via-purple-500 to-pink-500",
//           accent: "#6366f1",
//           text: "#1f2937",
//           glow: "rgba(147, 51, 234, 0.3)",
//           shadow: "rgba(0, 0, 0, 0.1)",
//         };
//       case "ocean":
//         return {
//           primary: "from-cyan-400 via-blue-500 to-indigo-600",
//           secondary: "from-teal-400 via-cyan-500 to-blue-600",
//           accent: "#06b6d4",
//           text: "#ffffff",
//           glow: "rgba(6, 182, 212, 0.4)",
//           shadow: "rgba(6, 182, 212, 0.2)",
//         };
//       case "forest":
//         return {
//           primary: "from-emerald-400 via-green-500 to-teal-600",
//           secondary: "from-lime-400 via-emerald-500 to-green-600",
//           accent: "#10b981",
//           text: "#ffffff",
//           glow: "rgba(16, 185, 129, 0.4)",
//           shadow: "rgba(16, 185, 129, 0.2)",
//         };
//       case "galaxy":
//         return {
//           primary: "from-purple-400 via-pink-500 to-indigo-600",
//           secondary: "from-violet-400 via-purple-500 to-pink-600",
//           accent: "#8b5cf6",
//           text: "#ffffff",
//           glow: "rgba(139, 92, 246, 0.4)",
//           shadow: "rgba(139, 92, 246, 0.2)",
//         };
//       case "dark":
//       default:
//         return {
//           primary: "from-purple-500 via-pink-500 to-red-500",
//           secondary: "from-blue-500 via-purple-500 to-pink-500",
//           accent: "#a855f7",
//           text: "#ffffff",
//           glow: "rgba(168, 85, 247, 0.4)",
//           shadow: "rgba(168, 85, 247, 0.2)",
//         };
//     }
//   };

//   const colors = getThemeColors();

//   return (
//     <div
//       className={`relative flex items-center space-x-3 ${className}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Logo Icon Container */}
//       <div className="relative">
//         {/* Surreal Glow Background */}
//         <div
//           className={`absolute inset-0 rounded-2xl transition-all duration-700 transform ${
//             isHovered ? "scale-125 opacity-100" : "scale-100 opacity-60"
//           }`}
//           style={{
//             background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
//             filter: `blur(${isHovered ? "20px" : "15px"})`,
//           }}
//         />

//         {/* Main Logo Container */}
//         <div
//           className={`relative w-12 h-12 rounded-2xl overflow-hidden transition-all duration-500 transform ${
//             isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
//           }`}
//           style={{
//             boxShadow: `0 8px 32px ${colors.shadow}`,
//           }}
//         >
//           {/* Animated Gradient Background */}
//           <div
//             className={`absolute inset-0 bg-gradient-to-br ${colors.primary} transition-all duration-700`}
//             style={{
//               transform: isHovered
//                 ? `rotate(${Math.sin(Date.now() * 0.003) * 5}deg) scale(1.1)`
//                 : "rotate(0deg) scale(1)",
//             }}
//           />

//           {/* Secondary Gradient Overlay */}
//           <div
//             className={`absolute inset-0 bg-gradient-to-tl ${colors.secondary} opacity-70 mix-blend-overlay transition-all duration-500`}
//             style={{
//               transform: isHovered
//                 ? `rotate(${-Math.sin(Date.now() * 0.004) * 3}deg)`
//                 : "rotate(0deg)",
//             }}
//           />

//           {/* Floating Particles */}
//           {isHovered && (
//             <div className="absolute inset-0">
//               <div
//                 className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-80"
//                 style={{ left: "20%", top: "25%", animationDelay: "0ms" }}
//               />
//               <div
//                 className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-60"
//                 style={{ right: "25%", top: "60%", animationDelay: "300ms" }}
//               />
//               <div
//                 className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-40"
//                 style={{ left: "60%", bottom: "30%", animationDelay: "600ms" }}
//               />
//             </div>
//           )}

//           {/* Logo Symbol - Creative 'F' */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="relative">
//               {/* Main 'F' Shape */}
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="relative z-10 transition-all duration-300"
//                 style={{
//                   filter: `drop-shadow(0 2px 8px ${colors.shadow})`,
//                   transform: isHovered ? "scale(1.1)" : "scale(1)",
//                 }}
//               >
//                 <defs>
//                   <linearGradient
//                     id="textGrad"
//                     x1="0%"
//                     y1="0%"
//                     x2="100%"
//                     y2="100%"
//                   >
//                     <stop
//                       offset="0%"
//                       style={{ stopColor: "#ffffff", stopOpacity: 1 }}
//                     />
//                     <stop
//                       offset="50%"
//                       style={{ stopColor: "#f8fafc", stopOpacity: 0.9 }}
//                     />
//                     <stop
//                       offset="100%"
//                       style={{ stopColor: "#e2e8f0", stopOpacity: 0.8 }}
//                     />
//                   </linearGradient>
//                 </defs>

//                 {/* Creative F with dev-inspired design */}
//                 <path
//                   d="M6 4h12v3H9v3h8v3H9v7H6V4z"
//                   fill="url(#textGrad)"
//                   className="transition-all duration-300"
//                 />

//                 {/* Code bracket accent */}
//                 <path
//                   d="M15 10l3 2-3 2v-1h-1v-2h1v-1z"
//                   fill="url(#textGrad)"
//                   opacity="0.7"
//                   className={`transition-all duration-500 ${
//                     isHovered ? "opacity-100" : "opacity-60"
//                   }`}
//                 />
//               </svg>

//               {/* Quantum dot */}
//               <div
//                 className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse"
//                 style={{
//                   background: `radial-gradient(circle, white 0%, ${colors.accent} 50%, transparent 100%)`,
//                   boxShadow: `0 0 10px ${colors.accent}`,
//                   opacity: isHovered ? 1 : 0.7,
//                 }}
//               />
//             </div>
//           </div>

//           {/* Shimmer Effect */}
//           <div
//             className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000"
//             style={{
//               background:
//                 "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
//               transform: `translateX(${
//                 -100 + ((Date.now() * 0.05) % 200)
//               }%) skewX(-20deg)`,
//             }}
//           />
//         </div>
//       </div>

//       {/* Text Logo */}
//       <div className="relative">
//         {/* Main Text */}
//         <div
//           className={`text-2xl font-bold transition-all duration-300 relative z-10 ${
//             isHovered ? "scale-105" : "scale-100"
//           }`}
//           style={{
//             color: colors.text,
//             textShadow:
//               currentTheme !== "light" ? "0 2px 10px rgba(0,0,0,0.3)" : "none",
//           }}
//         >
//           <span className="inline-block transition-all duration-300 hover:scale-110">
//             f
//           </span>
//           <span className="inline-block transition-all duration-300 hover:scale-110 delay-75">
//             u
//           </span>
//           <span className="inline-block transition-all duration-300 hover:scale-110 delay-150">
//             n
//           </span>
//           <span className="inline-block transition-all duration-300 hover:scale-110 delay-200">
//             b
//           </span>
//           <span className="inline-block transition-all duration-300 hover:scale-110 delay-300">
//             i
//           </span>
//           <span
//             className="inline-block transition-all duration-300 hover:scale-110 delay-400 ml-1"
//             style={{
//               background: `linear-gradient(135deg, ${colors.accent}, ${
//                 currentTheme === "light" ? "#ec4899" : "#f472b6"
//               })`,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             .dev
//           </span>
//         </div>

//         {/* Surreal Text Glow */}
//         <div
//           className={`absolute inset-0 transition-all duration-700 ${
//             isHovered ? "opacity-100" : "opacity-0"
//           }`}
//           style={{
//             background: `linear-gradient(135deg, ${colors.accent}40, transparent)`,
//             filter: "blur(10px)",
//             transform: "scale(1.2)",
//           }}
//         >
//           <div className="text-2xl font-bold opacity-50">
//             funbi<span className="text-pink-400">.dev</span>
//           </div>
//         </div>

//         {/* Floating Underline */}
//         <div
//           className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-500 ${
//             isHovered ? "w-full opacity-100" : "w-0 opacity-0"
//           }`}
//           style={{
//             background: `linear-gradient(90deg, ${colors.accent}, transparent)`,
//             boxShadow: `0 0 10px ${colors.accent}`,
//           }}
//         />
//       </div>

//       {/* Ambient Particles */}
//       {isHovered && (
//         <div className="absolute inset-0 pointer-events-none">
//           <div
//             className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-60"
//             style={{
//               left: "10%",
//               top: "20%",
//               animationDelay: "0ms",
//               background: colors.accent,
//             }}
//           />
//           <div
//             className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-40"
//             style={{
//               right: "15%",
//               top: "70%",
//               animationDelay: "500ms",
//               background: colors.accent,
//             }}
//           />
//           <div
//             className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping opacity-30"
//             style={{
//               left: "70%",
//               bottom: "80%",
//               animationDelay: "1000ms",
//               background: colors.accent,
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default FunbiDevLogo;

// import React, { useState } from "react";

// const FunbiDevLogo = ({ currentTheme = "dark", className = "" }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Get theme-specific colors
//   const getThemeColors = () => {
//     switch (currentTheme) {
//       case "light":
//         return {
//           primary: "#1f2937",
//           accent: "#6366f1",
//           text: "#111827",
//           subtle: "#6b7280",
//         };
//       case "ocean":
//         return {
//           primary: "#ffffff",
//           accent: "#06b6d4",
//           text: "#ffffff",
//           subtle: "#67e8f9",
//         };
//       case "forest":
//         return {
//           primary: "#ffffff",
//           accent: "#10b981",
//           text: "#ffffff",
//           subtle: "#6ee7b7",
//         };
//       case "galaxy":
//         return {
//           primary: "#ffffff",
//           accent: "#8b5cf6",
//           text: "#ffffff",
//           subtle: "#c4b5fd",
//         };
//       case "dark":
//       default:
//         return {
//           primary: "#ffffff",
//           accent: "#a855f7",
//           text: "#ffffff",
//           subtle: "#d1d5db",
//         };
//     }
//   };

//   const colors = getThemeColors();

//   return (
//     <div
//       className={`flex items-center space-x-3 ${className}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Icon */}
//       <div className="relative flex items-center justify-center">
//         <svg
//           width="32"
//           height="32"
//           viewBox="0 0 32 32"
//           className="relative z-10"
//         >
//           {/* Clean geometric F */}
//           <path
//             d="M8 6h14v2.5H10.5V14h10v2.5H10.5V26H8V6z"
//             fill={colors.primary}
//             className={`transition-all duration-300 ${
//               isHovered ? "opacity-90" : "opacity-100"
//             }`}
//           />

//           {/* Subtle accent line */}
//           <rect
//             x="20"
//             y="12"
//             width="4"
//             height="1.5"
//             fill={colors.accent}
//             className={`transition-all duration-300 ${
//               isHovered ? "opacity-100 translate-x-1" : "opacity-70"
//             }`}
//             style={{
//               transformOrigin: "left center",
//             }}
//           />
//         </svg>
//       </div>

//       {/* Text */}
//       <div className="flex items-baseline">
//         <span
//           className={`text-xl font-semibold tracking-tight transition-all duration-200 ${
//             isHovered ? "letter-spacing-wide" : ""
//           }`}
//           style={{
//             color: colors.text,
//             fontFamily: "system-ui, -apple-system, sans-serif",
//           }}
//         >
//           funbi
//         </span>
//         <span
//           className="text-xl font-light ml-0.5 transition-all duration-300"
//           style={{
//             color: colors.accent,
//             fontFamily: 'ui-monospace, "SF Mono", Consolas, monospace',
//           }}
//         >
//           .dev
//         </span>
//       </div>

//       {/* Subtle underline animation */}
//       <div
//         className={`absolute bottom-0 left-8 h-px transition-all duration-500 ease-out ${
//           isHovered ? "w-20 opacity-60" : "w-0 opacity-0"
//         }`}
//         style={{
//           background: `linear-gradient(90deg, ${colors.accent}, transparent)`,
//         }}
//       />
//     </div>
//   );
// };

// export default FunbiDevLogo;

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
      {/* Icon */}
      <div className="relative flex items-center justify-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className={`transition-transform duration-500 ${
            isHovered ? "scale-110 rotate-1" : "scale-100"
          }`}
        >
          {/* Accent line */}
          <rect
            x="20"
            y="12"
            width="4"
            height="1.5"
            fill={colors.accent}
            className={`transition-transform duration-500 ${
              isHovered ? "translate-x-1 opacity-100" : "opacity-70"
            }`}
          />
        </svg>

        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-full blur-lg transition-opacity duration-500 ${
            isHovered ? "opacity-50" : "opacity-0"
          }`}
          style={{ background: colors.accent }}
        />
      </div>

      {/* Text */}
      <div className="flex items-baseline relative">
        <span
          className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          style={{ color: colors.text }}
        >
          funbi
        </span>
        <span
          className="text-2xl font-light ml-1 bg-clip-text text-transparent transition-all duration-500"
          style={{
            backgroundImage: `linear-gradient(135deg, ${colors.accent}, ${
              currentTheme === "light" ? "#ec4899" : "#f472b6"
            })`,
          }}
        >
          .dev
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
