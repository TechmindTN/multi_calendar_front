import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileSharedDataService } from '../../shared/profile_shared';


interface LoginForm {
  username: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;
  username: string = '';
  password: string = '';
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService,
    private http: HttpClient,
    private sharedDataService: ProfileSharedDataService,

  ){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, ]),
      password: new FormControl('', [Validators.required, ])
    })
  }
  

  submit(){
    console.log('login start');
    this.http.post('https://2021-2c0f-f698-4111-e4a3-6df1-6420-dbb7-d639.ngrok-free.app/auth/login', {"username":this.username,
      "password":this.password})
      .subscribe((resp:any)=>{console.log('login succesfully',resp);
        if(resp.user.role_id==3){
          // this.sharedDataService.storeProfile({employee:resp.employee})
        }
        else if(resp.user.role_id==1){
          this.sharedDataService.storeProfile(resp.company)
        }
        
        this.navigate();})
    
    // this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
    //   next: () => this.toastService.success("Login feito com sucesso!"),
    //   error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    // })
  }

  navigate(){
    // this.router.navigate(["side"])
    this.router.navigate(["dashboard"])
  }
}
