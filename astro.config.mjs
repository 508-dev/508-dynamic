import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://508.dev",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "file",
  },
});
