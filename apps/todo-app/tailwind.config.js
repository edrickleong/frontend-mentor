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
        "bright-blue": "hsl(220, 98%, 61%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
      },
    },
  },
  plugins: [],
}
