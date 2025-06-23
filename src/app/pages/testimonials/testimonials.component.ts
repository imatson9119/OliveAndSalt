import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: "Sarah transformed our weekly meal routine completely. As busy professionals, we struggled to eat well, but now we come home to incredible, healthy meals that taste like they're from a five-star restaurant. The personalization is incredible – she remembers every preference and dietary need.",
      author: 'Maria C.',
      location: 'Palo Alto, CA',
      service: 'Weekly In-Home Meals',
      rating: 5,
      image: 'client-maria.jpg',
    },
    {
      text: 'Our anniversary dinner was absolutely magical. Sarah created a seven-course tasting menu that told the story of our relationship through food. Every dish was perfectly executed, and the intimate setting in our own dining room made it unforgettable. Worth every penny.',
      author: 'David & Jennifer R.',
      location: 'Los Altos, CA',
      service: 'Special Event Dinner',
      rating: 5,
      image: 'client-david-jennifer.jpg',
    },
    {
      text: 'The wellness meal planning has been a game-changer for my autoimmune condition. Sarah understood my anti-inflammatory needs and created delicious meals that actually help me feel better. I have more energy and my inflammation markers have improved significantly.',
      author: 'Alex M.',
      location: 'Mountain View, CA',
      service: 'Wellness Meal Planning',
      rating: 5,
      image: 'client-alex.jpg',
    },
    {
      text: "Having Sarah teach me knife skills and basic techniques in my own kitchen was invaluable. She's patient, encouraging, and has helped me become so much more confident in the kitchen. The cooking lessons were the best investment I've made in myself.",
      author: 'Rachel T.',
      location: 'Menlo Park, CA',
      service: 'Cooking Lessons',
      rating: 5,
      image: 'client-rachel.jpg',
    },
    {
      text: 'Sarah catered our small wedding reception for 20 people and it was perfect. The food was restaurant quality, the presentation was beautiful, and she handled everything so professionally. Our guests are still talking about the meal months later.',
      author: 'Tom & Lisa K.',
      location: 'Redwood City, CA',
      service: 'Special Event Dinner',
      rating: 5,
      image: 'client-tom-lisa.jpg',
    },
    {
      text: 'The pantry refresh service opened my eyes to so many new ingredients and possibilities. Sarah helped me understand quality sourcing and now my everyday cooking has improved dramatically. Plus, my pantry has never been more organized!',
      author: 'Patricia H.',
      location: 'San Mateo, CA',
      service: 'Pantry Refresh',
      rating: 5,
      image: 'client-patricia.jpg',
    },
    {
      text: 'Working with Sarah during my cancer treatment was a blessing. She created nutritious, gentle meals that I could actually keep down and enjoy. Her knowledge of nutrition for healing is remarkable, and her compassion made all the difference.',
      author: 'Robert S.',
      location: 'Foster City, CA',
      service: 'Wellness Meal Planning',
      rating: 5,
      image: 'client-robert.jpg',
    },
    {
      text: 'Our monthly dinner parties have become legendary thanks to Sarah. She creates themed menus that transport our guests around the world. The creativity, execution, and attention to detail are unmatched. Our friends now plan their calendars around these dinners!',
      author: 'Elena & Michael D.',
      location: 'Burlingame, CA',
      service: 'Special Event Dinner',
      rating: 5,
      image: 'client-elena-michael.jpg',
    },
  ];

  filteredTestimonials = this.testimonials;
  selectedService = 'All Services';

  services = [
    'All Services',
    'Weekly In-Home Meals',
    'Special Event Dinner',
    'Wellness Meal Planning',
    'Cooking Lessons',
    'Pantry Refresh',
  ];

  onServiceFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.filterByService(target.value);
  }

  filterByService(service: string) {
    this.selectedService = service;
    if (service === 'All Services') {
      this.filteredTestimonials = this.testimonials;
    } else {
      this.filteredTestimonials = this.testimonials.filter(
        (t) => t.service === service
      );
    }
  }

  getStars(rating: number): string[] {
    return Array(rating).fill('⭐');
  }
}
