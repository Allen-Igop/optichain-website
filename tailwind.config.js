/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#C1121F",
          50: "#FBEAEA",
          100: "#F5CFD1",
          200: "#E89EA2",
          300: "#DC6D73",
          400: "#D03B44",
          500: "#C1121F",
          600: "#9E0E19",
          700: "#7A0B14",
          800: "#57070E",
          900: "#330407",
        },
        ember: "#E5383B",
        maroon: "#5C0A12",
        ink: "#161312",
        steel: "#3D4451",
        paper: "#F6F3EF",
        "paper-dim": "#ECE7E0",
      },
      fontFamily: {
        display: ["'Oswald'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "diagonal-fade":
          "linear-gradient(135deg, #7A0B14 0%, #C1121F 45%, #E5383B 100%)",
      },
    },
  },
  plugins: [],
};
