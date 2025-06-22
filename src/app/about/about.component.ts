import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    // Set page title and meta description for SEO
    this.title.setTitle('About Our Personal Chef | Olive and Salt');

    this.meta.updateTag({
      name: 'description',
      content:
        "Meet the chef behind Olive and Salt's personalized, in-home cooking service. Learn about our commitment to fresh ingredients and holistic nourishment.",
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'personal chef, in-home cooking, fresh ingredients, personalized meals, olive and salt, holistic nourishment',
    });

    // Open Graph meta tags for social sharing
    this.meta.updateTag({
      property: 'og:title',
      content: 'About Our Personal Chef | Olive and Salt',
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        "Meet the chef behind Olive and Salt's personalized, in-home cooking service. Learn about our commitment to fresh ingredients and holistic nourishment.",
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website',
    });

    // Structured data for better SEO
    this.addStructuredData();
  }

  private addStructuredData(): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Olive and Salt Personal Chef',
      jobTitle: 'Personal Chef',
      description:
        'Professional personal chef specializing in fresh, locally-sourced ingredients and personalized in-home cooking experiences.',
      knowsAbout: [
        'Personal Chef Services',
        'In-Home Cooking',
        'Fresh Ingredients',
        'Holistic Nutrition',
        'Personalized Meal Planning',
      ],
      serviceArea: 'Local Area',
      offers: {
        '@type': 'Service',
        name: 'Personal Chef Services',
        description:
          'Personalized in-home cooking services using fresh, locally-sourced ingredients',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}
