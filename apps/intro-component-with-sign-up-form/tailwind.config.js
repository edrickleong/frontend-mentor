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
        red: "hsl(0 100% 74%)",
        green: "hsl(154 59% 51%)",
        blue: "hsl(248 32% 49%)",
        "dark-blue": "hsl(249 10% 26%)",
        "grayish-blue": "hsl(246 25% 77%)",
      },
    },
  },
  plugins: [],
}
