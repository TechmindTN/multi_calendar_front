import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormControl,FormsModule, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';//integration api
import { EditService } from '../../services/edit.service'; 
import { projctsSharedDataService } from '../../../../shared/projects_shared';

interface projects {
  id: number;
  logo: string;
  name: string;
  startingdate: string;
  deadline: string;
  duration: string;
  status: string;
 
}
@Component({
  selector: 'app-edit-project-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule,FormsModule,HttpClientModule],
  templateUrl: './edit-project-dialog.component.html',
  styleUrl: './edit-project-dialog.component.scss'
})
export class EditProjectDialogComponent {
  project: any;

  constructor(
    private editService: EditService,
    private sharedDataService: projctsSharedDataService,
    public dialogRef: MatDialogRef<EditProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.project = { }; // Make a copy of the project data
  }

  onSave(): void {
    // Logic to save the edited project
    this.dialogRef.close(this.project);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  onEdit(itemId: number, updatedData: any) {
    this.editService.editItem(itemId, updatedData).subscribe(
      response => {
        console.log('Item updated:', response);
        
        // Handle successful update, e.g., refresh data or notify user
      },
      error => {
        console.error('Error updating item:', error);
        // Handle error
      }
    );
  }

}
