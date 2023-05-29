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
        "dark-black": "#050505",
        "very-dark-gray": "#1F1F1F",
        "darker-gray": "#2D2D2D",
        "dark-gray": "#3A3A3A",
        gray: "#757575",
        "light-gray": "#E9E9E9",
        "very-light-gray": "#F4F4F4",
        purple: "#A445ED",
        orange: "#FF5252",
      },
    },
  },
  plugins: [],
}
