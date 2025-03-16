/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "414px",
      sm: "640px",
      md: "800px",
      lg: "1000px",
      bg: "1150px",
      xlg: "1300px",
      xxl: "1500px",
      xxxl: "1585px",
      vlg: "1900px",
      "lg-max": { max: "960px" },
      xl: "1140px",
      "2xl": "1440px",
      "3xl": "1441px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "5rem",
      },
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
