// import {
//   ExternalLink,
//   Github,
//   ChevronLeft,
//   ChevronRight,
//   Play,
//   Pause,
// } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// // Mock images - replace with your actual images
// import money from "../assets/images/money-tracker.png";
// import know from "../assets/images/knowiz.png";
// import food from "../assets/images/food.png";
// import innovation from "../assets/images/innovate.png";

// // Mock theme context
// const useTheme = () => ({ darkMode: true });

// // Enhanced projects data with more variety
// const projects = [
//   {
//     title: "A Money Tracker App",
//     description:
//       "A money tracking app to manage expenses and income with ease.",

//     image: money,
//     tech: ["React", "Node.js", "Firebase", "Tailwind"],
//     github: "https://github.com/OlufunbiIK/My-Money-Tracker",
//     live: "https://my-money-tracker-six.vercel.app/",
//     color: "from-blue-500 to-purple-600",
//     accent: "bg-blue-500",
//   },
//   {
//     title: "Quiz App",
//     description:
//       "A quiz app with varieties of questions and interactive features.",
//     image: know,
//     tech: ["React", "Firebase", "Tailwind"],
//     github: "https://github.com/OlufunbiIK/KnowIz",
//     live: "https://know-iz.vercel.app/intro",
//     color: "from-green-500 to-teal-600",
//     accent: "bg-green-500",
//   },
//   {
//     title: "Food Tracker",
//     description:
//       "An app that helps track food consumption and nutrition easily.",
//     image: food,
//     tech: ["React", "Tailwind"],
//     github: "https://github.com/OlufunbiIK/foodie-tracker",
//     live: "https://foodie-tracker-wv7q.vercel.app/",
//     color: "from-purple-500 to-purple-700",
//     accent: "bg-purple-500",
//   },
//   {
//     title: "Innovation",
//     description:
//       "A website for an architecture firm with modern design showcases.",
//     image: innovation,
//     tech: ["Next.js", "Tailwind"],
//     github: "https://github.com/OlufunbiIK/innovation",
//     live: "https://innovation-silk.vercel.app/",
//     color: "from-pink-500 to-rose-600",
//     accent: "bg-pink-500",
//   },
// ];

// export default function Project() {
//   const { darkMode } = useTheme();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const autoPlayRef = useRef();
//   const sectionRef = useRef();

//   // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlay) {
//       autoPlayRef.current = setInterval(() => {
//         nextProject();
//       }, 4000);
//     }

//     return () => clearInterval(autoPlayRef.current);
//   }, [isAutoPlay, currentIndex]);

//   // Mouse tracking for parallax effect (disabled on mobile)
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (sectionRef.current && window.innerWidth > 768) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
//         const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
//         setMousePosition({ x, y });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (e.key === "ArrowLeft") {
//         prevProject();
//       } else if (e.key === "ArrowRight") {
//         nextProject();
//       } else if (e.key === " ") {
//         e.preventDefault();
//         setIsAutoPlay(!isAutoPlay);
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);
//     return () => window.removeEventListener("keydown", handleKeyPress);
//   }, [isAutoPlay]);

//   const nextProject = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
//     setTimeout(() => setIsTransitioning(false), 300);
//   };

//   const prevProject = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
//     setTimeout(() => setIsTransitioning(false), 300);
//   };

//   const goToProject = (index) => {
//     if (isTransitioning || index === currentIndex) return;
//     setIsTransitioning(true);
//     setCurrentIndex(index);
//     setTimeout(() => setIsTransitioning(false), 300);
//   };

//   const getSlidePosition = (index) => {
//     const diff = index - currentIndex;
//     // Better positioning for mobile with larger multiplier for more visible separation
//     const multiplier =
//       window.innerWidth < 640 ? 110 : window.innerWidth < 768 ? 120 : 120;
//     if (Math.abs(diff) > 2) {
//       return diff > 0 ? 300 : -300;
//     }
//     return diff * multiplier;
//   };

//   const getSlideScale = (index) => {
//     const distance = Math.abs(index - currentIndex);
//     if (index === currentIndex)
//       return window.innerWidth < 640
//         ? 1
//         : window.innerWidth < 768
//         ? 1.05
//         : 1.15;
//     if (distance === 1)
//       return window.innerWidth < 640
//         ? 0.75
//         : window.innerWidth < 768
//         ? 0.85
//         : 0.9;
//     if (distance === 2)
//       return window.innerWidth < 640
//         ? 0.55
//         : window.innerWidth < 768
//         ? 0.65
//         : 0.75;
//     return 0.6;
//   };

