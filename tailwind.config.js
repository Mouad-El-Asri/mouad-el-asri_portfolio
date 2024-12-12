/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", "sans-serif"],
            },
            colors: {
                primary: "#25282B",
                secondary: "#FF5722",
                accent: "#FF572220",
            },
        },
    },
    plugins: [],
};
