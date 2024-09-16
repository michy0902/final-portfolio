/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluishGrey: {
          light: "#CBD5E0", // Light bluish-grey
          DEFAULT: "#4A5568", // Default bluish-grey
          dark: "#2D3748", // Dark bluish-grey
        },
        accent: "#A0AEC0", // Accent color
      },
    },
  },
  plugins: [],
};
