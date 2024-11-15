import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickethelp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickethelp.component.html',
  styleUrl: './tickethelp.component.scss'
})
export class TickethelpComponent {
  sidebarOpen = false; // Initial state of the sidebar

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen; // Toggle the sidebar state
  }
  activeSection: string = 'info';

  openSection(section: string) {
    this.activeSection = section;
  }
}
