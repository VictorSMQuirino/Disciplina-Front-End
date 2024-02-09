import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercicio2';

  public form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      'estacao': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'localizacao': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {

  }
}
