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
                "1": "hsla(235, 35%, 18%, 1)",
                "2": "hsla(234, 30%, 45%, 1)",
                "3": "hsla(235, 35%, 58%, 1)",
                "4": "hsla(234, 39%, 14%, 1)",
                "5": "hsla(234, 39%, 14%, 1)",
                "6": "hsla(227, 100%, 92%, 1)",
                "7": "hsla(284, 89%, 74%, 1)",
                "8": "hsla(229, 52%, 96%, 1)",
                "9": "hsla(0, 91%, 71%, 1)",
            }
        },
    },
    plugins: [],
}
