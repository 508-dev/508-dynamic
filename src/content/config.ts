// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

const dataCollection = defineCollection({
  type: "data",
});

export const collections = {
  data: dataCollection,
};
