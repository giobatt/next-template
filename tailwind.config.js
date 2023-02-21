const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--maven_Pro-font)', ...fontFamily.sans],
        serif: ['var(--maven_Pro-font)', ...fontFamily.serif],
      },
    }
  },
  plugins: [],
}
