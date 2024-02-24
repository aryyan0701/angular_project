import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import { passwordmatchValidator } from 'src/app/shared/password-match.directive';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern(/^\w+\s\w+$/gm)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    }, { validators: passwordmatchValidator });
  }

  get fullname() {
    return this.signupForm.controls['fullname'];
  }
  get email() {
    return this.signupForm.controls['email'];
  }
  get password() {
    return this.signupForm.controls['password'];
  }
  get confirmpassword() {
    return this.signupForm.controls['confirmpassword'];
  }

  submitDeatils() {
    const postData = { ...this.signupForm.value };
    delete postData.confirmpassword;
    this.authservice.registerUser(postData as User).subscribe(
      (response) => {
        console.log(response);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Register Successfully',
        });
        this.router.navigate(['login']);
      },
      (error) =>  this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Something went wrong',
      })
    );
  }   
}
