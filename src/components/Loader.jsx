// import { useTheme } from "./providers/ThemeContext";

// export default function Loader() {
//   const { currentTheme } = useTheme();

//   const getLoaderStyles = () => {
//     switch (currentTheme) {
//       case "light":
//         return {
//           bg: "bg-white",
//           spinner: "border-blue-500",
//           accent: "border-purple-500",
//           glow: "shadow-blue-500/50",
//         };
//       case "dark":
//         return {
//           bg: "bg-gray-900",
//           spinner: "border-purple-500",
//           accent: "border-pink-500",
//           glow: "shadow-purple-500/50",
//         };
//       case "ocean":
//         return {
//           bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900",
//           spinner: "border-cyan-400",
//           accent: "border-blue-400",
//           glow: "shadow-cyan-400/50",
//         };
//       case "forest":
//         return {
//           bg: "bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900",
//           spinner: "border-emerald-400",
//           accent: "border-green-400",
//           glow: "shadow-emerald-400/50",
//         };
//       case "galaxy":
//         return {
//           bg: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
//           spinner: "border-purple-400",
//           accent: "border-pink-400",
//           glow: "shadow-purple-400/50",
//         };
//       default:
//         return {
//           bg: "bg-gray-900",
//           spinner: "border-purple-500",
//           accent: "border-pink-500",
//           glow: "shadow-purple-500/50",
//         };
//     }
//   };

//   const styles = getLoaderStyles();

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] flex items-center justify-center ${styles.bg} transition-opacity duration-500`}
//     >
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden opacity-30">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               width: `${Math.random() * 4 + 2}px`,
//               height: `${Math.random() * 4 + 2}px`,
//               backgroundColor: currentTheme === "light" ? "#6366f1" : "#a855f7",
//               animationDelay: `${Math.random() * 2}s`,
//               animationDuration: `${Math.random() * 3 + 2}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Main loader content */}
//       <div className="relative flex flex-col items-center space-y-8">
//         {/* Spinning loader */}
//         <div className="relative">
//           {/* Outer ring */}
//           <div
//             className={`w-20 h-20 border-4 border-t-transparent ${styles.spinner} rounded-full animate-spin ${styles.glow} shadow-2xl`}
//           />

//           {/* Inner ring - counter rotating */}
//           <div
//             className={`absolute inset-2 w-16 h-16 border-4 border-b-transparent ${styles.accent} rounded-full animate-spin-reverse ${styles.glow} shadow-xl`}
//             style={{ animationDirection: "reverse" }}
//           />

//           {/* Center dot */}
//           <div
//             className={`absolute inset-0 m-auto w-4 h-4 ${styles.spinner} rounded-full animate-pulse`}
//           />
//         </div>

//         {/* Loading text */}
//         <div className="flex flex-col items-center space-y-2">
//           <h2
//             className={`text-2xl font-bold ${
//               currentTheme === "light" ? "text-gray-900" : "text-white"
//             } animate-pulse`}
//           >
//             Loading
//           </h2>

//           {/* Animated dots */}
//           <div className="flex space-x-1">
//             {[0, 1, 2].map((i) => (
//               <div
//                 key={i}
//                 className={`w-2 h-2 ${
//                   currentTheme === "light" ? "bg-blue-500" : "bg-purple-500"
//                 } rounded-full animate-bounce`}
//                 style={{
//                   animationDelay: `${i * 0.15}s`,
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Progress bar */}
//         <div className="w-64 h-1 bg-gray-700/30 rounded-full overflow-hidden">
//           <div
//             className={`h-full ${
//               currentTheme === "light"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-500"
//                 : "bg-gradient-to-r from-purple-500 to-pink-500"
//             } rounded-full animate-progress`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useTheme } from "./providers/ThemeContext";

export default function Loader() {
  const { currentTheme } = useTheme();

  const getLoaderStyles = () => {
    switch (currentTheme) {
      case "light":
        return {
          bg: "bg-white",
          spinner: "border-blue-500",
          text: "text-gray-900",
        };
      case "dark":
        return {
          bg: "bg-gray-900",
          spinner: "border-purple-500",
          text: "text-white",
        };
      case "ocean":
        return {
          bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900",
          spinner: "border-cyan-400",
          text: "text-white",
        };
      case "forest":
        return {
          bg: "bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900",
          spinner: "border-emerald-400",
          text: "text-white",
        };
      case "galaxy":
        return {
          bg: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
          spinner: "border-purple-400",
          text: "text-white",
        };
      default:
        return {
          bg: "bg-gray-900",
          spinner: "border-purple-500",
          text: "text-white",
        };
    }
  };

  const styles = getLoaderStyles();

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center ${styles.bg} transition-opacity duration-500`}
    >
      {/* Simple spinning loader */}
      <div className="relative flex flex-col items-center space-y-4">
        <div
          className={`w-16 h-16 border-4 border-t-transparent ${styles.spinner} rounded-full animate-spin`}
        />
      </div>
    </div>
  );
}
