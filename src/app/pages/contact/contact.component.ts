import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../directives';
import { StructuredDataService } from '../../services/structured-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, FadeInDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private structuredDataService = inject(StructuredDataService);

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
