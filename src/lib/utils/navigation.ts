/**
 * Navigation utility functions
 * Centralized scroll behavior and navigation logic
 */

/**
 * Smooth scroll to an element by ID
 */
export function scrollToElement(elementId: string): void {
	const element = document.getElementById(elementId);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
}

/**
 * Scroll to section by href (removes # prefix)
 */
export function scrollToSection(href: string): void {
	const sectionId = href.startsWith('#') ? href.slice(1) : href;
	scrollToElement(sectionId);
}

/**
 * Get section ID from href
 */
export function getSectionId(href: string): string {
	return href.startsWith('#') ? href.slice(1) : href;
}