//   const getSlideOpacity = (index) => {
//     const distance = Math.abs(index - currentIndex);
//     if (index === currentIndex) return 1;
//     if (distance === 1)
//       return window.innerWidth < 640
//         ? 0.5
//         : window.innerWidth < 768
//         ? 0.6
//         : 0.8;
//     if (distance === 2)
//       return window.innerWidth < 640
//         ? 0.15
//         : window.innerWidth < 768
//         ? 0.2
//         : 0.4;
//     return 0.1;
//   };

//   const getSlideBlur = (index) => {
//     const distance = Math.abs(index - currentIndex);
//     return distance * (window.innerWidth < 768 ? 1 : 2);
//   };

//   const currentProject = projects[currentIndex];

//   return (
//     <div ref={sectionRef} className="relative">
//       {/* Dynamic background with current project color */}
//       <div
//         className="absolute inset-0 opacity-5 transition-all duration-1000"
//         style={{
//           background: `radial-gradient(circle at ${
//             50 + mousePosition.x * 10
//           }% ${50 + mousePosition.y * 10}%, ${currentProject?.color
//             ?.replace("from-", "")
//             .replace("to-", "")
//             .split(" ")[0]
//             ?.replace("-500", "")} 0%, transparent 70%)`,
//         }}
//       />

//       <section
//         id="projects"
//         className="py-10 sm:py-20 overflow-hidden min-h-screen relative"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen">
//           <div className="text-center mb-8 sm:mb-16">
//             <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
//               <span className="text-white">Featured</span>
//               <span className="text-blue-500">Projects</span>
//             </h2>

//             <p
//               className={`text-lg sm:text-xl mb-4 sm:mb-6 px-4 ${
//                 darkMode ? "text-gray-300" : "text-gray-600"
//               }`}
//             >
//               Crafting digital experiences that matter
//             </p>

//             {/* Enhanced controls - responsive */}
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
//               <button
//                 onClick={() => setIsAutoPlay(!isAutoPlay)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
//                   darkMode
//                     ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300"
//                     : "bg-white/50 hover:bg-gray-100/50 text-gray-700"
//                 } backdrop-blur-sm border border-white/10`}
//               >
//                 {isAutoPlay ? (
//                   <Pause className="w-4 h-4" />
//                 ) : (
//                   <Play className="w-4 h-4" />
//                 )}
//                 {isAutoPlay ? "Pause" : "Play"}
//               </button>

//               <div
//                 className={`text-xs sm:text-sm text-center px-2 ${
//                   darkMode ? "text-gray-400" : "text-gray-500"
//                 }`}
//               >
//                 <span className="hidden sm:inline">
//                   Use ← → arrow keys or spacebar to control
//                 </span>
//                 <span className="sm:hidden">
//                   Swipe or use buttons to navigate
//                 </span>
//               </div>
//             </div>

//             {/* Project counter */}
//             <div
//               className={`inline-block px-3 sm:px-4 py-2 rounded-full ${currentProject.accent} text-white text-sm font-medium`}
//             >
//               {String(currentIndex + 1).padStart(2, "0")} /{" "}
//               {String(projects.length).padStart(2, "0")}
//             </div>
//           </div>

