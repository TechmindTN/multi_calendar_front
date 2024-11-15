import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { EditProjectDialogComponent } from './edit-project-dialog/edit-project-dialog.component';
import { EditProjectDialogComponent } from '../edit-project-dialog/edit-project-dialog.component';
import { DeleteDialogComponent } from '../../../../delete-dialog/delete-dialog.component';
import { AddProjectDialogComponent } from '../add-project-dialog/add-project-dialog.component';

interface project{
  id : number;
  logo :string;
  name :string;
  stratingDate : string;
  deadline : string;
  duration : number;
  status : string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule ,EditProjectDialogComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
project: project[] = [
  // {
  //   logo:'',
  //   name:'glovo',
  //   stratingDate:'2024-02-01',
  //   deadline:'2024-03-31',
  //   duration:31,
  //   status:'active'

  // },
  // {
  //   logo:'',
  //   name:'bolt',
  //   stratingDate:'2024-04-01',
  //   deadline:'2024-05-31',
  //   duration:31,
  //   status:'inactive'

  // },
];



  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  
  // searchQuery: string = '';
  // projects: any[] = [
  //   { name: 'Project 1', description: 'Description of project 1' },
  //   { name: 'Project 2', description: 'Description of project 2' },
  //   // Add more projects as needed
  // ];

  constructor(private router: Router ,private dialog: MatDialog) {}

  // // Function to handle search input
  // onSearch() {
  //   // Placeholder for search functionality
  //   console.log('Searching for:', this.searchQuery);
  // }

  // Function to handle navigation to a project detail page
  goToProjectDetail(projectId: number) {
    this.router.navigate(['/project', projectId]);
  }


 /*// Edit project function
 editProject(project: project) {
  // Logic to edit the project
  console.log('Editing project:', project);
  // Navigate to an edit project page (optional)
  // this.router.navigate(['/edit-project', project.id]); // Assuming you have an edit route
}*/

// Delete project function
// deleteProject(project: project) {
//   console.log('Deleting project:', project);
//   this.projects = this.projects.filter(p => p !== project); // Example logic to remove the project
// }
editProject(project: any): void {
  const dialogRef = this.dialog.open(EditProjectDialogComponent, {
    width: '400px',
    data: { ...project },
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      console.log('Edited project:', result);
    }
  });
}
deleteProject(project: project) {
  const dialogRef = this.dialog.open(DeleteDialogComponent);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Logic to delete the project
      console.log('Project deleted:', project);
    }
  });
}
onAdd() {
  const dialogRef = this.dialog.open(AddProjectDialogComponent);

  dialogRef.afterClosed().subscribe((result: project) => {
    if (result) {
      
      this.project.push(result); // Add the new project to the table
    }
  });
}
}

