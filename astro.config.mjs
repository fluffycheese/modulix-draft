import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://modulix.fluffycheese.co.uk",
  // integrations: [sitemap()],
  output: "static",
  trailingSlash: "always"
});
