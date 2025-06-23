import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../../../interfaces/component.interfaces';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialCardComponent {
  @Input({ required: true }) testimonial!: Testimonial;
  @Input() showPhoto = true;
  @Input() variant: 'card' | 'quote' = 'card';
  @Input() alignment: 'left' | 'center' | 'right' = 'center';
}
