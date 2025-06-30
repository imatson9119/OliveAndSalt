import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FadeInDirective } from '../../directives';
import { StructuredDataService } from '../../services/structured-data.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule, CommonModule, MatIconModule, FadeInDirective],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  providers: [SnackbarService],
})
export class BookingComponent implements OnInit, OnDestroy {
  private snackbar = inject(SnackbarService);
  private fb = inject(FormBuilder);
  private structuredDataService = inject(StructuredDataService);
  private meta = inject(Meta);
  private title = inject(Title);

  bookingForm: FormGroup;
  isSubmitted = false;
  isLoading = false;

  services = [
    'Weekly In-Home Meals',
    'Special Event Dinners',
    'Wellness Meal Planning',
    'Cooking Lessons',
    'Pantry Refresh',
  ];

  constructor() {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^[+]?[\d\s\-()]+$/)],
      ],
      location: ['', [Validators.required]],
      service: ['', [Validators.required]],
      eventDate: [''],
      guestCount: [''],
      dietaryRestrictions: [''],
      goals: ['', [Validators.required]],
      budget: [''],
      additionalInfo: [''],
    });
  }

  ngOnInit() {
    // Update page title and meta tags
    this.title.setTitle('Book Your Personal Chef Experience | Olive & Salt');
    this.meta.updateTag({
      name: 'description',
      content:
        'Ready to transform your dining experience? Book Emma Matson for weekly meal service, special events, or wellness meal planning. Easy online booking available.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'book personal chef, schedule meal service, private chef booking, cooking service appointment',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Book Personal Chef Service | Olive & Salt',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Schedule your personalized culinary experience with Emma Matson. Easy online booking for all services.',
    });

    // Add structured data for booking page (Services and Local Business)
    const servicesPageSchema =
      this.structuredDataService.getServicesPageSchema();
    this.structuredDataService.insertStructuredData(servicesPageSchema);
  }

  ngOnDestroy() {
    // Clean up structured data
    this.structuredDataService.removeStructuredData();
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.isLoading = true;

      const endpoint =
        'https://script.google.com/macros/s/AKfycbxbjZGRVhZT62LJLKHC4aUWrBoqserqCZS3ygswVr9xTJgoLTsVD53BndlKa41YMHOt/exec';
      const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      });
      const result = this.bookingForm.value as Record<string, string>;
      result['type'] = 'booking';
      result['timestamp'] = new Date().toISOString();

      const body = new URLSearchParams(result).toString();

      fetch(endpoint, {
        method: 'POST',
        headers,
        body,
      })
        .then((response) => {
          if (response.ok) {
            console.log('Form submitted successfully.');
            this.snackbar.showSuccess(
              'Thank you! Your booking request has been sent.',
            );
          } else {
            this.snackbar.showError(
              'There was a problem submitting your booking request. Please try again later.',
            );
          }
          this.isLoading = false;
          this.isSubmitted = true;
        })
        .catch((error) => {
          console.error('Form submission failed:', error);
          this.isLoading = false;
          this.isSubmitted = true;
          this.snackbar.showError(
            'There was a problem submitting your booking request. Please try again later.',
          );
        });
      // Simulate form submission
      setTimeout(() => {
        this.isLoading = false;
        this.isSubmitted = true;
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.bookingForm.controls).forEach((key) => {
      const control = this.bookingForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.bookingForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} is too short`;
      if (field.errors['pattern']) return 'Please enter a valid phone number';
    }
    return '';
  }
}
