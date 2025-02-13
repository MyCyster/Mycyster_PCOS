/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all relevant files
    ],
    theme: {
      extend: {}, // You can customize your theme here
    },
    plugins: [], // Add Tailwind plugins here if needed
  };
  