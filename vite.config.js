import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    proxy: {
      "/v1/auth/signup": {
        target: "http://mycyster-backend.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/v1/auth/login": {
        target: "http://mycyster-backend.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/v1/auth/verify-email": {
        target: "http://mycyster-backend.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
