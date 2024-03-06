import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {

  loginFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

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
      this.authService.login(this.loginFormGroup.get('Email')?.value, this.loginFormGroup.get('Password')?.value);
    }
  }

  signUpUser() {
    if(this.loginFormGroup.valid) {
      this.authService.signupUser(this.loginFormGroup.get('Email')?.value, this.loginFormGroup.get('Password')?.value);
    }
  }

}
