import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://anyrep.co.uk",
  trailingSlash: "always",
  prefetch: true,

  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

  output: "hybrid",
  adapter: netlify(),
});
