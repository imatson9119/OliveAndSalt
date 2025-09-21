<script lang="ts">
	let {
		text,
		position = 'top-right',
		variant = 'terracotta',
		class: className = ''
	}: {
		text: string;
		position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
		variant?: 'terracotta' | 'olive';
		class?: string;
	} = $props();

	const positions = {
		'top-left': 'top-4 left-4',
		'top-right': 'top-4 right-4',
		'bottom-left': 'bottom-4 left-4',
		'bottom-right': 'bottom-4 right-4'
	};

	const variants = {
		terracotta: 'bg-terracotta text-bone',
		olive: 'bg-olive text-bone'
	};
</script>

<div
	class="absolute rounded-full px-3 py-1 text-xs font-medium shadow-lg md:text-sm {positions[position]} {variants[variant]} {className}"
>
	{text}
</div>
