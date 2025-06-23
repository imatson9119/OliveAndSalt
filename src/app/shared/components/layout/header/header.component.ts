import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '../../../interfaces/component.interfaces';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="header" [class.header--sticky]="isSticky">
      <div class="container">
        <div class="header__content">
          <!-- Logo -->
          <div class="header__logo">
            <a
              routerLink="/"
              class="header__logo-link"
              [attr.aria-label]="'Olive and Salt - Home'"
            >
              <h1 class="header__logo-text">
                <span class="header__logo-primary">Olive</span>
                <span class="header__logo-secondary">and Salt</span>
              </h1>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <nav class="header__nav" [attr.aria-label]="'Main navigation'">
            <ul class="nav-list">
              <li *ngFor="let item of navigationItems" class="nav-list__item">
                <a
                  [routerLink]="item.external ? null : item.route"
                  [href]="item.external ? item.route : null"
                  [target]="item.external ? '_blank' : undefined"
                  [rel]="item.external ? 'noopener noreferrer' : null"
                  class="nav-list__link"
                  routerLinkActive="nav-list__link--active"
                  [routerLinkActiveOptions]="{ exact: item.route === '/' }"
                >
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </nav>

          <!-- CTA Button -->
          <div class="header__cta" *ngIf="showBookingCTA">
            <a routerLink="/booking" class="btn btn--primary btn--cta">
              Book Now
            </a>
          </div>

          <!-- Mobile Menu Toggle -->
          <button
            type="button"
            class="header__mobile-toggle"
            [class.header__mobile-toggle--active]="isMobileMenuOpen"
            (click)="toggleMobileMenu()"
            [attr.aria-expanded]="isMobileMenuOpen"
            [attr.aria-controls]="'mobile-menu'"
            aria-label="Toggle navigation menu"
          >
            <span class="hamburger">
              <span class="hamburger__line"></span>
              <span class="hamburger__line"></span>
              <span class="hamburger__line"></span>
            </span>
          </button>
        </div>

        <!-- Mobile Navigation Menu -->
        <div
          id="mobile-menu"
          class="header__mobile-menu"
          [class.header__mobile-menu--open]="isMobileMenuOpen"
          [attr.aria-hidden]="!isMobileMenuOpen"
        >
          <nav class="mobile-nav" [attr.aria-label]="'Mobile navigation'">
            <ul class="mobile-nav__list">
              <li *ngFor="let item of navigationItems" class="mobile-nav__item">
                <a
                  [routerLink]="item.external ? null : item.route"
                  [href]="item.external ? item.route : null"
                  [target]="item.external ? '_blank' : undefined"
                  [rel]="item.external ? 'noopener noreferrer' : null"
                  class="mobile-nav__link"
                  routerLinkActive="mobile-nav__link--active"
                  [routerLinkActiveOptions]="{ exact: item.route === '/' }"
                  (click)="closeMobileMenu()"
                >
                  {{ item.label }}
                </a>
              </li>
              <li
                *ngIf="showBookingCTA"
                class="mobile-nav__item mobile-nav__item--cta"
              >
                <a
                  routerLink="/booking"
                  class="btn btn--primary btn--full-width"
                  (click)="closeMobileMenu()"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- Mobile Menu Backdrop -->
      <div
        class="header__mobile-backdrop"
        [class.header__mobile-backdrop--visible]="isMobileMenuOpen"
        (click)="closeMobileMenu()"
        [attr.aria-hidden]="true"
      ></div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() navigationItems: NavigationItem[] = [];
  @Input() isSticky = true;
  @Input() showBookingCTA = true;
  @Input() isMobileMenuOpen = false;

  @Output() mobileMenuToggle = new EventEmitter<boolean>();

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.mobileMenuToggle.emit(this.isMobileMenuOpen);

    // Prevent body scroll when mobile menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      this.mobileMenuToggle.emit(false);
      document.body.style.overflow = '';
    }
  }
}
