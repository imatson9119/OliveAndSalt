<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import { Button } from '$lib/components/ui/button';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import BenefitsGrid from '$lib/components/ui/BenefitsGrid.svelte';
	import ContactInfo from '$lib/components/ui/ContactInfo.svelte';
	import * as Popover from '$lib/components/ui/popover';
	import { onMount } from 'svelte';
	import {
		PROCESS_STEPS,
		CONSULTATION_EXPECTATIONS,
		PRICING,
		COMPANY_INFO,
		IMAGES,
		MESSAGES,
		CONTACT_INFO
	} from '$lib/constants';
	import { scrollToSection } from '$lib/utils/navigation';

	let heroSection: HTMLElement;
	let processCards: HTMLElement[] = [];

	onMount(() => {
		// Smooth scroll animations for elements
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-fade');
				}
			});
		});

		if (heroSection) observer.observe(heroSection);
		processCards.forEach((card) => observer.observe(card));
	});
</script>

<svelte:head>
	<title>{COMPANY_INFO.meta.title}</title>
	<meta name="description" content={COMPANY_INFO.meta.description} />
</svelte:head>

<div class="bg-bone min-h-screen">
	<Navigation />

	<!-- Hero Section -->
	<section
		bind:this={heroSection}
		class="from-bone via-bone to-muted relative overflow-hidden bg-gradient-to-br"
	>
		<!-- Mobile Hero Layout -->
		<div class="lg:hidden">
			<div class="container mx-auto px-4 py-8">
				<!-- Mobile Hero Image - Clean, no overlays -->
				<div class="relative mb-6 overflow-hidden rounded-2xl shadow-2xl">
					<div class="from-olive/20 via-terracotta/10 to-bone aspect-[4/3] bg-gradient-to-br">
						<img
							src={IMAGES.splash}
							alt="Chef preparing fresh meals"
							class="h-full w-full object-cover"
						/>
					</div>
				</div>

				<!-- Mobile Hero Text - Separate section -->
				<div class="mb-8 text-center">
					<h1 class="text-olive mb-4 text-3xl leading-tight font-bold sm:text-4xl">
						<span class="block">{MESSAGES.hero.title}</span>
						<span class="text-terracotta italic">{MESSAGES.hero.subtitle}</span>
					</h1>
					<p class="text-charcoal/80 mx-auto max-w-sm text-base leading-relaxed sm:text-lg">
						{MESSAGES.hero.description}
					</p>
				</div>

				<!-- Mobile Key Benefits - Compact cards -->
				<BenefitsGrid variant="mobile" />

				<!-- Mobile CTAs - Stack vertically -->
				<div class="space-y-3">
					<Button size="lg" class="h-12 w-full" onclick={() => scrollToSection('#consultation')}>
						{MESSAGES.consultation.cta}
					</Button>
					<Button
						variant="secondary"
						size="lg"
						class="h-12 w-full"
						onclick={() => scrollToSection('#process')}
					>
						See How It Works →
					</Button>
				</div>
			</div>
		</div>

		<!-- Desktop Hero Layout -->
		<div class="hidden lg:block">
			<div class="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
				<div class="grid items-center gap-12 lg:grid-cols-2">
					<!-- Text Content - Left side on desktop -->
					<div class="space-y-8">
						<div class="space-y-4">
							<h1 class="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
								<span class="text-olive">{MESSAGES.hero.title}</span>
								<br />
								<span class="text-terracotta italic">{MESSAGES.hero.subtitle}</span>
							</h1>
							<p class="text-charcoal/80 max-w-lg text-lg leading-relaxed sm:text-xl">
								{MESSAGES.hero.description}
							</p>
						</div>

						<div class="flex flex-col gap-4 sm:flex-row">
							<Button size="lg" onclick={() => scrollToSection('#consultation')}>
								{MESSAGES.consultation.cta}
							</Button>
							<Button variant="secondary" size="lg" onclick={() => scrollToSection('#process')}>
								See How It Works →
							</Button>
						</div>

						<!-- Key Benefits -->
						<BenefitsGrid variant="desktop" />
					</div>

					<!-- Hero Image/Visual - Right side on desktop -->
					<div class="relative">
						<div
							class="from-olive/10 to-terracotta/10 relative overflow-hidden rounded-2xl bg-gradient-to-br shadow-2xl backdrop-blur-sm"
						>
							<div
								class="from-olive/20 via-terracotta/10 to-bone flex aspect-square items-center justify-center bg-gradient-to-br"
							>
								<img
									src={IMAGES.splash}
									alt="Chef preparing fresh meals"
									class="h-full w-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Decorative background elements -->
		<div
			class="bg-olive/5 absolute top-1/4 left-0 h-64 w-64 rounded-full opacity-50 blur-3xl"
		></div>
		<div
			class="bg-terracotta/5 absolute right-0 bottom-1/4 h-96 w-96 rounded-full opacity-50 blur-3xl"
		></div>
	</section>

	<!-- Process Section -->
	<Section id="process" background="olive">
		<div class="mb-12 text-center md:mb-16">
			<h2 class="text-bone mb-3 text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl">
				How It Works
			</h2>
			<p class="text-bone mx-auto max-w-2xl px-4 text-base md:text-lg">
				Simple, transparent, and custom-made for you! Here’s how I’ll bring fresh, homemade meals to
				your table.
			</p>
		</div>

		<!-- Mobile: Stack vertically, Desktop: Grid layout -->
		<div class="space-y-6 md:grid md:grid-cols-1 md:gap-8 md:space-y-0 lg:grid-cols-3">
			{#each PROCESS_STEPS as process, index (process.title)}
				<div
					bind:this={processCards[index]}
					class="hover:bg-bone rounded-xl border-[3px] border-dashed border-white/[0.33] p-5 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg md:p-6"
				>
					<div class="flex items-center gap-4 md:block">
						<div class="text-bone mb-0 flex-shrink-0 text-2xl font-bold md:mb-4 md:text-3xl">
							{process.step}
						</div>
						<div class="flex-1 md:hidden">
							<p class="mb-1 text-lg font-semibold text-[#ffffff99]">{process.title}</p>
							<p class="process-text-bone text-sm">{process.description}</p>
						</div>
					</div>
					<div class="hidden md:block">
						<p class="mb-3 text-xl font-semibold text-[#ffffff99]">{process.title}</p>
						<p class="process-text-bone">{process.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</Section>

	<!-- Emma's Story Section -->
	<Section id="story">
		<div class="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
			<div class="order-2 space-y-4 md:space-y-6 lg:order-1">
				<h2 class="text-olive text-2xl font-bold sm:text-3xl md:text-4xl">
					Meet {COMPANY_INFO.founder}
				</h2>
				<div class="text-charcoal/80 space-y-3 text-sm leading-relaxed md:space-y-4 md:text-base">
					<p>
						Since I can remember, I’ve been fascinated by cooking - experimenting with flavors,
						learning which ingredients shine in different dishes, and finding creative ways to turn
						simple items into something special. I grew up in a family where the kitchen was the
						primary gathering space. We spent countless hours cooking together, sharing meals around
						the table, and often ended the evening watching something on Food Network. Healthy,
						from-scratch meals were our norm - though we happily made room for the occasional
						homemade french fries or key lime pie.
					</p>
					<p>
						Nowadays my love for food and nutrition has only deepened. I’m always eager to try new
						dishes, explore flavors from different cultures, and stay on top of the latest food
						trends. Over time, I’ve even become a bit of a salt connoisseur - I even have a whole
						PowerPoint about it! Most days you’ll find me with an iced espresso in hand, snacking on
						celery (I love food with a good crunch!), and browsing recipe blogs for new ideas.
					</p>
					<p>
						What I love most about food is the way it nourishes the body while bringing people
						together. Across every culture, sharing a meal with people you love is a tradition that
						connects us all. <span class="text-olive font-semibold"
							>I can’t wait to share that same joy and passion for cooking with you!</span
						>
					</p>
				</div>
			</div>

			<div class="relative order-1 lg:order-2">
				<div class="overflow-hidden rounded-2xl shadow-xl">
					<div
						class="from-olive/10 to-terracotta/10 flex aspect-[4/3] items-center justify-center bg-gradient-to-br md:aspect-[4/5]"
					>
						<div class="text-olive/60 text-4xl md:text-6xl">👩‍🍳</div>
					</div>
				</div>
			</div>
		</div>
	</Section>

	<!-- Pricing Section -->
	<Section id="pricing" background="muted">
		<div class="mb-12 text-center md:mb-16">
			<h2 class="text-olive mb-3 text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl">
				Simple, Transparent Pricing
			</h2>
			<p class="text-charcoal/80 mx-auto max-w-2xl px-4 text-base md:text-lg">
				I believe in keeping things simple and straightforward - no surprises, no contracts, just
				delicious meals when you want them.
			</p>
		</div>

		<div class="mx-auto max-w-4xl space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
			<div class="bg-bone border-border rounded-xl border p-6 shadow-sm md:p-8">
				<h3 class="text-olive mb-3 text-xl font-bold md:mb-4 md:text-2xl">Meal Prep Service</h3>
				<div class="text-terracotta mb-3 text-2xl font-bold md:mb-2 md:text-3xl">
					{PRICING.mealPrep.price}
					<span class="text-charcoal/70 text-sm font-normal md:text-base"
						>{PRICING.mealPrep.period}</span
					>
				</div>
				<ul class="text-charcoal/80 mb-4 space-y-2 text-sm md:mb-6 md:space-y-3 md:text-base">
					{#each PRICING.mealPrep.features as feature (feature)}
						<li class="flex items-center">
							<span class="text-olive mr-2">✓</span>
							{feature}
						</li>
					{/each}
				</ul>
				<p class="text-charcoal/70 text-xs md:text-sm">
					{PRICING.mealPrep.note}
				</p>
			</div>

			<div class="bg-bone border-border rounded-xl border p-6 shadow-sm md:p-8">
				<h3 class="text-olive mb-3 text-xl font-bold md:mb-4 md:text-2xl">Add-On Services</h3>
				<div class="space-y-3 text-sm md:space-y-4 md:text-base">
					{#each PRICING.addOns as addOn (addOn.service)}
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-2">
								<span class="text-charcoal">{addOn.service}</span>
								<Popover.Root>
									<Popover.Trigger
										class="text-charcoal/60 hover:text-olive cursor-pointer transition-colors"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-info"
										>
											<circle cx="12" cy="12" r="10"></circle>
											<path d="M12 16v-4"></path>
											<path d="M12 8h.01"></path>
										</svg>
									</Popover.Trigger>
									<Popover.Content class="w-80 p-4">
										<div class="space-y-3">
											<div>
												<h4 class="text-olive mb-1 text-base font-semibold">
													{addOn.detailedInfo.title}
												</h4>
												<p class="text-charcoal/80 text-sm leading-relaxed">
													{addOn.detailedInfo.overview}
												</p>
											</div>

											{#if addOn.detailedInfo.includes}
												<div>
													<h5 class="text-charcoal mb-2 text-sm font-medium">What's Included:</h5>
													<ul class="text-charcoal/80 space-y-1 text-xs">
														{#each addOn.detailedInfo.includes as item}
															<li class="flex items-start gap-1">
																<span class="text-olive mt-0.5">•</span>
																<span>{item}</span>
															</li>
														{/each}
													</ul>
												</div>
											{/if}

											<div class="border-t pt-2">
												<div class="text-charcoal/70 text-xs">
													<strong>Timeframe:</strong>
													{addOn.detailedInfo.timeframe}
												</div>
												{#if addOn.detailedInfo.note}
													<div class="text-charcoal/70 mt-1 text-xs">
														<em>{addOn.detailedInfo.note}</em>
													</div>
												{/if}
											</div>
										</div>
									</Popover.Content>
								</Popover.Root>
							</div>
							<span class="text-terracotta font-semibold">{addOn.price}</span>
						</div>
					{/each}
				</div>
				<div class="bg-olive/10 mt-4 rounded-lg p-3 md:mt-6 md:p-4">
					<div class="text-olive text-xs font-medium md:text-sm">
						{PRICING.firstTimeOffer.title}
					</div>
					<div class="text-charcoal/80 text-xs md:text-sm">
						{PRICING.firstTimeOffer.description}
					</div>
				</div>
			</div>
		</div>
	</Section>

	<!-- Contact Form Section -->
	<Section id="consultation" background="gradient">
		<div class="mx-auto max-w-4xl">
			<div class="mb-8 text-center md:mb-12">
				<h2 class="text-olive mb-3 text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl">
					Ready to Get Started?
				</h2>
				<p class="text-charcoal/80 mx-auto max-w-2xl px-4 text-base leading-relaxed md:text-xl">
					Let's chat about your needs and create a meal plan that brings joy back to your table. No
					pressure, just a friendly conversation about good food.
				</p>
			</div>

			<div class="space-y-6 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8 lg:space-y-0">
				<!-- Contact Form -->
				<div class="order-2 lg:order-1 lg:col-span-2">
					<ContactForm />
				</div>

				<!-- Contact Info Sidebar -->
				<div class="order-1 space-y-4 md:space-y-6 lg:order-2">
					<div class="bg-olive/10 rounded-xl p-4 md:p-6">
						<h3 class="text-olive mb-3 text-base font-semibold md:mb-4 md:text-lg">
							What to Expect
						</h3>
						<div class="text-charcoal/80 space-y-2 text-xs md:space-y-3 md:text-sm">
							{#each CONSULTATION_EXPECTATIONS as expectation (expectation)}
								<div class="flex items-start gap-2 md:gap-3">
									<span class="text-terracotta font-bold">{expectation.step}</span>
									<span>{expectation.description}</span>
								</div>
							{/each}
						</div>
					</div>

					<div class="bg-terracotta/10 rounded-xl p-4 md:p-6">
						<h3 class="text-olive mb-3 text-base font-semibold md:mb-4 md:text-lg">
							Prefer to Call?
						</h3>
						<ContactInfo />
					</div>
				</div>
			</div>
		</div>
	</Section>

	<!-- Footer -->
	<footer class="bg-charcoal text-bone py-12">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<div class="space-y-6 text-center">
				<div class="font-serif text-2xl font-bold">{COMPANY_INFO.name}</div>
				<p class="text-bone/80 mx-auto max-w-md">
					{COMPANY_INFO.tagline}
				</p>
				<div class="flex justify-center space-x-6">
					<a
						href={CONTACT_INFO.social.instagram}
						class="text-bone/70 hover:text-bone transition-colors">Instagram</a
					>
					<a
						href={CONTACT_INFO.social.facebook}
						class="text-bone/70 hover:text-bone transition-colors">Facebook</a
					>
					<a
						href="mailto:{CONTACT_INFO.email.address}"
						class="text-bone/70 hover:text-bone transition-colors">Email</a
					>
				</div>
				<div class="border-bone/20 text-bone/60 border-t pt-6 text-sm">
					{COMPANY_INFO.copyright}
				</div>
			</div>
		</div>
	</footer>
</div>
