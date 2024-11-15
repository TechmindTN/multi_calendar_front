import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {
  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false); // Close the dialog and pass back false
  }

  onDelete(): void {
    this.dialogRef.close(true); // Close the dialog and pass back true
  }
}
