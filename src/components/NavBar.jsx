import { useTheme } from "./providers/ThemeContext";
import {
  Moon,
  Sun,
  Home,
  User,
  Code,
  FolderOpen,
  Mail,
  Palette,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import FunbiDevLogo from "./utils/Logo";

export default function NavBar() {
  const {
    currentTheme,
    theme,
    isDarkTheme,
    toggleTheme,
    setTheme,
    availableThemes,
  } = useTheme();
  const { activeSection } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = [
    { name: "home", icon: Home },
    { name: "about", icon: User },
    { name: "skills", icon: Code },
    { name: "projects", icon: FolderOpen },
    { name: "contact", icon: Mail },
  ];

  // Track mouse position for surreal effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);

    let element = document.getElementById(sectionId);

    if (element) {
      const navOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset - navOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    } else {
      setTimeout(() => {
        element = document.getElementById(sectionId);
        if (element) {
          const navOffset = 80;
          const elementPosition =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navOffset;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        } else {
          console.warn(`Element with id "${sectionId}" not found after retry`);

          const fallbackPositions = {
            home: 0,
            about: window.innerHeight * 0.8,
            skills: window.innerHeight * 1.6,
            projects: window.innerHeight * 2.4,
            contact: document.documentElement.scrollHeight - window.innerHeight,
          };

          if (fallbackPositions[sectionId] !== undefined) {
            window.scrollTo({
              top: fallbackPositions[sectionId],
              behavior: "smooth",
            });
          }
        }
      }, 100);
    }
  };

  const getThemeIcon = (themeName) => {
    switch (themeName) {
      case "dark":
        return "🌙";
      case "light":
        return "☀️";
      case "ocean":
        return "🌊";
      case "forest":
        return "🌲";
      case "galaxy":
        return "🌌";
      default:
        return "🎨";
    }
  };

  const getNavbarStyles = () => {
    switch (currentTheme) {
      case "light":
        return "bg-white/95 border-gray-200 text-black";
      case "dark":
      case "ocean":
      case "forest":
      case "galaxy":
      default:
        return "bg-gray-900/95 border-gray-700 text-white";
    }
  };

  const getSurrealGradient = (index, isActive = false) => {
    const gradients = [
      "from-purple-500 via-pink-500 to-red-500",
      "from-blue-500 via-purple-500 to-pink-500",
      "from-green-500 via-blue-500 to-purple-500",
      "from-yellow-500 via-red-500 to-pink-500",
      "from-indigo-500 via-purple-500 to-pink-500",
    ];

    if (isActive) {
      return "from-cyan-400 via-purple-500 to-pink-500";
    }

    return gradients[index % gradients.length];
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${getNavbarStyles()}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo Section - Responsive sizing */}
          <div className="text-base sm:text-lg lg:text-xl font-bold transition-colors duration-300 flex items-center space-x-1 sm:space-x-2 flex-shrink-0 min-w-0">
            <span className="text-lg sm:text-xl lg:text-2xl animate-bounce flex-shrink-0">
              {getThemeIcon(currentTheme)}
            </span>
            <div
              className={`${
                currentTheme === "light" ? "text-black" : "text-white"
              } relative flex-shrink-0`}
            >
              <FunbiDevLogo
                currentTheme={currentTheme}
                className="cursor-pointer w-auto max-w-[120px] sm:max-w-[150px] lg:max-w-none"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on smaller screens */}
          <div className="hidden xl:flex items-center space-x-1 flex-1 justify-center max-w-2xl">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                  className={`relative flex items-center space-x-1.5 lg:space-x-2 px-2 lg:px-4 py-2 rounded-xl capitalize transition-all duration-500 group overflow-hidden transform hover:scale-105 hover:-translate-y-1 text-xs lg:text-sm ${
                    isActive
                      ? "text-white shadow-2xl shadow-purple-500/50 scale-105"
                      : currentTheme === "light"
                      ? "text-black hover:text-white"
                      : "text-white hover:text-white"
                  }`}
                  style={{
                    transform: isActive
                      ? `translateY(-2px) scale(1.05) rotateX(${
                          Math.sin(Date.now() * 0.002) * 2
                        }deg)`
                      : undefined,
                  }}
                >
                  {/* Surreal morphing background */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-700 transform ${
                      isActive
                        ? `bg-gradient-to-r ${getSurrealGradient(
                            index,
                            true
                          )} scale-100 opacity-100 animate-pulse`
                        : `bg-gradient-to-r ${getSurrealGradient(
                            index
                          )} scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-90 group-hover:rotate-3`
                    }`}
                  ></div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: "20%",
                        top: "30%",
                        animationDelay: "0ms",
                      }}
                    ></div>
                    <div
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        right: "25%",
                        top: "60%",
                        animationDelay: "200ms",
                      }}
                    ></div>
                    <div
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: "60%",
                        bottom: "40%",
                        animationDelay: "400ms",
                      }}
                    ></div>
                  </div>

                  {/* Liquid wave effect */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-1000 ${
                      isActive
                        ? "bg-transparent"
                        : "bg-transparent group-hover:bg-white/20"
                    }`}
                    style={{
                      clipPath: isActive
                        ? `circle(50% at ${
                            50 + Math.sin(Date.now() * 0.003) * 10
                          }% ${50 + Math.cos(Date.now() * 0.003) * 10}%)`
                        : undefined,
                    }}
                  ></div>

                  {/* Icon + Label with morphing effects */}
                  <div className="relative z-10 flex items-center space-x-1.5 lg:space-x-2">
                    <Icon
                      className={`w-3.5 h-3.5 lg:w-4 lg:h-4 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 flex-shrink-0 ${
                        isActive
                          ? "drop-shadow-lg text-white animate-pulse"
                          : currentTheme === "light"
                          ? "text-black group-hover:text-white"
                          : "text-white"
                      }`}
                      style={{
                        filter: isActive
                          ? `hue-rotate(${
                              Math.sin(Date.now() * 0.005) * 60
                            }deg) saturate(150%)`
                          : undefined,
                      }}
                    />
                    <span
                      className={`text-xs lg:text-sm font-medium transition-all duration-500 transform group-hover:scale-105 whitespace-nowrap ${
                        isActive
                          ? "drop-shadow-lg font-bold text-white"
                          : currentTheme === "light"
                          ? "text-black group-hover:text-white"
                          : "text-white"
                      }`}
                      style={{
                        textShadow: isActive
                          ? `0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)`
                          : undefined,
                      }}
                    >
                      {item.name}
                    </span>
                  </div>

                  {/* Quantum dot indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <div
                        className="w-2 h-2 lg:w-3 lg:h-3 rounded-full shadow-2xl animate-bounce"
                        style={{
                          background: `radial-gradient(circle, 
                            hsl(${(Date.now() * 0.1) % 360}, 70%, 60%) 0%, 
                            hsl(${
                              (Date.now() * 0.1 + 60) % 360
                            }, 70%, 60%) 50%, 
                            hsl(${
                              (Date.now() * 0.1 + 120) % 360
                            }, 70%, 60%) 100%)`,
                          boxShadow: `0 0 20px hsl(${
                            (Date.now() * 0.1) % 360
                          }, 70%, 60%)`,
                        }}
                      ></div>
                      <div className="absolute inset-0 rounded-full bg-white opacity-50 animate-ping"></div>
                    </div>
                  )}

                  {/* Surreal shimmer wave */}
                  {(isActive || undefined) && (
                    <div
                      className="absolute inset-0 rounded-xl opacity-30"
                      style={{
                        background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)`,
                        transform: `translateX(${
                          -100 + ((Date.now() * 0.1) % 300)
                        }%) skewX(-20deg)`,
                        transition: "none",
                      }}
                    ></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Tablet Navigation - Visible on medium screens */}
          <div className="hidden lg:flex xl:hidden items-center justify-center flex-1 px-4">
            <div className="flex items-center space-x-1 bg-black/10 backdrop-blur-sm rounded-full px-2 py-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.name)}
                    className={`relative p-2.5 rounded-full transition-all duration-300 group ${
                      isActive
                        ? "text-white scale-110"
                        : currentTheme === "light"
                        ? "text-black hover:text-white"
                        : "text-white hover:text-white"
                    }`}
                    title={item.name}
                  >
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-500 ${
                        isActive
                          ? `bg-gradient-to-r ${getSurrealGradient(
                              index,
                              true
                            )} opacity-90`
                          : `bg-gradient-to-r ${getSurrealGradient(
                              index
                            )} opacity-0 group-hover:opacity-70 scale-75 group-hover:scale-100`
                      }`}
                    ></div>
                    <Icon
                      className={`w-4 h-4 transition-all duration-300 relative z-10 ${
                        isActive ? "drop-shadow-lg" : ""
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0">
            {/* Enhanced Quick theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 sm:p-2 rounded-xl transition-all duration-500 flex items-center justify-center transform hover:scale-110 hover:rotate-180 active:scale-95 relative overflow-hidden group ${
                currentTheme === "light" ? "text-black" : "text-white"
              }`}
              title="Quick theme switch"
            >
              {/* Morphing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-500 scale-50 group-hover:scale-100 animate-pulse"></div>

              <div className="relative z-10 transition-all duration-500 transform group-hover:scale-110">
                {isDarkTheme ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                )}
              </div>
            </button>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-1.5 sm:p-2 rounded-xl transition-all duration-500 transform hover:scale-110 active:scale-95 relative overflow-hidden group ${
                currentTheme === "light" ? "text-black" : "text-white"
              }`}
            >
              {/* Morphing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 scale-75 group-hover:scale-100"></div>

              <div
                className={`w-4 h-4 sm:w-5 sm:h-5 flex flex-col justify-center space-y-0.5 sm:space-y-1 transition-all duration-500 relative z-10 ${
                  isMenuOpen ? "rotate-90" : "group-hover:rotate-45"
                }`}
              >
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-500 ${
                    isMenuOpen
                      ? "rotate-45 translate-y-1"
                      : "group-hover:scale-110"
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-500 ${
                    isMenuOpen ? "opacity-0 scale-0" : "group-hover:scale-75"
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-500 ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-1"
                      : "group-hover:scale-110"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-2 bg-white/10 backdrop-blur-xl border-t border-white/20 transition-all duration-500 animate-in slide-in-from-top max-h-[70vh] overflow-y-auto">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                  className={`relative flex items-center space-x-3 w-full text-left px-3 sm:px-4 py-3 sm:py-4 mx-1 sm:mx-2 my-1 capitalize transition-all duration-500 rounded-xl overflow-hidden transform hover:scale-105 hover:-translate-y-1 group ${
                    isActive
                      ? "text-white shadow-2xl shadow-purple-500/50"
                      : currentTheme === "light"
                      ? "text-black hover:text-white"
                      : "text-white"
                  }`}
                >
                  {/* Surreal background */}
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-700 ${
                      isActive
                        ? `bg-gradient-to-r ${getSurrealGradient(
                            index,
                            true
                          )} opacity-90`
                        : `bg-gradient-to-r ${getSurrealGradient(
                            index
                          )} opacity-0 group-hover:opacity-80 scale-75 group-hover:scale-110`
                    }`}
                  ></div>

                  {/* Floating elements */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: `${15 + index * 8}%`,
                        top: `${25 + index * 6}%`,
                        animationDelay: `${index * 150}ms`,
                      }}
                    ></div>
                    <div
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        right: `${20 + index * 5}%`,
                        bottom: `${30 + index * 4}%`,
                        animationDelay: `${(index + 2) * 150}ms`,
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10 flex items-center space-x-3 w-full">
                    <Icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 flex-shrink-0 ${
                        isActive
                          ? "drop-shadow-lg text-white"
                          : currentTheme === "light"
                          ? "text-black group-hover:text-white"
                          : "text-white"
                      }`}
                    />
                    <span
                      className={`text-sm sm:text-base font-semibold transition-all duration-500 flex-grow ${
                        isActive
                          ? "drop-shadow-lg text-white"
                          : currentTheme === "light"
                          ? "text-black group-hover:text-white"
                          : "text-white"
                      }`}
                    >
                      {item.name}
                    </span>

                    {isActive && (
                      <div
                        className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-bounce shadow-lg flex-shrink-0"
                        style={{
                          background: `radial-gradient(circle, white, rgba(255,255,255,0.5))`,
                          boxShadow: `0 0 15px rgba(255,255,255,0.8)`,
                        }}
                      ></div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Enhanced Click outside to close dropdown */}
      {(isThemeDropdownOpen || isMenuOpen) && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/10 lg:hidden"
          onClick={() => {
            setIsThemeDropdownOpen(false);
            setIsMenuOpen(false);
          }}
        />
      )}
    </nav>
  );
}
