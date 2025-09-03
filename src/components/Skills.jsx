// import {
//   Code,
//   Palette,
//   Smartphone,
//   Database,
//   Cloud,
//   Zap,
//   Star,
//   TrendingUp,
//   Award,
//   Target,
//   Layers,
//   GitBranch,
// } from "lucide-react";
// import { useState, useEffect, useRef, createContext, useContext } from "react";

// // Enhanced Theme Context with multiple modes
// const ThemeContext = createContext(undefined);

// const THEME_MODES = {
//   light: {
//     name: "light",
//     bg: "bg-gray-50",
//     text: "text-black",
//     pattern: "pattern-light",
//   },
//   dark: {
//     name: "dark",
//     bg: "bg-gray-900",
//     text: "text-white",
//     pattern: "pattern-dark",
//   },
//   ocean: {
//     name: "ocean",
//     bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900",
//     text: "text-white",
//     pattern: "pattern-ocean",
//   },
//   forest: {
//     name: "forest",
//     bg: "bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900",
//     text: "text-white",
//     pattern: "pattern-forest",
//   },
//   galaxy: {
//     name: "galaxy",
//     bg: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
//     text: "text-white",
//     pattern: "pattern-galaxy",
//   },
// };

// const ThemeProvider = ({ children }) => {
//   const [currentTheme, setCurrentTheme] = useState("dark");
//   const [activeSection, setActiveSection] = useState("home");

//   const toggleTheme = () => {
//     const themes = Object.keys(THEME_MODES);
//     const currentIndex = themes.indexOf(currentTheme);
//     const nextIndex = (currentIndex + 1) % themes.length;
//     setCurrentTheme(themes[nextIndex]);
//   };

//   const theme = THEME_MODES[currentTheme];
//   const isDarkTheme = currentTheme !== "light";

//   return (
//     <ThemeContext.Provider
//       value={{
//         currentTheme,
//         theme,
//         isDarkTheme,
//         darkMode: isDarkTheme,
//         toggleTheme,
//         activeSection,
//         setActiveSection,
//         availableThemes: THEME_MODES,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// const useTheme = () => {
//   const ctx = useContext(ThemeContext);
//   if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
//   return ctx;
// };

// // Enhanced Skills component with multi-theme support
// export function Skills() {
//   const { currentTheme, isDarkTheme } = useTheme();
//   const [visibleSkills, setVisibleSkills] = useState(new Set());
//   const [hoveredSkill, setHoveredSkill] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const sectionRef = useRef();
//   const skillRefs = useRef({});

