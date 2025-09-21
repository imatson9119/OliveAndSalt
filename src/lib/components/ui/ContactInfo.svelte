<script lang="ts">
	import { CONTACT_INFO } from '$lib/constants';

	let {
		variant = 'full',
		class: className = ''
	}: {
		variant?: 'full' | 'phone-only' | 'email-only';
		class?: string;
	} = $props();
</script>

<div class="space-y-3 {className}">
	{#if variant === 'full' || variant === 'phone-only'}
		<a
			href="tel:{CONTACT_INFO.phone.number}"
			class="text-charcoal hover:text-olive flex items-center gap-3 transition-colors"
		>
			<svg class="h-4 w-4 flex-shrink-0 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
				/>
			</svg>
			<div>
				<div class="text-sm font-medium md:text-base">{CONTACT_INFO.phone.display}</div>
				<div class="text-charcoal/60 text-xs md:text-sm">{CONTACT_INFO.phone.hours}</div>
			</div>
		</a>
	{/if}

	{#if variant === 'full' || variant === 'email-only'}
		<a
			href="mailto:{CONTACT_INFO.email.address}"
			class="text-charcoal hover:text-olive flex items-center gap-3 transition-colors"
		>
			<svg class="h-4 w-4 flex-shrink-0 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
				/>
			</svg>
			<div>
				<div class="text-sm font-medium md:text-base">{CONTACT_INFO.email.address}</div>
				<div class="text-charcoal/60 text-xs md:text-sm">{CONTACT_INFO.email.responseTime}</div>
			</div>
		</a>
	{/if}
</div>
