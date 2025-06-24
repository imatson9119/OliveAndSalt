import { Injectable } from '@angular/core';

// Type definitions for structured data schemas
interface StructuredDataSchema {
  '@context'?: string;
  '@type'?: string;
  '@graph'?: StructuredDataItem[];
  [key: string]: unknown;
}

interface StructuredDataItem {
  '@type'?: string;
  '@id'?: string;
  [key: string]: unknown;
}

interface Testimonial {
  text: string;
  author: string;
  service: string;
}

interface Breadcrumb {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class StructuredDataService {
  /**
   * Creates and injects JSON-LD structured data into the document head
   */
  insertStructuredData(data: StructuredDataSchema): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);

    // Remove any existing structured data script to prevent duplicates
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]',
    );
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);
  }

  /**
   * Remove structured data script from document head
   */
  removeStructuredData(): void {
    const script = document.querySelector('script[type="application/ld+json"]');
    if (script) {
      script.remove();
    }
  }

  /**
   * Generate Local Business schema for Olive & Salt
   */
  getLocalBusinessSchema(): StructuredDataSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://olive-and-salt.com/#business',
      name: 'Olive & Salt Personal Chef Service',
      alternateName: 'Olive & Salt',
      description:
        'Personal chef service providing fresh, personalized, nutrition-focused cuisine prepared in your own kitchen. Specializing in weekly meal prep, special events, and wellness meal planning.',
      url: 'https://olive-and-salt.com',
      telephone: '+1-409-594-5718',
      email: 'hello@olive-and-salt.com',
      priceRange: '$75-$200',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Check',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Grapevine',
        addressRegion: 'TX',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '32.9546',
        longitude: '-97.0807',
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '32.9546',
          longitude: '-97.0807',
        },
        geoRadius: '50000', // 50km radius
      },
      serviceType: 'Personal Chef Service',
      category: 'Personal Chef',
      foundingDate: '2025',
      founder: {
        '@type': 'Person',
        name: 'Emma Matson',
        '@id': 'https://olive-and-salt.com/#chef',
      },
      employee: {
        '@type': 'Person',
        name: 'Emma Matson',
        '@id': 'https://olive-and-salt.com/#chef',
      },
      slogan: 'Wholesome meals, personally prepared.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://olive-and-salt.com/assets/images/logo.png',
      },
      // image: {
      //   '@type': 'ImageObject',
      //   url: 'https://olive-and-salt.com/assets/images/chef-sarah.jpg', // Update with actual image
      // },
      sameAs: ['https://instagram.com/oliveandsalt'],
      // aggregateRating: {
      //   '@type': 'AggregateRating',
      //   ratingValue: '5.0',
      //   reviewCount: '15',
      //   bestRating: '5',
      //   worstRating: '1',
      // },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Personal Chef Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Weekly In-Home Meals',
              '@id': 'https://olive-and-salt.com/services#weekly-meals',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Special Event Dinners',
              '@id': 'https://olive-and-salt.com/services#special-events',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wellness Meal Planning',
              '@id': 'https://olive-and-salt.com/services#wellness-planning',
            },
          },
        ],
      },
    };
  }

  /**
   * Generate Organization schema
   */
  getOrganizationSchema(): StructuredDataSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://olive-and-salt.com/#organization',
      name: 'Olive & Salt',
      alternateName: 'Olive and Salt Personal Chef Service',
      url: 'https://olive-and-salt.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://olive-and-salt.com/assets/images/logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-409-594-5718',
        contactType: 'customer service',
        email: 'hello@olive-and-salt.com',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      sameAs: ['https://instagram.com/oliveandsalt'],
      founder: {
        '@type': 'Person',
        name: 'Emma Matson',
        '@id': 'https://olive-and-salt.com/#chef',
      },
      foundingDate: '2025',
      numberOfEmployees: 1,
      description:
        'Personal chef service focused on freshness, personalization, and holistic nourishment. We bring restaurant-quality, nutrition-focused cuisine directly to your table, prepared in the comfort of your own kitchen.',
    };
  }

  /**
   * Generate Person schema for Chef Emma
   */
  getPersonSchema(): StructuredDataSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://olive-and-salt.com/#chef',
      name: 'Emma Matson',
      jobTitle: 'Personal Chef',
      description:
        "Experienced personal chef with over 15 years in professional kitchens and a Master's in Nutritional Science. Specializes in fresh, seasonal, nutrition-focused cuisine prepared in clients' homes.",
      url: 'https://olive-and-salt.com/about',
      image: {
        '@type': 'ImageObject',
        url: 'https://olive-and-salt.com/assets/images/chef-emma.jpg',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Olive & Salt',
        '@id': 'https://olive-and-salt.com/#organization',
      },
    };
  }

  /**
   * Generate Service schemas for all offered services
   */
  getServicesSchema(): StructuredDataSchema {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': 'https://olive-and-salt.com/services#weekly-meals',
          name: 'Weekly In-Home Meals',
          description:
            'Personal menu planning and cooking tailored to your lifestyle and preferences. Custom meal preparation in your own kitchen with fresh, local ingredients.',
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://olive-and-salt.com/#business',
          },
          serviceType: 'Personal Chef Service',
          category: 'Meal Preparation',
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: '32.9546',
              longitude: '-97.0807',
            },
            geoRadius: '50000',
          },
          offers: {
            '@type': 'Offer',
            price: '150',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '150',
              priceCurrency: 'USD',
              valueAddedTaxIncluded: true,
              referenceQuantity: {
                '@type': 'QuantitativeValue',
                value: '1',
                unitText: 'session',
              },
            },
            description: 'Starting at $150 per session',
            availability: 'https://schema.org/InStock',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Weekly Meals Features',
            itemListElement: [
              'Custom menu planning based on your preferences',
              'Shopping for fresh, local ingredients',
              'Cooking in your own kitchen',
              'Meal prep for the week ahead',
              'Dietary accommodations and restrictions',
              'Kitchen organization and cleanup',
            ],
          },
          duration: 'PT3H',
        },
        {
          '@type': 'Service',
          '@id': 'https://olive-and-salt.com/services#special-events',
          name: 'Special Event Dinners',
          description:
            'Chef-catered private events for intimate gatherings and celebrations. Multi-course tasting menus with wine pairing recommendations.',
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://olive-and-salt.com/#business',
          },
          serviceType: 'Event Catering',
          category: 'Special Event Dining',
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: '32.9546',
              longitude: '-97.0807',
            },
            geoRadius: '50000',
          },
          offers: {
            '@type': 'Offer',
            price: '75',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '75',
              priceCurrency: 'USD',
              valueAddedTaxIncluded: true,
              referenceQuantity: {
                '@type': 'QuantitativeValue',
                value: '1',
                unitText: 'person',
              },
            },
            description: 'Starting at $75 per person',
            availability: 'https://schema.org/InStock',
          },
          duration: 'PT5H',
        },
        {
          '@type': 'Service',
          '@id': 'https://olive-and-salt.com/services#wellness-planning',
          name: 'Wellness Meal Planning',
          description:
            'Nutrition-aligned batch prep focused on your health and wellness goals. Includes nutritional assessment and anti-inflammatory meal planning.',
          provider: {
            '@type': 'LocalBusiness',
            '@id': 'https://olive-and-salt.com/#business',
          },
          serviceType: 'Nutrition Consulting',
          category: 'Wellness Meal Planning',
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: '32.9546',
              longitude: '-97.0807',
            },
            geoRadius: '50000',
          },
          offers: {
            '@type': 'Offer',
            price: '200',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '200',
              priceCurrency: 'USD',
              valueAddedTaxIncluded: true,
              referenceQuantity: {
                '@type': 'QuantitativeValue',
                value: '1',
                unitText: 'session',
              },
            },
            description: 'Starting at $200 per session',
            availability: 'https://schema.org/InStock',
          },
          duration: 'PT4H',
        },
      ],
    };
  }

  /**
   * Generate Review schemas from testimonials
   */
  getReviewsSchema(testimonials: Testimonial[]): StructuredDataSchema {
    const reviews = testimonials.map((testimonial, index) => ({
      '@type': 'Review',
      '@id': `https://olive-and-salt.com/#review-${index + 1}`,
      reviewBody: testimonial.text,
      author: {
        '@type': 'Person',
        name: testimonial.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      datePublished: new Date().toISOString().split('T')[0], // Current date as placeholder
      itemReviewed: {
        '@type': 'LocalBusiness',
        '@id': 'https://olive-and-salt.com/#business',
      },
      about: {
        '@type': 'Service',
        name: testimonial.service,
      },
    }));

    return {
      '@context': 'https://schema.org',
      '@graph': reviews,
    };
  }

  /**
   * Generate comprehensive home page schema
   */
  getHomePageSchema(testimonials: Testimonial[]): StructuredDataSchema {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        this.getLocalBusinessSchema(),
        this.getOrganizationSchema(),
        this.getPersonSchema(),
        ...(this.getReviewsSchema(testimonials)['@graph'] || []),
      ],
    };
  }

  /**
   * Generate comprehensive services page schema
   */
  getServicesPageSchema(): StructuredDataSchema {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        this.getLocalBusinessSchema(),
        ...(this.getServicesSchema()['@graph'] || []),
      ],
    };
  }

  /**
   * Generate about page schema focusing on the chef
   */
  getAboutPageSchema(): StructuredDataSchema {
    return {
      '@context': 'https://schema.org',
      '@graph': [this.getPersonSchema(), this.getOrganizationSchema()],
    };
  }

  /**
   * Generate FAQ schema for common questions
   */
  getFAQSchema(): StructuredDataSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What area do you serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'I provide personal chef services throughout the San Francisco Bay Area, including San Francisco, Peninsula, and South Bay communities within a 50-mile radius.',
          },
        },
        {
          '@type': 'Question',
          name: 'How far in advance should I book?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For weekly meal service, I recommend booking 1-2 weeks in advance. For special events, please book at least 2-4 weeks ahead to ensure availability, especially during holiday seasons.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you accommodate dietary restrictions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely! I specialize in accommodating all dietary needs including vegetarian, vegan, gluten-free, dairy-free, keto, paleo, anti-inflammatory, and medical dietary requirements. I work closely with you to create delicious meals that meet your specific needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in the service?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'My service includes menu planning, grocery shopping, cooking in your kitchen, proper food storage, and complete cleanup. I leave your kitchen spotless and your meals properly labeled with reheating instructions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to provide ingredients?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, I handle all grocery shopping and source the finest local, organic ingredients for your meals. The cost of ingredients is included in my service fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a cooking session take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Weekly meal prep typically takes 3-4 hours, special event preparation is 4-6 hours, and wellness meal planning sessions are 4-5 hours including consultation time.',
          },
        },
      ],
    };
  }

  /**
   * Generate Breadcrumb schema for navigation
   */
  getBreadcrumbSchema(breadcrumbs: Breadcrumb[]): StructuredDataSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  }
}
