import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolveWorktreeDevPort } from "./scripts/worktree-dev-port.mjs";

const env = {
  ...loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), ""),
  ...process.env,
};

const worktreeDevPort = resolveWorktreeDevPort({
  env,
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
