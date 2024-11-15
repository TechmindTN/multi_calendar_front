import { Component } from '@angular/core';
import{CommonModule} from'@angular/common';
import { Router } from '@angular/router';





@Component({
  selector: 'app-dashbord-admin',
  standalone: true,
  imports: [
   
  ],
  templateUrl: './dashbord-admin.component.html',
  
  template: `

`,
  styleUrl: './dashbord-admin.component.scss'
})
export class DashbordAdminComponent {
  constructor(private router: Router) {}
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  
  cards = [
    
    { title: 'Tasks', description: 'Manage and track tasks.' },
    { title: 'Projects', description: 'Overview of projects.' },
    { title: 'Notes', description: 'Personal and shared notes.' },
    { title: 'Profile', description: 'User profile and settings.' }
  ];
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
 
}
