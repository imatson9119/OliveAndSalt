import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  AfterViewInit,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input('appFadeIn') enabled: boolean | string = true;
  @Input() fadeDelay: number | string = 0; // Delay in milliseconds
  @Input() fadeDuration: number | string = 600; // Duration in milliseconds
  @Input() fadeDistance: number | string = 20; // Distance to slide from (in pixels)
  @Input() fadeDirection: 'up' | 'down' | 'left' | 'right' | 'none' = 'up';
  @Input() fadeEasing = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
  @Input() fadeThreshold: number | string = 0; // Intersection threshold (0-1)
  @Input() fadeOnLoad: boolean | string = false; // Animate immediately on page load instead of on intersection

  private observer: IntersectionObserver | null = null;
  private timeoutId: number | null = null;
  private hasAnimated = false;
  private originalTransition = '';

  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    // Convert string inputs to proper types
    this.enabled =
      this.enabled === '' || this.enabled === 'true' || this.enabled === true;
    this.fadeDelay =
      typeof this.fadeDelay === 'string'
        ? parseInt(this.fadeDelay, 10)
        : this.fadeDelay;
    this.fadeDuration =
      typeof this.fadeDuration === 'string'
        ? parseInt(this.fadeDuration, 10)
        : this.fadeDuration;
    this.fadeDistance =
      typeof this.fadeDistance === 'string'
        ? parseInt(this.fadeDistance, 10)
        : this.fadeDistance;
    this.fadeThreshold =
      typeof this.fadeThreshold === 'string'
        ? parseFloat(this.fadeThreshold)
        : this.fadeThreshold;
    this.fadeOnLoad =
      this.fadeOnLoad === '' ||
      this.fadeOnLoad === 'true' ||
      this.fadeOnLoad === true;

    if (!this.enabled) return;

    // Store the original transition before we modify it
    this.storeOriginalTransition();

    // Set initial styles
    this.setInitialStyles();
  }

  ngAfterViewInit(): void {
    if (!this.enabled) return;

    // Check if we should animate immediately on load or wait for intersection
    if (this.fadeOnLoad) {
      // Animate immediately on page load
      this.animateIn();
    } else {
      // Set up intersection observer for viewport-based animation
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private storeOriginalTransition(): void {
    const element = this.el.nativeElement;
    const computedStyles = window.getComputedStyle(element);
    this.originalTransition = computedStyles.transition || '';
  }

  private setInitialStyles(): void {
    const element = this.el.nativeElement;

    // Set initial opacity and transform
    this.renderer.setStyle(element, 'opacity', '0');

    // Temporarily disable transitions for initial setup
    this.renderer.setStyle(element, 'transition', 'none');

    // Set initial transform based on direction
    const transform = this.getInitialTransform();
    this.renderer.setStyle(element, 'transform', transform);
  }

  private getInitialTransform(): string {
    const distance =
      typeof this.fadeDistance === 'string'
        ? parseInt(this.fadeDistance, 10)
        : this.fadeDistance;
    switch (this.fadeDirection) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      case 'none':
      default:
        return 'scale(0.95)';
    }
  }

  private getFinalTransform(): string {
    switch (this.fadeDirection) {
      case 'up':
      case 'down':
        return 'translateY(0px)';
      case 'left':
      case 'right':
        return 'translateX(0px)';
      case 'none':
      default:
        return 'scale(1)';
    }
  }

  private mergeTransitions(): string {
    const duration =
      typeof this.fadeDuration === 'string'
        ? parseInt(this.fadeDuration, 10)
        : this.fadeDuration;

    const fadeTransitions = [
      `opacity ${duration}ms ${this.fadeEasing}`,
      `transform ${duration}ms ${this.fadeEasing}`,
    ];

    // If there are existing transitions, parse and merge them
    if (
      this.originalTransition &&
      this.originalTransition !== 'all 0s ease 0s'
    ) {
      const existingTransitions = this.parseTransitions(
        this.originalTransition,
      );
      const mergedTransitions = new Set([
        ...existingTransitions,
        ...fadeTransitions,
      ]);
      return Array.from(mergedTransitions).join(', ');
    }

    return fadeTransitions.join(', ');
  }

  private parseTransitions(transitionString: string): string[] {
    // Parse existing transitions and filter out opacity/transform if they exist
    // to avoid duplicates (our fade transitions will take precedence)
    return transitionString
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t !== 'all 0s ease 0s' && t !== 'none')
      .filter((t) => !t.startsWith('opacity') && !t.startsWith('transform'));
  }

  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback for environments without IntersectionObserver
      this.animateIn();
      return;
    }

    const threshold =
      typeof this.fadeThreshold === 'string'
        ? parseFloat(this.fadeThreshold)
        : this.fadeThreshold;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animateIn();
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '50px 0px 10px 0px',
      },
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animateIn(): void {
    if (this.hasAnimated) return;

    this.hasAnimated = true;
    const element = this.el.nativeElement;

    // Ensure numeric values
    const delay =
      typeof this.fadeDelay === 'string'
        ? parseInt(this.fadeDelay, 10)
        : this.fadeDelay;

    // Set up merged transitions (preserving existing ones)
    const mergedTransition = this.mergeTransitions();
    this.renderer.setStyle(element, 'transition', mergedTransition);

    // Apply animation with delay
    this.timeoutId = window.setTimeout(() => {
      this.renderer.setStyle(element, 'opacity', '1');
      this.renderer.setStyle(element, 'transform', this.getFinalTransform());
    }, delay);

    // Disconnect observer after animation
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  // Public method to manually trigger animation
  public triggerAnimation(): void {
    if (!this.enabled || this.hasAnimated) return;
    this.animateIn();
  }

  // Public method to reset animation
  public resetAnimation(): void {
    this.hasAnimated = false;
    this.setInitialStyles();
    if (this.observer) {
      this.observer.observe(this.el.nativeElement);
    }
  }
}
