/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background:
          "linear-gradient(180deg, #1D1E28 0.12%, #261C2D 94.84%, #261A2D 100%)",
      },
    },
  },
  plugins: [],
}
