import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('navList', { static: false }) navList!: ElementRef;
  @ViewChild('navUnderline', { static: false }) navUnderline!: ElementRef;

  private router = inject(Router);
  private elementRef = inject(ElementRef);

  isMenuOpen = false;

  ngOnInit() {
    // Listen to route changes to update underline position
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => this.updateUnderlinePosition(), 100);
      });
  }

  ngAfterViewInit() {
    // Set initial underline position
    setTimeout(() => this.updateUnderlinePosition(), 100);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  private updateUnderlinePosition() {
    if (!this.navList || !this.navUnderline) return;

    const activeLink = this.navList.nativeElement.querySelector(
      'a.active:not(.cta-button)',
    );
    const underlineElement = this.navUnderline.nativeElement;

    if (activeLink) {
      const navListRect = this.navList.nativeElement.getBoundingClientRect();
      const activeLinkRect = activeLink.getBoundingClientRect();

      const leftPosition = activeLinkRect.left - navListRect.left;
      const width = activeLinkRect.width;

      underlineElement.style.left = `${leftPosition}px`;
      underlineElement.style.width = `${width}px`;
      underlineElement.style.opacity = '1';
    } else {
      // Hide underline if no regular nav item is active (e.g., CTA button is active)
      underlineElement.style.opacity = '0';
    }
  }
}
