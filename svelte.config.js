import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { join, dirname } from 'path';
const __dirname = dirname(new URL(import.meta.url).pathname);
//layouts
const pathToBlogLayout = join(__dirname, './src/lib/layouts/blog.svelte');
const pathToContentLayout = join(__dirname, './src/lib/layouts/content.svelte');
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: {
				blog: pathToBlogLayout,
				content: pathToContentLayout
			}
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx']
};

export default config;