//           <div className="flex flex-col gap-64 lg:gap-72">
//             {/* Enhanced Cinematic Slider - More responsive */}
//             <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mb-8 sm:mb-12">
//               <div className="relative w-full max-w-sm sm:max-w-2xl lg:max-w-5xl">
//                 {projects.map((project, index) => (
//                   <div
//                     key={index}
//                     className="absolute inset-0 transition-all duration-1000 ease-out cursor-pointer"
//                     style={{
//                       transform: `translateX(${getSlidePosition(
//                         index
//                       )}%) scale(${getSlideScale(index)}) translateZ(0)`,
//                       opacity: getSlideOpacity(index),
//                       filter: `blur(${getSlideBlur(index)}px)`,
//                       zIndex:
//                         index === currentIndex
//                           ? 20
//                           : Math.max(10 - Math.abs(index - currentIndex), 1),
//                     }}
//                     onClick={() => goToProject(index)}
//                   >
//                     <div
//                       className={`group rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 mx-auto max-w-xs sm:max-w-md lg:max-w-lg relative ${
//                         darkMode
//                           ? "bg-gray-900/80 backdrop-blur-xl border border-gray-800/50"
//                           : "bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl"
//                       } ${
//                         index === currentIndex
//                           ? "shadow-[0_0_40px_rgba(0,0,0,0.3)] sm:shadow-[0_0_80px_rgba(0,0,0,0.3)]"
//                           : ""
//                       }`}
//                       style={{
//                         transform:
//                           index === currentIndex && window.innerWidth > 768
//                             ? `translateY(${mousePosition.y * 5}px) rotateX(${
//                                 mousePosition.y * 2
//                               }deg) rotateY(${mousePosition.x * 2}deg)`
//                             : "none",
//                       }}
//                     >
//                       {/* Animated border for active project */}
//                       {index === currentIndex && (
//                         <div
//                           className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${project.color} opacity-20 animate-pulse`}
//                         />
//                       )}

//                       <div className="relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
//                         <img
//                           src={project.image}
//                           alt={project.title}
//                           className={`w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-700 ${
//                             index === currentIndex ? "scale-110" : "scale-100"
//                           }`}
//                           style={{
//                             transform:
//                               index === currentIndex && window.innerWidth > 768
//                                 ? `scale(1.1) translate(${
//                                     mousePosition.x * 5
//                                   }px, ${mousePosition.y * 5}px)`
//                                 : index === currentIndex
//                                 ? "scale(1.05)"
//                                 : "scale(1)",
//                           }}
//                         />
//                         <div
//                           className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`}
//                         />

//                         {/* Floating elements */}
//                         <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
//                           <div
//                             className={`w-2 h-2 sm:w-3 sm:h-3 ${project.accent} rounded-full animate-pulse`}
//                           />
//                         </div>

//                         <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
//                           <div
//                             className={`px-2 sm:px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm border border-white/20`}
//                           >
//                             {project.tech.length} Tech
//                           </div>
//                         </div>

//                         {/* Live indicator for active project */}
//                         {index === currentIndex && (
//                           <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2 px-2 sm:px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">
//                             <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
//                             Live
//                           </div>
//                         )}
//                       </div>

//                       <div className="p-4 sm:p-6 lg:p-8">
//                         <h3
//                           className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 transition-all duration-500 ${
//                             darkMode ? "text-white" : "text-gray-800"
//                           }`}
//                         >
//                           {project.title}
//                         </h3>
//                         <p
//                           className={`mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed ${
//                             darkMode ? "text-gray-300" : "text-gray-600"
//                           }`}
//                         >
//                           {project.description}
//                         </p>

//                         {/* Enhanced tech stack */}
//                         <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
//                           {project.tech.map((tech, techIndex) => (
//                             <span
//                               key={techIndex}
//                               className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${
//                                 darkMode
//                                   ? "bg-gray-800/60 text-gray-300 border border-gray-700/50"
//                                   : "bg-gray-50 text-gray-700 border border-gray-200"
//                               }`}
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Enhanced action buttons */}
//                         <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10">
//                           <a
//                             href={project.github}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-medium text-sm sm:text-base ${
//                               darkMode
//                                 ? "bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 border border-gray-700/50"
//                                 : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
//                             }`}
//                           >
//                             <Github className="w-4 h-4 sm:w-5 sm:h-5" />
//                             Code
//                           </a>

//                           <a
//                             href={project.live}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${project.color} text-white rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base`}
//                           >
//                             <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
//                             Live Demo
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Enhanced Navigation Buttons - More responsive */}
//               <button
//                 onClick={prevProject}
//                 disabled={isTransitioning}
//                 className={`absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 z-30 disabled:opacity-50 disabled:cursor-not-allowed ${
//                   darkMode
//                     ? "bg-gray-900/80 hover:bg-gray-800/80 text-white border border-gray-800/50"
//                     : "bg-white/80 hover:bg-gray-50/80 text-gray-800 border border-white/50"
//                 } backdrop-blur-xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl`}
//               >
//                 <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
//               </button>

