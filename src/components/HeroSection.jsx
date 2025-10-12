import React, { useEffect, useState, useRef } from "react";
import {
  Github,
  Mail,
  Linkedin,
  ArrowRight,
  Download,
  MapPin,
  Sparkles,
  Code,
  Palette,
  Zap,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "./providers/ThemeContext";
import { scrollToSection } from "./utils/ScrollToSection";

// Particle component for animated background effects
const Particle = ({ theme, index }) => {
  const particleRef = useRef(null);

  useEffect(() => {
    const particle = particleRef.current;
    if (!particle) return;

    const animateParticle = () => {
      const duration = 3000 + index * 200;
      const delay = index * 100;

      particle.style.animationDuration = `${duration}ms`;
      particle.style.animationDelay = `${delay}ms`;
    };

    animateParticle();
  }, [index]);

  const getParticleColor = () => {
    switch (theme) {
      case "ocean":
        return "bg-cyan-400/30";
      case "forest":
        return "bg-emerald-400/30";
      case "galaxy":
        return "bg-purple-400/30";
      case "dark":
        return "bg-blue-400/30";
      default:
        return "bg-gray-400/30";
    }
  };

  return (
    <div
      ref={particleRef}
      className={`absolute w-2 h-2 ${getParticleColor()} rounded-full animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  );
};

// Floating icons component
const FloatingIcon = ({ icon: Icon, delay, theme }) => {
  const getIconColor = () => {
    switch (theme) {
      case "ocean":
        return "text-cyan-400";
      case "forest":
        return "text-emerald-400";
      case "galaxy":
        return "text-purple-400";
      case "dark":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div
      className={`absolute opacity-20 ${getIconColor()}`}
      style={{
        animation: `floatSlow 6s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
      }}
    >
      <Icon className="w-8 h-8" />
    </div>
  );
};

