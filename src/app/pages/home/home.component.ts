import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { FadeInDirective } from '../../directives';
import { StructuredDataService } from '../../services/structured-data.service';

@Component({
    selector: 'app-home',
    imports: [RouterLink, CommonModule, FadeInDirective],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  testimonials = [
    {
      text: 'The personalized meals Sarah creates have transformed my relationship with food. Every dish is not only delicious but perfectly aligned with my dietary goals.',
      author: 'Maria C.',
      service: 'Weekly In-Home Meals',
    },
    {
      text: 'Having Sarah cook in my own kitchen for our anniversary dinner was magical. The attention to detail and flavor was beyond anything we could have imagined.',
      author: 'David & Jennifer R.',
      service: 'Special Event Dinner',
    },
    {
      text: 'The wellness meal planning has been a game-changer for my busy lifestyle. I feel nourished and energized without the stress of meal prep.',
      author: 'Alex M.',
      service: 'Wellness Meal Planning',
    },
  ];

  currentTestimonial = 0;
  private testimonialInterval: ReturnType<typeof setInterval> | undefined;
  private structuredDataService = inject(StructuredDataService);
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    // Update page title and meta tags
    this.title.setTitle('Olive & Salt | Personal Chef Service by Emma Matson');
    this.meta.updateTag({
      name: 'description',
      content:
        'Fresh, personalized meals prepared in your home. Olive and Salt offers warm, thoughtful private chef experiences with a focus on quality, connection, and culinary storytelling.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'personal chef, private chef, meal prep, catering, Grapevine TX, Emma Matson, nutrition, wellness meals',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Olive & Salt | Personal Chef Service',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Personalized meals prepared in your home by chef Emma Matson. Warm, fresh, and unforgettable culinary experiences.',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Olive & Salt | Personal Chef Service',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Customized meals, hospitality, and fresh ingredients—cooked in your home.',
    });

    // Add structured data for home page
    const homePageSchema = this.structuredDataService.getHomePageSchema(
      this.testimonials,
    );
    this.structuredDataService.insertStructuredData(homePageSchema);

    // Start testimonial rotation
    this.testimonialInterval = setInterval(() => {
      this.currentTestimonial =
        (this.currentTestimonial + 1) % this.testimonials.length;
    }, 5000);
  }

  ngOnDestroy() {
    // Clean up interval and structured data
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
    this.structuredDataService.removeStructuredData();
  }
}
