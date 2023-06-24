/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        completed: "hsl(var(--completed) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        divider: "hsl(var(--divider) / <alpha-value>)",
        placeholder: "hsl(var(--placeholder) / <alpha-value>)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
      backgroundImage: {
        "check-border":
          "linear-gradient(90deg, hsl(var(--card)), hsl(var(--card))), linear-gradient(135deg, hsl(192,100%,67%), hsl(280,87%,65%))",
        check: "linear-gradient(135deg, hsl(192,100%,67%), hsl(280,87%,65%))",
      },
    },
  },
  plugins: [],
}
