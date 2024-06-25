const { nextui } = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */

const { fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(user|avatar).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans]
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        earthOne: "#3E362E",
        earthTwo: "#865D36",
        earthThree: "#93785B",
        earthFour: "#AC8968",
        earthFive: "#A69080"
      },
      fontWeight: {
        'extra-bold': 1000
      },
      screens: {
        'tablet': {max:'640px'},
            // => @media (min-width: 640px) { ... }
        'laptop': {max:'1024px'},
            // => @media (min-width: 1024px) { ... }
        'desktop': {max:'1280px'}
            // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [nextui()],
}
