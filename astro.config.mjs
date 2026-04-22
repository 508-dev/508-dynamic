import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { resolveWorktreeDevPort } from "./scripts/worktree-dev-port.mjs";

const worktreeDevPort = resolveWorktreeDevPort({
  worktreeRoot: fileURLToPath(new URL(".", import.meta.url)),
});

// https://astro.build/config
export default defineConfig({
  site: "https://508.dev",
  trailingSlash: "never",
  server: {
    port: worktreeDevPort.port,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "file",
  },
});
