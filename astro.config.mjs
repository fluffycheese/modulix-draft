import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://modulix.fluffycheese.co.uk",
  output: "hybrid",
  trailingSlash: "always",
  adapter: cloudflare()
});