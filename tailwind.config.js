/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica",
                    "Arial",
                    "sans-serif",
                ],
            },
        },
    },
    plugins: [],
};
