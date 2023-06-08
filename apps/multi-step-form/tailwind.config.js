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
        /* Color styles */
        background: "hsla(217, 100%, 96.9%, 1)",
        "border-color": "hsla(229, 24.2%, 87.1%, 1)",
        denim: "hsla(213, 95.6%, 17.8%, 1)",
        grey: "hsla(231, 10.5%, 62.7%, 1)",
        "light-blue": "hsla(228, 100%, 83.5%, 1)",
        "light-grey": "hsla(229, 24.2%, 87.1%, 1)",
        orange: "hsla(23, 100%, 74.7%, 1)",
        pink: "hsla(353, 90.9%, 74.1%, 1)",
        purple: "hsla(243, 100%, 62.2%, 1)",
        "red-errors": "hsla(354, 84.3%, 57.5%, 1)",
        "sky-blue": "hsla(206, 94%, 86.9%, 1)",
        "very-light-grey": "hsla(231, 100%, 98.6%, 1)",
        white: "hsla(0, 0%, 100%, 1)",
      },
      fontSize: {
        heading: ["2rem", { lineHeight: 1.2 }],
        "body-l": ["1rem", { lineHeight: 1.5625 }],
        "body-m": ["0.875rem", { lineHeight: 1.2 }],
        "body-s": ["0.75rem", { lineHeight: 1.2 }],
      },
    },
  },
  plugins: [],
}
