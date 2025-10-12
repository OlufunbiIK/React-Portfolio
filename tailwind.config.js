module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  safelist: [
    "from-blue-500",
    "to-purple-600",
    "from-green-500",
    "to-teal-600",
    "from-purple-500",
    "to-purple-700",
    "from-pink-500",
    "to-rose-600",
    "from-orange-500",
    "to-red-600",
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
  ],
  theme: {
    extend: {
      transitionProperty: {
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
