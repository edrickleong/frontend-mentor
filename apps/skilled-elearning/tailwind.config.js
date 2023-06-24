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
        "faded-blue": "#666CA3",
        black: "#13183F",
        grey: "#83869A",
        rose: "#F74780",
        pink: "#FFA7C3",
        white: "#FFFFFF",
        red: "#F02AA6",
        orange: "#FF6F48",
        blue: "#4851FF",
        "purple-pink": "#F02AA6",
      },
      boxShadow: {
        card: "0px 25px 50px 0px rgba(6, 22, 141, 0.04)",
      },
    },
  },
  plugins: [],
}
