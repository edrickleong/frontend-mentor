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
        neon: "#54E6AF",
        grey: "#2C344B",
        "dark-blue": "#121725",
        "light-grey": "#121725",
        "very-light-grey": "#C2CBE5",
      },
    },
  },
  plugins: [],
}
