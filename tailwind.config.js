/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", "sans-serif"],
            },
            colors: {
                primary: {
                    light: "#3D4348",
                    DEFAULT: "#25282B",
                    dark: "#1A1D1F",
                },

                secondary: {
                    light: "#FF7043",
                    DEFAULT: "#FF5722",
                    dark: "#D84B1A",
                },

                accent: {
                    DEFAULT: "#FF572220",
                    light: "#FF572255",
                    dark: "#FF572299",
                },

                neutral: {
                    light: "#6C7278",
                    DEFAULT: "#4f5459",
                    dark: "#2C3134",
                },

                success: "#4CAF50",
                error: "#F44336",
                warning: "#FF9800",
            },
        },
    },
    plugins: [],
};
