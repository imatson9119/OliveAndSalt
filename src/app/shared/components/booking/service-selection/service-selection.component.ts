import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceCardComponent } from '../../content/service-card/service-card.component';

import {
  Service,
  BookingSelection,
} from '../../../interfaces/component.interfaces';

@Component({
  selector: 'app-service-selection',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceCardComponent],
  templateUrl: './service-selection.component.html',
  styleUrl: './service-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceSelectionComponent {
  @Input({ required: true }) services: Service[] = [];
  @Input() selectedService: Service | null = null;
  @Input() allowMultiple = false;
  @Input() showPricing = true;
  @Input() layout: 'grid' | 'list' = 'grid';

  @Output() serviceSelected = new EventEmitter<Service>();
  @Output() selectionChanged = new EventEmitter<BookingSelection>();

  selectedGuests = 2;
  selectedOptions: Record<string, unknown> = {};
  specialRequests = '';

  onServiceSelect(service: Service) {
    this.selectedService = service;
    this.serviceSelected.emit(service);
    this.updateSelection();
  }

  onGuestsChange() {
    this.updateSelection();
  }

  onOptionChange(optionKey: string, value: unknown) {
    this.selectedOptions[optionKey] = value;
    this.updateSelection();
  }

  onCheckboxChange(optionKey: string, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.onOptionChange(optionKey, checkbox.checked);
  }

  onNumberInputChange(optionKey: string, event: Event) {
    const input = event.target as HTMLInputElement;
    this.onOptionChange(optionKey, +input.value);
  }

  onSelectChange(optionKey: string, event: Event) {
    const select = event.target as HTMLSelectElement;
    this.onOptionChange(optionKey, select.value);
  }

  onSpecialRequestsChange() {
    this.updateSelection();
  }

  private updateSelection() {
    if (!this.selectedService) return;

    const selection: BookingSelection = {
      service: this.selectedService,
      guests: this.selectedGuests,
      options: { ...this.selectedOptions },
      specialRequests: this.specialRequests,
      estimatedPrice: this.calculateEstimatedPrice(),
    };

    this.selectionChanged.emit(selection);
  }

  calculateEstimatedPrice(): number {
    if (!this.selectedService) return 0;

    let basePrice = this.selectedService.basePrice || 0;

    // Add guest pricing
    if (this.selectedService.pricePerGuest && this.selectedGuests > 2) {
      basePrice +=
        (this.selectedGuests - 2) * this.selectedService.pricePerGuest;
    }

    // Add option pricing
    Object.entries(this.selectedOptions).forEach(([key, value]) => {
      const option = this.selectedService?.options?.find(
        (opt) => opt.key === key
      );
      if (option && option.price) {
        if (typeof value === 'boolean' && value) {
          basePrice += option.price;
        } else if (typeof value === 'number') {
          basePrice += value * option.price;
        }
      }
    });

    return basePrice;
  }

  getGuestOptions(): number[] {
    return Array.from({ length: 18 }, (_, i) => i + 2); // 2-20 guests
  }

  getOptionPrice(optionKey: string, unitPrice: number): number {
    const value = this.selectedOptions[optionKey];
    if (typeof value === 'boolean' && value) {
      return unitPrice;
    } else if (typeof value === 'number') {
      return value * unitPrice;
    }
    return 0;
  }
}
