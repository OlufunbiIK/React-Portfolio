// import React, { useState } from "react";
// import {
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   MessageSquare,
//   User,
//   Calendar,
// } from "lucide-react";

// // Mock theme context for demonstration
// const useTheme = () => {
//   const [currentTheme, setCurrentTheme] = useState("dark");

//   const THEME_MODES = {
//     light: {
//       name: "light",
//       bg: "bg-gray-50",
//       text: "text-black",
//       pattern: "pattern-light",
//     },
//     dark: {
//       name: "dark",
//       bg: "bg-gray-900",
//       text: "text-white",
//       pattern: "pattern-dark",
//     },
//     ocean: {
//       name: "ocean",
//       bg: "bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900",
//       text: "text-white",
//       pattern: "pattern-ocean",
//     },
//     forest: {
//       name: "forest",
//       bg: "bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900",
//       text: "text-white",
//       pattern: "pattern-forest",
//     },
//     galaxy: {
//       name: "galaxy",
//       bg: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
//       text: "text-white",
//       pattern: "pattern-galaxy",
//     },
//   };

//   const theme = THEME_MODES[currentTheme];
//   const isDarkTheme = currentTheme !== "light";

//   const toggleTheme = () => {
//     const themes = Object.keys(THEME_MODES);
//     const currentIndex = themes.indexOf(currentTheme);
//     const nextIndex = (currentIndex + 1) % themes.length;
//     setCurrentTheme(themes[nextIndex]);
//   };

//   return {
//     currentTheme,
//     theme,
//     isDarkTheme,
//     darkMode: isDarkTheme,
//     toggleTheme,
//     availableThemes: THEME_MODES,
//   };
// };

// export default function Contact() {
//   const { currentTheme, theme, isDarkTheme } = useTheme();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     alert("Message sent! (This is a demo)");
//     setFormData({ name: "", email: "", subject: "", message: "" });
//     setIsSubmitting(false);
//   };

//   // Theme-specific styling
//   const getThemeStyles = () => {
//     const baseStyles = {
//       light: {
//         cardBg: "bg-white",
//         inputBg: "bg-white",
//         border: "border-gray-200",
//         focusBorder: "focus:border-blue-500",
//         shadow: "shadow-lg",
//         accent: "from-blue-500 to-purple-600",
//         iconColor: "text-blue-500",
//         hoverShadow: "hover:shadow-xl",
//       },
//       dark: {
//         cardBg: "bg-gray-800/50 backdrop-blur-sm",
//         inputBg: "bg-gray-700/50",
//         border: "border-gray-600",
//         focusBorder: "focus:border-blue-400",
//         shadow: "shadow-2xl",
//         accent: "from-blue-400 to-purple-500",
//         iconColor: "text-blue-400",
//         hoverShadow: "hover:shadow-blue-500/10",
//       },
//       ocean: {
//         cardBg: "bg-blue-800/30 backdrop-blur-sm border border-cyan-500/20",
//         inputBg: "bg-blue-900/50",
//         border: "border-cyan-500/30",
//         focusBorder: "focus:border-cyan-300",
//         shadow: "shadow-2xl shadow-cyan-500/10",
//         accent: "from-cyan-400 to-blue-500",
//         iconColor: "text-cyan-400",
//         hoverShadow: "hover:shadow-cyan-500/20",
//       },
//       forest: {
//         cardBg: "bg-green-800/30 backdrop-blur-sm border border-emerald-500/20",
//         inputBg: "bg-green-900/50",
//         border: "border-emerald-500/30",
//         focusBorder: "focus:border-emerald-300",
//         shadow: "shadow-2xl shadow-emerald-500/10",
//         accent: "from-emerald-400 to-green-500",
//         iconColor: "text-emerald-400",
//         hoverShadow: "hover:shadow-emerald-500/20",
//       },
//       galaxy: {
//         cardBg: "bg-purple-800/30 backdrop-blur-sm border border-purple-500/20",
//         inputBg: "bg-purple-900/50",
//         border: "border-purple-500/30",
//         focusBorder: "focus:border-purple-300",
//         shadow: "shadow-2xl shadow-purple-500/10",
//         accent: "from-purple-400 to-indigo-500",
//         iconColor: "text-purple-400",
//         hoverShadow: "hover:shadow-purple-500/20",
//       },
//     };

