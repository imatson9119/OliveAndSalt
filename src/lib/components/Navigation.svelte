<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { NAV_ITEMS, COMPANY_INFO } from '$lib/constants';
	import { scrollToSection } from '$lib/utils/navigation';

	let { class: className }: { class?: string } = $props();
	let mobileMenuOpen = $state(false);

	function handleNavClick(href: string) {
		mobileMenuOpen = false;
		scrollToSection(href);
	}
</script>

<nav
	class={cn(
		'bg-bone/95 border-border sticky top-0 z-50 w-full border-b backdrop-blur-sm',
		className
	)}
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="text-terracotta font-serif text-xl font-bold">{COMPANY_INFO.name}</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					{#each NAV_ITEMS as item}
						<button
							onclick={() => handleNavClick(item.href)}
							class="text-charcoal hover:text-olive px-3 py-2 text-sm font-medium transition-colors"
						>
							{item.label}
						</button>
					{/each}
				</div>
			</div>

			<!-- Desktop CTA Button -->
			<div class="hidden md:block">
				<Button
					variant="secondary"
					onclick={() => scrollToSection('#consultation')}
				>
					{#snippet children()}Book Consultation{/snippet}
				</Button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					type="button"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="text-charcoal hover:text-olive focus:ring-olive inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset"
					aria-expanded={mobileMenuOpen}
				>
					<span class="sr-only">Open main menu</span>
					{#if mobileMenuOpen}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile menu -->
		{#if mobileMenuOpen}
			<div class="border-border bg-bone/95 border-t backdrop-blur-sm md:hidden">
				<div class="space-y-1 px-2 pt-2 pb-3">
					{#each NAV_ITEMS as item}
						<button
							onclick={() => handleNavClick(item.href)}
							class="text-charcoal hover:text-olive block w-full px-3 py-3 text-left text-base font-medium transition-colors"
						>
							{item.label}
						</button>
					{/each}
					<div class="pt-4 pb-2">
						<Button
							variant="secondary"
							class="w-full"
							onclick={() => {
								mobileMenuOpen = false;
								scrollToSection('#consultation');
							}}
						>
							{#snippet children()}Book Consultation{/snippet}
						</Button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>
