/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        primary : "#f42c37",
        secondary : "#f42c37",
        brandYellow : "#fdc62e",
        brandGreen : "#ade8f4",
        brandBlue : "#48cae4",
        brandBlueDark : "#0096c7",
        brandWhite : "#eeeeee",
      },
      container : {
        center : true,
        padding : {
          DEFAULT : "1rem",
          sm : "3rem",
        }
      }
    },
  },
  plugins: [],
}

