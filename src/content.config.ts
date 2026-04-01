import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const dataCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data" }),
});

export const collections = {
  data: dataCollection,
};