//   // Theme-specific styling configurations
//   const getThemeStyles = () => {
//     const baseStyles = {
//       light: {
//         cardBg: "bg-white/80 border-gray-200/50 hover:border-gray-300/80",
//         cardBgHover: "bg-white/90",
//         textPrimary: "text-gray-800",
//         textSecondary: "text-gray-600",
//         textTertiary: "text-gray-500",
//         statsBg: "bg-white/60 border-white/30",
//         filterBg:
//           "bg-white/70 text-gray-700 hover:bg-gray-50/70 border-gray-200/50",
//         progressBg: "bg-gray-200/60",
//         particleOpacity: "opacity-20",
//       },
//       dark: {
//         cardBg: "bg-gray-900/80 border-gray-800/50 hover:border-gray-700/80",
//         cardBgHover: "bg-gray-900/90",
//         textPrimary: "text-white",
//         textSecondary: "text-gray-300",
//         textTertiary: "text-gray-400",
//         statsBg: "bg-gray-900/60 border-gray-800/30",
//         filterBg:
//           "bg-gray-800/70 text-gray-300 hover:bg-gray-700/70 border-gray-700/50",
//         progressBg: "bg-gray-800/60",
//         particleOpacity: "opacity-30",
//       },
//       ocean: {
//         cardBg: "bg-blue-900/40 border-cyan-500/20 hover:border-cyan-400/40",
//         cardBgHover: "bg-blue-900/60",
//         textPrimary: "text-cyan-100",
//         textSecondary: "text-cyan-200",
//         textTertiary: "text-cyan-300/70",
//         statsBg: "bg-blue-900/30 border-cyan-500/20",
//         filterBg:
//           "bg-blue-800/50 text-cyan-200 hover:bg-blue-700/60 border-cyan-500/30",
//         progressBg: "bg-blue-800/50",
//         particleOpacity: "opacity-40",
//         accent: "from-cyan-400 to-blue-400",
//       },
//       forest: {
//         cardBg:
//           "bg-green-900/40 border-emerald-500/20 hover:border-emerald-400/40",
//         cardBgHover: "bg-green-900/60",
//         textPrimary: "text-emerald-100",
//         textSecondary: "text-emerald-200",
//         textTertiary: "text-emerald-300/70",
//         statsBg: "bg-green-900/30 border-emerald-500/20",
//         filterBg:
//           "bg-green-800/50 text-emerald-200 hover:bg-green-700/60 border-emerald-500/30",
//         progressBg: "bg-green-800/50",
//         particleOpacity: "opacity-40",
//         accent: "from-emerald-400 to-green-400",
//       },
//       galaxy: {
//         cardBg:
//           "bg-purple-900/40 border-purple-500/20 hover:border-purple-400/40",
//         cardBgHover: "bg-purple-900/60",
//         textPrimary: "text-purple-100",
//         textSecondary: "text-purple-200",
//         textTertiary: "text-purple-300/70",
//         statsBg: "bg-purple-900/30 border-purple-500/20",
//         filterBg:
//           "bg-purple-800/50 text-purple-200 hover:bg-purple-700/60 border-purple-500/30",
//         progressBg: "bg-purple-800/50",
//         particleOpacity: "opacity-40",
//         accent: "from-purple-400 to-pink-400",
//       },
//     };

//     return baseStyles[currentTheme] || baseStyles.dark;
//   };

//   const themeStyles = getThemeStyles();

//   const skillCategories = {
//     frontend: {
//       name: "Frontend",
//       color:
//         currentTheme === "ocean"
//           ? "from-cyan-500 to-blue-500"
//           : currentTheme === "forest"
//           ? "from-emerald-500 to-green-500"
//           : currentTheme === "galaxy"
//           ? "from-purple-500 to-pink-500"
//           : "from-blue-500 to-cyan-500",
//       icon: <Code className="w-5 h-5" />,
//     },
//     backend: {
//       name: "Backend",
//       color:
//         currentTheme === "ocean"
//           ? "from-blue-600 to-indigo-600"
//           : currentTheme === "forest"
//           ? "from-green-600 to-teal-600"
//           : currentTheme === "galaxy"
//           ? "from-indigo-600 to-purple-600"
//           : "from-green-500 to-emerald-500",
//       icon: <Database className="w-5 h-5" />,
//     },
//     design: {
//       name: "Design",
//       color:
//         currentTheme === "ocean"
//           ? "from-teal-500 to-cyan-500"
//           : currentTheme === "forest"
//           ? "from-lime-500 to-emerald-500"
//           : currentTheme === "galaxy"
//           ? "from-pink-500 to-purple-500"
//           : "from-purple-500 to-pink-500",
//       icon: <Palette className="w-5 h-5" />,
//     },
//     tools: {
//       name: "Tools",
//       color:
//         currentTheme === "ocean"
//           ? "from-blue-400 to-cyan-400"
//           : currentTheme === "forest"
//           ? "from-yellow-500 to-green-500"
//           : currentTheme === "galaxy"
//           ? "from-violet-500 to-purple-500"
//           : "from-orange-500 to-red-500",
//       icon: <Zap className="w-5 h-5" />,
//     },
//   };

