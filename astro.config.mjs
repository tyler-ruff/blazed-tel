import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify/edge-functions';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const DEV_PORT = 2121;

// https://astro.build/config
export default defineConfig({
	site: process.env.CI
		? 'https://blazed.tel'
		: `http://localhost:${DEV_PORT}`,
	base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,

	output: 'server',

	/* Like Vercel, Netlify,… Mimicking for dev. server */
	// trailingSlash: 'always',
	adapter: netlify(),

	server: {
		/* Dev. server only */
		port: DEV_PORT,
	},

	integrations: [
		//
		sitemap(),
		tailwind(),
	],
});
