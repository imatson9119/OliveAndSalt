import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    data: { animation: 'HomePage' },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    data: { animation: 'AboutPage' },
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (m) => m.ServicesComponent,
      ),
    data: { animation: 'ServicesPage' },
  },
  {
    path: 'book',
    loadComponent: () =>
      import('./pages/booking/booking.component').then(
        (m) => m.BookingComponent,
      ),
    data: { animation: 'BookingPage' },
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then(
        (m) => m.GalleryComponent,
      ),
    data: { animation: 'GalleryPage' },
  },
  {
    path: 'testimonials',
    loadComponent: () =>
      import('./pages/testimonials/testimonials.component').then(
        (m) => m.TestimonialsComponent,
      ),
    data: { animation: 'TestimonialsPage' },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent,
      ),
    data: { animation: 'ContactPage' },
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/legal/privacy/privacy.component').then(
        (m) => m.PrivacyComponent,
      ),
    data: { animation: 'PrivacyPage' },
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/legal/terms/terms.component').then(
        (m) => m.TermsComponent,
      ),
    data: { animation: 'TermsPage' },
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/legal/faq/faq.component').then((m) => m.FaqComponent),
    data: { animation: 'FaqPage' },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
