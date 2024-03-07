import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {

  loginFormGroup!: FormGroup;
  loginInvalido: boolean = true;
  formSubmetido = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      Email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      Password: ['', Validators.required]
    });
  }

  submitLoginForm() {
    this.formSubmetido = true;
    if (this.loginFormGroup.valid) {
      this.authService.login(this.loginFormGroup.get('Email')?.value, this.loginFormGroup.get('Password')?.value).subscribe(response => {
        console.log(response);
        if (this.authService.isAutenticated) {
          this.loginInvalido = false;
          this.router.navigate(['home']);
        } else {
          this.loginInvalido = true;
        }
      })
    }
  }

  signUpUser() {
    const email = this.loginFormGroup.get('Email')?.value;
    const password = this.loginFormGroup.get('Password')?.value;
    if (this.loginFormGroup.valid) {
      this.authService.signupUser(email, password).subscribe(response => {
        console.log(response);
      })
    }
  }

}
