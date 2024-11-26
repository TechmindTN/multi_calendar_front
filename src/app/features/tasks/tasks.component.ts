import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  
  sidebarOpen = false; // Initial state of the sidebar

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen; // Toggle the sidebar state
  }
  // Array to hold the card objects
  cards = [
    { title: 'Task 1', content: 'Content for Task 1.' },
    { title: 'Task 2', content: 'Content for Task 2.' },
    { title: 'Task 3', content: 'Content for Task 3.' }
  ];

  // Function to add a new card
  addCard() {
    const newCard = {
      title: `Card ${this.cards.length + 1}`,
      content: `Content for card ${this.cards.length + 1}.`
    };
    this.cards.push(newCard); // Adds the new card to the array
  }
  constructor ( private router: Router){}
  goToProfile(): void {
    console.log('Navigating to Profile');
    this.router.navigate(['/profile']);
  }
  goToDashboard(): void {
    console.log('Navigating to dashboard');
    this.router.navigate(['/dashboard']).then(() => {
      
    });
  }
  goToProjects(): void {
    console.log('Navigating to Projects');
    this.router.navigate(['/projects']);
  }
  goToTasks(): void {
    console.log('Navigating to tasks');
    this.router.navigate(['/tasks']);
  }
  goToContact(): void {
    console.log('Navigating to help');
    this.router.navigate(['/tickethelp']);
  }
}
