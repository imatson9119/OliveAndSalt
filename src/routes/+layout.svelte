<script lang="ts">
	import { Toaster } from 'svelte-sonner';
	import { COMPANY_INFO, CONTACT_INFO } from '$lib/constants';
	import '../app.css';
	let { children } = $props();

	const canonicalUrl = COMPANY_INFO.website;
	const ogImage = `${COMPANY_INFO.website.replace(/\/$/, '')}/${COMPANY_INFO.meta.image}`;
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: COMPANY_INFO.name,
		url: COMPANY_INFO.website,
		logo: `${COMPANY_INFO.website.replace(/\/$/, '')}/images/logo.png`,
		image: ogImage,
		sameAs: [CONTACT_INFO.social.instagram, CONTACT_INFO.social.facebook],
		founder: {
			'@type': 'Person',
			name: 'Emma Matson'
		}
	};
</script>

<svelte:head>
	<title>{COMPANY_INFO.meta.title}</title>
	<meta name="description" content={COMPANY_INFO.meta.description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={COMPANY_INFO.website} />
	<meta property="og:title" content={COMPANY_INFO.meta.title} />
	<meta property="og:description" content={COMPANY_INFO.meta.description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:secure_url" content={ogImage} />
	<meta property="og:image:width" content={COMPANY_INFO.meta.imageWidth} />
	<meta property="og:image:height" content={COMPANY_INFO.meta.imageHeight} />
	<meta property="og:image:alt" content={COMPANY_INFO.meta.imageAlt} />
	<meta property="og:site_name" content={COMPANY_INFO.name} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={COMPANY_INFO.website} />
	<meta name="twitter:title" content={COMPANY_INFO.meta.title} />
	<meta name="twitter:description" content={COMPANY_INFO.meta.description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={COMPANY_INFO.meta.imageAlt} />

	<!-- Additional SEO -->
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Emma Matson" />
	<meta name="theme-color" content={COMPANY_INFO.meta.themeColor} />

	<script type="application/ld+json">
{JSON.stringify(jsonLd)}
	</script>
</svelte:head>

<Toaster position="top-center" richColors />
{@render children()}
