/**
 * Application constants and configuration
 * Centralized location for all repeated strings, URLs, and data
 */

// Contact Information
export const CONTACT_INFO = {
	phone: {
		number: '+14095945718',
		display: '(409) 594-5718',
		hours: 'Mon-Fri, 9am-5pm'
	},
	email: {
		address: 'emma@olive-and-salt.com',
		responseTime: "I'll usually respond within 24 hours"
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
	{ label: 'Values', href: '#values' },
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

// Values
export const VALUES = [
	{
		title: 'Grass-fed / Pasture-raised',
		description:
			'I prioritize meats from animals raised on pasture with access to their natural diet. This means better nutrition, more omega-3s, and meat from animals raised humanely and sustainably.'
	},
	{
		title: 'Seed Oil-Free',
		description:
			'No canola, soybean, or vegetable oils here. Instead, I cook with quality fats like olive oil, avocado oil, butter, and ghee that support your health and enhance flavor.'
	},
	{
		title: 'Organic',
		description:
			'When possible, I source organic produce and ingredients to minimize exposure to pesticides and chemicals while supporting sustainable farming practices.'
	},
	{
		title: 'Minimally Processed',
		description:
			'Real food, simply prepared. I focus on whole ingredients you can recognize and pronounce, avoiding heavily processed foods with long ingredient lists.'
	},
	{
		title: 'High-Protein',
		description:
			'Every meal is designed to include quality protein sources to keep you satisfied, support muscle health, and maintain steady energy throughout your day.'
	},
	{
		title: 'Dietary Friendly',
		description:
			'Whether you follow paleo, keto, gluten-free, dairy-free, or have specific allergies, I customize every meal to fit your unique dietary needs and preferences.'
	},
	{
		title: 'Refined Sugar-Free',
		description:
			'I avoid refined sugars and artificial sweeteners, instead using natural sweeteners like honey or maple syrup sparingly when needed for balanced, nourishing meals.'
	}
];

// Process Steps
export const PROCESS_STEPS = [
	{
		step: '01',
		title: 'Consultation',
		description:
			'We discuss your dietary needs, schedule, and assess your kitchen to create your perfect meal plan.'
	},
	{
		step: '02',
		title: 'Book Your Service',
		description:
			'I come to your kitchen and prepare nourishing, delicious meals for you and your family.'
	},
	{
		step: '03',
		title: 'Enjoy',
		description:
			'You’ve saved time and energy! Enjoy a fridge full or ready-to-eat meals and snacks.'
	}
];

// Consultation Expectations
export const CONSULTATION_EXPECTATIONS = [
	{
		step: '1.',
		description: "I'll review your information and reach out within 24 hours"
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
		price: '$450',
		period: 'per session',
		features: [
			'4-6 hours of in-home cooking',
			'Grocery shopping',
			'Customized to your preferences',
			'Organized fridge & meal labels',
			'Cleanup'
		],
		note: '*Groceries are billed separately'
	},
	addOns: [
		{
			service: 'Pantry Refresh',
			price: '+$100-200',
			detailedInfo: {
				title: 'Pantry Refresh',
				overview:
					"Let's get your kitchen stocked with healthy staples, condiments, snacks, and basics. $150 for a small refresh (pantry or fridge), $200 for a full refresh (both pantry and fridge), and $100 for each ongoing refresh after the initial full refresh.",
				includes: [
					'Assessment of current pantry items',
					'Removal of expired or unhealthy products',
					'Shopping for quality staples (grains, legumes, oils, vinegars)',
					'Healthy snack selection',
					'Condiments and spice upgrades'
				],
				timeframe: '2-3 hours'
			}
		},
		{
			service: 'Storage Container Shopping',
			price: '+$75',
			detailedInfo: {
				title: 'Storage Container Shopping',
				overview:
					'I will shop for and purchase the food storage containers that you specifically need. Tailored to your specific needs - BPA free, glass, based on specific meals, etc. Note that cost of goods is billed separately.',
				includes: [
					'Assessment of your storage needs',
					'Research and selection of optimal containers',
					'Shopping for containers based on your preferences',
					'Material selection (glass, BPA-free plastic, etc.)',
					'Labeling system setup'
				],
				timeframe: '1-2 hours research + shopping time',
				note: 'Container costs are billed separately based on your selections'
			}
		},
		{
			service: 'Local Ingredient Sourcing',
			price: '+$25',
			detailedInfo: {
				title: 'Local Ingredient Sourcing',
				overview:
					'This service is an offering of locally sourced items (ex: organic sourdough bread, homemade yogurt, etc) from people in the area. You will receive an offering every few weeks and can choose to add-on to your weekly service.',
				timeframe: 'Ongoing service with new offerings every few weeks',
				examples: [
					'Organic sourdough from local baker',
					'Fresh goat cheese from nearby farm',
					'Seasonal vegetables from farmers market',
					'Homemade fermented foods',
					'Local honey and preserves'
				]
			}
		}
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
	founder: 'Emma',
	copyright: '© 2025 Olive & Salt by Emma Matson. Made with care in your community.',
	website: 'https://olive-and-salt.com',
	meta: {
		title: 'Olive & Salt by Emma Matson - In-Home Meal Prep',
		description:
			'Fresh, personalized meals in your own kitchen. Food as it was meant to be - simple, nourishing, and delicious.',
		image: 'images/preview.png',
		imageAlt: 'Olive & Salt social preview image',
		imageWidth: '1200',
		imageHeight: '630',
		themeColor: '#f7f5ed'
	}
};

// Image Paths
export const IMAGES = {
	splash: 'images/splash.jpg',
	logo: 'images/logo.png',
	preview: 'images/preview.png',
	emma: 'images/emma.jpg'
};

// Common Messages
export const MESSAGES = {
	consultation: {
		cta: 'Book Free Consultation',
		success:
			'🎉 Your message has been sent! I will reach out within 24 hours to discuss your consultation.',
		error: 'Something went wrong. Please try again or email emma@olive-and-salt.com directly.',
		responseTime: "I'll reach out within 24 hours to discuss your free consultation."
	},
	hero: {
		title: 'Meals that taste',
		subtitle: 'like home.',
		description:
			'Fresh, personalized meals in your own kitchen. Food as it was meant to be - simple, nourishing, and delicious.'
	}
};
