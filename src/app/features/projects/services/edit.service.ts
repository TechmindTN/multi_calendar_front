import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private apiUrl = 'https://5e80-2c0f-f698-4095-45ad-fdc1-531f-e92-19e0.ngrok-free.app';
  constructor(private http: HttpClient) { }
  // Method to send an update request to the API
  editItem(itemId: number, updatedData: any): Observable<any> {
    // Sends an HTTP PUT request to update the item with 'itemId'
    return this.http.put(`${this.apiUrl}/${itemId}`, updatedData);
  }
}
