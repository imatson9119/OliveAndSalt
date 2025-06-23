import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AnimationConfig {
  name: string;
  duration: number;
  easing: string;
}

@Injectable({
  providedIn: 'root',
})
export class RouteAnimationService {
  private animationTypeSubject = new BehaviorSubject<string>('slide');
  public animationType$ = this.animationTypeSubject.asObservable();

  private isFirstLoad = true;
  private hasNavigated = false;

  private animationConfigs: Record<string, AnimationConfig> = {
    slide: {
      name: 'slide',
      duration: 600,
      easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
    },
    fade: {
      name: 'fade',
      duration: 400,
      easing: 'ease-in-out',
    },
    slideUp: {
      name: 'slideUp',
      duration: 500,
      easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
    },
  };

  setAnimationType(type: string): void {
    if (this.animationConfigs[type]) {
      this.animationTypeSubject.next(type);
    }
  }

  getAnimationType(): string {
    return this.animationTypeSubject.value;
  }

  getAnimationConfig(type?: string): AnimationConfig {
    const animationType = type || this.getAnimationType();
    return (
      this.animationConfigs[animationType] || this.animationConfigs['slide']
    );
  }

  // Method to determine animation based on route paths
  getAnimationForNavigation(fromPath: string, toPath: string): string {
    // Special animations for specific route combinations
    const legalRoutes = ['privacy', 'terms', 'faq'];

    if (legalRoutes.includes(toPath) || legalRoutes.includes(fromPath)) {
      return 'slideUp';
    }

    if (toPath === 'gallery' || fromPath === 'gallery') {
      return 'fade';
    }

    // Default slide animation
    return 'slide';
  }

  /**
   * Check if this is the first page load (no animations should occur)
   */
  isFirstPageLoad(): boolean {
    return this.isFirstLoad;
  }

  /**
   * Mark that navigation has occurred (enables animations for future navigations)
   */
  markNavigationOccurred(): void {
    this.isFirstLoad = false;
    this.hasNavigated = true;
  }

  /**
   * Check if animations should be enabled
   */
  shouldAnimate(): boolean {
    return !this.isFirstLoad && this.hasNavigated;
  }

  /**
   * Reset the first load state (useful for testing or special cases)
   */
  resetFirstLoadState(): void {
    this.isFirstLoad = true;
    this.hasNavigated = false;
  }
}
