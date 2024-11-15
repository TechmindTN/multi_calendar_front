import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-editcarddialog',
  standalone: true,
  imports: [],
  templateUrl: './editcarddialog.component.html',
  styleUrl: './editcarddialog.component.scss',
  template: `
  <h1>Edit Card</h1>
  <form>
    <label for="title">Title:</label>
    <input id="title" [(ngModel)]="data.title">

    <label for="description">Description:</label>
    <textarea id="description" [(ngModel)]="data.description"></textarea>

    <button (click)="saveChanges()">Save</button>
    <button (click)="closeDialog()">Cancel</button>
  </form>
`
})
export class EditcarddialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  saveChanges() {
    // Logic to save changes and close the dialog
  }

  closeDialog() {
    // Logic to close the dialog
  }

}
