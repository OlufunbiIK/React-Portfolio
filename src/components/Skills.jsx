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
      projects: 10,
    },
    {
      name: "JavaScript",
      level: 92,
      category: "frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      description: "Modern ES6+ development",
      experience: "2+ years",
      projects: 15,
    },
    {
      name: "TypeScript",
      level: 88,
      category: "frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-600 to-indigo-600",
      description: "Type-safe application development",
      experience: "3+ years",
      projects: 8,
    },
    {
      name: "CSS/SCSS",
      level: 90,
      category: "design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Advanced styling & animations",
      experience: "3+ years",
      projects: 15,
    },
    {
      name: "Node.js",
      level: 85,
      category: "backend",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      description: "Server-side JavaScript",
      experience: "2+ years",
      projects: 10,
    },
    {
      name: "Responsive Design",
      level: 94,
      category: "design",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      description: "Mobile-first development",
      experience: "2+ years",
      projects: 15,
    },
    {
      name: "Git & GitHub",
      level: 89,
      category: "tools",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-gray-400 to-gray-600",
      description: "Version control & collaboration",
      experience: "5+ years",
      projects: 82,
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
              My
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
                  value: "4+",
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
