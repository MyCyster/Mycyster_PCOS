/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      colors: {
        primary: {
          DEFAULT: "#069494",
          50: "#E9FFFF",
          75: "#C5F2F2",
          100: "#82C9C9",
          200: "#59B8B8",
          300: "#2FA6A6",
          400: "#069494",
          500: "#057B7B",
          600: "#046363",
          700: "#034A4A",
          800: "#023131",
          900: "#011E1E",
        },
        secondary: {
          DEFAULT: "#F670C7",
          50: "#FEF6FB",
          75: "#FDF2FA",
          100: "#FCE7F6",
          200: "#FCCEEE",
          300: "#FAA7E0",
          400: "#F670C7",
          500: "#EE46BC",
          600: "#DD2590",
          700: "#C11574",
          800: "#9E165F",
          900: "#851651",
        }
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
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    function({addUtilities}) {
      addUtilities({
        ".title": {"@apply text-lg font-bold pt-4 font-inter": {}},
        ".sub-title": {"@apply font-inter": {}}
      })
    }
  ],
};
