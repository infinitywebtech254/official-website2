/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c1121f", // Red
        secondary: "#495057", // Grey
      },
    },
  },
  plugins: [],
};