export const HeroSection = () => {
  const { currentTheme, theme, isDarkTheme } = useTheme();
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["Frontend Developer", "React Specialist", "Web Creator"];

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypedText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex, words]);

  const getThemeSpecificStyles = () => {
    switch (currentTheme) {
      case "ocean":
        return {
          gradient: "from-cyan-400 via-blue-500 to-indigo-600",
          accent: "text-cyan-400",
          glow: "shadow-cyan-500/25",
          particles: "bg-cyan-400/10",
        };
      case "forest":
        return {
          gradient: "from-emerald-400 via-green-500 to-teal-600",
          accent: "text-emerald-400",
          glow: "shadow-emerald-500/25",
          particles: "bg-emerald-400/10",
        };
      case "galaxy":
        return {
          gradient: "from-purple-400 via-pink-500 to-indigo-600",
          accent: "text-purple-400",
          glow: "shadow-purple-500/25",
          particles: "bg-purple-400/10",
        };
      case "light":
        return {
          gradient: "from-blue-500 via-purple-500 to-pink-600",
          accent: "text-blue-600",
          glow: "shadow-blue-500/25",
          particles: "bg-blue-400/10",
        };
      default:
        return {
          gradient: "from-blue-400 via-purple-500 to-cyan-600",
          accent: "text-blue-400",
          glow: "shadow-blue-500/25",
          particles: "bg-blue-400/10",
        };
    }
  };

  const themeStyles = getThemeSpecificStyles();

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) translateX(10px);
            opacity: 0.5;
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .gradient-text {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        .typing-cursor::after {
          content: "|";
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>

      <section
        id="home"
        className={`relative pt-20 min-h-screen flex items-center overflow-hidden ${theme.bg}`}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <Particle key={i} theme={currentTheme} index={i} />
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingIcon icon={Code} delay={0} theme={currentTheme} />
          <FloatingIcon icon={Palette} delay={1} theme={currentTheme} />
          <FloatingIcon icon={Zap} delay={2} theme={currentTheme} />
          <FloatingIcon icon={Sparkles} delay={3} theme={currentTheme} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Welcome Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                  isDarkTheme
                    ? "bg-white/5 border-white/10 backdrop-blur-sm"
                    : "bg-black/5 border-black/10 backdrop-blur-sm"
                }`}
              >
                <Sparkles className={`w-4 h-4 ${themeStyles.accent}`} />
                <span className={`text-sm ${theme.text}`}>
                  Welcome to my portfolio
                </span>
              </div>

              {/* Main Heading with Typing Effect */}
              <div className="space-y-6">
                <h1
                  className={`text-5xl lg:text-7xl font-bold ${theme.text} leading-tight`}
                >
                  <span className="block">Hi, I'm</span>
                  <span className="block">
                    <span
                      className={`bg-gradient-to-r ${themeStyles.gradient} bg-clip-text text-transparent gradient-text`}
                    >
                      Olufunbi
                    </span>
                  </span>
                </h1>

                {/* Animated Role Text */}
                <div className="h-16 flex items-center">
                  <h2
                    className={`text-2xl lg:text-4xl font-semibold ${themeStyles.accent} typing-cursor`}
                  >
                    {typedText}
                  </h2>
                </div>

                <p
                  className={`text-xl lg:text-2xl leading-relaxed max-w-2xl ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Transforming ideas into stunning digital experiences with
                  cutting-edge technologies, pixel-perfect design, and
                  performance-driven solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`group relative px-8 py-4 bg-gradient-to-r ${themeStyles.gradient} rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl ${themeStyles.glow} flex items-center justify-center gap-2 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Explore My Work</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>

                <a
                  href="/Olufunbi_Ibrahim_Portfolio.pdf"
                  download="Olufunbi_Ibrahim_Resume.pdf"
                  className={`group px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm ${
                    isDarkTheme
                      ? "border-white/20 hover:border-white/40 hover:bg-white/5"
                      : "border-black/20 hover:border-black/40 hover:bg-black/5"
                  }`}
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span className={theme.text}>Download Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/OlufunbiIK/",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "linkedin.com/in/olufunbi-ibrahim-2bb29922a",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:olufunbiibrahim@gmail.com",
                    label: "Email",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`group relative p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
                      isDarkTheme
                        ? "bg-white/5 hover:bg-white/10 border border-white/10"
                        : "bg-black/5 hover:bg-black/10 border border-black/10"
                    }`}
                  >
                    <social.icon
                      className={`w-6 h-6 ${theme.text} group-hover:${themeStyles.accent} transition-colors`}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div className="relative lg:ml-auto">
              {/* Decorative Elements */}
              <div
                className={`absolute -inset-4 bg-gradient-to-r ${themeStyles.gradient} rounded-3xl opacity-20 blur-xl animate-pulse`}
              ></div>

              <div
                className={`relative backdrop-blur-xl rounded-3xl border p-8 ${
                  isDarkTheme
                    ? "bg-white/5 border-white/10"
                    : "bg-white/80 border-white/20 shadow-2xl"
                }`}
              >
                {/* Status Indicator */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-5 h-5 ${themeStyles.accent}`} />
                    <span className={`font-medium ${theme.text}`}>
                      Available for new projects
                    </span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      label: "Projects",
                      value: "25+",
                      color: "text-cyan-400",
                      icon: Code,
                    },
                    {
                      label: "Experience",
                      value: "3+",
                      color: "text-purple-400",
                      icon: Zap,
                    },
                    {
                      label: "Happy Clients",
                      value: "20+",
                      color: "text-green-400",
                      icon: Sparkles,
                    },
                    {
                      label: "Technologies",
                      value: "15+",
                      color: "text-orange-400",
                      icon: Palette,
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className={`text-center p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                        isDarkTheme ? "bg-white/5" : "bg-black/5"
                      }`}
                    >
                      <stat.icon
                        className={`w-6 h-6 ${stat.color} mx-auto mb-2`}
                      />
                      <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div
                        className={`text-sm ${
                          isDarkTheme ? "text-gray-400" : "text-gray-600"
                        } font-medium`}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills Preview */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className={`text-lg font-semibold ${theme.text} mb-4`}>
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Next.js", "Tailwind"].map(
                      (tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-sm rounded-full ${
                            isDarkTheme
                              ? "bg-white/10 text-gray-300"
                              : "bg-black/10 text-gray-700"
                          } transition-all duration-300 hover:scale-105`}
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className={`w-6 h-6 ${themeStyles.accent}`} />
          </div>
        </div>
      </section>
    </>
  );
};
