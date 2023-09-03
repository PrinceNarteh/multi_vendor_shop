/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      "poppins-bold": ["Poppins-Bold", "sans-serif"],
      "poppins-regular": ["Poppins-Regular", "sans-serif"],
      "roboto-bold": ["Roboto-Bold", "sans-serif"],
      "roboto-regular": ["Roboto-Regular", "sans-serif"],
    },
    extend: {
      screens: {
        "400px": "400px",
        "800px": "800px",
        "1000px": "1050px",
        "1100px": "1110px",
        "1300px": "1300px",
      },
    },
  },
  plugins: [],
};
