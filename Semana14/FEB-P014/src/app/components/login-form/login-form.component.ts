import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {

  loginFormGroup!: FormGroup;

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
    if(this.loginFormGroup.valid) {
      this.authService.login(this.loginFormGroup.get('Email')?.value, this.loginFormGroup.get('Password')?.value).subscribe(response => {
        console.log(response);
        if(response.registered) { this.router.navigate(['home']) };
      })
    }
  }

  signUpUser() {
    const email = this.loginFormGroup.get('Email')?.value;
    const password = this.loginFormGroup.get('Password')?.value;
    if(this.loginFormGroup.valid) {
      this.authService.signupUser(email, password).subscribe(response => {
        console.log(response);
      })
    }
  }

}
