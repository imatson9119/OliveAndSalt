import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  forwardRef,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  FormFieldType,
  FormOption,
  FormValidation,
} from '../../../interfaces/component.interfaces';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true,
    },
  ],
  template: `
    <div
      class="form-field"
      [class.form-field--error]="hasError"
      [class.form-field--disabled]="disabled"
    >
      <label [for]="id" class="form-field__label">
        {{ label }}
        <span
          *ngIf="required"
          class="form-field__required"
          aria-label="required"
          >*</span
        >
      </label>

      <!-- Text Input -->
      <input
        *ngIf="
          type === 'text' ||
          type === 'email' ||
          type === 'tel' ||
          type === 'number'
        "
        [id]="id"
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [required]="required"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onBlur()"
        (focus)="onFocus()"
        class="form-field__input"
        [attr.aria-describedby]="getAriaDescribedBy()"
        [attr.aria-invalid]="hasError"
      />

      <!-- Textarea -->
      <textarea
        *ngIf="type === 'textarea'"
        [id]="id"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [required]="required"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onBlur()"
        (focus)="onFocus()"
        class="form-field__textarea"
        [attr.aria-describedby]="getAriaDescribedBy()"
        [attr.aria-invalid]="hasError"
        rows="4"
      ></textarea>

      <!-- Select -->
      <select
        *ngIf="type === 'select'"
        [id]="id"
        [disabled]="disabled"
        [required]="required"
        [value]="value"
        (change)="onSelect($event)"
        (blur)="onBlur()"
        (focus)="onFocus()"
        class="form-field__select"
        [attr.aria-describedby]="getAriaDescribedBy()"
        [attr.aria-invalid]="hasError"
      >
        <option value="" *ngIf="placeholder">{{ placeholder }}</option>
        <option
          *ngFor="let option of options"
          [value]="option.value"
          [disabled]="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>

      <!-- Date Input -->
      <input
        *ngIf="type === 'date'"
        [id]="id"
        type="date"
        [disabled]="disabled"
        [required]="required"
        [value]="value"
        (change)="onInput($event)"
        (blur)="onBlur()"
        (focus)="onFocus()"
        class="form-field__input"
        [attr.aria-describedby]="getAriaDescribedBy()"
        [attr.aria-invalid]="hasError"
      />

      <!-- Time Input -->
      <input
        *ngIf="type === 'time'"
        [id]="id"
        type="time"
        [disabled]="disabled"
        [required]="required"
        [value]="value"
        (change)="onInput($event)"
        (blur)="onBlur()"
        (focus)="onFocus()"
        class="form-field__input"
        [attr.aria-describedby]="getAriaDescribedBy()"
        [attr.aria-invalid]="hasError"
      />

      <!-- Checkbox -->
      <div *ngIf="type === 'checkbox'" class="form-field__checkbox-wrapper">
        <input
          [id]="id"
          type="checkbox"
          [disabled]="disabled"
          [required]="required"
          [checked]="value"
          (change)="onCheckboxChange($event)"
          (blur)="onBlur()"
          (focus)="onFocus()"
          class="form-field__checkbox"
          [attr.aria-describedby]="getAriaDescribedBy()"
          [attr.aria-invalid]="hasError"
        />
        <span class="form-field__checkbox-label">{{
          placeholder || label
        }}</span>
      </div>

      <!-- Radio Group -->
      <div *ngIf="type === 'radio'" class="form-field__radio-group">
        <div *ngFor="let option of options" class="form-field__radio-wrapper">
          <input
            [id]="id + '_' + option.value"
            type="radio"
            [name]="id"
            [value]="option.value"
            [disabled]="disabled || option.disabled"
            [required]="required"
            [checked]="value === option.value"
            (change)="onRadioChange($event)"
            (blur)="onBlur()"
            (focus)="onFocus()"
            class="form-field__radio"
            [attr.aria-describedby]="getAriaDescribedBy()"
          />
          <label
            [for]="id + '_' + option.value"
            class="form-field__radio-label"
          >
            {{ option.label }}
          </label>
        </div>
      </div>

      <!-- Help Text -->
      <div
        *ngIf="helpText && !hasError"
        class="form-field__help"
        [id]="id + '_help'"
      >
        {{ helpText }}
      </div>

      <!-- Error Message -->
      <div
        *ngIf="hasError && errorMessage"
        class="form-field__error"
        [id]="id + '_error'"
        role="alert"
      >
        {{ errorMessage }}
      </div>
    </div>
  `,
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements ControlValueAccessor, OnInit {
  @Input() id!: string;
  @Input() label!: string;
  @Input() type: FormFieldType = 'text';
  @Input() placeholder?: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() options: FormOption[] = [];
  @Input() validation?: FormValidation;
  @Input() helpText?: string;

  @Output() valueChange = new EventEmitter<unknown>();
  @Output() fieldFocus = new EventEmitter<void>();
  @Output() fieldBlur = new EventEmitter<void>();

  value: unknown = '';
  hasError = false;
  errorMessage = '';
  isTouched = false;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onChange = (_value: unknown) => {
    // Control value accessor callback
  };
  private onTouched = () => {
    // Control value accessor callback
  };

  ngOnInit(): void {
    if (this.type === 'checkbox') {
      this.value = false;
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: unknown): void {
    this.value = value ?? (this.type === 'checkbox' ? false : '');
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Event handlers
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.updateValue(target.value);
  }

  onSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.updateValue(target.value);
  }

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.updateValue(target.checked);
  }

  onRadioChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.updateValue(target.value);
  }

  onFocus(): void {
    this.fieldFocus.emit();
  }

  onBlur(): void {
    this.isTouched = true;
    this.validateField();
    this.onTouched();
    this.fieldBlur.emit();
  }

  private updateValue(newValue: unknown): void {
    this.value = newValue;
    this.onChange(newValue);
    this.valueChange.emit(newValue);
    this.validateField();
  }

  private validateField(): void {
    if (!this.validation || !this.isTouched) {
      this.hasError = false;
      this.errorMessage = '';
      return;
    }

    // Required validation
    if (this.validation.required && (!this.value || this.value === '')) {
      this.setError('This field is required');
      return;
    }

    // Skip other validations if field is empty and not required
    if (!this.value || this.value === '') {
      this.hasError = false;
      this.errorMessage = '';
      return;
    }

    const stringValue = String(this.value);

    // Min length validation
    if (
      this.validation.minLength &&
      stringValue.length < this.validation.minLength
    ) {
      this.setError(
        `Minimum length is ${this.validation.minLength} characters`
      );
      return;
    }

    // Max length validation
    if (
      this.validation.maxLength &&
      stringValue.length > this.validation.maxLength
    ) {
      this.setError(
        `Maximum length is ${this.validation.maxLength} characters`
      );
      return;
    }

    // Pattern validation
    if (this.validation.pattern && !this.validation.pattern.test(stringValue)) {
      this.setError('Please enter a valid format');
      return;
    }

    // Custom validation
    if (this.validation.customValidator) {
      const customError = this.validation.customValidator(this.value);
      if (customError) {
        this.setError(customError);
        return;
      }
    }

    // All validations passed
    this.hasError = false;
    this.errorMessage = '';
  }

  private setError(message: string): void {
    this.hasError = true;
    this.errorMessage = message;
  }

  getAriaDescribedBy(): string {
    const describedBy = [];
    if (this.helpText && !this.hasError) {
      describedBy.push(`${this.id}_help`);
    }
    if (this.hasError && this.errorMessage) {
      describedBy.push(`${this.id}_error`);
    }
    return describedBy.join(' ');
  }
}
