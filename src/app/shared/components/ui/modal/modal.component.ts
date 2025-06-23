import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSize } from '../../../interfaces/component.interfaces';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isVisible = false;
  @Input() isOpen = false; // Alias for isVisible
  @Input() title?: string;
  @Input() content?: string;
  @Input() size: ModalSize = 'medium';
  @Input() closable = true;
  @Input() backdrop = true;
  @Input() centered = true;
  @Input() hasFooterContent = false;
  @Input() showHeader = true;
  @Input() showFooter = true;
  @Input() closeOnBackdropClick = true;
  @Input() closeOnEscape = true;

  @Output() modalClose = new EventEmitter<void>();
  @Output() modalBackdropClick = new EventEmitter<void>();
  @Output() closeRequested = new EventEmitter<void>();

  get isModalOpen(): boolean {
    return this.isVisible || this.isOpen;
  }

  get modalClasses(): string {
    const classes = ['modal'];
    classes.push(`modal--${this.size}`);

    if (this.centered) {
      classes.push('modal--centered');
    }

    return classes.join(' ');
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen && this.closable && this.closeOnEscape) {
      this.onClose();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (
      this.backdrop &&
      this.closable &&
      this.closeOnBackdropClick &&
      event.target === event.currentTarget
    ) {
      this.modalBackdropClick.emit();
      this.onClose();
    }
  }

  onClose(): void {
    if (this.closable) {
      this.modalClose.emit();
      this.closeRequested.emit();
    }
  }
}
