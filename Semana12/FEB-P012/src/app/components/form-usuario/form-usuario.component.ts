import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.css'
})
export class FormUsuarioComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.maxLength(12), this.noSpacesValidator.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), this.passwordValidator.bind(this)]),
      'completeName': new FormControl(null, [Validators.required, this.completeNameValidator.bind(this)]),
      'phoneNumber': new FormControl(null, [Validators.required, this.phoneValidator.bind(this)]),
      'address': new FormControl(null, Validators.required),
      'birthDate': new FormControl(null, [Validators.required, this.dateValidator.bind(this), this.ageValidator.bind(this)]),
      'gender': new FormControl(null, Validators.required),
      'profession': new FormControl(null, Validators.required)
    });
  }

  noSpacesValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.includes(' ')) {
      return { spaces: true };
    }
    return null;
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    let hasUpperCase = /[A-Z]/.test(value);
    let hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);

    if (hasUpperCase && hasSpecialChar) {
      return null;
    } else {
      return { passwordStrength: true };
    }
  }

  completeNameValidator(control: AbstractControl): ValidationErrors | null {
    if(control.value){
      const name = control.value.trim().split(" ");
      if(name.length > 1) {
        return null;
      }
    }
    return { notCompleteName: true };
  }

  phoneValidator(control: AbstractControl): ValidationErrors | null {
    const phoneRegex = /^\(\d{2}\) (?:9\d{4}|\d{4})-\d{4}$/;
    const validNumber = phoneRegex.test(control.value);

    return validNumber ? null : { invalidPhoneNumber: true };
  }

  dateValidator(control: AbstractControl): ValidationErrors | null {
    const date = new Date(control.value);
    const isValid = !isNaN(date.getTime());

    return isValid ? null : { invalidDate: true };
  }

  ageValidator(control: AbstractControl): ValidationErrors | null {
    const birthDate = new Date(control.value);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return age >= 18 ? null : { minor: true };
  }

  onSubmit() {
    if(this.form.valid) {
      const formValues = this.form.value;
      const json = JSON.stringify(formValues);
      console.log(json);
    } else {
      console.log('Formulário inválido', this.form.errors);
    }
  }
}