//     return baseStyles[currentTheme];
//   };

//   const styles = getThemeStyles();

//   return (
//     <div
//       className={`min-h-screen ${theme.bg} ${theme.text} relative overflow-hidden`}
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse ${
//             currentTheme === "ocean"
//               ? "bg-cyan-500"
//               : currentTheme === "forest"
//               ? "bg-emerald-500"
//               : currentTheme === "galaxy"
//               ? "bg-purple-500"
//               : "bg-blue-500"
//           }`}
//         ></div>
//         <div
//           className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse delay-1000 ${
//             currentTheme === "ocean"
//               ? "bg-blue-500"
//               : currentTheme === "forest"
//               ? "bg-teal-500"
//               : currentTheme === "galaxy"
//               ? "bg-indigo-500"
//               : "bg-purple-500"
//           }`}
//         ></div>
//       </div>

//       <section id="contact" className="py-20 relative z-10">
//         <div className="max-w-6xl mx-auto px-6">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 mb-4">
//               <MessageSquare className={`w-8 h-8 ${styles.iconColor}`} />
//               <span
//                 className={`text-sm font-medium uppercase tracking-wider ${styles.iconColor}`}
//               >
//                 Get In Touch
//               </span>
//             </div>
//             <h2 className="text-5xl lg:text-6xl font-bold mb-6">
//               Let's{" "}
//               <span
//                 className={`bg-gradient-to-r ${styles.accent} bg-clip-text text-transparent`}
//               >
//                 Connect
//               </span>
//             </h2>
//             <p
//               className={`text-xl max-w-2xl mx-auto leading-relaxed ${
//                 isDarkTheme ? "text-gray-300" : "text-gray-600"
//               }`}
//             >
//               Ready to bring your ideas to life? Let's discuss your next project
//               and create something amazing together.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-5 gap-12">
//             {/* Contact Info - Left Side */}
//             <div className="lg:col-span-2 space-y-8">
//               <div
//                 className={`p-8 rounded-2xl ${styles.cardBg} ${styles.shadow} ${styles.hoverShadow} transition-all duration-300`}
//               >
//                 <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                   <User className={`w-6 h-6 ${styles.iconColor}`} />
//                   Let's Talk
//                 </h3>
//                 <p
//                   className={`text-lg mb-8 leading-relaxed ${
//                     isDarkTheme ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 >
//                   I'm always interested in new opportunities and exciting
//                   projects. Whether you have a question or just want to say hi,
//                   I'll try my best to get back to you!
//                 </p>

//                 <div className="space-y-6">
//                   <div
//                     className={`flex items-center gap-4 p-4 rounded-lg ${styles.inputBg} transition-all duration-200 hover:scale-105`}
//                   >
//                     <Mail
//                       className={`w-6 h-6 ${styles.iconColor} flex-shrink-0`}
//                     />
//                     <div>
//                       <div className="font-medium">Email</div>
//                       <div
//                         className={
//                           isDarkTheme ? "text-gray-300" : "text-gray-600"
//                         }
//                       >
//                         olufunbiibrahim@gmail.com
//                       </div>
//                     </div>
//                   </div>

//                   <div
//                     className={`flex items-center gap-4 p-4 rounded-lg ${styles.inputBg} transition-all duration-200 hover:scale-105`}
//                   >
//                     <MapPin
//                       className={`w-6 h-6 ${styles.iconColor} flex-shrink-0`}
//                     />
//                     <div>
//                       <div className="font-medium">Location</div>
//                       <div
//                         className={
//                           isDarkTheme ? "text-gray-300" : "text-gray-600"
//                         }
//                       >
//                         Available Worldwide
//                       </div>
//                     </div>
//                   </div>

//                   <div
//                     className={`flex items-center gap-4 p-4 rounded-lg ${styles.inputBg} transition-all duration-200 hover:scale-105`}
//                   >
//                     <Calendar
//                       className={`w-6 h-6 ${styles.iconColor} flex-shrink-0`}
//                     />
//                     <div>
//                       <div className="font-medium">Response Time</div>
//                       <div
//                         className={
//                           isDarkTheme ? "text-gray-300" : "text-gray-600"
//                         }
//                       >
//                         Within 24 hours
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form - Right Side */}
//             <div className="lg:col-span-3">
//               <div
//                 className={`p-8 rounded-2xl ${styles.cardBg} ${styles.shadow} ${styles.hoverShadow} transition-all duration-300`}
//               >
//                 <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
//                   <Send className={`w-6 h-6 ${styles.iconColor}`} />
//                   Send Message
//                 </h3>

