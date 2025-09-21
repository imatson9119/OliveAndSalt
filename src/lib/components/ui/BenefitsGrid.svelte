<script lang="ts">
	import { KEY_BENEFITS } from '$lib/constants';

	let {
		variant = 'desktop',
		class: className = ''
	}: {
		variant?: 'mobile' | 'desktop';
		class?: string;
	} = $props();
</script>

{#if variant === 'mobile'}
	<!-- Mobile: Compact cards -->
	<div class="mb-8 grid grid-cols-1 gap-4 {className}">
		{#each KEY_BENEFITS as benefit (benefit.title)}
			<div class="bg-bone border-olive/20 rounded-xl border p-4 text-center shadow-sm">
				<div class="text-olive mb-1 text-lg font-bold">{benefit.title}</div>
				<div class="text-charcoal/80 text-sm">{benefit.description}</div>
			</div>
		{/each}
	</div>
{:else}
	<!-- Desktop: Horizontal layout -->
	<div class="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3 {className}">
		{#each KEY_BENEFITS as benefit (benefit.title)}
			<div class="text-center sm:text-left">
				<div class="text-olive text-2xl font-bold">{benefit.title}</div>
				<div class="text-charcoal/70 text-sm">{benefit.description}</div>
			</div>
		{/each}
	</div>
{/if}
