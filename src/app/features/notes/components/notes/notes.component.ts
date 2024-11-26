import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EditcarddialogComponent } from '../../../../editcarddialog/editcarddialog.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


interface card {
  title: string;
  description: string;
  
}

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule,MatIconModule,FormsModule,MatDialogModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
  //declarations: [NotesComponent, EditcarddialogComponent],
  //entryComponents: [EditcarddialogComponent]
})

export class NotesComponent {
  sidebarOpen = false; // Initial state of the sidebar

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen; // Toggle the sidebar state
  }

  // Array to hold the card objects
  cards = [
    { title: 'Note 1', description: 'Content for Note 1.' },
    { title: 'Note 2', description: 'Content for Note 2.' },
    { title: 'Note 3', description: 'Content for Note 3.' },
    { title: 'Note 4', description: 'Content for Note 1.' },
    { title: 'Note 5', description: 'Content for Note 2.' },
    { title: 'Note 6', description: 'Content for Note 3.' },
    
  ];


  

  saveChanges() {
    // Implement the logic to save changes 
  }

  updateCard(updatedCard: any) {
    const index = this.cards.findIndex(card => card.title === updatedCard.title);
    if (index !== -1) {
      this.cards[index] = updatedCard;
    }
  }
  closeDialog() {
    // Logic to close the dialog
    // Example: if you are using MatDialog, you can close it like this:
    // this.dialogRef.close();

    // Alternatively, you can set a variable that controls dialog visibility
    console.log("Dialog closed");
  }
  constructor(private dialog: MatDialog) {}

  openEditDialog(): void {
    this.dialog.open(EditcarddialogComponent, {
      width: '400px', // adjust dialog size
      data: { /* pass any data needed for editing */ }
    });
  }
}
