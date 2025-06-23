# Olive and Salt Personal Chef Website – Product Requirements Document

## 1. Introduction and Goals

**Olive and Salt** is a personal chef service by Emma Matson, dedicated to crafting memorable, customized in-home dining experiences. The goal of the new website is to translate Olive and Salt's warm, detail-oriented brand into a modern, engaging online presence that attracts clients and streamlines bookings.

### Key Objectives

- **Brand Experience Online**: Reflect the brand's warmth, authenticity, and culinary artistry through design and content, making visitors feel welcomed and intrigued
- **Inform & Inspire**: Clearly present services, story, and testimonials to inform potential clients while inspiring them with visuals of food and hospitality
- **Drive Bookings (E-Commerce Integration)**: Provide an intuitive, secure booking flow (including service selection and checkout) to convert interested visitors into scheduled clients
- **Modern Tech Foundation**: Leverage Angular 20's modern front-end architecture and component-based structure for a fast, maintainable site

### Scope & Constraints

This PRD covers the design, layout, and style requirements for the public-facing site pages. The site will be a single-page application (SPA) or a multi-page Angular app with routing, built from scratch (no CMS).

- Accessibility compliance (e.g. WCAG) is not a formal requirement, though basic usability best practices will be observed
- All content will be managed in code (no content management system)
- Any e-commerce/booking functionality will be custom-integrated into the Angular app

### Target Audience

Prospective clients seeking personalized chef services for home dining, events, or special occasions. They may be busy professionals or families who value quality, personal touch, and convenience. The site should appeal to users across various devices (mobile, tablet, desktop) with a seamless responsive experience.

---

## 2. Brand Alignment & Visual Language

All design and content must be consistent with Olive and Salt's established brand voice, personality, and aesthetics. The site should immediately convey a warm, thoughtful, modern feel with attention to small details.

### Key Brand Attributes

- **Warm & Authentic**: The tone and visuals should feel like _"a friend in the kitchen—genuine, welcoming, and present"_. Use inviting imagery and friendly copy to create a personal connection
- **Knowledgeable & Approachable**: Present information (services, process) with clarity and professionalism but without jargon. The site should empower users to understand offerings easily, reinforcing Emma's expertise in a relatable way
- **Detail-Oriented & Thoughtful**: Emphasize the little touches (from ingredients to website UI details) that show care. A clean layout with careful spacing, high-quality images, and polished micro-interactions will reflect this
- **Visionary & Creative**: Use creative visuals (e.g. elegant typography, artistic food photography) to showcase culinary creativity and boldness, while still maintaining an overall modern simplicity

### Brand Voice & Tone

