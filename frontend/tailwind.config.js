/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "Helvetica", "Arial", "sans-serif"],
        urbanist: ["Urbanist", "Helvetica", "Arial", "sans-serif"],
        outfit: ["Outfit", "Helvetica", "Arial", "sans-serif"],
        montserrat: [
          "Montserrat",
          "Helvetica",
          "Arial",
          "Verdana",
          "Trebuchet MS",
          "Tahoma",
          "Geneva",
          "Gill Sans",
          "sans-serif",
        ],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [require("daisyui")],
};
