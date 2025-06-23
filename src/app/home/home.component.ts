import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Shared components
import { HeroSectionComponent } from '../shared/components/content/hero-section/hero-section.component';
import { ServiceCardComponent } from '../shared/components/content/service-card/service-card.component';
import { TestimonialSliderComponent } from '../shared/components/content/testimonial-slider/testimonial-slider.component';
import { GalleryImageComponent } from '../shared/components/content/gallery-image/gallery-image.component';
import { ButtonComponent } from '../shared/components/ui/button/button.component';

// Interfaces
import {
  HeroContent,
  Service,
  Testimonial,
  GalleryImage,
} from '../shared/interfaces/component.interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroSectionComponent,
    ServiceCardComponent,
    TestimonialSliderComponent,
    GalleryImageComponent,
    ButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  // Hero Section Data
  heroContent: HeroContent = {
    title: 'Food with Heart, Served at Home',
    subtitle: 'Personal chef services that make every meal a memory',
    description:
      'Transform your home into a private restaurant with customized, restaurant-quality meals prepared fresh in your kitchen.',
    backgroundImage: '/assets/images/hero-home-cooking.jpg',
    backgroundImageAlt:
      'Chef Emma preparing a beautiful meal in a home kitchen',
    alignment: 'center',
    overlay: true,
    overlayOpacity: 0.4,
    primaryCta: {
      text: 'Book Your Experience',
      route: '/booking',
      ariaLabel: 'Book your personal chef experience',
    },
    secondaryCta: {
      text: 'View Our Menu',
      route: '/services',
      ariaLabel: 'Learn more about our services',
    },
  };

  // Key Services Summary (3 core selling points)
  keyServices: { icon: string; title: string; description: string }[] = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
        <polyline points="8,10 12,14 16,10"/>
      </svg>`,
      title: 'Customized Menus',
      description:
        "Tailored to your tastes, dietary needs, and the occasion you're celebrating",
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/>
        <path d="M3 7l3 9h12l3-9H3z"/>
        <path d="M9 2v5"/>
        <path d="M15 2v5"/>
      </svg>`,
      title: 'In-Home Preparation',
      description:
        'Fresh, restaurant-quality meals cooked in your kitchen so you can relax with your guests',
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>`,
      title: 'Memorable Experiences',
      description:
        'From intimate dinners to celebrations, every detail is crafted to make it special',
    },
  ];

  // Featured Services for cards
  featuredServices: Service[] = [
    {
      id: 'intimate-dinner',
      name: 'Intimate Dinner Experience',
      description:
        'Transform your home into a private restaurant for an unforgettable evening. Perfect for date nights, anniversaries, or special occasions.',
      shortDescription:
        'Transform your home into a private restaurant for an unforgettable evening.',
      image: '/assets/images/intimate-dinner.jpg',
      imageAlt:
        'Beautifully set table for two with candlelight and elegant presentation',
      includedItems: [
        'Menu consultation and customization',
        'Grocery shopping and sourcing',
        'In-home preparation and cooking',
        'Beautiful presentation and serving',
        'Complete kitchen cleanup',
      ],
      idealFor: 'Date nights, anniversaries, intimate celebrations',
      pricing: 'Starting at $195',
      startingPrice: 195,
    },
    {
      id: 'special-event',
      name: 'Special Event Catering',
      description:
        'Whether celebrating a birthday, hosting a dinner party, or marking a milestone, create a menu that reflects the importance of your event.',
      shortDescription:
        "Celebrate life's special moments with a personalized dining experience.",
      image: '/assets/images/dinner-party.jpg',
      imageAlt:
        'Elegant dinner party setup with multiple guests around a beautifully decorated table',
      includedItems: [
        'Custom menu for your celebration',
        'Appetizers through dessert',
        'Professional presentation',
        'Event coordination',
        'Full service and cleanup',
      ],
      idealFor: 'Birthday parties, anniversaries, celebrations',
      pricing: 'Starting at $125/person',
      startingPrice: 125,
    },
  ];

  // Featured Testimonials
  testimonials: Testimonial[] = [
    {
      id: 'sarah-anniversary',
      content:
        'Our anniversary dinner crafted by Emma was absolutely unforgettable. Restaurant-quality food in the comfort of our home, with service that made us feel like royalty.',
      name: 'Sarah & Mike',
      serviceType: 'Anniversary Dinner',
      rating: 5,
    },
    {
      id: 'johnson-birthday',
      content:
        "Emma turned our kitchen into magic for Mom's 70th birthday. Every dish was perfection, and the experience brought our whole family together in the most beautiful way.",
      name: 'The Johnson Family',
      serviceType: 'Birthday Celebration',
      rating: 5,
    },
    {
      id: 'lisa-dinner-party',
      content:
        'I wanted to host a dinner party but was overwhelmed by the planning. Emma took care of everything, and I actually got to enjoy my own party! The food was incredible.',
      name: 'Lisa Chen',
      serviceType: 'Dinner Party',
      rating: 5,
    },
  ];

  // Gallery Preview Images
  galleryPreview: GalleryImage[] = [
    {
      id: 'seasonal-pasta',
      src: '/assets/images/gallery/seasonal-pasta-full.jpg',
      alt: 'Hand-rolled pasta with seasonal mushrooms and truffle oil',
      caption: 'Seasonal Ingredients, Freshly Prepared',
      category: 'signature-dishes',
      thumbnail: '/assets/images/gallery/seasonal-pasta-thumb.jpg',
    },
    {
      id: 'plated-dinner',
      src: '/assets/images/gallery/plated-dinner-full.jpg',
      alt: 'Beautifully plated main course with artistic presentation',
      caption: 'Restaurant-Quality Presentation',
      category: 'signature-dishes',
      thumbnail: '/assets/images/gallery/plated-dinner-thumb.jpg',
    },
    {
      id: 'table-setting',
      src: '/assets/images/gallery/table-setting-full.jpg',
      alt: 'Elegant table setting with candlelight and floral arrangements',
      caption: 'Every Detail Matters',
      category: 'events',
      thumbnail: '/assets/images/gallery/table-setting-thumb.jpg',
    },
  ];

  // Event handlers
  onHeroCtaClicked(): void {
    // Navigation will be handled by routerLink in template
  }

  onServiceCardClicked(service: Service): void {
    // Could implement service detail modal or navigation
    console.log('Service clicked:', service);
  }

  onBookServiceClicked(service: Service): void {
    // Navigate to booking with service pre-selected
    console.log('Book service:', service);
  }

  onGalleryImageClicked(data: { image: GalleryImage; index: number }): void {
    // Could implement lightbox or navigate to gallery
    console.log('Gallery image clicked:', data);
  }
}
