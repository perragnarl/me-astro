import { defineConfig } from "astro/config"

import { remarkReadingTime } from "./readingtime.mjs"

// https://astro.build/config
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	markdown: {
		remarkPlugins: [remarkReadingTime],
		extendDefaultPlugins: true,
	},
	site: "https://perragnarl.github.io",
	base: "/me-astro"
})
