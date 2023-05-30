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
        "gradient-one":
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        "gradient-two":
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      },
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "dark-grayish-red": "hsl(0, 6%, 24%)",
      },
    },
  },
  plugins: [],
}
