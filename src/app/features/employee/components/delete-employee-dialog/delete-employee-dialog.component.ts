import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-employee-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-employee-dialog.component.html',
  styleUrl: './delete-employee-dialog.component.scss'
})
export class DeleteEmployeeDialogComponent {
  constructor(private dialogRef: MatDialogRef<DeleteEmployeeDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false); // Close the dialog and pass back false
  }

  onDelete(): void {
    this.dialogRef.close(true); // Close the dialog and pass back true
  }
}