//               <button
//                 onClick={nextProject}
//                 disabled={isTransitioning}
//                 className={`absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 z-30 disabled:opacity-50 disabled:cursor-not-allowed ${
//                   darkMode
//                     ? "bg-gray-900/80 hover:bg-gray-800/80 text-white border border-gray-800/50"
//                     : "bg-white/80 hover:bg-gray-50/80 text-gray-800 border border-white/50"
//                 } backdrop-blur-xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl`}
//               >
//                 <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
//               </button>
//             </div>

//             {/* Enhanced Progress Indicators - Moved below details */}
//             <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
//               {projects.map((project, index) => (
//                 <button
//                   key={index}
//                   onClick={() => goToProject(index)}
//                   disabled={isTransitioning}
//                   className={`relative overflow-hidden rounded-full transition-all duration-500 hover:scale-125 disabled:cursor-not-allowed ${
//                     index === currentIndex
//                       ? "w-8 sm:w-12 h-3 sm:h-4"
//                       : "w-3 sm:w-4 h-3 sm:h-4 hover:w-6 sm:hover:w-8"
//                   }`}
//                 >
//                   <div
//                     className={`absolute inset-0 rounded-full transition-all duration-500 ${
//                       index === currentIndex
//                         ? `bg-gradient-to-r ${project.color}`
//                         : darkMode
//                         ? "bg-gray-600 hover:bg-gray-500"
//                         : "bg-gray-300 hover:bg-gray-400"
//                     }`}
//                   />

//                   {/* Progress bar for current slide */}
//                   {index === currentIndex && isAutoPlay && (
//                     <div
//                       className="absolute inset-0 bg-white/30 rounded-full animate-pulse"
//                       style={{
//                         animation: "progress 4s linear infinite",
//                       }}
//                     />
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* Project Stats - More responsive */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
//               {[
//                 { label: "Total Projects", value: projects.length },
//                 {
//                   label: "Technologies",
//                   value: new Set(projects.flatMap((p) => p.tech)).size,
//                 },
//                 { label: "Current View", value: currentProject.title },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className={`text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 ${
//                     darkMode
//                       ? "bg-gray-900/40 border border-gray-800/50"
//                       : "bg-white/40 border border-white/50"
//                   } backdrop-blur-sm hover:scale-105`}
//                 >
//                   <div
//                     className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 ${
//                       index === 2
//                         ? `bg-gradient-to-r ${currentProject.color} bg-clip-text text-transparent`
//                         : darkMode
//                         ? "text-white"
//                         : "text-gray-800"
//                     }`}
//                   >
//                     {typeof stat.value === "string"
//                       ? stat.value
//                       : stat.value.toString().padStart(2, "0")}
//                   </div>
//                   <div
//                     className={`text-xs sm:text-sm ${
//                       darkMode ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes progress {
//           0% {
//             width: 100%;
//           }
//           100% {
//             width: 0%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
// Mock images - replace with your actual images
import money from "../assets/images/money-tracker.png";
import know from "../assets/images/knowiz.png";
import food from "../assets/images/food.png";
import innovation from "../assets/images/innovate.png";
import { useTheme } from "./providers/ThemeContext";

// Import your actual theme context

// Enhanced projects data with more variety
const projects = [
  {
    title: "A Money Tracker App",
    description:
      "A money tracking app to manage expenses and income with ease.",
    image: money,
    tech: ["React", "Node.js", "Firebase", "Tailwind"],
    github: "https://github.com/OlufunbiIK/My-Money-Tracker",
    live: "https://my-money-tracker-six.vercel.app/",
    color: "from-blue-500 to-purple-600",
    accent: "bg-blue-500",
  },
  {
    title: "Quiz App",
    description:
      "A quiz app with varieties of questions and interactive features.",
    image: know,
    tech: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/OlufunbiIK/KnowIz",
    live: "https://know-iz.vercel.app/intro",
    color: "from-green-500 to-teal-600",
    accent: "bg-green-500",
  },
  {
    title: "Food Tracker",
    description:
      "An app that helps track food consumption and nutrition easily.",
    image: food,
    tech: ["React", "Tailwind"],
    github: "https://github.com/OlufunbiIK/foodie-tracker",
    live: "https://foodie-tracker-wv7q.vercel.app/",
    color: "from-purple-500 to-purple-700",
    accent: "bg-purple-500",
  },
  {
    title: "Innovation",
    description:
      "A website for an architecture firm with modern design showcases.",
    image: innovation,
    tech: ["Next.js", "Tailwind"],
    github: "https://github.com/OlufunbiIK/innovation",
    live: "https://innovation-silk.vercel.app/",
    color: "from-pink-500 to-rose-600",
    accent: "bg-pink-500",
  },
];