//   const skills = [
//     {
//       name: "React",
//       level: 95,
//       category: "frontend",
//       icon: <Code className="w-6 h-6" />,
//       color: skillCategories.frontend.color,
//       description: "Component-based UI development",
//       experience: "4+ years",
//       projects: 25,
//     },
//     {
//       name: "JavaScript",
//       level: 92,
//       category: "frontend",
//       icon: <Code className="w-6 h-6" />,
//       color:
//         currentTheme === "forest"
//           ? "from-yellow-400 to-green-500"
//           : "from-yellow-400 to-orange-500",
//       description: "Modern ES6+ development",
//       experience: "5+ years",
//       projects: 30,
//     },
//     {
//       name: "TypeScript",
//       level: 88,
//       category: "frontend",
//       icon: <Code className="w-6 h-6" />,
//       color:
//         currentTheme === "ocean"
//           ? "from-blue-500 to-cyan-600"
//           : currentTheme === "galaxy"
//           ? "from-indigo-500 to-purple-600"
//           : "from-blue-600 to-indigo-600",
//       description: "Type-safe application development",
//       experience: "3+ years",
//       projects: 18,
//     },
//     {
//       name: "CSS/SCSS",
//       level: 90,
//       category: "design",
//       icon: <Palette className="w-6 h-6" />,
//       color: skillCategories.design.color,
//       description: "Advanced styling & animations",
//       experience: "5+ years",
//       projects: 35,
//     },
//     {
//       name: "Node.js",
//       level: 85,
//       category: "backend",
//       icon: <Database className="w-6 h-6" />,
//       color: skillCategories.backend.color,
//       description: "Server-side JavaScript",
//       experience: "3+ years",
//       projects: 15,
//     },
//     {
//       name: "Responsive Design",
//       level: 94,
//       category: "design",
//       icon: <Smartphone className="w-6 h-6" />,
//       color:
//         currentTheme === "ocean"
//           ? "from-cyan-500 to-blue-600"
//           : currentTheme === "forest"
//           ? "from-emerald-500 to-green-600"
//           : currentTheme === "galaxy"
//           ? "from-purple-500 to-pink-600"
//           : "from-purple-500 to-violet-600",
//       description: "Mobile-first development",
//       experience: "4+ years",
//       projects: 28,
//     },
//     {
//       name: "Git & GitHub",
//       level: 89,
//       category: "tools",
//       icon: <GitBranch className="w-6 h-6" />,
//       color:
//         currentTheme === "light"
//           ? "from-gray-600 to-gray-800"
//           : "from-gray-400 to-gray-600",
//       description: "Version control & collaboration",
//       experience: "4+ years",
//       projects: 40,
//     },
//     {
//       name: "AWS",
//       level: 78,
//       category: "backend",
//       icon: <Cloud className="w-6 h-6" />,
//       color: "from-orange-500 to-orange-600",
//       description: "Cloud infrastructure & deployment",
//       experience: "2+ years",
//       projects: 12,
//     },
//     {
//       name: "Three.js",
//       level: 82,
//       category: "frontend",
//       icon: <Layers className="w-6 h-6" />,
//       color:
//         currentTheme === "ocean"
//           ? "from-cyan-400 to-blue-500"
//           : currentTheme === "forest"
//           ? "from-teal-400 to-emerald-500"
//           : currentTheme === "galaxy"
//           ? "from-violet-400 to-purple-500"
//           : "from-cyan-500 to-blue-500",
//       description: "3D graphics & animations",
//       experience: "2+ years",
//       projects: 8,
//     },
//   ];

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = parseInt(entry.target.dataset.index);
//             setTimeout(() => {
//               setVisibleSkills((prev) => new Set([...prev, index]));
//             }, index * 100);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     Object.values(skillRefs.current).forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const filteredSkills =
//     activeCategory === "all"
//       ? skills
//       : skills.filter((skill) => skill.category === activeCategory);

//   const getSkillLevel = (level) => {
//     if (level >= 90)
//       return { text: "Expert", icon: <Award className="w-4 h-4" /> };
//     if (level >= 80)
//       return { text: "Advanced", icon: <Star className="w-4 h-4" /> };
//     if (level >= 70)
//       return { text: "Intermediate", icon: <TrendingUp className="w-4 h-4" /> };
//     return { text: "Beginner", icon: <Target className="w-4 h-4" /> };
//   };

