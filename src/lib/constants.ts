/**
 * Application constants and configuration
 * Centralized location for all repeated strings, URLs, and data
 */

// Contact Information
export const CONTACT_INFO = {
	phone: {
		number: '+15551234567',
		display: '(555) 123-COOK',
		hours: 'Mon-Fri, 9am-6pm'
	},
	email: {
		address: 'emma@oliveandsalt.com',
		responseTime: 'Usually responds within 4 hours'
	},
	social: {
		instagram: 'https://instagram.com/oliveandsalt',
		facebook: 'https://facebook.com/oliveandsalt'
	}
};

// Navigation Items
export const NAV_ITEMS = [
	{ label: 'How it Works', href: '#process' },
	{ label: 'About Emma', href: '#story' },
	{ label: 'Pricing', href: '#pricing' }
];

// Key Benefits
export const KEY_BENEFITS = [
	{
		title: 'Seasonal & Local',
		description: 'Cooking with fresh, quality ingredients'
	},
	{
		title: 'In Your Kitchen',
		description: 'Prepared and cooked in your own space'
	},
	{
		title: '100% Custom',
		description: 'Tailored to your tastes & schedule'
	}
];

// Process Steps
export const PROCESS_STEPS = [
	{
		step: '01',
		title: 'Consultation',
		description:
			'We discuss your tastes, dietary needs, and schedule to create your perfect meal plan.'
	},
	{
		step: '02',
		title: 'Choose Your Style',
		description:
			'Shop yourself with our curated list, or let us handle the grocery shopping for you.'
	},
	{
		step: '03',
		title: 'Cooking Day',
		description:
			'Emma comes to your kitchen and prepares fresh, delicious meals using quality ingredients.'
	},
	{
		step: '04',
		title: 'Organized & Ready',
		description:
			'Your fridge is organized with labeled, ready-to-eat meals that bring joy to your week.'
	}
];

// Consultation Expectations
export const CONSULTATION_EXPECTATIONS = [
	{
		step: '1.',
		description: 'Emma will review your information and reach out within 24 hours'
	},
	{
		step: '2.',
		description: "We'll schedule a free 30-minute consultation call"
	},
	{
		step: '3.',
		description: "If it's a good fit, we'll plan your first cooking session"
	}
];

// Pricing Information
export const PRICING = {
	mealPrep: {
		price: '$150',
		period: 'per session',
		features: [
			'4-6 hours of in-home cooking',
			'5-7 days of fresh meals',
			'Customized to your preferences',
			'Organized fridge & meal labels'
		],
		note: '*You provide ingredients or add shopping service'
	},
	addOns: [
		{ service: 'Grocery Shopping', price: '+$25' },
		{ service: 'Special Dietary Prep', price: '+$20' },
		{ service: 'Extra Meals (per portion)', price: '+$8' }
	],
	firstTimeOffer: {
		title: 'First-time clients:',
		description: 'Free consultation included with first booking'
	}
};

// Company Information
export const COMPANY_INFO = {
	name: 'Olive & Salt',
	tagline: 'Fresh, personalized meal prep that brings the joy of home cooking back to your table.',
	founder: 'Emma Matson',
	copyright: '© 2025 Olive & Salt by Emma Matson. Made with care in your community.',
	meta: {
		title: 'Olive & Salt by Emma Matson - In-Home Meal Prep',
		description:
			'Fresh, personalized meal prep in your home. Food as it was meant to be - organic, unprocessed, and delicious.'
	}
};

// Image Paths
export const IMAGES = {
	splash: 'images/splash.jpg',
	logo: 'images/logo.png',
	preview: 'images/preview.png'
};

// Common Messages
export const MESSAGES = {
	consultation: {
		cta: 'Book Free Consultation',
		success: 'Thanks for reaching out! Emma will get back to you within 24 hours.',
		error: 'Something went wrong. Please try again or email emma@oliveandsalt.com directly.',
		responseTime: 'Emma will reach out within 24 hours to discuss your free consultation'
	},
	hero: {
		title: 'Meals that feel',
		subtitle: 'like home.',
		description:
			'Fresh, personalized meal prep in your own kitchen. Food as it was meant to be - organic, unprocessed, and delicious.'
	}
};
