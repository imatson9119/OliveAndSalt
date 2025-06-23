import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Service } from '../../../interfaces/component.interfaces';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="service-card"
      [class.service-card--featured]="featured"
      [class.service-card--selected]="isSelected"
      (click)="onServiceClick()"
      [attr.tabindex]="'0'"
      [attr.role]="'button'"
      [attr.aria-pressed]="isSelected"
    >
      <div class="service-card__image-container">
        <img
          [src]="service.image"
          [alt]="service.imageAlt"
          class="service-card__image"
          loading="lazy"
        />
        <div class="service-card__overlay"></div>
      </div>

      <div class="service-card__content">
        <header class="service-card__header">
          <h3 class="service-card__title">{{ service.name }}</h3>
          <div
            class="service-card__pricing"
            *ngIf="service.pricing && showPricing"
          >
            <span class="service-card__price">{{ service.pricing }}</span>
          </div>
        </header>

        <p class="service-card__description">{{ service.shortDescription }}</p>

        <div
          class="service-card__features"
          *ngIf="service.includedItems.length > 0"
        >
          <h4 class="service-card__features-title">What's Included:</h4>
          <ul class="service-card__features-list">
            <li
              *ngFor="let item of service.includedItems"
              class="service-card__feature"
            >
              <svg
                class="service-card__check-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="9,11 12,14 22,4"></polyline>
                <path
                  d="m21,12c0,4.97 -4.03,9 -9,9s-9,-4.03 -9,-9 4.03,-9 9,-9c1.14,0 2.24,0.21 3.25,0.6"
                ></path>
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="service-card__ideal-for" *ngIf="service.idealFor">
          <p class="service-card__ideal-text">
            <strong>Perfect for:</strong> {{ service.idealFor }}
          </p>
        </div>

        <div class="service-card__actions">
          <app-button
            [text]="ctaText"
            variant="primary"
            size="medium"
            (clicked)="onBookClick()"
          ></app-button>

          <app-button
            text="Learn More"
            variant="outline"
            size="medium"
            (clicked)="onLearnMoreClick()"
            *ngIf="showLearnMore"
          ></app-button>
        </div>
      </div>
    </article>
  `,
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input() service!: Service;
  @Input() featured = false;
  @Input() ctaText = 'Book Now';
  @Input() showLearnMore = true;
  @Input() showPricing = true;
  @Input() isSelected = false;

  @Output() bookClicked = new EventEmitter<Service>();
  @Output() learnMoreClicked = new EventEmitter<Service>();
  @Output() serviceClick = new EventEmitter<Service>();

  onBookClick(): void {
    this.bookClicked.emit(this.service);
  }

  onLearnMoreClick(): void {
    this.learnMoreClicked.emit(this.service);
  }

  onServiceClick(): void {
    this.serviceClick.emit(this.service);
  }
}
