import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { FadeInDirective } from '../../directives';
import { StructuredDataService } from '../../services/structured-data.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, FadeInDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [SnackbarService],
})
export class ContactComponent implements OnInit, OnDestroy {
  private snackbar = inject(SnackbarService);
  private fb = inject(FormBuilder);
  private structuredDataService = inject(StructuredDataService);
  private meta = inject(Meta);
  private title = inject(Title);

  contactForm: FormGroup;
  isSubmitted = false;
  isLoading = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit() {
    // Update page title and meta tags
    this.title.setTitle(
      'Contact Olive & Salt | Personal Chef Services in Grapevine, TX',
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Get in touch with Emma Matson to discuss your personal chef needs. Serving Grapevine and surrounding areas. Call (409) 594-5718 or email hello@olive-and-salt.com.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'contact personal chef, Grapevine TX chef, cooking service contact, chef inquiry',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Contact Olive & Salt | Personal Chef',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Contact Emma Matson for personal chef services in Grapevine, TX and surrounding areas.',
    });

    // Add structured data for contact page (Local Business with contact info)
    const localBusinessSchema =
      this.structuredDataService.getLocalBusinessSchema();
    this.structuredDataService.insertStructuredData(localBusinessSchema);
  }

  ngOnDestroy() {
    // Clean up structured data
    this.structuredDataService.removeStructuredData();
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;

      const endpoint =
        'https://script.google.com/macros/s/AKfycbxbjZGRVhZT62LJLKHC4aUWrBoqserqCZS3ygswVr9xTJgoLTsVD53BndlKa41YMHOt/exec';
      const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      });
      let result = this.contactForm.value as Record<string, string>;
      result['type'] = 'contact';
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
            this.snackbar.showSuccess('Thank you! Your message has been sent.');
          } else {
            this.snackbar.showError(
              'There was a problem submitting your form. Please try again later.',
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
            'There was a problem submitting your form. Please try again later.',
          );
        });
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} is too short`;
    }
    return '';
  }
}