//   const averageSkill = Math.round(
//     filteredSkills.reduce((acc, skill) => acc + skill.level, 0) /
//       filteredSkills.length
//   );
//   const totalProjects = filteredSkills.reduce(
//     (acc, skill) => acc + skill.projects,
//     0
//   );

//   // Dynamic particle colors based on theme
//   const getParticleGradient = () => {
//     switch (currentTheme) {
//       case "ocean":
//         return "from-cyan-400 to-blue-500";
//       case "forest":
//         return "from-emerald-400 to-green-500";
//       case "galaxy":
//         return "from-purple-400 to-pink-500";
//       default:
//         return "from-blue-500 to-purple-600";
//     }
//   };

//   return (
//     <div ref={sectionRef} className="relative overflow-hidden">
//       {/* Animated background particles with theme-specific colors */}
//       <div className={`absolute inset-0 ${themeStyles.particleOpacity}`}>
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute w-2 h-2 bg-gradient-to-r ${getParticleGradient()} rounded-full animate-float`}
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`,
//             }}
//           />
//         ))}
//       </div>

//       <section id="skills" className="py-24 relative">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Enhanced header */}
//           <div className="text-center mb-20">
//             <div className="inline-block mb-6">
//               <div
//                 className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${
//                   currentTheme === "light"
//                     ? "from-blue-500/10 to-purple-600/10"
//                     : themeStyles.accent || "from-blue-500/10 to-purple-600/10"
//                 } rounded-full border ${
//                   currentTheme === "light"
//                     ? "border-blue-500/30"
//                     : "border-white/10"
//                 }`}
//               >
//                 <Zap
//                   className={`w-5 h-5 ${
//                     currentTheme === "light"
//                       ? "text-blue-600"
//                       : currentTheme === "ocean"
//                       ? "text-cyan-400"
//                       : currentTheme === "forest"
//                       ? "text-emerald-400"
//                       : currentTheme === "galaxy"
//                       ? "text-purple-400"
//                       : "text-blue-500"
//                   }`}
//                 />
//                 <span
//                   className={`text-sm font-medium ${themeStyles.textSecondary}`}
//                 >
//                   Technical Expertise
//                 </span>
//               </div>
//             </div>

//             <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
//               My
//               <span
//                 className={`bg-gradient-to-r ${
//                   themeStyles.accent || "from-blue-500 to-purple-600"
//                 } bg-clip-text text-transparent`}
//               >
//                 Skills
//               </span>
//             </h2>
//             <p
//               className={`text-xl mb-8 max-w-2xl mx-auto ${themeStyles.textSecondary}`}
//             >
//               A comprehensive toolkit built through years of passionate
//               development
//             </p>

//             {/* Stats overview */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
//               {[
//                 {
//                   label: "Average Proficiency",
//                   value: `${averageSkill}%`,
//                   color:
//                     currentTheme === "ocean"
//                       ? "from-cyan-500 to-blue-500"
//                       : currentTheme === "forest"
//                       ? "from-emerald-500 to-green-500"
//                       : currentTheme === "galaxy"
//                       ? "from-purple-500 to-pink-500"
//                       : "from-green-500 to-emerald-500",
//                 },
//                 {
//                   label: "Total Projects",
//                   value: totalProjects.toString(),
//                   color: themeStyles.accent || "from-blue-500 to-cyan-500",
//                 },
//                 {
//                   label: "Years Experience",
//                   value: "5+",
//                   color:
//                     currentTheme === "ocean"
//                       ? "from-blue-500 to-indigo-500"
//                       : currentTheme === "forest"
//                       ? "from-green-500 to-teal-500"
//                       : currentTheme === "galaxy"
//                       ? "from-purple-500 to-violet-500"
//                       : "from-purple-500 to-pink-500",
//                 },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className={`p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${themeStyles.statsBg} backdrop-blur-sm border`}
//                 >
//                   <div
//                     className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
//                   >
//                     {stat.value}
//                   </div>
//                   <div className={`text-sm ${themeStyles.textTertiary}`}>
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Category filters */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             <button
//               onClick={() => setActiveCategory("all")}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
//                 activeCategory === "all"
//                   ? `bg-gradient-to-r ${
//                       themeStyles.accent || "from-blue-500 to-purple-600"
//                     } text-white shadow-lg`
//                   : `${themeStyles.filterBg} border`
//               } backdrop-blur-sm`}
//             >
//               All Skills
//             </button>
//             {Object.entries(skillCategories).map(([key, category]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveCategory(key)}
//                 className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
//                   activeCategory === key
//                     ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
//                     : `${themeStyles.filterBg} border`
//                 } backdrop-blur-sm`}
//               >
//                 {category.icon}
//                 {category.name}
//               </button>
//             ))}
//           </div>

