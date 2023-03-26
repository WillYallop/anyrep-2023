import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://anyrep.co.uk",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    image(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    prefetch(),
  ],
});
