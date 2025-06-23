import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';
import { Testimonial } from '../../../interfaces/component.interfaces';

@Component({
  selector: 'app-testimonial-slider',
  standalone: true,
  imports: [CommonModule, TestimonialCardComponent],
  templateUrl: './testimonial-slider.component.html',
  styleUrl: './testimonial-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialSliderComponent implements OnInit, OnDestroy {
  @Input({ required: true }) testimonials: Testimonial[] = [];
  @Input() autoPlay = true;
  @Input() autoPlayInterval = 5000;
  @Input() showNavigation = true;
  @Input() showDots = true;
  @Input() slidesToShow = 1;
  @Input() variant: 'card' | 'quote' = 'card';

  currentIndex = signal(0);
  isTransitioning = signal(false);
  private autoPlayTimer?: number;

  ngOnInit() {
    if (this.autoPlay && this.testimonials.length > 1) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  nextSlide() {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);
    const nextIndex = (this.currentIndex() + 1) % this.testimonials.length;
    this.currentIndex.set(nextIndex);

    setTimeout(() => this.isTransitioning.set(false), 300);
    this.resetAutoPlay();
  }

  previousSlide() {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);
    const prevIndex =
      this.currentIndex() === 0
        ? this.testimonials.length - 1
        : this.currentIndex() - 1;
    this.currentIndex.set(prevIndex);

    setTimeout(() => this.isTransitioning.set(false), 300);
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    if (this.isTransitioning() || index === this.currentIndex()) return;

    this.isTransitioning.set(true);
    this.currentIndex.set(index);

    setTimeout(() => this.isTransitioning.set(false), 300);
    this.resetAutoPlay();
  }

  private startAutoPlay() {
    this.autoPlayTimer = window.setInterval(() => {
      this.nextSlide();
    }, this.autoPlayInterval);
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = undefined;
    }
  }

  private resetAutoPlay() {
    if (this.autoPlay && this.testimonials.length > 1) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  onMouseEnter() {
    this.stopAutoPlay();
  }

  onMouseLeave() {
    if (this.autoPlay && this.testimonials.length > 1) {
      this.startAutoPlay();
    }
  }

  // Accessibility: Handle keyboard navigation
  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.previousSlide();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.nextSlide();
        break;
      case 'Home':
        event.preventDefault();
        this.goToSlide(0);
        break;
      case 'End':
        event.preventDefault();
        this.goToSlide(this.testimonials.length - 1);
        break;
    }
  }
}
