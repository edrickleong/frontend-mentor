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
        cyan: "#66E2DC",
        orange: "#FA7453",
        "light-orange": "#FFB964",
        "ghost-white": "#FCFAF9",
        "off-black": "#191826",
      },
    },
  },
  plugins: [],
}
