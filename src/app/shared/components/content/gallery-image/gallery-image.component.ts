import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryImage } from '../../../interfaces/component.interfaces';

@Component({
  selector: 'app-gallery-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-image.component.html',
  styleUrl: './gallery-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryImageComponent {
  @Input({ required: true }) image!: GalleryImage;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() aspectRatio: 'square' | 'portrait' | 'landscape' = 'square';
  @Input() showCaption = true;
  @Input() lazyLoad = true;
  @Input() index = 0;

  @Output() imageClick = new EventEmitter<{
    image: GalleryImage;
    index: number;
  }>();

  imageLoaded = false;
  imageError = false;

  onImageClick() {
    this.imageClick.emit({ image: this.image, index: this.index });
  }

  onImageLoad() {
    this.imageLoaded = true;
    this.imageError = false;
  }

  onImageError() {
    this.imageError = true;
    this.imageLoaded = false;
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onImageClick();
    }
  }
}
