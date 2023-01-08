/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      white: "white",
      black: "#181818",
      "middle-gray": "#828282",
      "middle-gray-light": "#4F4F4F",
      transparent: "#FFFFFF00",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")({ strategy: "class" })],
  darkMode: "class",
};
