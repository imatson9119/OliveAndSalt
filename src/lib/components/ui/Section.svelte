<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		id,
		class: className,
		background = 'default',
		padding = 'default',
		children
	}: {
		id?: string;
		class?: string;
		background?: 'default' | 'muted' | 'olive' | 'gradient';
		padding?: 'none' | 'sm' | 'default' | 'lg';
		children: any;
	} = $props();

	const backgrounds = {
		default: '',
		muted: 'bg-muted/30',
		olive: 'bg-olive-striped',
		gradient: 'from-olive/5 via-bone to-terracotta/5 bg-gradient-to-br'
	};

	const paddings = {
		none: '',
		sm: 'py-8 md:py-12',
		default: 'py-12 md:py-20',
		lg: 'py-20 md:py-32'
	};
</script>

<section {id} class={cn(backgrounds[background], paddings[padding], className)}>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		{@render children()}
	</div>
</section>
