import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonVariant,
  ButtonSize,
} from '../../../interfaces/component.interfaces';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled || loading"
      [type]="type"
      (click)="onClick($event)"
    >
      <span *ngIf="loading" class="loading-spinner" aria-hidden="true"></span>
      <span
        *ngIf="icon && iconPosition === 'left'"
        class="icon icon-left"
        [innerHTML]="icon"
      ></span>
      <span class="button-text">{{ text }}</span>
      <span
        *ngIf="icon && iconPosition === 'right'"
        class="icon icon-right"
        [innerHTML]="icon"
      ></span>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = '';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<Event>();

  get buttonClasses(): string {
    const classes = ['btn'];
    classes.push(`btn--${this.variant}`);
    classes.push(`btn--${this.size}`);

    if (this.loading) {
      classes.push('btn--loading');
    }

    if (this.disabled) {
      classes.push('btn--disabled');
    }

    if (this.icon) {
      classes.push('btn--with-icon');
    }

    return classes.join(' ');
  }

  onClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}