All copy on the site should be **conversational, enthusiastic, and personal**. Write in first person where appropriate (e.g. from Emma's perspective in the About page) to create a personal connection. The tone should convey genuine excitement about food and hospitality while remaining clear and direct.

Lighthearted, playful touches (like food-related humor or emojis) can be included sparingly to keep the voice human. For example, the homepage intro might say, _"Welcome to Olive and Salt. I'm Emma, and I believe food should feel like home."_

#### Key Messaging Themes

- Emphasize **quality & freshness**
- Highlight **personalization**
- Position **food as an experience**

### Color Palette

Adhere strictly to the Olive and Salt brand colors for all UI elements and backgrounds:

- **Primary**: **Olive Green (#637B2F)** - Use for impactful elements like the logo, headings, primary buttons, and link highlights
- **Secondary**: **Cream White (#FDF9F3)** - Ideal for page backgrounds and generous whitespace to create an airy, clean layout
- **Accent**: **Terracotta (#ED7B58)** - Use sparingly for highlights and calls-to-action; perfect for hover states, link highlights, or small accent details
- **Neutrals**:
  - **Soft Gray (#F7F7F7)** - Section background panels or card backgrounds
  - **Mid Gray (#969696)** - Secondary text or muted icons
  - **Charcoal (#333333)** - Primary body text for strong contrast on light backgrounds

### Typography

Use the brand's two defined fonts to establish a classic yet modern typographic style:

- **Headings**: **Playfair Display** (serif) for an elegant, artistic touch. Use for page titles, section headers, and logo text
- **Body Text**: **Open Sans** (sans-serif) for readability and friendliness. Use for paragraph text, navigation menus, buttons, form fields, and any longer form content

#### Typography Guidelines

- Maintain ample line spacing (~1.5 line height)
- Break up text into short paragraphs
- Use a consistent heading hierarchy (H1 for page titles, H2 for section headings, H3 for subheadings)
- All text should be in charcoal (#333333) or mid-gray (#969696) for on-brand neutrality and legibility
- Use font weights and styles (italic quotes, bold highlights) sparingly

### Imagery & Graphics

Visual content should reinforce the warm, personal chef experience:

- **Photography Style**: Natural light with shallow depth of field, focusing on lifestyle moments in the kitchen
- **Subject Matter**: Hands chopping herbs, beautifully set home dining tables, Emma interacting with clients or ingredients
- **Atmosphere**: Smiling faces, rustic table settings, fresh ingredients in use, conveying an inviting, real-home feel
- **Textures**: Wooden cutting boards, linen tablecloths, ceramic dishware to evoke tactile, earthy tones

#### Layout Principles

- Ensure ample negative space around images and text
- The design should "breathe" with margins and padding
- Keep an uncluttered, calm feel

### Iconography & UI Elements

- **Icons**: Simple, elegant, line-based icons in charcoal or olive green
- **Buttons**: Slightly rounded corners and soft shadows for a friendly, polished interface
- **Primary Buttons**: Olive Green backgrounds with cream white text
- **Hover States**: Transition to Terracotta accent for warm feedback
- **Form Inputs**: Minimalistic with light/cream backgrounds, subtle charcoal or olive borders, clear top-aligned labels

---

## 3. Front-End Architecture & Components

The site will be built with **Angular 20**, leveraging its component-based architecture to ensure maintainability and scalability. Each distinct UI element will be implemented as an Angular component, promoting reusability and consistency.

### Modern Front-End Practices

We will use a modern front-end setup with Angular's latest features:

- **Angular Routing**: Leverage Angular's Routing to handle page navigation without full page reloads, creating a smooth single-page-app feel for users
- **Lazy Loading**: Use Lazy Loading for feature modules (e.g., the Gallery or Testimonials module) if they are heavy, to improve initial load performance (only loading what the user needs, when they need it). This keeps the site feeling fast and responsive
- **Clear Structure**: Ensure the codebase is structured for clarity: separate modules for core features (e.g., a ServicesModule, BookingModule, etc.), and possibly use a state management library if needed for things like shopping cart/booking data (NgRx store, if the booking flow complexity warrants it)
- **Semantic HTML**: While not required to meet formal accessibility standards, basic semantic HTML and ARIA roles for interactive components will be used to ensure a baseline of usability for all users (e.g., using proper form tags, button elements, alt text on images, etc., which also aids SEO and general UX)

### Reusable Components

To implement the design system, we will create a library of reusable components:

#### Core Layout Components

- **Header & Navigation Component**: Contains the site header with logo and menu (and maybe a tagline or booking call-to-action). Used on all pages
- **Footer Component**: Contains footer links (including Contact info, social media icons, and legal links) and a visual accent (perhaps a small herbs illustration or simply the logo). Used on all pages

#### UI Components

- **Button Component**: A stylized button that automatically applies the Olive Green background and terracotta hover transition, as per brand guidelines
- **Form Field Component**: A consistent input field with label, implementing the brand's form style (clear labels, bordered input, subtle focus state)
- **Modal/Lightbox Component**: For use in Gallery or perhaps the booking flow (e.g., confirming details), a reusable modal window overlay with the brand styling (background overlay semi-transparent black, content on a cream or white card with subtle drop shadow and rounded corners)

#### Content Components

- **Hero Section Component**: A top-of-page banner section (for pages like Home, About) that can display a large background image, an overlaid heading (in Playfair Display), and a subtitle or CTA button. This component can be configured per page (text and image differ, style remains consistent)
- **Service Card Component**: For the Services page – displays an individual service offering with an image, title, short description, and possibly price or a "Learn More/Book" button. Ensures all services are presented uniformly
- **Testimonial Card/Slider Component**: A component to display a client testimonial – could be a styled quote text, client name, maybe a small photo if provided. Possibly includes slider controls or can automatically rotate if needed
- **Gallery Image Component**: A component for a single image thumbnail in the Gallery page, which can open a lightbox viewer of the full image when clicked. Ensures consistent scaling, cropping, and lightbox behavior

#### Booking Components

- **Booking Flow Components**: The booking process may be broken into multiple steps (selection, details, confirmation). Each step can be a component (e.g., ServiceSelectionComponent, DatePickerComponent, PaymentFormComponent) assembled under a Booking page or wizard component. These will utilize Angular's forms capabilities to handle validation and dynamic data binding

Using Angular's robust forms library (Reactive Forms) will allow for smooth handling of the multi-step booking form, with real-time validation feedback and data binding. This means as users fill out their information (contact details, event specifics, etc.), the interface can instantly show validation states (e.g. missing field, invalid email) in a user-friendly way, aligning with our goal of a thoughtful yet unobtrusive UX.

### E-Commerce Integration

The site will integrate e-commerce functionality primarily for the booking of services (no physical product sales). This includes:

#### Service Selection & Customization

Users should be able to select the service they want to book (from predefined options on the Services page or directly via the Booking page). If a service has options (e.g., number of meals, number of guests, special menu types), the UI should present those choices clearly, possibly as dropdowns or radio button lists.

#### Checkout Flow

Once a service is chosen, the user enters their personal details (name, contact, address if needed for the chef's travel, date and time requested, dietary preferences). They then proceed to payment. Payment processing will be handled via a third-party gateway (e.g., Stripe) integrated into the Angular app – likely through an embeddable form or redirect. The PRD does not specify a particular provider, so we assume integration with a secure payment component that takes card details.

The checkout form must be designed for clarity and trust: show security icons/trust badges if appropriate, and reassure the user their info is safe (use HTTPS and typical lock icon). After payment, a confirmation screen (and email) will confirm the booking.

#### Cart/Summary

Since services are likely booked one at a time (not multiple items as in typical e-commerce), a full "shopping cart" page might not be necessary. Instead, treat the booking form itself as a single-item checkout. However, ensure there is a booking summary component that shows what service and options were selected, and the price, before the user confirms payment.

We will not implement user accounts or login (not mentioned in requirements), so each booking is a standalone transaction. If needed in future, the architecture can accommodate adding an account system, but out of scope for now.

All e-commerce elements will be styled consistently with the site (buttons, form fields as noted). Validation errors in forms (e.g. credit card declined, required field empty) should be clearly messaged in a friendly tone (e.g. "Oops, you missed a spot – please enter your email" rather than a harsh error), consistent with the brand's helpful voice.

---

## 4. Global Layout & Navigation

### Header (Global Navigation)

A persistent header appears at the top of every page, featuring the Olive and Salt logo on the left and a navigation menu on the right (on desktop screens). The logo should use the primary logo lockup (serif + sans-serif pairing "Olive and Salt"), likely in the Olive Green color on a transparent or cream background.

**Desktop Navigation**

- **Menu Items**: Home, About, Services, Booking, Testimonials, Gallery, Contact
- **Legal Pages**: Privacy Policy, Terms of Service will not be top-level menu items (to avoid clutter); instead, they will appear in the footer
- **CTA**: If space allows, a highlighted "Book Now" button might appear in the header to draw attention (this could be the Booking menu item styled as a button)
- **Styling**: Primary logo in Olive Green on transparent/cream background
- **Hover Effects**: All header elements (logo, links) should have subtle hover or focus styles (e.g., links underlined or color change on hover, the logo maybe a slight opacity change on hover) to indicate interactivity

**Mobile Navigation**

- **Hamburger Menu**: On smaller screens (tablet/mobile), the navigation will collapse into a "hamburger" menu icon. Tapping the hamburger will slide out or dropdown a mobile menu with the same links, in a full-screen overlay or a sidebar panel with a cream background
- **Touch-Friendly Design**: The mobile menu design should be clean and easy to tap, with each link at least 44px tall for finger friendliness
- **Sticky Header**: The header likely becomes sticky (fixed) at the top as the user scrolls, so navigation is always accessible; if doing so, ensure a slight drop shadow or background color on the sticky header for readability over content

### Footer

A universal footer appears at the bottom of each page with site-wide links and information. The footer background can be Olive Green or Charcoal (to clearly separate it from page content), with text in cream or light gray for contrast.

#### Content

- **Contact Info**: e.g. email address, phone number, and possibly service area. This aligns with the personal nature – inviting people to reach out
- **Social Media**: icons (line-based style) linking to any Olive and Salt social media profiles (e.g. Instagram, Facebook). Use branded iconography (charcoal or olive icons) and show a hover effect (perhaps icon turns terracotta or gets a filled style on hover)
- **Navigation Links**: Repeat the main menu links in a simple column or row, especially on mobile where users might scroll down expecting links in the footer
- **Legal Links**: Privacy Policy and Terms of Service – these should be small and perhaps separated at the bottom. For example, "© 2025 Olive and Salt – Privacy Policy | Terms of Service". These pages open the legal text
- **Branding**: Possibly a brief tagline or slogan reinforcing the brand (maybe the "Food with Heart, Served at Home" tagline or a mini mission statement). This could be in a slightly cursive or italic Playfair Display to stand out, if included

#### Styling

- **Background**: Olive Green or Charcoal for clear separation
- **Text**: Cream or light gray for contrast (if the footer is Olive Green (#637B2F), text in footer should be cream white or light neutral for readability)
- **Typography**: All text in the footer should be smaller but still readable (e.g., 0.9em of body text size) and use Open Sans for clarity
- **Design Elements**: The footer should have ample padding and might include a subtle graphic element to add charm – e.g., a faint illustration of an herb or a pattern, as long as it doesn't clutter

### Layout & Grid

Use a responsive grid system (CSS flex or grid) that provides a consistent content width for larger screens and gracefully collapses on smaller screens. We will design for common breakpoints (e.g., ~1200px and up for large desktops, ~992px for small desktops/tablets, ~768px for tablets, ~576px for phones, etc.).

- **Responsive Grid**: On large screens, content sections can have multiple columns as needed (e.g., a two-column layout on the About page with text next to an image). On small screens, these should stack vertically for a single-column, scroll-friendly layout
- **Mobile-First Approach**: Aim for a mobile-first design approach – starting the design for small screens and enhancing it for larger screens – to ensure the essential content and CTAs are prioritized for mobile users. This means on mobile, everything should be vertically oriented, with clear tap targets and no horizontal scrolling. As screen size increases, we introduce multi-column layouts and additional visuals as appropriate
- **Breakpoints**: ~1200px (large desktop), ~992px (small desktop/tablet), ~768px (tablet), ~576px (mobile)

### Spacing and Alignment

Consistent spacing is important for the detail-oriented aesthetic. Use a base spacing unit (e.g., 8px or 10px) to define padding and margin throughout components, ensuring visual harmony.

- **Section Spacing**: Sections should have generous padding (e.g. 60px top/bottom on desktop, 30px on mobile) to separate them and align with the "breathing room" principle
- **Alignment & Grouping**: Use alignment and grouping to guide the eye – e.g., center align key hero text, left-align paragraphs for readability, use consistent gutters between grid columns. Nothing should feel cramped; err on the side of extra whitespace to convey that unhurried, airy feel
- **Visual Hierarchy**: Every page will follow a logical visual hierarchy: a clear title at or near the top (often in a hero section), supporting text or imagery, and a call-to-action if relevant

### Visual Hierarchy & Components

Reusable components (as listed in the prior section) will enforce consistency. For example, all pages might start with a Hero Section (except maybe legal pages), and end with a common footer call-to-action (perhaps an invitation to book a service if the user hasn't yet). Calls-to-action like "Book your dinner" or "Contact us to plan your event" can be repeated in appropriate places (e.g., at the end of About or Services pages) to continuously invite conversion.

### Content Style

Throughout the site, content should be concise and engaging. Use headings and subheadings liberally to break up text (for SEO and readability). Use bullet lists for key points (like service features or client testimonial highlights), as this matches our goal of keeping paragraphs short and scannable. The writing should reflect the brand voice guidelines (friendly, enthusiastic) and avoid heavy jargon or overly formal language. It should feel like Emma speaking to the user directly, which strengthens trust.

The combination of a consistent global layout with strong brand visuals and voice will ensure that regardless of which page a user lands on, they quickly recognize the Olive and Salt brand and can navigate the site with ease.

---

## 5. Page-Specific Requirements

### 5.1 Home Page

**Purpose & Overview**: The Home page is the gateway to the Olive and Salt experience – it should immediately convey the brand's essence and guide users to explore further or book a service. It needs to make a strong first impression, highlighting the personal chef service value proposition and inviting action (booking or inquiry).

#### Layout & Sections

**Hero Banner**
A full-width hero section at the top with a warm, inviting image background. The image could depict an intimate cooking moment or a beautifully plated meal in a home setting, aligning with the brand's natural, lifestyle photography style. Overlaying the image, a short welcome message: for example, "Food with Heart, Served at Home" (the tagline) or a brief intro like "Personal chef services that make every meal a memory."

- The hero text should be set in a large, elegant serif (Playfair Display) for the main line, perhaps accompanied by a short subtitle in Open Sans
- Include a prominent CTA button ("Book a Dinner" or "Plan Your Meal") in the hero, styled with the primary button component (olive green background, cream text, terracotta hover). This CTA should anchor to the Booking page or section
- If the hero image is dark or busy, use a slight overlay (semi-transparent olive or black) to ensure text is legible

**Introduction Blurb**
Just below the hero, a brief paragraph (2-3 sentences) introducing Olive and Salt in Emma's voice. For example: _"Welcome to Olive and Salt. I'm Emma, a personal chef passionate about crafting meals that feel like home. From weeknight dinners to special celebrations, I bring warmth, creativity, and care to your table."_ This sets a personal tone. Possibly accompanied by a small photo of Emma or a signature graphic to personalize.

**Key Services Summary**
A section that highlights 2-3 core services or selling points in a visual way. This could be a three-column layout with an icon or small image for each point and a short description. For instance:

- "Customized Menus – Tailored to your tastes and dietary needs"
- "In-Home Preparation – I cook in your kitchen, so you enjoy fresh, restaurant-quality meals at home"
- "Memorable Experiences – From intimate dinners to small events, I make it special"

Each point ties into key messaging themes like personalization and hospitality. Use small line icons (maybe a menu, a cooking pot, a heart/home symbol) in the brand's icon style to visually reinforce each point.

**Featured Testimonial/Highlight**
Include a short testimonial or a quote front-and-center to build trust. Possibly something like: _"Our anniversary dinner crafted by Emma was unforgettable – restaurant quality food in the comfort of home." – Client Name._ Style this as a highlighted quote (large quotes icon, italic text perhaps in Playfair for a touch of elegance). Could be on a soft gray background block to set it apart. If more than one great testimonial exists, this could even be a small slider that rotates through 2-3 standout quotes (with smooth crossfade or slide transitions). Ensure the testimonial component uses the brand styling for quotes/text (charcoal text on light background, maybe terracotta for quotation marks or accent).

**About Preview**
A teaser section that leads into Emma's story to create a personal connection. For example, a photo of Emma cooking or interacting with clients on one side, and a few sentences on the other: _"For me, food is more than nourishment—it's a story, a gesture, a memory. After years in culinary arts, I started Olive and Salt to bring that experience to others..."_ followed by a link or button "Meet Emma" that takes the user to the About page. This engages those who want to know the person behind the brand.

**Gallery Preview**
A strip or grid of a few beautiful food photos (maybe a 3-photo collage or a sliding carousel) to showcase Emma's work visually. Each image can have a subtle caption overlay like "Seasonal Ingredients, Freshly Prepared" or just be decorative. Clicking any image could go to the Gallery page for more. The intent is to entice users with visuals of the cuisine and style.

**Call-to-Action Banner**
As the last content section before the footer, reiterate the primary CTA. For example, a banner with a gentle terracotta background or an image with overlay, and text like "Ready to savor an unforgettable meal at home?" and a "Book Your Experience" button. This ensures that after scrolling through, the user has a clear action step. Possibly include a secondary note like "Have questions? [Contact me]" if they are not ready to book.

#### Design & Style Notes

The Home page should have the most engaging visual elements (strong hero image, possibly subtle animations on load as described below). Yet it should not feel cluttered; maintain that clean, airy aesthetic by not overcrowding sections. Plenty of whitespace between sections is important. Use the Soft Gray (#F7F7F7) background for alternating sections if needed to distinguish them (for instance, the Key Services section could have a slight cream or gray background behind the cards, while the testimonial might be on white).

**Typography Hierarchy**

- The hero heading can be quite large (e.g., 48px in Playfair Display on desktop) to create impact, while body text remains at comfortable 16px Open Sans
- Section headings like "Services" or "About Me" on the home can be maybe 24px Playfair, etc. Use consistent styles as defined globally

**Images**

- Ensure hero and gallery images are optimized for web (compressed JPEGs or modern formats) for fast loading
- Possibly load a smaller image on mobile to save bandwidth. The hero might use a `<picture>` element to swap sources
- All images should have alt text reflecting the content for basic accessibility/SEO (e.g., "Chef Emma preparing a meal in a home kitchen")

**Interactive Elements**

- The primary CTA buttons (hero and final banner) should have hover and focus states (terracotta background change, perhaps a slight box-shadow or grow effect to indicate clickability)
- Links like "Meet Emma" could be styled as textual links in olive with maybe a subtle underline that appears on hover

#### Animations (Home-specific)

We want tasteful, enhancing animations on this page:

- **Page Load**: Consider a gentle fade-in for the hero text (and a slight upward motion) after the background image loads, to create a polished entrance
- **Scroll Animations**: As the user scrolls, each section (Key Services, Testimonial, About preview, etc.) can appear with a slight transition – e.g., a fade-in or slide-from-bottom, staggered for content elements. Keep animations subtle and smooth to match the thoughtful brand feel; they should enhance the scrolling experience without being distracting. For instance, service icons might have a very light hover animation (like a gentle upward float or color change to terracotta)
- **Testimonial Carousel**: If using a testimonial carousel, have it auto-rotate only every ~8 seconds with a cross-fade, so it's not too fast. Include controls (next/prev or dots) for user control, with a pause on hover
- **Timing**: Use Angular's animation capabilities for these, configuring durations around 300–500ms for most fades/slides (fast enough to feel responsive, slow enough to feel gentle). Avoid any flashing or bouncy effects that would clash with the calm, warm atmosphere

The Home page should quickly communicate who Olive and Salt is, what they offer, and prompt the user to take the next step, all in a visually pleasing, brand-consistent manner.

### 5.2 About Page

**Purpose**: Tell Emma's story in detail and build a personal connection, reinforcing trust in her passion and expertise. This page should make potential clients feel like they know Emma as a person, not just a service provider.

#### Layout & Content

**Hero/Title Section**
A hero section featuring a portrait or action shot of Emma – perhaps cooking in a kitchen or smiling while holding fresh ingredients. The image should feel natural and approachable. Over or alongside the image, include the page title "About Me" or "Meet Emma" in the Playfair Display header style. Optionally, include a brief tagline like "Cooking with heart and soul" that encapsulates her approach.

**Emma's Story (Main Content)**
The core of this page is Emma's personal narrative, told in first person to create intimacy. Break the story into multiple digestible paragraphs (3-5 sentences each) to maintain readability. Key elements to cover:

- **Background**: Her culinary training, experience working in restaurants or other food settings, what led her to become a personal chef
- **Passion**: What drives her love for cooking – maybe a specific moment or realization that food is about more than nourishment
- **Philosophy**: Her approach to ingredients (quality, freshness, local sourcing), personalization, and creating experiences rather than just meals
- **Personal Touch**: A bit about her personality – what guests can expect when she's in their kitchen (warm, professional, creative, attentive to details)

Sample opening: _"I've been cooking for as long as I can remember, but it wasn't until I started working in restaurant kitchens that I realized my true passion lay in something more intimate. While I loved the energy and creativity of professional cooking, I found myself dreaming of smaller gatherings, personalized menus, and the joy of seeing someone's face light up at the first bite of something made just for them."_

**Callout/Quote**
Include a pulled quote that encapsulates Emma's philosophy or approach. This could be styled in a visually distinct way – perhaps in a larger, italic Playfair Display with quotation marks in the terracotta accent color. For example: _"Food should feel like home – warm, welcoming, and made with love."_ Or _"I believe every meal should tell a story, whether it's a quiet dinner for two or a celebration with friends."_

**Supporting Visuals**
Include 2-3 complementary photos that support the narrative:

- Emma in action (cooking, shopping for ingredients, plating a dish)
- Behind-the-scenes moments (chopping vegetables, stirring a sauce, arranging a table)
- Results of her work (beautifully plated dishes, happy clients)

On desktop, these can be arranged in a two-column layout with text alternating left and right of images. On mobile, stack everything vertically for easy scrolling. Add captions where they enhance the story.

**Expertise & Credentials (Optional)**
If Emma has formal culinary training, certifications, or notable experience, include these in a tasteful way. Rather than a formal resume format, weave credentials into the narrative or present them as bullet points with friendly language:

- "Graduated from [Culinary Institute] with a focus on seasonal, farm-to-table cooking"
- "Spent three years perfecting techniques at [Notable Restaurant]"
- "Certified in food safety and nutrition"

Keep the tone approachable – emphasize how these experiences help her serve clients better rather than just listing achievements.

**Closing CTA**
End with a personal invitation that flows naturally from the story. For example: _"I'd love to cook for you and your loved ones. Every menu I create is tailored specifically to your tastes, dietary needs, and the occasion you're celebrating. Whether it's a romantic anniversary dinner, a family gathering, or a dinner party with friends, I'll make it unforgettable."_

Include a prominent CTA button: "Plan Your First Meal with Me" or "Let's Create Something Delicious Together" that links to the Booking page or Contact form.

#### Design Considerations

**Personal, Narrative Feel**
The design should feel warm and personal, like reading a letter from a friend. Use plenty of whitespace, comfortable line spacing, and avoid overly corporate styling.

**Decorative Elements**
Consider subtle brand-appropriate decorative elements like:

- Olive branch or herb illustrations as section dividers
- Soft background textures (like subtle linen or paper textures)
- Gentle drop shadows on photos
- Small accent graphics that relate to cooking or ingredients

**Typography Hierarchy**

- Main page title: Large Playfair Display (consistent with other pages)
- Section headings: Medium Playfair Display
- Body text: Open Sans for maximum readability
- Pull quotes: Larger, italic Playfair with potential color accents

**Voice & Tone**
Maintain a first-person, conversational tone throughout. The writing should feel authentic and personal – like Emma speaking directly to the reader. Avoid overly formal language or industry jargon. Show personality and passion while maintaining professionalism.

**Visual Flow**
Create a natural reading flow with logical progression from introduction to story to credentials to invitation. Use the alternating text/image layout to break up large blocks of text and maintain visual interest.

The About page should leave visitors feeling like they've gotten to know Emma personally and are excited about the prospect of having her cook for them.

### 5.3 Services Page

**Purpose**: Present detailed service information with clear booking pathways and strong e-commerce integration. This page should educate potential clients about what Emma offers while making it easy to take the next step toward booking.

#### Layout & Content

**Intro Section**
Start with a compelling page title ("Services" or "What I Offer") and a brief, welcoming description that emphasizes customization and quality. Keep it to 2-3 sentences maximum to avoid overwhelming users before they explore specific services. For example: _"Every experience I create is tailored to you – your tastes, your space, your occasion. From intimate dinners to special celebrations, I bring restaurant-quality cuisine to the comfort of your home."_

**Service Offerings**
Present each service as a consistent card or section with rich detail:

**Service Card Components**

- **Service Name**: Clear, descriptive title that tells users exactly what they're getting (e.g., "Intimate Dinner for Two," "Multi-Course Celebration," "Weekly Meal Preparation")
- **Hero Visual**: High-quality photo that represents the service – perhaps a beautifully set table for dinner service, or Emma preparing food for meal prep service
- **Description**: 2-3 sentences focusing on benefits and personalization rather than just features. Emphasize the experience and value proposition
- **What's Included**: Clear bullet points about what the service covers:
  - ✓ Menu consultation and customization
  - ✓ Grocery shopping and ingredient sourcing
  - ✓ In-home preparation and cooking
  - ✓ Beautiful presentation and serving
  - ✓ Kitchen cleanup
- **Ideal For**: Brief note about who this service works best for (e.g., "Perfect for anniversaries, date nights, or special occasions")
- **Pricing**: Either starting rates ("Starting at $XXX") or "Custom pricing based on menu and party size" if pricing varies significantly
- **CTA**: Prominent "Book Now" or "Customize & Book" button that routes to the booking page with this service pre-selected

**Example Service Descriptions**:

_Intimate Dinner Experience_
_Transform your home into a private restaurant for an unforgettable evening. I'll work with you to create a personalized menu, source the finest ingredients, and prepare everything in your kitchen while you relax with your guests. Perfect for date nights, anniversaries, or small dinner parties._

_Special Event Catering_
_Whether you're celebrating a birthday, hosting a dinner party, or marking a special occasion, I'll create a menu that reflects the importance of your event. From appetizers to dessert, every detail is crafted to make your celebration memorable._

**Layout Options**

- **Desktop**: Grid layout (2-3 columns) or alternating left/right layout with images and text
- **Mobile**: Vertical stack for easy scrolling
- **Spacing**: Generous space between services to avoid cluttered feel
- **Consistency**: Use the Service Card component to ensure visual consistency

**Additional Elements**

**FAQ Section**
Include answers to common questions:

- How far in advance should I book?
- Can you accommodate dietary restrictions?
- What if I have a small kitchen?
- Do you provide serving dishes and utensils?
- What's your cancellation policy?

**Process Overview** _(Optional)_
Brief overview of how the booking and service process works:

1. Initial consultation to discuss your preferences
2. Custom menu creation and approval
3. Shopping and preparation
4. In-home cooking and service
5. Cleanup and wrap-up

**Bottom CTA**
End with encouragement: _"Ready to create an unforgettable dining experience? I'd love to help you plan something special."_ Include both primary booking CTA and secondary contact option for questions.

#### E-Commerce Integration Details

**Booking Flow**

- Each "Book Now" button should route to the Booking page with the specific service pre-selected
- Include clear messaging about next steps: "Choose your service and we'll guide you through customizing your perfect meal"
- Show service selection prominently in the booking flow

**Trust & Conversion Elements**

- Include testimonials specific to each service if available
- Show any certifications or credentials relevant to food safety
- Clear pricing information or "contact for pricing" to set expectations
- Professional photography that showcases the quality of work

**Accessibility & Usability**

- Ensure all CTAs are properly styled with hover states (olive to terracotta transition)
- Make buttons large enough for easy clicking/tapping
- Include loading states for any dynamic content
- Ensure keyboard navigation works for all interactive elements

The Services page should leave no doubt about the value and quality Emma provides while making the next step (booking) feel natural and appealing.

### 5.4 Booking Page

**Purpose**: The transactional hub for service booking, designed as a multi-step wizard that guides users through the booking process while building excitement and confidence. This is where potential clients become actual clients, so the experience needs to be smooth, trustworthy, and delightful.

#### Multi-Step Booking Flow

**Step 1: Service Selection**
Start by allowing users to choose their desired service (or confirm a pre-selected service if they came from a specific "Book Now" button). Present options as clear, visually appealing cards rather than plain radio buttons.

- **Service Cards**: Show service name, brief description, and starting price
- **Pre-selection**: If user came from Services page, highlight their chosen service
- **Comparison**: Allow easy switching between services if user wants to explore
- **Next Steps Preview**: Brief note about what happens next to set expectations

**Step 2: Event Details**
Gather essential information about the event itself:

- **Date Selection**: Calendar date picker (Angular Material or custom component) with clear availability indicators
- **Time Preferences**: Dropdown or time picker for preferred start time
- **Party Size**: Number of guests/diners (affects menu planning and pricing)
- **Occasion Type**: Dropdown (Anniversary, Birthday, Dinner Party, etc.) to help Emma personalize
- **Special Requests**: Text area for any initial preferences or special considerations

**Step 3: Menu & Preferences**
This step gathers information Emma needs to create the perfect menu:

- **Dietary Restrictions**: Checkboxes for common restrictions (vegetarian, gluten-free, etc.) plus text field for specific needs
- **Cuisine Preferences**: Multiple select for preferred cuisines or cooking styles
- **Favorite Ingredients**: Text field for ingredients the client particularly enjoys
- **Dislikes/Allergies**: Important text field for foods to avoid
- **Menu Style**: Preference for number of courses, formality level, etc.

**Step 4: Contact & Location**
Collect necessary contact and service information:

- **Personal Details**: Name, email, phone number
- **Service Address**: Where Emma will be cooking (with notes field for apartment numbers, access instructions, etc.)
- **Kitchen Notes**: Text area for kitchen size, equipment available, any relevant details
- **Contact Preferences**: How client prefers to be contacted for menu planning
- **Optional**: "How did you hear about us?" for marketing insights

**Step 5: Review & Pricing**
Show a complete summary before payment:

- **Service Summary**: Chosen service, date, time, party size
- **Menu Preferences**: Summary of dietary needs and preferences
- **Contact Info**: Delivery address and contact details
- **Pricing**: Final pricing based on selections (or "Custom pricing - Emma will contact you" if pricing varies significantly)
- **Next Steps**: What happens after booking (Emma will contact within 24 hours, etc.)

**Step 6: Payment & Confirmation**
Secure payment processing and final confirmation:

- **Payment Gateway**: Integrated Stripe or similar secure payment processor
- **Payment Options**: Credit card, and possibly PayPal or other options
- **Security Messaging**: Clear indicators about secure, encrypted payment
- **Billing Information**: If different from contact info
- **Final Terms**: Checkbox for terms of service agreement

**Step 7: Confirmation & Next Steps**
Confirmation screen and post-booking communication:

- **Booking Confirmation**: Summary with booking reference number
- **What's Next**: Clear timeline for menu planning call, final confirmation, etc.
- **Contact Info**: How to reach Emma with questions
- **Personal Touch**: Warm message from Emma expressing excitement about the upcoming event

#### Design Features & Implementation

**Progress Indicator**

- **Visual Progress**: Step counter (e.g., "Step 2 of 7") or progress bar showing completion percentage
- **Step Labels**: Clear names for each step (Service, Details, Menu, Contact, Review, Payment, Confirm)
- **Navigation**: Allow users to go back to previous steps to make changes
- **Visual Hierarchy**: Current step prominently highlighted with brand colors

**Form Design Principles**

- **Clean, Minimal Styling**: Consistent with brand aesthetic, plenty of whitespace
- **Clear Labels**: Top-aligned labels for mobile friendliness
- **Helpful Placeholders**: Example text in form fields to guide input
- **Smart Defaults**: Pre-fill reasonable defaults where possible
- **Progressive Disclosure**: Only show relevant fields based on previous selections
- **Mobile Optimization**: Large touch targets, appropriate input types (tel for phone, email for email, etc.)

**Validation & Error Handling**

- **Real-time Validation**: Check form validity as user types (friendly, not aggressive)
- **Clear Error Messages**: Brand-voice error messages ("Oops! We need your email address to send you menu details")
- **Success Indicators**: Green checkmarks or other positive feedback for completed sections
- **Prevention Over Correction**: Design forms to prevent errors rather than just catching them

**Trust & Security Elements**

- **Security Badges**: SSL certificate indicators, payment processor trust badges
- **Professional Design**: Clean, polished interface that inspires confidence
- **Clear Policies**: Easy access to cancellation policy, terms of service
- **Contact Information**: Emma's contact info visible for questions
- **Testimonials**: Brief testimonials throughout the process to reinforce trust

**Technical Implementation**

- **Angular Reactive Forms**: Use Angular's robust form handling for validation and data binding
- **State Management**: Maintain booking state across steps (possibly with NgRx if complex)
- **Payment Integration**: Secure integration with Stripe or similar payment processor
- **Error Recovery**: Graceful handling of payment failures, network issues
- **Analytics**: Track booking funnel to identify drop-off points

**Post-Booking Experience**

- **Immediate Confirmation**: Clear confirmation screen with booking details
- **Email Confirmation**: Automated email with booking summary and next steps
- **Follow-up Sequence**: Planned communication timeline (menu planning call, final confirmation, post-event follow-up)
- **Personal Touch**: Emma's personal message expressing excitement and gratitude

The Booking page should feel like a natural extension of the relationship-building that happens on other pages, maintaining the warm, personal brand voice while providing the functionality and security clients expect from a professional booking system.

### 5.5 Testimonials Page

**Purpose**: Build credibility and trust through authentic client reviews and experiences. This page serves as powerful social proof, showing potential clients the joy and satisfaction that Emma's services bring to real families and individuals.

#### Layout & Content

**Page Introduction**
Open with a warm, welcoming header such as "Testimonials," "Kind Words from Our Clients," or "What People Are Saying." Include a brief introduction that reflects Emma's humility and joy in serving others: _"Hearing about the joy our food brings to others is truly the best part of what we do. Every review reminds me why I love creating these special moments for families and friends."_

**Testimonials Display**
Present testimonials in a format that feels authentic and personal:

**Individual Testimonial Components**

- **Quote**: The client's actual words, 1-3 sentences, styled with elegant quotation marks (possibly in terracotta accent color)
- **Attribution**: Client name with context (e.g., "Sarah M., Anniversary Dinner" or "The Johnson Family, Holiday Gathering")
- **Event Details** _(Optional)_: Brief context about the service provided (date, occasion, number of guests) to help potential clients envision similar scenarios
- **Photo** _(Optional)_: Small client photo or a photo from their event (with permission) to add authenticity
- **Service Type**: Tag or note indicating which service this testimonial relates to

**Featured Testimonial Section** _(Optional)_
If there's one particularly compelling or comprehensive testimonial, feature it prominently:

- Larger text treatment with distinct styling
- Possibly accompanied by a photo from the event
- More detailed account of the full experience
- Positioned at the top of the page or as a centerpiece

**Organization Strategies**

- **Chronological**: Most recent testimonials first to show current activity
- **Service-Based**: Group testimonials by service type (Intimate Dinners, Special Events, etc.)
- **Occasion-Based**: Organize by event type (Anniversaries, Birthdays, Dinner Parties)
- **Mixed Layout**: Variety of testimonial lengths and styles for visual interest

#### Design Treatment

**Visual Design**

- **Clean Layout**: Single-column for easy reading, or two-column on larger screens
- **Card Styling**: Each testimonial in a subtle card with gentle shadows or borders
- **Typography**: Use Playfair Display for the actual quotes (italic) and Open Sans for attribution
- **Color Accents**: Terracotta color for quotation marks or decorative elements
- **Spacing**: Generous spacing between testimonials to avoid cramped feeling

**Interactive Elements**

- **Hover Effects**: Subtle animation on testimonial cards (slight lift or glow)
- **Read More**: For longer testimonials, consider "read more" functionality to keep initial view clean
- **Filter Options** _(If Many Testimonials)_: Simple filter buttons by service type or occasion

**Trust Indicators**

- **Real Names**: Use actual client names (with permission) rather than anonymous reviews
- **Specific Details**: Include specific details about services, dates, occasions to demonstrate authenticity
- **Variety**: Show testimonials from different types of events and clients
- **Recent Activity**: Include dates or "Recent" indicators to show ongoing business

**Call-to-Action Integration**

- **Gentle CTAs**: After reading several testimonials, include soft CTAs like "Ready to create your own memorable experience?"
- **Service Links**: Link testimonials to relevant service pages (e.g., anniversary dinner testimonial links to intimate dinner service)
- **Bottom CTA**: End with an invitation to book or contact Emma

#### Content Strategy

**Testimonial Collection**

- **Post-Service Follow-up**: Systematic approach to gathering feedback after each event
- **Variety**: Collect testimonials representing different services, occasions, and client types
- **Authenticity**: Use actual client words rather than heavily edited versions
- **Photo Permission**: Where possible, include photos from events (with explicit client permission)

**Quality Over Quantity**

- **Selection Criteria**: Choose testimonials that are specific, emotional, and demonstrate clear value
- **Update Regularly**: Keep content fresh with new testimonials from recent events
- **Balance**: Include both emotional responses and practical benefits (food quality, service, professionalism)

The Testimonials page should leave visitors feeling confident that Emma consistently delivers exceptional experiences and that their own event will be equally memorable and satisfying.

### 5.6 Gallery Page

**Purpose**: Create a visual portfolio that showcases Emma's culinary artistry and the experiences she creates. This page should inspire potential clients by showing the beauty, quality, and variety of her work while demonstrating the warm, personal atmosphere of her services.

#### Layout & Functionality

**Page Introduction**
Begin with a compelling header like "Gallery" or "Our Culinary Stories" and a brief introduction that sets the context: _"Every dish tells a story, every event creates memories. Here's a glimpse into the beautiful moments we've shared with our clients."_

**Image Grid System**

- **Responsive Grid**: 3-4 columns on desktop, 2-3 on tablet, 1-2 on mobile for optimal viewing
- **Layout Options**:
  - **Consistent Aspect Ratios**: Square or 4:3 ratio for clean, organized appearance
  - **Masonry Layout**: Varied sizes for more dynamic, Pinterest-style browsing
- **Grid Gaps**: Sufficient spacing between images (8-12px) to let each photo breathe
- **Hover Effects**: Subtle overlay with caption or zoom indicator on hover

**Lightbox Viewer Experience**

- **Click to Enlarge**: High-resolution viewing of full images
- **Navigation**: Left/right arrows, keyboard support (arrow keys, ESC to close)
- **User Experience**:
  - Dark semi-transparent overlay maintaining brand sophistication
  - Branded navigation controls (olive/terracotta styling)
  - Close button clearly visible
  - Touch/swipe support for mobile users
- **Image Information**: Optional captions with dish names, event types, or context
- **Loading States**: Elegant loading animation while high-res images load

**Image Categories & Filtering** _(Recommended)_
Organize content with intuitive filtering:

- **"All"**: Default view showing everything
- **"Signature Dishes"**: Close-up shots of Emma's culinary creations
- **"Events & Celebrations"**: Wide shots of complete table settings, party atmosphere
- **"Behind the Scenes"**: Emma in action, cooking process, ingredient prep
- **"Seasonal Specialties"**: Dishes organized by season or special ingredients

Implementation with Angular:

- **Filter Buttons**: Styled consistently with brand (olive active state, terracotta hover)
- **Smooth Transitions**: Fade or slide animations when filtering
- **Active States**: Clear indication of currently selected filter

#### Content Strategy & Photography

**Image Variety & Composition**

- **Close-up Dish Photography**: Beautifully plated meals showing texture, color, artistic presentation
- **Event Atmosphere**: Wide shots of complete dining setups, ambient lighting, table settings
- **Action Shots**: Emma cooking, interacting with clients, preparing ingredients
- **Detail Shots**: Fresh ingredients, cooking processes, finishing touches
- **Client Interaction**: (With permission) Happy guests, celebratory moments, dining experiences

**Photography Style Guidelines**

- **Natural Lighting**: Preference for natural light or warm artificial lighting that matches brand warmth
- **Color Consistency**: Consistent color grading that reinforces brand palette (warm, inviting tones)
- **Lifestyle Approach**: Candid, unstaged moments that feel authentic and lived-in
- **High Quality**: Professional or semi-professional photography that reflects the quality of service
- **Brand Alignment**: Images that support the warm, authentic, detail-oriented brand attributes

**Content Organization**

- **Seasonal Updates**: Regular addition of new content showing seasonal ingredients and dishes
- **Event Documentation**: Photos from recent events (with client permission) to show current work
- **Portfolio Balance**: Mix of different service types, occasions, and seasons
- **Quality Control**: Curated selection focusing on best examples rather than exhaustive documentation

#### Technical Implementation

**Performance Optimization**

- **Lazy Loading**: Load images as user scrolls to improve initial page load time
- **Progressive Loading**: Load thumbnail versions first, then high-resolution on demand
- **Image Optimization**:
  - Compressed formats (WebP with JPG fallback)
  - Multiple sizes for different screen densities
  - Responsive images using `<picture>` elements where appropriate
- **Caching Strategy**: Aggressive caching for images with appropriate cache headers

**Accessibility & SEO**

- **Alt Text**: Descriptive alt text for all images ("Hand-rolled pasta with seasonal mushrooms and truffle oil")
- **Keyboard Navigation**: Full keyboard support for lightbox and filtering
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Image Metadata**: Structured data markup for rich snippets in search results

**Angular Implementation Details**

- **Component Architecture**: Reusable gallery components (GalleryGrid, LightboxModal, FilterBar)
- **State Management**: Track filter state, current lightbox image, loading states
- **Animation Library**: Use Angular Animations API for smooth transitions and effects
- **Error Handling**: Graceful fallbacks for failed image loads
- **Mobile Optimization**: Touch gestures for lightbox navigation, optimized grid layouts

**User Experience Enhancements**

- **Loading States**: Skeleton screens or elegant loading animations
- **Image Counting**: Show image count for each filter category
- **Search Functionality** _(Advanced)_: Allow users to search images by keywords if image metadata is available
- **Social Sharing** _(Optional)_: Allow users to share individual images (with watermarking)

The Gallery page should serve as a visual feast that demonstrates Emma's skill, creativity, and the memorable experiences she creates, ultimately inspiring visitors to book their own personalized culinary experience.

### 5.7 Contact Page

**Purpose**: Provide multiple accessible channels for inquiries and communication, serving as a welcoming entry point for potential clients who aren't ready to book but want to learn more or ask questions.

#### Layout & Content

**Page Introduction**
Start with a warm, inviting header like "Get in Touch" or "Let's Talk About Your Event" followed by welcoming copy that encourages communication: _"Have questions about services? Want to chat about your upcoming celebration? Curious about dietary accommodations? I'd love to hear from you and help you plan something unforgettable."_

**Primary Contact Form**
The main contact method, designed to be approachable and comprehensive:

**Form Fields & Structure**

- **Name**: Required field with placeholder "Your name"
- **Email**: Required with validation and placeholder "your.email@example.com"
- **Phone**: Optional with format guidance "(555) 123-4567"
- **Subject/Inquiry Type**: Dropdown with options:
  - General Questions
  - Service Inquiry
  - Booking Consultation
  - Dietary Accommodations
  - Special Event Planning
  - Media/Press Inquiry
- **Message**: Large text area with placeholder guidance: "Tell me about your event, ask any questions, or just say hello! I'd love to hear your ideas."
- **Preferred Contact Method**: Radio buttons for email, phone, or no preference
- **Timeline**: Optional dropdown for "When are you hoping to schedule?" (This weekend, Next month, Just exploring, etc.)

**Form Submission & Response**

- **Submit Button**: "Send Message" with loading state during submission
- **Success State**: Thank you message with timeline expectations: _"Thanks for reaching out! I'll get back to you within 24 hours. Can't wait to hear more about your event!"_
- **Error Handling**: Friendly error messages that maintain brand voice

**Alternative Contact Methods**
Provide multiple ways for clients to reach Emma:

**Direct Contact Information**

- **Email**: Direct mailto link with professional email address
- **Phone**: Tel link optimized for mobile users with clear number display
- **Text/SMS**: If available, note that texting is welcome for quick questions

**Business Information**

- **Hours**: Contact availability (e.g., "I typically respond within 24 hours, Monday through Saturday")
- **Service Area**: Geographic coverage information with specific cities/regions served
- **Response Time**: Clear expectations about when clients can expect to hear back

**Location & Service Details**

- **Service Radius**: Map or text description of areas served
- **Kitchen Requirements**: Brief note about working in client kitchens
- **Travel Policies**: Any information about travel fees or minimum booking requirements

#### Layout Design

**Desktop Layout**

- **Two-Column**: Contact form on the left (wider column), contact information and details on the right
- **Visual Balance**: Form takes 2/3 of space, contact info takes 1/3
- **Consistent Spacing**: Maintain brand spacing guidelines between form elements

**Mobile Layout**

- **Stacked Approach**: Form appears first (primary action), followed by alternative contact methods
- **Touch-Friendly**: Large form fields and buttons optimized for mobile interaction
- **Readable Typography**: Ensure all text remains legible on small screens

#### Design Elements & Styling

**Form Design**

- **Brand Consistency**: Form fields styled with brand colors (olive borders on focus, cream backgrounds)
- **Clear Labels**: Top-aligned labels for mobile friendliness
- **Focus States**: Smooth transitions to olive/terracotta when fields are active
- **Validation Styling**: Gentle red for errors, green for success, maintaining friendly tone

**Visual Enhancements**

- **Subtle Icons**: Small envelope, phone, or message icons near relevant sections
- **Decorative Elements**: Possible olive branch or herb illustrations as subtle accents
- **Background Treatment**: Light cream or soft gray background for form area to distinguish from page background

**Trust & Professionalism**

- **Privacy Note**: Small reference to privacy policy near submit button: "Your information is safe with us. See our [Privacy Policy]"
- **Professional Presentation**: Clean, organized layout that builds confidence
- **Personal Touch**: Emma's professional headshot or signature to reinforce personal connection

#### User Experience Considerations

**Accessibility**

- **Keyboard Navigation**: Full keyboard access to all form elements
- **Screen Reader Support**: Proper labels and ARIA attributes
- **Color Contrast**: Ensure all text meets accessibility standards
- **Error Prevention**: Clear field requirements and format guidance

**Progressive Enhancement**

- **Basic Functionality**: Form works without JavaScript for maximum compatibility
- **Enhanced Experience**: JavaScript adds real-time validation, smooth animations
- **Graceful Degradation**: Fallbacks for all enhanced features

**Mobile Optimization**

- **Touch Targets**: Minimum 44px height for all interactive elements
- **Input Types**: Appropriate input types (email, tel) for optimal mobile keyboards
- **Viewport Optimization**: Prevent zoom on form focus, maintain usable layout

The Contact page should feel like an open invitation to start a conversation, removing any barriers to communication while maintaining the professional, warm brand experience that characterizes Emma's service.

### 5.8 Legal Pages

**Purpose**: Provide required legal information (Privacy Policy, Terms of Service) in a format that maintains brand consistency while ensuring legal compliance and trustworthiness. These pages need to be comprehensive yet accessible to clients.

#### Page Types & Content

**Privacy Policy**
Comprehensive privacy policy covering:

- **Information Collection**: What personal data is collected (contact info, dietary preferences, booking details)
- **Data Usage**: How information is used (service delivery, menu planning, communication)
- **Data Protection**: Security measures for protecting client information
- **Third-Party Services**: Disclosure of payment processors, email services, analytics tools
- **Client Rights**: How clients can access, update, or delete their information
- **Cookie Policy**: If applicable, explanation of website cookies and tracking
- **Contact Information**: How to reach Emma with privacy-related questions

**Terms of Service**
Clear terms governing the business relationship:

- **Service Description**: Overview of personal chef services offered
- **Booking & Payment**: Terms for booking, payment, deposits, refunds
- **Cancellation Policy**: Clear guidelines for cancellations by both parties
- **Liability**: Reasonable limitations of liability for food service
- **Kitchen Access**: Terms regarding working in client kitchens
- **Force Majeure**: Protection for unforeseen circumstances
- **Dispute Resolution**: Process for handling any disagreements
- **Updates**: How terms may be updated and client notification process

#### Content Structure & Layout

**Document Format**

- **Single-Column Layout**: Centered text for maximum readability
- **Logical Sections**: Clear section headings with numbered or lettered subsections
- **Scannable Format**: Use bullet points and short paragraphs where appropriate
- **Table of Contents**: For longer documents, include jump links to major sections

**Typography & Readability**

- **Headings**: Playfair Display for main headings to maintain brand consistency
- **Body Text**: Open Sans for maximum readability in legal content
- **Font Sizing**: Adequate size (16px minimum) for comfortable reading
- **Line Height**: Generous line spacing (1.6) for easier comprehension
- **Text Color**: Charcoal (#333333) for strong contrast and readability

#### Design Approach & Brand Integration

**Visual Design**

- **Clean Presentation**: Minimal decoration to focus on content clarity
- **Brand Colors**: Use olive green for headings while keeping body text in charcoal
- **Whitespace**: Generous margins and padding to avoid cramped appearance
- **Professional Appearance**: Build trust through clean, organized presentation

**Navigation & Accessibility**

- **Footer Links**: Accessible from footer on every page
- **Breadcrumbs**: Clear navigation back to main site
- **Print-Friendly**: Ensure documents can be easily printed if needed
- **Screen Reader Friendly**: Proper heading hierarchy and semantic markup
- **Mobile Responsive**: Readable and navigable on all device sizes

#### User Experience Considerations

**Findability**

- **Clear Linking**: Easy to find from footer, booking process, contact forms
- **Search Engine Indexing**: Allow search engines to index for transparency
- **Direct URLs**: Provide direct links for easy sharing or reference

**Comprehension**

- **Plain Language**: Legal language simplified where possible without losing precision
- **Key Points Highlighted**: Important terms (cancellation policy, liability) prominently displayed
- **Examples**: Where helpful, include examples to clarify complex terms
- **Update Notifications**: Clear indication of when policies were last updated

#### Legal Compliance & Best Practices

**Content Requirements**

- **Legal Review**: Ensure all legal documents are reviewed by qualified legal counsel
- **Industry Standards**: Follow best practices for food service and personal chef industries
- **Local Compliance**: Ensure compliance with local and state regulations
- **Regular Updates**: Schedule regular reviews and updates as business or laws change

**Transparency & Trust**

- **Complete Disclosure**: Full transparency about business practices and policies
- **Easy Access**: Never hide legal information; make it readily available
- **Contact for Questions**: Provide clear contact information for legal questions
- **Consistent Application**: Ensure actual business practices match stated policies

The legal pages should inspire confidence through professional presentation and complete transparency, reinforcing the trustworthy, detail-oriented brand that Emma represents while protecting both her business and her clients.

---

## 6. Responsive & Mobile Design

### Mobile-First Approach

Design for smallest screens first, then enhance for larger displays to ensure critical content and actions are prioritized for mobile users.

### Key Responsive Considerations

#### Navigation

- **Mobile**: Hamburger menu with slide-down animation
- **Touch Targets**: Minimum 44px for finger-friendly interaction
- **Menu Panel**: Full-screen or sidebar with cream background
- **Desktop**: Full horizontal menu bar

#### Grid & Layout

- **Multi-column to Single**: Side-by-side layouts stack vertically on mobile
- **Content Priority**: Image-first or text-first decision based on storytelling needs
- **Flexible Grids**: CSS flex/grid with appropriate breakpoints

#### Typography & Spacing

- **Scalable Text**: Relative font sizes (em/rem) for proper scaling
- **Mobile Optimization**: Slightly adjusted font sizes (36px vs 48px for hero)
- **Spacing Reduction**: Proportional padding/margin reduction while maintaining brand whitespace

#### Images & Media

- **Responsive Images**: max-width: 100% for proper scaling
- **Different Crops**: Consider mobile-specific image crops for better focal points
- **Performance**: Optimized images for mobile bandwidth

#### Interaction

- **Touch-Friendly**: Full-width buttons where appropriate
- **Tap Targets**: Sufficient size and spacing for finger interaction
- **No Horizontal Scroll**: Except within specific containers (gallery carousels)

### Performance Optimization

- Image optimization and lazy loading
- Minimal script usage
- Angular build optimization
- Server-side rendering consideration for mobile users on slower networks

---

## 7. Animation & Interactive Guidelines

### Philosophy

Animations should enhance understanding and delight users without distracting or frustrating. All motion should feel subtle, tasteful, and aligned with the thoughtful brand aesthetic.

### Animation Types

#### Page Load Animations

- **Gentle Entrance**: Fade-in hero text, slide-up sections on scroll
- **One-Time Effect**: No repetition on scroll up/down
- **Natural Easing**: Ease-out for smooth, physics-like movement

#### Hover States & Micro-interactions

- **Button Transitions**: Olive to terracotta color change (~0.2s smooth)
- **Subtle Elevation**: Slight scale-up (1.03) or box-shadow on hover
- **Link Effects**: Underline fade-in or slide-in animations
- **Image Hover**: Gentle zoom (1.05 scale) with overlay icons
- **Form Focus**: Border color transition to olive (0.3s ease)

#### Navigation Animations

- **Mobile Menu**: Fade and slide-down for menu appearance
- **Hamburger Icon**: Transform to X on open (0.5s animation)
- **Dropdown Menus**: Smooth fade and slide transitions

#### Delightful Details

- **Success States**: Animated checkmark on form submission
- **Testimonial Slider**: Gentle auto-scroll (~8 seconds) with user controls
- **Loading States**: Brief spinner or text change ("Processing...")

### Technical Guidelines

#### Performance & Implementation

- **CSS3 & Angular**: Use optimized animation engines
- **Transform & Opacity**: Prefer these over layout-changing animations
- **Consistent Timing**: 300-500ms for most transitions
- **Graceful Degradation**: Ensure functionality without animations

#### Consistency Standards

- **Unified Style**: Consistent animation types across site
- **Timing Library**: Small set of reusable durations and easings
- **Motion Language**: Fade-in, slide-in, scale-pop as primary effects

### Restraint & Accessibility

- **No Autoplay Video**: Avoid large, flashy backgrounds
- **User Control**: Don't take control away from user scrolling
- **Reduce Motion**: Consider OS settings for motion sensitivity
- **Professional Feel**: Avoid cheesy or gimmicky effects

---

## 8. Conclusion

This Product Requirements Document provides a comprehensive blueprint for the Olive and Salt personal chef website. By carefully balancing modern Angular 20 technology with the brand's warm, authentic character, we create a digital experience that mirrors the thoughtful care Emma brings to every meal.

### Key Outcomes

The completed website will:

- **Present a warm welcome** that immediately communicates the Olive and Salt brand
- **Guide visitors with clear information** about services and Emma's story
- **Provide an intuitive booking process** that converts interest into scheduled services
- **Maintain visual consistency** through the signature color palette, typography, and imagery style
- **Deliver responsive performance** across all devices and screen sizes

### Success Metrics

The site should successfully:

- Engage users with compelling visuals and authentic storytelling
- Build trust through testimonials and Emma's personal narrative
- Convert visitors into clients through streamlined booking functionality
- Reflect the brand promise of "food with heart, served at home"

### Implementation Approach

Development teams should follow this PRD to ensure every component—from the smallest button hover state to the complete booking flow—reinforces the Olive and Salt brand experience. The attention to detail documented here mirrors the attention to detail promised in every Olive and Salt meal, creating a cohesive brand experience from first click to final bite.

By implementing these specifications, we transform Olive and Salt's warm, personal approach to cooking into an equally warm and personal digital presence that grows the business and delights every visitor.
