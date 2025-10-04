<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import * as Drawer from '$lib/components/ui/drawer';
	import { NAV_ITEMS, COMPANY_INFO } from '$lib/constants';

	let { class: className }: { class?: string } = $props();
	let mobileMenuOpen = $state(false);
	let savedScrollPosition = $state(0);
	let pendingScrollTarget = $state<string | null>(null);

	function handleNavClick(href: string) {
		// Save the target for scrolling after drawer closes
		pendingScrollTarget = href;
		mobileMenuOpen = false;
	}

	function handleDesktopNavClick(href: string) {
		const targetElement = document.querySelector(href);
		if (targetElement) {
			// Get navbar height and add some padding
			const navbarHeight = 80;
			const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
			const offsetPosition = elementPosition - navbarHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	}

	// Track scroll position when drawer opens and handle navigation when it closes
	$effect(() => {
		if (mobileMenuOpen) {
			// Save current scroll position when drawer opens
			savedScrollPosition = window.scrollY;
		} else {
			// Drawer is closing
			if (pendingScrollTarget) {
				// Wait for drawer animation to complete, then scroll to target
				const target = pendingScrollTarget;
				setTimeout(() => {
					const targetElement = document.querySelector(target);
					if (targetElement) {
						document.documentElement.style.scrollBehavior = 'smooth';
						// Get navbar height (64px = h-16) and add some padding
						const navbarHeight = 80;
						const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
						const offsetPosition = elementPosition - navbarHeight;

						window.scrollTo({
							top: offsetPosition,
							behavior: 'smooth'
						});
					}
					pendingScrollTarget = null;
				}, 300); // Wait for drawer close animation
			} else if (savedScrollPosition > 0) {
				// Restore scroll position when drawer closes without navigation
				document.documentElement.style.scrollBehavior = 'auto';
				window.scrollTo(0, savedScrollPosition);
				// Re-enable smooth scrolling after a brief delay
				setTimeout(() => {
					document.documentElement.style.scrollBehavior = 'smooth';
				}, 100);
			}
		}
	});
</script>

<nav
	class={cn(
		'sticky top-0 z-50 w-full border-b-[3px] border-dashed border-[#f9f6ee]/80 bg-[#f9f6ee]/60 backdrop-blur-sm',
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
					{#each NAV_ITEMS as item (item.href)}
						<button
							onclick={() => handleDesktopNavClick(item.href)}
							class="text-charcoal hover:text-olive px-3 py-2 text-sm font-medium transition-colors"
						>
							{item.label}
						</button>
					{/each}
				</div>
			</div>

			<!-- Desktop CTA Button -->
			<div class="hidden md:block">
				<Button variant="secondary" onclick={() => handleDesktopNavClick('#consultation')}>
					Book Consultation
				</Button>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<Drawer.Root bind:open={mobileMenuOpen}>
					<Drawer.Trigger
						class="text-charcoal hover:text-olive focus:ring-olive inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset"
					>
						<span class="sr-only">Open main menu</span>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</Drawer.Trigger>
					<Drawer.Content>
						<div class="mx-auto w-full max-w-sm">
							<Drawer.Header>
								<Drawer.Title class="text-charcoal">Navigation</Drawer.Title>
								<Drawer.Description class="text-charcoal/70">
									Navigate to different sections of the site
								</Drawer.Description>
							</Drawer.Header>
							<div class="px-4 pb-4">
								<div class="space-y-1">
									{#each NAV_ITEMS as item (item.href)}
										<button
											onclick={() => handleNavClick(item.href)}
											class="text-charcoal hover:text-olive hover:bg-charcoal/5 block w-full rounded-md px-3 py-3 text-left text-base font-medium transition-colors"
										>
											{item.label}
										</button>
									{/each}
								</div>
								<div class="pt-4">
									<Button
										variant="secondary"
										class="w-full"
										onclick={() => handleNavClick('#consultation')}
									>
										Book Consultation
									</Button>
								</div>
							</div>
						</div>
					</Drawer.Content>
				</Drawer.Root>
			</div>
		</div>
	</div>
</nav>
