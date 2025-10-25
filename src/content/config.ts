// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

const dataCollection = defineCollection({
  type: "data",
});

export const collections = {
  data: dataCollection,
};
