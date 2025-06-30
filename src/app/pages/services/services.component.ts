import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { FadeInDirective } from '../../directives';
import { StructuredDataService } from '../../services/structured-data.service';

@Component({
  selector: 'app-services',
  imports: [RouterLink, CommonModule, FadeInDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit, OnDestroy {
  private structuredDataService = inject(StructuredDataService);
  private meta = inject(Meta);
  private title = inject(Title);

  services = [
    {
      id: 'weekly-meals',
      title: 'Weekly In-Home Meals',
      description:
        'Personal menu planning and cooking tailored to your lifestyle and preferences.',
      features: [
        'Custom menu planning based on your preferences',
        'Shopping for fresh, local ingredients',
        'Cooking in your own kitchen',
        'Meal prep for the week ahead',
        'Dietary accommodations and restrictions',
        'Kitchen organization and cleanup',
      ],
      pricing: 'Starting at $150 per session',
      duration: '3-4 hours per session',
    },
    {
      id: 'special-events',
      title: 'Special Event Dinners',
      description:
        'Chef-catered private events for intimate gatherings and celebrations.',
      features: [
        'Multi-course tasting menus',
        'Wine pairing recommendations',
        'Beautiful plating and presentation',
        'Interactive cooking demonstrations',
        'Anniversary, birthday, and holiday meals',
        'Dietary customization for all guests',
      ],
      pricing: 'Starting at $75 per person',
      duration: '4-6 hours (prep and service)',
    },
    {
      id: 'wellness-planning',
      title: 'Wellness Meal Planning',
      description:
        'Nutrition-aligned batch prep focused on your health and wellness goals.',
      features: [
        'Nutritional assessment and goal setting',
        'Anti-inflammatory meal planning',
        'Macro and micronutrient optimization',
        'Digestive health support recipes',
        'Energy-boosting meal combinations',
        'Sustainable eating habit development',
      ],
      pricing: 'Starting at $200 per session',
      duration: '4-5 hours (consultation and prep)',
    },
  ];

  addOns = [
    {
      title: 'Pantry Refresh',
      description:
        'Complete pantry organization with quality ingredient sourcing',
      price: '$50',
    },
    {
      title: 'Cooking Lessons',
      description: 'One-on-one technique training in your kitchen',
      price: '$75/hour',
    },
    {
      title: 'Custom Recipe Books',
      description: 'Personalized recipe collection based on your preferences',
      price: '$100',
    },
  ];

  ngOnInit() {
    // Update page title and meta tags
    this.title.setTitle(
      'Personal Chef Services | Weekly Meals & Special Events | Olive & Salt',
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Discover our personal chef services: weekly in-home meal prep, special event dinners, and wellness meal planning. Starting at $75 per person for special events.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'personal chef services, weekly meal prep, special event catering, wellness meal planning, private chef, Grapevine',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Personal Chef Services | Olive & Salt',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Weekly meal prep, special events, and wellness planning with personalized nutrition-focused cuisine.',
    });

    // Add structured data for services page
    const servicesPageSchema =
      this.structuredDataService.getServicesPageSchema();
    this.structuredDataService.insertStructuredData(servicesPageSchema);
  }

  ngOnDestroy() {
    // Clean up structured data
    this.structuredDataService.removeStructuredData();
  }
}
