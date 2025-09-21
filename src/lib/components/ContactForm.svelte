<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { toast } from 'svelte-sonner';
	import { MESSAGES } from '$lib/constants';

	// Form state
	let formData = $state({
		name: '',
		email: '',
		phone: '',
		household: '',
		preferences: '',
		message: ''
	});

	let isSubmitting = $state(false);
	let errors = $state<Record<string, string>>({});

	// Validation
	function validateForm() {
		const newErrors: Record<string, string> = {};

		if (!formData.name.trim()) newErrors.name = 'Name is required';
		if (!formData.email.trim()) newErrors.email = 'Email is required';
		else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
		if (!formData.household.trim())
			newErrors.household = 'Please tell us about your household size';

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	// Form submission
	async function handleSubmit() {
		if (!validateForm()) return;

		isSubmitting = true;

		try {
			// Simulate form submission (replace with actual endpoint)
			await new Promise((resolve) => setTimeout(resolve, 1000));

			toast.success(MESSAGES.consultation.success);

			// Reset form
			formData = {
				name: '',
				email: '',
				phone: '',
				household: '',
				preferences: '',
				message: ''
			};
		} catch {
			toast.error(MESSAGES.consultation.error);
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="bg-bone border-border rounded-2xl border p-8 shadow-lg">
	<div class="mb-8 text-center">
		<h3 class="text-olive mb-2 text-2xl font-bold">Let's Start the Conversation</h3>
		<p class="text-charcoal/80">
			Tell us about your household and food preferences. Emma will reach out within 24 hours to
			discuss your personalized meal plan.
		</p>
	</div>

	<form class="space-y-6">
		<!-- Name and Email Row -->
		<div class="grid gap-4 sm:grid-cols-2">
			<div class="space-y-2">
				<Label for="name" class="text-charcoal">Your Name *</Label>
				<Input
					id="name"
					type="text"
					bind:value={formData.name}
					class="h-12 {errors.name ? 'border-red-400' : ''}"
					placeholder="Emma Smith"
				/>
				{#if errors.name}
					<p class="text-sm text-red-500">{errors.name}</p>
				{/if}
			</div>

			<div class="space-y-2">
				<Label for="email" class="text-charcoal">Email Address *</Label>
				<Input
					id="email"
					type="email"
					bind:value={formData.email}
					class="h-12 {errors.email ? 'border-red-400' : ''}"
					placeholder="emma@example.com"
				/>
				{#if errors.email}
					<p class="text-sm text-red-500">{errors.email}</p>
				{/if}
			</div>
		</div>

		<!-- Phone -->
		<div class="space-y-2">
			<Label for="phone" class="text-charcoal">
				Phone Number <span class="text-charcoal/60">(optional)</span>
			</Label>
			<Input
				id="phone"
				type="tel"
				bind:value={formData.phone}
				class="h-12"
				placeholder="(555) 123-4567"
			/>
		</div>

		<!-- Household Size -->
		<div class="space-y-2">
			<Label for="household" class="text-charcoal">Tell us about your household *</Label>
			<Input
				id="household"
				type="text"
				bind:value={formData.household}
				class="h-12 {errors.household ? 'border-red-400' : ''}"
				placeholder="Family of 4, 2 adults and 2 kids (ages 8 & 12)"
			/>
			{#if errors.household}
				<p class="text-sm text-red-500">{errors.household}</p>
			{/if}
		</div>

		<!-- Dietary Preferences -->
		<div class="space-y-2">
			<Label for="preferences" class="text-charcoal">
				Dietary preferences or restrictions <span class="text-charcoal/60">(optional)</span>
			</Label>
			<Input
				id="preferences"
				type="text"
				bind:value={formData.preferences}
				class="h-12"
				placeholder="Vegetarian, gluten-free, nut allergies, etc."
			/>
		</div>

		<!-- Message -->
		<div class="space-y-2">
			<Label for="message" class="text-charcoal">
				Anything else you'd like Emma to know? <span class="text-charcoal/60">(optional)</span>
			</Label>
			<Textarea
				id="message"
				bind:value={formData.message}
				rows={4}
				class="resize-y"
				placeholder="Tell us about your schedule, favorite cuisines, cooking goals, or any questions you have..."
			/>
		</div>

		<!-- Submit Button -->
		<div class="pt-4">
			<Button
				type="submit"
				size="lg"
				class="h-12 w-full text-lg"
				disabled={isSubmitting}
				onclick={handleSubmit}
			>
				{isSubmitting ? 'Sending...' : `Send Message & Schedule Consultation`}
			</Button>
			<p class="text-charcoal/60 mt-3 text-center text-sm">
				{MESSAGES.consultation.responseTime}
			</p>
		</div>
	</form>
</div>
