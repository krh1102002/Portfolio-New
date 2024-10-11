/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#4CAF50",
        background: "#121212",
        text: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
