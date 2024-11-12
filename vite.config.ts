import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/layouts": path.resolve(__dirname, "src/layouts"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/styles": path.resolve(__dirname, "src/styles"),
      "@/utils": path.resolve(__dirname, "src/utils"),
      "@/types": path.resolve(__dirname, "src/types"),
      "@/data": path.resolve(__dirname, "src/data"),
      "@/constants": path.resolve(__dirname, "src/constants"),
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
