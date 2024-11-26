import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private apiUrl = 'https://2021-2c0f-f698-4111-e4a3-6df1-6420-dbb7-d639.ngrok-free.app';
  headers = new HttpHeaders(
    {
      'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJtZWhyZXoiLCJpYXQiOjE3MzE1ODQxMDYsImV4cCI6MTczMTU4NzcwNn0.x2GMq0nKJH5UYibfqGTU4eqys6PhRxxn9gWBCC97gd4',
      'ngrok-skip-browser-warning': 'true'
    }
   );

  constructor(private http: HttpClient) { }
    // Method to send an update request to the API
    editItem(itemId: number, updatedData: any): Observable<any> {
      // Sends an HTTP PUT request to update the item with 'itemId'
      return this.http.put(`${this.apiUrl}/${itemId}`, updatedData);
    }

    employeeList(): Observable<any> {
      // Sends an HTTP PUT request to update the item with 'itemId'
      return this.http.get(`${this.apiUrl}/employee/`,{headers:this.headers});
    }
//filtre button option

  getEmployees(company?: string): Observable<any> {
    const token = localStorage.getItem('authToken');
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let params = new HttpParams();

    if (company) {
      params = params.set('company', company);
    }

    return this.http.get(`${this.apiUrl}/employees`, { headers, params });
  }
}
