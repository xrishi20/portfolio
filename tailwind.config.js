const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: [
      './index.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange,
    },
    extend: {
      fontFamily: {
        roboto: [
          "Roboto",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  variants: {},
  plugins: [],
};