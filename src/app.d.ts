// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}
	}
}

// Iconify type declaration
declare module '@iconify/svelte' {
	import { SvelteComponent } from 'svelte';
	export default class Icon extends SvelteComponent {
		icon: string;
		width?: string | number;
		height?: string | number;
		color?: string;
		class?: string;
	}
}

export {};
