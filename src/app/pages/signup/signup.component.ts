import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface SignupForm {
  name: FormControl,
  username: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignUpComponent {
  signupForm!: FormGroup<SignupForm>;
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService,
    private http: HttpClient
  ){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, ]),
      username: new FormControl('', [Validators.required, ]),
      password: new FormControl('', [Validators.required, ]),
      passwordConfirm: new FormControl('', [Validators.required, ]),
    })
  }

  submit(){
    this.http.post('https://2379-2c0f-f698-4095-2d56-dda6-fb51-d15a-db75.ngrok-free.app/auth/registre', {"email":this.username,
"username":this.username, "password":this.password})
      .subscribe((resp:any)=>{console.log('register succesfully',resp);})
   /* this.loginService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })*/
  }

  navigate(){
    this.router.navigate(["login"])
  }
}
