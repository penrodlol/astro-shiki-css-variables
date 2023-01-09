import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

export default defineConfig({
  markdown: { shikiConfig: { theme: "css-variables" } },
  integrations: [mdx()],
});
