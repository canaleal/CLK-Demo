import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import { resolve } from "path";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			           resolve: {
			               alias: {
			                   $components: resolve('./src/components'),
							   $utils: resolve('./src/utils'),
							   $constants: resolve('./src/constants'),
			               }
			           }
			       }
	}
};



export default config;