//           {/* Enhanced skills grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredSkills.map((skill, index) => {
//               const isVisible = visibleSkills.has(index);
//               const skillLevelInfo = getSkillLevel(skill.level);

//               return (
//                 <div
//                   key={`${skill.name}-${activeCategory}`}
//                   ref={(el) => (skillRefs.current[index] = el)}
//                   data-index={index}
//                   className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 cursor-pointer ${
//                     themeStyles.cardBg
//                   } backdrop-blur-xl shadow-2xl hover:shadow-3xl border ${
//                     isVisible
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-12 opacity-0"
//                   }`}
//                   onMouseEnter={() => setHoveredSkill(index)}
//                   onMouseLeave={() => setHoveredSkill(null)}
//                 >
//                   {/* Animated background gradient */}
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
//                   />

//                   {/* Glowing border effect */}
//                   <div
//                     className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl`}
//                   />

//                   <div className="relative p-8">
//                     {/* Header with icon and level badge */}
//                     <div className="flex items-start justify-between mb-6">
//                       <div
//                         className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                       >
//                         {skill.icon}
//                       </div>

//                       <div
//                         className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${themeStyles.filterBg} border border-white/10`}
//                       >
//                         {skillLevelInfo.icon}
//                         {skillLevelInfo.text}
//                       </div>
//                     </div>

//                     {/* Skill name and description */}
//                     <h3
//                       className={`text-2xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:${skill.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${themeStyles.textPrimary}`}
//                     >
//                       {skill.name}
//                     </h3>

//                     <p className={`text-sm mb-6 ${themeStyles.textTertiary}`}>
//                       {skill.description}
//                     </p>

//                     {/* Animated progress bar */}
//                     <div className="mb-6">
//                       <div className="flex justify-between items-center mb-3">
//                         <span
//                           className={`text-sm font-medium ${themeStyles.textSecondary}`}
//                         >
//                           Proficiency
//                         </span>
//                         <span
//                           className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
//                         >
//                           {skill.level}%
//                         </span>
//                       </div>

//                       <div
//                         className={`w-full h-3 rounded-full overflow-hidden ${themeStyles.progressBg}`}
//                       >
//                         <div
//                           className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1500 ease-out shadow-lg relative overflow-hidden`}
//                           style={{
//                             width: isVisible ? `${skill.level}%` : "0%",
//                             transitionDelay: `${index * 100}ms`,
//                           }}
//                         >
//                           {/* Animated shine effect */}
//                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Additional info */}
//                     <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
//                       <div>
//                         <div
//                           className={`text-xs ${themeStyles.textTertiary} mb-1`}
//                         >
//                           Experience
//                         </div>
//                         <div
//                           className={`text-sm font-semibold ${themeStyles.textSecondary}`}
//                         >
//                           {skill.experience}
//                         </div>
//                       </div>
//                       <div>
//                         <div
//                           className={`text-xs ${themeStyles.textTertiary} mb-1`}
//                         >
//                           Projects
//                         </div>
//                         <div
//                           className={`text-sm font-semibold ${themeStyles.textSecondary}`}
//                         >
//                           {skill.projects}+
//                         </div>
//                       </div>
//                     </div>

