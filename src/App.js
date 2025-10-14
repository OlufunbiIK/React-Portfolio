import { useEffect } from "react";
import "./App.css";
import "./index.css";
import { HeroSection } from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Skills from "./components/Skills";
import About from "./components/About";
import { ThemeProvider, useTheme } from "./components/providers/ThemeContext";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// ❌ You used <Route path="/blog" element={<Blog />} /> but didn’t import React Router or Blog
// So either remove it or properly configure React Router if you have routes

// ✅ Background Pattern Component
function BackgroundPattern({ theme }) {
  const getPatternStyles = () => {
    switch (theme.name) {
      case "light":
        return {
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.1) 2px, transparent 0),
            radial-gradient(circle at 75px 75px, rgba(16, 185, 129, 0.1) 2px, transparent 0),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 0),
            linear-gradient(0deg, rgba(16, 185, 129, 0.05) 1px, transparent 0)
          `,
          backgroundSize: "100px 100px, 100px 100px, 50px 50px, 50px 50px",
        };
      case "dark":
        return {
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(99, 102, 241, 0.15) 2px, transparent 0),
            radial-gradient(circle at 75px 75px, rgba(34, 197, 94, 0.15) 2px, transparent 0),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 0),
            linear-gradient(0deg, rgba(34, 197, 94, 0.1) 1px, transparent 0)
          `,
          backgroundSize: "100px 100px, 100px 100px, 50px 50px, 50px 50px",
        };
      case "ocean":
        return {
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
            conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(6, 182, 212, 0.1) 90deg, transparent 180deg),
            linear-gradient(135deg, transparent 25%, rgba(8, 145, 178, 0.1) 25%, rgba(8, 145, 178, 0.1) 50%, transparent 50%, transparent 75%, rgba(8, 145, 178, 0.1) 75%)
          `,
          backgroundSize: "400px 400px, 600px 600px, 200px 200px, 100px 100px",
        };
      case "forest":
        return {
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            linear-gradient(60deg, transparent 30%, rgba(6, 78, 59, 0.1) 30%, rgba(6, 78, 59, 0.1) 70%, transparent 70%)
          `,
          backgroundSize: "300px 300px, 500px 500px, 150px 150px, 80px 80px",
        };
      case "sunset":
        return {
          backgroundImage: `
            radial-gradient(ellipse at 30% 30%, rgba(251, 146, 60, 0.2) 0%, transparent 70%),
            radial-gradient(ellipse at 70% 70%, rgba(239, 68, 68, 0.15) 0%, transparent 70%),
            conic-gradient(from 0deg at 50% 50%, rgba(147, 51, 234, 0.1), rgba(251, 146, 60, 0.1), rgba(239, 68, 68, 0.1), rgba(147, 51, 234, 0.1)),
            repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(251, 146, 60, 0.05) 40px, rgba(251, 146, 60, 0.05) 80px)
          `,
          backgroundSize: "600px 600px, 400px 400px, 300px 300px, 120px 120px",
        };
      case "galaxy":
        return {
          backgroundImage: `
            radial-gradient(ellipse at 20% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(79, 70, 229, 0.1) 0%, transparent 30%),
            conic-gradient(from 180deg at 50% 50%, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1), rgba(79, 70, 229, 0.1))
          `,
          backgroundSize: "500px 500px, 700px 700px, 300px 300px, 400px 400px",
        };
      default:
        return {};
    }
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 ease-in-out"
      style={getPatternStyles()}
    />
  );
}

// ✅ Animated Particles Component
function AnimatedParticles({ theme }) {
  if (theme.name === "light" || theme.name === "dark") return null;

  const getParticleColor = () => {
    switch (theme.name) {
      case "ocean":
        return "rgba(56, 189, 248, 0.4)";
      case "forest":
        return "rgba(34, 197, 94, 0.4)";
      case "sunset":
        return "rgba(251, 146, 60, 0.4)";
      case "galaxy":
        return "rgba(168, 85, 247, 0.4)";
      default:
        return "rgba(99, 102, 241, 0.4)";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            backgroundColor: getParticleColor(),
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 2 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Main Content Wrapper (for the homepage)
function HomePage() {
  const { theme, setActiveSection } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <div
      className={`App min-h-screen transition-all duration-500 relative ${theme.bg} ${theme.text}`}
    >
      <BackgroundPattern theme={theme} />
      <AnimatedParticles theme={theme} />

      <div className="relative z-10">
        <NavBar />
        <HeroSection />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

// Root App Component
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
