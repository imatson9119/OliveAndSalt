import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
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
}
