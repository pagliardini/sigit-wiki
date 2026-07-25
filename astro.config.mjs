// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [
		starlight({
			title: "SIGIT Wiki",
			locales: {
				root: { label: "Español", lang: "es" },
			},
			sidebar: [
				{
					label: "Manual de Usuario",
					autogenerate: { directory: "manual-usuario" },
					collapsed: false,
				},
			],
		}),
		mdx(),
		sitemap(),
	],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
