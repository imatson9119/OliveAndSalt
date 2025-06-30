import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface ImageDialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <div class="image-dialog-container">
      <header class="image-dialog-header">
        <h2 mat-dialog-title>{{ data.title }}</h2>
        <button
          mat-icon-button
          [mat-dialog-close]="true"
          aria-label="Close dialog"
          class="close-button"
        >
          <mat-icon>close</mat-icon>
        </button>
      </header>

      <div mat-dialog-content class="image-dialog-content">
        <div class="image-placeholder">
          <span>{{ data.title }}</span>
        </div>
        <p class="image-description">{{ data.description }}</p>
      </div>

      <div mat-dialog-actions class="image-dialog-actions">
        <button mat-stroked-button [mat-dialog-close]="true">Close</button>
      </div>
    </div>
  `,
  styles: [],
})
export class ImageDialogComponent {
  public dialogRef = inject(MatDialogRef<ImageDialogComponent>);
  public data = inject<ImageDialogData>(MAT_DIALOG_DATA);
}
