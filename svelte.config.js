import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
	kit: {
		adapter: adapter({
			fallback: 'index.html' // may differ from host to host
		}),
		paths: {
			base: dev ? '' : process.env.PUBLIC_BASE_PATH || ''
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};
