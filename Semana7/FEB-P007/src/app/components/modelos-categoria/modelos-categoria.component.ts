import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modelos-categoria',
  templateUrl: './modelos-categoria.component.html',
  styleUrl: './modelos-categoria.component.css'
})
export class ModelosCategoriaComponent {
  @Input() nomeCategoria: string = '';
  @Input() json: any;
  modelos = [];
}