export default function Project() {
  const { currentTheme, isDarkTheme, theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const autoPlayRef = useRef();
  const sectionRef = useRef();

  // Theme-based styling functions
  const getThemeStyles = () => {
    const baseStyles = {
      light: {
        bg: "bg-gray-50",
        cardBg: "bg-white/90 border-gray-200/50 shadow-xl",
        cardBgAlt: "bg-gray-50/90 border-gray-300/50",
        text: "text-gray-900",
        textSecondary: "text-gray-600",
        textMuted: "text-gray-500",
        controlBg:
          "bg-white/90 hover:bg-gray-50/90 text-gray-700 border-gray-200/50",
        controlBgAlt:
          "bg-gray-100/90 hover:bg-gray-200/90 text-gray-700 border-gray-300/50",
        techBadge: "bg-gray-100/90 text-gray-700 border-gray-200/50",
        progressInactive: "bg-gray-300 hover:bg-gray-400",
        statsBg: "bg-white/60 border-gray-200/50",
      },
      dark: {
        bg: "bg-gray-900",
        cardBg: "bg-gray-900/90 border-gray-800/50 shadow-2xl",
        cardBgAlt: "bg-gray-800/90 border-gray-700/50",
        text: "text-white",
        textSecondary: "text-gray-300",
        textMuted: "text-gray-400",
        controlBg:
          "bg-gray-900/90 hover:bg-gray-800/90 text-white border-gray-800/50",
        controlBgAlt:
          "bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 border-gray-700/50",
        techBadge: "bg-gray-800/60 text-gray-300 border-gray-700/50",
        progressInactive: "bg-gray-600 hover:bg-gray-500",
        statsBg: "bg-gray-900/50 border-gray-800/50",
      },
      ocean: {
        bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900",
        cardBg: "bg-blue-900/80 border-blue-800/50 shadow-2xl",
        cardBgAlt: "bg-blue-800/80 border-blue-700/50",
        text: "text-white",
        textSecondary: "text-blue-100",
        textMuted: "text-blue-200",
        controlBg:
          "bg-blue-900/80 hover:bg-blue-800/80 text-white border-blue-800/50",
        controlBgAlt:
          "bg-blue-800/60 hover:bg-blue-700/60 text-blue-100 border-blue-700/50",
        techBadge: "bg-blue-800/60 text-blue-100 border-blue-700/50",
        progressInactive: "bg-blue-600 hover:bg-blue-500",
        statsBg: "bg-blue-900/50 border-blue-800/50",
      },
      forest: {
        bg: "bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900",
        cardBg: "bg-green-900/80 border-green-800/50 shadow-2xl",
        cardBgAlt: "bg-green-800/80 border-green-700/50",
        text: "text-white",
        textSecondary: "text-green-100",
        textMuted: "text-green-200",
        controlBg:
          "bg-green-900/80 hover:bg-green-800/80 text-white border-green-800/50",
        controlBgAlt:
          "bg-green-800/60 hover:bg-green-700/60 text-green-100 border-green-700/50",
        techBadge: "bg-green-800/60 text-green-100 border-green-700/50",
        progressInactive: "bg-green-600 hover:bg-green-500",
        statsBg: "bg-green-900/50 border-green-800/50",
      },
      galaxy: {
        bg: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
        cardBg: "bg-purple-900/80 border-purple-800/50 shadow-2xl",
        cardBgAlt: "bg-purple-800/80 border-purple-700/50",
        text: "text-white",
        textSecondary: "text-purple-100",
        textMuted: "text-purple-200",
        controlBg:
          "bg-purple-900/80 hover:bg-purple-800/80 text-white border-purple-800/50",
        controlBgAlt:
          "bg-purple-800/60 hover:bg-purple-700/60 text-purple-100 border-purple-700/50",
        techBadge: "bg-purple-800/60 text-purple-100 border-purple-700/50",
        progressInactive: "bg-purple-600 hover:bg-purple-500",
        statsBg: "bg-purple-900/50 border-purple-800/50",
      },
    };

    return baseStyles[currentTheme] || baseStyles.dark;
  };

  const styles = getThemeStyles();

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        nextProject();
      }, 4000);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, currentIndex]);

  // Mouse tracking for parallax effect (disabled on mobile)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current && window.innerWidth > 768) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        prevProject();
      } else if (e.key === "ArrowRight") {
        nextProject();
      } else if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlay(!isAutoPlay);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isAutoPlay]);

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToProject = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    // Better positioning for mobile with larger multiplier for more visible separation
    const multiplier =
      window.innerWidth < 640 ? 110 : window.innerWidth < 768 ? 120 : 120;
    if (Math.abs(diff) > 2) {
      return diff > 0 ? 300 : -300;
    }
    return diff * multiplier;
  };

  const getSlideScale = (index) => {
    const distance = Math.abs(index - currentIndex);
    if (index === currentIndex)
      return window.innerWidth < 640
        ? 1
        : window.innerWidth < 768
        ? 1.05
        : 1.15;
    if (distance === 1)
      return window.innerWidth < 640
        ? 0.75
        : window.innerWidth < 768
        ? 0.85
        : 0.9;
    if (distance === 2)
      return window.innerWidth < 640
        ? 0.55
        : window.innerWidth < 768
        ? 0.65
        : 0.75;
    return 0.6;
  };

  const getSlideOpacity = (index) => {
    const distance = Math.abs(index - currentIndex);
    if (index === currentIndex) return 1;
    if (distance === 1)
      return window.innerWidth < 640
        ? 0.5
        : window.innerWidth < 768
        ? 0.6
        : 0.8;
    if (distance === 2)
      return window.innerWidth < 640
        ? 0.15
        : window.innerWidth < 768
        ? 0.2
        : 0.4;
    return 0.1;
  };

  const getSlideBlur = (index) => {
    const distance = Math.abs(index - currentIndex);
    return distance * (window.innerWidth < 768 ? 1 : 2);
  };

  const currentProject = projects[currentIndex];

  return (
    <div ref={sectionRef} className="relative">
      {/* Dynamic background with current project color */}
      <div
        className="absolute inset-0 opacity-5 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${
            50 + mousePosition.x * 10
          }% ${50 + mousePosition.y * 10}%, ${currentProject?.color
            ?.replace("from-", "")
            .replace("to-", "")
            .split(" ")[0]
            ?.replace("-500", "")} 0%, transparent 70%)`,
        }}
      />

      <section
        id="projects"
        className="py-10 sm:py-20 overflow-hidden min-h-screen relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-screen">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              <span className={styles.text}>Featured</span>
              <span className="text-blue-500">Projects</span>
            </h2>

            <p
              className={`text-lg sm:text-xl mb-4 sm:mb-6 px-4 ${styles.textSecondary}`}
            >
              Crafting digital experiences that matter
            </p>

            {/* Enhanced controls - responsive */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${styles.controlBg} backdrop-blur-sm border`}
              >
                {isAutoPlay ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {isAutoPlay ? "Pause" : "Play"}
              </button>

              <div
                className={`text-xs sm:text-sm text-center px-2 ${styles.textMuted}`}
              >
                <span className="hidden sm:inline">
                  Use ← → arrow keys or spacebar to control
                </span>
                <span className="sm:hidden">
                  Swipe or use buttons to navigate
                </span>
              </div>
            </div>

            {/* Project counter */}
            <div
              className={`inline-block px-3 sm:px-4 py-2 rounded-full ${currentProject.accent} text-white text-sm font-medium`}
            >
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </div>
          </div>

          <div className="flex flex-col gap-64 lg:gap-72">
            {/* Enhanced Cinematic Slider - More responsive */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center mb-8 sm:mb-12">
              <div className="relative w-full max-w-sm sm:max-w-2xl lg:max-w-5xl">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-1000 ease-out cursor-pointer"
                    style={{
                      transform: `translateX(${getSlidePosition(
                        index
                      )}%) scale(${getSlideScale(index)}) translateZ(0)`,
                      opacity: getSlideOpacity(index),
                      filter: `blur(${getSlideBlur(index)}px)`,
                      zIndex:
                        index === currentIndex
                          ? 20
                          : Math.max(10 - Math.abs(index - currentIndex), 1),
                    }}
                    onClick={() => goToProject(index)}
                  >
                    <div
                      className={`group rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-700 mx-auto max-w-xs sm:max-w-md lg:max-w-lg relative ${
                        styles.cardBg
                      } backdrop-blur-xl border ${
                        index === currentIndex
                          ? "shadow-[0_0_40px_rgba(0,0,0,0.3)] sm:shadow-[0_0_80px_rgba(0,0,0,0.3)]"
                          : ""
                      }`}
                      style={{
                        transform:
                          index === currentIndex && window.innerWidth > 768
                            ? `translateY(${mousePosition.y * 5}px) rotateX(${
                                mousePosition.y * 2
                              }deg) rotateY(${mousePosition.x * 2}deg)`
                            : "none",
                      }}
                    >
                      {/* Animated border for active project */}
                      {index === currentIndex && (
                        <div
                          className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${project.color} opacity-20 animate-pulse`}
                        />
                      )}

                      <div className="relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-700 ${
                            index === currentIndex ? "scale-110" : "scale-100"
                          }`}
                          style={{
                            transform:
                              index === currentIndex && window.innerWidth > 768
                                ? `scale(1.1) translate(${
                                    mousePosition.x * 5
                                  }px, ${mousePosition.y * 5}px)`
                                : index === currentIndex
                                ? "scale(1.05)"
                                : "scale(1)",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Floating elements */}
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <div
                            className={`w-2 h-2 sm:w-3 sm:h-3 ${project.accent} rounded-full animate-pulse`}
                          />
                        </div>

                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                          <div className="px-2 sm:px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm border border-white/20">
                            {project.tech.length} Tech
                          </div>
                        </div>

                        {/* Live indicator for active project */}
                        {index === currentIndex && (
                          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2 px-2 sm:px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                            Live
                          </div>
                        )}
                      </div>

                      <div className="p-4 sm:p-6 lg:p-8">
                        <h3
                          className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 transition-all duration-500 ${styles.text}`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed ${styles.textSecondary}`}
                        >
                          {project.description}
                        </p>

                        {/* Enhanced tech stack */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${styles.techBadge} border`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Enhanced action buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-medium text-sm sm:text-base ${styles.controlBgAlt} border`}
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                            Code
                          </a>

                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${project.color} text-white rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base`}
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Navigation Buttons - More responsive */}
              <button
                onClick={prevProject}
                disabled={isTransitioning}
                className={`absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 z-30 disabled:opacity-50 disabled:cursor-not-allowed ${styles.controlBg} backdrop-blur-xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl border`}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>

              <button
                onClick={nextProject}
                disabled={isTransitioning}
                className={`absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 z-30 disabled:opacity-50 disabled:cursor-not-allowed ${styles.controlBg} backdrop-blur-xl shadow-lg sm:shadow-2xl hover:shadow-xl sm:hover:shadow-3xl border`}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </button>
            </div>

            {/* Enhanced Progress Indicators - Moved below details */}
            <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  disabled={isTransitioning}
                  className={`relative overflow-hidden rounded-full transition-all duration-500 hover:scale-125 disabled:cursor-not-allowed ${
                    index === currentIndex
                      ? "w-8 sm:w-12 h-3 sm:h-4"
                      : "w-3 sm:w-4 h-3 sm:h-4 hover:w-6 sm:hover:w-8"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? `bg-gradient-to-r ${project.color}`
                        : styles.progressInactive
                    }`}
                  />

                  {/* Progress bar for current slide */}
                  {index === currentIndex && isAutoPlay && (
                    <div
                      className="absolute inset-0 bg-white/30 rounded-full animate-pulse"
                      style={{
                        animation: "progress 4s linear infinite",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Project Stats - More responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {[
                { label: "Total Projects", value: projects.length },
                {
                  label: "Technologies",
                  value: new Set(projects.flatMap((p) => p.tech)).size,
                },
                { label: "Current View", value: currentProject.title },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 ${styles.statsBg} backdrop-blur-sm hover:scale-105 border`}
                >
                  <div
                    className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 ${
                      index === 2
                        ? `bg-gradient-to-r ${currentProject.color} bg-clip-text text-transparent`
                        : styles.text
                    }`}
                  >
                    {typeof stat.value === "string"
                      ? stat.value
                      : stat.value.toString().padStart(2, "0")}
                  </div>
                  <div className={`text-xs sm:text-sm ${styles.textMuted}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}