//                     {/* Hover tooltip */}
//                     {hoveredSkill === index && (
//                       <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/80 text-white text-sm rounded-lg backdrop-blur-sm animate-fadeIn z-10">
//                         Click to view projects
//                         <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45" />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Skills summary */}
//           <div className="mt-20 text-center">
//             <div
//               className={`inline-block p-8 rounded-3xl ${themeStyles.statsBg} backdrop-blur-xl border`}
//             >
//               <div className={`text-lg mb-4 ${themeStyles.textSecondary}`}>
//                 "Constantly learning, always growing, forever passionate about
//                 creating exceptional digital experiences."
//               </div>
//               <div
//                 className={`flex items-center justify-center gap-2 text-sm ${themeStyles.textTertiary}`}
//               >
//                 <Star className="w-4 h-4 text-yellow-500" />
//                 Ready for new challenges
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(180deg);
//           }
//         }

//         @keyframes shimmer {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(-10px) translateX(-50%);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0px) translateX(-50%);
//           }
//         }

//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }

//         .animate-shimmer {
//           animation: shimmer 2s infinite;
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// // Demo component with theme switcher
// export default function SkillsDemo() {
//   return (
//     <ThemeProvider>
//       <div className="min-h-screen transition-all duration-500">
//         <ThemeSwitcher />
//         <Skills />
//       </div>
//     </ThemeProvider>
//   );
// }

// function ThemeSwitcher() {
//   const { currentTheme, toggleTheme, availableThemes } = useTheme();

//   return <div className="fixed top-4 right-4 z-50"></div>;
// }

