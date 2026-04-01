import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://508.dev",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [tailwind()],
});
