/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_bg: "#171d3f",
                c_border_outline: "hsl(217, 16%, 45%)",
                c_dark_text: "hsl(229, 25%, 31%)",
                c_score_text: "hsl(229, 64%, 46%)"
            },
            fontFamily: {
                barlow: ["Barlow Semi Condensed", "sans-serif"]
            }
        },
    },
    plugins: [],
}

