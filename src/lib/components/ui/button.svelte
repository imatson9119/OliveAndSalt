<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type ButtonVariant = 'default' | 'secondary' | 'ghost' | 'link';
	type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

	interface ButtonProps {
		variant?: ButtonVariant;
		size?: ButtonSize;
		class?: string;
		onclick?: () => void;
		children?: Snippet;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
	}

	let {
		variant = 'default',
		size = 'default',
		class: className,
		children,
		onclick,
		type = 'button',
		disabled = false
	}: ButtonProps = $props();

	const variants = {
		default: 'bg-olive text-bone hover:bg-olive/90 shadow-sm',
		secondary: 'bg-terracotta text-bone hover:bg-terracotta/90 shadow-sm',
		ghost: 'hover:bg-olive/10 hover:text-olive',
		link: 'text-olive underline-offset-4 hover:underline'
	};

	const sizes = {
		default: 'h-10 px-6 py-2 text-sm',
		sm: 'h-8 px-4 text-xs',
		lg: 'h-12 px-8 text-base',
		icon: 'h-10 w-10'
	};
</script>

<button
	class={cn(
		'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
		variants[variant],
		sizes[size],
		className
	)}
	{onclick}
	{type}
	{disabled}
>
	{@render children?.()}
</button>
