import { Component ,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditEmployeeDialogComponent } from '../edit-employee-dialog/edit-employee-dialog.component';
import { DeleteDialogComponent } from '../../../../delete-dialog/delete-dialog.component';
import { AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';
import { provideStore } from '@ngrx/store';
import { EmployeeSharedDataService } from '../../../../shared/employee-shared';
import {Employee} from '../../models/Employee';
import {User} from '../../../user/models/User';

import { EditService } from '../../services/edit.service';
// import { provideEffects } from '@ngrx/effects';
// import { employeeReducer } from './state/reducers/employee.reducer';
// import { EmployeeEffects } from './state/effects/employee.effects';



@Component({
  selector: 'app-employee',
  standalone: true,
//   providers: [
//     provideStore({ employee: employeeReducer }),
//     provideEffects([EmployeeEffects])
// ],
  imports: [CommonModule, MatDialogModule ,EditEmployeeDialogComponent,AddEmployeeDialogComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  
  // [
  //   // {
  //   //   photo: '',
  //   //   name: 'chaima',
  //   //   departement: 'developement',
  //   //   role: 'user',
  //   //   status: 'Active'
  //   // },
  //   // {
  //   //   photo: '',
  //   //   name: 'dhia',
  //   //   departement: 'developement',
  //   //   role: 'user',
  //   //   status: 'Active'
  //   // },
  //   ];
    // editEmployee(employee: Employee) {
    //   console.log('Editing employee:', employee);
    // }
  
    // deleteEmployee(employee: Employee) {
    //   console.log('Deleting project:', employee);
    //   this.employee = this.employee.filter(p => p !== employee); // Example logic
    // }
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  constructor(private dialog: MatDialog,private sharedDataService: EmployeeSharedDataService, private editservice :EditService) {}



  ngOnInit() {
    // this.getEmployees(),
  
//tkharej les employee lkol fi tableau
    this.editservice.employeeList().subscribe(
      (data) => {this.employees = data
        console.log(this.employees)
      },
      (error) => console.error('Error fetching employees:', error)
    );
    // console.log(this.employees)
  }

editEmployee(employee: Employee) {
  console.log(employee)
  const dialogRef = this.dialog.open(EditEmployeeDialogComponent, {
    width: '400px',
    data: { ...employee }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Update your employee data here
      console.log('Updated employee data:', result);
    }
  });
}
deleteEmployee(employee: Employee) {
  const dialogRef = this.dialog.open(DeleteDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Logic to delete the project
      console.log('Project deleted:', employee);
    }
  });
}

getEmployees(){
  this.sharedDataService.employees$.subscribe(data => {
    // console.log(data)
    this.employees = data;
    // console.log(data); // React to data changes here
  });
}
// onAdd() {
//   // Implement the logic to add a new item, e.g., opening a form dialog
//   console.log("Add button clicked");
//   // This could also open a dialog to add a new item if needed
// }








// onAdd() {
//   const dialogRef = this.dialog.open(AddEmployeeDialogComponent);

//   dialogRef.afterClosed().subscribe((result: Employee) => {

//     if (result) {
//       console.log('aaaaa')
//       result.user.role_id=1
//       console.log('bbbbb'+result);
//       console.log(result.role)
//       this.employees.push(result); // Add the new employee to the table
//     }
//   });
// }

onAdd() {
  const dialogRef = this.dialog.open(AddEmployeeDialogComponent);

  dialogRef.afterClosed().subscribe((result: Employee) => {
    if (result) {
      console.log('Dialog Result:', result);

      // Ensure the `user` object exists before assigning `role_id`
      if (!result.user) {
        result.user = {
        
          id: 0,
          id_company: 0,
          id_departement:0,
          role_id:0,
          created: '',
          email: '',
          last_login:'',
          last_updated:'',
          phone:0,
          user_name:'',
        }; // Initialize `user` object if it's undefined
      }

      result.user.role_id = 1; // Set `role_id`
      console.log('Updated Result:', result);

      // Add the new employee to the table
      this.employees.push(result);
      console.log('Employee added successfully:', result);
    } else {
      console.log('Dialog closed without any data.');
    }
  });
}

}
