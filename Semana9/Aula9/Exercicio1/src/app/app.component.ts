import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercicio1';

  constructor(private routes: Router) {}

  navegarPara(rota: string) {
    this.routes.navigate([rota]);
  }
}
