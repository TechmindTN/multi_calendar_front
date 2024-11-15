import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { provideStore } from '@ngrx/store';
// import { variableReducer } from './state/reducers/variable.reducer';
// import { VariableEffects } from './state/effects/variable.effects';
// import { provideEffects } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,SidebarComponent, MatSidenavModule,StoreModule],
  templateUrl: './app.component.html',
  // providers:[
  //   provideStore({ variable: variableReducer }), // Provide the store
  //       // provideEffects([VariableEffects]) // Provide any effects
  // ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login-page';
  constructor(private http: HttpClient){}
  public fetchdetails(){
    console.log('login start');
//     this.http.post('https://2379-2c0f-f698-4095-2d56-dda6-fb51-d15a-db75.ngrok-free.app/auth/login', {"username":"wael",
// "password":"aaaa"})
// .subscribe((resp:any)=>{console.log('login succesfully',resp);})

// this.http.post('https://2379-2c0f-f698-4095-2d56-dda6-fb51-d15a-db75.ngrok-free.app/auth/register', {"email":"admin@jyjy.k",
// "username":"wael",
// "password":"aaaa"}).subscribe((resp:any)=>{console.log('register succesfully',resp);})
  }
}
