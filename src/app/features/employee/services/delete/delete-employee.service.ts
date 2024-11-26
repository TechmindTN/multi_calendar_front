import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteEmployeeService {
  private apiUrl = 'https://2021-2c0f-f698-4111-e4a3-6df1-6420-dbb7-d639.ngrok-free.app';
  headers = new HttpHeaders(
    {
      'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJtZWhyZXoiLCJpYXQiOjE3MzE1ODQxMDYsImV4cCI6MTczMTU4NzcwNn0.x2GMq0nKJH5UYibfqGTU4eqys6PhRxxn9gWBCC97gd4',
      'ngrok-skip-browser-warning': 'true'
    }
   );

  constructor(private http: HttpClient) { }
  deleteEmployeebackend(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