import {
  Code,
  Palette,
  Smartphone,
  Database,
  Cloud,
  Zap,
  Star,
  TrendingUp,
  Award,
  Target,
  Layers,
  GitBranch,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Skills() {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef();
  const skillRefs = useRef({});

  const skillCategories = {
    frontend: {
      name: "Frontend",
      color: "from-blue-500 to-cyan-500",
      icon: <Code className="w-5 h-5" />,
    },
    backend: {
      name: "Backend",
      color: "from-green-500 to-emerald-500",
      icon: <Database className="w-5 h-5" />,
    },
    design: {
      name: "Design",
      color: "from-purple-500 to-pink-500",
      icon: <Palette className="w-5 h-5" />,
    },
    tools: {
      name: "Tools",
      color: "from-orange-500 to-red-500",
      icon: <Zap className="w-5 h-5" />,
    },
  };

  const skills = [
    {
      name: "React",
      level: 95,
      category: "frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "Component-based UI development",
      experience: "4+ years",
      projects: 25,
    },
    {
      name: "JavaScript",
      level: 92,
      category: "frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      description: "Modern ES6+ development",
      experience: "2+ years",
      projects: 30,
    },
    {
      name: "TypeScript",
      level: 88,
      category: "frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-600",
      description: "Type-safe application development",
      experience: "3+ years",
      projects: 18,
    },
    {
      name: "CSS/SCSS",
      level: 90,
      category: "design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Advanced styling & animations",
      experience: "5+ years",
      projects: 35,
    },
    {
      name: "Node.js",
      level: 85,
      category: "backend",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      description: "Server-side JavaScript",
      experience: "3+ years",
      projects: 15,
    },
    {
      name: "Responsive Design",
      level: 94,
      category: "design",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      description: "Mobile-first development",
      experience: "4+ years",
      projects: 28,
    },
    {
      name: "Git & GitHub",
      level: 89,
      category: "tools",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-gray-400 to-gray-600",
      description: "Version control & collaboration",
      experience: "4+ years",
      projects: 40,
    },
    {
      name: "AWS",
      level: 78,
      category: "backend",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      description: "Cloud infrastructure & deployment",
      experience: "2+ years",
      projects: 12,
    },
    {
      name: "Three.js",
      level: 82,
      category: "frontend",
      icon: <Layers className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
      description: "3D graphics & animations",
      experience: "2+ years",
      projects: 8,
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleSkills((prev) => new Set([...prev, index]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(skillRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getSkillLevel = (level) => {
    if (level >= 90)
      return { text: "Expert", icon: <Award className="w-4 h-4" /> };
    if (level >= 80)
      return { text: "Advanced", icon: <Star className="w-4 h-4" /> };
    if (level >= 70)
      return { text: "Intermediate", icon: <TrendingUp className="w-4 h-4" /> };
    return { text: "Beginner", icon: <Target className="w-4 h-4" /> };
  };

  const averageSkill = Math.round(
    filteredSkills.reduce((acc, skill) => acc + skill.level, 0) /
      filteredSkills.length
  );
  const totalProjects = filteredSkills.reduce(
    (acc, skill) => acc + skill.projects,
    0
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <section id="skills" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-blue-500/10 rounded-full border border-white/10">
                <Zap className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-300">
                  Technical Expertise
                </span>
              </div>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              My{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              A comprehensive toolkit built through years of passionate
              development
            </p>

            {/* Stats overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {[
                {
                  label: "Average Proficiency",
                  value: `${averageSkill}%`,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  label: "Total Projects",
                  value: totalProjects.toString(),
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  label: "Years Experience",
                  value: "5+",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl transition-all duration-500 hover:scale-105 bg-gray-900/60 backdrop-blur-sm border border-gray-800/30"
                >
                  <div
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800/70 text-gray-300 hover:bg-gray-700/70 border border-gray-700/50"
              } backdrop-blur-sm`}
            >
              All Skills
            </button>
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-gray-800/70 text-gray-300 hover:bg-gray-700/70 border border-gray-700/50"
                } backdrop-blur-sm`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill, index) => {
              const isVisible = visibleSkills.has(index);
              const skillLevelInfo = getSkillLevel(skill.level);

              return (
                <div
                  key={`${skill.name}-${activeCategory}`}
                  ref={(el) => (skillRefs.current[index] = el)}
                  data-index={index}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 cursor-pointer bg-gray-900/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl border border-gray-800/50 hover:border-gray-700/80 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Glowing border effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl`}
                  />

                  <div className="relative p-8">
                    {/* Header with icon and level badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {skill.icon}
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-800/70 border border-white/10">
                        {skillLevelInfo.icon}
                        {skillLevelInfo.text}
                      </div>
                    </div>

                    {/* Skill name and description */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-white">
                      {skill.name}
                    </h3>

                    <p className="text-sm mb-6 text-gray-400">
                      {skill.description}
                    </p>

                    {/* Animated progress bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gray-300">
                          Proficiency
                        </span>
                        <span
                          className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full h-3 rounded-full overflow-hidden bg-gray-800/60">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1500 ease-out shadow-lg relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 100}ms`,
                          }}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full animate-pulse" />
                        </div>
                      </div>
                    </div>

                    {/* Additional info */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">
                          Experience
                        </div>
                        <div className="text-sm font-semibold text-gray-300">
                          {skill.experience}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">
                          Projects
                        </div>
                        <div className="text-sm font-semibold text-gray-300">
                          {skill.projects}+
                        </div>
                      </div>
                    </div>

                    {/* Hover tooltip */}
                    {hoveredSkill === index && (
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/80 text-white text-sm rounded-lg backdrop-blur-sm opacity-0 animate-pulse z-10">
                        Click to view projects
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills summary */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-3xl bg-gray-900/60 backdrop-blur-xl border border-gray-800/30">
              <div className="text-lg mb-4 text-gray-300">
                "Constantly learning, always growing, forever passionate about
                creating exceptional digital experiences."
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <Star className="w-4 h-4 text-yellow-500" />
                Ready for new challenges
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
