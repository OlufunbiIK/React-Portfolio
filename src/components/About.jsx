import { useTheme } from "./providers/ThemeContext";
import { useState, useRef, useEffect } from "react";
import image from "../assets/images/IMG_8841.JPG";
import { scrollToSection } from "./utils/ScrollToSection";

export default function About() {
  const { theme, currentTheme, isDarkTheme } = useTheme();
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Theme-specific configurations
  const getThemeStyles = () => {
    switch (currentTheme) {
      case "ocean":
        return {
          gradient: "from-cyan-400 via-blue-500 to-blue-600",
          accent: "text-cyan-400",
          cardBg: "bg-blue-900/30 backdrop-blur-sm border border-blue-400/20",
          cardHover: "hover:bg-blue-800/40 hover:border-cyan-400/30",
          textSecondary: "text-blue-100",
          glowColor: "shadow-cyan-500/20",
          pattern: "bg-gradient-to-br from-cyan-500/5 to-blue-600/5",
        };
      case "forest":
        return {
          gradient: "from-emerald-400 via-green-500 to-teal-600",
          accent: "text-emerald-400",
          cardBg:
            "bg-emerald-900/30 backdrop-blur-sm border border-emerald-400/20",
          cardHover: "hover:bg-emerald-800/40 hover:border-green-400/30",
          textSecondary: "text-emerald-100",
          glowColor: "shadow-emerald-500/20",
          pattern: "bg-gradient-to-br from-emerald-500/5 to-teal-600/5",
        };
      case "galaxy":
        return {
          gradient: "from-purple-400 via-violet-500 to-indigo-600",
          accent: "text-purple-400",
          cardBg:
            "bg-purple-900/30 backdrop-blur-sm border border-purple-400/20",
          cardHover: "hover:bg-purple-800/40 hover:border-violet-400/30",
          textSecondary: "text-purple-100",
          glowColor: "shadow-purple-500/20",
          pattern: "bg-gradient-to-br from-purple-500/5 to-indigo-600/5",
        };
      case "light":
        return {
          gradient: "from-blue-500 to-purple-600",
          accent: "text-blue-600",
          cardBg:
            "bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg",
          cardHover: "hover:bg-white hover:shadow-xl hover:border-blue-300",
          textSecondary: "text-gray-600",
          glowColor: "shadow-blue-500/10",
          pattern: "bg-gradient-to-br from-blue-50 to-purple-50",
        };
      default: // dark
        return {
          gradient: "from-blue-400 via-purple-500 to-pink-600",
          accent: "text-blue-400",
          cardBg: "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50",
          cardHover: "hover:bg-gray-700/60 hover:border-blue-400/30",
          textSecondary: "text-gray-300",
          glowColor: "shadow-blue-500/20",
          pattern: "bg-gradient-to-br from-gray-800/20 to-gray-900/20",
        };
    }
  };

  const themeStyles = getThemeStyles();

  const stats = [
    {
      label: "Years Experience",
      value: "3+",
      icon: "🚀",
      description: "Building amazing web experiences",
    },
    {
      label: "Projects Completed",
      value: "50+",
      icon: "💼",
      description: "From startups to enterprise solutions",
    },
    {
      label: "Technologies",
      value: "20+",
      icon: "⚡",
      description: "Modern tools and frameworks",
    },
    {
      label: "Coffee Consumed",
      value: "∞",
      icon: "☕",
      description: "Fueling late-night coding sessions",
    },
  ];

  const skills = [
    { name: "Frontend Development", level: 95 },
    { name: "React & Next.js", level: 90 },
    { name: "Problem Solving", level: 92 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-20 relative overflow-hidden ${theme.bg}`}
    >
      {/* Animated Background Pattern */}
      <div className={`absolute inset-0 ${themeStyles.pattern} opacity-30`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className={`text-5xl lg:text-6xl font-bold mb-4 ${theme.text}`}>
            About{" "}
            <span
              className={`bg-gradient-to-r ${themeStyles.gradient} bg-clip-text text-transparent`}
            >
              Me
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto bg-gradient-to-r ${themeStyles.gradient} rounded-full`}
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Bio Section */}
            <div className="space-y-6">
              <p
                className={`text-xl leading-relaxed ${themeStyles.textSecondary}`}
              >
                I'm a passionate{" "}
                <span className={themeStyles.accent}>frontend developer</span>{" "}
                with a keen eye for design and a love for creating seamless user
                experiences. With over 3 years of experience in the field, I
                specialize in React, JavaScript, and modern web technologies.
              </p>
              <p
                className={`text-lg leading-relaxed ${themeStyles.textSecondary}`}
              >
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through tech blog posts and community meetups.
              </p>
            </div>

            {/* Skills Progress Bars */}
            <div className="space-y-4">
              <h4 className={`text-xl font-semibold ${theme.text} mb-4`}>
                Core Skills
              </h4>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className={themeStyles.textSecondary}>
                      {skill.name}
                    </span>
                    <span className={themeStyles.accent}>{skill.level}%</span>
                  </div>
                  <div
                    className={`w-full bg-gray-700 rounded-full h-2 ${
                      isDarkTheme ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${themeStyles.gradient} transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${800 + index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer group ${themeStyles.cardBg} ${themeStyles.cardHover} ${themeStyles.glowColor}`}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="text-center space-y-2">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className={`text-2xl font-bold ${themeStyles.accent}`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm font-medium ${theme.text}`}>
                      {stat.label}
                    </div>
                    {hoveredStat === index && (
                      <div
                        className={`text-xs ${themeStyles.textSecondary} mt-2 transform transition-all duration-300`}
                      >
                        {stat.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div
            className={`relative transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Floating Elements */}
            <div
              className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r ${themeStyles.gradient} rounded-full animate-pulse`}
            ></div>
            <div
              className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${themeStyles.gradient} rounded-full animate-pulse delay-1000`}
            ></div>
            <div
              className={`absolute -bottom-4 -left-2 w-4 h-4 bg-gradient-to-r ${themeStyles.gradient} rounded-full animate-pulse delay-500`}
            ></div>

            {/* Main Image Container */}
            <div className="relative group">
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${themeStyles.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              {/* Image Frame */}
              <div
                className={`relative p-2 bg-gradient-to-r ${themeStyles.gradient} rounded-3xl`}
              >
                <img
                  src={image}
                  alt="Profile"
                  className="relative w-full h-[500px] object-cover object-top translate-y-4 rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlay Pattern */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Badge */}
              <div
                className={`absolute -bottom-6 -right-6 px-6 py-3 ${themeStyles.cardBg} rounded-2xl border ${themeStyles.glowColor} backdrop-blur-sm`}
              >
                <div className="text-center">
                  <div
                    className={`text-sm font-semibold ${themeStyles.accent}`}
                  >
                    Available for
                  </div>
                  <div className={`text-xs ${themeStyles.textSecondary}`}>
                    New Projects
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-1 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div
            className={`inline-flex flex-col md:flex-row items-center gap-4 px-8 py-4 ${themeStyles.cardBg} rounded-2xl backdrop-blur-sm`}
          >
            <span className={`text-lg ${themeStyles.textSecondary}`}>
              Ready to bring your ideas to life?
            </span>
            <button
              onClick={() => scrollToSection("footer")}
              className={`px-6 py-2 bg-gradient-to-r ${themeStyles.gradient} text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
