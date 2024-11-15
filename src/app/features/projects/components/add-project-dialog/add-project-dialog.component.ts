import { Component,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from '../projects/projects.component';
import {  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-project-dialog',
  standalone: true,
  imports: [FormsModule,ProjectsComponent],
  templateUrl: './add-project-dialog.component.html',
  styleUrl: './add-project-dialog.component.scss'
})
export class AddProjectDialogComponent {
  projects = {
    id : '',
    logo :'',
    name :'',
    stratingDate : '',
    deadline : '',
    duration : '',
    status : '',
  };
  @Output() projectAdded = new EventEmitter<any>();
  constructor(public dialogRef: MatDialogRef<AddProjectDialogComponent>,) {}
  onSubmit() {
    this.dialogRef.close(this.projects); // Pass data back to the parent component
  }
  
  onCancel() {
    this.dialogRef.close();
  }

  onAdd() {
    // const dialogRef = this.dialog.open(AddEmployeeDialogComponent);
  
    this.dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.projectAdded.emit(this.projectAdded);
        console.log('done')
        // employee.push(result); // Add the new employee to the table
      }
    });
  }

}
