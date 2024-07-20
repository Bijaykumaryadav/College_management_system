import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // This is the default, change if needed
  },
  chunkSizeWarningLimit: 1000, // Adjust this value to avoid chunk size warnings
});
