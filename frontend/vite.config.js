// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure this is the directory served by your server
    rollupOptions: {
      input: {
        main: "/src/main.js", // Adjust if needed
      },
    },
  },
});
