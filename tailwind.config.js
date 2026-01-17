/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#10b981",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            boxShadow: {
                soft: "0 10px 30px rgba(0,0,0,0.08)",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
