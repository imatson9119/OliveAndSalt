import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../ui/modal/modal.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { GalleryImage } from '../../../interfaces/component.interfaces';

@Component({
  selector: 'app-gallery-lightbox',
  standalone: true,
  imports: [CommonModule, ModalComponent, ButtonComponent],
  templateUrl: './gallery-lightbox.component.html',
  styleUrl: './gallery-lightbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryLightboxComponent implements OnInit, OnDestroy {
  @Input() isOpen = false;
  @Input() images: GalleryImage[] = [];
  @Input() currentIndex = 0;
  @Input() showThumbnails = true;
  @Input() autoPlay = false;
  @Input() autoPlayInterval = 3000;

  @Output() closeRequested = new EventEmitter<void>();
  @Output() indexChanged = new EventEmitter<number>();

  private autoPlayTimer?: number;

  ngOnInit() {
    if (this.autoPlay && this.images.length > 1) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (!this.isOpen) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.close();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.previous();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.next();
        break;
      case 'Home':
        event.preventDefault();
        this.goToImage(0);
        break;
      case 'End':
        event.preventDefault();
        this.goToImage(this.images.length - 1);
        break;
    }
  }

  get currentImage(): GalleryImage | null {
    return this.images[this.currentIndex] || null;
  }

  close() {
    this.stopAutoPlay();
    this.closeRequested.emit();
  }

  next() {
    if (this.images.length === 0) return;
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    this.goToImage(nextIndex);
  }

  previous() {
    if (this.images.length === 0) return;
    const prevIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    this.goToImage(prevIndex);
  }

  goToImage(index: number) {
    if (
      index >= 0 &&
      index < this.images.length &&
      index !== this.currentIndex
    ) {
      this.indexChanged.emit(index);
      this.resetAutoPlay();
    }
  }

  onImageLoad() {
    // Image loaded successfully
  }

  onImageError() {
    // Handle image loading error
  }

  private startAutoPlay() {
    this.autoPlayTimer = window.setInterval(() => {
      this.next();
    }, this.autoPlayInterval);
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = undefined;
    }
  }

  private resetAutoPlay() {
    if (this.autoPlay && this.images.length > 1) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  onMouseEnter() {
    this.stopAutoPlay();
  }

  onMouseLeave() {
    if (this.autoPlay && this.images.length > 1) {
      this.startAutoPlay();
    }
  }
}
