import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({ hostname: "https://istvanszasz99.dev/" }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ["**/*.svg", "**/*.csv"],

  build: {
    // Target modern browsers for smaller, faster output
    target: "es2020",
    // Inline assets smaller than 4 KB to reduce HTTP requests
    assetsInlineLimit: 4096,
    // Enable CSS code-splitting per chunk
    cssCodeSplit: true,
    // Vite 8 uses rolldown+oxc minification by default (faster than esbuild)
    minify: true,
    rollupOptions: {
      output: {
        // Split vendor and feature chunks for optimal long-term caching
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/motion")) {
            return "vendor-motion";
          }
          if (id.includes("node_modules/lucide-react") || id.includes("node_modules/@ridemountainpig")) {
            return "vendor-icons";
          }
        },
      },
    },
  },
});
