import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (m) => m.ServicesComponent
      ),
  },
  {
    path: 'book',
    loadComponent: () =>
      import('./pages/booking/booking.component').then(
        (m) => m.BookingComponent
      ),
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then(
        (m) => m.GalleryComponent
      ),
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./pages/testimonials/testimonials.component').then(
        (m) => m.TestimonialsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/legal/privacy/privacy.component').then(
        (m) => m.PrivacyComponent
      ),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/legal/terms/terms.component').then(
        (m) => m.TermsComponent
      ),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/legal/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