//                 <div className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label className="block text-sm font-medium">
//                         Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="Your full name"
//                         className={`w-full p-4 rounded-lg ${styles.inputBg} ${
//                           styles.border
//                         } ${
//                           styles.focusBorder
//                         } transition-all duration-200 focus:ring-2 focus:ring-opacity-50 ${
//                           currentTheme === "ocean"
//                             ? "focus:ring-cyan-500"
//                             : currentTheme === "forest"
//                             ? "focus:ring-emerald-500"
//                             : currentTheme === "galaxy"
//                             ? "focus:ring-purple-500"
//                             : "focus:ring-blue-500"
//                         }`}
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label className="block text-sm font-medium">
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="your.email@example.com"
//                         className={`w-full p-4 rounded-lg ${styles.inputBg} ${
//                           styles.border
//                         } ${
//                           styles.focusBorder
//                         } transition-all duration-200 focus:ring-2 focus:ring-opacity-50 ${
//                           currentTheme === "ocean"
//                             ? "focus:ring-cyan-500"
//                             : currentTheme === "forest"
//                             ? "focus:ring-emerald-500"
//                             : currentTheme === "galaxy"
//                             ? "focus:ring-purple-500"
//                             : "focus:ring-blue-500"
//                         }`}
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium">
//                       Subject *
//                     </label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleInputChange}
//                       required
//                       placeholder="What's this about?"
//                       className={`w-full p-4 rounded-lg ${styles.inputBg} ${
//                         styles.border
//                       } ${
//                         styles.focusBorder
//                       } transition-all duration-200 focus:ring-2 focus:ring-opacity-50 ${
//                         currentTheme === "ocean"
//                           ? "focus:ring-cyan-500"
//                           : currentTheme === "forest"
//                           ? "focus:ring-emerald-500"
//                           : currentTheme === "galaxy"
//                           ? "focus:ring-purple-500"
//                           : "focus:ring-blue-500"
//                       }`}
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="block text-sm font-medium">
//                       Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                       rows="6"
//                       placeholder="Tell me about your project, ideas, or just say hello!"
//                       className={`w-full p-4 rounded-lg ${styles.inputBg} ${
//                         styles.border
//                       } ${
//                         styles.focusBorder
//                       } transition-all duration-200 focus:ring-2 focus:ring-opacity-50 resize-none ${
//                         currentTheme === "ocean"
//                           ? "focus:ring-cyan-500"
//                           : currentTheme === "forest"
//                           ? "focus:ring-emerald-500"
//                           : currentTheme === "galaxy"
//                           ? "focus:ring-purple-500"
//                           : "focus:ring-blue-500"
//                       }`}
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full py-4 bg-gradient-to-r ${styles.accent} text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-5 h-5" />
//                         Send Message
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Additional CTA Section */}
//           <div className="mt-20 text-center">
//             <div
//               className={`inline-block p-8 rounded-2xl ${styles.cardBg} ${styles.shadow} ${styles.hoverShadow} transition-all duration-300`}
//             >
//               <h3 className="text-2xl font-bold mb-4">
//                 Prefer a different way to connect?
//               </h3>
//               <p
//                 className={`mb-6 ${
//                   isDarkTheme ? "text-gray-300" : "text-gray-600"
//                 }`}
//               >
//                 You can also find me on various platforms or schedule a call
//                 directly.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <button
//                   className={`px-6 py-3 rounded-lg ${styles.inputBg} ${styles.border} transition-all duration-200 hover:scale-105 font-medium`}
//                 >
//                   LinkedIn
//                 </button>
//                 <button
//                   className={`px-6 py-3 rounded-lg ${styles.inputBg} ${styles.border} transition-all duration-200 hover:scale-105 font-medium`}
//                 >
//                   GitHub
//                 </button>
//                 <button
//                   className={`px-6 py-3 rounded-lg ${styles.inputBg} ${styles.border} transition-all duration-200 hover:scale-105 font-medium`}
//                 >
//                   Schedule Call
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  User,
  Calendar,
} from "lucide-react";
import { useTheme } from "./providers/ThemeContext";

