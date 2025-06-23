import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '../../../interfaces/component.interfaces';

export interface SocialMediaLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  serviceArea?: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <!-- Main Footer Content -->
          <div class="footer__main">
            <!-- Brand Section -->
            <div class="footer__brand">
              <div class="footer__logo">
                <h2 class="footer__logo-text">
                  <span class="footer__logo-primary">Olive</span>
                  <span class="footer__logo-secondary">and Salt</span>
                </h2>
              </div>
              <p class="footer__tagline" *ngIf="tagline">{{ tagline }}</p>
              <p class="footer__description" *ngIf="description">
                {{ description }}
              </p>
            </div>

            <!-- Contact Information -->
            <div class="footer__contact" *ngIf="contactInfo">
              <h3 class="footer__section-title">Get in Touch</h3>
              <div class="footer__contact-info">
                <div *ngIf="contactInfo.email" class="footer__contact-item">
                  <span class="footer__contact-label">Email:</span>
                  <a
                    [href]="'mailto:' + contactInfo.email"
                    class="footer__contact-link"
                  >
                    {{ contactInfo.email }}
                  </a>
                </div>
                <div *ngIf="contactInfo.phone" class="footer__contact-item">
                  <span class="footer__contact-label">Phone:</span>
                  <a
                    [href]="'tel:' + contactInfo.phone"
                    class="footer__contact-link"
                  >
                    {{ contactInfo.phone }}
                  </a>
                </div>
                <div
                  *ngIf="contactInfo.serviceArea"
                  class="footer__contact-item"
                >
                  <span class="footer__contact-label">Service Area:</span>
                  <span class="footer__contact-text">{{
                    contactInfo.serviceArea
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Navigation Links -->
            <div class="footer__navigation" *ngIf="navigationItems.length > 0">
              <h3 class="footer__section-title">Quick Links</h3>
              <nav class="footer__nav" [attr.aria-label]="'Footer navigation'">
                <ul class="footer__nav-list">
                  <li
                    *ngFor="let item of navigationItems"
                    class="footer__nav-item"
                  >
                    <a
                      [routerLink]="item.external ? null : item.route"
                      [href]="item.external ? item.route : null"
                      [target]="item.external ? '_blank' : undefined"
                      [rel]="item.external ? 'noopener noreferrer' : null"
                      class="footer__nav-link"
                    >
                      {{ item.label }}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <!-- Social Media -->
            <div class="footer__social" *ngIf="socialLinks.length > 0">
              <h3 class="footer__section-title">Follow Us</h3>
              <div class="footer__social-links">
                <a
                  *ngFor="let social of socialLinks"
                  [href]="social.url"
                  [attr.aria-label]="social.label"
                  class="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span [innerHTML]="social.icon"></span>
                </a>
              </div>
            </div>
          </div>

          <!-- Footer Bottom -->
          <div class="footer__bottom">
            <div class="footer__legal">
              <div class="footer__copyright">
                <p>
                  &copy; {{ currentYear }} Olive and Salt. All rights reserved.
                </p>
              </div>
              <div class="footer__legal-links" *ngIf="legalLinks.length > 0">
                <a
                  *ngFor="let link of legalLinks; let last = last"
                  [routerLink]="link.route"
                  class="footer__legal-link"
                >
                  {{ link.label }}
                </a>
              </div>
            </div>

            <!-- Call to Action -->
            <div class="footer__cta" *ngIf="showBookingCTA">
              <a routerLink="/booking" class="btn btn--primary">
                Book Your Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() navigationItems: NavigationItem[] = [];
  @Input() socialLinks: SocialMediaLink[] = [];
  @Input() legalLinks: NavigationItem[] = [];
  @Input() contactInfo?: ContactInfo;
  @Input() tagline?: string;
  @Input() description?: string;
  @Input() showBookingCTA = true;

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
