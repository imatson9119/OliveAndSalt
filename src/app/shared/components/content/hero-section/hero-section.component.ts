import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroContent } from '../../../interfaces/component.interfaces';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  @Input() content!: HeroContent;
  @Input() showScrollIndicator = false;
  @Input() height: 'small' | 'medium' | 'large' | 'fullscreen' = 'large';
  @Input() hasAdditionalContent = false;

  @Output() ctaClicked = new EventEmitter<void>();
  @Output() scrollClicked = new EventEmitter<void>();

  get heroClasses(): string {
    const classes = ['hero'];
    classes.push(`hero--${this.height}`);
    classes.push(`hero--${this.content.alignment || 'center'}`);

    return classes.join(' ');
  }

  get backgroundImageUrl(): string {
    return `url('${this.content.backgroundImage}')`;
  }

  onCtaClick(): void {
    this.ctaClicked.emit();
  }

  onScrollClick(): void {
    this.scrollClicked.emit();
  }
}
