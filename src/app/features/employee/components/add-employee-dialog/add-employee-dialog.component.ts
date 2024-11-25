import { Component,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';
import {  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-employee-dialog',
  standalone: true,
  imports: [FormsModule,EmployeeComponent],
  templateUrl: './add-employee-dialog.component.html',
  styleUrl: './add-employee-dialog.component.scss'
})
export class AddEmployeeDialogComponent { 
  employeeData = {
    first_name: '',
    id_departement: '',
    role: '',
    status: ''
  };
  @Output() employeeAdded = new EventEmitter<any>();
  constructor(public dialogRef: MatDialogRef<AddEmployeeDialogComponent>,) {}

  onSubmit() {
    this.dialogRef.close(this.employeeData); // Pass data back to the parent component
  }

  onCancel() {
    this.dialogRef.close();
  }
  onAdd() {
    // const dialogRef = this.dialog.open(AddEmployeeDialogComponent);
  
    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employeeAdded.emit(this.employeeAdded);
        console.log('done')
        // employee.push(result); // Add the new employee to the table
      }
    });
  }
  

}
