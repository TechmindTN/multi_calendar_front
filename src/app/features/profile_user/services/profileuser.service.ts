import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileuserService {

  private apiUrl = 'https://5e80-2c0f-f698-4095-45ad-fdc1-531f-e92-19e0.ngrok-free.app/user/1/'; //Api Url
  headers = new HttpHeaders(
    {
      'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJjaGFpbWEiLCJpYXQiOjE3MzE0MTI3ODksImV4cCI6MTczMTQxNjM4OX0.SNor9JOOCzIXaFFSk0rof6-QJcXosNn0OuV22st72zU',
      'ngrok-skip-browser-warning': 'true'
    }
   );
  constructor(private http: HttpClient) { }
  getProfile(): Observable<any> {
    let res= this.http.get<any>(this.apiUrl,{headers:this.headers});
    console.log(res)
    return res;
  }
}
