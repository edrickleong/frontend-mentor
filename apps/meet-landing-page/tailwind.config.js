/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#4D96A9",
        purple: "#855FB1",
        "dark-grey": "#28283D",
        "light-grey": "#87879D",
        "light-blue": "#8FE3F9",
        "light-purple": "#D9B8FF",
        white: "#FAFAFA",
      },
    },
  },
  plugins: [],
}