export default function Contact() {
  const { currentTheme, theme, isDarkTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  // Theme-specific styling
  const getThemeStyles = () => {
    const baseStyles = {
      light: {
        cardBg: "bg-white",
        inputBg: "bg-white",
        border: "border-gray-200",
        focusBorder: "focus:border-blue-500",
        shadow: "shadow-lg",
        accent: "from-blue-500 to-purple-600",
        iconColor: "text-blue-500",
        hoverShadow: "hover:shadow-xl",
      },
      dark: {
        cardBg: "bg-gray-800/50 backdrop-blur-sm",
        inputBg: "bg-gray-700/50",
        border: "border-gray-600",
        focusBorder: "focus:border-blue-400",
        shadow: "shadow-2xl",
        accent: "from-blue-400 to-purple-500",
        iconColor: "text-blue-400",
        hoverShadow: "hover:shadow-blue-500/10",
      },
      ocean: {
        cardBg: "bg-blue-800/30 backdrop-blur-sm border border-cyan-500/20",
        inputBg: "bg-blue-900/50",
        border: "border-cyan-500/30",
        focusBorder: "focus:border-cyan-300",
        shadow: "shadow-2xl shadow-cyan-500/10",
        accent: "from-cyan-400 to-blue-500",
        iconColor: "text-cyan-400",
        hoverShadow: "hover:shadow-cyan-500/20",
      },
      forest: {
        cardBg: "bg-green-800/30 backdrop-blur-sm border border-emerald-500/20",
        inputBg: "bg-green-900/50",
        border: "border-emerald-500/30",
        focusBorder: "focus:border-emerald-300",
        shadow: "shadow-2xl shadow-emerald-500/10",
        accent: "from-emerald-400 to-green-500",
        iconColor: "text-emerald-400",
        hoverShadow: "hover:shadow-emerald-500/20",
      },
      galaxy: {
        cardBg: "bg-purple-800/30 backdrop-blur-sm border border-purple-500/20",
        inputBg: "bg-purple-900/50",
        border: "border-purple-500/30",
        focusBorder: "focus:border-purple-300",
        shadow: "shadow-2xl shadow-purple-500/10",
        accent: "from-purple-400 to-indigo-500",
        iconColor: "text-purple-400",
        hoverShadow: "hover:shadow-purple-500/20",
      },
    };

    return baseStyles[currentTheme];
  };

  const styles = getThemeStyles();

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.text} relative overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse ${
            currentTheme === "ocean"
              ? "bg-cyan-500"
              : currentTheme === "forest"
              ? "bg-emerald-500"
              : currentTheme === "galaxy"
              ? "bg-purple-500"
              : "bg-blue-500"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse delay-1000 ${
            currentTheme === "ocean"
              ? "bg-blue-500"
              : currentTheme === "forest"
              ? "bg-teal-500"
              : currentTheme === "galaxy"
              ? "bg-indigo-500"
              : "bg-purple-500"
          }`}
        ></div>
      </div>

      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <MessageSquare className={`w-8 h-8 ${styles.iconColor}`} />
              <span
                className={`text-sm font-medium uppercase tracking-wider ${styles.iconColor}`}
              >
                Get In Touch
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Let's{" "}
              <span
                className={`bg-gradient-to-r ${styles.accent} bg-clip-text text-transparent`}
              >
                Connect
              </span>
            </h2>
            <p
              className={`text-xl max-w-2xl mx-auto leading-relaxed ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              <div
                className={`p-8 rounded-2xl ${styles.cardBg} ${styles.shadow} ${styles.hoverShadow} transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <User className={`w-6 h-6 ${styles.iconColor}`} />
                  Let's Talk
                </h3>
                <p
                  className={`text-lg mb-8 leading-relaxed ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                  <div
                    className={`flex items-center gap-4 p-4 rounded-lg ${styles.inputBg} transition-all duration-200 hover:scale-105`}
                  >
                    <Mail
                      className={`w-6 h-6 ${styles.iconColor} flex-shrink-0`}
                    />
                    <div>
                      <div className="font-medium">Email</div>
                      <div
                        className={
                          isDarkTheme ? "text-gray-300" : "text-gray-600"
                        }
                      >
                        olufunbiibrahim@gmail.com
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-4 p-4 rounded-lg ${styles.inputBg} transition-all duration-200 hover:scale-105`}
                  >
                    <MapPin
                      className={`w-6 h-6 ${styles.iconColor} flex-shrink-0`}
                    />
                    <div>
                      <div className="font-medium">Location</div>
                      <div
                        className={
                          isDarkTheme ? "text-gray-300" : "text-gray-600"
                        }
                      >
                        Available Worldwide
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-4 p-4 rounded-lg ${styles.inputBg} transition-all duration-200 hover:scale-105`}
                  >
                    <Calendar
                      className={`w-6 h-6 ${styles.iconColor} flex-shrink-0`}
                    />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div
                        className={
                          isDarkTheme ? "text-gray-300" : "text-gray-600"
                        }
                      >
                        Within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <div
                className={`p-8 rounded-2xl ${styles.cardBg} ${styles.shadow} ${styles.hoverShadow} transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Send className={`w-6 h-6 ${styles.iconColor}`} />
                  Send Message
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className={`w-full p-4 rounded-lg ${styles.inputBg} ${
                          styles.border
                        } ${
                          styles.focusBorder
                        } transition-all duration-200 focus:ring-2 focus:ring-opacity-50 ${
                          currentTheme === "ocean"
                            ? "focus:ring-cyan-500"
                            : currentTheme === "forest"
                            ? "focus:ring-emerald-500"
                            : currentTheme === "galaxy"
                            ? "focus:ring-purple-500"
                            : "focus:ring-blue-500"
                        }`}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className={`w-full p-4 rounded-lg ${styles.inputBg} ${
                          styles.border
                        } ${
                          styles.focusBorder
                        } transition-all duration-200 focus:ring-2 focus:ring-opacity-50 ${
                          currentTheme === "ocean"
                            ? "focus:ring-cyan-500"
                            : currentTheme === "forest"
                            ? "focus:ring-emerald-500"
                            : currentTheme === "galaxy"
                            ? "focus:ring-purple-500"
                            : "focus:ring-blue-500"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                      className={`w-full p-4 rounded-lg ${styles.inputBg} ${
                        styles.border
                      } ${
                        styles.focusBorder
                      } transition-all duration-200 focus:ring-2 focus:ring-opacity-50 ${
                        currentTheme === "ocean"
                          ? "focus:ring-cyan-500"
                          : currentTheme === "forest"
                          ? "focus:ring-emerald-500"
                          : currentTheme === "galaxy"
                          ? "focus:ring-purple-500"
                          : "focus:ring-blue-500"
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Tell me about your project, ideas, or just say hello!"
                      className={`w-full p-4 rounded-lg ${styles.inputBg} ${
                        styles.border
                      } ${
                        styles.focusBorder
                      } transition-all duration-200 focus:ring-2 focus:ring-opacity-50 resize-none ${
                        currentTheme === "ocean"
                          ? "focus:ring-cyan-500"
                          : currentTheme === "forest"
                          ? "focus:ring-emerald-500"
                          : currentTheme === "galaxy"
                          ? "focus:ring-purple-500"
                          : "focus:ring-blue-500"
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-gradient-to-r ${styles.accent} text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional CTA Section */}
          <div className="mt-20 text-center">
            <div
              className={`inline-block p-8 rounded-2xl ${styles.cardBg} ${styles.shadow} ${styles.hoverShadow} transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-4">
                Prefer a different way to connect?
              </h3>
              <p
                className={`mb-6 ${
                  isDarkTheme ? "text-gray-300" : "text-gray-600"
                }`}
              >
                You can also find me on various platforms or schedule a call
                directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  className={`px-6 py-3 rounded-lg ${styles.inputBg} ${styles.border} transition-all duration-200 hover:scale-105 font-medium`}
                >
                  LinkedIn
                </button>
                <button
                  className={`px-6 py-3 rounded-lg ${styles.inputBg} ${styles.border} transition-all duration-200 hover:scale-105 font-medium`}
                >
                  GitHub
                </button>
                <button
                  className={`px-6 py-3 rounded-lg ${styles.inputBg} ${styles.border} transition-all duration-200 hover:scale-105 font-medium`}
                >
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
