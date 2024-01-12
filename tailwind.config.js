const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      orange: {
        DEFAULT: '#FF9869',
        dark: '#FF661F'
      },
      white: '#FCFCF8',
      black: '#010101',
      purple: '#6A0DAD'
    },
    extend: {
      fontFamily: {
        lato: ['Lato', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
