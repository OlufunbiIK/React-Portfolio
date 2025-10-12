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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/mjkepgra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    ❌ Sorry, there was an error sending your message. Please
                    try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        className={`w-full p-4 rounded-lg text-black ${
                          styles.inputBg
                        } ${styles.border} ${
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
                        className={`w-full p-4 rounded-lg text-black ${
                          styles.inputBg
                        } ${styles.border} ${
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
                      className={`w-full p-4 rounded-lg text-black ${
                        styles.inputBg
                      } ${styles.border} ${
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
                      className={`w-full p-4 rounded-lg text-black ${
                        styles.inputBg
                      } ${styles.border} ${
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
                </form>
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
                <a
                  href="https://linkedin.com/in/olufunbi-ibrahim-2bb29922a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg ${styles.inputBg} ${styles.border} transition-all duration-200 hover:scale-105 font-medium`}
                >
                  Linkedin
                </a>
                <a
                  href="https://github.com/OlufunbiIK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg ${styles.inputBg} ${styles.border} transition-all duration-200 hover:scale-105 font-medium`}
                >
                  GitHub
                </a>
                <button
                  onClick={() => {
                    const phoneNumber = "23450366355"; // Replace with your WhatsApp number (country code + number, no spaces or +)
                    const message = encodeURIComponent(
                      "Hi! I'd like to schedule a call to discuss a project."
                    );
                    window.open(
                      `https://wa.me/${phoneNumber}?text=${message}`,
                      "_blank"
                    );
                  }}
                  className={`px-6 py-3 rounded-lg ${styles.inputBg} ${styles.border} transition-all duration-200 hover:scale-105 font-medium cursor-pointer`}
                >
                  WhatsApp Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
