import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Mock theme context
const useTheme = () => ({ darkMode: true });

// Enhanced projects data with more variety
const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    color: "from-blue-500 to-purple-600",
    accent: "bg-blue-500",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates and team features.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
    color: "from-emerald-500 to-teal-600",
    accent: "bg-emerald-500",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather app with forecasts, maps, and location-based suggestions.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    tech: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    live: "#",
    color: "from-amber-500 to-orange-600",
    accent: "bg-amber-500",
  },
  {
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media performance with beautiful visualizations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tech: ["Next.js", "D3.js", "PostgreSQL"],
    github: "#",
    live: "#",
    color: "from-pink-500 to-rose-600",
    accent: "bg-pink-500",
  },
  {
    title: "AI Chat Interface",
    description:
      "Modern chat interface with AI integration and real-time messaging capabilities.",
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop",
    tech: ["React", "Socket.io", "OpenAI"],
    github: "#",
    live: "#",
    color: "from-violet-500 to-indigo-600",
    accent: "bg-violet-500",
  },
  {
    title: "Portfolio Website",
    description:
      "A stunning portfolio website with 3D animations and interactive elements.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    tech: ["Three.js", "React", "GSAP"],
    github: "#",
    live: "#",
    color: "from-cyan-500 to-blue-600",
    accent: "bg-cyan-500",
  },
];

