import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
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

  ngOnInit() {
    setInterval(() => {
      this.currentTestimonial =
        (this.currentTestimonial + 1) % this.testimonials.length;
    }, 5000);
  }
}
