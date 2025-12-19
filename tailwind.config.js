/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#a78bfa", 
          DEFAULT: "#8b5cf6", 
          dark: "#7c3aed", 
        },
        secondary: {
          light: "#818cf8",
          DEFAULT: "#6366f1",
          dark: "#4f46e5",
        }
      },
    },
  },
  plugins: [],
};
