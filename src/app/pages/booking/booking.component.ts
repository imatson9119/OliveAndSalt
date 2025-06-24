import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FadeInDirective],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  private fb = inject(FormBuilder);

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

  onSubmit() {
    if (this.bookingForm.valid) {
      this.isLoading = true;

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
