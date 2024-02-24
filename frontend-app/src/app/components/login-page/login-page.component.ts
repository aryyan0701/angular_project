import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) {}

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    this.authservice.getUserByEmail(email as string).subscribe(
      (response) => {
      if (response.length > 0 && response[0].password === password) {
        sessionStorage.setItem('email', email as string)
        this.router.navigate(['/home'])
      }else{
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Email or password is wrong',
        })
      }
    },
      error=>{
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        })

      }
    )
  }
}
