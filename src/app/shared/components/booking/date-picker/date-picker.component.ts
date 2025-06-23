import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TimeSlotOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent implements OnInit {
  @Input() allowCustomTime = false;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;

  @Output() dateSelected = new EventEmitter<Date | null>();
  @Output() timeSelected = new EventEmitter<string | null>();
  @Output() selectionChanged = new EventEmitter<{
    date: Date | null;
    time: string | null;
  }>();

  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  selectedTimeSlot: string | null = null;
  customTime = '';
  currentDate = new Date();
  calendarDays: (Date | null)[] = [];
  availableTimeSlots: string[] = [];

  timeSlotOptions: TimeSlotOption[] = [
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' },
    { value: 'custom', label: 'Custom Time' },
  ];

  ngOnInit() {
    this.generateCalendar();
    this.generateTimeSlots();
  }

  get currentMonthName(): string {
    return this.currentDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    // Get first day of month and how many days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    // Reset calendar
    this.calendarDays = [];

    // Add empty slots for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      this.calendarDays.push(null);
    }

    // Add days of month
    for (let day = 1; day <= daysInMonth; day++) {
      this.calendarDays.push(new Date(year, month, day));
    }
  }

  generateTimeSlots() {
    // Generate time slots based on selected time slot
    if (this.selectedTimeSlot === 'breakfast') {
      this.availableTimeSlots = [
        '7:00 AM',
        '7:30 AM',
        '8:00 AM',
        '8:30 AM',
        '9:00 AM',
      ];
    } else if (this.selectedTimeSlot === 'lunch') {
      this.availableTimeSlots = [
        '11:30 AM',
        '12:00 PM',
        '12:30 PM',
        '1:00 PM',
        '1:30 PM',
      ];
    } else if (this.selectedTimeSlot === 'dinner') {
      this.availableTimeSlots = [
        '5:30 PM',
        '6:00 PM',
        '6:30 PM',
        '7:00 PM',
        '7:30 PM',
        '8:00 PM',
      ];
    } else {
      this.availableTimeSlots = [];
    }
  }

  previousMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }

  selectDate(date: Date) {
    this.selectedDate = date;
    this.dateSelected.emit(date);
    this.updateSelection();
  }

  selectTimeSlot(slot: string) {
    this.selectedTimeSlot = slot;
    this.selectedTime = null;
    this.generateTimeSlots();
    this.updateSelection();
  }

  selectTime(time: string) {
    this.selectedTime = time;
    this.timeSelected.emit(time);
    this.updateSelection();
  }

  onCustomTimeChange() {
    this.selectedTime = this.customTime;
    this.timeSelected.emit(this.customTime);
    this.updateSelection();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  isDateSelected(date: Date): boolean {
    if (!this.selectedDate) return false;
    return (
      date.getDate() === this.selectedDate.getDate() &&
      date.getMonth() === this.selectedDate.getMonth() &&
      date.getFullYear() === this.selectedDate.getFullYear()
    );
  }

  isDateAvailable(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Can't select dates in the past
    if (date < today) return false;

    // Check min/max date constraints
    if (this.minDate && date < this.minDate) return false;
    if (this.maxDate && date > this.maxDate) return false;

    return true;
  }

  getSelectedTimeSlotLabel(): string {
    if (!this.selectedTimeSlot) return '';
    const slot = this.timeSlotOptions.find(
      (option) => option.value === this.selectedTimeSlot
    );
    return slot?.label || '';
  }

  private updateSelection() {
    this.selectionChanged.emit({
      date: this.selectedDate,
      time: this.selectedTime,
    });
  }
}
