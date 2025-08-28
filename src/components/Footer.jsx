import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";
import { useTheme } from "./providers/ThemeContext";

export default function Footer() {
  const { darkMode } = useTheme();

  // Dynamic content - you can move this to props or a config file
  const footerData = {
    name: "Olufunbi IK",
    year: new Date().getFullYear(),
    tagline: "Building digital experiences with passion",
    social: [
      {
        name: "GitHub",
        icon: <Github className="w-5 h-5" />,
        href: "https://github.com/OlufunbiIK/",
        color: "hover:text-purple-400",
      },
      {
        name: "LinkedIn",
        icon: <Linkedin className="w-5 h-5" />,
        href: "linkedin.com/in/olufunbi-ibrahim-2bb29922a",
        color: "hover:text-blue-400",
      },
      {
        name: "Email",
        icon: <Mail className="w-5 h-5" />,
        href: "mailto:your.email@example.com",
        color: "hover:text-green-400",
      },
    ],
    quickLinks: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#blog" },
    ],
  };

  const baseClasses = {
    footer: `py-12 border-t transition-all duration-300 ${
      darkMode
        ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
        : "bg-white/80 border-gray-200 backdrop-blur-sm"
    }`,
    container: "max-w-6xl mx-auto px-6",
    text: {
      primary: darkMode ? "text-gray-100" : "text-gray-900",
      secondary: darkMode ? "text-gray-400" : "text-gray-600",
      muted: darkMode ? "text-gray-500" : "text-gray-500",
    },
    links: {
      base: `transition-all duration-300 hover:scale-105 ${
        darkMode
          ? "text-gray-400 hover:text-white"
          : "text-gray-600 hover:text-gray-900"
      }`,
      social:
        "p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg",
      quick: `text-sm transition-colors duration-200 ${
        darkMode
          ? "text-gray-400 hover:text-gray-200"
          : "text-gray-600 hover:text-gray-800"
      }`,
    },
  };

  return (
    <footer id="footer" className={baseClasses.footer}>
      <div className={baseClasses.container}>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${baseClasses.text.primary}`}>
              {footerData.name}
            </h3>
            <p
              className={`text-sm leading-relaxed ${baseClasses.text.secondary}`}
            >
              {footerData.tagline}
            </p>
            <div className="flex items-center gap-2">
              <span className={`text-xs ${baseClasses.text.muted}`}>
                Made with
              </span>
              <Heart
                className={`w-3 h-3 ${
                  darkMode ? "text-red-400" : "text-red-500"
                } animate-pulse`}
                fill="currentColor"
              />
              <span className={`text-xs ${baseClasses.text.muted}`}>
                and lots of coffee
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${baseClasses.text.primary}`}>
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`${baseClasses.links.quick} inline-flex items-center gap-1 w-fit`}
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className={`text-lg font-semibold ${baseClasses.text.primary}`}>
              Let's Connect
            </h4>
            <div className="flex gap-3">
              {footerData.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    ${baseClasses.links.social}
                    ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700 text-gray-400"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                    }
                    ${social.color}
                  `}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
            <p className={`text-xs ${baseClasses.text.secondary}`}>
              Feel free to reach out for collaborations or just to say hi!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${baseClasses.text.secondary}`}>
              © {footerData.year} {footerData.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#privacy"
                className={`text-xs ${baseClasses.links.quick}`}
              >
                Privacy Policy
              </a>
              <span className={`text-xs ${baseClasses.text.muted}`}>•</span>
              <a href="#terms" className={`text-xs ${baseClasses.links.quick}`}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full animate-pulse ${
                darkMode ? "bg-green-400" : "bg-green-500"
              }`}
            ></div>
            <span className={`text-xs ${baseClasses.text.muted}`}>
              Currently available for new projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
