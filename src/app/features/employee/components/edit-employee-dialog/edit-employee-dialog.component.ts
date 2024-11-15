import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormControl,FormsModule, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditService } from '../../services/edit.service'; 
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeSharedDataService } from '../../../../shared/employee-shared';

interface EmployeeData {
  photo: string;
  department: string;
  role: string;
  status: string;
}
@Component({
  selector: 'app-edit-employee-dialog',
  standalone: true,
  imports: [ MatDialogModule,FormsModule],
  templateUrl: './edit-employee-dialog.component.html',
  styleUrl: './edit-employee-dialog.component.scss'
})
export class EditEmployeeDialogComponent {
  constructor(
    private editService: EditService,
    private sharedDataService: EmployeeSharedDataService,
    public dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeData
  ) {}

  // ngOnInit() {
  //   this.sharedDataService.employees$.subscribe(data => {
  //     console.log(data); // React to data changes here
  //   });
  // }

  // updateData() {
  //   this.sharedDataService.setData('new data');
  // }

  onSave(): void {
    // Logic to save the data
    this.dialogRef.close(this.data);
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
