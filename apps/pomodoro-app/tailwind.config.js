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
        1: "hsla(235, 35%, 18%, 1)",
        2: "hsla(234, 30%, 45%, 1)",
        3: "hsla(235, 35%, 58%, 1)",
        4: "hsla(234, 39%, 14%, 1)",
        5: "hsla(234, 39%, 14%, 1)",
        6: "hsla(227, 100%, 92%, 1)",
        7: "hsla(284, 89%, 74%, 1)",
        8: "hsla(229, 52%, 96%, 1)",
        9: "hsla(0, 91%, 71%, 1)",
      },
      fontFamily: {
        "kumbh-sans": ["var(--font-kumbh-sans)"],
        "roboto-slab": ["var(--font-roboto-slab)"],
        "space-mono": ["var(--font-space-mono)"],
      },
      backgroundImage: {
        "outer-ring": "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
      },
      boxShadow: {
        "outer-ring":
          "50px 50px 100px 0px #121530, -50px -50px 100px 0px #272C5A",
      },
    },
  },
  plugins: [],
}
