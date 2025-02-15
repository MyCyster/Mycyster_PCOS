/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    ],
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
        // spacing: { 
        // 2: "0.5rem",
        // 3: "0.75rem",
        // 4: "1rem",
        // 5: "1.25rem",
        // 6: "1.5rem",
        // 7: "1.75rem",
        // 8: "2rem",
        // 9: "2.25rem",
        // 10: "2.5rem",
        // 11: "2.75rem",
        // 12: "3rem",
        // 13: "3.25rem",
        // 14: "3.5rem",
        // 16: "4rem",
        // 20: "5rem",
        // }

      },
    },
    plugins: [], 
  };
  