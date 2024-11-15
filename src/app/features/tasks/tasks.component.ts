import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    { title: 'Card 1', content: 'Content for card 1.' },
    { title: 'Card 2', content: 'Content for card 2.' },
    { title: 'Card 3', content: 'Content for card 3.' }
  ];

  // Function to add a new card
  addCard() {
    const newCard = {
      title: `Card ${this.cards.length + 1}`,
      content: `Content for card ${this.cards.length + 1}.`
    };
    this.cards.push(newCard); // Adds the new card to the array
  }
}