export default function Project() {
  const { darkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const autoPlayRef = useRef();
  const sectionRef = useRef();

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        nextProject();
      }, 4000);
    }

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, currentIndex]);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
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
    if (Math.abs(diff) > 2) {
      return diff > 0 ? 300 : -300;
    }
    return diff * 120;
  };

  const getSlideScale = (index) => {
    const distance = Math.abs(index - currentIndex);
    if (index === currentIndex) return 1.15;
    if (distance === 1) return 0.9;
    if (distance === 2) return 0.75;
    return 0.6;
  };

  const getSlideOpacity = (index) => {
    const distance = Math.abs(index - currentIndex);
    if (index === currentIndex) return 1;
    if (distance === 1) return 0.8;
    if (distance === 2) return 0.4;
    return 0.1;
  };

  const getSlideBlur = (index) => {
    const distance = Math.abs(index - currentIndex);
    return distance * 2;
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
        className="py-20 overflow-hidden min-h-screen relative"
      >
        <div className="max-w-7xl mx-auto px-6 min-h-screen">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Featured</span>{" "}
              <span className="text-blue-500">Projects</span>
            </h2>

            <p
              className={`text-xl mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Crafting digital experiences that matter
            </p>

            {/* Enhanced controls */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300"
                    : "bg-white/50 hover:bg-gray-100/50 text-gray-700"
                } backdrop-blur-sm border border-white/10`}
              >
                {isAutoPlay ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {isAutoPlay ? "Pause" : "Play"}
              </button>

              <div
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Use ← → arrow keys or spacebar to control
              </div>
            </div>

            {/* Project counter */}
            <div
              className={`inline-block px-4 py-2 rounded-full ${currentProject.accent} text-white text-sm font-medium`}
            >
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </div>
          </div>

          <div className="flex flex-col">
            {/* Enhanced Cinematic Slider */}
            <div className="relative h-[600px] flex items-center justify-center mb-12">
              <div className="relative w-full max-w-5xl">
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
                      className={`group rounded-3xl overflow-hidden transition-all duration-700 mx-auto max-w-lg relative ${
                        darkMode
                          ? "bg-gray-900/80 backdrop-blur-xl border border-gray-800/50"
                          : "bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl"
                      } ${
                        index === currentIndex
                          ? "shadow-[0_0_80px_rgba(0,0,0,0.3)]"
                          : ""
                      }`}
                      style={{
                        transform:
                          index === currentIndex
                            ? `translateY(${mousePosition.y * 5}px) rotateX(${
                                mousePosition.y * 2
                              }deg) rotateY(${mousePosition.x * 2}deg)`
                            : "none",
                      }}
                    >
                      {/* Animated border for active project */}
                      {index === currentIndex && (
                        <div
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-20 animate-pulse`}
                        />
                      )}

                      <div className="relative overflow-hidden rounded-t-3xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-64 object-cover transition-all duration-700 ${
                            index === currentIndex ? "scale-110" : "scale-100"
                          }`}
                          style={{
                            transform:
                              index === currentIndex
                                ? `scale(1.1) translate(${
                                    mousePosition.x * 5
                                  }px, ${mousePosition.y * 5}px)`
                                : "scale(1)",
                          }}
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`}
                        />

                        {/* Floating elements */}
                        <div className="absolute top-4 left-4">
                          <div
                            className={`w-3 h-3 ${project.accent} rounded-full animate-pulse`}
                          />
                        </div>

                        <div className="absolute top-4 right-4">
                          <div
                            className={`px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm border border-white/20`}
                          >
                            {project.tech.length} Tech
                          </div>
                        </div>

                        {/* Live indicator for active project */}
                        {index === currentIndex && (
                          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-white text-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Live
                          </div>
                        )}
                      </div>

                      <div className="p-8">
                        <h3
                          className={`text-2xl font-bold mb-3 transition-all duration-500 ${
                            darkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`mb-6 text-base leading-relaxed ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {project.description}
                        </p>

                        {/* Enhanced tech stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                                darkMode
                                  ? "bg-gray-800/60 text-gray-300 border border-gray-700/50"
                                  : "bg-gray-50 text-gray-700 border border-gray-200"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Enhanced action buttons */}
                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-medium ${
                              darkMode
                                ? "bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 border border-gray-700/50"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
                            }`}
                          >
                            <Github className="w-5 h-5" />
                            Code
                          </a>
                          <a
                            href={project.live}
                            className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-medium shadow-lg hover:shadow-xl`}
                          >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Navigation Buttons */}
              <button
                onClick={prevProject}
                disabled={isTransitioning}
                className={`absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300 hover:scale-110 z-30 disabled:opacity-50 disabled:cursor-not-allowed ${
                  darkMode
                    ? "bg-gray-900/80 hover:bg-gray-800/80 text-white border border-gray-800/50"
                    : "bg-white/80 hover:bg-gray-50/80 text-gray-800 border border-white/50"
                } backdrop-blur-xl shadow-2xl hover:shadow-3xl`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextProject}
                disabled={isTransitioning}
                className={`absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full transition-all duration-300 hover:scale-110 z-30 disabled:opacity-50 disabled:cursor-not-allowed ${
                  darkMode
                    ? "bg-gray-900/80 hover:bg-gray-800/80 text-white border border-gray-800/50"
                    : "bg-white/80 hover:bg-gray-50/80 text-gray-800 border border-white/50"
                } backdrop-blur-xl shadow-2xl hover:shadow-3xl`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Enhanced Progress Indicators */}
            <div className="flex justify-center gap-4 mb-8">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  disabled={isTransitioning}
                  className={`relative overflow-hidden rounded-full transition-all duration-500 hover:scale-125 disabled:cursor-not-allowed ${
                    index === currentIndex ? "w-12 h-4" : "w-4 h-4 hover:w-8"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? `bg-gradient-to-r ${project.color}`
                        : darkMode
                        ? "bg-gray-600 hover:bg-gray-500"
                        : "bg-gray-300 hover:bg-gray-400"
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

            {/* Project Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
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
                  className={`text-center p-6 rounded-2xl transition-all duration-500 ${
                    darkMode
                      ? "bg-gray-900/40 border border-gray-800/50"
                      : "bg-white/40 border border-white/50"
                  } backdrop-blur-sm hover:scale-105`}
                >
                  <div
                    className={`text-2xl font-bold mb-2 ${
                      index === 2
                        ? `bg-gradient-to-r ${currentProject.color} bg-clip-text text-transparent`
                        : darkMode
                        ? "text-white"
                        : "text-gray-800"
                    }`}
                  >
                    {typeof stat.value === "string"
                      ? stat.value
                      : stat.value.toString().padStart(2, "0")}
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
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
