import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouteAnimationService } from './route-animation.service';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private router = inject(Router);
  private routeAnimationService = inject(RouteAnimationService);

  constructor() {
    // Listen to router events and scroll to top on navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Mark that navigation has occurred for animation service
        this.routeAnimationService.markNavigationOccurred();

        // Only scroll if this isn't the first page load
        if (!this.routeAnimationService.isFirstPageLoad()) {
          this.scrollToTop();
        }
      });
  }

  /**
   * Smoothly scroll to the top of the page
   * Uses a slight delay to work better with route animations
   */
  scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
    // Small delay to ensure the animation starts properly
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: behavior,
      });
    }, 50);
  }

  /**
   * Immediately scroll to top (for when smooth animation isn't needed)
   */
  scrollToTopImmediate(): void {
    window.scrollTo(0, 0);
  }

  /**
   * Scroll to a specific element by ID
   */
  scrollToElement(
    elementId: string,
    behavior: ScrollBehavior = 'smooth',
  ): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: behavior,
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  /**
   * Get current scroll position
   */
  getCurrentScrollPosition(): { x: number; y: number } {
    return {
      x: window.scrollX || document.documentElement.scrollLeft,
      y: window.scrollY || document.documentElement.scrollTop,
    };
  }
}
