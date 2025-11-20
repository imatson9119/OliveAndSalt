<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { toast } from 'svelte-sonner';
	import { MESSAGES } from '$lib/constants';

	const FORM_SUBMIT_URL = 'https://formsubmit.co/ajax/a570ca9c58c8c53d78e95c35b00d7fa6';

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
	let submissionStatus = $state<'idle' | 'success' | 'error'>('idle');
	let submissionMessage = $state('');

	// Validation
	function validateForm() {
		const newErrors: Record<string, string> = {};

		if (!formData.name.trim()) newErrors.name = 'Name is required';
		if (!formData.email.trim()) newErrors.email = 'Email is required';
		else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
		if (!formData.household.trim()) newErrors.household = 'Household size is required';

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	// Form submission
	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (!validateForm()) {
			return;
		}

		isSubmitting = true;
		submissionStatus = 'idle';
		submissionMessage = '';

		const formElement = event.currentTarget as HTMLFormElement;
		const payload = new FormData(formElement);

		try {
			const response = await fetch(FORM_SUBMIT_URL, {
				method: 'POST',
				headers: {
					Accept: 'application/json'
				},
				body: payload
			});

			if (!response.ok) {
				const errorData = (await response.json().catch(() => ({}))) as { message?: string };
				throw new Error(errorData.message ?? 'Unable to send your message right now.');
			}

			submissionStatus = 'success';
			submissionMessage = MESSAGES.consultation.success;
			toast.success(submissionMessage);

			formElement.reset();
			formData = {
				name: '',
				email: '',
				phone: '',
				household: '',
				preferences: '',
				message: ''
			};
			errors = {};
		} catch (error) {
			submissionStatus = 'error';
			submissionMessage = error instanceof Error ? error.message : MESSAGES.consultation.error;
			toast.error(submissionMessage);
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="bg-bone border-border rounded-2xl border p-4 py-8 shadow-lg sm:p-8">
	<div class="mb-8 text-center">
		<h3 class="text-olive mb-2 text-2xl font-bold">Let's Start the Conversation</h3>
		<p class="text-charcoal/80">
			Tell me about your food preferences and household. I will reach out within 24 hours to discuss
			your personalized service.
		</p>
	</div>

	<form
		class="space-y-6"
		action="https://formsubmit.co/imatson9@gmail.com"
		method="POST"
		onsubmit={handleSubmit}
	>
		<input type="hidden" name="_subject" value="New Olive & Salt inquiry" />
		<input type="hidden" name="_captcha" value="false" />
		<input type="hidden" name="_template" value="table" />
		<!-- Update with actual thank-you page when available -->
		<input type="hidden" name="_next" value="https://oliveandsalt.com/thanks" />
		<!-- Name and Email Row -->
		<div class="grid gap-4 sm:grid-cols-2">
			<div class="space-y-2">
				<Label for="name" class="text-charcoal">Your Name *</Label>
				<Input
					id="name"
					type="text"
					name="name"
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
					name="email"
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
				name="phone"
				bind:value={formData.phone}
				class="h-12"
				placeholder="(555) 123-4567"
			/>
		</div>

		<!-- Household Size -->
		<div class="space-y-2">
			<Label for="household" class="text-charcoal">Tell me about your household *</Label>
			<Input
				id="household"
				type="text"
				name="household"
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
				name="preferences"
				bind:value={formData.preferences}
				class="h-12"
				placeholder="Vegetarian, gluten-free, nut allergies, etc."
			/>
		</div>

		<!-- Message -->
		<div class="space-y-2">
			<Label for="message" class="text-charcoal">
				Anything else you'd like me to know? <span class="text-charcoal/60">(optional)</span>
			</Label>
			<Textarea
				id="message"
				name="message"
				bind:value={formData.message}
				rows={4}
				class="resize-y"
				placeholder="Tell me about your schedule, favorite cuisines, cooking goals, or any questions you have..."
			/>
		</div>

		<!-- Submit Button -->
		<div class="pt-4">
			<Button type="submit" size="lg" class="h-12 w-full text-lg" disabled={isSubmitting}>
				{isSubmitting ? 'Sending...' : `Let's get cooking!`}
			</Button>
			<p class="text-charcoal/60 mt-3 text-center text-sm">
				{MESSAGES.consultation.responseTime}
			</p>
		</div>
	</form>
</div>
